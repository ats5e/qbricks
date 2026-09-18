import type { Metadata } from "next";

import { EosEngine } from "@/components/interactive/EosEngine";

export const metadata: Metadata = {
  title: "EOS Engine",
  description:
    "Meet EOS, the SQL engine that powers QBricks. Built to preserve optimisation opportunities from the query planner down to compressed storage: 866M records through the full TPC-H suite in 14.5s, on one right-sized VM.",
};

export default function EosPage() {
  return <EosEngine />;
}
