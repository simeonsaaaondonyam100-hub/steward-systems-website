import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  Workflow
} from "lucide-react";

import {
  getOperavaultModulesByGroup,
  operavaultHeroLede,
  operavaultHeroStatement,
  operavaultModuleGroups,
  operavaultPlans,
  type OperavaultModuleGroup
} from "@/modules/product/operavault-product";

const leadershipSignals = [
  {
    label: "Academics",
    value: "86%",
    detail: "Ready classes"
  },
  {
    label: "Attendance",
    value: "Live",
    detail: "Live registers"
  },
  {
    label: "Finance",
    value: "12",
    detail: "Exceptions"
  },
  {
    label: "Audit",
    value: "Tracked",
    detail: "Evidence trail"
  }
];

const commandRoute = [
  "Profile",
  "Workflow",
  "Review",
  "Report"
];

const groupSummaries: Record<OperavaultModuleGroup, string> = {
  "People Records": "Student, staff, parent, onboarding, and permission records.",
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

const productScenes = [
  {
    eyebrow: "Report Card Generation",
    title: "Full-term report snapshot",
    status: "Ready for use",
    metric: "91.4%",
    metricLabel: "class academic average",
    summary:
      "A report-card workspace can combine scores, behaviour, skills, advisory scores, TIC notes, and principal comments before publication.",
    rows: [
      ["Student", "Maya Okonkwo"],
      ["Class", "SS2 Science"],
      ["Term", "Second Term"],
      ["Snapshot", "Locked for TIC review"]
    ]
  },
  {
    eyebrow: "Broadsheet Publishing",
    title: "Class score matrix",
    status: "Ready for use",
    metric: "8/8",
    metricLabel: "subjects approved",
    summary:
      "IT and academic reviewers can inspect CA, exam, total, grade, status, and correction flags before report cards are locked.",
    rows: [
      ["English", "18 + 16 + 54 = 88 A"],
      ["Mathematics", "17 + 18 + 56 = 91 A"],
      ["Chemistry", "16 + 15 + 50 = 81 A"],
      ["Biology", "15 + 17 + 52 = 84 A"]
    ]
  },
  {
    eyebrow: "Lesson Plan / Diary",
    title: "Planning delivery queue",
    status: "Ready for use",
    metric: "94%",
    metricLabel: "lesson submission",
    summary:
      "Scheme rows, weekly lesson plans, class diary entries, HOD checks, and materials stay connected to each teaching context.",
    rows: [
      ["Week 7", "Comprehension: main idea"],
      ["Lesson plan", "Submitted"],
      ["Diary", "Taught with homework evidence"],
      ["HOD check", "Reviewed"]
    ]
  },
  {
    eyebrow: "Attendance and Discipline",
    title: "Daily presence and conduct",
    status: "Ready for use",
    metric: "97%",
    metricLabel: "daily attendance",
    summary:
      "Registers, late/absent signals, discipline bookings, behaviour history, and escalation evidence can be reviewed from one place.",
    rows: [
      ["JSS 3A", "38 present, 1 late, 1 absent"],
      ["Staff", "76 present, 4 pending"],
      ["Discipline", "2 cases under review"],
      ["Escalations", "Parent notice prepared"]
    ]
  },
  {
    eyebrow: "Class Noticeboard",
    title: "Masked student output",
    status: "Ready for use",
    metric: "Safe",
    metricLabel: "name-protected publication",
    summary:
      "Noticeboard views can publish score-checking outputs without exposing names unnecessarily.",
    rows: [
      ["ADM-2041", "ENG 88, MAT 91, BIO 84"],
      ["ADM-2077", "ENG 79, MAT 86, BIO 81"],
      ["ADM-2135", "ENG 92, MAT 88, BIO 90"],
      ["Display", "Admission-number mode"]
    ]
  },
  {
    eyebrow: "Appraisal and Workload",
    title: "Staff evidence profile",
    status: "Ready for use",
    metric: "4.6/5",
    metricLabel: "sample appraisal score",
    summary:
      "Attendance, duties, lesson evidence, diary checks, advisory work, and completed tasks can support appraisal-ready review.",
    rows: [
      ["Teaching duty", "34 points"],
      ["Review tasks", "11 completed"],
      ["Diary checks", "18 verified"],
      ["Readiness", "Supervisor review"]
    ]
  },
  {
    eyebrow: "Finance and Administration",
    title: "Procurement and fee signals",
    status: "Ready for use",
    metric: "N2.4m",
    metricLabel: "sample cleared value",
    summary:
      "Fees, parent notices, procurement requests, loans, approvals, and audit history can sit beside operational review queues.",
    rows: [
      ["Procurement", "6 requests funded"],
      ["Fees", "42 parent notices queued"],
      ["Loans", "3 repayment schedules"],
      ["Approvals", "Role-aware review"]
    ]
  },
  {
    eyebrow: "Advisory Meetings",
    title: "Formation report evidence",
    status: "Ready for use",
    metric: "28",
    metricLabel: "cycle reports submitted",
    summary:
      "Advisory reports can separate advisee, father, mother, and submission evidence while keeping leadership visibility intact.",
    rows: [
      ["Cycle", "Fortnight 4"],
      ["Advisee evidence", "Captured"],
      ["Parent meeting", "Logged"],
      ["Submission", "Ready for review"]
    ]
  }
];

const operatingSteps = [
  ["Profile", "People, classes, departments, roles, and records"],
  ["Workflow", "Attendance, academics, finance, HR, and requests"],
  ["Review", "HODs, TICs, advisers, accounts, HR, and management"],
  ["Report", "Dashboards, audit trail, parent visibility, and summaries"]
];

const trustItems = [
  {
    title: "No private records in the public tour",
    detail:
      "The website uses synthetic examples only. School tenant data stays inside each institution's Operavault deployment.",
    icon: LockKeyhole
  },
  {
    title: "Plan-aware adoption",
    detail:
      "Module access is controlled by plan, role, permission, and implementation scope inside the actual portal.",
    icon: ShieldCheck
  },
  {
    title: "Evidence-led operations",
    detail:
      "Every visible workflow is framed around records, actors, review states, and accountability trails.",
    icon: Workflow
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

function ProductSceneCard({
  scene,
  duplicateIndex
}: {
  scene: (typeof productScenes)[number];
  duplicateIndex: number;
}) {
  return (
    <article className="ova-cinema-card" aria-hidden={duplicateIndex > 0}>
      <div className="ova-cinema-card-head">
        <span>{scene.eyebrow}</span>
        <em>{scene.status}</em>
      </div>
      <h3>{scene.title}</h3>
      <p>{scene.summary}</p>
      <div className="ova-cinema-metric">
        <strong>{scene.metric}</strong>
        <span>{scene.metricLabel}</span>
      </div>
      <div className="ova-cinema-rows">
        {scene.rows.map(([label, value]) => (
          <div key={`${scene.title}-${label}`}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}

export function OperavaultLandingPage() {
  const highlightedPlans = operavaultPlans.filter((plan) =>
    ["Basic", "Standard", "Premium", "Enterprise"].includes(plan.name)
  );
  const firstSceneRow = productScenes.slice(0, 4);
  const secondSceneRow = productScenes.slice(4);

  return (
    <main>
      <section className="ova-hero">
        <div className="ova-hero-copy">
          <div className="ova-brand-lockup">
            <Image
              src="/operavault-logo.png"
              alt="Operavault logo"
              width={156}
              height={156}
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
              <span>Book a guided demo</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-secondary" href="/features">
              <span>Explore modules</span>
              <Layers3 aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <div className="ova-command-shell" aria-label="Operavault product preview">
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
          <div className="ova-command-route" aria-label="Operating route">
            {commandRoute.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <div className="ova-workflow-strip">
            <strong>Profile to workflow to review to report</strong>
            <span>Synthetic product preview for a public website tour.</span>
          </div>
        </div>
      </section>

      <section className="page-section ova-section ova-cinema-section">
        <div className="section-heading">
          <p className="eyebrow">Public Product Tour</p>
          <h2>See the operating surfaces schools usually ask to inspect first.</h2>
          <p>
            These previews use fictional records, but they are shaped around
            the working Operavault modules: reporting, broadsheets, lesson
            evidence, attendance, finance, communication, workload, and review.
          </p>
        </div>
        <div className="ova-cinema-stage" aria-label="Illustrative product surfaces">
          <div className="ova-cinema-track ova-cinema-track-left">
            {[...firstSceneRow, ...firstSceneRow].map((scene, index) => (
              <ProductSceneCard
                key={`left-${scene.title}-${index}`}
                duplicateIndex={index >= firstSceneRow.length ? 1 : 0}
                scene={scene}
              />
            ))}
          </div>
          <div className="ova-cinema-track ova-cinema-track-right">
            {[...secondSceneRow, ...secondSceneRow].map((scene, index) => (
              <ProductSceneCard
                key={`right-${scene.title}-${index}`}
                duplicateIndex={index >= secondSceneRow.length ? 1 : 0}
                scene={scene}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section ova-section ova-operating-spine">
        <div>
          <p className="eyebrow">Operating Spine</p>
          <h2>Operavault is not a form library. It is a school operating layer.</h2>
          <p>
            The product connects profiles, workflows, reviews, reports, roles,
            and audit evidence so administrators can see how institutional work
            moves from record creation to leadership decision.
          </p>
        </div>
        <div className="ova-spine-steps">
          {operatingSteps.map(([title, detail]) => (
            <article key={title}>
              <Workflow aria-hidden="true" size={20} />
              <strong>{title}</strong>
              <span>{detail}</span>
            </article>
          ))}
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
                  <span>{counts.available} ready for use</span>
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

      <section className="page-section ova-section ova-plan-section">
        <div>
          <p className="eyebrow">Plan-Aware Packaging</p>
          <h2>Start with the operating scope your school can adopt well.</h2>
          <p>
            Operavault plans define which modules are enabled, how deeply the
            rollout is configured, and what level of support your school needs.
            A guided demo narrows the right starting point before adoption.
          </p>
          <Link className="button button-secondary" href="/pricing">
            <span>Compare plans</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
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
        <div className="section-heading">
          <p className="eyebrow">Institutional Trust</p>
          <h2>Serious school software should protect records by design.</h2>
        </div>
        <div className="ova-trust-grid">
          {trustItems.map((item) => {
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

      <section className="ova-final-cta">
        <div>
          <p className="eyebrow">See it with your school context</p>
          <h2>Request an Operavault demo built around the workflows your administrators need to control first.</h2>
          <p>
            Share your preferred plan, demo time, and priority areas. Steward
            Systems will follow up with a structured product conversation built
            around your institution.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button button-primary" href="/request-demo">
            <span>Request a demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-secondary" href="/products/operavault/demo">
            <span>Open demo tour</span>
            <BookOpenCheck aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
