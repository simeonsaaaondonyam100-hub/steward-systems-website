# Steward Systems Masterplan

## Company Vision

Steward Systems is the parent company for a family of focused operational products. The company should present a coherent brand while allowing each product line to remain independent in data ownership, product development, deployment, and customer operations.

The Core layer exists to help Steward Systems manage the business pipeline around its products: product discovery, enquiries, demo requests, early access interest, partnerships, and internal follow-up.

## Product Ecosystem

Steward Systems currently includes three product lines:

- Operavault: institutional and school operations
- Cantoria: music notation, choir rehearsal, solfa, SATB, composition, playback, and exports
- Steward Ledger: investment club and cooperative governance and treasury

Each product should have its own operational backend boundary. The Steward Systems website can present and route interest in these products, but it should not become the source of truth for their tenant, project, treasury, or operational records.

## Website Purpose

The website should:

- introduce Steward Systems as the parent company
- explain the product ecosystem
- give each product line a clear positioning page
- capture demo, contact, early access, and partnership enquiries
- support internal review through an admin enquiry queue
- create a reliable foundation for future CRM, email, social, and analytics workflows

The website should not be built before the Core audit and guidance setup are complete.

## Demo And Enquiry Funnel

The primary funnel should move visitors from product interest to structured enquiry capture:

1. Visitor lands on Home, Products, or a product detail page.
2. Visitor chooses a product CTA such as request demo, join early access, contact, or discuss partnership.
3. Core records the enquiry with product interest, enquiry type, contact details, message, source, and consent metadata as needed.
4. Admin reviews the enquiry queue.
5. Admin records notes, status changes, and follow-up events.
6. Qualified enquiries move toward scheduled demo, proposal, pilot, closure, or spam handling.

## Business Pipeline

Core should model the company-level status of an enquiry. It should not duplicate product-specific lifecycle records. For example, Core may know that a school requested an Operavault demo, but Operavault remains responsible for school tenant setup, students, staff, academic records, finance records, attendance, and reports.

The pipeline should support:

- inbound enquiry capture
- product interest classification
- status tracking
- admin ownership and follow-up
- notes and audit events
- future email and social follow-up
- future analytics on enquiry volume and conversion

## Growth Phases

### 1. Root Guidance And Core Audit

Create root guidance, inspect the existing repository, document boundaries, and confirm that Steward Systems Core is the parent-company layer.

### 2. Core Backend Product/Enquiry Foundation

Design and later implement the product registry, enquiry records, notes, and audit events. If SQL is required, provide migration files and SQL Editor-ready scripts only. Do not use Supabase CLI.

### 3. Public Website Foundation

Build the first public website pages after the backend responsibilities are confirmed: Home, Products, product detail pages, Company, and Contact / Request Demo.

### 4. Admin Enquiry Queue

Add a protected admin workflow for reviewing enquiries, assigning status, adding notes, and viewing audit events.

### 5. Operavault Demo Funnel Connection To Core

Connect the public Operavault demo funnel to Core at the enquiry level only. Do not connect Operavault tenant operational data to Core.

### 6. Domain/Email/Social Setup

Configure domains, email routing, security, and social profiles. Cloudflare can later support DNS, edge security, and email routing.

### 7. Product Screenshots/Demo Pack

Prepare screenshots, demo data, walkthrough assets, and product-specific demo packs for sales and onboarding.

### 8. Later CRM/Newsletter/Analytics Expansion

Expand Core with CRM handoff, newsletter flows, campaign attribution, reporting, and conversion analytics after the first enquiry workflow is stable.
