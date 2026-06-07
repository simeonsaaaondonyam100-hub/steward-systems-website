import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { getProductEngagementActions } from "@/modules/products/product-registry";
import type { Product, ProductAction } from "@/modules/products/types";

type ProductDetailProps = {
  product: Product;
  proofPoints: string[];
  actions?: ProductAction[];
};

export function ProductDetail({
  product,
  proofPoints,
  actions
}: ProductDetailProps) {
  const productActions = actions ?? getProductEngagementActions(product);
  const nextStepAction = productActions[0] ?? {
    label: product.cta.label,
    href: product.cta.href,
    variant: "primary" as const
  };

  return (
    <main>
      <section className={`product-hero accent-${product.accent}`}>
        <div className="product-hero-copy">
          <div className="product-hero-brand">
            <Image
              src={product.logo.src}
              alt={product.logo.alt}
              width={112}
              height={112}
              priority
            />
            <div>
              <p className="eyebrow">{product.eyebrow}</p>
              <h1>{product.name}</h1>
            </div>
          </div>
          <p className="product-title-kicker">{product.brandLine}</p>
          <span className="product-readiness-label product-readiness-label-hero">
            {product.publicStatusLabel}
          </span>
          <p>{product.valueProposition}</p>
          <div className="hero-actions">
            {productActions.map((action) => (
              <Link
                key={action.href}
                className={`button button-${action.variant ?? "primary"}`}
                href={action.href}
              >
                <span>{action.label}</span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        </div>
        <div className="product-preview" aria-label={`${product.name} preview`}>
          <div className="product-preview-brand">
            <Image
              src={product.logo.src}
              alt=""
              width={58}
              height={58}
              aria-hidden="true"
            />
            <span>{product.name}</span>
          </div>
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

      <section className="page-section product-story-grid company-section">
        <div>
          <p className="eyebrow">Product Fit</p>
          <h2>{product.name} is built for teams that need ordered work, not another disconnected tool.</h2>
          <p>{product.audience}</p>
        </div>
        <div className="product-outcome-card">
          <Sparkles aria-hidden="true" size={22} />
          <h3>What it improves</h3>
          <p>{product.summary}</p>
        </div>
      </section>

      <section className="page-section company-section">
        <div className="section-heading">
          <p className="eyebrow">Core Capabilities</p>
          <h2>The product is shaped around practical workflows.</h2>
        </div>
        <div className="product-capability-grid">
          {product.capabilities.map((capability) => (
            <article key={capability}>
              <CheckCircle2 aria-hidden="true" size={18} />
              <h3>{capability}</h3>
              <p>
                Steward Systems frames this capability around practical
                adoption, governed access, and records that remain protected
                inside the product experience.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section muted-section product-boundary-section">
        <p className="eyebrow">Product integrity</p>
        <h2>Each product is built to protect the work it manages.</h2>
        <div className="proof-grid">
          {proofPoints.map((point) => (
            <article key={point} className="proof-item">
              <ShieldCheck aria-hidden="true" size={18} />
              {point}
            </article>
          ))}
        </div>
      </section>

      <section className="page-section product-next-step company-section">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2>Start with the right product conversation.</h2>
          <p>
            Steward Systems can help you choose the right walkthrough, demo, or
            early-access conversation according to the product and the work your
            organisation needs to control.
          </p>
        </div>
        <Link className="button button-primary" href={nextStepAction.href}>
          <span>{nextStepAction.label}</span>
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </main>
  );
}
