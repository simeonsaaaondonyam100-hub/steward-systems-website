import type { Metadata } from "next";

import { OperavaultLandingPage } from "@/components/marketing/operavault-landing-page";
import { getProductBySlug } from "@/modules/products/product-registry";

const product = getProductBySlug("operavault");

export const metadata: Metadata = {
  title: product.name,
  description: product.summary
};

export default function OperavaultPage() {
  return <OperavaultLandingPage />;
}
