import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  BookOpenCheck,
  CalendarCheck2,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  GraduationCap,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  Users,
  WalletCards,
  Workflow,
  type LucideIcon
} from "lucide-react";

import {
  getOperavaultModuleBySlug,
  getOperavaultModulesByGroup,
  getOperavaultStatusLabel,
  operavaultHeroLede,
  operavaultHeroStatement,
  operavaultModuleGroups,
  operavaultPlans,
  operavaultTourSections,
  type OperavaultModuleGroup
} from "@/modules/product/operavault-product";

const leadershipSignals = [
  {
    label: "Academic readiness",
    value: "86%",
    detail: "Score, report, and review signals"
  },
  {
    label: "Attendance signals",
    value: "Live",
    detail: "Student and staff presence context"
  },
  {
    label: "Finance exceptions",
    value: "12",
    detail: "Follow-up items for accounts review"
  },
  {
    label: "Audit evidence",
    value: "Tracked",
    detail: "Role-aware action history"
  }
];

const painPoints = [
  "Student, staff, parent, academic, finance, and HR records spread across files and portals.",
  "Report cards, broadsheets, diary, lesson-plan, and advisory evidence handled as separate end-of-term stress.",
  "Attendance, discipline, parent communication, procurement, and loan workflows lacking one review trail.",
  "Management teams depending on manual summaries instead of live operational signals."
];

const conversionDeliverables: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  modules: string[];
}> = [
  {
    title: "Records that become workflows",
    description:
      "Student, staff, and parent records sit at the base of attendance, academics, finance, communication, HR, and review activity.",
    icon: Users,
    modules: ["students-management", "staff-management", "parents-guardians-management"]
  },
  {
    title: "Academic evidence without re-entry",
    description:
      "Gradebook, report-card preparation, broadsheets, lesson plans, diary, schemes, timetable, and advisory records stay connected.",
    icon: GraduationCap,
    modules: ["gradebook", "report-card-generation", "lesson-plan-submission"]
  },
  {
    title: "Attendance and discipline accountability",
    description:
      "Daily presence, staff attendance, discipline booking, behaviour history, notifications, and escalation signals become reviewable evidence.",
    icon: CalendarCheck2,
    modules: ["student-attendance", "staff-attendance", "discipline-booking"]
  },
  {
    title: "Finance and administration control",
    description:
      "Fees, parent notification, procurement, staff loans, workflow approvals, audit trail, and finance exceptions move through controlled paths.",
    icon: WalletCards,
    modules: ["school-fees-sync-records", "procurement", "staff-loans"]
  },
  {
    title: "Parent communication with boundaries",
    description:
      "Parent portal, notices, acknowledgements, absence notices, appointments, and safe publication workflows are role-aware and auditable.",
    icon: BellRing,
    modules: ["parent-portal", "notifications", "acknowledgements"]
  },
  {
    title: "Management visibility from real work",
    description:
      "Dashboards, workload visualisation, appraisal readiness, attendance trends, discipline patterns, and AI-assisted analytics support leadership review.",
    icon: BarChart3,
    modules: ["management-dashboards", "workload-visualisation", "ai-system-analytics"]
  }
];

const groupSummaries: Record<OperavaultModuleGroup, string> = {
  "People Records": "Student, staff, parent, onboarding, and permission foundations.",
  "Academic Operations":
    "Gradebook, reports, broadsheets, lesson evidence, timetable, schemes, and advisory records.",
  "Attendance and Discipline":
    "Daily registers, staff attendance, discipline booking, behaviour records, and escalation signals.",
  "Finance and Administration":
    "Fees, procurement, loans, workflow approvals, audit trail, and controlled finance execution.",
  "Communication and Parent Engagement":
    "Parent portal, notifications, acknowledgements, class notices, absence notices, and appointments.",
  "Intelligence and Analytics":
    "Dashboards, workload, appraisal, CBT analytics, attendance trends, and AI-assisted insight."
};

const rolloutSteps = [
  {
    title: "Map the operating reality",
    description:
      "Use the demo to review current records, users, departments, plan fit, and the first workflows that must be controlled."
  },
  {
    title: "Select the module path",
    description:
      "Choose Basic, Standard, Premium, Enterprise, or Founder Institutional Partner according to school size, readiness, and adoption scope."
  },
  {
    title: "Move from tour to rollout",
    description:
      "Steward Systems keeps the public request in Core while Operavault later owns tenant setup, module availability, and operational access."
  }
];

