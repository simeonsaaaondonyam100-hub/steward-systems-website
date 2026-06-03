import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";

import type {
  EnquiryDetail,
  EnquiryEvent,
  EnquiryEventInput,
  EnquiryNote,
  EnquiryNoteInput,
  EnquiryRecord,
  EnquiryStatusUpdate,
  EnquirySubmission
} from "@/modules/enquiries/types";
import { createSupabaseServiceClient } from "@/server/supabase/core-client";
import {
  assertValidStatusTransition,
  type EnquiriesRepository
} from "./enquiries-repository";

type EnquiryRow = {
  id: string;
  product_slug: EnquiryRecord["productSlug"];
  request_type: EnquiryRecord["requestType"];
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone: string | null;
  location: string | null;
  message: string;
  preferred_demo_time: string | null;
  status: EnquiryRecord["status"];
  source_page: string | null;
  created_at: string;
  updated_at: string;
};

type NoteRow = {
  id: string;
  enquiry_id: string;
  note: string;
  created_by_user_id: string | null;
  created_at: string;
};

type EventRow = {
  id: string;
  enquiry_id: string;
  event_type: string;
  old_status: EnquiryEvent["oldStatus"] | null;
  new_status: EnquiryEvent["newStatus"] | null;
  created_by_user_id: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

function mapEnquiry(row: EnquiryRow): EnquiryRecord {
  return {
    id: row.id,
    productSlug: row.product_slug,
    requestType: row.request_type,
    name: row.name,
    organisation: row.organisation,
    role: row.role,
    email: row.email,
    phone: row.phone ?? undefined,
    location: row.location ?? undefined,
    message: row.message,
    preferredDemoTime: row.preferred_demo_time ?? undefined,
    status: row.status,
    sourcePage: row.source_page ?? undefined,
    consentToContact: true,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function mapNote(row: NoteRow): EnquiryNote {
  return {
    id: row.id,
    enquiryId: row.enquiry_id,
    note: row.note,
    createdByUserId: row.created_by_user_id ?? undefined,
    createdAt: row.created_at
  };
}

function mapEvent(row: EventRow): EnquiryEvent {
  return {
    id: row.id,
    enquiryId: row.enquiry_id,
    eventType: row.event_type,
    oldStatus: row.old_status ?? undefined,
    newStatus: row.new_status ?? undefined,
    createdByUserId: row.created_by_user_id ?? undefined,
    metadata: row.metadata ?? {},
    createdAt: row.created_at
  };
}

function toInsertPayload(input: EnquirySubmission) {
  return {
    product_slug: input.productSlug,
    request_type: input.requestType,
    name: input.name,
    organisation: input.organisation,
    role: input.role,
    email: input.email,
    phone: input.phone ?? null,
    location: input.location ?? null,
    message: input.message,
    preferred_demo_time: input.preferredDemoTime ?? null,
    source_page: input.sourcePage ?? null
  };
}

function throwIfError(error: { message: string } | null, fallback: string) {
  if (error) {
    throw new Error(`${fallback}: ${error.message}`);
  }
}

export function createSupabaseEnquiriesRepository(
  client: SupabaseClient = createSupabaseServiceClient()
): EnquiriesRepository {
  return {
    async create(input: EnquirySubmission) {
      const { data, error } = await client
        .from("core_product_enquiries")
        .insert(toInsertPayload(input))
        .select("*")
        .single<EnquiryRow>();

      throwIfError(error, "Could not create enquiry");

      if (!data) {
        throw new Error("Could not create enquiry: no row returned.");
      }

      return mapEnquiry(data);
    },

    async list() {
      const { data, error } = await client
        .from("core_product_enquiries")
        .select("*")
        .order("created_at", { ascending: false })
        .returns<EnquiryRow[]>();

      throwIfError(error, "Could not list enquiries");
      return (data ?? []).map(mapEnquiry);
    },

    async getById(enquiryId: string): Promise<EnquiryDetail | null> {
      const { data: enquiry, error: enquiryError } = await client
        .from("core_product_enquiries")
        .select("*")
        .eq("id", enquiryId)
        .maybeSingle<EnquiryRow>();

      throwIfError(enquiryError, "Could not fetch enquiry");

      if (!enquiry) {
        return null;
      }

      const [{ data: noteRows, error: notesError }, { data: eventRows, error: eventsError }] =
        await Promise.all([
          client
            .from("core_enquiry_notes")
            .select("*")
            .eq("enquiry_id", enquiryId)
            .order("created_at", { ascending: true })
            .returns<NoteRow[]>(),
          client
            .from("core_enquiry_events")
            .select("*")
            .eq("enquiry_id", enquiryId)
            .order("created_at", { ascending: true })
            .returns<EventRow[]>()
        ]);

      throwIfError(notesError, "Could not fetch enquiry notes");
      throwIfError(eventsError, "Could not fetch enquiry events");

      return {
        ...mapEnquiry(enquiry),
        notes: (noteRows ?? []).map(mapNote),
        events: (eventRows ?? []).map(mapEvent)
      };
    },

    async updateStatus(input: EnquiryStatusUpdate) {
      const existing = await this.getById(input.enquiryId);

      if (!existing) {
        throw new Error("Enquiry not found.");
      }

      assertValidStatusTransition(existing.status, input.status);

      const { data, error } = await client
        .from("core_product_enquiries")
        .update({ status: input.status })
        .eq("id", input.enquiryId)
        .select("*")
        .single<EnquiryRow>();

      throwIfError(error, "Could not update enquiry status");

      if (!data) {
        throw new Error("Could not update enquiry status: no row returned.");
      }

      return mapEnquiry(data);
    },

    async addNote(input: EnquiryNoteInput) {
      const { data, error } = await client
        .from("core_enquiry_notes")
        .insert({
          enquiry_id: input.enquiryId,
          note: input.note,
          created_by_user_id: input.createdByUserId ?? null
        })
        .select("*")
        .single<NoteRow>();

      throwIfError(error, "Could not add enquiry note");

      if (!data) {
        throw new Error("Could not add enquiry note: no row returned.");
      }

      return mapNote(data);
    },

    async createEvent(input: EnquiryEventInput) {
      const { data, error } = await client
        .from("core_enquiry_events")
        .insert({
          enquiry_id: input.enquiryId,
          event_type: input.eventType,
          old_status: input.oldStatus ?? null,
          new_status: input.newStatus ?? null,
          created_by_user_id: input.createdByUserId ?? null,
          metadata: input.metadata ?? {}
        })
        .select("*")
        .single<EventRow>();

      throwIfError(error, "Could not create enquiry event");

      if (!data) {
        throw new Error("Could not create enquiry event: no row returned.");
      }

      return mapEvent(data);
    }
  };
}
