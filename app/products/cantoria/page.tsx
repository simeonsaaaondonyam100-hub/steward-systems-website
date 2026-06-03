import type { Metadata } from "next";

import { ProductDetail } from "@/components/marketing/product-detail";
import { getProductBySlug } from "@/modules/products/product-registry";

const product = getProductBySlug("cantoria");

export const metadata: Metadata = {
  title: product.name,
  description: product.summary
};

export default function CantoriaPage() {
  return (
    <ProductDetail
      product={product}
      proofPoints={[
        "Core can record Cantoria early access interest and follow-up status.",
        "Cantoria remains the owner of notation, solfa, SATB, rehearsal, playback, and export data.",
        "No music projects, scores, compositions, audio, or rehearsal files belong in Core."
      ]}
    />
  );
}
