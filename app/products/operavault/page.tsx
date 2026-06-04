import type { Metadata } from "next";

import { OperavaultProductTour } from "@/components/marketing/operavault-product-tour";
import { getProductBySlug } from "@/modules/products/product-registry";

const product = getProductBySlug("operavault");

export const metadata: Metadata = {
  title: product.name,
  description: product.summary
};

export default function OperavaultPage() {
  return <OperavaultProductTour />;
}
