import type { Metadata } from "next";
import { Compass, GitBranch, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Company"
};

export default function CompanyPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Company</p>
        <h1>Steward Systems builds focused software for serious operating domains.</h1>
        <p>
          The company direction is simple: create reliable product lines with
          strong boundaries, clear records, and practical workflows.
        </p>
      </section>

      <section className="page-section split-section">
        <div>
          <p className="eyebrow">Mission</p>
          <h2>Help organizations steward complex work with clarity.</h2>
          <p>
            Steward Systems serves teams that need more than a generic portal:
            institutions, choirs, cooperatives, and member-led finance groups
            with work that deserves disciplined systems.
          </p>
        </div>
        <div className="principle-list">
          <div>
            <Compass aria-hidden="true" size={22} />
            <span>Build for real operating contexts, not abstract dashboards.</span>
          </div>
          <div>
            <GitBranch aria-hidden="true" size={22} />
            <span>Keep each product independent and domain-specific.</span>
          </div>
          <div>
            <ShieldCheck aria-hidden="true" size={22} />
            <span>Use Core for company pipeline, not product operations.</span>
          </div>
        </div>
      </section>

      <section className="page-section muted-section">
        <p className="eyebrow">Product philosophy</p>
        <h2>One company layer, separate product systems.</h2>
        <p className="wide-copy">
          Steward Systems Core should make the public business workflow easier:
          product discovery, demo capture, contact handling, admin follow-up,
          and audit-ready enquiry events. The operating details of each product
          should remain inside that product&apos;s own backend.
        </p>
      </section>

      <CtaBand
        title="Talk to Steward Systems."
        description="Bring the operating problem. We will route the conversation to the right product line."
      />
    </main>
  );
}
