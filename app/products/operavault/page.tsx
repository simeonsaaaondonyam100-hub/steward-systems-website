import type { Metadata } from "next";

import { ProductDetail } from "@/components/marketing/product-detail";
import { getProductBySlug } from "@/modules/products/product-registry";

const product = getProductBySlug("operavault");

export const metadata: Metadata = {
  title: product.name,
  description: product.summary
};

export default function OperavaultPage() {
  return (
    <ProductDetail
      product={product}
      proofPoints={[
        "Core can record Operavault demo interest and enquiry status.",
        "Operavault remains the owner of school tenant records and institutional workflows.",
        "No student, employee, academic, finance, attendance, procurement, workload, or appraisal data belongs in Core."
      ]}
    />
  );
}
