import { describe, expect, it } from "vitest";

import {
  operavaultDemoSections,
  operavaultPlanOverview,
  privacyAssurance
} from "@/modules/operavault-demo/demo-data";

describe("Operavault public demo data", () => {
  it("includes the required guided demo sections", () => {
    expect(operavaultDemoSections.map((section) => section.eyebrow)).toEqual([
      "Command Center",
      "Academic Results Workflow",
      "Student Attendance",
      "HR Department",
      "Accounts Department",
      "Procurement",
      "Advisory / Formation",
      "Workload / Appraisal",
      "Department Workspaces",
      "Notifications and Audit"
    ]);
  });

  it("uses public-safe synthetic data without email or phone-like records", () => {
    const serialized = JSON.stringify({
      privacyAssurance,
      operavaultDemoSections
    });

    expect(serialized).toContain("synthetic");
    expect(serialized).not.toMatch(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    expect(serialized).not.toMatch(/\+?\d[\d\s().-]{7,}\d/);
    expect(serialized).not.toMatch(/whitesands/i);
  });

  it("keeps pricing indicative and avoids fixed prices", () => {
    const serialized = JSON.stringify(operavaultPlanOverview);

    expect(operavaultPlanOverview).toHaveLength(4);
    expect(operavaultPlanOverview.map((plan) => plan.name)).toEqual([
      "Basic",
      "Standard",
      "Premium",
      "Enterprise / Custom"
    ]);
    expect(serialized).not.toMatch(/[$£€₦]\s?\d/);
  });
});
