# Steward Ledger Source Of Truth

## Product Boundary

Steward Ledger is the Steward Systems product line for investment club and cooperative governance and treasury workflows.

Steward Systems Core may publish Steward Ledger public positioning, walkthrough CTAs, product interest routing, and company-level enquiry records. Steward Systems Core must not store Steward Ledger member records, treasury entries, meeting records, resolutions, investment records, approvals, or club/cooperative operational ledgers.

## Public Positioning

Approved current positioning:

Steward Ledger gives member-led finance groups a disciplined way to document decisions, treasury movement, investments, approvals, and governance records.

## Website Implementation Source

Current website data source:

- `modules/products/product-registry.ts`

Reviewed product evidence source:

- Local Triple Twenty-Five / Steward Ledger portal workspace provided by the owner.
- Reviewed on 2026-06-04.
- Evidence reviewed: project guide, README, dashboard navigation, route/component/type structure, and investment smoke-test documentation.
- Authenticated portal spot-check completed on 2026-06-04 using owner-provided access. Evidence reviewed: dashboard/navigation labels and safe workspace headings only.
- Evidence may verify product capability and status only. It must not be used to publish Triple Twenty-Five-specific operational, financial, governance, treasury, member, meeting, resolution, investment, or approval records.

Current public route:

- `/products/steward-ledger`

## Current Public Status

| Area | Public Status | Evidence Level | Public Claim Notes |
| --- | --- | --- | --- |
| Product line | `active_development` | `verified_in_product_repo` | The current product workspace is an active financial governance and treasury portal. The website registry should no longer treat it only as planned. |
| Member registry | `available` | `verified_in_product_repo` | Member registry routes/components and API surfaces are present. Keep public language generic and avoid real member details. |
| Shareholdings and capital structure | `available` | `verified_in_product_repo` | Shareholding and share-register surfaces are present. Do not publish Triple Twenty-Five-specific ownership rules as generic product claims. |
| Contributions and member accounting | `available` | `verified_in_product_repo` | Contribution tracking, payment workspace, ledger, and verification surfaces are present. |
| Bank statements and treasury intake | `active_development` | `verified_in_product_repo` | Bank statement import and treasury intake foundations exist, with refinement around import/reconciliation. |
| Treasury approvals and withdrawals | `available` | `verified_in_product_repo` | Approval, withdrawal, allocation, and reconciliation types/routes/components are present. |
| Requisitions | `available` | `verified_in_product_repo` | Requisition workspace and API routes are present. |
| Investments | `active_development` | `verified_in_product_repo` | Investment routes/components/API and smoke-test documentation exist; present as active development or structured rollout until product owner approves stronger language. |
| Meetings and resolutions | `available` | `verified_in_product_repo` | Governance meeting and resolution routes/components/API surfaces are present. |
| Reports and downloads | `available` | `verified_in_product_repo` | Report categories include treasury, contributions, investments, governance, member shareholding, and audit activity. |
| Analytics and investment intelligence | `active_development` | `verified_in_product_repo` | Analytics and investment-intelligence types/routes exist with advisory-only language. Avoid investment advice claims. |
| Audit logs | `available` | `verified_in_product_repo` | Audit log surfaces are present for traceability. |
| Settings, roles, and permissions | `available` | `verified_in_product_repo` | Settings and permissions/roles surfaces are present. |

## Website Alignment Notes

The current Steward Systems product registry marks Steward Ledger as `planned`. Based on the reviewed local product evidence, the public website should be updated in a later copy pass to describe Steward Ledger as active development with available finance/governance foundations.

Recommended public-safe claims:

- member registry and shareholding visibility
- contributions and payment tracking
- treasury approvals, withdrawals, and reconciliation-aware controls
- requisitions and approval workflows
- meetings, resolutions, and governance traceability
- reports, audit logs, settings, roles, and permissions
- analytics and investment intelligence only as advisory/decision-support features

Keep investments, analytics, and external market indicators carefully worded. The public site should not present Steward Ledger as financial advice, autonomous investment recommendation software, or a replacement for governance approval.

## Authenticated Portal Spot-Check Notes

Observed on 2026-06-04 through the local Triple Twenty-Five portal with owner-provided access:

- Dashboard framing centers on financial and governance operations, financial position, treasury position and liquidity, compliance/allocation signals, governance and pending actions, personal position, recent activity, contribution history, contribution compliance, and ownership allocation overview.
- Navigation confirms members, requisitions, contributions, bank statements, treasury, shareholdings, investments, meetings, resolutions, analytics, reports, audit logs, settings, permissions/roles, and member invitation/onboarding.
- Representative safe headings confirmed meetings workspace and permissions/roles surfaces. Other module routes are still treated as verified through authenticated navigation plus local code evidence where page heading extraction was not exposed through simple scraping.
- No Triple Twenty-Five-specific member, contribution, bank, treasury, investment, meeting, resolution, audit, or governance records may be copied into Steward Systems Core public pages.

## Allowed Public Claims

- Steward Ledger is a Steward Systems product line for investment club and cooperative governance and treasury.
- Visitors may request a walkthrough or register interest through Steward Systems Core.
- Public website copy may describe active finance/governance foundations at a general product level.

## Restricted Claims

Do not claim:

- that any real investment club, cooperative, treasury, member, meeting, or resolution record is represented publicly
- that Steward Systems Core connects to a live Steward Ledger operational backend
- that Triple Twenty-Five-specific contribution, ownership, voting, treasury, investment, or governance rules are generic Steward Ledger product rules
- that analytics or investment intelligence are financial advice or autonomous investment recommendations
- that financial, treasury, or approval workflows are production-ready beyond the verified foundations above

## Review Notes

Initial setup date: 2026-06-04.

Latest source review date: 2026-06-04.

Next recommended review:

- before building a Steward Ledger product tour
- before publishing governance, treasury, meeting, or approval workflow screenshots
- after reviewing the Steward Ledger product repository or owner-confirmed release notes
