"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Clipboard,
  Eye,
  Mail,
  Phone,
  RefreshCw,
  XCircle
} from "lucide-react";

import {
  demoRequestStatusActions,
  demoRequestStatusLabels,
  type DemoRequestDetail
} from "@/modules/demo-requests/types";
import { updateDemoRequestStatusAction } from "@/server/actions/demo-requests/update-demo-request-status-action";

type DemoRequestsQueueProps = {
  requests: DemoRequestDetail[];
  feedback?: {
    type: "success" | "error";
    message: string;
  };
};

function formatDateTime(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function StatusForms({ request }: { request: DemoRequestDetail }) {
  return (
    <div className="admin-action-row" aria-label="Status actions">
      {demoRequestStatusActions.map((action) => (
        <form key={action.status} action={updateDemoRequestStatusAction}>
          <input name="requestId" type="hidden" value={request.id} />
          <input name="status" type="hidden" value={action.status} />
          <button
            className="admin-small-button"
            type="submit"
            disabled={request.status === action.status}
          >
            {action.label}
          </button>
        </form>
      ))}
    </div>
  );
}

function CopyButton({
  value,
  label,
  onCopied
}: {
  value: string;
  label: string;
  onCopied: (message: string) => void;
}) {
  return (
    <button
      className="admin-icon-button"
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        onCopied(`${label} copied.`);
      }}
    >
      <Clipboard aria-hidden="true" size={16} />
      <span>{label}</span>
    </button>
  );
}

