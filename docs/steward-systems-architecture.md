# Steward Systems Architecture

## High-Level Architecture

Steward Systems Core is the company-level backend and business pipeline layer for the Steward Systems website. It supports product discovery, enquiries, demo requests, early access requests, contact messages, admin follow-up, notes, and audit events.

The intended platform direction is:

- Vercel for website hosting and frontend deployment
- Supabase Core for company-level backend data
- Cloudflare later for DNS, security, email routing, and edge concerns

## Core Backend Boundary

Core may own:

- product registry records
- product visibility and website positioning metadata
- demo requests
- contact messages
- early access requests
- partnership enquiries
- enquiry status
- admin notes
- enquiry events and audit trail

Core must not own:

- Operavault school tenant operational data
- Whitesands or other institution-specific students, employees, results, finance, attendance, admissions, procurement, reports, workload, or appraisal records
- Cantoria scores, projects, audio, rehearsal files, compositions, parts, playback assets, or exports
- Steward Ledger member records, treasury entries, meetings, resolutions, investments, approvals, or club/cooperative operational ledgers

## Product Independence Model

Each product line should remain independent:

- Operavault owns institutional operations.
- Cantoria owns music and choir workflow data.
- Steward Ledger owns investment club and cooperative governance and treasury data.
- Steward Systems Core owns only company-level product interest and pipeline data.

Core may pass product interest downstream later, but it should do so through explicit integration boundaries such as webhook handoff, API call, or manual admin workflow. Product operational records should not be stored in Core as a shortcut.

## Proposed Data Model

These tables are proposed for a later backend phase. They should not be created until explicitly requested.

### core_products

Stores the product registry used by the public website and admin pipeline.

Suggested fields:

- id
- slug
- name
- short_description
- audience
- status
- display_order
- website_cta_label
- website_cta_href
- created_at
- updated_at

### core_product_enquiries

Stores inbound company-level enquiries.

Suggested fields:

- id
- product_slug
- enquiry_type
- status
- name
- organization
- email
- phone
- country
- message
- source
- consent_to_contact
- assigned_to
- created_at
- updated_at

### core_enquiry_notes

Stores admin notes attached to an enquiry.

Suggested fields:

- id
- enquiry_id
- author_id
- note
- visibility
- created_at

### core_enquiry_events

Stores audit trail events for enquiry lifecycle changes.

Suggested fields:

- id
- enquiry_id
- event_type
- previous_value
- next_value
- actor_id
- metadata
- created_at

## Security And Access Model

Public users should only be able to submit allowed enquiry forms. Public users should not read enquiries, notes, audit events, or admin-only product registry metadata.

Admins should access the enquiry queue through authenticated routes. Admin capabilities should be scoped by role before exposing sensitive actions such as status changes, assignment, note creation, export, or deletion.

Supabase Row Level Security should be considered for all Core tables when they are created. Service-role access must stay server-side only and must not be exposed to browser code.

## Deployment Model

Vercel should host the public website and any server-side routes needed for enquiry handling. Supabase Core should store company-level product and enquiry data. Cloudflare can later sit in front of the domain for DNS, security, email routing, and related network services.

Environment variables should separate public browser-safe values from server-only secrets. Supabase service keys, email provider secrets, and admin integration credentials must remain server-only.

## No Supabase CLI Workflow

Do not use Supabase CLI in this repository.

If database changes are needed later:

1. Create migration files in the repository.
2. Provide SQL Editor-ready SQL.
3. Ask for manual execution in Supabase SQL Editor.
4. Record what was intended and what must be verified after execution.
