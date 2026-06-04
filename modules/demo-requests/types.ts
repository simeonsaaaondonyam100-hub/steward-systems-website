import type {
  EnquiryEvent,
  EnquiryStatus,
  ProductInterest
} from "@/modules/enquiries/types";

export const demoRequestPlans = [
  "Not sure yet",
  "Basic",
  "Standard",
  "Premium",
  "Enterprise",
  "Founder Institutional Partner"
] as const;

export const demoRequestInterestAreas = [
  "Academics and results",
  "Attendance",
  "Admissions",
  "HR and staff workflows",
  "Accounts and finance",
  "Procurement",
  "Reports and analytics",
  "Workload and appraisal",
  "Department workspaces",
  "Notifications and audit"
] as const;

export const demoRequestStatusActions = [
  { label: "Mark as New", status: "new" },
  { label: "Mark as Contacted", status: "contacted" },
  { label: "Mark as Demo Scheduled", status: "demo_scheduled" },
  { label: "Mark as Closed", status: "closed" },
  { label: "Mark as Rejected", status: "spam" }
] as const satisfies ReadonlyArray<{
  label: string;
  status: EnquiryStatus;
}>;

export const demoRequestStatusLabels: Record<EnquiryStatus, string> = {
  new: "New",
  contacted: "Contacted",
  demo_scheduled: "Demo Scheduled",
  demo_completed: "Demo Completed",
  proposal_sent: "Proposal Sent",
  pilot_discussed: "Pilot Discussed",
  closed: "Closed",
  spam: "Rejected"
};

export type DemoRequestPlan = (typeof demoRequestPlans)[number];
export type DemoRequestInterestArea =
  (typeof demoRequestInterestAreas)[number];

export type DemoRequestSubmission = {
  schoolName: string;
  contactPerson: string;
  role: string;
  email: string;
  phone: string;
  location?: string;
  productSlug: ProductInterest;
  preferredPlan: DemoRequestPlan;
  preferredDemoTime: string;
  interestAreas: DemoRequestInterestArea[];
  message: string;
  sourcePage?: string;
  consentToContact: boolean;
  website?: string;
};

export type DemoRequestSummary = {
  id: string;
  schoolName: string;
  contactPerson: string;
  role: string;
  email: string;
  phone: string;
  location?: string;
  productSlug: ProductInterest;
  preferredPlan: string;
  preferredDemoTime: string;
  interestAreas: string[];
  message: string;
  status: EnquiryStatus;
  statusLabel: string;
  submittedAt: string;
  updatedAt: string;
};

export type DemoRequestDetail = DemoRequestSummary & {
  sourcePage?: string;
  auditEvents: Pick<
    EnquiryEvent,
    "id" | "eventType" | "oldStatus" | "newStatus" | "createdAt"
  >[];
};
