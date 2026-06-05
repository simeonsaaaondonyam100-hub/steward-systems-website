import type { ProductInterest } from "@/modules/enquiries/types";

export type ProductSlug = "operavault" | "cantoria" | "steward-ledger";
export type ProductStatus = "active" | "early_access" | "planned" | "archived";
export type ProductReadiness =
  | "concept"
  | "in_development"
  | "private_internal"
  | "early_access"
  | "demonstration_ready"
  | "commercially_available";
export type ProductPublicPromotion =
  | "hidden"
  | "portfolio_only"
  | "early_access"
  | "featured"
  | "commercial";

export type ProductCta = {
  label: string;
  href: string;
};

export type ProductAction = ProductCta & {
  variant?: "primary" | "secondary" | "ghost";
};

export type ProductLogo = {
  src: string;
  alt: string;
};

export type Product = {
  slug: ProductSlug;
  coreSlug: ProductInterest;
  name: string;
  brandLine: string;
  eyebrow: string;
  summary: string;
  audience: string;
  valueProposition: string;
  capabilities: string[];
  status: ProductStatus;
  readiness: ProductReadiness;
  publicPromotion: ProductPublicPromotion;
  publicStatusLabel: string;
  demoAvailable: boolean;
  pricingAvailable: boolean;
  deckAvailable: boolean;
  trailerAvailable: boolean;
  featuredProduct: boolean;
  publicUrl: string;
  demoUrl?: string;
  cta: ProductCta;
  featuredActions?: ProductAction[];
  logo: ProductLogo;
  accent: "gold" | "teal" | "graphite";
};
