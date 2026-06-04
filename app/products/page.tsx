import type { Metadata } from "next";

import { CtaBand } from "@/components/marketing/cta-band";
import { ProductCard } from "@/components/marketing/product-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { products } from "@/modules/products/product-registry";

export const metadata: Metadata = {
  title: "Products"
};

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Products</p>
        <h1>Products built from real operating problems.</h1>
        <p>
          Steward Systems builds focused software product lines for schools,
          music teams, investment clubs, cooperatives, and organisations that
          need dependable workflows and clear records.
        </p>
      </section>

      <section className="page-section company-section">
        <SectionHeading
          eyebrow="Portfolio"
          title="Choose the product line that matches the work."
          description="The public site routes interest and product discovery. The product systems own their own operating records."
        />
        <div className="product-grid company-product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              showFeaturedActions
            />
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which product fits?"
        description="Send a general enquiry and the Steward Systems team can route the conversation."
      />
    </main>
  );
}
