import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import { DemoRequestForm } from "@/components/forms/demo-request-form";
import { operavaultHeroStatement } from "@/modules/product/operavault-product";
import type { ProductInterest } from "@/modules/enquiries/types";

export const metadata: Metadata = {
  title: "Request Demo"
};

type RequestDemoPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function readParam(
  params: Record<string, string | string[] | undefined>,
  key: string
) {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

function parseProductInterest(value: string | undefined): ProductInterest {
  if (value === "operavault" || value === "cantoria" || value === "steward_ledger") {
    return value;
  }

  if (value === "steward-ledger") {
    return "steward_ledger";
  }

  return "operavault";
}

export default async function RequestDemoPage({
  searchParams
}: RequestDemoPageProps) {
  const params = (await searchParams) ?? {};
  const defaultProductInterest = parseProductInterest(readParam(params, "product"));

  return (
    <main>
      <section className="request-demo-page">
        <div className="request-demo-copy">
          <p className="eyebrow">Request an Operavault demo</p>
          <h1>See how Operavault fits your school operations.</h1>
          <p>{operavaultHeroStatement}</p>
          <div className="request-demo-points">
            {[
              "Choose the modules your administrators need to inspect first.",
              "Review plan fit, implementation scope, and active-development modules.",
              "Demo requests are captured in Steward Systems Core for follow-up."
            ].map((point) => (
              <div key={point}>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="security-note">
            <ShieldCheck aria-hidden="true" size={20} />
            <span>
              Public demo materials use synthetic data only. No private school,
              student, parent, staff, finance, or tenant data is connected here.
            </span>
          </div>
        </div>
        <div className="form-panel">
          <DemoRequestForm
            defaultProductInterest={defaultProductInterest}
            sourcePage="/request-demo"
          />
        </div>
      </section>
    </main>
  );
}