function statusCounts(group: OperavaultModuleGroup) {
  const modules = getOperavaultModulesByGroup(group);

  return {
    available: modules.filter((moduleData) => moduleData.status === "available")
      .length,
    active: modules.filter(
      (moduleData) => moduleData.status === "active_development"
    ).length,
    total: modules.length
  };
}

function moduleNames(slugs: string[]) {
  return slugs
    .map((slug) => getOperavaultModuleBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));
}

export function OperavaultLandingPage() {
  const highlightedPlans = operavaultPlans.filter((plan) =>
    ["Basic", "Standard", "Premium", "Enterprise"].includes(plan.name)
  );

  return (
    <main>
      <section className="ova-hero">
        <div className="ova-hero-copy">
          <div className="ova-brand-lockup">
            <Image
              src="/operavault-logo.png"
              alt="Operavault logo"
              width={140}
              height={94}
              priority
            />
            <div>
              <p className="eyebrow">Unified School Operations Platform</p>
              <h1>Operavault</h1>
              <span>by Steward Systems</span>
            </div>
          </div>
          <p className="ova-hero-statement">{operavaultHeroStatement}</p>
          <p className="ova-hero-lede">{operavaultHeroLede}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/request-demo">
              <span>Request a demo</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-secondary" href="/features">
              <span>Explore modules</span>
              <Layers3 aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-ghost" href="/pricing">
              <span>View plans</span>
              <Gauge aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="ova-command-shell" aria-label="Operavault product mockup">
          <div className="ova-command-top">
            <span>Command center</span>
            <strong>Leadership visibility</strong>
          </div>
          <div className="ova-signal-grid">
            {leadershipSignals.map((signal) => (
              <div key={signal.label}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <small>{signal.detail}</small>
              </div>
            ))}
          </div>
          <div className="ova-workflow-strip">
            <strong>Profile to Workflow to Review to Report</strong>
            <span>Public-safe product tour mockup. No tenant records are connected.</span>
          </div>
        </div>
      </section>

      <section className="ova-proof-bar" aria-label="Operavault proof points">
        {[
          ["41", "public module entries"],
          ["6", "school workstreams"],
          ["5", "plan paths"],
          ["0", "tenant records exposed"]
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="page-section ova-section">
        <div className="ova-split-heading">
          <div>
            <p className="eyebrow">The Operating Problem</p>
            <h2>Schools do not fail from lack of forms. They struggle when records and responsibility are scattered.</h2>
          </div>
          <p>
            Operavault is built for administrators who need one serious layer
            for people records, academics, attendance, discipline, finance,
            parent engagement, staff work, and management visibility.
          </p>
        </div>
        <div className="ova-pain-grid">
          {painPoints.map((point, index) => (
            <article key={point}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section ova-section ova-operating-spine">
        <div>
          <p className="eyebrow">Operating Spine</p>
          <h2>From profile to workflow to review to report.</h2>
          <p>
            Operavault treats school administration as connected institutional
            evidence. A student, staff member, parent, fee item, procurement
            request, discipline case, lesson submission, or report card should
            not live outside the operating record.
          </p>
        </div>
        <div className="ova-spine-steps">
          {[
            ["Profile", "People, classes, departments, roles, and records"],
            ["Workflow", "Attendance, academics, finance, HR, and requests"],
            ["Review", "HODs, TICs, advisers, accounts, HR, and management"],
            ["Report", "Dashboards, audit trail, parent visibility, and summaries"]
          ].map(([title, detail]) => (
            <article key={title}>
              <Workflow aria-hidden="true" size={20} />
              <strong>{title}</strong>
              <span>{detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section ova-section">
        <div className="section-heading">
          <p className="eyebrow">Premium Deliverables</p>
          <h2>The platform is sold through real operational deliverables, not decorative software promises.</h2>
          <p>
            These are the areas a school administrator should understand
            quickly before requesting a guided product conversation.
          </p>
        </div>
        <div className="ova-deliverable-grid">
          {conversionDeliverables.map((deliverable) => {
            const Icon = deliverable.icon;
            const names = moduleNames(deliverable.modules);

            return (
              <article key={deliverable.title}>
                <Icon aria-hidden="true" size={24} />
                <h3>{deliverable.title}</h3>
                <p>{deliverable.description}</p>
                <div>
                  {names.map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section ova-section">
        <div className="ova-split-heading">
          <div>
            <p className="eyebrow">Module Universe</p>
            <h2>Six workstreams cover the school office, classroom record, parent channel, and leadership desk.</h2>
          </div>
          <Link className="button button-secondary" href="/features">
            <span>Open module catalogue</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="ova-workstream-grid">
          {operavaultModuleGroups.map((group) => {
            const counts = statusCounts(group);
            const modules = getOperavaultModulesByGroup(group);

            return (
              <article key={group}>
                <p className="eyebrow">{group}</p>
                <h3>{groupSummaries[group]}</h3>
                <div className="ova-workstream-metrics">
                  <span>{counts.total} modules</span>
                  <span>{counts.available} available foundations</span>
                  <span>{counts.active} in active development</span>
                </div>
                <div className="ova-workstream-links">
                  {modules.slice(0, 4).map((moduleData) => (
                    <Link key={moduleData.slug} href={`/features/${moduleData.slug}`}>
                      {moduleData.name}
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section ova-section">
        <div className="section-heading">
          <p className="eyebrow">Guided Product Tour</p>
          <h2>The first workflows most school leaders ask to inspect.</h2>
          <p>
            These sections use public-safe mockups and module evidence. Active
            development areas are labelled as such.
          </p>
        </div>
        <div className="ova-tour-list">
          {operavaultTourSections.slice(0, 8).map((section) => {
            const moduleData = getOperavaultModuleBySlug(section.moduleSlug);

            if (!moduleData) {
              return null;
            }

            return (
              <article key={section.title}>
                <div>
                  <span>{moduleData.group}</span>
                  <em>{getOperavaultStatusLabel(moduleData.status)}</em>
                </div>
                <h3>{section.title}</h3>
                <p>{section.summary}</p>
                <ul>
                  {section.proofPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link href={`/features/${moduleData.slug}`}>
                  Inspect {moduleData.name}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section ova-section ova-plan-section">
        <div>
          <p className="eyebrow">Plan-Aware Packaging</p>
          <h2>Start with the right operating scope.</h2>
          <p>
            Public pricing is a plan overview. Operavault later handles tenant
            subscription, enabled modules, role permissions, and feature
            enforcement inside the product portal.
          </p>
        </div>
        <div className="ova-plan-grid">
          {highlightedPlans.map((plan) => (
            <article key={plan.name} className={plan.highlighted ? "is-highlighted" : ""}>
              <span>{plan.availability}</span>
              <h3>{plan.name}</h3>
              <p>{plan.positioning}</p>
              <small>{plan.idealFor}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section ova-section ova-trust-section">
        <div>
          <p className="eyebrow">Institutional Trust</p>
          <h2>Public pages sell the product. Private records stay inside Operavault.</h2>
        </div>
        <div className="ova-trust-grid">
          {[
            {
              title: "Tenant-safe boundary",
              detail:
                "The Steward Systems website does not connect to live school operations, Whitesands data, or tenant records.",
              icon: LockKeyhole
            },
            {
              title: "Governance-ready access",
              detail:
                "Plans define module ownership. Permissions define what people can see and do inside an institution.",
              icon: ShieldCheck
            },
            {
              title: "Audit-backed operations",
              detail:
                "Workflows are framed around evidence, actors, review states, and accountability trails.",
              icon: FileCheck2
            },
            {
              title: "Structured rollout",
              detail:
                "The demo conversation narrows module scope, plan fit, readiness, data boundaries, and adoption path.",
              icon: ClipboardCheck
            }
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title}>
                <Icon aria-hidden="true" size={22} />
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section ova-section ova-demo-path">
        <div>
          <p className="eyebrow">Demo Path</p>
          <h2>Use one focused conversation to understand fit.</h2>
        </div>
        <div>
          {rolloutSteps.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ova-final-cta">
        <div>
          <p className="eyebrow">See it with your school context</p>
          <h2>Request an Operavault demo built around the workflows your administrators need to control first.</h2>
          <p>
            Share your preferred plan, demo time, and priority areas. Steward
            Systems will review the request and follow up with a structured
            product conversation.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button button-primary" href="/request-demo">
            <span>Request a demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-secondary" href="/products/operavault/demo">
            <span>Open public demo</span>
            <BookOpenCheck aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
