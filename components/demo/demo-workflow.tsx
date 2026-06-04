import type { DemoWorkflowStep } from "@/modules/operavault-demo/demo-data";

type DemoWorkflowProps = {
  steps: DemoWorkflowStep[];
};

export function DemoWorkflow({ steps }: DemoWorkflowProps) {
  return (
    <div className="demo-workflow">
      {steps.map((step, index) => (
        <div key={step.title} className="demo-workflow-step">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>{step.title}</strong>
            <p>{step.detail}</p>
          </div>
          <em>{step.status}</em>
        </div>
      ))}
    </div>
  );
}
