import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

import {
  getOperavaultModuleBySlug,
  operavaultModuleGroups,
  operavaultModules,
  operavaultPlans,
  operavaultTourSections
} from "../modules/product/operavault-product";
import {
  getProductEngagementActions,
  products
} from "../modules/products/product-registry";

const root = process.cwd();

function readProjectFile(path: string) {
  return readFileSync(join(root, path), "utf8");
}

test("Operavault product packaging exposes the full public module universe", () => {
  assert.deepEqual(operavaultModuleGroups, [
    "People Records",
    "Academic Operations",
    "Attendance and Discipline",
    "Finance and Administration",
    "Communication and Parent Engagement",
    "Intelligence and Analytics"
  ]);
  assert.deepEqual(
    operavaultModules.map((moduleData) => moduleData.slug),
    [
      "students-management",
      "staff-management",
      "parents-guardians-management",
      "employee-onboarding",
      "role-permission-management",
      "gradebook",
      "report-card-generation",
      "broadsheet-publishing",
      "cbt-waec-jamb-testing",
      "lesson-plan-submission",
      "diary-filling",
      "timetable",
      "subject-class-attendance",
      "schemes-of-work",
      "advisory-records",
      "student-attendance",
      "staff-attendance",
      "discipline-booking",
      "advisory-meetings-reporting",
      "behavioural-records",
      "notifications-escalations",
      "school-fees-sync-records",
      "parent-notifications",
      "procurement",
      "staff-loans",
      "workflow-approvals",
      "audit-trail",
      "parent-portal",
      "notifications",
      "acknowledgements",
      "class-noticeboard",
      "masked-broadsheet-publishing",
      "absence-notices",
      "appointments",
      "ai-system-analytics",
      "workload-visualisation",
      "appraisal",
      "waec-wassce-essay-grading-engine",
      "cbt-performance-analytics",
      "attendance-discipline-trends",
      "management-dashboards"
    ]
  );
  assert.ok(
    operavaultModules.every(
      (moduleData) =>
        moduleData.problem.length > 40 &&
        moduleData.users.length >= 3 &&
        moduleData.workflows.length >= 3 &&
        moduleData.mockupCards.length >= 2
    )
  );
  assert.equal(getOperavaultModuleBySlug("student-records")?.slug, "students-management");
  assert.equal(getOperavaultModuleBySlug("loans")?.slug, "staff-loans");
  assert.equal(
    getOperavaultModuleBySlug("waec-jamb-standard-cbt")?.slug,
    "cbt-waec-jamb-testing"
  );
});

test("Operavault pricing exposes the required plan options", () => {
  assert.deepEqual(
    operavaultPlans.map((plan) => plan.name),
    [
      "Basic",
      "Standard",
      "Premium",
      "Enterprise",
      "Founder Institutional Partner"
    ]
  );
  assert.match(
    operavaultPlans.find((plan) => plan.name === "Founder Institutional Partner")
      ?.features.join(" ") ?? "",
    /Not free, not unlimited, and not permanent/
  );
});

test("product-tour pages mention core module examples", () => {
  const homepage = readProjectFile("app/page.tsx");
  const operavaultTour = readProjectFile(
    "components/marketing/operavault-product-tour.tsx"
  );
  const featureDetail = readProjectFile("app/features/[featureSlug]/page.tsx");

  for (const slug of [
    "report-card-generation",
    "gradebook",
    "student-attendance",
    "staff-attendance",
    "discipline-booking",
    "notifications",
    "advisory-meetings-reporting",
    "lesson-plan-submission",
    "diary-filling",
    "staff-loans",
    "procurement",
    "broadsheet-publishing",
    "school-fees-sync-records",
    "workload-visualisation",
    "ai-system-analytics",
    "cbt-waec-jamb-testing",
    "waec-wassce-essay-grading-engine"
  ]) {
    assert.equal(
      operavaultTourSections.some((section) => section.moduleSlug === slug),
      true,
      `${slug} should be present in the guided product tour data`
    );
  }

  assert.match(homepage, /Full-stack software for real-world operations/);
  assert.match(homepage, /Explore products/);
  assert.match(homepage, /featuredProduct/);
  assert.match(operavaultTour, /operavaultHeroLede/);
  assert.match(operavaultTour, /operavault-category-grid/);
  assert.match(operavaultTour, /operavaultTourSections/);
  assert.match(featureDetail, /problem/i);
  assert.match(featureDetail, /Plan availability/);
});

test("public demo CTAs link to the request-demo route", () => {
  const files = [
    "app/page.tsx",
    "app/features/page.tsx",
    "app/features/[featureSlug]/page.tsx",
    "app/pricing/page.tsx",
    "app/company/page.tsx",
    "app/products/operavault/pricing/page.tsx",
    "components/marketing/cta-band.tsx",
    "components/layout/site-footer.tsx"
  ];

  for (const file of files) {
    if (file === "app/page.tsx") {
      assert.match(
        readProjectFile(file),
        /featuredProduct\.demoUrl/,
        `${file} should use the featured product demo URL for its request demo CTA`
      );
      continue;
    }

    assert.match(
      readProjectFile(file),
      /href=["{]\/request-demo/,
      `${file} should include a visible request demo CTA`
    );
  }
});

test("product registry exposes readiness-aware public CTAs", () => {
  const operavault = products.find((product) => product.slug === "operavault");
  const cantoria = products.find((product) => product.slug === "cantoria");
  const stewardLedger = products.find(
    (product) => product.slug === "steward-ledger"
  );
  const operavaultActions = operavault
    ? getProductEngagementActions(operavault)
    : [];
  const stewardLedgerActions = stewardLedger
    ? getProductEngagementActions(stewardLedger)
    : [];

  assert.equal(operavault?.readiness, "demonstration_ready");
  assert.equal(operavault?.publicPromotion, "featured");
  assert.equal(operavault?.demoAvailable, true);
  assert.equal(operavault?.pricingAvailable, true);
  assert.equal(operavault?.cta.href, "/request-demo");
  assert.equal(
    operavaultActions.some(
      (action) => action.label === "Request Demo" && action.href === "/request-demo"
    ),
    true
  );
  assert.equal(
    operavaultActions.some(
      (action) =>
        action.label === "View Pricing" &&
        action.href === "/products/operavault/pricing"
    ),
    true
  );

  assert.equal(cantoria?.readiness, "early_access");
  assert.equal(cantoria?.demoAvailable, false);
  assert.equal(cantoria?.pricingAvailable, false);
  assert.equal(cantoria?.publicStatusLabel, "Early Access / In Development");

  assert.equal(stewardLedger?.readiness, "private_internal");
  assert.equal(stewardLedger?.publicPromotion, "portfolio_only");
  assert.equal(stewardLedger?.demoAvailable, false);
  assert.equal(stewardLedger?.pricingAvailable, false);
  assert.equal(
    stewardLedger?.publicStatusLabel,
    "Private Platform / In Development"
  );
  assert.notEqual(stewardLedger?.cta.href, "/request-demo");
  assert.equal(
    stewardLedgerActions.some(
      (action) =>
        action.label === "Discuss Governance Use Case" &&
        action.href === "/contact?interest=steward_ledger&type=partnership"
    ),
    true
  );
});
