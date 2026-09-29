"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertOctagon, ArrowRight, ArrowRightCircle, CheckCircle2, Database, Network, ShieldAlert, Sparkles, TrendingDown, Users, XCircle } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { QBricksText, brand } from "@/components/ui/QBricksText";

const cases = [
  {
    title: "Governed data for AML that stands up to scrutiny.",
    icon: ShieldAlert,
    tag: "AML",
    pain: "Alerts and investigations are only as good as the data feeding them; poor matching and ungoverned data drive false positives.",
    help: "Contract-enforced, fully-lineaged data gives your monitoring stack clean, resolved records you can defend to the regulator.",
    outcome: "Fewer false positives, defensible investigations and lower cost.",
    colSpan: "lg:col-span-3",
  },
  {
    title: "KYC and perpetual KYC built on data you can trust.",
    icon: Users,
    tag: "KYC / pKYC",
    pain: "Customer data is fragmented across systems; keeping KYC current is expensive and error-prone.",
    help: "Contextual, governed data with high matching accuracy gives a reliable single view.",
    outcome: "Faster onboarding, continuous KYC and audit-ready files.",
    colSpan: "lg:col-span-3",
  },
  {
    title: "Stop fraud with data that is actually connected.",
    icon: AlertOctagon,
    tag: "Fraud & financial crime",
    pain: "Fraud signals live in silos; weak data linkage means missed patterns and inflated false positives.",
    help: "Ontologies and knowledge graphs interconnect data; embedded trust scoring sharpens entity resolution.",
    outcome: "Stronger detection, fewer false positives and a clear audit trail.",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Master data with context, governance and lineage.",
    icon: Network,
    tag: "Contextual MDM",
    pain: "Traditional MDM is brittle and loses the business context needed for customer intelligence.",
    help: "Governed metadata plus ontologies and knowledge graphs deliver contextual master data.",
    outcome: "A trustworthy single view that powers customer intelligence and cross-sell.",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Risk decisions are only as good as the data behind them.",
    icon: TrendingDown,
    tag: "Credit & ESG risk",
    pain: "Credit and ESG risk depend on accurate, well-understood, well-lineaged data; regulators expect to see the working.",
    help: "Governed, auditable data foundations with clear lineage give risk teams explainable inputs.",
    outcome: "Defensible risk models and reporting, with the audit trail built in.",
    colSpan: "lg:col-span-2",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="section-y relative overflow-hidden border-y border-black/5 bg-white">

      <div className="container-x relative z-10">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="h-section font-black tracking-tight text-q-ink">
            Governed data products to accelerate your organisation&apos;s AI journey.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-700">
            <QBricksText /> builds AI ready data products, fast.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-6">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] p-8 transition-all hover:bg-black/[0.04] hover:shadow-[0_8px_30px_rgba(232,32,15,0.05)] hover:border-black/20 ${useCase.colSpan}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(232,32,15,0.0825),transparent_60%)]" />

                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-q-brand/30 bg-q-brand/[0.1] px-4 py-1.5 text-xs font-bold text-q-brand-dark">
                    {brand(useCase.tag)}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-q-gray-600 transition-colors group-hover:bg-q-brand/20 group-hover:text-q-brand-ember">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="mb-6 text-2xl font-black leading-tight tracking-tight text-q-ink md:text-3xl">
                  {brand(useCase.title)}
                </h3>

                <div className="pt-6 border-t border-black/10 flex-grow flex flex-col">
                  <div className="space-y-5 mb-6">
                    {/* Pain */}
                    <div>
                      <p className="text-sm leading-relaxed text-q-gray-600">{brand(useCase.pain)}</p>
                    </div>

                    {/* QBricks Help */}
                    <div>
                      <p className="text-sm leading-relaxed text-q-gray-800">
                        <strong className="text-q-ink font-bold">With <QBricksText />:</strong> {brand(useCase.help)}
                      </p>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="mt-auto">
                    <div className="h-full rounded-2xl border border-q-brand/30 bg-white p-5">
                      <span className="mb-2 block text-xs font-bold text-q-brand-dark">The outcome</span>
                      <p className="text-sm font-bold leading-relaxed text-q-ink">{brand(useCase.outcome)}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function StoryBlock({ label, text, tone = "neutral" }: { label: ReactNode; text: string; tone?: "red" | "neutral" }) {
  return (
    <div className={`border-l-2 pl-6 ${tone === "red" ? "border-red-400/35" : "border-black/20"}`}>
      <span className="mb-2 block text-xs font-bold text-q-gray-500">{brand(label)}</span>
      <p className="text-lg leading-relaxed text-q-gray-700">{brand(text)}</p>
    </div>
  );
}
