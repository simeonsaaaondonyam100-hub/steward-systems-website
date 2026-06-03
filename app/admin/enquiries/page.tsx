import type { Metadata } from "next";
import { LockKeyhole, Rows3, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Enquiries"
};

export default function AdminEnquiriesPage() {
  return (
    <main>
      <section className="admin-shell">
        <div>
          <p className="eyebrow">Admin readiness</p>
          <h1>Enquiry queue placeholder</h1>
          <p>
            This route is reserved for the internal Steward Systems enquiry
            queue. Supabase Core persistence and service methods are ready, but
            authentication, roles, and audit event views must be added before
            live admin use.
          </p>
        </div>
        <div className="admin-readiness">
          <div>
            <LockKeyhole aria-hidden="true" size={22} />
            <span>Authentication pending</span>
          </div>
          <div>
            <Rows3 aria-hidden="true" size={22} />
            <span>Core enquiry tables ready for SQL Editor migration</span>
          </div>
          <div>
            <ShieldAlert aria-hidden="true" size={22} />
            <span>Admin access policies pending</span>
          </div>
        </div>
      </section>
    </main>
  );
}
