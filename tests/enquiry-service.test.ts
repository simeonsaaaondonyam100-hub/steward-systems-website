import { describe, expect, it } from "vitest";

import type { EnquirySubmission } from "@/modules/enquiries/types";
import { createInMemoryEnquiriesRepository } from "@/server/repositories/enquiries/in-memory-enquiries-repository";
import { createEnquiryService } from "@/server/services/enquiries/enquiry-service";

const submission: EnquirySubmission = {
  name: "Grace Hopper",
  organisation: "Steward Systems Test",
  role: "Operations Lead",
  email: "grace@example.com",
  phone: "+234000000001",
  location: "Lagos",
  productSlug: "cantoria",
  requestType: "early_access",
  message: "We want to test Cantoria for SATB rehearsal preparation.",
  preferredDemoTime: "Friday afternoon",
  sourcePage: "/contact",
  consentToContact: true
};

describe("enquiry service", () => {
  it("creates an enquiry and records an audit event", async () => {
    const repository = createInMemoryEnquiriesRepository();
    const service = createEnquiryService(repository);

    const result = await service.submit(submission);
    const detail = await service.getEnquiryDetail(result.enquiryId);

    expect(result.status).toBe("accepted");
    expect(detail).toMatchObject({
      id: result.enquiryId,
      productSlug: "cantoria",
      requestType: "early_access",
      status: "new"
    });
    expect(detail?.events).toEqual([
      expect.objectContaining({
        eventType: "enquiry_created",
        newStatus: "new"
      })
    ]);
  });

  it("updates enquiry status and creates a status_changed event", async () => {
    const repository = createInMemoryEnquiriesRepository();
    const service = createEnquiryService(repository);

    const result = await service.submit(submission);
    const updated = await service.updateEnquiryStatus({
      enquiryId: result.enquiryId,
      status: "contacted",
      createdByUserId: "admin-test"
    });
    const detail = await service.getEnquiryDetail(result.enquiryId);

    expect(updated.status).toBe("contacted");
    expect(detail?.events).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          eventType: "status_changed",
          oldStatus: "new",
          newStatus: "contacted",
          createdByUserId: "admin-test"
        })
      ])
    );
  });

  it("adds a note and records note_added event metadata", async () => {
    const repository = createInMemoryEnquiriesRepository();
    const service = createEnquiryService(repository);

    const result = await service.submit(submission);
    const note = await service.addEnquiryNote({
      enquiryId: result.enquiryId,
      note: "Prospect asked for a Friday demo.",
      createdByUserId: "admin-test"
    });
    const detail = await service.getEnquiryDetail(result.enquiryId);

    expect(note.note).toBe("Prospect asked for a Friday demo.");
    expect(detail?.notes).toHaveLength(1);
    expect(detail?.events).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          eventType: "note_added",
          metadata: {
            noteId: note.id
          }
        })
      ])
    );
  });

  it("creates a standalone audit event", async () => {
    const repository = createInMemoryEnquiriesRepository();
    const service = createEnquiryService(repository);

    const result = await service.submit(submission);
    const event = await service.createEnquiryEvent({
      enquiryId: result.enquiryId,
      eventType: "demo_scheduled",
      metadata: {
        channel: "manual"
      }
    });

    expect(event).toMatchObject({
      enquiryId: result.enquiryId,
      eventType: "demo_scheduled",
      metadata: {
        channel: "manual"
      }
    });
  });
});
