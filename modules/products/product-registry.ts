import type { Product, ProductSlug } from "./types";

export const products: Product[] = [
  {
    slug: "operavault",
    coreSlug: "operavault",
    name: "Operavault",
    brandLine: "Operavault by Steward Systems",
    eyebrow: "Institution operations",
    summary:
      "A school and institutional operations platform for departments, academics, HR, accounts, admissions, procurement, attendance, reports, workload, and appraisal.",
    audience:
      "Schools, institutions, bursars, administrators, HR teams, academic leaders, and department heads.",
    valueProposition:
      "Operavault gives institutions a clearer operating layer for the work that usually lives across spreadsheets, paper trails, and disconnected portals.",
    capabilities: [
      "Academic and departmental operations",
      "HR, workload, and appraisal readiness",
      "Accounts, admissions, procurement, and reporting workflows"
    ],
    status: "active",
    publicUrl: "/products/operavault",
    demoUrl: "/request-demo",
    cta: {
      label: "Request demo",
      href: "/request-demo"
    },
    featuredActions: [
      {
        label: "View Public Demo",
        href: "/products/operavault/demo",
        variant: "primary"
      },
      {
        label: "Request Live Demo",
        href: "/request-demo",
        variant: "secondary"
      },
      {
        label: "View Pricing Overview",
        href: "/products/operavault/pricing",
        variant: "ghost"
      }
    ],
    logo: {
      src: "/operavault-logo.png",
      alt: "Operavault logo"
    },
    accent: "gold"
  },
  {
    slug: "cantoria",
    coreSlug: "cantoria",
    name: "Cantoria",
    brandLine: "Cantoria by Steward Systems",
    eyebrow: "Music and choir workflow",
    summary:
      "A music notation, solfa, SATB, choir rehearsal, composition, part extraction, playback, and export workspace.",
    audience:
      "Choirs, choir directors, music teachers, composers, arrangers, worship teams, and rehearsal coordinators.",
    valueProposition:
      "Cantoria helps music teams move from composition and arrangement to rehearsal-ready material with less manual rewriting.",
    capabilities: [
      "Solfa, SATB, and notation workflows",
      "Choir rehearsal and part extraction",
      "Playback, composition support, and exports"
    ],
    status: "early_access",
    publicUrl: "/products/cantoria",
    demoUrl: "/contact?interest=cantoria&type=early_access",
    cta: {
      label: "Join early access",
      href: "/contact?interest=cantoria&type=early_access"
    },
    logo: {
      src: "/cantoria-logo.png",
      alt: "Cantoria logo"
    },
    accent: "teal"
  },
  {
    slug: "steward-ledger",
    coreSlug: "steward_ledger",
    name: "Steward Ledger",
    brandLine: "Steward Ledger by Steward Systems",
    eyebrow: "Governance and treasury",
    summary:
      "An investment club and cooperative governance and treasury portal for members, meetings, resolutions, treasury, investments, and approvals.",
    audience:
      "Investment clubs, cooperatives, trustees, finance officers, secretaries, governance committees, and approval teams.",
    valueProposition:
      "Steward Ledger gives member-led finance groups a disciplined way to document decisions, treasury movement, and approvals.",
    capabilities: [
      "Member, meeting, and resolution governance",
      "Treasury, investment, and approval workflows",
      "Audit-ready operating records for group accountability"
    ],
    status: "planned",
    publicUrl: "/products/steward-ledger",
    demoUrl: "/request-demo",
    cta: {
      label: "Request walkthrough",
      href: "/request-demo"
    },
    logo: {
      src: "/triple-twenty-five-logo.jpeg",
      alt: "Triple Twenty-Five logo for the Steward Ledger product line"
    },
    accent: "graphite"
  }
];

export function getProductBySlug(slug: ProductSlug): Product {
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    throw new Error(`Unknown Steward Systems product: ${slug}`);
  }

  return product;
}

export function getProductSeedRows() {
  return products.map((product) => ({
    slug: product.coreSlug,
    name: product.name,
    shortDescription: product.summary,
    status: product.status,
    publicUrl: product.publicUrl,
    demoUrl: product.demoUrl
  }));
}
