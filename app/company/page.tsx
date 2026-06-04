import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, GitBranch, ShieldCheck, Workflow } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Company"
};

export default function CompanyPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Steward Systems</p>
        <h1>The company behind Operavault.</h1>
        <p>
          Operavault is a product of Steward Systems, a full-stack software
          development company building practical institutional systems for real
          operational problems.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/request-demo">
            <span>Request a demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-ghost" href="/features">
            <span>Explore modules</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="page-section split-section">
        <div>
          <p className="eyebrow">Operating belief</p>
          <h2>Schools need systems that respect the depth of administration.</h2>
          <p>
            Steward Systems builds with the realities of school leadership,
            academic coordination, HR, finance, compliance evidence, parent
            communication, and management reporting in view.
          </p>
        </div>
        <div className="principle-list">
          <div>
            <Building2 aria-hidden="true" size={22} />
            <span>Built for real institutional operations.</span>
          </div>
          <div>
            <Workflow aria-hidden="true" size={22} />
            <span>Product workflows are designed around accountable handoffs.</span>
          </div>
          <div>
            <ShieldCheck aria-hidden="true" size={22} />
            <span>Public pages use synthetic data and clear privacy boundaries.</span>
          </div>
        </div>
      </section>

      <section className="page-section muted-section two-column">
        <div>
          <p className="eyebrow">Product boundary</p>
          <h2>Steward Systems Core captures interest. Operavault owns school operations.</h2>
          <p>
            The website explains Operavault, captures demo requests, and routes
            leads into Steward Systems Core. Operational school data, tenant
            records, module enforcement, and authenticated workflows remain
            inside Operavault.
          </p>
        </div>
        <div className="capability-list">
          <div className="capability-item">
            <GitBranch aria-hidden="true" size={18} />
            <span>Product systems remain independently governable.</span>
          </div>
          <div className="capability-item">
            <ShieldCheck aria-hidden="true" size={18} />
            <span>No institution-specific content belongs in reusable public pages.</span>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with an Operavault walkthrough."
        description="Request a demo and Steward Systems will route the conversation around your school's operational priorities."
      />
    </main>
  );
}
