# Steward Systems Website

Steward Systems is the parent company behind a focused ecosystem of operational software products. The company website presents the Steward Systems brand, explains each product line, captures enquiries, and supports the early business pipeline for demos, partnerships, and access requests.

This repository is for the Steward Systems public website and Steward Systems Core backend. Core is the company-level business pipeline layer. It should support product discovery, enquiry capture, demo requests, contact messages, admin review, and future follow-up workflows without absorbing the operational data owned by each product.

## Product Lines

### Operavault

Operavault is an institutional and school operations platform for departments, academics, HR, accounts, admissions, procurement, attendance, reports, workload, and appraisal workflows.

### Cantoria

Cantoria is a music notation and choir workflow product for solfa, SATB, rehearsal support, composition, part extraction, playback, and exports.

### Steward Ledger

Steward Ledger is an investment club and cooperative governance and treasury portal for members, meetings, resolutions, treasury, investments, and approvals.

## Intended Website Pages

- Home
- Products
- Operavault
- Cantoria
- Steward Ledger
- Company
- Contact / Request Demo
- Admin enquiry queue

These pages are planned website surfaces only. They should not be built until the project reaches the public website foundation phase.

## Backend Responsibility

Steward Systems Core may own:

- product registry
- company and product enquiries
- demo requests
- early access requests
- contact messages
- enquiry notes
- enquiry events and audit trail
- admin enquiry queue
- business pipeline status

Steward Systems Core must not own operational product data from Operavault, Cantoria, or Steward Ledger.

## Deployment Direction

- Vercel is the intended hosting platform for the public website and app frontend.
- Supabase Core is the intended backend layer for company-level data such as products, enquiries, notes, and events.
- Cloudflare can later handle DNS, security, email routing, and related edge/network concerns.

Do not use Supabase CLI for this repository. If database work is needed later, provide SQL Editor-ready scripts for manual execution.
