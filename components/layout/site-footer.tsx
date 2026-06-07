import Image from "next/image";
import Link from "next/link";

import { getCurrentPublicProduct } from "@/modules/products/public-visibility";

export function SiteFooter() {
  const product = getCurrentPublicProduct();

  return (
    <footer className="site-footer">
      <div>
        <Link className="brand-mark footer-brand" href="/">
          <span className="brand-symbol brand-symbol-image" aria-hidden="true">
            <Image
              src={product.logo.src}
              alt=""
              width={58}
              height={58}
            />
          </span>
          <span className="brand-copy">
            <strong>{product.name}</strong>
            <small>by Steward Systems</small>
          </span>
        </Link>
        <p>
          Operavault is the current public product focus from Steward Systems:
          a secure school operations platform for records, workflows,
          communication, finance visibility, and management evidence.
        </p>
      </div>
      <div className="footer-links">
        <div>
          <h2>Operavault</h2>
          <Link href="/features">Modules</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/products/operavault/demo">Demo tour</Link>
          <Link href="/request-demo">Request demo</Link>
        </div>
        <div>
          <h2>Steward Systems</h2>
          <Link href="/company">Company</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
