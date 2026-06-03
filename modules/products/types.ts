import type { ProductInterest } from "@/modules/enquiries/types";

export type ProductSlug = "operavault" | "cantoria" | "steward-ledger";
export type ProductStatus = "active" | "early_access" | "planned" | "archived";

export type ProductCta = {
  label: string;
  href: string;
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
  publicUrl: string;
  demoUrl?: string;
  cta: ProductCta;
  accent: "gold" | "teal" | "graphite";
};
