import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CheckCircle2, Layers3 } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import {
  getOperavaultModulesByGroup,
  getOperavaultStatusLabel,
  operavaultHeroStatement,
  operavaultModuleGroups,
  operavaultModules
} from "@/modules/product/operavault-product";

const tourModules = [
  "report-card-generation",
  "gradebook",
  "student-attendance",
  "staff-attendance",
  "discipline-booking",
  "notifications",
  "advisory-meetings-reporting",
  "lesson-plan-submission",
  "diary-filling",
  "loans",
  "procurement",
  "broadsheet-class-noticeboard",
  "fees-parent-notification",
  "appraisal-workload-visualisation",
  "ai-system-analytics",
  "waec-jamb-standard-cbt",
  "waec-wassce-essay-grading-engine"
];

export default function HomePage() {
  const tourItems = tourModules
    .map((slug) => operavaultModules.find((module) => module.slug === slug))
    .filter((module) => module !== undefined);

  return (
    <main>
      <section className="product-tour-hero">
        <div className="product-tour-hero-copy">
          <p className="eyebrow">Operavault by Steward Systems</p>
          <h1>{operavaultHeroStatement}</h1>
          <p>
            Operavault gives school leaders one secure public-safe view of the
            operating layer: records, academics, attendance, finance,
            communication, staff workflows, and management intelligence.
          </p>
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
        <div className="hero-console" aria-label="Operavault product tour mockup">
          <div className="hero-console-top">
            <span>OPERAVAULT</span>
            <strong>School Operations Command</strong>
          </div>
          <div className="hero-console-grid">
            <div>
              <BarChart3 aria-hidden="true" size={20} />
              <strong>96%</strong>
              <span>Attendance readiness</span>
            </div>
            <div>
              <Building2 aria-hidden="true" size={20} />
              <strong>18</strong>
              <span>Admin workflows</span>
            </div>
            <div className="wide">
              <strong>Academic review</strong>
              <span>Gradebook, report cards, broadsheet, diary, and lesson plan evidence in one institutional layer.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Feature universe</p>
          <h2>Every major school operation grouped into a clear module system.</h2>
          <p>
            The public tour is synthetic and product-level. It does not expose
            any tenant, student, parent, staff, finance, or school-specific data.
          </p>
        </div>
        <div className="module-universe">
          {operavaultModuleGroups.map((group) => (
            <section key={group} className="module-group">
              <div className="module-group-heading">
                <p className="eyebrow">{group}</p>
                <span>{getOperavaultModulesByGroup(group).length} modules</span>
              </div>
              <div className="module-card-grid">
                {getOperavaultModulesByGroup(group).map((module) => (
                  <Link
                    key={module.slug}
                    className="module-card"
                    href={`/features/${module.slug}`}
                  >
                    <strong>{module.name}</strong>
                    <span>{module.summary}</span>
                    <em>{getOperavaultStatusLabel(module.status)}</em>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="section-heading">
          <p className="eyebrow">Product tour</p>
          <h2>See how the operating system comes together.</h2>
          <p>
            Each module has a serious workflow purpose. Active-development
            modules are described as such, with institutional testing boundaries
            made explicit.
          </p>
        </div>
        <div className="tour-section-grid">
          {tourItems.map((module) => (
            <article key={module.slug} className="tour-panel">
              <div>
                <p className="eyebrow">{module.group}</p>
                <h3>{module.name}</h3>
                <p>{module.summary}</p>
              </div>
              <div className="tour-mockup-row">
                {module.mockupCards.map((card) => (
                  <div key={card.label}>
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                    <p>{card.detail}</p>
                  </div>
                ))}
              </div>
              <div className="tour-panel-footer">
                <span>{module.planAvailability}</span>
                <Link className="text-link" href={`/features/${module.slug}`}>
                  View module
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section two-column">
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

