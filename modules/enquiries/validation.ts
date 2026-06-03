import {
  enquiryTypes,
  productInterests,
  type EnquirySubmission,
  type ProductSlug,
  type RequestType
} from "./types";

type ValidationResult =
  | {
      ok: true;
      value: EnquirySubmission;
    }
  | {
      ok: false;
      errors: string[];
    };

function isRequestType(value: string): value is RequestType {
  return enquiryTypes.includes(value as RequestType);
}

function isProductSlug(value: string): value is ProductSlug {
  return productInterests.includes(value as ProductSlug);
}

function readText(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function validateEnquiryFormData(formData: FormData): ValidationResult {
  const name = readText(formData, "name");
  const organisation = readText(formData, "organisation");
  const role = readText(formData, "role");
  const email = readText(formData, "email");
  const phone = readText(formData, "phone");
  const location = readText(formData, "location");
  const productSlugInput = readText(formData, "productSlug");
  const requestTypeInput = readText(formData, "requestType");
  const message = readText(formData, "message");
  const preferredDemoTime = readText(formData, "preferredDemoTime");
  const sourcePage = readText(formData, "sourcePage");
  const consentToContact = formData.get("consentToContact") === "on";
  const website = readText(formData, "website");
  const errors: string[] = [];

  if (name.length < 2) {
    errors.push("Name is required.");
  }

  if (organisation.length < 2) {
    errors.push("Organisation is required.");
  }

  if (role.length < 2) {
    errors.push("Role is required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("A valid email address is required.");
  }

  if (!isProductSlug(productSlugInput)) {
    errors.push("Choose a valid product interest.");
  }

  if (!isRequestType(requestTypeInput)) {
    errors.push("Choose a valid request type.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  if (!consentToContact) {
    errors.push("Consent to contact is required.");
  }

  if (website.length > 0) {
    errors.push("Unable to accept this enquiry.");
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      name,
      organisation,
      role,
      email,
      phone: phone || undefined,
      location: location || undefined,
      productSlug: productSlugInput as ProductSlug,
      requestType: requestTypeInput as RequestType,
      message,
      preferredDemoTime: preferredDemoTime || undefined,
      sourcePage: sourcePage || undefined,
      consentToContact,
      website: undefined
    }
  };
}
