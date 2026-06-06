import type { Metadata } from "next";

import { CtaBand } from "@/components/marketing/cta-band";
import { ProductCard } from "@/components/marketing/product-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { getPublicShowcaseProducts } from "@/modules/products/public-visibility";

export const metadata: Metadata = {
  title: "Products"
};

export default function ProductsPage() {
  const products = getPublicShowcaseProducts();

  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Current Public Product Focus</p>
        <h1>Operavault is the product currently under public rollout focus.</h1>
        <p>
          Steward Systems can operate several product lines, but the public
          website is currently focused on the product ready for structured
          school demonstration.
        </p>
      </section>

      <section className="page-section company-section">
        <SectionHeading
          eyebrow="Visible Product"
          title="One product in public focus at a time."
          description="Other Steward Systems product lines remain controlled by the product visibility configuration and are not promoted beside Operavault on the public site."
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
