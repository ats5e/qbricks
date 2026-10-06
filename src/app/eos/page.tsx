import { EosEngine } from "@/components/interactive/EosEngine";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "EOS Engine",
  description:
    "Meet EOS, the SQL engine that powers QBricks. Built on Apache DataFusion, Arrow-native streaming and Vortex: 1 TB of CSV ingested every 50.6 seconds at €0.48 compute per TB, and 866M records through the full TPC-H suite in 14.5s on one right-sized VM.",
  path: "/eos",
});

export default function EosPage() {
  return <EosEngine />;
}
