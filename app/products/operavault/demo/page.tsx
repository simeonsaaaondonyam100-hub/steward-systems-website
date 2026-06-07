import type { Metadata } from "next";

import { DemoShell } from "@/components/demo/demo-shell";

export const metadata: Metadata = {
  title: "Operavault Demo Tour",
  description:
    "Explore a guided Operavault demo tour for school operations, academic records, parent engagement, compliance evidence, staff workflows, and management visibility."
};

export default function OperavaultDemoPage() {
  return <DemoShell />;
}
