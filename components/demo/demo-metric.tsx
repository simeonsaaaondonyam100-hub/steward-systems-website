import type { DemoMetric as DemoMetricType } from "@/modules/operavault-demo/demo-data";

type DemoMetricProps = {
  metric: DemoMetricType;
};

export function DemoMetric({ metric }: DemoMetricProps) {
  return (
    <div className="demo-metric">
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <p>{metric.context}</p>
    </div>
  );
}
