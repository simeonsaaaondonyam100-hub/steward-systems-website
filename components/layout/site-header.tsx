import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-mark" href="/" aria-label="Steward Systems home">
        <span className="brand-symbol">SS</span>
        <span>{siteConfig.name}</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {siteConfig.navItems.slice(0, 3).map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/request-demo">
        <span>Request demo</span>
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </header>
  );
}
