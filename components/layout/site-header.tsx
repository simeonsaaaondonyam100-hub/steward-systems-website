import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label="Operavault homepage">
        <span className="brand-symbol">O</span>
        <span className="brand-copy">
          <strong>Operavault</strong>
          <small>School Operations SaaS</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/company">Company</Link>
        <Link href="/request-demo">Book demo</Link>
      </nav>
      <Link className="nav-cta" href="/request-demo">
        <span>Request a demo</span>
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </header>
  );
}
