import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  Landmark,
  Music2,
  Rocket
} from "lucide-react";

import { CtaBand } from "@/components/marketing/cta-band";
import { ProductCard } from "@/components/marketing/product-card";
import { products } from "@/modules/products/product-registry";

const operavault = products.find((product) => product.slug === "operavault");

const studioCapabilities = [
  "Institutional operating systems",
  "Progressive Web Applications",
  "Websites and portals",
  "Custom product lines",
  "Workflow automation",
  "Secure backend systems"
];

const companySignals = [
  "Public product tours and pricing stay in Steward Systems Core.",
  "Each product keeps its own operational backend and private records.",
  "Demo, enquiry, and early-access requests flow into one company pipeline."
];

const focusAreas = [
  {
    title: "Institutional operations",
    description:
      "School administration, academic records, staff workflows, parent engagement, finance visibility, and compliance evidence.",
    icon: Building2
  },
  {
    title: "Music and rehearsal systems",
    description:
      "Notation, solfa, SATB, playback, part extraction, print, and rehearsal-support workflows for music teams.",
    icon: Music2
  },
  {
    title: "Governance and treasury",
    description:
      "Member-led finance, meetings, resolutions, treasury movement, approvals, reports, and audit-ready accountability.",
    icon: Landmark
  }
];

const productUpdates = [
  {
    product: "Operavault",
    status: "Rollout preparation",
    detail:
      "The school-operations product tour, module catalogue, pricing overview, and demo-request flow are now public-facing."
  },
  {
    product: "Cantoria",
    status: "Early-access foundations",
    detail:
      "Score projects, SATB notation, playback, part extraction, print, and selected-part export foundations are being shaped for public positioning."
  },
  {
    product: "Steward Ledger",
    status: "Governance product review",
    detail:
      "Member, treasury, meetings, resolutions, reports, permissions, and audit workflows are being prepared for a later public product tour."
  }
];

function getPublicStatusLabel(productSlug: string, status: string) {
  if (productSlug === "steward-ledger" && status === "planned") {
    return "active development";
  }

  return status.replace("_", " ");
}

