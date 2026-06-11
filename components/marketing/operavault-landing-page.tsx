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

type ProductScene = {
  eyebrow: string;
  title: string;
  status: string;
  metric: string;
  metricLabel: string;
  summary: string;
  rows: string[][];
  report?: {
    school: string;
    term: string;
    student: string;
    admission: string;
    className: string;
    attendance: string;
    subjects: Array<{
      subject: string;
      ca: string;
      exam: string;
      final: string;
      grade: string;
      position: string;
    }>;
    summary: string[][];
    comments: string[];
  };
  chart?: {
    center: string;
    centerLabel: string;
    gradient: string;
    legend: Array<{
      label: string;
      value: string;
      tone: "green" | "gold" | "red" | "navy";
    }>;
    bars?: Array<{
      label: string;
      value: string;
      width: string;
    }>;
  };
};

const productScenes: ProductScene[] = [
  {
    eyebrow: "Report Card Generation",
    title: "Full-term progress report",
    status: "Ready for use",
    metric: "88.4%",
    metricLabel: "fictional student average",
    summary:
      "A public-safe report card sample shows how Operavault can present subject scores, class context, attendance, comments, and summary data.",
    rows: [
      ["Student", "Maya Okonkwo"],
      ["Class", "JSS 2 Gold"],
      ["Term", "Second Term"],
      ["Snapshot", "Locked for TIC review"]
    ],
    report: {
      school: "Greenfield Academy",
      term: "2026/2027 | 2nd Term",
      student: "Maya Okonkwo",
      admission: "ADM-G-2027-2041",
      className: "JSS 2 Gold",
      attendance: "118 / 124",
      subjects: [
        { subject: "English Language", ca: "34", exam: "53", final: "87", grade: "A1", position: "2nd" },
        { subject: "Mathematics", ca: "36", exam: "55", final: "91", grade: "A1", position: "1st" },
        { subject: "Basic Science", ca: "33", exam: "51", final: "84", grade: "A1", position: "3rd" },
        { subject: "History", ca: "31", exam: "49", final: "80", grade: "A1", position: "4th" },
        { subject: "Civic Education", ca: "35", exam: "50", final: "85", grade: "A1", position: "2nd" },
        { subject: "Visual Arts", ca: "37", exam: "56", final: "93", grade: "A1", position: "1st" },
        { subject: "French", ca: "32", exam: "46", final: "78", grade: "B2", position: "5th" },
        { subject: "ICT", ca: "38", exam: "55", final: "93", grade: "A1", position: "1st" },
        { subject: "Business Studies", ca: "35", exam: "52", final: "87", grade: "A1", position: "2nd" },
        { subject: "Physical Education", ca: "39", exam: "54", final: "93", grade: "A1", position: "1st" }
      ],
      summary: [
        ["Student average", "88.4%"],
        ["Class average", "76.8%"],
        ["Year group average", "74.9%"],
        ["Overall position", "2nd"]
      ],
      comments: [
        "Class Teacher: Maya shows disciplined progress, strong participation, and consistent homework completion.",
        "Principal: Excellent term. Keep strengthening written explanations and leadership confidence."
      ]
    }
  },
  {
    eyebrow: "Operational Analytics",
    title: "Attention and pressure mix",
    status: "Ready for use",
    metric: "17",
    metricLabel: "visible action signals",
    summary:
      "Leadership dashboards can combine open action pressure, overdue duties, recent completions, and unread notifications by role scope.",
    rows: [
      ["Action required", "7"],
      ["High priority", "3"],
      ["My open items", "5"],
      ["Unread notifications", "2"]
    ],
    chart: {
      center: "7",
      centerLabel: "actions",
      gradient:
        "conic-gradient(#c47413 0 42%, #c9282d 42% 60%, #6f9274 60% 88%, #ffcc3f 88% 100%)",
      legend: [
        { label: "Action required", value: "7", tone: "gold" },
        { label: "High priority", value: "3", tone: "red" },
        { label: "My open items", value: "5", tone: "green" },
        { label: "Unread notifications", value: "2", tone: "navy" }
      ],
      bars: [
        { label: "Pending", value: "9", width: "55%" },
        { label: "Overdue", value: "3", width: "22%" },
        { label: "Recently completed", value: "22", width: "92%" }
      ]
    }
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
    eyebrow: "Broadsheet Analytics",
    title: "Readiness mix",
    status: "Ready for use",
    metric: "28",
    metricLabel: "score rows",
    summary:
      "Academic teams can see approved, locked, awaiting-review, and missing score rows before compilation decisions are made.",
    rows: [
      ["Approved", "16 score rows"],
      ["Locked", "8 score rows"],
      ["Awaiting review", "3 score rows"],
      ["Missing", "1 score row"]
    ],
    chart: {
      center: "28",
      centerLabel: "score rows",
      gradient:
        "conic-gradient(#0f5d47 0 57%, #061a2f 57% 86%, #6f9274 86% 96%, #c47413 96% 100%)",
      legend: [
        { label: "Approved", value: "16", tone: "green" },
        { label: "Locked", value: "8", tone: "navy" },
        { label: "Awaiting review", value: "3", tone: "green" },
        { label: "Missing", value: "1", tone: "gold" }
      ]
    }
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
    eyebrow: "Student Attendance Analytics",
    title: "Class coverage",
    status: "Ready for use",
    metric: "12/12",
    metricLabel: "classes marked today",
    summary:
      "Attendance dashboards can show class coverage, pending registers, verification gaps, and calendar exceptions.",
    rows: [
      ["Classes marked", "12"],
      ["Classes pending", "0"],
      ["Verified registers", "11"],
      ["Exceptions", "1 calendar note"]
    ],
    chart: {
      center: "12/12",
      centerLabel: "classes",
      gradient: "conic-gradient(#0f5d47 0 92%, #ffcc3f 92% 100%)",
      legend: [
        { label: "Classes marked", value: "12", tone: "green" },
        { label: "Classes pending", value: "0", tone: "gold" },
        { label: "Calendar exceptions", value: "1", tone: "navy" }
      ]
    }
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
    eyebrow: "Discipline Analytics",
    title: "Case status and patterns",
    status: "Ready for use",
    metric: "18",
    metricLabel: "visible cases",
    summary:
      "Discipline analytics can summarise submitted, under-review, notified, resolved, and escalated cases with offence patterns.",
    rows: [
      ["Submitted", "6 cases"],
      ["Under review", "4 cases"],
      ["Resolved", "7 cases"],
      ["Escalated", "1 case"]
    ],
    chart: {
      center: "18",
      centerLabel: "cases",
      gradient:
        "conic-gradient(#6f9274 0 33%, #c47413 33% 55%, #0f5d47 55% 94%, #c9282d 94% 100%)",
      legend: [
        { label: "Submitted", value: "6", tone: "green" },
        { label: "Under review", value: "4", tone: "gold" },
        { label: "Resolved", value: "7", tone: "green" },
        { label: "Escalated", value: "1", tone: "red" }
      ],
      bars: [
        { label: "Homework default", value: "7", width: "88%" },
        { label: "Incomplete notes", value: "5", width: "64%" },
        { label: "Late return", value: "3", width: "42%" }
      ]
    }
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
  scene: ProductScene;
  duplicateIndex: number;
}) {
  return (
    <article
      className={`ova-cinema-card${scene.report ? " ova-cinema-card-report" : ""}${scene.chart ? " ova-cinema-card-chart" : ""}`}
      aria-hidden={duplicateIndex > 0}
    >
      <div className="ova-cinema-card-head">
        <span>{scene.eyebrow}</span>
        <em>{scene.status}</em>
      </div>
      <h3>{scene.title}</h3>
      <p>{scene.summary}</p>
      {scene.report ? (
        <div className="ova-report-preview">
          <div className="ova-report-preview-header">
            <div aria-hidden="true">GA</div>
            <div>
              <strong>{scene.report.school}</strong>
              <span>Full Term Progress Report</span>
              <small>{scene.report.term}</small>
            </div>
          </div>
          <div className="ova-report-info-grid">
            {[
              ["Student", scene.report.student],
              ["Admission No.", scene.report.admission],
              ["Class", scene.report.className],
              ["Attendance", scene.report.attendance]
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="ova-report-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>CA</th>
                  <th>Exam</th>
                  <th>Final</th>
                  <th>Grade</th>
                  <th>Pos.</th>
                </tr>
              </thead>
              <tbody>
                {scene.report.subjects.map((subject) => (
                  <tr key={subject.subject}>
                    <td>{subject.subject}</td>
                    <td>{subject.ca}</td>
                    <td>{subject.exam}</td>
                    <td>{subject.final}</td>
                    <td>{subject.grade}</td>
                    <td>{subject.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="ova-report-summary-grid">
            {scene.report.summary.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="ova-report-comments">
            {scene.report.comments.map((comment) => (
              <p key={comment}>{comment}</p>
            ))}
          </div>
        </div>
      ) : null}
      {scene.chart ? (
        <div className="ova-chart-preview">
          <div
            className="ova-chart-donut"
            style={{ background: scene.chart.gradient }}
          >
            <span>
              <strong>{scene.chart.center}</strong>
              <small>{scene.chart.centerLabel}</small>
            </span>
          </div>
          <div className="ova-chart-legend">
            {scene.chart.legend.map((item) => (
              <div key={item.label}>
                <i className={`ova-chart-dot ova-chart-dot-${item.tone}`} />
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          {scene.chart.bars ? (
            <div className="ova-chart-bars">
              {scene.chart.bars.map((bar) => (
                <div key={bar.label}>
                  <span>
                    <strong>{bar.label}</strong>
                    <em>{bar.value}</em>
                  </span>
                  <i>
                    <b style={{ width: bar.width }} />
                  </i>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      {!scene.report && !scene.chart ? (
        <>
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
        </>
      ) : null}
    </article>
  );
}

export function OperavaultLandingPage() {
  const highlightedPlans = operavaultPlans.filter((plan) =>
    ["Basic", "Standard", "Premium", "Enterprise"].includes(plan.name)
  );
  const firstSceneRow = productScenes.slice(0, 5);
  const secondSceneRow = productScenes.slice(5);

  return (
    <main>
      <section className="ova-hero">
        <div className="ova-hero-intro">
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
          <div className="ova-hero-notes">
            <p className="ova-hero-statement">{operavaultHeroStatement}</p>
            <p className="ova-hero-lede">{operavaultHeroLede}</p>
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
        <div className="hero-actions ova-hero-actions">
          <Link className="button button-primary" href="/request-demo">
            <span>Book a guided demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-secondary" href="/features">
            <span>Explore modules</span>
            <Layers3 aria-hidden="true" size={18} />
          </Link>
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
