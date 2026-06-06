import type { Metadata } from "next";

import { OperavaultLandingPage } from "@/components/marketing/operavault-landing-page";
import {
  operavaultHeroLede,
  operavaultHeroStatement
} from "@/modules/product/operavault-product";

export const metadata: Metadata = {
  title: "Operavault",
  description: `${operavaultHeroStatement} ${operavaultHeroLede}`
};

export default function HomePage() {
  return <OperavaultLandingPage />;
}
