import { describe, expect, it } from "vitest";

import { validateEnquiryFormData } from "@/modules/enquiries/validation";

function validFormData(overrides: Record<string, string> = {}) {
  const formData = new FormData();
  const fields = {
    name: "Ada Lovelace",
    organisation: "Steward Test School",
    role: "Director",
    email: "ada@example.com",
    phone: "+234000000000",
    location: "Lagos",
    productSlug: "operavault",
    requestType: "demo",
    message: "We would like to review Operavault for our school.",
    preferredDemoTime: "Next Tuesday morning",
    sourcePage: "/request-demo",
    consentToContact: "on",
    ...overrides
  };

  Object.entries(fields).forEach(([key, value]) => {
    formData.set(key, value);
  });

  return formData;
}

describe("validateEnquiryFormData", () => {
  it("accepts a complete Core enquiry submission", () => {
    const result = validateEnquiryFormData(validFormData());

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toMatchObject({
        productSlug: "operavault",
        requestType: "demo",
        organisation: "Steward Test School"
      });
    }
  });

  it("rejects missing organisation, invalid email, and invalid product interest", () => {
    const result = validateEnquiryFormData(
      validFormData({
        organisation: "",
        email: "not-an-email",
        productSlug: "whitesands"
      })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors).toContain("Organisation is required.");
      expect(result.errors).toContain("A valid email address is required.");
      expect(result.errors).toContain("Choose a valid product interest.");
    }
  });

  it("rejects honeypot spam submissions", () => {
    const result = validateEnquiryFormData(
      validFormData({
        website: "https://spam.example"
      })
    );

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors).toContain("Unable to accept this enquiry.");
    }
  });
});
