import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  Music2,
  type LucideIcon
} from "lucide-react";

import type { Product } from "@/modules/products/types";

const productIcons: Record<Product["slug"], LucideIcon> = {
  operavault: Building2,
  cantoria: Music2,
  "steward-ledger": Landmark
};

type ProductCardProps = {
  product: Product;
  showFeaturedActions?: boolean;
};

export function ProductCard({
  product,
  showFeaturedActions = false
}: ProductCardProps) {
  const Icon = productIcons[product.slug];
  const featuredActions = showFeaturedActions
    ? (product.featuredActions ?? [])
    : [];

  return (
    <article className={`product-card accent-${product.accent}`}>
      <div className="product-card-head">
        <div className="product-logo-frame" aria-hidden="true">
          {product.logo ? (
            <Image
              src={product.logo.src}
              alt=""
              width={88}
              height={88}
              className="product-logo-image"
            />
          ) : (
            <Icon size={22} />
          )}
        </div>
        <div>
          <p className="eyebrow">{product.eyebrow}</p>
          <h3>{product.name}</h3>
        </div>
      </div>
      <p className="product-brand-line">{product.brandLine}</p>
      <p>{product.summary}</p>
      <div className="product-card-actions">
        <Link className="text-link" href={`/products/${product.slug}`}>
          <span>View product</span>
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
        {featuredActions.map((action) => (
          <Link key={action.href} className="text-link" href={action.href}>
            <span>{action.label}</span>
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        ))}
      </div>
    </article>
  );
}
