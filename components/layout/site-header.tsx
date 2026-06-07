import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getCurrentPublicProduct } from "@/modules/products/public-visibility";

export function SiteHeader() {
  const product = getCurrentPublicProduct();

  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label={`${product.name} homepage`}>
        <span className="brand-symbol brand-symbol-image" aria-hidden="true">
          <Image
            src={product.logo.src}
            alt=""
            width={58}
            height={58}
            priority
          />
        </span>
        <span className="brand-copy">
          <strong>{product.name}</strong>
          <small>by Steward Systems</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/features">Modules</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/products/operavault/demo">Demo tour</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="nav-cta" href="/request-demo">
        <span>Request a demo</span>
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </header>
  );
}
