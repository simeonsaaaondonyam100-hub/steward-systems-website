import assert from "node:assert/strict";
import test from "node:test";

import { createInMemoryEnquiriesRepository } from "../server/repositories/enquiries/in-memory-enquiries-repository";
import { createDemoRequestService } from "../server/services/demo-requests/demo-request-service";
import type { DemoRequestSubmission } from "../modules/demo-requests/types";

const submission: DemoRequestSubmission = {
  schoolName: "Steward Test School",
  contactPerson: "Ada Lovelace",
  role: "Director",
  email: "ada@example.com",
  phone: "+234000000000",
  location: "Lagos",
  productSlug: "operavault",
  preferredPlan: "Premium",
  preferredDemoTime: "2026-06-10T10:30",
  interestAreas: ["Academics and results", "Reports and analytics"],
  message: "We want to review results, reporting, and leadership workflows.",
  sourcePage: "/request-demo",
  consentToContact: true
};

test("demo request service submits and lists enriched demo requests", async () => {
  const repository = createInMemoryEnquiriesRepository();
  const service = createDemoRequestService(repository);

  const result = await service.submit(submission);
  const requests = await service.listDemoRequests();

  assert.equal(result.status, "accepted");
  assert.equal(requests.length, 1);
  assert.equal(requests[0].id, result.requestId);
  assert.equal(requests[0].schoolName, "Steward Test School");
  assert.equal(requests[0].contactPerson, "Ada Lovelace");
  assert.equal(requests[0].preferredPlan, "Premium");
  assert.deepEqual(requests[0].interestAreas, [
    "Academics and results",
    "Reports and analytics"
  ]);
  assert.equal(
    requests[0].message,
    "We want to review results, reporting, and leadership workflows."
  );
});

test("demo request detail includes audit events after status updates", async () => {
  const repository = createInMemoryEnquiriesRepository();
  const service = createDemoRequestService(repository);

  const result = await service.submit(submission);
  await service.updateDemoRequestStatus({
    requestId: result.requestId,
    status: "contacted",
    createdByUserId: "admin-test"
  });
  await service.updateDemoRequestStatus({
    requestId: result.requestId,
    status: "spam",
    createdByUserId: "admin-test"
  });

  const detail = await service.getDemoRequestDetail(result.requestId);

  assert.ok(detail);
  assert.equal(detail.statusLabel, "Rejected");
  assert.deepEqual(
    detail.auditEvents.map((event) => event.eventType),
    ["enquiry_created", "status_changed", "status_changed"]
  );
  assert.deepEqual(detail.auditEvents.at(-1), {
    id: detail.auditEvents.at(-1)?.id,
    eventType: "status_changed",
    oldStatus: "contacted",
    newStatus: "spam",
    createdAt: detail.auditEvents.at(-1)?.createdAt
  });
});

