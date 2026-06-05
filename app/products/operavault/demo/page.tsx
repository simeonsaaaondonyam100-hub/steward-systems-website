import type { Metadata } from "next";

import { DemoShell } from "@/components/demo/demo-shell";

export const metadata: Metadata = {
  title: "Operavault Public Demo",
  description:
    "Explore a guided public demo of Operavault, Steward Systems' institutional operations platform for schools and organisations."
};

export default function OperavaultDemoPage() {
  return <DemoShell />;
}
