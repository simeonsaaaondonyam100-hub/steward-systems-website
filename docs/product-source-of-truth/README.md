# Product Source-Of-Truth Workflow

## Purpose

This folder is the Steward Systems website source-of-truth layer for public product tour, demo, pricing, and roadmap language.

It exists so the company website can explain Steward Systems products accurately without becoming the operational system for Operavault, Cantoria, or Steward Ledger.

## Boundary

This folder may track:

- public positioning claims
- public module names and descriptions
- plan availability for website pricing pages
- whether a capability is available, in active development, or in structured testing
- approved demo language
- allowed public-safe screenshots or synthetic mockup guidance
- links or notes pointing to product-side evidence
- review dates and review owners

This folder must not store:

- Operavault tenant data, school records, student records, staff records, results, attendance, finance, procurement, advisory, HR, workload, or appraisal data
- Whitesands or any other institution-specific private data
- Cantoria music projects, scores, audio, rehearsal files, compositions, or exports
- Steward Ledger treasury, member, investment, meeting, resolution, or approval records
- credentials, secrets, private customer notes, or internal-only product data

## Important Access Note

Codex cannot automatically read chats from other projects or previous Codex threads unless those chats are available through a tool or the user provides them in the current thread.

Codex can inspect local project folders and files that are present on this machine when the user gives the path or the workspace already exposes them. For source-of-truth updates, product repositories, release notes, issue lists, screenshots, and direct owner notes should be treated as stronger evidence than memory from chat.

When local paths are provided, treat them as evidence sources, not public website content. Prefer source labels in committed docs, and do not copy private records, customer names, tenant data, score files, treasury records, screenshots, secrets, or local machine paths into public pages.

## Status Vocabulary

Use these statuses when updating public product claims:

| Status | Meaning | Public Website Language |
| --- | --- | --- |
| `available` | Implemented enough to be represented as an available public product capability. | "Available", "included", "supports" |
| `active_development` | Currently being built or refined in the product roadmap. | "In active development", "currently being developed within the roadmap" |
| `structured_testing` | Being prepared or reviewed for controlled institutional testing. | "Being prepared for structured institutional testing" |
| `pilot_only` | Only available to selected institutions or controlled pilot partners. | "Available through selected pilot adoption" |
| `early_access` | Approved for early-access interest capture, but not positioned as generally available. | "Join early access", "register interest" |
| `planned` | Product or capability is planned but not approved for detailed public availability claims. | Keep public copy high-level and directional |
| `needs_product_review` | Website copy has not yet been reviewed against product-side evidence. | Keep claims conservative until reviewed |
| `internal_only` | Not approved for public marketing or demo claims. | Do not publish as a public capability |
| `paused` | Work exists but is not actively progressing. | Avoid public promotion unless approved by Steward Systems |

Do not describe an actively developed capability as merely a "future feature" when development work is already underway.

## Product Readiness And Public Promotion

Public product visibility is governed by readiness and promotion fields in `modules/products/product-registry.ts`.
The active public showcase is governed by `modules/products/public-visibility.ts`.

| Product | Readiness | Public Promotion | Public Label | Demo | Pricing | Deck | Trailer |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Operavault | `demonstration_ready` | `featured` | Available for Demonstration | Yes | Yes | No | No |
| Cantoria | `early_access` | `early_access` | Early Access / In Development | No | No | No | No |
| Steward Ledger | `private_internal` | `portfolio_only` | Private Platform / In Development | No | No | No | No |

CTA rules:

- Show `Request Demo` only when `demoAvailable` is true.
- Show pricing links only when `pricingAvailable` is true.
- Show deck or trailer links only when an approved public file exists and the matching availability flag is true.
- Use `Register Interest` / `Join Early Access` for early-access products.
- Use `Discuss Use Case` / `Learn More` for private/internal or portfolio-only products.
- Operavault is currently the only featured, demo-ready product on the public website.

Public showcase rules:

- `/` should present the current public focus product, not the full Steward Systems portfolio.
- Steward Systems should appear as the product maker while Operavault is under public rollout focus.
- The visible public product navigation currently includes only Operavault.
- Cantoria and Steward Ledger remain registry-backed hidden portfolio products until the owner changes public visibility.
- Hidden products should not appear in the main nav, public landing page product cards, or public footer product list.

## Evidence Levels

Each public claim should have at least one evidence note:

| Evidence Level | Examples | How To Use |
| --- | --- | --- |
| `verified_in_product_repo` | Code, tests, release notes, docs, or screenshots from the product repository. | Strongest source for available or active-development claims. |
| `owner_confirmed` | Direct confirmation from Steward Systems or product owner in the current thread. | Acceptable for planning and website copy updates. |
| `website_current_state` | Existing website module data or published public copy. | Useful for alignment, but should be reviewed against product evidence before stronger claims. |
| `needs_product_review` | No current product evidence has been reviewed. | Keep claims conservative. |

## Update Workflow

1. Review the relevant product source:
   - product repository files, docs, tests, release notes, or screenshots when available
   - direct owner instruction in the current Codex thread
   - existing website product data only when product source is unavailable
2. Update the product file in this folder before changing public website copy.
3. Mark each changed capability with status, evidence level, source note, and review date.
4. Update the website implementation source:
   - Operavault product-tour data currently lives in `modules/product/operavault-product.ts`.
   - Product registry data currently lives in `modules/products/product-registry.ts`.
5. Keep public copy conservative:
   - do not imply live deployment where only active development is confirmed
   - do not imply free, unlimited, or permanent plans unless explicitly approved
   - do not use institution-specific data or private examples
6. Run relevant checks after implementation changes:
   - `npx.cmd tsx --test tests\product-packaging.test.ts tests\demo-request-service.test.ts`
   - `npm.cmd run lint`
   - `npm.cmd run typecheck`
   - `npm.cmd run build`
7. Record notable source-of-truth changes in `updates.md`.

## Product Files

- `operavault.md` - institutional school operations platform and current website forefront product.
- `cantoria.md` - music notation, solfa, SATB, rehearsal, composition, playback, and export product.
- `steward-ledger.md` - investment club and cooperative governance and treasury product.
- `updates.md` - chronological log of source-of-truth reviews and public claim changes.

## Latest Reviewed Product Evidence

Last reviewed on 2026-06-04 from local project workspaces provided by the owner:

| Product | Evidence Source Label | Reviewed Evidence | Public-Safe Use |
| --- | --- | --- | --- |
| Operavault | Local Operavault tenant deployment workspace | Project guide, README, module map, MVP scope, release notes, product-tour data, route/module structure | Module and plan status evidence only; do not copy tenant data or institution-specific records. |
| Cantoria | Local Cantoria product workspace | Project guide, README, architecture, roadmap, route/module structure | Music-engine capability evidence only; do not copy user projects, scores, audio, or exports. |
| Steward Ledger | Local Triple Twenty-Five / Steward Ledger portal workspace | Project guide, README, navigation, route/component/type structure, investment smoke-test docs | Product capability evidence only; do not publish Triple Twenty-Five-specific finance or governance records. |

## Public Claim Checklist

Before a product tour, pricing page, feature detail page, or CTA is changed, confirm:

- The product name and module name are approved for public use.
- The public status is one of the statuses above.
- The claim has a source note.
- Any demo data is synthetic and public-safe.
- Any plan availability claim is aligned with the website pricing overview.
- The claim does not reveal private customer, school, student, staff, parent, finance, HR, or operational records.
- The website remains Steward Systems Core and does not connect to product operational backends.
