import type { Metadata } from "next";

import { EnquiryForm } from "@/components/forms/enquiry-form";
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

  return "general";
}

export default async function RequestDemoPage({
  searchParams
}: RequestDemoPageProps) {
  const params = (await searchParams) ?? {};
  const defaultProductInterest = parseProductInterest(readParam(params, "product"));

  return (
    <main>
      <section className="form-page">
        <div>
          <p className="eyebrow">Request demo</p>
          <h1>Explore a Steward Systems product with the team.</h1>
          <p>
            Request a walkthrough for Operavault, Cantoria, Steward Ledger, or
            a general Steward Systems conversation.
          </p>
        </div>
        <div className="form-panel">
          <EnquiryForm
            defaultProductInterest={defaultProductInterest}
            defaultRequestType="demo"
            sourcePage="/request-demo"
          />
        </div>
      </section>
    </main>
  );
}
