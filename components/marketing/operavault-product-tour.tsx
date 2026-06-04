import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3 } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import {
  getOperavaultModuleBySlug,
  getOperavaultModulesByGroup,
  getOperavaultStatusLabel,
  operavaultHeroLede,
  operavaultHeroStatement,
  operavaultModuleGroups,
  operavaultTourSections
} from "@/modules/product/operavault-product";

const groupSummaries = {
  "People Records": "Tenant-aware records for the people who make the school work.",
  "Academic Operations":
    "Score entry, reports, broadsheets, lesson evidence, timetable, and academic accountability.",
  "Attendance and Discipline":
    "Daily records, behaviour evidence, escalation, and operational accountability.",
  "Finance and Administration":
    "Fees, procurement, loans, approvals, audit trail, and controlled finance execution.",
  "Communication and Parent Engagement":
    "Parent portal, notices, acknowledgement, class noticeboards, and safe publication.",
  "Intelligence and Analytics":
    "Management visibility, workload evidence, appraisal readiness, and performance intelligence."
} satisfies Record<(typeof operavaultModuleGroups)[number], string>;

export function OperavaultProductTour() {
  return (
    <main>
      <section className="product-tour-hero">
        <div className="product-tour-hero-copy">
          <div className="product-tour-brand-lockup">
            <Image
              src="/operavault-logo.png"
              alt="Operavault logo"
              width={150}
              height={100}
              priority
            />
            <div>
              <p className="eyebrow">Unified School Operations Platform</p>
              <h1>Operavault</h1>
            </div>
          </div>
          <p className="product-title-kicker">{operavaultHeroStatement}</p>
          <p>{operavaultHeroLede}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/request-demo">
              <span>Request a demo</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-secondary" href="/features">
              <span>Explore modules</span>
              <Layers3 aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-console" aria-label="Operavault product overview mockup">
          <div className="hero-console-top">
            <span>Command Center</span>
            <strong>Institutional visibility</strong>
          </div>
          <div className="hero-console-grid">
            <div>
              <span>Academic readiness</span>
              <strong>86%</strong>
            </div>
            <div>
              <span>Attendance signals</span>
              <strong>Live</strong>
            </div>
            <div>
              <span>Finance exceptions</span>
              <strong>12</strong>
            </div>
            <div>
              <span>Audit evidence</span>
              <strong>Tracked</strong>
            </div>
            <div className="wide">
              <strong>Profile to Workflow to Review to Report</strong>
              <span>Public-safe product tour mockup. No tenant records are connected.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="steward-positioning-card">
          <p className="eyebrow">By Steward Systems</p>
          <h2>Built by a software company focused on practical institutional systems.</h2>
          <p>
            Operavault is a product of Steward Systems, a full-stack software
            development company building practical institutional systems for
            real operational problems. The platform is designed around records,
            permissions, audit evidence, usability, and continuity rather than
            isolated school-office screens.
          </p>
          <Link className="button button-secondary" href="/company">
            Learn about Steward Systems
          </Link>
        </div>
      </section>

      <section className="page-section product-section-tight">
        <div className="section-heading">
          <p className="eyebrow">Operating Model</p>
          <h2>Six connected workstreams, one school operating layer.</h2>
          <p>
            Plans decide what a school owns. Permissions decide what each user
            can do. That separation keeps growth commercial and governance safe.
          </p>
        </div>
        <div className="operavault-category-grid">
          {operavaultModuleGroups.map((group) => {
            const modules = getOperavaultModulesByGroup(group);

            return (
              <article key={group} className="operavault-category-card">
                <p className="eyebrow">{group}</p>
                <h3>{groupSummaries[group]}</h3>
                <div>
                  {modules.slice(0, 4).map((moduleData) => (
                    <Link key={moduleData.slug} href={`/features/${moduleData.slug}`}>
                      {moduleData.name}
                    </Link>
                  ))}
                </div>
                <small>{modules.length} modules in this workstream</small>
              </article>
            );
          })}
        </div>
        <div className="section-action-row">
          <Link className="button button-secondary" href="/features">
            <span>Open full module catalogue</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="page-section product-section-tight">
        <div className="section-heading">
          <p className="eyebrow">Guided Product Tour</p>
          <h2>The workflows leaders usually ask to see first.</h2>
          <p>
            The full catalogue is available on the modules page. This product
            page keeps the first tour focused on the workflows that explain the
            operating system fastest.
          </p>
        </div>
        <div className="product-tour-grid compact-product-tour-grid">
          {operavaultTourSections.slice(0, 6).map((section) => {
            const moduleData = getOperavaultModuleBySlug(section.moduleSlug);

            if (!moduleData) {
              return null;
            }

            return (
              <article key={section.title} className="product-tour-card">
                <div className="product-tour-card-copy">
                  <div className="demo-slide-top">
                    <span>{moduleData.group}</span>
                    <em className={`module-status module-status-${moduleData.status}`}>
                      {getOperavaultStatusLabel(moduleData.status)}
                    </em>
                  </div>
                  <h3>{section.title}</h3>
                  <p>{section.summary}</p>
                  <ul>
                    {section.proofPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link href={`/features/${moduleData.slug}`}>
                    Explore {moduleData.name}
                  </Link>
                </div>
                <div className="product-tour-mock" aria-hidden="true">
                  <div className="mock-toolbar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="product-tour-mock-title">{moduleData.group}</div>
                  <div className="mock-kpi-row">
                    <b />
                    <b />
                    <b />
                  </div>
                  <div className="mock-table-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="section-action-row">
          <Link className="button button-secondary" href="/features">
            <span>View every module</span>
            <Layers3 aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="page-section two-column product-section-tight">
        <div>
          <p className="eyebrow">Institutional posture</p>
          <h2>Built for administrators who need evidence, controls, and visibility.</h2>
          <p>
            Operavault is positioned for school leadership teams that need a
            mature administrative layer, not a lightweight classroom app. The
            public website explains capabilities while Core only captures demo
            interest and follow-up.
          </p>
        </div>
        <div className="capability-list">
          {[
            "Synthetic public demo content only.",
            "No tenant data is connected to the public website.",
            "Active-development modules are labelled with testing boundaries.",
            "Demo requests flow into the Steward Systems Core pipeline."
          ].map((item) => (
            <div key={item} className="capability-item">
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Review Operavault with the team."
        description="Request a demo and choose the modules your administrators need to inspect first."
      />
    </main>
  );
}
