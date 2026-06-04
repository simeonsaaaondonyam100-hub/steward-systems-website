# Operavault Source Of Truth

## Product Boundary

Operavault is the Steward Systems product line for institutional and school operations.

Steward Systems Core may publish Operavault product positioning, product-tour pages, public-safe demo pages, pricing overview pages, and request-demo funnels. Steward Systems Core must not store or connect to Operavault tenant operational data.

## Public Positioning

Approved current positioning:

> One operating system for school administration, academic records, parent engagement, compliance evidence, staff workflows, and management visibility.

Use this positioning across the public website unless Steward Systems updates the approved positioning here first.

## Website Implementation Source

Current website data source:

- `modules/product/operavault-product.ts`

Reviewed product evidence source:

- Local Operavault tenant deployment workspace provided by the owner.
- Reviewed on 2026-06-04.
- Evidence reviewed: project guide, README, `docs/module-map.md`, `docs/mvp-scope.md`, `docs/release-readiness.md`, product-tour data, `modules/`, and route structure.
- Authenticated portal spot-check completed on 2026-06-04 using owner-provided access. Evidence reviewed: dashboard/navigation labels, representative workspace headings, and safe action labels only.
- This is a tenant deployment workspace, so it may verify product capability and status only. It must not be used to publish tenant records, tenant screenshots, or institution-specific data.

Current public routes using this layer:

- `/`
- `/features`
- `/features/[module]`
- `/pricing`
- `/company`
- `/request-demo`
- `/products/operavault/demo`
- `/products/operavault/pricing`

## Pricing Source

The Steward Systems website may publish pricing and plan overview language for Operavault. Operavault itself remains responsible for actual tenant plan enforcement, enabled modules, limits, billing state, subscription state, and internal plan configuration.

Current public plans:

| Plan | Website Positioning | Public Notes |
| --- | --- | --- |
| Basic | Essential records and operating visibility. | Core foundation plan. |
| Standard | Academic and administrative workflow foundation. | Main operational foundation for most school workflows. |
| Premium | Full institutional operations platform. | Advanced workflows and leadership visibility. |
| Enterprise | Custom operating model for complex institutions. | Custom rollout, integrations, and advanced testing. |
| Founder Institutional Partner | Approval-only early-adopter plan for selected institutions. | Not free, not unlimited, and not a permanent public plan. |

## Module Claim Register

Evidence level after 2026-06-04 review: `verified_in_product_repo` for modules matched against the local Operavault product workspace.

These statuses should govern the Steward Systems public product tour until the next product-source review.

| Module | Group | Public Status | Plan Availability | Product Evidence Match | Public Claim Notes |
| --- | --- | --- | --- | --- | --- |
| Student Records | People Records | `available` | Basic and above | Students Management | Structured learner profiles, class placement, academic profile, documents, and operational history. |
| Staff Records | People Records | `available` | Basic and above | Staff Management | Staff profiles, departments, positions, credentials, attendance, workload, and HR context. |
| Report Card Generation | Academic Operations | `active_development` | Standard and above | Report Card Generation | Being refined around locked snapshots, TIC handoff, and parent publication. Do not present as fully settled general availability. |
| Gradebook | Academic Operations | `available` | Standard and above | Gradebook | Teacher score-entry records act as the gradebook source, with class/subject scoping and status-aware records. |
| Lesson Plan Submission | Academic Operations | `active_development` | Premium and above | Lesson Plan Submission | Connects teacher assignments to weekly submission and HOD review evidence; describe as in active development. |
| Diary Filling | Academic Operations | `active_development` | Premium and above | Diary Filling | Connects scheme topics, taught status, homework evidence, and HOD checks; describe as in active development. |
| Broadsheet/Class Noticeboard | Academic Operations | `active_development` | Premium and above | Broadsheet Publishing, Class Noticeboard | Broadsheet and class noticeboard publishing are being refined for review, masking, and dignity-preserving public outputs. |
| Student Attendance | Attendance and Discipline | `available` | Basic and above | Student Attendance | Daily, weekly, term, and student-level attendance records. |
| Staff Attendance | Attendance and Discipline | `available` | Basic and above | Staff Attendance | Staff attendance, late/absent status, import workflows, and HR visibility. |
| Discipline Booking | Attendance and Discipline | `available` | Standard and above | Discipline Booking | Behaviour and discipline case records with review, resolution, and parent-context controls. |
| Loans | Finance and Administration | `available` | Premium and above | Staff Loans | Loan applications, review, disbursement, repayment tracking, and payslip linkage. |
| Procurement | Finance and Administration | `available` | Premium and above | Procurement | Procurement requests, funding controls, fulfilment, reporting, and exceptions. |
| Fees and Parent Notification | Finance and Administration | `available` | Standard and above | School Fees Sync / Records, Parent Notifications | Fee definitions, payment imports, ledger summaries, reconciliation readiness, and controlled parent notifications. |
| Notifications | Communication and Parent Engagement | `available` | Basic and above | Notifications | In-app role-aware notifications for staff, parents, managers, and review queues. |
| Advisory Meetings and Reporting | Communication and Parent Engagement | `active_development` | Premium and above | Advisory Meetings and Reporting | Fortnightly advisory reporting is in active development; keep privacy language careful. |
| Appraisal and Workload Visualisation | Intelligence and Analytics | `active_development` | Premium and above | Workload Visualisation, Appraisal | Workload visualisation is available; appraisal is being built from workload, attendance, lesson/diary, advisory, and review evidence. |
| AI System Analytics | Intelligence and Analytics | `active_development` | Enterprise / Founder partner evaluation | AI System Analytics | AI-assisted operational analytics are being developed for management insight. Avoid autonomous decision claims. |
| WAEC/JAMB Standard CBT | Intelligence and Analytics | `active_development` | Premium roadmap / Founder partner evaluation | CBT / WAEC-JAMB Standard Testing | Being developed and prepared for structured institutional testing around timed exams and performance insight. |
| WAEC/WASSCE Essay Grading Engine | Intelligence and Analytics | `active_development` | Premium roadmap / Founder partner evaluation | WAEC/WASSCE Essay Grading Engine | Being developed for rubric-aligned review and teacher-assistance workflows. Keep teacher oversight central. |

