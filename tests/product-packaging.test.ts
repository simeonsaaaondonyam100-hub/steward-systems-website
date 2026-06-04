import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

import {
  operavaultModuleGroups,
  operavaultModules,
  operavaultPlans
} from "../modules/product/operavault-product";
import { products } from "../modules/products/product-registry";

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
    operavaultModules.map((module) => module.slug),
    [
      "student-records",
      "staff-records",
      "report-card-generation",
      "gradebook",
      "lesson-plan-submission",
      "diary-filling",
      "broadsheet-class-noticeboard",
      "student-attendance",
      "staff-attendance",
      "discipline-booking",
      "loans",
      "procurement",
      "fees-parent-notification",
      "notifications",
      "advisory-meetings-reporting",
      "appraisal-workload-visualisation",
      "ai-system-analytics",
      "waec-jamb-standard-cbt",
      "waec-wassce-essay-grading-engine"
    ]
  );
  assert.ok(
    operavaultModules.every(
      (module) =>
        module.problem.length > 40 &&
        module.users.length >= 3 &&
        module.workflows.length >= 3 &&
        module.mockupCards.length >= 2
    )
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
  const featureDetail = readProjectFile("app/features/[featureSlug]/page.tsx");

  for (const text of [
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
  ]) {
    assert.match(homepage, new RegExp(text));
  }

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
    assert.match(
      readProjectFile(file),
      /href=["{]\/request-demo/,
      `${file} should include a visible request demo CTA`
    );
  }
});

test("product registry exposes request-demo as the lead-management CTA", () => {
  const operavault = products.find((product) => product.slug === "operavault");
  const stewardLedger = products.find(
    (product) => product.slug === "steward-ledger"
  );

  assert.equal(operavault?.cta.href, "/request-demo");
  assert.equal(
    operavault?.featuredActions?.some(
      (action) =>
        action.label === "Request Live Demo" && action.href === "/request-demo"
    ),
    true
  );
  assert.equal(stewardLedger?.cta.href, "/request-demo");
});
