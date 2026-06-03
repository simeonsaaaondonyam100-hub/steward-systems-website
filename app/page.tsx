import Link from "next/link";
import { ArrowRight, Layers3, ShieldCheck, Workflow } from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import { ProductCard } from "@/components/marketing/product-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { products } from "@/modules/products/product-registry";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Parent-company software ecosystem</p>
          <h1>Steward Systems</h1>
          <p>
            A company-level software foundation for institutional operations,
            music workflows, and governance systems.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/request-demo">
              <span>Request demo</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-ghost" href="/products">
              <span>Explore products</span>
              <Layers3 aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <SectionHeading
          eyebrow="Product ecosystem"
          title="Focused products under one Steward Systems standard."
          description="Each product serves a distinct operating domain while Core keeps the company-level enquiry and demo pipeline clear."
        />
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="page-section split-section">
        <div>
          <p className="eyebrow">Why Steward Systems</p>
          <h2>Software for teams that need accountability, not noise.</h2>
          <p>
            Steward Systems is designed around durable records, clear handoffs,
            and product boundaries. The company site captures interest and
            follow-up, while each product keeps ownership of its operational
            data.
          </p>
        </div>
        <div className="principle-list">
          <div>
            <ShieldCheck aria-hidden="true" size={22} />
            <span>Product data stays inside the product boundary.</span>
          </div>
          <div>
            <Workflow aria-hidden="true" size={22} />
            <span>Core manages company-level enquiries and pipeline status.</span>
          </div>
          <div>
            <Layers3 aria-hidden="true" size={22} />
            <span>Registry-driven product presentation avoids hardcoded sprawl.</span>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with a focused conversation."
        description="Tell us which product line you are exploring and what kind of operating problem you want to solve."
      />
    </main>
  );
}
