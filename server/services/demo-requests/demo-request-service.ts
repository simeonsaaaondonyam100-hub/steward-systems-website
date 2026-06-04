import type { EnquiryStatus } from "@/modules/enquiries/types";
import {
  formatDemoRequestMessage,
  parseAdditionalNotes,
  parseInterestAreas,
  parsePreferredPlan
} from "@/modules/demo-requests/formatting";
import {
  demoRequestStatusLabels,
  type DemoRequestDetail,
  type DemoRequestSubmission,
  type DemoRequestSummary
} from "@/modules/demo-requests/types";
import type { EnquiriesRepository } from "@/server/repositories/enquiries/enquiries-repository";
import {
  createEnquiryService,
  type EnquiryService
} from "@/server/services/enquiries/enquiry-service";

export type DemoRequestService = {
  submit(input: DemoRequestSubmission): Promise<{
    requestId: string;
    status: "accepted";
  }>;
  listDemoRequests(): Promise<DemoRequestSummary[]>;
  getDemoRequestDetail(requestId: string): Promise<DemoRequestDetail | null>;
  updateDemoRequestStatus(input: {
    requestId: string;
    status: EnquiryStatus;
    createdByUserId?: string;
  }): Promise<DemoRequestSummary>;
};

function toDemoRequestSummary(record: {
  id: string;
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone?: string;
  location?: string;
  productSlug: DemoRequestSubmission["productSlug"];
  preferredDemoTime?: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
}): DemoRequestSummary {
  return {
    id: record.id,
    schoolName: record.organisation,
    contactPerson: record.name,
    role: record.role,
    email: record.email,
    phone: record.phone ?? "Not provided",
    location: record.location,
    productSlug: record.productSlug,
    preferredPlan: parsePreferredPlan(record.message),
    preferredDemoTime: record.preferredDemoTime ?? "Not specified",
    interestAreas: parseInterestAreas(record.message),
    message: parseAdditionalNotes(record.message),
    status: record.status,
    statusLabel: demoRequestStatusLabels[record.status],
    submittedAt: record.createdAt,
    updatedAt: record.updatedAt
  };
}

export function createDemoRequestService(
  repository: EnquiriesRepository
): DemoRequestService {
  const enquiryService: EnquiryService = createEnquiryService(repository);

  return {
    async submit(input) {
      const result = await enquiryService.submit({
        name: input.contactPerson,
        organisation: input.schoolName,
        role: input.role,
        email: input.email,
        phone: input.phone,
        location: input.location,
        productSlug: input.productSlug,
        requestType: "demo",
        preferredDemoTime: input.preferredDemoTime,
        message: formatDemoRequestMessage(input),
        sourcePage: input.sourcePage,
        consentToContact: input.consentToContact
      });

      return {
        requestId: result.enquiryId,
        status: result.status
      };
    },

    async listDemoRequests() {
      const enquiries = await enquiryService.listEnquiries();

      return enquiries
        .filter((enquiry) => enquiry.requestType === "demo")
        .map(toDemoRequestSummary);
    },

    async getDemoRequestDetail(requestId) {
      const detail = await enquiryService.getEnquiryDetail(requestId);

      if (!detail || detail.requestType !== "demo") {
        return null;
      }

      return {
        ...toDemoRequestSummary(detail),
        sourcePage: detail.sourcePage,
        auditEvents: detail.events.map((event) => ({
          id: event.id,
          eventType: event.eventType,
          oldStatus: event.oldStatus,
          newStatus: event.newStatus,
          createdAt: event.createdAt
        }))
      };
    },

    async updateDemoRequestStatus(input) {
      const updated = await enquiryService.updateEnquiryStatus({
        enquiryId: input.requestId,
        status: input.status,
        createdByUserId: input.createdByUserId
      });

      return toDemoRequestSummary(updated);
    }
  };
}

