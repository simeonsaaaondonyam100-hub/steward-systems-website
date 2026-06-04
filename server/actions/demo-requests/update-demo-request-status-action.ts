"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
  demoRequestStatusActions,
  demoRequestStatusLabels
} from "@/modules/demo-requests/types";
import type { EnquiryStatus } from "@/modules/enquiries/types";
import { requireGovernanceManageSettings } from "@/server/auth/governance";
import { createSupabaseEnquiriesRepository } from "@/server/repositories/enquiries/supabase-enquiries-repository";
import { createDemoRequestService } from "@/server/services/demo-requests/demo-request-service";

function readText(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isDemoRequestActionStatus(value: string): value is EnquiryStatus {
  return demoRequestStatusActions.some((action) => action.status === value);
}

function redirectWithFeedback(type: "updated" | "error", message: string): never {
  redirect(`/admin/demo-requests?${type}=${encodeURIComponent(message)}`);
}

export async function updateDemoRequestStatusAction(formData: FormData) {
  const access = await requireGovernanceManageSettings();

  if (!access.ok) {
    redirectWithFeedback("error", access.reason);
  }

  const requestId = readText(formData, "requestId");
  const status = readText(formData, "status");

  if (!requestId || !isDemoRequestActionStatus(status)) {
    redirectWithFeedback("error", "Choose a valid demo request status.");
  }

  try {
    const repository = createSupabaseEnquiriesRepository();
    const service = createDemoRequestService(repository);
    await service.updateDemoRequestStatus({
      requestId,
      status,
      createdByUserId: access.userId
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "The demo request status could not be updated.";

    redirectWithFeedback("error", message);
  }

  revalidatePath("/admin/demo-requests");
  redirectWithFeedback(
    "updated",
    `Demo request marked ${demoRequestStatusLabels[status]}.`
  );
}

