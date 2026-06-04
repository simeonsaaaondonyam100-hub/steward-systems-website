import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label="Steward Systems homepage">
        <span className="brand-symbol brand-symbol-image" aria-hidden="true">
          <Image
            src="/steward-systems-logo.png"
            alt=""
            width={58}
            height={58}
            priority
          />
        </span>
        <span className="brand-copy">
          <strong>Steward Systems</strong>
          <small>Full-stack software company</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/products">Products</Link>
        <Link href="/products/operavault">Operavault</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/company">Company</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="nav-cta" href="/request-demo">
        <span>Request a demo</span>
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </header>
  );
}
