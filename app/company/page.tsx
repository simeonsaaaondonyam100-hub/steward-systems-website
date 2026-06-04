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
        <p className="eyebrow">Company</p>
        <h1>Operavault is a product of Steward Systems.</h1>
        <p>
          Operavault is a product of Steward Systems, a full-stack software
          development company building practical institutional systems for real
          operational problems. We are shaping Operavault as a secure school
          operations SaaS for leadership teams, administrators, teachers,
          advisors, parents, and operational departments who need one dependable
          source of truth.
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

      <section className="page-section company-grid product-section-tight">
        <article>
          <Building2 aria-hidden="true" size={24} />
          <h2>Institutional seriousness</h2>
          <p>
            The product identity is restrained, secure, and built around
            governance, records, data protection, and operational accountability.
          </p>
        </article>
        <article>
          <Workflow aria-hidden="true" size={24} />
          <h2>Tenant-aware architecture</h2>
          <p>
            Each school owns its operational scope while RBAC controls what
            individual users can access and do inside that institution.
          </p>
        </article>
        <article>
          <ShieldCheck aria-hidden="true" size={24} />
          <h2>Usability and continuity</h2>
          <p>
            Steward Systems designs around real user workflows so institutions
            can preserve knowledge, reduce re-entry, and continue operations
            with clearer evidence.
          </p>
        </article>
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
