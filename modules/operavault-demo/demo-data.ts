export type DemoMetric = {
  label: string;
  value: string;
  context: string;
};

export type DemoTableColumn = {
  key: string;
  label: string;
};

export type DemoTableRow = Record<string, string>;

export type DemoWorkflowStep = {
  title: string;
  status: string;
  detail: string;
};

export type DemoSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  metrics?: DemoMetric[];
  columns?: DemoTableColumn[];
  rows?: DemoTableRow[];
  workflow?: DemoWorkflowStep[];
};

export const privacyAssurance =
  "This demo uses synthetic sample data only. No private school, student, parent, staff, result, HR, advisory, attendance, or finance data is shown.";

export const operavaultDemoSections: DemoSection[] = [
  {
    id: "command-center",
    eyebrow: "Command Center",
    title: "Institution-wide operating snapshot",
    description:
      "A leadership view for monitoring daily academic, administrative, finance, and HR movement without exposing private tenant records.",
    metrics: [
      {
        label: "Active workspaces",
        value: "12",
        context: "Synthetic departments in this public demo"
      },
      {
        label: "Open approvals",
        value: "18",
        context: "Procurement, HR, and academic workflows"
      },
      {
        label: "Today alerts",
        value: "42",
        context: "Public-safe notification examples"
      }
    ],
    workflow: [
      {
        title: "Morning readiness",
        status: "Reviewed",
        detail: "Attendance, substitute coverage, and department priorities checked."
      },
      {
        title: "Workflow approvals",
        status: "In progress",
        detail: "Pending procurement and report-card approvals routed to owners."
      },
      {
        title: "Leadership digest",
        status: "Queued",
        detail: "Synthetic operating summary prepared for school leadership."
      }
    ]
  },
  {
    id: "academic-results",
    eyebrow: "Academic Results Workflow",
    title: "From grade entry to report readiness",
    description:
      "A public-safe view of the academic results pipeline: subject entry, review, broadsheet readiness, and report publishing status.",
    columns: [
      { key: "stage", label: "Stage" },
      { key: "owner", label: "Owner" },
      { key: "status", label: "Status" },
      { key: "nextStep", label: "Next step" }
    ],
    rows: [
      {
        stage: "Grade entry",
        owner: "Subject team",
        status: "82% complete",
        nextStep: "Review missing assessments"
      },
      {
        stage: "Department moderation",
        owner: "Academic lead",
        status: "In review",
        nextStep: "Approve synthetic broadsheet"
      },
      {
        stage: "Report publishing",
        owner: "Admin office",
        status: "Queued",
        nextStep: "Release after leadership sign-off"
      }
    ]
  },
  {
    id: "attendance",
    eyebrow: "Student Attendance",
    title: "Daily attendance patterns without private records",
    description:
      "Attendance views can help teams see cohort-level movement while protecting individual learner identity in this public demo.",
    columns: [
      { key: "group", label: "Group" },
      { key: "present", label: "Present" },
      { key: "exceptions", label: "Exceptions" },
      { key: "followUp", label: "Follow-up" }
    ],
    rows: [
      {
        group: "Junior cohort",
        present: "96%",
        exceptions: "4",
        followUp: "Class adviser review"
      },
      {
        group: "Senior cohort",
        present: "94%",
        exceptions: "7",
        followUp: "Attendance office digest"
      },
      {
        group: "Boarding cohort",
        present: "98%",
        exceptions: "2",
        followUp: "House team notified"
      }
    ]
  },
  {
    id: "hr",
    eyebrow: "HR Department",
    title: "Staff lifecycle and department readiness",
    description:
      "Synthetic HR examples show onboarding, leave, workload, appraisal, and documentation workflows without staff codes or private HR data.",
    columns: [
      { key: "workflow", label: "Workflow" },
      { key: "count", label: "Items" },
      { key: "status", label: "Status" },
      { key: "owner", label: "Owner" }
    ],
    rows: [
      {
        workflow: "Onboarding checklist",
        count: "5",
        status: "On track",
        owner: "HR workspace"
      },
      {
        workflow: "Leave requests",
        count: "8",
        status: "Pending review",
        owner: "Line managers"
      },
      {
        workflow: "Appraisal prep",
        count: "14",
        status: "Scheduled",
        owner: "Department heads"
      }
    ]
  },
  {
    id: "accounts",
    eyebrow: "Accounts Department",
    title: "Finance workflow visibility for administrators",
    description:
      "A safe overview of fee, invoice, budget, and reconciliation workflows. No student finance, salary, or private account data is included.",
    metrics: [
      {
        label: "Open finance tasks",
        value: "27",
        context: "Synthetic accounts workflow"
      },
      {
        label: "Budget reviews",
        value: "6",
        context: "Department-level review examples"
      },
      {
        label: "Reconciliation queues",
        value: "3",
        context: "Public-safe finance queues"
      }
    ],
    workflow: [
      {
        title: "Department budget request",
        status: "Submitted",
        detail: "Synthetic request awaiting accounts review."
      },
      {
        title: "Payment reconciliation",
        status: "Reviewing",
        detail: "Grouped finance queue without private payer details."
      },
      {
        title: "Leadership report",
        status: "Draft",
        detail: "Monthly finance summary prepared for approval."
      }
    ]
  },
  {
    id: "procurement",
    eyebrow: "Procurement",
    title: "Controlled purchasing and approvals",
    description:
      "Procurement workflows can route requests, vendor checks, approvals, and receiving notes through a structured audit trail.",
    columns: [
      { key: "request", label: "Request" },
      { key: "department", label: "Department" },
      { key: "status", label: "Status" },
      { key: "action", label: "Action" }
    ],
    rows: [
      {
        request: "Laboratory supplies",
        department: "Science",
        status: "Budget check",
        action: "Accounts review"
      },
      {
        request: "Library materials",
        department: "Academics",
        status: "Approved",
        action: "Issue purchase order"
      },
      {
        request: "Facilities maintenance",
        department: "Operations",
        status: "Vendor review",
        action: "Compare proposals"
      }
    ]
  },
  {
    id: "advisory",
    eyebrow: "Advisory / Formation",
    title: "Formation follow-up without private case details",
    description:
      "Advisory teams can track pastoral and formation workflows with role-based access and careful privacy boundaries.",
    columns: [
      { key: "stream", label: "Stream" },
      { key: "items", label: "Items" },
      { key: "status", label: "Status" },
      { key: "nextStep", label: "Next step" }
    ],
    rows: [
      {
        stream: "Mentoring check-ins",
        items: "18",
        status: "Scheduled",
        nextStep: "Adviser digest"
      },
      {
        stream: "Formation notes",
        items: "9",
        status: "Restricted",
        nextStep: "Role-based review"
      },
      {
        stream: "Parent follow-up",
        items: "6",
        status: "Prepared",
        nextStep: "Office confirmation"
      }
    ]
  },
  {
    id: "workload",
    eyebrow: "Workload / Appraisal",
    title: "Workload clarity for appraisal readiness",
    description:
      "Department heads can review workload, duties, observations, and appraisal preparation without scattering records across documents.",
    columns: [
      { key: "area", label: "Area" },
      { key: "load", label: "Load" },
      { key: "risk", label: "Risk" },
      { key: "review", label: "Review" }
    ],
    rows: [
      {
        area: "Teaching allocation",
        load: "Balanced",
        risk: "Low",
        review: "Monthly"
      },
      {
        area: "Co-curricular duties",
        load: "High",
        risk: "Medium",
        review: "Department adjustment"
      },
      {
        area: "Observation cycle",
        load: "On track",
        risk: "Low",
        review: "Appraisal prep"
      }
    ]
  },
  {
    id: "departments",
    eyebrow: "Department Workspaces",
    title: "Each department works in its own operational lane",
    description:
      "Department workspaces help academics, HR, accounts, admissions, procurement, and operations manage their workflows without losing central visibility.",
    metrics: [
      {
        label: "Workspace templates",
        value: "9",
        context: "Public demo configuration"
      },
      {
        label: "Role-based queues",
        value: "16",
        context: "Synthetic task routing"
      },
      {
        label: "Shared reports",
        value: "11",
        context: "Leadership-ready summaries"
      }
    ]
  },
  {
    id: "notifications-audit",
    eyebrow: "Notifications and Audit",
    title: "Traceable notifications and operating events",
    description:
      "Operavault can support notification workflows and audit-ready event trails so teams understand what changed, who reviewed it, and what remains open.",
    columns: [
      { key: "event", label: "Event" },
      { key: "scope", label: "Scope" },
      { key: "status", label: "Status" },
      { key: "visibility", label: "Visibility" }
    ],
    rows: [
      {
        event: "Report review requested",
        scope: "Academics",
        status: "Sent",
        visibility: "Academic leadership"
      },
      {
        event: "Procurement approval updated",
        scope: "Operations",
        status: "Logged",
        visibility: "Approvers"
      },
      {
        event: "Attendance digest prepared",
        scope: "Student office",
        status: "Queued",
        visibility: "Attendance team"
      }
    ]
  }
];

export const operavaultPlanOverview = [
  {
    name: "Basic",
    positioning: "Essential school operations.",
    features: [
      "Student and staff records",
      "Attendance",
      "Basic notifications",
      "Basic reports",
      "Limited admin workflows"
    ]
  },
  {
    name: "Standard",
    positioning: "Academic and administrative workflow layer.",
    features: [
      "Academics",
      "Gradebook",
      "Report cards",
      "Staff attendance",
      "HR workspace",
      "Procurement workflow",
      "Parent communication"
    ]
  },
  {
    name: "Premium",
    positioning: "Full institutional operations platform.",
    features: [
      "Department workspaces",
      "HR",
      "Accounts",
      "Admissions",
      "Advisory and formation",
      "Timetable",
      "Workload and appraisal",
      "Broadsheets",
      "Analytics",
      "Advanced notifications and audit"
    ]
  },
  {
    name: "Enterprise / Custom",
    positioning: "Custom deployment for institutions with advanced needs.",
    features: [
      "Custom workflows",
      "Data migration support",
      "Custom domain",
      "Integrations",
      "Premium support",
      "Advanced reporting",
      "Implementation support"
    ]
  }
];
