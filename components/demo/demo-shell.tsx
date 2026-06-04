import Link from "next/link";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";

import { DemoCard } from "@/components/demo/demo-card";
import {
  operavaultDemoSections,
  privacyAssurance
} from "@/modules/operavault-demo/demo-data";

export function DemoShell() {
  return (
    <main>
      <section className="demo-hero">
        <div>
          <p className="eyebrow">Operavault by Steward Systems</p>
          <h1>See Operavault in action</h1>
          <p>
            A guided public demo of Steward Systems&apos; institutional
            operations platform for schools and organisations.
          </p>
          <div className="hero-actions">
            <Link
              className="button button-primary"
              href="/request-demo"
            >
              <span>Request a Live Demo</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              className="button button-secondary"
              href="/products/operavault/pricing"
            >
              <span>View Pricing Overview</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-ghost" href="/contact?interest=operavault">
              <span>Contact Steward Systems</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="privacy-band">
        <ShieldCheck aria-hidden="true" size={24} />
        <p>{privacyAssurance}</p>
      </section>

      <section className="page-section demo-index">
        <p className="eyebrow">Guided tour</p>
        <h2>Public-safe views of the institutional operating layer.</h2>
        <div className="demo-index-grid">
          {operavaultDemoSections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.eyebrow}
            </a>
          ))}
        </div>
      </section>

      <section className="demo-section-list">
        {operavaultDemoSections.map((section) => (
          <DemoCard key={section.id} section={section} />
        ))}
      </section>

      <section className="deck-readiness">
        <div>
          <p className="eyebrow">Downloadable deck</p>
          <h2>Downloadable deck coming soon.</h2>
          <p>
            A public PDF deck can be added later under
            <code> public/downloads/</code>. No broken download link is shown
            until the deck file exists.
          </p>
        </div>
        <Download aria-hidden="true" size={32} />
      </section>
    </main>
  );
}
