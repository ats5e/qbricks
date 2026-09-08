import type { Metadata } from "next";

import { Sustainability } from "@/components/interactive/Sustainability";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Less compute, less carbon. QBricks runs the same pipeline workload on one right-sized node instead of an over-provisioned cluster: −88% energy per year, −94% annual platform cost, and emissions the grid never sees.",
};

export default function SustainabilityPage() {
  return <Sustainability />;
}
