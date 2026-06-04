import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole, ShieldAlert } from "lucide-react";

import { DemoRequestsQueue } from "@/components/admin/demo-requests-queue";
import type { DemoRequestDetail } from "@/modules/demo-requests/types";
import { requireGovernanceManageSettings } from "@/server/auth/governance";
import { createSupabaseEnquiriesRepository } from "@/server/repositories/enquiries/supabase-enquiries-repository";
import { createDemoRequestService } from "@/server/services/demo-requests/demo-request-service";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Demo Requests"
};

type AdminDemoRequestsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function readParam(
  params: Record<string, string | string[] | undefined>,
  key: string
) {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

function decodeFeedback(value: string | undefined) {
  return value ? decodeURIComponent(value) : undefined;
}

function ProtectedAdminNotice({ reason }: { reason: string }) {
  return (
    <main>
      <section className="admin-shell">
        <div>
          <p className="eyebrow">Protected admin</p>
          <h1>Demo request queue</h1>
          <p>
            Demo requests are restricted to Steward Systems admins with the
            governance.manage_settings capability.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/request-demo">
              Open request demo form
            </Link>
          </div>
        </div>
        <div className="admin-readiness">
          <div>
            <LockKeyhole aria-hidden="true" size={22} />
            <span>{reason}</span>
          </div>
          <div>
            <ShieldAlert aria-hidden="true" size={22} />
            <span>
              Demo requests are not exposed to employees, parents, teachers, or
              students without the required governance capability.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function AdminDemoRequestsShell({
  requests,
  feedback
}: {
  requests: DemoRequestDetail[];
  feedback?: {
    type: "success" | "error";
    message: string;
  };
}) {
  return (
    <main>
      <section className="admin-page-hero">
        <div>
          <p className="eyebrow">Internal demo pipeline</p>
          <h1>Demo request queue</h1>
          <p>
            Review public demo requests, update follow-up status, copy contact
            details, and inspect audit events.
          </p>
        </div>
      </section>
      <DemoRequestsQueue requests={requests} feedback={feedback} />
    </main>
  );
}

export default async function AdminDemoRequestsPage({
  searchParams
}: AdminDemoRequestsPageProps) {
  const params = (await searchParams) ?? {};
  const updated = decodeFeedback(readParam(params, "updated"));
  const error = decodeFeedback(readParam(params, "error"));
  const access = await requireGovernanceManageSettings();

  if (!access.ok) {
    return <ProtectedAdminNotice reason={access.reason} />;
  }

  let requests: DemoRequestDetail[] = [];
  let loadError: string | undefined;

  try {
    const repository = createSupabaseEnquiriesRepository();
    const service = createDemoRequestService(repository);
    const summaries = await service.listDemoRequests();
    const requestDetails = await Promise.all(
      summaries.map((request) => service.getDemoRequestDetail(request.id))
    );
    requests = requestDetails.filter(
      (request): request is DemoRequestDetail => request !== null
    );
  } catch (queueError) {
    loadError =
      queueError instanceof Error
        ? queueError.message
        : "Demo requests could not be loaded.";
  }

  return (
    <AdminDemoRequestsShell
      requests={requests}
      feedback={
        loadError
          ? { type: "error", message: loadError }
          : error
            ? { type: "error", message: error }
            : updated
              ? { type: "success", message: updated }
              : undefined
      }
    />
  );
}
