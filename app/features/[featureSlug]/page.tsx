import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import {
  getOperavaultModuleBySlug,
  getOperavaultStatusLabel,
  operavaultModules
} from "@/modules/product/operavault-product";

type FeaturePageProps = {
  params: Promise<{
    featureSlug: string;
  }>;
};

export function generateStaticParams() {
  return operavaultModules.flatMap((module) => [
    { featureSlug: module.slug },
    ...(module.aliases ?? []).map((featureSlug) => ({ featureSlug }))
  ]);
}

export async function generateMetadata({
  params
}: FeaturePageProps): Promise<Metadata> {
  const { featureSlug } = await params;
  const moduleData = getOperavaultModuleBySlug(featureSlug);

  if (!moduleData) {
    return {
      title: "Operavault Module"
    };
  }

  return {
    title: moduleData.name,
    description: moduleData.summary
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { featureSlug } = await params;
  const moduleData = getOperavaultModuleBySlug(featureSlug);

  if (!moduleData) {
    notFound();
  }

  return (
    <main>
      <section className="feature-detail-hero">
        <div>
          <p className="eyebrow">{moduleData.group}</p>
          <h1>{moduleData.name}</h1>
          <p>{moduleData.summary}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/request-demo">
              <span>Request demo</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-secondary" href="/features">
              <span>Explore modules</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="module-detail-card">
          <span>{getOperavaultStatusLabel(moduleData.status)}</span>
          <strong>{moduleData.planAvailability}</strong>
          <p>
            Public product-tour mockups use synthetic records only. No
            institution-specific or private school data is exposed.
          </p>
        </div>
      </section>

      <section className="page-section feature-detail-grid product-section-tight">
        <div>
          <p className="eyebrow">Problem solved</p>
          <h2>{moduleData.problem}</h2>
          <p>
            Operavault packages this work into a controlled institutional
            workflow so administrators can review evidence, ownership, and next
            steps without chasing disconnected files.
          </p>
        </div>
        <div className="product-mock-panel large" aria-hidden="true">
          <div className="mock-toolbar">
            <span />
            <span />
            <span />
          </div>
          <p>{moduleData.name}</p>
          <div className="mock-kpi-row">
            <b />
            <b />
            <b />
          </div>
          <div className="mock-table-lines">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </section>

      <section className="page-section product-section-tight">
        <div className="section-heading">
          <p className="eyebrow">Key workflows</p>
          <h2>What the module helps teams do.</h2>
        </div>
        <div className="workflow-grid">
          {moduleData.workflows.map((workflow, index) => (
            <article key={workflow} className="workflow-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{workflow}</h3>
              <p>
                The workflow is represented in the public tour with synthetic
                examples and can be discussed in a live demo.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section feature-detail-grid product-section-tight">
        <div className="section-heading">
          <p className="eyebrow">Who uses it</p>
          <h2>Designed around accountable school roles.</h2>
          <p>
            The public page explains the module at a product level. A live demo
            can walk through the relevant roles and permission boundaries for
            your institution.
          </p>
        </div>
        <div className="capability-list">
          {moduleData.users.map((user) => (
            <div key={user} className="capability-item">
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{user}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section two-column product-section-tight">
        <div>
          <p className="eyebrow">Plan availability</p>
          <h2>{moduleData.planAvailability}</h2>
          <p>
            Final packaging depends on deployment scope, school size, support
            needs, implementation timing, and selected modules.
          </p>
        </div>
        <div className="capability-list">
          <div className="capability-item">
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>{getOperavaultStatusLabel(moduleData.status)}</span>
          </div>
          <div className="capability-item">
            <CheckCircle2 aria-hidden="true" size={18} />
            <span>Review this module in a live Steward Systems demo.</span>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Walk through ${moduleData.name}.`}
        description="Request a demo and Steward Systems can tailor the Operavault tour around this module."
      />
    </main>
  );
}
