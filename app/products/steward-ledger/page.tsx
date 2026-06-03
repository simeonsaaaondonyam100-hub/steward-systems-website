import type { Metadata } from "next";

import { ProductDetail } from "@/components/marketing/product-detail";
import { getProductBySlug } from "@/modules/products/product-registry";

const product = getProductBySlug("steward-ledger");

export const metadata: Metadata = {
  title: product.name,
  description: product.summary
};

export default function StewardLedgerPage() {
  return (
    <ProductDetail
      product={product}
      proofPoints={[
        "Core can record Steward Ledger demo interest and proposal status.",
        "Steward Ledger remains the owner of member, meeting, resolution, treasury, investment, and approval records.",
        "No investment club or cooperative operational ledger data belongs in Core."
      ]}
    />
  );
}
