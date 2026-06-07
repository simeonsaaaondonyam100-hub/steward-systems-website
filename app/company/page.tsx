import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Compass,
  GitBranch,
  Rocket,
  ShieldCheck,
  Workflow
} from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Company"
};

export default function CompanyPage() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <div className="page-hero-brand-lockup">
          <Image
            src="/steward-systems-logo.png"
            alt="Steward Systems logo"
            width={118}
            height={88}
            priority
          />
          <div>
            <p className="eyebrow">Company</p>
            <h1>Steward Systems</h1>
          </div>
        </div>
        <p className="product-title-kicker">
          A full-stack software company for practical operating systems.
        </p>
        <p>
          We design and build operating systems, applications, Progressive Web
          Applications, websites, portals, and focused product lines that solve
          real operational problems for institutions, teams, and growing
          organisations.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/request-demo">
            <span>Request Operavault demo</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button-ghost" href="/products">
            <span>Explore products</span>
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>

      <section className="page-section company-grid company-section">
        <article>
          <Building2 aria-hidden="true" size={24} />
          <h2>Product seriousness</h2>
          <p>
            We build products around records, governance, accountability,
            usability, and continuity instead of decorative software that does
            not survive daily operations.
          </p>
        </article>
        <article>
          <Workflow aria-hidden="true" size={24} />
          <h2>Full-stack delivery</h2>
          <p>
            Steward Systems can shape public websites, portals, application
            workflows, backend services, access control, database boundaries,
            and Progressive Web Application experiences.
          </p>
        </article>
        <article>
          <ShieldCheck aria-hidden="true" size={24} />
          <h2>Operational boundaries</h2>
          <p>
            Product lines remain independently governable. Buyers can explore
            the products clearly without exposing private operational data.
          </p>
        </article>
      </section>

      <section className="page-section company-principles company-section">
        <article>
          <Compass aria-hidden="true" size={24} />
          <p className="eyebrow">Vision</p>
          <h2>Dependable software for institutions that cannot afford confusion.</h2>
          <p>
            Steward Systems exists to make serious operating work easier to
            see, manage, review, and improve.
          </p>
        </article>
        <article>
          <Rocket aria-hidden="true" size={24} />
          <p className="eyebrow">Mission</p>
          <h2>Turn real workflows into software products that people can actually adopt.</h2>
          <p>
            We combine workflow analysis, product design, full-stack
            development, rollout thinking, and careful public positioning.
          </p>
        </article>
      </section>

      <section className="page-section company-team-section company-section">
        <div>
          <p className="eyebrow">Founder-Led</p>
          <h2>Product leadership close to the work.</h2>
          <p>
            Steward Systems is being built with founder-led attention to real
            product use: what users need to do, which records must be protected,
            and how public claims should match actual product capability.
          </p>
        </div>
        <div className="founder-profile-card">
          <div className="founder-photo-frame">
            <Image
              src="/founder-ceo.jpeg"
              alt="Founder and CEO of Steward Systems"
              width={160}
              height={160}
              className="founder-photo"
            />
          </div>
          <p className="eyebrow">Founder / CEO</p>
          <h3>Founder and product architect</h3>
          <p>
            Leads product direction, technical architecture, interface quality,
            product-source reviews, and rollout planning across the Steward
            Systems product family.
          </p>
        </div>
      </section>

      <section className="page-section muted-section two-column">
        <div>
          <p className="eyebrow">Product discipline</p>
          <h2>Steward Systems builds focused products without blurring operational boundaries.</h2>
          <p>
            Each product is designed around the records, permissions, workflows,
            and governance needs of its own market. That discipline keeps
            product discovery clear while protecting the operational work each
            customer entrusts to the software.
          </p>
        </div>
        <div className="capability-list">
          <div className="capability-item">
            <GitBranch aria-hidden="true" size={18} />
            <span>Product systems remain independently governable.</span>
          </div>
          <div className="capability-item">
            <ShieldCheck aria-hidden="true" size={18} />
            <span>Customer records and institution-specific content remain private by design.</span>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with the product that matches the work."
        description="Explore Steward Systems products and request the right demo, walkthrough, or early-access conversation."
      />
    </main>
  );
}
