import Link from "next/link";
import { ArrowRight, PanelsTopLeft } from "lucide-react";

type CtaBandProps = {
  title: string;
  description: string;
};

export function CtaBand({ title, description }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">Next step</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-actions">
        <Link className="button button-primary" href="/request-demo">
          <span>Request demo</span>
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
        <Link className="button button-secondary" href="/pricing">
          <span>Compare plans</span>
          <PanelsTopLeft aria-hidden="true" size={18} />
        </Link>
      </div>
    </section>
  );
}
