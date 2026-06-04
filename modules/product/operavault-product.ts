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

export const operavaultHeroStatement =
  "One operating system for school administration, academic records, parent engagement, compliance evidence, staff workflows, and management visibility.";

export const operavaultModuleGroups: OperavaultModuleGroup[] = [
  "People Records",
  "Academic Operations",
  "Attendance and Discipline",
  "Finance and Administration",
  "Communication and Parent Engagement",
  "Intelligence and Analytics"
];

export const operavaultModules: OperavaultModule[] = [
  {
    slug: "student-records",
    name: "Student Records",
    group: "People Records",
    summary:
      "Structured learner profiles for admissions context, academic history, contacts, classes, and operational follow-up.",
    problem:
      "Schools often spread learner information across paper files, spreadsheets, and disconnected portals.",
    users: ["Registrars", "school administrators", "heads of school"],
    workflows: [
      "Maintain learner profile records",
      "Review class and cohort placement",
      "Prepare records for academic and administrative workflows"
    ],
    planAvailability: "Basic and above",
    status: "available",
    mockupCards: [
      {
        label: "Profile completeness",
        value: "96%",
        detail: "Synthetic record-readiness indicator"
      },
      {
        label: "Cohorts",
        value: "18",
        detail: "Class groups represented in the tour"
      }
    ]
  },
  {
    slug: "staff-records",
    name: "Staff Records",
    group: "People Records",
    summary:
      "Staff profiles for HR readiness, department ownership, attendance context, workload review, and appraisal evidence.",
    problem:
      "Staff data becomes difficult to govern when HR, departments, and leadership use separate records.",
    users: ["HR teams", "department heads", "school leadership"],
    workflows: [
      "Maintain staff profiles",
      "Track department ownership",
      "Prepare HR and appraisal evidence"
    ],
    planAvailability: "Basic and above",
    status: "available",
    mockupCards: [
      {
        label: "Department owners",
        value: "12",
        detail: "Synthetic department assignments"
      },
      {
        label: "Review packs",
        value: "8",
        detail: "Prepared for leadership review"
      }
    ]
  },
  {
    slug: "report-card-generation",
    name: "Report Card Generation",
    group: "Academic Operations",
    summary:
      "Generate report cards from reviewed scores, comments, attendance context, and school-approved publishing workflows.",
    problem:
      "Report cards become slow and error-prone when grades, comments, approvals, and publishing are managed manually.",
    users: ["Academic leads", "class teachers", "school administrators"],
    workflows: [
      "Collect reviewed scores",
      "Route comments and approvals",
      "Prepare report cards for release"
    ],
    planAvailability: "Standard and above",
    status: "available",
    mockupCards: [
      {
        label: "Ready reports",
        value: "142",
        detail: "Synthetic reports pending release"
      },
      {
        label: "Approval stage",
        value: "Leadership",
        detail: "Final review before publishing"
      }
    ]
  },
  {
    slug: "gradebook",
    name: "Gradebook",
    group: "Academic Operations",
    summary:
      "A structured grade-entry and review workspace for assessment scores, subject ownership, and moderation readiness.",
    problem:
      "Subject scores are hard to audit when teachers submit them through loose spreadsheets or messages.",
    users: ["Subject teachers", "academic leads", "examination officers"],
    workflows: [
      "Enter assessment scores",
      "Review missing entries",
      "Prepare moderation and broadsheet data"
    ],
    planAvailability: "Standard and above",
    status: "available",
    mockupCards: [
      {
        label: "Entry progress",
        value: "82%",
        detail: "Synthetic gradebook completion"
      },
      {
        label: "Missing scores",
        value: "17",
        detail: "Flagged for subject review"
      }
    ]
  },
  {
    slug: "lesson-plan-submission",
    name: "Lesson Plan Submission",
    group: "Academic Operations",
    summary:
      "Submission, review, and evidence tracking for lesson plans across subjects and departments.",
    problem:
      "Lesson plan evidence can be difficult to collect consistently across teachers, classes, and departments.",
    users: ["Teachers", "heads of department", "academic leadership"],
    workflows: [
      "Submit weekly lesson plans",
      "Route plans for department review",
      "Track submission evidence"
    ],
    planAvailability: "Standard and above",
    status: "active_development",
    mockupCards: [
      {
        label: "Submitted plans",
        value: "64",
        detail: "Currently being developed within the Operavault roadmap"
      },
      {
        label: "Review queue",
        value: "HOD",
        detail: "Prepared for structured institutional testing"
      }
    ]
  },
  {
    slug: "diary-filling",
    name: "Diary Filling",
    group: "Academic Operations",
    summary:
      "Daily diary entries for classroom work, follow-up notes, homework context, and institutional evidence.",
    problem:
      "Daily classroom records are easy to lose when diary filling remains informal or paper-based.",
    users: ["Teachers", "class advisers", "academic administrators"],
    workflows: [
      "Record class activity",
      "Share homework and follow-up notes",
      "Prepare evidence for academic review"
    ],
    planAvailability: "Standard and above",
    status: "active_development",
    mockupCards: [
      {
        label: "Diary coverage",
        value: "71%",
        detail: "In active development for structured daily evidence"
      },
      {
        label: "Follow-up notes",
        value: "24",
        detail: "Synthetic notes in the public tour"
      }
    ]
  },
  {
    slug: "broadsheet-class-noticeboard",
    name: "Broadsheet/Class Noticeboard",
    group: "Academic Operations",
    summary:
      "Class-level academic summaries, noticeboard context, score review, and leadership-ready broadsheet visibility.",
    problem:
      "Academic leaders need a shared view of class performance without exposing unmanaged spreadsheets.",
    users: ["Academic leads", "class teachers", "heads of school"],
    workflows: [
      "Review class-level broadsheets",
      "Publish class notices",
      "Prepare academic decision summaries"
    ],
    planAvailability: "Premium and Enterprise",
    status: "available",
    mockupCards: [
      {
        label: "Class summary",
        value: "SS2",
        detail: "Synthetic noticeboard focus"
      },
      {
        label: "Moderation flags",
        value: "6",
        detail: "Prepared for academic review"
      }
    ]
  },
  {
    slug: "student-attendance",
    name: "Student Attendance",
    group: "Attendance and Discipline",
    summary:
      "Daily attendance registers, exceptions, cohort visibility, and follow-up queues for student office teams.",
    problem:
      "Attendance teams need timely visibility without manually reconciling registers after the school day.",
    users: ["Attendance officers", "class teachers", "school administrators"],
    workflows: [
      "Record daily attendance",
      "Flag exceptions",
      "Prepare follow-up digests"
    ],
    planAvailability: "Basic and above",
    status: "available",
    mockupCards: [
      {
        label: "Present today",
        value: "96%",
        detail: "Synthetic cohort attendance"
      },
      {
        label: "Exceptions",
        value: "11",
        detail: "Routed for adviser follow-up"
      }
    ]
  },
  {
    slug: "staff-attendance",
    name: "Staff Attendance",
    group: "Attendance and Discipline",
    summary:
      "Staff attendance context for HR, substitution planning, daily readiness, and leadership review.",
    problem:
      "Schools need a reliable way to understand staff readiness without waiting for manual HR updates.",
    users: ["HR teams", "operations teams", "department heads"],
    workflows: [
      "Record staff attendance",
      "Flag substitution needs",
      "Prepare HR readiness summaries"
    ],
    planAvailability: "Standard and above",
    status: "available",
    mockupCards: [
      {
        label: "Staff present",
        value: "94%",
        detail: "Synthetic staff readiness"
      },
      {
        label: "Cover required",
        value: "3",
        detail: "Routed to operations"
      }
    ]
  },
  {
    slug: "discipline-booking",
    name: "Discipline Booking",
    group: "Attendance and Discipline",
    summary:
      "Structured conduct booking, review queues, follow-up evidence, and leadership visibility.",
    problem:
      "Discipline records need consistency, context, and review controls without becoming informal message threads.",
    users: ["Discipline teams", "class advisers", "school leadership"],
    workflows: [
      "Record conduct incidents",
      "Route review and follow-up",
      "Prepare evidence summaries"
    ],
    planAvailability: "Standard and above",
    status: "active_development",
    mockupCards: [
      {
        label: "Open reviews",
        value: "9",
        detail: "In active development for controlled follow-up"
      },
      {
        label: "Evidence status",
        value: "Draft",
        detail: "Prepared for structured institutional testing"
      }
    ]
  },
  {
    slug: "loans",
    name: "Loans",
    group: "Finance and Administration",
    summary:
      "Administrative tracking for staff or institutional loan workflows, approvals, schedules, and review evidence.",
    problem:
      "Loan requests and approvals can become difficult to track when finance records are separated from approval evidence.",
    users: ["Accounts teams", "HR teams", "approvers"],
    workflows: [
      "Record loan requests",
      "Route approval checks",
      "Track repayment and review status"
    ],
    planAvailability: "Premium and Enterprise",
    status: "active_development",
    mockupCards: [
      {
        label: "Approval queue",
        value: "5",
        detail: "Currently being developed within the Operavault roadmap"
      },
      {
        label: "Review state",
        value: "Accounts",
        detail: "Synthetic finance workflow"
      }
    ]
  },
  {
    slug: "procurement",
    name: "Procurement",
    group: "Finance and Administration",
    summary:
      "Purchasing requests, vendor review, budget checks, receiving notes, and approval trails.",
    problem:
      "Procurement needs a controlled route from request to approval without losing budget and audit context.",
    users: ["Procurement teams", "accounts teams", "department heads"],
    workflows: [
      "Submit purchasing requests",
      "Review vendors and budgets",
      "Track approvals and receiving notes"
    ],
    planAvailability: "Standard and above",
    status: "available",
    mockupCards: [
      {
        label: "Open requests",
        value: "18",
        detail: "Synthetic procurement queue"
      },
      {
        label: "Budget checks",
        value: "6",
        detail: "Routed to accounts"
      }
    ]
  },
  {
    slug: "fees-parent-notification",
    name: "Fees and Parent Notification",
    group: "Finance and Administration",
    summary:
      "Fee workflow visibility and parent-facing notification preparation for payment reminders and administrative follow-up.",
    problem:
      "Finance and communication teams need aligned fee follow-up without exposing private finance records publicly.",
    users: ["Accounts teams", "parent communication teams", "school administrators"],
    workflows: [
      "Prepare fee follow-up queues",
      "Route parent notifications",
      "Review communication status"
    ],
    planAvailability: "Standard and above",
    status: "available",
    mockupCards: [
      {
        label: "Notification queue",
        value: "42",
        detail: "Synthetic parent follow-up"
      },
      {
        label: "Finance review",
        value: "Ready",
        detail: "Prepared before communication"
      }
    ]
  },
  {
    slug: "notifications",
    name: "Notifications",
    group: "Communication and Parent Engagement",
    summary:
      "Operational alerts, approval reminders, parent communication preparation, and leadership notification digests.",
    problem:
      "Important school workflows stall when reminders and status changes are scattered across informal channels.",
    users: ["Administrators", "teachers", "parent communication teams"],
    workflows: [
      "Prepare workflow notifications",
      "Route parent and staff updates",
      "Track delivery readiness"
    ],
    planAvailability: "Basic and above",
    status: "available",
    mockupCards: [
      {
        label: "Today alerts",
        value: "42",
        detail: "Synthetic notification count"
      },
      {
        label: "Delivery state",
        value: "Queued",
        detail: "Ready for approved messages"
      }
    ]
  },
  {
    slug: "advisory-meetings-reporting",
    name: "Advisory Meetings and Reporting",
    group: "Communication and Parent Engagement",
    summary:
      "Advisory meeting preparation, follow-up records, reporting evidence, and pastoral workflow visibility.",
    problem:
      "Advisory work needs careful evidence and follow-up without exposing sensitive student or family details.",
    users: ["Advisers", "formation teams", "school leadership"],
    workflows: [
      "Schedule advisory meetings",
      "Prepare follow-up records",
      "Summarize advisory reporting"
    ],
    planAvailability: "Premium and Enterprise",
    status: "active_development",
    mockupCards: [
      {
        label: "Meeting queue",
        value: "18",
        detail: "In active development for advisory follow-up"
      },
      {
        label: "Report state",
        value: "Restricted",
        detail: "Prepared for careful institutional testing"
      }
    ]
  },
  {
    slug: "appraisal-workload-visualisation",
    name: "Appraisal and Workload Visualisation",
    group: "Intelligence and Analytics",
    summary:
      "Workload views, appraisal preparation, evidence readiness, and leadership visibility across staff responsibilities.",
    problem:
      "Leadership teams need workload clarity before appraisal conversations, not after the cycle has ended.",
    users: ["HR teams", "department heads", "school leadership"],
    workflows: [
      "Visualize workload distribution",
      "Prepare appraisal evidence",
      "Review department-level pressure points"
    ],
    planAvailability: "Premium and Enterprise",
    status: "available",
    mockupCards: [
      {
        label: "Load balance",
        value: "Medium",
        detail: "Synthetic workload indicator"
      },
      {
        label: "Appraisal packs",
        value: "14",
        detail: "Prepared for review"
      }
    ]
  },
  {
    slug: "ai-system-analytics",
    name: "AI System Analytics",
    group: "Intelligence and Analytics",
    summary:
      "AI-assisted operating summaries, anomaly prompts, workflow insights, and management visibility across the system.",
    problem:
      "Administrators need signals from school operations without manually inspecting every module and queue.",
    users: ["Heads of school", "administrators", "management teams"],
    workflows: [
      "Review operating summaries",
      "Surface workflow anomalies",
      "Prepare management visibility digests"
    ],
    planAvailability: "Enterprise and Founder Institutional Partner",
    status: "active_development",
    mockupCards: [
      {
        label: "Signal digest",
        value: "12",
        detail: "Currently being developed within the Operavault roadmap"
      },
      {
        label: "Review mode",
        value: "Pilot",
        detail: "Being prepared for structured institutional testing"
      }
    ]
  },
  {
    slug: "waec-jamb-standard-cbt",
    name: "WAEC/JAMB Standard CBT",
    group: "Intelligence and Analytics",
    summary:
      "Structured CBT preparation aligned to examination-style practice, testing controls, and institutional review.",
    problem:
      "Schools need controlled examination practice environments that support preparation without loose tooling.",
    users: ["Examination officers", "academic leads", "students through school-controlled access"],
    workflows: [
      "Prepare CBT practice sessions",
      "Review performance summaries",
      "Support examination-readiness workflows"
    ],
    planAvailability: "Enterprise and Founder Institutional Partner",
    status: "structured_testing",
    mockupCards: [
      {
        label: "Testing mode",
        value: "Controlled",
        detail: "Being prepared for structured institutional testing"
      },
      {
        label: "Exam standard",
        value: "WAEC/JAMB",
        detail: "In active development for school readiness"
      }
    ]
  },
  {
    slug: "waec-wassce-essay-grading-engine",
    name: "WAEC/WASSCE Essay Grading Engine",
    group: "Intelligence and Analytics",
    summary:
      "Essay-review support for structured marking assistance, rubric evidence, teacher review, and examination preparation.",
    problem:
      "Essay grading support needs careful institutional testing, teacher oversight, and transparent rubric evidence.",
    users: ["English teachers", "examination officers", "academic leadership"],
    workflows: [
      "Prepare essay submissions",
      "Review rubric-assisted grading evidence",
      "Route teacher oversight and final decisions"
    ],
    planAvailability: "Enterprise and Founder Institutional Partner",
    status: "structured_testing",
    mockupCards: [
      {
        label: "Rubric view",
        value: "Draft",
        detail: "Being prepared for structured institutional testing"
      },
      {
        label: "Teacher oversight",
        value: "Required",
        detail: "In active development with human review"
      }
    ]
  }
];

