export type OperavaultModuleGroup =
  | "People Records"
  | "Academic Operations"
  | "Attendance and Discipline"
  | "Finance and Administration"
  | "Communication and Parent Engagement"
  | "Intelligence and Analytics";

export type OperavaultModuleStatus =
  | "available"
  | "active_development"
  | "structured_testing";

export type OperavaultModule = {
  slug: string;
  aliases?: string[];
  name: string;
  group: OperavaultModuleGroup;
  summary: string;
  problem: string;
  users: string[];
  workflows: string[];
  planAvailability: string;
  status: OperavaultModuleStatus;
  mockupCards: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
};

export type OperavaultPlan = {
  name: string;
  positioning: string;
  idealFor: string;
  availability: string;
  features: string[];
  highlighted?: boolean;
};

export type OperavaultTourSection = {
  title: string;
  moduleSlug: string;
  summary: string;
  proofPoints: string[];
};

type OperavaultModuleSeed = {
  slug: string;
  aliases?: string[];
  name: string;
  group: OperavaultModuleGroup;
  summary: string;
  status: OperavaultModuleStatus;
  workflows: string[];
  planAvailability?: string;
  problem?: string;
  users?: string[];
};

export const operavaultHeroStatement =
  "One operating system for school administration, academic records, parent engagement, compliance evidence, staff workflows, and management visibility.";

export const operavaultHeroLede =
  "Operavault gives school leaders one secure operating layer for people records, academics, attendance, discipline, finance workflows, parent communication, audit trails, staff duties, and decision intelligence.";

export const operavaultModuleGroups: OperavaultModuleGroup[] = [
  "People Records",
  "Academic Operations",
  "Attendance and Discipline",
  "Finance and Administration",
  "Communication and Parent Engagement",
  "Intelligence and Analytics"
];

const groupUsers: Record<OperavaultModuleGroup, string[]> = {
  "People Records": ["Registrars", "HR teams", "school administrators"],
  "Academic Operations": ["Teachers", "academic leaders", "examination teams"],
  "Attendance and Discipline": ["Class teams", "discipline officers", "school leadership"],
  "Finance and Administration": ["Accounts teams", "operations teams", "approvers"],
  "Communication and Parent Engagement": ["Parents", "advisers", "communication teams"],
  "Intelligence and Analytics": ["Management teams", "HR leaders", "school leadership"]
};

