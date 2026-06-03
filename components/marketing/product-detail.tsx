import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { Product } from "@/modules/products/types";

type ProductDetailProps = {
  product: Product;
  proofPoints: string[];
};

export function ProductDetail({ product, proofPoints }: ProductDetailProps) {
  return (
    <main>
      <section className={`product-hero accent-${product.accent}`}>
        <div className="product-hero-copy">
          <p className="eyebrow">{product.eyebrow}</p>
          <h1>{product.brandLine}</h1>
          <p>{product.valueProposition}</p>
          <Link className="button button-primary" href={product.cta.href}>
            <span>{product.cta.label}</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="product-preview" aria-label={`${product.name} preview`}>
          <div className="preview-toolbar">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-grid">
            <div className="preview-column wide" />
            <div className="preview-column" />
            <div className="preview-column" />
            <div className="preview-column wide" />
          </div>
        </div>
      </section>

      <section className="page-section two-column">
        <div>
          <p className="eyebrow">Audience</p>
          <h2>Built for serious operating teams.</h2>
          <p>{product.audience}</p>
        </div>
        <div className="capability-list">
          {product.capabilities.map((capability) => (
            <div key={capability} className="capability-item">
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{capability}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section muted-section">
        <p className="eyebrow">Backend boundary</p>
        <h2>Product operations stay inside the product.</h2>
        <div className="proof-grid">
          {proofPoints.map((point) => (
            <article key={point} className="proof-item">
              {point}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
