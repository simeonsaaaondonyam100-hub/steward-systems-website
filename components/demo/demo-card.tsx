import type { DemoSection } from "@/modules/operavault-demo/demo-data";

import { DemoMetric } from "./demo-metric";
import { DemoTable } from "./demo-table";
import { DemoWorkflow } from "./demo-workflow";

type DemoCardProps = {
  section: DemoSection;
};

export function DemoCard({ section }: DemoCardProps) {
  return (
    <article className="demo-card" id={section.id}>
      <div className="demo-card-copy">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      {section.metrics ? (
        <div className="demo-metric-grid">
          {section.metrics.map((metric) => (
            <DemoMetric key={metric.label} metric={metric} />
          ))}
        </div>
      ) : null}
      {section.workflow ? <DemoWorkflow steps={section.workflow} /> : null}
      {section.columns && section.rows ? (
        <DemoTable columns={section.columns} rows={section.rows} />
      ) : null}
    </article>
  );
}
