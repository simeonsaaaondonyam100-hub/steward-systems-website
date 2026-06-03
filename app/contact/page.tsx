import type { Metadata } from "next";

import { EnquiryForm } from "@/components/forms/enquiry-form";
import type { ProductInterest, RequestType } from "@/modules/enquiries/types";

export const metadata: Metadata = {
  title: "Contact"
};

type ContactPageProps = {
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

  return "general";
}

function parseRequestType(value: string | undefined): RequestType {
  if (
    value === "demo" ||
    value === "contact" ||
    value === "early_access" ||
    value === "partnership"
  ) {
    return value;
  }

  return "contact";
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = (await searchParams) ?? {};
  const defaultProductInterest = parseProductInterest(readParam(params, "interest"));
  const defaultRequestType = parseRequestType(readParam(params, "type"));

  return (
    <main>
      <section className="form-page">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Send a Steward Systems enquiry.</h1>
          <p>
            Use this form for general contact, partnerships, early access, or a
            product-specific conversation. Enquiries are submitted to Steward
            Systems Core for company-level follow-up.
          </p>
        </div>
        <div className="form-panel">
          <EnquiryForm
            defaultProductInterest={defaultProductInterest}
            defaultRequestType={defaultRequestType}
            sourcePage="/contact"
          />
        </div>
      </section>
    </main>
  );
}
