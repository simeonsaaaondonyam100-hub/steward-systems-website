import type {
  EnquiryEventInput,
  EnquiryNoteInput,
  EnquiryStatusUpdate,
  EnquirySubmission
} from "@/modules/enquiries/types";
import type { EnquiriesRepository } from "@/server/repositories/enquiries/enquiries-repository";

export type EnquiryService = {
  submit(input: EnquirySubmission): Promise<{
    enquiryId: string;
    status: "accepted";
  }>;
  listEnquiries(): ReturnType<EnquiriesRepository["list"]>;
  getEnquiryDetail(
    enquiryId: string
  ): ReturnType<EnquiriesRepository["getById"]>;
  updateEnquiryStatus(
    input: EnquiryStatusUpdate
  ): ReturnType<EnquiriesRepository["updateStatus"]>;
  addEnquiryNote(
    input: EnquiryNoteInput
  ): ReturnType<EnquiriesRepository["addNote"]>;
  createEnquiryEvent(
    input: EnquiryEventInput
  ): ReturnType<EnquiriesRepository["createEvent"]>;
};

export function createEnquiryService(
  repository: EnquiriesRepository
): EnquiryService {
  return {
    async submit(input) {
      const enquiry = await repository.create(input);
      await repository.createEvent({
        enquiryId: enquiry.id,
        eventType: "enquiry_created",
        newStatus: enquiry.status,
        metadata: {
          productSlug: enquiry.productSlug,
          requestType: enquiry.requestType,
          sourcePage: enquiry.sourcePage
        }
      });

      return {
        enquiryId: enquiry.id,
        status: "accepted"
      };
    },

    async listEnquiries() {
      return repository.list();
    },

    async getEnquiryDetail(enquiryId) {
      return repository.getById(enquiryId);
    },

    async updateEnquiryStatus(input) {
      const existing = await repository.getById(input.enquiryId);

      if (!existing) {
        throw new Error("Enquiry not found.");
      }

      const updated = await repository.updateStatus(input);

      await repository.createEvent({
        enquiryId: input.enquiryId,
        eventType: "status_changed",
        oldStatus: existing.status,
        newStatus: updated.status,
        createdByUserId: input.createdByUserId,
        metadata: {}
      });

      return updated;
    },

    async addEnquiryNote(input) {
      const note = await repository.addNote(input);

      await repository.createEvent({
        enquiryId: input.enquiryId,
        eventType: "note_added",
        createdByUserId: input.createdByUserId,
        metadata: {
          noteId: note.id
        }
      });

      return note;
    },

    async createEnquiryEvent(input) {
      return repository.createEvent(input);
    }
  };
}
