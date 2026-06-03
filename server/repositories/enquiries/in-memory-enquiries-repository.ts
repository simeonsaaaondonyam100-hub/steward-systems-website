import type {
  EnquiryEvent,
  EnquiryNote,
  EnquiryRecord,
  EnquirySubmission
} from "@/modules/enquiries/types";
import {
  assertValidStatusTransition,
  type EnquiriesRepository
} from "./enquiries-repository";

function createId(): string {
  return `local_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

/**
 * Temporary local-only repository for wiring and tests.
 * This is not production persistence and must be replaced with a Supabase-backed
 * repository before live enquiry submissions are enabled.
 */
export function createInMemoryEnquiriesRepository(): EnquiriesRepository {
  const records = new Map<string, EnquiryRecord>();
  const notes = new Map<string, EnquiryNote[]>();
  const events = new Map<string, EnquiryEvent[]>();

  return {
    async create(input: EnquirySubmission) {
      const now = new Date().toISOString();
      const record: EnquiryRecord = {
        ...input,
        id: createId(),
        status: "new",
        createdAt: now,
        updatedAt: now
      };

      records.set(record.id, record);
      return record;
    },

    async list() {
      return Array.from(records.values()).sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
      );
    },

    async getById(enquiryId: string) {
      const record = records.get(enquiryId);

      if (!record) {
        return null;
      }

      return {
        ...record,
        notes: notes.get(enquiryId) ?? [],
        events: events.get(enquiryId) ?? []
      };
    },

    async updateStatus(input) {
      const record = records.get(input.enquiryId);

      if (!record) {
        throw new Error("Enquiry not found.");
      }

      assertValidStatusTransition(record.status, input.status);

      const updatedRecord: EnquiryRecord = {
        ...record,
        status: input.status,
        updatedAt: new Date().toISOString()
      };

      records.set(updatedRecord.id, updatedRecord);
      return updatedRecord;
    },

    async addNote(input) {
      if (!records.has(input.enquiryId)) {
        throw new Error("Enquiry not found.");
      }

      const note: EnquiryNote = {
        id: createId(),
        enquiryId: input.enquiryId,
        note: input.note,
        createdByUserId: input.createdByUserId,
        createdAt: new Date().toISOString()
      };

      notes.set(input.enquiryId, [...(notes.get(input.enquiryId) ?? []), note]);
      return note;
    },

    async createEvent(input) {
      if (!records.has(input.enquiryId)) {
        throw new Error("Enquiry not found.");
      }

      const event: EnquiryEvent = {
        id: createId(),
        enquiryId: input.enquiryId,
        eventType: input.eventType,
        oldStatus: input.oldStatus,
        newStatus: input.newStatus,
        createdByUserId: input.createdByUserId,
        metadata: input.metadata ?? {},
        createdAt: new Date().toISOString()
      };

      events.set(input.enquiryId, [
        ...(events.get(input.enquiryId) ?? []),
        event
      ]);
      return event;
    }
  };
}