export default function HomePage() {
  return (
    <main>
      <section className="company-landing-hero">
        <div className="company-landing-copy">
          <div className="hero-brand-lockup">
            <Image
              src="/steward-systems-logo.png"
              alt="Steward Systems logo"
              width={132}
              height={99}
              priority
            />
            <div>
              <p className="eyebrow">Full-stack software company</p>
              <h1>Steward Systems</h1>
            </div>
          </div>
          <p className="hero-kicker">Full-stack software for real-world operations.</p>
          <p>
            Steward Systems designs, builds, and operates operating systems,
            applications, Progressive Web Applications, websites, portals, and
            specialist product lines for teams that need dependable digital
            systems instead of scattered manual work.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products">
              <span>Explore products</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button button-secondary" href="/request-demo">
              <span>Request a demo</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="studio-capability-row" aria-label="Steward Systems capabilities">
            {studioCapabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </div>
        <div className="company-hero-panel" aria-label="Steward Systems product map">
          <div className="company-hero-panel-top">
            <Image
              src="/steward-systems-logo.png"
              alt=""
              width={62}
              height={46}
              aria-hidden="true"
            />
            <div>
              <span>Product lines under Steward Systems</span>
              <strong>One parent company. Independent product systems.</strong>
            </div>
          </div>
          <div className="company-product-stack">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <Image
                  src={product.logo.src}
                  alt=""
                  width={58}
                  height={58}
                  aria-hidden="true"
                  className="company-product-stack-logo"
                />
                <span>{product.eyebrow}</span>
                <strong>{product.name}</strong>
                <small>{getPublicStatusLabel(product.slug, product.status)}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section company-section">
        <div className="section-heading">
          <p className="eyebrow">Product Portfolio</p>
          <h2>Focused products with one Steward Systems standard.</h2>
          <p>
            Each product solves a real operating problem. Steward Systems keeps
            the public view, product positioning, pricing context, and enquiry
            flow in one place while each product keeps its own private records.
          </p>
        </div>
        <div className="product-grid company-product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {operavault ? (
        <section className="page-section company-featured-product company-section">
          <div>
            <p className="eyebrow">Featured Rollout Product</p>
            <h2>Operavault is the product currently being prepared for wider institutional rollout.</h2>
            <p>
              Operavault brings the serious work of running a school into one
              secure, tenant-aware platform: people records, academics,
              attendance, discipline, finance workflows, parent communication,
              audit trails, staff duties, and decision intelligence.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/products/operavault">
                <span>View Operavault</span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button-secondary" href="/pricing">
                <span>View pricing</span>
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
          <div className="company-featured-card">
            <p className="eyebrow">{operavault.eyebrow}</p>
            <h3>{operavault.brandLine}</h3>
            <p>{operavault.summary}</p>
            <div className="capability-list">
              {operavault.capabilities.map((capability) => (
                <div key={capability} className="capability-item">
                  <CheckCircle2 aria-hidden="true" size={18} />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="page-section company-section">
        <div className="portfolio-highlight-grid">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article key={area.title}>
                <Icon aria-hidden="true" size={22} />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-section company-principles company-section">
        <article>
          <Compass aria-hidden="true" size={24} />
          <p className="eyebrow">Vision</p>
          <h2>To make practical institutional software feel dependable, intelligent, and ready for daily work.</h2>
          <p>
            We want schools, music teams, finance groups, cooperatives, and
            growing organisations to have systems that preserve knowledge,
            clarify responsibility, and turn scattered operations into evidence.
          </p>
        </article>
        <article>
          <Rocket aria-hidden="true" size={24} />
          <p className="eyebrow">Mission</p>
          <h2>Build software products that solve real problems with strong engineering and careful rollout.</h2>
          <p>
            Steward Systems combines product design, full-stack development,
            data boundaries, workflow thinking, and user support so teams can
            adopt useful systems without losing control of their operations.
          </p>
        </article>
      </section>

      <section className="page-section company-team-section company-section">
        <div>
          <p className="eyebrow">Meet The Team</p>
          <h2>Founder-led product architecture with room to grow.</h2>
          <p>
            Steward Systems is currently shaped by founder-led product thinking:
            close to real users, careful about data boundaries, and practical
            about what institutions actually need to run well.
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
            Leads product direction across Steward Systems, from idea and
            workflow modelling to interface design, backend architecture,
            rollout planning, and product-source reviews.
          </p>
        </div>
      </section>

      <section className="page-section company-updates-section company-section">
        <div className="section-heading">
          <p className="eyebrow">Product Updates</p>
          <h2>What Steward Systems is actively shaping.</h2>
          <p>
            Public product pages should move with the actual software, so every
            product claim is tracked against source-of-truth notes and product
            evidence.
          </p>
        </div>
        <div className="product-update-list">
          {productUpdates.map((update) => (
            <article key={update.product}>
              <span>{update.status}</span>
              <h3>{update.product}</h3>
              <p>{update.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section two-column company-section">
        <div>
          <p className="eyebrow">Core Boundary</p>
          <h2>The public website controls product presentation, not private operations.</h2>
          <p>
            Steward Systems Core owns public product pages, pricing overview,
            demo requests, contact messages, and business pipeline follow-up. It
            does not connect to school tenant data, music project data, or
            finance-governance operational ledgers.
          </p>
        </div>
        <div className="capability-list">
          {companySignals.map((signal) => (
            <div key={signal} className="capability-item">
              <CheckCircle2 aria-hidden="true" size={18} />
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Start with the product that matches the work."
        description="Explore Steward Systems products, then request a demo or early-access conversation from the public site."
      />
    </main>
  );
}