export const operavaultPlans: OperavaultPlan[] = [
  {
    name: "Basic",
    positioning: "Essential records and operating visibility.",
    idealFor: "Schools starting with people records, attendance, notifications, and core administrative readiness.",
    availability: "Core foundation",
    features: [
      "Student records",
      "Staff records",
      "Student attendance",
      "Basic notifications",
      "Basic operating reports"
    ]
  },
  {
    name: "Standard",
    positioning: "Academic and administrative workflow foundation.",
    idealFor: "Institutions ready to coordinate gradebook, reports, staff attendance, procurement, and parent communication.",
    availability: "Most school operations",
    features: [
      "Gradebook",
      "Report card generation",
      "Lesson plan submission",
      "Diary filling",
      "Staff attendance",
      "Procurement",
      "Fees and parent notification"
    ],
    highlighted: true
  },
  {
    name: "Premium",
    positioning: "Full institutional operations platform.",
    idealFor: "Schools that need deeper department workflows, advisory reporting, workload visibility, and broadsheets.",
    availability: "Advanced operations",
    features: [
      "Broadsheet/class noticeboard",
      "Advisory meetings and reporting",
      "Loans workflow",
      "Appraisal and workload visualisation",
      "Department workspaces",
      "Advanced notifications and audit"
    ]
  },
  {
    name: "Enterprise",
    positioning: "Custom operating model for complex institutions.",
    idealFor: "Institutions requiring custom rollout, governance controls, integrations, migration support, and advanced testing.",
    availability: "Custom deployment",
    features: [
      "AI system analytics",
      "WAEC/JAMB Standard CBT",
      "WAEC/WASSCE essay grading engine",
      "Custom workflows",
      "Custom domain and integrations",
      "Implementation support"
    ]
  },
  {
    name: "Founder Institutional Partner",
    positioning: "Approval-only early-adopter plan for selected institutions.",
    idealFor:
      "Selected institutions participating in structured pilot adoption, feedback, and refinement.",
    availability: "Approval-only",
    features: [
      "Structured pilot adoption",
      "Roadmap feedback sessions",
      "Selected active-development modules",
      "Institutional testing support",
      "Defined rollout scope",
      "Not free, not unlimited, and not permanent"
    ]
  }
];

export function getOperavaultModuleBySlug(slug: string) {
  return operavaultModules.find((module) => module.slug === slug);
}

export function getOperavaultModulesByGroup(group: OperavaultModuleGroup) {
  return operavaultModules.filter((module) => module.group === group);
}

export function getOperavaultStatusLabel(status: OperavaultModuleStatus) {
  if (status === "available") {
    return "Available in product tour";
  }

  if (status === "active_development") {
    return "In active development";
  }

  return "Being prepared for structured institutional testing";
}

