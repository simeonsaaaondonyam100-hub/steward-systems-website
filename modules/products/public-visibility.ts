import {
  getProductBySlug,
  products
} from "@/modules/products/product-registry";
import type { Product, ProductSlug } from "@/modules/products/types";

export type PublicProductVisibilityConfig = {
  featuredProductSlug: ProductSlug;
  publicNavigationProductSlugs: ProductSlug[];
  hiddenPortfolioProductSlugs: ProductSlug[];
  showParentCompanyAsPrimaryLanding: boolean;
};

export const publicProductVisibilityConfig: PublicProductVisibilityConfig = {
  featuredProductSlug: "operavault",
  publicNavigationProductSlugs: ["operavault"],
  hiddenPortfolioProductSlugs: ["cantoria", "steward-ledger"],
  showParentCompanyAsPrimaryLanding: false
};

function bySlugOrder(slugs: ProductSlug[]) {
  return slugs.map((slug) => getProductBySlug(slug));
}

export function getCurrentPublicProduct(): Product {
  return getProductBySlug(publicProductVisibilityConfig.featuredProductSlug);
}

export function getPublicNavigationProducts(): Product[] {
  return bySlugOrder(publicProductVisibilityConfig.publicNavigationProductSlugs);
}

export function getHiddenPortfolioProducts(): Product[] {
  return bySlugOrder(publicProductVisibilityConfig.hiddenPortfolioProductSlugs);
}

export function getPublicShowcaseProducts(): Product[] {
  const navigationProducts = getPublicNavigationProducts();
  const navigationSlugs = new Set(
    navigationProducts.map((product) => product.slug)
  );

  return products.filter((product) => navigationSlugs.has(product.slug));
}
