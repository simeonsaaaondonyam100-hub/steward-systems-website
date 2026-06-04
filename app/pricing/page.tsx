import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import { operavaultPlans } from "@/modules/product/operavault-product";

export const metadata: Metadata = {
  title: "Operavault Pricing",
  description:
    "Review Operavault plan options for school operations and request a Steward Systems demo."
};

export default function PricingPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Plan-Aware Packaging</p>
        <h1>Commercial plans for different levels of school operational maturity.</h1>
        <p>
          Plans decide what a school owns. Role permissions decide what each
          user can do inside that school.
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

      <section className="page-section">
        <div className="pricing-grid expanded-pricing-grid">
          {operavaultPlans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.highlighted
                  ? "pricing-card pricing-card-highlight"
                  : "pricing-card"
              }
            >
              <p className="eyebrow">{plan.availability}</p>
              <h2>{plan.name}</h2>
              <strong>{plan.positioning}</strong>
              <p className="pricing-note">{plan.idealFor}</p>
              {plan.name === "Founder Institutional Partner" ? (
                <p className="founder-plan-note">
                  An approval-only early-adopter plan for selected institutions
                  participating in structured pilot adoption, feedback, and
                  refinement. It is not free, not unlimited, and not a permanent
                  public plan.
                </p>
              ) : null}
              <div className="pricing-features">
                {plan.features.map((feature) => (
                  <div key={feature}>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link className="button button-primary pricing-cta" href="/request-demo">
                <span>Request a demo</span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section two-column muted-section">
        <div>
          <p className="eyebrow">Plan boundary</p>
          <h2>Public pricing explains packaging. Portal enforcement belongs inside Operavault.</h2>
          <p>
            The Steward Systems website explains plan options and captures demo
            interest. Tenant subscription enforcement, enabled modules, billing
            state, and feature limits belong inside the Operavault portal.
          </p>
        </div>
        <div className="capability-list">
          <div className="capability-item">
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>No fixed public price is shown before discovery.</span>
          </div>
          <div className="capability-item">
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>Active-development modules require structured review.</span>
          </div>
        </div>
      </section>

      <CtaBand
        title="Choose the right plan conversation."
        description="Request a demo and Steward Systems can recommend a plan path from your modules, school size, and rollout scope."
      />
    </main>
  );
}
