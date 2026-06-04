import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import {
  getOperavaultModulesByGroup,
  getOperavaultStatusLabel,
  getOperavaultModuleBySlug,
  operavaultModuleGroups,
  operavaultModules,
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

export const metadata: Metadata = {
  title: "Operavault Modules",
  description:
    "Explore the Operavault public product tour for school administration, academic operations, attendance, finance, parent engagement, and analytics."
};

export default function FeaturesPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Operavault modules</p>
        <h1>A connected feature universe for serious school operations.</h1>
        <p>
          Explore the modules available today and the modules currently being
          developed as part of the Operavault roadmap.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/request-demo">
            <span>Request a demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-ghost" href="/pricing">
            <span>Compare plans</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="page-section product-section-tight">
        <div className="feature-universe-grid">
          {operavaultModules.map((moduleData) => (
            <Link
              key={moduleData.slug}
              className="feature-universe-card"
              href={`/features/${moduleData.slug}`}
            >
              <span>{moduleData.group}</span>
              <strong>{moduleData.name}</strong>
              <p>{moduleData.summary}</p>
              <em className={`module-status module-status-${moduleData.status}`}>
                {getOperavaultStatusLabel(moduleData.status)}
              </em>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-section product-section-tight">
        <div className="marketing-category-stack">
          {operavaultModuleGroups.map((group) => (
            <section key={group} className="marketing-category-block">
              <div>
                <p className="eyebrow">Workflow Category</p>
                <h2>{group}</h2>
                <p>{groupSummaries[group]}</p>
              </div>
              <div className="marketing-category-modules">
                {getOperavaultModulesByGroup(group).map((moduleData) => (
                  <Link key={moduleData.slug} href={`/features/${moduleData.slug}`}>
                    <strong>{moduleData.name}</strong>
                    <small>{getOperavaultStatusLabel(moduleData.status)}</small>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="page-section product-section-tight">
        <div className="section-heading">
          <p className="eyebrow">Guided Product Tour</p>
          <h2>The workflows school leaders usually ask to see first.</h2>
          <p>
            Academic reporting, attendance, discipline, staff workflows, finance
            operations, parent engagement, and intelligence are shown as one
            connected institutional system.
          </p>
        </div>
        <div className="product-tour-grid">
          {operavaultTourSections.map((section) => {
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
      </section>

      <CtaBand
        title="Need a guided module walkthrough?"
        description="Book a demo and Steward Systems can focus the tour on the modules your school needs first."
      />
    </main>
  );
}
