import { describe, expect, it } from "vitest";

import { getProductSeedRows, products } from "@/modules/products/product-registry";

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
        status: "planned"
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
      publicUrl: "/products/steward-ledger"
    });
  });
});