## Additional Product-Side Capabilities To Consider For Future Public Tour

The local Operavault product workspace and authenticated portal spot-check also contain public-safe evidence for these product areas. They are not all fully represented in the current Steward Systems product tour and should be considered in a later alignment pass:

| Capability | Public Status | Claim Guidance |
| --- | --- | --- |
| Parents/Guardians Management | `available` | Parent records, linked children, requests, documents, appointments, and communication history. |
| Parent Portal | `available` | Parent access to linked-child records, requests, documents, notifications, and published reports. |
| Admissions | `available` | Use only generic admissions workflow language; do not publish tenant-specific admissions data. |
| HR Department Workspace | `available` | Leave, permission, training, policy, announcements, payroll input, onboarding, credentials, attendance signals, and appraisal review surfaces. Keep employee-specific data private. |
| Employee Workload Oversight | `available` | Workload oversight is present as an authenticated management surface. Public claims should stay role/workflow-level. |
| Timetable | `available` | Teacher and class timetable context driven by academic assignments. |
| Workflow Approvals | `available` | Approval routing, assignments, and operational action history. |
| Audit Trail | `available` | Governance, accountability, and compliance evidence. |
| Credential Vault | `available` | Personnel documents and credential lifecycle controls. |
| Visitor Logging | `available` | Visitor registration and visitor logs. |
| Calendar | `available` | Academic and operational calendar context. |
| Accounts Department Workspace | `available` | School-fee totals, payroll batches, invoices, vendor payments, disbursements, and announcements. Treat all figures and party records as private. |
| Payslips | `available` | Payslip import and preview generation are present. Treat as HR/finance-sensitive and keep public claims high-level. |
| Monitoring and Exception Control | `available` | Critical issues, warnings, exception queues, and filters are present. Public language may mention exception monitoring without revealing tenant data. |
| System Reports | `available` | Procurement, loan, contribution-style operational summaries, and reporting surfaces are present. Use generic reporting language only. |

## Authenticated Portal Spot-Check Notes

Observed on 2026-06-04 through the live Operavault portal with owner-provided super-admin access:

- Dashboard framing centers on command center, expected duties, action required, pending/overdue work, operational snapshot, recent work, management oversight, and quick actions.
- Navigation confirms people/HR, students, parents, admissions, student attendance, discipline, academics, staff attendance, accounts, procurement, loans, workflows, school fees, payslips, notifications, monitoring, reports, audit logs, roles, and settings.
- Representative workspace checks confirmed HR workspace, students registry, admissions pipeline, student attendance term/calendar controls, discipline queue, academic workspace, IT broadsheets, timetable, staff attendance, accounts workspace, procurement, loans, school fees, payslip import, notifications, monitoring, system reports, audit logs, and roles/permissions.
- No private tenant records, names, financial figures, screenshots, or record-level examples may be copied into Steward Systems Core public pages.

## Website Alignment Notes

The current Steward Systems website data should be aligned with the reviewed product evidence before the next public copy pass:

- Report Card Generation should move from `available` language to active-development/refinement language.
- Broadsheet/Class Noticeboard should move from `available` language to active-development/refinement language.
- Discipline Booking can be represented as an available foundation.
- Staff Loans can be represented as an available foundation, with finance-sensitive wording.
- Procurement plan availability should be reviewed against the Premium-and-above product-source indication.
- Lesson Plan Submission and Diary Filling should be reviewed against the Premium-and-above product-source indication.
- WAEC/JAMB CBT and WAEC/WASSCE Essay Grading should remain active-development / structured-testing language, with no autonomous AI claims.

## Allowed Public Claims

- Operavault helps schools coordinate administration, academics, records, communication, compliance evidence, staff workflows, and management visibility.
- Public demo content must be synthetic and public-safe.
- Some modules are available in the product tour, while others are in active development or structured testing.
- The public website controls public tour and pricing overview language.
- The Operavault portal controls tenant module access and subscription enforcement.

## Restricted Claims

Do not claim:

- that the website connects to live Operavault tenant data
- that any school, including Whitesands, is represented in the public demo
- that AI analytics or essay grading make autonomous final decisions
- that Founder Institutional Partner is free, unlimited, permanent, or open to all institutions
- that tenant-specific reports, names, records, screenshots, or private examples are reusable as public demo content
- that active-development or structured-testing modules are generally available unless product evidence confirms that status

## Review Notes

Initial setup date: 2026-06-04.

Latest source review date: 2026-06-04.

Next recommended review:

- before changing `/features`, `/features/[module]`, `/pricing`, or `/products/operavault/pricing`
- after each meaningful Operavault product release
- before using real product screenshots in public pages
