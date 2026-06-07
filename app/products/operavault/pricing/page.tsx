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
            <span>View demo tour</span>
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
          <p className="eyebrow">Plan fit</p>
          <h2>Confirm the plan that matches your modules, users, and rollout depth.</h2>
          <p>
            The pricing conversation should clarify operating scope before
            implementation: module mix, user groups, support requirements,
            rollout sequence, and institutional priorities.
          </p>
        </div>
        <div className="capability-list">
          <div className="capability-item">
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>
              Operavault can be configured around enabled modules, plan scope,
              roles, permissions, and access limits during rollout.
            </span>
          </div>
          <div className="capability-item">
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>
              Founder Institutional Partner adoption remains approval-only and
              structured around feedback, refinement, and paid rollout scope.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
