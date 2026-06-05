import { describe, expect, it } from "vitest";

import {
  getProductEngagementActions,
  getFeaturedProductActions,
  getProductSeedRows,
  products
} from "@/modules/products/product-registry";

describe("product registry seed shape", () => {
  it("contains the three Steward Systems Core products", () => {
    expect(getProductSeedRows()).toEqual([
      expect.objectContaining({
        slug: "operavault",
        name: "Operavault",
        status: "active"
      }),
      expect.objectContaining({
        slug: "cantoria",
        name: "Cantoria",
        status: "early_access"
      }),
      expect.objectContaining({
        slug: "steward_ledger",
        name: "Steward Ledger",
        status: "active"
      })
    ]);
  });

  it("keeps public route slugs separate from Core product slugs when needed", () => {
    const stewardLedger = products.find(
      (product) => product.name === "Steward Ledger"
    );

    expect(stewardLedger).toMatchObject({
      slug: "steward-ledger",
      coreSlug: "steward_ledger",
      publicUrl: "/products/steward-ledger",
      readiness: "private_internal",
      publicStatusLabel: "Private Platform / In Development",
      demoAvailable: false,
      pricingAvailable: false
    });
  });

  it("exposes readiness-aware Operavault actions from the registry", () => {
    const operavault = products.find((product) => product.slug === "operavault");
    const actions = operavault ? getProductEngagementActions(operavault) : [];
    const featuredActions = operavault
      ? getFeaturedProductActions(operavault)
      : [];

    expect(operavault).toMatchObject({
      readiness: "demonstration_ready",
      publicPromotion: "featured",
      publicStatusLabel: "Available for Demonstration",
      demoAvailable: true,
      pricingAvailable: true,
      deckAvailable: false,
      trailerAvailable: false,
      featuredProduct: true
    });
    expect(actions).toEqual([
      expect.objectContaining({
        label: "Request Demo",
        href: "/request-demo",
        variant: "primary"
      }),
      expect.objectContaining({
        label: "View Pricing",
        href: "/products/operavault/pricing",
        variant: "secondary"
      })
    ]);
    expect(featuredActions).toEqual([
      expect.objectContaining({
        label: "Explore Product",
        href: "/products/operavault",
        variant: "primary"
      }),
      expect.objectContaining({
        label: "Request Demo",
        href: "/request-demo",
        variant: "secondary"
      }),
      expect.objectContaining({
        label: "View Pricing",
        href: "/products/operavault/pricing",
        variant: "secondary"
      })
    ]);
  });
});
