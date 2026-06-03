export const enquiryTypes = [
  "demo",
  "contact",
  "early_access",
  "partnership"
] as const;

export const productInterests = [
  "operavault",
  "cantoria",
  "steward_ledger",
  "general"
] as const;

export const enquiryStatuses = [
  "new",
  "contacted",
  "demo_scheduled",
  "demo_completed",
  "proposal_sent",
  "pilot_discussed",
  "closed",
  "spam"
] as const;

export type EnquiryType = (typeof enquiryTypes)[number];
export type RequestType = EnquiryType;
export type ProductInterest = (typeof productInterests)[number];
export type ProductSlug = ProductInterest;
export type EnquiryStatus = (typeof enquiryStatuses)[number];

export type EnquirySubmission = {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone?: string;
  location?: string;
  productSlug: ProductSlug;
  requestType: RequestType;
  message: string;
  preferredDemoTime?: string;
  sourcePage?: string;
  consentToContact: boolean;
  website?: string;
};

export type EnquiryRecord = EnquirySubmission & {
  id: string;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
};

export type EnquiryNote = {
  id: string;
  enquiryId: string;
  note: string;
  createdByUserId?: string;
  createdAt: string;
};

export type EnquiryEvent = {
  id: string;
  enquiryId: string;
  eventType: string;
  oldStatus?: EnquiryStatus;
  newStatus?: EnquiryStatus;
  createdByUserId?: string;
  metadata: Record<string, unknown>;
  createdAt: string;
};

export type EnquiryDetail = EnquiryRecord & {
  notes: EnquiryNote[];
  events: EnquiryEvent[];
};

export type EnquiryStatusUpdate = {
  enquiryId: string;
  status: EnquiryStatus;
  createdByUserId?: string;
};

export type EnquiryNoteInput = {
  enquiryId: string;
  note: string;
  createdByUserId?: string;
};

export type EnquiryEventInput = {
  enquiryId: string;
  eventType: string;
  oldStatus?: EnquiryStatus;
  newStatus?: EnquiryStatus;
  createdByUserId?: string;
  metadata?: Record<string, unknown>;
};
