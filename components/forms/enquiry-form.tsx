"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";

import {
  createEnquiryAction,
  type CreateEnquiryActionState
} from "@/server/actions/enquiries/create-enquiry-action";
import {
  enquiryTypes,
  productInterests,
  type RequestType,
  type ProductInterest
} from "@/modules/enquiries/types";

const productLabels: Record<ProductInterest, string> = {
  operavault: "Operavault",
  cantoria: "Cantoria",
  steward_ledger: "Steward Ledger",
  general: "General"
};

const enquiryLabels: Record<RequestType, string> = {
  demo: "Demo",
  contact: "Contact",
  early_access: "Early access",
  partnership: "Partnership"
};

const initialState: CreateEnquiryActionState = {
  ok: false,
  message: ""
};

type EnquiryFormProps = {
  defaultProductInterest?: ProductInterest;
  defaultRequestType?: RequestType;
  sourcePage: string;
};

export function EnquiryForm({
  defaultProductInterest = "general",
  defaultRequestType = "contact",
  sourcePage
}: EnquiryFormProps) {
  const [state, formAction, isPending] = useActionState(
    createEnquiryAction,
    initialState
  );

  return (
    <form className="enquiry-form" action={formAction}>
      <input name="sourcePage" type="hidden" value={sourcePage} />
      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Organisation</span>
          <input name="organisation" autoComplete="organization" required />
        </label>
        <label>
          <span>Role</span>
          <input name="role" autoComplete="organization-title" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Location</span>
          <input name="location" autoComplete="address-level2" />
        </label>
        <label>
          <span>Product interest</span>
          <select name="productSlug" defaultValue={defaultProductInterest}>
            {productInterests.map((interest) => (
              <option key={interest} value={interest}>
                {productLabels[interest]}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Request type</span>
          <select name="requestType" defaultValue={defaultRequestType}>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {enquiryLabels[type]}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Preferred demo time</span>
          <input name="preferredDemoTime" placeholder="Optional" />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea
          name="message"
          minLength={10}
          placeholder="Tell us what you would like to explore."
          required
        />
      </label>
      <label className="checkbox-label">
        <input name="consentToContact" type="checkbox" required />
        <span>I agree to be contacted by Steward Systems about this enquiry.</span>
      </label>
      <button className="button button-primary" type="submit" disabled={isPending}>
        <span>{isPending ? "Sending..." : "Send enquiry"}</span>
        <Send aria-hidden="true" size={18} />
      </button>
      {state.message ? (
        <div className={state.ok ? "form-status" : "form-status form-error"}>
          <p>{state.message}</p>
          {state.errors?.length ? (
            <ul>
              {state.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
