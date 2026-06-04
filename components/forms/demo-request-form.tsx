"use client";

import { useActionState } from "react";
import { CalendarClock, Send } from "lucide-react";

import {
  demoRequestInterestAreas,
  demoRequestPlans
} from "@/modules/demo-requests/types";
import {
  productInterests,
  type ProductInterest
} from "@/modules/enquiries/types";
import {
  createDemoRequestAction,
  type CreateDemoRequestActionState
} from "@/server/actions/demo-requests/create-demo-request-action";

const productLabels: Record<ProductInterest, string> = {
  operavault: "Operavault",
  cantoria: "Cantoria",
  steward_ledger: "Steward Ledger",
  general: "General Steward Systems demo"
};

const initialState: CreateDemoRequestActionState = {
  ok: false,
  message: ""
};

type DemoRequestFormProps = {
  defaultProductInterest?: ProductInterest;
  sourcePage: string;
};

export function DemoRequestForm({
  defaultProductInterest = "operavault",
  sourcePage
}: DemoRequestFormProps) {
  const [state, formAction, isPending] = useActionState(
    createDemoRequestAction,
    initialState
  );

  return (
    <form className="enquiry-form demo-request-form" action={formAction}>
      <input name="sourcePage" type="hidden" value={sourcePage} />
      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-grid">
        <label>
          <span>School or organisation</span>
          <input name="schoolName" autoComplete="organization" required />
        </label>
        <label>
          <span>Contact person</span>
          <input name="contactPerson" autoComplete="name" required />
        </label>
        <label>
          <span>Role or title</span>
          <input name="role" autoComplete="organization-title" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required />
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
          <span>Preferred plan</span>
          <select name="preferredPlan" defaultValue="Not sure yet" required>
            {demoRequestPlans.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Preferred demo date/time</span>
          <input
            name="preferredDemoTime"
            type="datetime-local"
            aria-describedby="preferred-demo-time-note"
            required
          />
        </label>
      </div>

      <fieldset className="checkbox-fieldset">
        <legend>Interest areas</legend>
        <div className="checkbox-grid">
          {demoRequestInterestAreas.map((area) => (
            <label key={area} className="checkbox-label">
              <input name="interestAreas" type="checkbox" value={area} />
              <span>{area}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          minLength={10}
          placeholder="Tell us what you want to see during the demo."
          required
        />
      </label>

      <p id="preferred-demo-time-note" className="form-help">
        The team will confirm the final date and meeting channel before the demo.
      </p>

      <label className="checkbox-label">
        <input name="consentToContact" type="checkbox" required />
        <span>I agree to be contacted by Steward Systems about this demo.</span>
      </label>

      <button className="button button-primary" type="submit" disabled={isPending}>
        <span>{isPending ? "Submitting..." : "Request a demo"}</span>
        {isPending ? (
          <CalendarClock aria-hidden="true" size={18} />
        ) : (
          <Send aria-hidden="true" size={18} />
        )}
      </button>

      {state.message ? (
        <div
          className={state.ok ? "form-status" : "form-status form-error"}
          role="status"
        >
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

