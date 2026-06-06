# Cantoria Source Of Truth

## Product Boundary

Cantoria is the Steward Systems product line for music notation, choir rehearsal, solfa, SATB, composition, playback, and exports.

Steward Systems Core may publish Cantoria public positioning, early-access messaging, product interest CTAs, and company-level enquiry routing. Steward Systems Core must not store Cantoria projects, scores, audio, rehearsal files, compositions, part extraction files, playback data, or exports.

## Public Positioning

Approved current positioning:

Cantoria helps music teams move from composition and arrangement to rehearsal-ready material through notation, solfa, SATB, rehearsal support, playback, part extraction, and exports.

## Website Implementation Source

Current website data source:

- `modules/products/product-registry.ts`

Current public readiness:

- Readiness: `early_access`
- Public promotion: `early_access`
- Public label: "Early Access / In Development"
- Demo CTA: disabled until an owner-approved public demo exists
- Pricing CTA: disabled until public pricing is approved
- Deck CTA: disabled until an approved downloadable deck exists
- Trailer CTA: disabled until an approved public trailer exists
- Primary CTA: "Register Interest" through Steward Systems Core
- Public showcase: hidden from the current public landing page and primary navigation while Operavault remains the rollout focus

Reviewed product evidence source:

- Local Cantoria product workspace provided by the owner.
- Reviewed on 2026-06-04.
- Evidence reviewed: project guide, README, `docs/cantoria-architecture.md`, `docs/cantoria-roadmap.md`, `src/modules/`, `src/components/score/`, `src/components/playback/`, and route structure.
- Authenticated portal spot-check completed on 2026-06-04 using owner-provided access. Evidence reviewed: dashboard/project workspace labels, toolbar controls, and safe feature headings only.
- Evidence may verify product capability and status only. It must not be used to publish user projects, scores, audio, exports, or private files.

Current public route:

- `/products/cantoria`

## Current Public Status

| Area | Public Status | Evidence Level | Public Claim Notes |
| --- | --- | --- | --- |
| Product line | `early_access` | `verified_in_product_repo` | Public website may describe Cantoria as an early-access product line with active music-engine foundations. |
| User auth, projects, and scores | `available` | `verified_in_product_repo` | Email/password auth, protected dashboard/project routes, project creation/list/open flow, and user-owned score persistence are present. |
| Deterministic score model | `available` | `verified_in_product_repo` | Internal score, staff, measure, note/rest, rhythm validation, metadata, tempo, SATB, and validation modules are present. |
| Staff notation rendering | `available` | `verified_in_product_repo` | VexFlow-isolated notation rendering foundation exists. Keep claims to current rendering and editing foundations. |
| Score-paper-first editing | `active_development` | `verified_in_product_repo` | Phase 8K edit/view mode, local draft editing, save/cancel, object selection/delete, pitch movement, and compact keypad foundations are active. |
| Solfa and SATB workflows | `available` | `verified_in_product_repo` | Display-only/key-aware and voice-specific solfa plus SATB score structure, multi-staff rendering, and voice-targeted editing are present. |
| Rehearsal and playback workflows | `available` | `verified_in_product_repo` | Tone.js playback, selected voice playback, selected part playback, and basic full SATB playback foundations are present. |
| Part extraction | `available` | `verified_in_product_repo` | Derived SATB part extraction, notation preview, and selected-part practice playback foundations are present. |
| Print/PDF export | `available` | `verified_in_product_repo` | Browser print/PDF foundation for full scores and selected extracted parts is present. |
| Browser WAV export prototype | `active_development` | `verified_in_product_repo` | Local browser WAV export prototype exists for selected extracted SATB parts only; it is not durable storage/export infrastructure. |
| PWA installability | `available` | `verified_in_product_repo` | Manifest metadata and branded app icons are present; offline editing and push are not active public claims. |
| Staff-to-solfa transcription artifacts | `planned` | `verified_in_product_repo` | Architecture and roadmap are defined, but saved transcription records/export artifacts are not implemented. |
| AI assistant command layer | `planned` | `verified_in_product_repo` | Future-facing command layer only. No public claim of real AI chat, transcription, or harmonisation yet. |
| Durable audio/export pipeline | `planned` | `verified_in_product_repo` | Export records, storage buckets, server jobs, MP3, rehearsal packs, and durable downloads require future approved infrastructure. |

## Website Alignment Notes

The current Steward Systems product registry can be strengthened from broad early-access wording to more specific public-safe capability language. Recommended public claims:

- Cantoria has active foundations for user-owned projects, score persistence, staff notation rendering, SATB structures, solfa display, playback, part extraction, and print/PDF.
- Score-paper-first editing is in active development and should be described as an editor foundation, not a complete Sibelius/MuseScore-grade editing system.
- Browser WAV export should be described as a prototype for selected parts, not durable audio export.
- AI harmonisation, audio transcription, durable export jobs, uploads, offline editing, and saved solfa transcription artifacts should remain planned or roadmap language.

## Authenticated Portal Spot-Check Notes

Observed on 2026-06-04 through the local Cantoria portal with owner-provided access:

- Dashboard framing confirms score/project workspace creation, project listing, and project opening.
- Project workspace controls confirm full-score print, score edit mode, selected object deletion, full-score playback, selected voice playback, stop control, selected-part print, selected-part playback, and selected-part browser WAV export.
- Workspace labels confirm SATB notation preview, vocal comfort checking, score/voice playback, SATB part extraction, part notation preview, selected-key solfa display, and voice selection.
- AI assistant, audio import, solfa import, harmonisation, and expanded parts-export language should remain roadmap/future-facing unless later product evidence confirms available implementation.
- No private composition, score content, audio, exports, user project names, or notation examples may be copied into Steward Systems Core public pages without an explicit public-safe asset decision.

## Allowed Public Claims

- Cantoria is a Steward Systems product line for music notation and choir workflow.
- Visitors may register early access interest through Steward Systems Core.
- Public website copy may describe current active foundations for score projects, notation rendering, SATB, solfa display, playback, parts, and print/PDF.

## Restricted Claims

Do not claim:

- that any specific choir, customer, music project, score, or audio file is represented publicly
- that Cantoria public pages connect to a live Cantoria operational backend
- that browser WAV export is durable, server-side, stored, shared, or rehearsal-pack infrastructure
- that AI chat, AI harmonisation, audio transcription, saved solfa transcription, uploads, offline editing, or push notifications are available
- that export, playback, or composition features are production-ready beyond the verified foundations above

## Review Notes

Initial setup date: 2026-06-04.

Latest source review date: 2026-06-04.

Next recommended review:

- before building a polished Cantoria product tour
- before publishing screenshots, score examples, audio samples, or export claims
- after reviewing the Cantoria product repository or owner-confirmed release notes
