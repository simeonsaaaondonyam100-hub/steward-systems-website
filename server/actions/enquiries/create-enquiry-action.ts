"use server";

import { validateEnquiryFormData } from "@/modules/enquiries/validation";
import { createSupabaseEnquiriesRepository } from "@/server/repositories/enquiries/supabase-enquiries-repository";
import { createEnquiryService } from "@/server/services/enquiries/enquiry-service";

export type CreateEnquiryActionState = {
  ok: boolean;
  message: string;
  errors?: string[];
};

export async function createEnquiryAction(
  _previousState: CreateEnquiryActionState,
  formData: FormData
): Promise<CreateEnquiryActionState> {
  const validation = validateEnquiryFormData(formData);

  if (!validation.ok) {
    return {
      ok: false,
      message: "Please review the enquiry details.",
      errors: validation.errors
    };
  }

  try {
    const repository = createSupabaseEnquiriesRepository();
    const enquiryService = createEnquiryService(repository);
    await enquiryService.submit(validation.value);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "The enquiry could not be saved.";

    return {
      ok: false,
      message:
        "We could not save this enquiry. Please try again or contact Steward Systems directly.",
      errors: [message]
    };
  }

  return {
    ok: true,
    message: "Thank you. Your enquiry has been saved for Steward Systems follow-up."
  };
}
