import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import { DemoRequestForm } from "@/components/forms/demo-request-form";
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
          <p className="eyebrow">Request Demo</p>
          <h1>Book a focused Operavault product tour for your institution.</h1>
          <p>
            Share your school context, preferred plan, and priority workflows.
            Steward Systems will review the request and follow up with a demo
            conversation shaped around your operational reality.
          </p>
          <div className="request-demo-points">
            {[
              "No public plan is treated as unlimited.",
              "Founder Institutional Partner requests are subject to approval.",
              "Demo discussion can focus on available modules and active roadmap areas."
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
