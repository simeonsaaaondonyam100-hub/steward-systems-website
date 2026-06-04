import Link from "next/link";

import { products } from "@/modules/products/product-registry";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand-mark footer-brand" href="/">
          <span className="brand-symbol">S</span>
          <span className="brand-copy">
            <strong>Steward Systems</strong>
            <small>Product company</small>
          </span>
        </Link>
        <p>
          Steward Systems builds practical software products for institutions
          that need dependable records, workflow discipline, and management
          visibility.
        </p>
      </div>
      <div className="footer-links">
        <div>
          <h2>Company</h2>
          <Link href="/products">Products</Link>
          <Link href="/company">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h2>Operavault</h2>
          <Link href="/products/operavault">Product tour</Link>
          <Link href="/features">Modules</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/request-demo">Request demo</Link>
        </div>
        <div>
          <h2>Products</h2>
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
