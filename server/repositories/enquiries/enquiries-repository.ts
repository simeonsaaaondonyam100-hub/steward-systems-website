import type {
  EnquiryDetail,
  EnquiryEvent,
  EnquiryEventInput,
  EnquiryNote,
  EnquiryNoteInput,
  EnquiryRecord,
  EnquiryStatus,
  EnquirySubmission,
  EnquiryStatusUpdate
} from "@/modules/enquiries/types";

export type EnquiriesRepository = {
  create(input: EnquirySubmission): Promise<EnquiryRecord>;
  list(): Promise<EnquiryRecord[]>;
  getById(enquiryId: string): Promise<EnquiryDetail | null>;
  updateStatus(input: EnquiryStatusUpdate): Promise<EnquiryRecord>;
  addNote(input: EnquiryNoteInput): Promise<EnquiryNote>;
  createEvent(input: EnquiryEventInput): Promise<EnquiryEvent>;
};

export function assertValidStatusTransition(
  currentStatus: EnquiryStatus,
  nextStatus: EnquiryStatus
) {
  if (currentStatus === nextStatus) {
    return;
  }

  return;
}