const moduleSeeds: OperavaultModuleSeed[] = [
  {
    slug: "students-management",
    aliases: ["student-records"],
    name: "Students Management",
    group: "People Records",
    status: "available",
    summary:
      "Student records, class placement, academic profile, documents, and operational history.",
    workflows: [
      "Maintain student biodata and admission context",
      "Review class and year-group placement",
      "Connect academic and attendance records"
    ],
    planAvailability: "Basic and above"
  },
  {
    slug: "staff-management",
    aliases: ["staff-records"],
    name: "Staff Management",
    group: "People Records",
    status: "available",
    summary:
      "Employee records, departments, positions, credentials, attendance, workload, and HR context.",
    workflows: [
      "Maintain department and position records",
      "Track credentials and onboarding",
      "Prepare workload and appraisal readiness"
    ],
    planAvailability: "Basic and above"
  },
  {
    slug: "parents-guardians-management",
    name: "Parents/Guardians Management",
    group: "People Records",
    status: "available",
    summary:
      "Parent records, linked children, requests, documents, appointments, and communication history.",
    workflows: [
      "Maintain parent-child linkage",
      "Review parent portal records",
      "Track documents and requests"
    ],
    planAvailability: "Basic and above"
  },
  {
    slug: "employee-onboarding",
    name: "Employee Onboarding",
    group: "People Records",
    status: "available",
    summary:
      "Invite-led employee onboarding that connects staff accounts to operational profiles.",
    workflows: [
      "Issue onboarding invites",
      "Connect staff accounts to employee profiles",
      "Track secure onboarding progress"
    ],
    planAvailability: "Basic and above"
  },
  {
    slug: "role-permission-management",
    name: "Role and Permission Management",
    group: "People Records",
    status: "available",
    summary:
      "Role-based governance where plans define school ownership and permissions define user action.",
    workflows: [
      "Manage RBAC controls",
      "Review permission overrides",
      "Support audit-aware access decisions"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "gradebook",
    name: "Gradebook",
    group: "Academic Operations",
    status: "available",
    summary:
      "Gradebook reads from teacher score-entry records so teachers do not duplicate work.",
    problem:
      "Teachers should not enter scores in one place and then rebuild a gradebook elsewhere. Gradebook keeps score-entry records as the academic source of truth.",
    users: ["Subject teachers", "HODs", "academic administrators"],
    workflows: [
      "Use CA and exam score-entry records",
      "Scope records by teacher, class, and subject",
      "Review score status before compilation"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "report-card-generation",
    name: "Report Card Generation",
    group: "Academic Operations",
    status: "available",
    summary:
      "Report cards compile locked snapshots, TIC handoff, and parent publication into one controlled workflow.",
    problem:
      "Schools often compile results from scattered teacher score sheets, comments, behaviour records, and approval notes. This module creates a controlled path toward report-card integrity.",
    users: ["IT / school section", "academic administrators", "TICs"],
    workflows: [
      "Prepare snapshot-ready reporting",
      "Support TIC handoff discipline",
      "Prepare parent publication readiness"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "broadsheet-publishing",
    aliases: ["broadsheet-class-noticeboard"],
    name: "Broadsheet Publishing",
    group: "Academic Operations",
    status: "available",
    summary:
      "IT broadsheets support class and year-group review before final report-card locking.",
    workflows: [
      "Review CA1, CA2, and exam visibility",
      "Track correction flags",
      "Prepare noticeboard-safe output"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "cbt-waec-jamb-testing",
    aliases: ["waec-jamb-standard-cbt"],
    name: "CBT / WAEC-JAMB Standard Testing",
    group: "Academic Operations",
    status: "active_development",
    summary:
      "CBT and examination-standard testing are currently being developed as part of the Operavault roadmap.",
    workflows: [
      "Prepare question-bank direction",
      "Support timed testing workflows",
      "Build performance analytics readiness"
    ],
    planAvailability: "Premium roadmap / Founder partner evaluation"
  },
  {
    slug: "lesson-plan-submission",
    name: "Lesson Plan Submission",
    group: "Academic Operations",
    status: "available",
    summary:
      "Lesson plans connect teacher assignments to weekly submission and HOD review evidence.",
    workflows: [
      "Submit weekly lesson evidence",
      "Route plans to department review",
      "Feed workload and appraisal signals"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "diary-filling",
    name: "Diary Filling",
    group: "Academic Operations",
    status: "available",
    summary:
      "Class diary records connect scheme topics, taught status, homework evidence, and HOD checks.",
    workflows: [
      "Record topic-by-topic diary entries",
      "Track taught and carried-over status",
      "Support HOD verification"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "timetable",
    name: "Timetable",
    group: "Academic Operations",
    status: "available",
    summary:
      "Teacher and class timetable context is driven by durable academic assignments.",
    workflows: [
      "Review teacher timetable context",
      "Review class timetable context",
      "Prepare generator input readiness"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "subject-class-attendance",
    name: "Subject/Class Attendance",
    group: "Academic Operations",
    status: "available",
    summary:
      "Subject and class attendance links timetable context, class records, and academic reporting signals.",
    workflows: [
      "Link attendance to class context",
      "Add subject attendance context",
      "Prepare trend reporting readiness"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "schemes-of-work",
    name: "Schemes of Work",
    group: "Academic Operations",
    status: "available",
    summary:
      "Schemes of Work support file evidence and structured topic rows for diary automation.",
    workflows: [
      "Capture structured weekly topics",
      "Record homework and activity plans",
      "Prepare diary population"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "advisory-records",
    name: "Advisory Records",
    group: "Academic Operations",
    status: "available",
    summary:
      "Advisory records capture fortnight cycles, advisee meetings, parent meetings, and report evidence.",
    workflows: [
      "Track advisee cycle reports",
      "Capture father and mother meeting evidence",
      "Prepare advisory score basis"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "student-attendance",
    name: "Student Attendance",
    group: "Attendance and Discipline",
    status: "available",
    summary: "Daily, weekly, term, and student-level attendance records.",
    users: ["Class teachers", "attendance officers", "school leadership"],
    workflows: [
      "Record daily registers",
      "Review weekly attendance views",
      "Prepare term summaries"
    ],
    planAvailability: "Basic and above"
  },
  {
    slug: "staff-attendance",
    name: "Staff Attendance",
    group: "Attendance and Discipline",
    status: "available",
    summary:
      "Staff attendance, late/absent status, import workflows, and HR visibility.",
    users: ["HR", "line managers", "school leadership"],
    workflows: [
      "Maintain staff attendance register",
      "Support attendance imports",
      "Prepare HR dashboard signals"
    ],
    planAvailability: "Basic and above"
  },
  {
    slug: "discipline-booking",
    name: "Discipline Booking",
    group: "Attendance and Discipline",
    status: "available",
    summary:
      "Behaviour and discipline case records with review, resolution, and parent context.",
    users: ["Discipline officers", "TICs", "advisers"],
    workflows: [
      "Record conduct case records",
      "Track resolution history",
      "Apply parent visibility controls"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "advisory-meetings-reporting",
    name: "Advisory Meetings and Reporting",
    group: "Attendance and Discipline",
    status: "available",
    summary:
      "Fortnightly advisory reports capture separate advisee, father, and mother evidence with submission visibility.",
    users: ["Advisers", "formation leadership", "parents where permitted"],
    workflows: [
      "Capture cycle-based reports",
      "Separate advisee, father, and mother evidence",
      "Track report submission status"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "behavioural-records",
    name: "Behavioural Records",
    group: "Attendance and Discipline",
    status: "available",
    summary:
      "Behavioural history links student discipline, advisory, and parent engagement contexts.",
    workflows: [
      "Review student behaviour history",
      "Support escalation visibility",
      "Maintain review trail"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "notifications-escalations",
    name: "Notifications and Escalations",
    group: "Attendance and Discipline",
    status: "available",
    summary:
      "Role-aware notifications for operational events, reviews, and accountability signals.",
    workflows: [
      "Route in-app notifications",
      "Apply role-aware routing",
      "Attach audit-friendly action links"
    ],
    planAvailability: "Basic and above"
  },
  {
    slug: "school-fees-sync-records",
    aliases: ["fees-parent-notification"],
    name: "School Fees Sync / Records",
    group: "Finance and Administration",
    status: "available",
    summary:
      "Fee definitions, charges, payment imports, ledger summaries, and reconciliation readiness.",
    users: ["Accounts", "parents", "school leadership"],
    workflows: [
      "Maintain fee ledger records",
      "Import payment records",
      "Review outstanding balance visibility"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "parent-notifications",
    name: "Parent Notifications",
    group: "Finance and Administration",
    status: "available",
    summary:
      "Parent notifications route operational and finance-related updates through controlled channels.",
    workflows: [
      "Prepare parent portal notices",
      "Connect request workflows",
      "Maintain linked-child visibility"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "procurement",
    name: "Procurement",
    group: "Finance and Administration",
    status: "available",
    summary:
      "Procurement requests, funding controls, fulfilment, reporting, and exceptions.",
    users: ["Requesters", "department heads", "procurement", "accounts"],
    workflows: [
      "Route request approvals",
      "Track funding pipeline",
      "Review department spend summaries"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "staff-loans",
    aliases: ["loans"],
    name: "Staff Loans",
    group: "Finance and Administration",
    status: "available",
    summary:
      "Loan applications, review, disbursement, repayment tracking, and payslip linkage.",
    users: ["Employees", "HR", "accounts", "management reviewers"],
    workflows: [
      "Review loan applications",
      "Track disbursement records",
      "Maintain repayment traceability"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "workflow-approvals",
    name: "Workflow Approvals",
    group: "Finance and Administration",
    status: "available",
    summary:
      "Workflow engine for approvals, assignments, and operational action history.",
    workflows: [
      "Route approval decisions",
      "Maintain workflow history",
      "Support role-aware review"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "audit-trail",
    name: "Audit Trail",
    group: "Finance and Administration",
    status: "available",
    summary:
      "Audit records support governance, accountability, and compliance evidence.",
    workflows: [
      "Preserve action history",
      "Record actor context",
      "Support administrative visibility"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "parent-portal",
    name: "Parent Portal",
    group: "Communication and Parent Engagement",
    status: "available",
    summary:
      "Parents access linked-child records, requests, documents, notifications, and reports where published.",
    workflows: [
      "Provide linked-child access",
      "Collect parent requests",
      "Publish approved report visibility"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "notifications",
    name: "Notifications",
    group: "Communication and Parent Engagement",
    status: "available",
    summary:
      "In-app notifications for staff, parents, managers, and operational review queues.",
    workflows: [
      "Deliver role-aware updates",
      "Attach action links",
      "Track read status"
    ],
    planAvailability: "Basic and above"
  },
  {
    slug: "acknowledgements",
    name: "Acknowledgements",
    group: "Communication and Parent Engagement",
    status: "available",
    summary:
      "Parent and staff acknowledgement workflows for documents, policies, and notices.",
    workflows: [
      "Track acknowledgement status",
      "Support policy readiness",
      "Keep parent records current"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "class-noticeboard",
    name: "Class Noticeboard",
    group: "Communication and Parent Engagement",
    status: "available",
    summary:
      "Class noticeboard publishing targets class and arm visibility with masked student-output controls.",
    workflows: [
      "Target notices by class",
      "Prepare masked broadsheet publishing",
      "Apply student dignity controls"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "masked-broadsheet-publishing",
    name: "Masked Broadsheet Publishing",
    group: "Communication and Parent Engagement",
    status: "available",
    summary:
      "Masked broadsheet publication protects student dignity by using admission numbers for noticeboard views.",
    workflows: [
      "Use admission-number display",
      "Support class noticeboard handoff",
      "Review before publication"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "absence-notices",
    name: "Absence Notices",
    group: "Communication and Parent Engagement",
    status: "available",
    summary: "Parent absence notices and operational review records.",
    workflows: [
      "Collect parent submissions",
      "Route review queue",
      "Connect linked-child context"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "appointments",
    name: "Appointments",
    group: "Communication and Parent Engagement",
    status: "available",
    summary: "Parent appointment records and review workflows.",
    workflows: [
      "Capture appointment requests",
      "Track review status",
      "Preserve parent communication history"
    ],
    planAvailability: "Standard and above"
  },
  {
    slug: "ai-system-analytics",
    name: "AI System Analytics",
    group: "Intelligence and Analytics",
    status: "active_development",
    summary:
      "AI-assisted operational analytics are currently being developed to support management insight.",
    users: ["Principal", "directors", "administrators"],
    workflows: [
      "Surface operational signals",
      "Support trend detection",
      "Prepare management summaries"
    ],
    planAvailability: "Enterprise / Founder partner evaluation"
  },
  {
    slug: "workload-visualisation",
    aliases: ["appraisal-workload-visualisation"],
    name: "Workload Visualisation",
    group: "Intelligence and Analytics",
    status: "available",
    summary:
      "Workload points, task history, duty sources, and performance readiness from real assignments.",
    users: ["Employees", "supervisors", "HR", "school leadership"],
    workflows: [
      "Break down duty sources",
      "Review completion and overdue metrics",
      "Prepare appraisal evidence"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "appraisal",
    name: "Appraisal",
    group: "Intelligence and Analytics",
    status: "available",
    summary:
      "Appraisal draws from real workload, attendance, lesson/diary, advisory, and review evidence.",
    workflows: [
      "Build evidence-based scoring",
      "Support supervisor accountability",
      "Prepare five-point measurement readiness"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "waec-wassce-essay-grading-engine",
    name: "WAEC/WASSCE Essay Grading Engine",
    group: "Intelligence and Analytics",
    status: "active_development",
    summary:
      "Essay grading support is currently being developed as part of the assessment intelligence roadmap.",
    users: ["English teachers", "exam reviewers", "academic leadership"],
    workflows: [
      "Support rubric-aligned review",
      "Keep teacher support central",
      "Prepare assessment analytics"
    ],
    planAvailability: "Premium roadmap / Founder partner evaluation"
  },
  {
    slug: "cbt-performance-analytics",
    name: "CBT Performance Analytics",
    group: "Intelligence and Analytics",
    status: "active_development",
    summary:
      "CBT analytics will connect testing records to class, subject, and student performance insight.",
    workflows: [
      "Review test analytics",
      "Compare class performance",
      "Track improvement signals"
    ],
    planAvailability: "Premium roadmap / Founder partner evaluation"
  },
  {
    slug: "attendance-discipline-trends",
    name: "Attendance and Discipline Trends",
    group: "Intelligence and Analytics",
    status: "available",
    summary:
      "Attendance and discipline records can be inspected for operational patterns and interventions.",
    workflows: [
      "Prepare trend reporting",
      "Review behaviour visibility",
      "Feed management dashboard inputs"
    ],
    planAvailability: "Premium and above"
  },
  {
    slug: "management-dashboards",
    name: "Management Dashboards",
    group: "Intelligence and Analytics",
    status: "available",
    summary:
      "Role-aware dashboards bring together academic, people, finance, operations, and compliance signals.",
    workflows: [
      "Review command center signals",
      "Inspect department dashboards",
      "Connect finance and academic visibility"
    ],
    planAvailability: "Standard and above"
  }
];

function makeProblem(module: OperavaultModuleSeed) {
  if (module.problem) {
    return module.problem;
  }

  return `${module.name} helps schools keep ${module.summary
    .replace(/\.$/, "")
    .toLowerCase()} connected to institution-owned records, permissions, audit context, and the wider school operating model.`;
}

function makeMockupCards(module: OperavaultModuleSeed) {
  return [
    {
      label: "Status",
      value: module.status === "available" ? "Ready" : "Roadmap",
      detail: getOperavaultStatusLabel(module.status)
    },
    {
      label: "Workflow focus",
      value: module.group.split(" ")[0],
      detail: module.workflows[0]
    }
  ];
}

export const operavaultModules: OperavaultModule[] = moduleSeeds.map(
  (module) => ({
    ...module,
    problem: makeProblem(module),
    users: module.users ?? groupUsers[module.group],
    planAvailability:
      module.planAvailability ?? "Plan availability depends on implementation scope",
    mockupCards: makeMockupCards(module)
  })
);

export const operavaultPlans: OperavaultPlan[] = [
  {
    name: "Basic",
    positioning: "Start with core records and day-to-day visibility.",
    idealFor:
      "Small schools starting digital operations without overwhelming the school team.",
    availability: "Core operations",
    features: [
      "Students, staff, and parents/guardians",
      "Basic attendance",
      "Calendar and basic notifications",
      "Core records",
      "Standard support"
    ]
  },
  {
    name: "Standard",
    positioning: "Strengthen daily operations, reporting, and parent communication.",
    idealFor:
      "Private schools needing stronger daily operations, parent communication, reporting, and academic consolidation.",
    availability: "Most school operations",
    features: [
      "Everything in Basic",
      "Admissions",
      "Discipline",
      "Report cards and gradebook",
      "Parent portal",
      "School fees records",
      "Dashboards"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    positioning: "Run full-school operations and academic consolidation.",
    idealFor:
      "Schools that need academic, administrative, communication, finance, workload, and appraisal evidence from one platform.",
    availability: "Advanced operations",
    features: [
      "Everything in Standard",
      "Procurement and loans",
      "Advisory workflows",
      "Lesson plans and diary",
      "Broadsheets",
      "Appraisal and workload visualisation",
      "Advanced reporting"
    ]
  },
  {
    name: "Enterprise",
    positioning: "Coordinate complex or multi-school operating models.",
    idealFor:
      "School groups, dioceses, networks, and government deployments requiring central reporting, policy evidence, and institutional integrations.",
    availability: "Custom deployment",
    features: [
      "Multi-school reporting",
      "Central dashboards",
      "Custom integrations",
      "Policy reporting",
      "Data migration",
      "Advanced analytics",
      "Dedicated support"
    ]
  },
  {
    name: "Founder Institutional Partner",
    positioning: "Approval-only early-adopter plan for selected institutions.",
    idealFor:
      "Selected institutions participating in structured pilot adoption, feedback, and refinement.",
    availability: "Approval-only",
    features: [
      "Founder-partner pricing",
      "Closer onboarding",
      "Feedback loop",
      "Early product influence",
      "Roadmap participation",
      "Structured rollout support",
      "Not free, not unlimited, and not permanent"
    ]
  }
];

export const operavaultTourSections: OperavaultTourSection[] = [
  {
    title: "Report Card Generation",
    moduleSlug: "report-card-generation",
    summary:
      "Compile teacher scores, TIC context, principal comments, and locked report-card records into one controlled reporting workflow.",
    proofPoints: [
      "Snapshot-ready reporting",
      "TIC handoff discipline",
      "Parent publication readiness"
    ]
  },
  {
    title: "Gradebook",
    moduleSlug: "gradebook",
    summary:
      "Let score-entry records become the gradebook read model so teachers are not asked to re-enter the same data twice.",
    proofPoints: [
      "CA and exam source-of-truth",
      "Teacher-scoped class subjects",
      "Status-aware score visibility"
    ]
  },
  {
    title: "Student Attendance",
    moduleSlug: "student-attendance",
    summary:
      "Track student presence across daily, weekly, and term views with evidence leaders can actually use.",
    proofPoints: ["Daily registers", "Student-level history", "Term summaries"]
  },
  {
    title: "Staff Attendance",
    moduleSlug: "staff-attendance",
    summary:
      "Connect staff attendance records to HR visibility, leave signals, and operational accountability.",
    proofPoints: ["Import support", "Late/absent visibility", "HR dashboard signals"]
  },
  {
    title: "Discipline Booking",
    moduleSlug: "discipline-booking",
    summary:
      "Record behaviour and discipline cases with review context, resolution history, and controlled parent visibility.",
    proofPoints: ["Case records", "Resolution workflow", "Parent context controls"]
  },
  {
    title: "Notifications",
    moduleSlug: "notifications",
    summary:
      "Route operational alerts to the right staff, managers, and parents without turning every update into broadcast noise.",
    proofPoints: ["Role-aware delivery", "Action links", "Read tracking"]
  },
  {
    title: "Advisory Meetings and Reporting",
    moduleSlug: "advisory-meetings-reporting",
    summary:
      "Capture fortnightly advisory meetings, parent meeting evidence, and report submission status from real records.",
    proofPoints: [
      "Cycle-based reports",
      "Advisee/father/mother evidence",
      "Advisory scoring basis"
    ]
  },
  {
    title: "Lesson Plan Submission",
    moduleSlug: "lesson-plan-submission",
    summary:
      "Connect teacher assignments to weekly lesson-plan evidence and HOD review queues.",
    proofPoints: ["Weekly submissions", "Department review", "Appraisal evidence"]
  },
  {
    title: "Diary Filling",
    moduleSlug: "diary-filling",
    summary:
      "Record taught topics, carried-over work, homework/activity evidence, and HOD verification.",
    proofPoints: ["Topic-by-topic diary", "HOD check trail", "Workload signals"]
  },
  {
    title: "Loans",
    moduleSlug: "staff-loans",
    summary:
      "Manage staff loan requests, reviews, disbursement, repayment tracking, and payslip linkage.",
    proofPoints: [
      "Application workflow",
      "Disbursement records",
      "Repayment traceability"
    ]
  },
  {
    title: "Procurement",
    moduleSlug: "procurement",
    summary:
      "Move requisitions through approval, funding, fulfilment, and reporting without confusing need approval with payment execution.",
    proofPoints: [
      "Request approvals",
      "Funding controls",
      "Department spending summaries"
    ]
  },
  {
    title: "Broadsheet and Class Noticeboard",
    moduleSlug: "broadsheet-publishing",
    summary:
      "Prepare IT broadsheets for review and class noticeboard publication with dignity-preserving masked views.",
    proofPoints: [
      "CA1/CA2/exam columns",
      "Correction flags",
      "Noticeboard-safe output"
    ]
  },
  {
    title: "Fees and Parent Notification",
    moduleSlug: "school-fees-sync-records",
    summary:
      "Keep school-fee records, ledger summaries, imports, and parent notification readiness connected.",
    proofPoints: [
      "Fee ledger",
      "Payment imports",
      "Outstanding balance visibility"
    ]
  },
  {
    title: "Appraisal and Workload Visualisation",
    moduleSlug: "workload-visualisation",
    summary:
      "Make workload and appraisal evidence visible from real duties, submissions, review actions, and attendance signals.",
    proofPoints: [
      "Duty-source breakdown",
      "Completion metrics",
      "Five-point appraisal readiness"
    ]
  },
  {
    title: "AI System Analytics",
    moduleSlug: "ai-system-analytics",
    summary:
      "AI-assisted operational analytics are currently being developed to help leaders detect patterns across school operations.",
    proofPoints: [
      "Trend detection",
      "Management summaries",
      "Institutional signal extraction"
    ]
  },
  {
    title: "WAEC/JAMB Standard CBT",
    moduleSlug: "cbt-waec-jamb-testing",
    summary:
      "CBT workflows are being prepared for structured institutional testing around timed exams and performance insight.",
    proofPoints: [
      "Question-bank direction",
      "Timed testing",
      "CBT analytics readiness"
    ]
  },
  {
    title: "WAEC/WASSCE Essay Grading Engine",
    moduleSlug: "waec-wassce-essay-grading-engine",
    summary:
      "Essay grading support is being prepared for rubric-aligned review and teacher-assistance workflows.",
    proofPoints: ["Rubric-aligned review", "Teacher support", "Assessment analytics"]
  }
];

export function getOperavaultModuleBySlug(slug: string) {
  return operavaultModules.find(
    (module) => module.slug === slug || module.aliases?.includes(slug)
  );
}

export function getOperavaultModulesByGroup(group: OperavaultModuleGroup) {
  return operavaultModules.filter((module) => module.group === group);
}

export function getOperavaultStatusLabel(status: OperavaultModuleStatus) {
  if (status === "available") {
    return "Ready for use";
  }

  if (status === "active_development") {
    return "In active development";
  }

  return "Being prepared for structured institutional testing";
}
