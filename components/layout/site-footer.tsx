import Link from "next/link";

import { products } from "@/modules/products/product-registry";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand-mark footer-brand" href="/">
          <span className="brand-symbol">SS</span>
          <span>Steward Systems</span>
        </Link>
        <p>
          Company-level software foundation for product discovery, demos, and
          pipeline readiness.
        </p>
      </div>
      <div className="footer-links">
        <div>
          <h2>Products</h2>
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          ))}
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/company">About Steward Systems</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/request-demo">Request demo</Link>
        </div>
      </div>
    </footer>
  );
}
