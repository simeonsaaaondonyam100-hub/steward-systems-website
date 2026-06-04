import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Landmark,
  Music2,
  ShieldCheck
} from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import { ProductCard } from "@/components/marketing/product-card";
import { products } from "@/modules/products/product-registry";

const operavault = products.find((product) => product.slug === "operavault");

const companySignals = [
  "Public product tours and pricing stay in Steward Systems Core.",
  "Each product keeps its own operational backend and private records.",
  "Demo, enquiry, and early-access requests flow into one company pipeline."
];

const focusAreas = [
  {
    title: "Institutional operations",
    description:
      "School administration, academic records, staff workflows, parent engagement, finance visibility, and compliance evidence.",
    icon: Building2
  },
  {
    title: "Music and rehearsal systems",
    description:
      "Notation, solfa, SATB, playback, part extraction, print, and rehearsal-support workflows for music teams.",
    icon: Music2
  },
  {
    title: "Governance and treasury",
    description:
      "Member-led finance, meetings, resolutions, treasury movement, approvals, reports, and audit-ready accountability.",
    icon: Landmark
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="company-landing-hero">
        <div className="company-landing-copy">
          <p className="eyebrow">Steward Systems</p>
          <h1>Practical software systems for serious institutional work.</h1>
          <p>
            Steward Systems builds and operates focused software products for
            schools, music teams, investment clubs, cooperatives, and
            organisations that need dependable records, workflow discipline, and
            management visibility.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">
              <span>Explore products</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-secondary" href="/products/operavault">
              <span>View Operavault</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-secondary" href="/request-demo">
              <span>Request a demo</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="company-hero-panel" aria-label="Steward Systems product map">
          <div className="company-hero-panel-top">
            <ShieldCheck aria-hidden="true" size={22} />
            <span>Product lines under Steward Systems</span>
          </div>
          <div className="company-product-stack">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <span>{product.eyebrow}</span>
                <strong>{product.name}</strong>
                <small>{product.status.replace("_", " ")}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section product-section-tight">
        <div className="section-heading">
          <p className="eyebrow">Product Portfolio</p>
          <h2>One company view, separate product operations.</h2>
          <p>
            The website helps visitors understand each product and request the
            right conversation. The products themselves remain independent
            systems with their own records, permissions, and operational data.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              showFeaturedActions={product.slug === "operavault"}
            />
          ))}
        </div>
      </section>

      {operavault ? (
        <section className="page-section company-featured-product product-section-tight">
          <div>
            <p className="eyebrow">Featured Rollout Product</p>
            <h2>Operavault is the product currently being prepared for wider institutional rollout.</h2>
            <p>
              Operavault brings the serious work of running a school into one
              secure, tenant-aware platform: people records, academics,
              attendance, discipline, finance workflows, parent communication,
              audit trails, staff duties, and decision intelligence.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/products/operavault">
                <span>Tour Operavault</span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button-secondary" href="/pricing">
                <span>View pricing</span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
          <div className="company-featured-card">
            <p className="eyebrow">{operavault.eyebrow}</p>
            <h3>{operavault.brandLine}</h3>
            <p>{operavault.summary}</p>
            <div className="capability-list">
              {operavault.capabilities.map((capability) => (
                <div key={capability} className="capability-item">
                  <CheckCircle2 aria-hidden="true" size={18} />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="page-section product-section-tight">
        <div className="portfolio-highlight-grid">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article key={area.title}>
                <Icon aria-hidden="true" size={22} />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section two-column product-section-tight">
        <div>
          <p className="eyebrow">Core Boundary</p>
          <h2>The public website controls product presentation, not private operations.</h2>
          <p>
            Steward Systems Core owns public product pages, pricing overview,
            demo requests, contact messages, and business pipeline follow-up. It
            does not connect to school tenant data, music project data, or
            finance-governance operational ledgers.
          </p>
        </div>
        <div className="capability-list">
          {companySignals.map((signal) => (
            <div key={signal} className="capability-item">
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Start with the product that matches the work."
        description="Explore Steward Systems products, then request a demo or early-access conversation from the public site."
      />
    </main>
  );
}
