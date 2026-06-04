import {
  productInterests,
  type ProductInterest
} from "@/modules/enquiries/types";

import {
  demoRequestInterestAreas,
  demoRequestPlans,
  type DemoRequestInterestArea,
  type DemoRequestPlan,
  type DemoRequestSubmission
} from "./types";

type ValidationResult =
  | {
      ok: true;
      value: DemoRequestSubmission;
    }
  | {
      ok: false;
      errors: string[];
    };

function readText(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isProductInterest(value: string): value is ProductInterest {
  return productInterests.includes(value as ProductInterest);
}

function isDemoRequestPlan(value: string): value is DemoRequestPlan {
  return demoRequestPlans.includes(value as DemoRequestPlan);
}

function isDemoRequestInterestArea(
  value: string
): value is DemoRequestInterestArea {
  return demoRequestInterestAreas.includes(value as DemoRequestInterestArea);
}

function readInterestAreas(formData: FormData): DemoRequestInterestArea[] {
  return formData
    .getAll("interestAreas")
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter(isDemoRequestInterestArea);
}

export function validateDemoRequestFormData(
  formData: FormData
): ValidationResult {
  const schoolName = readText(formData, "schoolName");
  const contactPerson = readText(formData, "contactPerson");
  const role = readText(formData, "role");
  const email = readText(formData, "email");
  const phone = readText(formData, "phone");
  const location = readText(formData, "location");
  const productSlugInput = readText(formData, "productSlug") || "operavault";
  const preferredPlanInput = readText(formData, "preferredPlan");
  const preferredDemoTime = readText(formData, "preferredDemoTime");
  const message = readText(formData, "message");
  const sourcePage = readText(formData, "sourcePage") || "/request-demo";
  const consentToContact = formData.get("consentToContact") === "on";
  const website = readText(formData, "website");
  const interestAreas = readInterestAreas(formData);
  const errors: string[] = [];

  if (schoolName.length < 2) {
    errors.push("School or organisation name is required.");
  }

  if (contactPerson.length < 2) {
    errors.push("Contact person is required.");
  }

  if (role.length < 2) {
    errors.push("Role or title is required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("A valid email address is required.");
  }

  if (phone.replace(/\D/g, "").length < 7) {
    errors.push("A valid phone number is required.");
  }

  if (!isProductInterest(productSlugInput)) {
    errors.push("Choose a valid product interest.");
  }

  if (!isDemoRequestPlan(preferredPlanInput)) {
    errors.push("Choose a preferred plan.");
  }

  if (preferredDemoTime.length < 4) {
    errors.push("Preferred demo date or time is required.");
  }

  if (interestAreas.length === 0) {
    errors.push("Choose at least one interest area.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  if (!consentToContact) {
    errors.push("Consent to contact is required.");
  }

  if (website.length > 0) {
    errors.push("Unable to accept this demo request.");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      schoolName,
      contactPerson,
      role,
      email,
      phone,
      location: location || undefined,
      productSlug: productSlugInput as ProductInterest,
      preferredPlan: preferredPlanInput as DemoRequestPlan,
      preferredDemoTime,
      interestAreas,
      message,
      sourcePage,
      consentToContact,
      website: undefined
    }
  };
}