export function DemoRequestsQueue({
  requests,
  feedback
}: DemoRequestsQueueProps) {
  const [openRequestId, setOpenRequestId] = useState<string | null>(null);
  const [copiedMessage, setCopiedMessage] = useState("");
  const [isRefreshing, startRefresh] = useTransition();
  const router = useRouter();
  const openRequest = useMemo(
    () => requests.find((request) => request.id === openRequestId),
    [openRequestId, requests]
  );

  if (requests.length === 0) {
    return (
      <section className="admin-panel">
        {feedback ? (
          <div
            className={
              feedback.type === "success"
                ? "admin-feedback"
                : "admin-feedback admin-feedback-error"
            }
            role="status"
          >
            {feedback.message}
          </div>
        ) : null}
        <div className="empty-state">
          <XCircle aria-hidden="true" size={34} />
          <h2>No demo requests yet.</h2>
          <p>
            New public demo submissions will appear here after they are saved
            in Steward Systems Core.
          </p>
          <div className="admin-action-row">
            <Link className="button button-primary" href="/request-demo">
              Open request demo form
            </Link>
            <button
              className="button button-secondary"
              type="button"
              onClick={() => startRefresh(() => router.refresh())}
            >
              <RefreshCw aria-hidden="true" size={18} />
              <span>{isRefreshing ? "Refreshing..." : "Refresh"}</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-panel">
      <div className="admin-panel-header">
        <div>
          <p className="eyebrow">Review queue</p>
          <h2>Demo requests</h2>
          <p>{requests.length} request(s) ready for review.</p>
        </div>
        <button
          className="button button-secondary"
          type="button"
          onClick={() => startRefresh(() => router.refresh())}
        >
          <RefreshCw aria-hidden="true" size={18} />
          <span>{isRefreshing ? "Refreshing..." : "Refresh queue"}</span>
        </button>
      </div>

      {feedback ? (
        <div
          className={
            feedback.type === "success"
              ? "admin-feedback"
              : "admin-feedback admin-feedback-error"
          }
          role="status"
        >
          {feedback.message}
        </div>
      ) : null}
      {copiedMessage ? (
        <div className="admin-feedback" role="status">
          {copiedMessage}
        </div>
      ) : null}

      <div className="demo-request-list">
        {requests.map((request) => (
          <article key={request.id} className="demo-request-card">
            <div className="demo-request-card-main">
              <div>
                <p className="eyebrow">{request.preferredPlan}</p>
                <h3>{request.schoolName}</h3>
                <p>
                  {request.contactPerson} - {request.email}
                </p>
              </div>
              <span className={`status-pill status-${request.status}`}>
                {request.statusLabel}
              </span>
            </div>

            <dl className="demo-request-fields">
              <div>
                <dt>Contact person</dt>
                <dd>{request.contactPerson}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{request.email}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>{request.phone}</dd>
              </div>
              <div>
                <dt>Preferred plan</dt>
                <dd>{request.preferredPlan}</dd>
              </div>
              <div>
                <dt>Preferred demo date/time</dt>
                <dd>{request.preferredDemoTime}</dd>
              </div>
              <div>
                <dt>Submitted date</dt>
                <dd>{formatDateTime(request.submittedAt)}</dd>
              </div>
            </dl>

            <div className="interest-tags">
              {request.interestAreas.length ? (
                request.interestAreas.map((area) => <span key={area}>{area}</span>)
              ) : (
                <span>No interest areas recorded</span>
              )}
            </div>

            <div className="admin-action-row">
              <button
                className="admin-icon-button"
                type="button"
                onClick={() =>
                  setOpenRequestId(
                    openRequestId === request.id ? null : request.id
                  )
                }
              >
                <Eye aria-hidden="true" size={16} />
                <span>
                  {openRequestId === request.id ? "Hide details" : "View details"}
                </span>
              </button>
              <CopyButton
                value={request.email}
                label="Copy email"
                onCopied={setCopiedMessage}
              />
              <CopyButton
                value={request.phone}
                label="Copy phone"
                onCopied={setCopiedMessage}
              />
              <a className="admin-icon-button" href={`mailto:${request.email}`}>
                <Mail aria-hidden="true" size={16} />
                <span>Open email</span>
              </a>
              <a className="admin-icon-button" href={`tel:${request.phone}`}>
                <Phone aria-hidden="true" size={16} />
                <span>Call</span>
              </a>
            </div>

            <StatusForms request={request} />

            {openRequest?.id === request.id ? (
              <div className="demo-request-details">
                <div>
                  <p className="eyebrow">Request details</p>
                  <dl className="demo-request-fields">
                    <div>
                      <dt>School name</dt>
                      <dd>{openRequest.schoolName}</dd>
                    </div>
                    <div>
                      <dt>Role</dt>
                      <dd>{openRequest.role}</dd>
                    </div>
                    <div>
                      <dt>Location</dt>
                      <dd>{openRequest.location ?? "Not provided"}</dd>
                    </div>
                    <div>
                      <dt>Product interest</dt>
                      <dd>{openRequest.productSlug}</dd>
                    </div>
                    <div>
                      <dt>Source page</dt>
                      <dd>{openRequest.sourcePage ?? "Not recorded"}</dd>
                    </div>
                    <div>
                      <dt>Updated</dt>
                      <dd>{formatDateTime(openRequest.updatedAt)}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <p className="eyebrow">Message</p>
                  <p>{openRequest.message}</p>
                </div>

                <div>
                  <p className="eyebrow">Status controls</p>
                  <StatusForms request={openRequest} />
                </div>

                <div>
                  <p className="eyebrow">Audit events</p>
                  <div className="audit-list">
                    {openRequest.auditEvents.length ? (
                      openRequest.auditEvents.map((event) => (
                        <div key={event.id}>
                          <strong>{event.eventType}</strong>
                          <span>
                            {event.oldStatus
                              ? demoRequestStatusLabels[event.oldStatus]
                              : "None"}{" "}
                            to{" "}
                            {event.newStatus
                              ? demoRequestStatusLabels[event.newStatus]
                              : "None"}
                          </span>
                          <time>{formatDateTime(event.createdAt)}</time>
                        </div>
                      ))
                    ) : (
                      <p>No audit events recorded.</p>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
