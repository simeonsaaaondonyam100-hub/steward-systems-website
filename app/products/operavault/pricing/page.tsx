import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { operavaultPlans } from "@/modules/product/operavault-product";

export const metadata: Metadata = {
  title: "Operavault Pricing Overview",
  description:
    "Review indicative Operavault plan tiers and request a Steward Systems conversation about school size, modules, deployment scope, and support needs."
};

export default function OperavaultPricingPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Operavault by Steward Systems</p>
        <h1>Operavault Pricing Overview</h1>
        <p>
          Pricing depends on school size, selected modules, deployment scope,
          and support requirements.
        </p>
        <div className="hero-actions">
          <Link
            className="button button-primary"
            href="/request-demo"
          >
            <span>Request Live Demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-ghost" href="/products/operavault/demo">
            <span>View Public Demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="pricing-grid">
          {operavaultPlans.map((plan) => (
            <article key={plan.name} className="pricing-card">
              <p className="eyebrow">{plan.availability}</p>
              <h2>{plan.name}</h2>
              <strong>{plan.positioning}</strong>
              <p className="pricing-note">
                Indicative module scope. Final pricing is confirmed after a
                Steward Systems discovery conversation.
              </p>
              <div className="pricing-features">
                {plan.features.map((feature) => (
                  <div key={feature}>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section muted-section two-column">
        <div>
          <p className="eyebrow">Business model boundary</p>
          <h2>Public pricing overview lives here. Tenant enforcement does not.</h2>
          <p>
            The Steward Systems website owns product positioning, public demo,
            pricing overview, request-demo funnel, and Core business pipeline.
          </p>
        </div>
        <div className="capability-list">
          <div className="capability-item">
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>
              The Operavault portal later owns tenant subscription plan,
              enabled modules, feature limits, billing/subscription status, and
              module access enforcement.
            </span>
          </div>
          <div className="capability-item">
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>
              This website does not implement internal plan configuration or
              portal module enforcement.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
