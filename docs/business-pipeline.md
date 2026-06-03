# Business Pipeline

## Purpose

The Steward Systems Core business pipeline tracks company-level interest in Steward Systems and its product lines. It supports enquiry capture, admin review, follow-up, status tracking, notes, audit events, and future email or social follow-up.

The pipeline does not store operational records owned by Operavault, Cantoria, or Steward Ledger.

## Enquiry Types

Allowed enquiry types:

- demo
- contact
- early_access
- partnership

## Product Interest

Allowed product interest values:

- operavault
- cantoria
- steward_ledger
- general

Use `general` when the enquiry is about Steward Systems as a company or when the product interest is unknown.

## Status Flow

Allowed statuses:

- new
- contacted
- demo_scheduled
- demo_completed
- proposal_sent
- pilot_discussed
- closed
- spam

The normal flow is:

1. new
2. contacted
3. demo_scheduled
4. demo_completed
5. proposal_sent
6. pilot_discussed
7. closed

Spam or irrelevant messages may move to `spam` from any stage.

## Admin Workflow

Admins should be able to:

- view new enquiries
- filter by product interest, enquiry type, status, and date
- open an enquiry detail view
- update status
- assign or record an owner
- add internal notes
- review previous events
- mark irrelevant messages as spam
- prepare follow-up outside the system until email/social integrations are added

Admin workflow should remain focused on company-level business development. It should not expose or mutate product operational data.

## Notes, Events, And Audit Trail

Notes are human-authored admin comments attached to an enquiry. They should capture useful context such as call outcomes, demo preferences, decision makers, timing, objections, and next steps.

Events are structured audit records. They should be created for important lifecycle changes such as:

- enquiry created
- status changed
- owner assigned
- note added
- demo scheduled
- proposal sent
- enquiry closed
- enquiry marked as spam

Audit events should preserve who made the change, when it happened, the previous value when relevant, and the next value when relevant.

## Eventual Email And Social Follow-Up

Later phases may add email and social follow-up for:

- enquiry acknowledgement
- demo scheduling
- reminders
- post-demo follow-up
- proposal follow-up
- newsletter opt-in
- product launch updates
- campaign attribution

These integrations should attach activity back to the Core enquiry timeline without importing product operational data into Core.
