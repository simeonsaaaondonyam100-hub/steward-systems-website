import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import {
  getOperavaultModulesByGroup,
  getOperavaultStatusLabel,
  operavaultModuleGroups
} from "@/modules/product/operavault-product";

export const metadata: Metadata = {
  title: "Operavault Modules",
  description:
    "Explore the Operavault public product tour for school administration, academic operations, attendance, finance, parent engagement, and analytics."
};

export default function FeaturesPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Operavault modules</p>
        <h1>Tour the school operations system module by module.</h1>
        <p>
          Each module is packaged around a real administrative workflow so a
          school administrator can understand the platform in minutes.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/request-demo">
            <span>Request a demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-ghost" href="/pricing">
            <span>Compare plans</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="module-universe">
          {operavaultModuleGroups.map((group) => (
            <section key={group} className="module-group">
              <div className="module-group-heading">
                <div>
                  <p className="eyebrow">{group}</p>
                  <h2>{group}</h2>
                </div>
                <span>{getOperavaultModulesByGroup(group).length} modules</span>
              </div>
              <div className="feature-grid">
                {getOperavaultModulesByGroup(group).map((module) => (
                  <article key={module.slug} className="feature-card">
                    <p className="eyebrow">{getOperavaultStatusLabel(module.status)}</p>
                    <h3>{module.name}</h3>
                    <p>{module.summary}</p>
                    <div className="feature-outcomes">
                      {module.workflows.slice(0, 2).map((workflow) => (
                        <div key={workflow}>
                          <CheckCircle2 aria-hidden="true" size={18} />
                          <span>{workflow}</span>
                        </div>
                      ))}
                    </div>
                    <div className="plan-strip">{module.planAvailability}</div>
                    <div className="product-card-actions">
                      <Link className="text-link" href={`/features/${module.slug}`}>
                        <span>View module</span>
                        <ArrowRight aria-hidden="true" size={16} />
                      </Link>
                      <Link className="text-link" href="/request-demo">
                        <span>Book demo</span>
                        <ArrowRight aria-hidden="true" size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need a guided module walkthrough?"
        description="Book a demo and Steward Systems can focus the tour on the modules your school needs first."
      />
    </main>
  );
}

