import { Sustainability } from "@/components/interactive/Sustainability";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sustainability",
  description:
    "Less compute, less carbon. QBricks runs the same pipeline workload on one right-sized node instead of an over-provisioned cluster: −88% energy per year, −96% annual platform cost, and emissions the grid never sees.",
  path: "/sustainability",
});

export default function SustainabilityPage() {
  return <Sustainability />;
}
