# Steward Systems Core Agent Guide

## Project Identity

Steward Systems is the parent company. This repository represents the Steward Systems company website and Core backend layer, not a tenant, school, choir, investment club, or individual product deployment.

Operavault, Cantoria, and Steward Ledger are product lines under Steward Systems. They may be presented, marketed, and routed through this website, but their operational data and internal product workflows remain independent.

## Architecture Boundaries

Steward Systems Core owns company-level business pipeline concerns:

- Steward Systems public website backend
- product registry
- company and product enquiries
- demo requests
- early access requests
- contact messages
- business pipeline status
- internal Steward Systems admin queue
- enquiry notes and audit events

Steward Systems Core does not own product operational data:

- Operavault school tenant operations, student records, employee records, academic records, finance records, attendance, admissions, procurement, reports, workload, or appraisal data
- Whitesands or any other institution-specific data
- Cantoria music projects, scores, audio, rehearsal files, compositions, or exports
- Steward Ledger investment club records, treasury entries, meeting records, resolutions, member ledgers, or approvals

## Development Rules

- Keep routes lean. Routes should validate input, call services, and return responses.
- Put business logic in services or domain modules.
- Use repositories for persistence and data access boundaries.
- Avoid hardcoded product logic where a product registry is more appropriate.
- Preserve product independence. Product lines should remain deployable and governable as separate systems.
- Do not connect Operavault tenant data to Steward Systems Core.
- Do not use Supabase CLI in this repository.
- If database changes are needed later, create migration files and provide SQL Editor-ready SQL for manual execution.
- Do not create backend tables until explicitly requested after the Core audit.
- Do not build website pages until explicitly requested.

## Product Boundary Rules

- Operavault handles institutional and school operations.
- Cantoria handles music notation, choir rehearsal, solfa, SATB, composition, playback, and exports.
- Steward Ledger handles investment club and cooperative governance, treasury, meetings, resolutions, members, investments, and approvals.
- Steward Systems Core handles company-level enquiries, demos, early access, product registry, contact messages, notes, audit events, and business pipeline status.

## Validation Expectations

When the repository supports them, run relevant checks before handing work back:

- lint
- typecheck
- build
- relevant tests

If dependencies, package scripts, or project configuration are missing, report that clearly instead of inventing validation.
