"use server";

import { validateDemoRequestFormData } from "@/modules/demo-requests/validation";
import { createSupabaseEnquiriesRepository } from "@/server/repositories/enquiries/supabase-enquiries-repository";
import { createDemoRequestService } from "@/server/services/demo-requests/demo-request-service";

export type CreateDemoRequestActionState = {
  ok: boolean;
  message: string;
  errors?: string[];
};

export async function createDemoRequestAction(
  _previousState: CreateDemoRequestActionState,
  formData: FormData
): Promise<CreateDemoRequestActionState> {
  const validation = validateDemoRequestFormData(formData);

  if (!validation.ok) {
    return {
      ok: false,
      message: "Please review the demo request details.",
      errors: validation.errors
    };
  }

  try {
    const repository = createSupabaseEnquiriesRepository();
    const demoRequestService = createDemoRequestService(repository);
    await demoRequestService.submit(validation.value);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "The demo request could not be saved.";

    return {
      ok: false,
      message:
        "We could not save this demo request. Please try again or contact Steward Systems directly.",
      errors: [message]
    };
  }

  return {
    ok: true,
    message:
      "Thank you. Your demo request has been saved for Steward Systems follow-up."
  };
}

