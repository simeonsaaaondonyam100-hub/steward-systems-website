import type { Metadata } from "next";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, ShieldAlert } from "lucide-react";

import {
  getCurrentPublicProduct,
  getHiddenPortfolioProducts,
  getPublicNavigationProducts,
  publicProductVisibilityConfig
} from "@/modules/products/public-visibility";
import { requireGovernanceManageSettings } from "@/server/auth/governance";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Product Visibility"
};

function ProtectedAdminNotice({ reason }: { reason: string }) {
  return (
    <main>
      <section className="admin-shell">
        <div>
          <p className="eyebrow">Protected admin</p>
          <h1>Product visibility</h1>
          <p>
            Product visibility is restricted to Steward Systems admins with the
            governance.manage_settings capability.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/request-demo">
              Open request demo form
            </Link>
          </div>
        </div>
        <div className="admin-readiness">
          <div>
            <LockKeyhole aria-hidden="true" size={22} />
            <span>{reason}</span>
          </div>
          <div>
            <ShieldAlert aria-hidden="true" size={22} />
            <span>
              Hidden portfolio products are not exposed as public demo-ready
              offers without the owner changing the product visibility
              configuration.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function AdminProductVisibilityPage() {
  const access = await requireGovernanceManageSettings();

  if (!access.ok) {
    return <ProtectedAdminNotice reason={access.reason} />;
  }

  const currentProduct = getCurrentPublicProduct();
  const publicProducts = getPublicNavigationProducts();
  const hiddenProducts = getHiddenPortfolioProducts();

  return (
    <main>
      <section className="admin-page-hero">
        <div>
          <p className="eyebrow">Public product control</p>
          <h1>Product visibility</h1>
          <p>
            Review which Steward Systems product is currently promoted to the
            public website. This view is protected by governance.manage_settings.
          </p>
        </div>
      </section>

      <section className="admin-panel product-visibility-admin-panel">
        <div className="admin-panel-header">
          <div>
            <p className="eyebrow">Current focus</p>
            <h2>{currentProduct.name}</h2>
            <p>{currentProduct.publicStatusLabel}</p>
          </div>
          <Link className="button button-primary" href={currentProduct.publicUrl}>
            Open public product
          </Link>
        </div>
        <div className="product-visibility-admin-grid">
          <article>
            <Eye aria-hidden="true" size={22} />
            <h3>Visible in public navigation</h3>
            {publicProducts.map((product) => (
              <div key={product.slug}>
                <strong>{product.name}</strong>
                <span>{product.publicStatusLabel}</span>
              </div>
            ))}
          </article>
          <article>
            <EyeOff aria-hidden="true" size={22} />
            <h3>Hidden portfolio products</h3>
            {hiddenProducts.map((product) => (
              <div key={product.slug}>
                <strong>{product.name}</strong>
                <span>{product.publicStatusLabel}</span>
              </div>
            ))}
          </article>
          <article>
            <LockKeyhole aria-hidden="true" size={22} />
            <h3>Configuration source</h3>
            <div>
              <strong>{publicProductVisibilityConfig.featuredProductSlug}</strong>
              <span>featuredProductSlug</span>
            </div>
            <p>
              This foundation keeps public promotion controlled through
              `modules/products/public-visibility.ts`. A later database-backed
              editor can use the same visibility model.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
