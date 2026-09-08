import type { Metadata } from "next";

import { EosEngine } from "@/components/interactive/EosEngine";

export const metadata: Metadata = {
  title: "EOS Engine",
  description:
    "Meet EOS, the best-in-class SQL engine that powers QBricks. Built with Apache DataFusion and Arrow-native streaming: 866M records through the full TPC-H suite in 16.5s, on one right-sized VM. No Spark, no clusters, no memory tax.",
};

export default function EosPage() {
  return <EosEngine />;
}
