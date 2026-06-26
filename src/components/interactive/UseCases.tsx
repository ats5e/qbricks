"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertOctagon, ArrowRight, CheckCircle2, Network, ShieldAlert, TrendingDown, Users } from "lucide-react";
import { useState } from "react";

const cases = [
  {
    title: "Governed data for AML that stands up to scrutiny.",
    icon: ShieldAlert,
    tag: "AML",
    pain: "Alerts and investigations are only as good as the data feeding them; poor matching and ungoverned data drive false positives, missed risk and findings.",
    help: "Governed metadata and the embedded Quantexa Trust Score deliver 99% data matching accuracy, so entities, transactions and relationships resolve correctly; every transformation is auditable for the regulator.",
    outcome: "Fewer false positives, defensible investigations and lower cost to comply.",
  },
  {
    title: "KYC and perpetual KYC built on data you can trust.",
    icon: Users,
    tag: "KYC / pKYC",
    pain: "Customer data is fragmented across systems; keeping KYC current is expensive and error-prone; EDD demands a complete, accurate picture.",
    help: "Contextual, governed data with high matching accuracy gives a reliable single view; Data Products keep customer intelligence current and auditable.",
    outcome: "Faster onboarding, continuous KYC and audit-ready files.",
  },
  {
    title: "Stop fraud with data that is actually connected.",
    icon: AlertOctagon,
    tag: "Fraud & financial crime",
    pain: "Fraud signals live in silos; weak data linkage means missed patterns and inflated false positives.",
    help: "Ontologies and knowledge graphs interconnect data; embedded trust scoring sharpens entity resolution; agents improve detection inputs continuously.",
    outcome: "Stronger detection, fewer false positives and a clear audit trail.",
  },
  {
    title: "Master data with context, governance and lineage.",
    icon: Network,
    tag: "Contextual MDM",
    pain: "Traditional MDM is brittle and loses the business context needed for customer intelligence.",
    help: "Governed metadata plus ontologies and knowledge graphs deliver contextual master data; Quantexa trust scoring assures matching; everything is auditable.",
    outcome: "A trustworthy single view that powers customer intelligence and cross-sell.",
  },
  {
    title: "Risk decisions are only as good as the data behind them.",
    icon: TrendingDown,
    tag: "Credit & ESG risk",
    pain: "Credit and ESG risk depend on accurate, well-understood, well-lineaged data; regulators expect to see the working.",
    help: "Governed, auditable data foundations with clear lineage give risk teams explainable inputs for models and reports.",
    outcome: "Defensible risk models and reporting, with the audit trail built in.",
  },
];

export function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = cases[activeIndex];
  const ActiveIcon = activeCase.icon;

  return (
    <section id="use-cases" className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(232,32,15,0.16),transparent_30%),linear-gradient(to_bottom,#000,rgba(255,255,255,0.025),#000)]" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="eyebrow mb-5">Solutions</p>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.98] tracking-[-0.06em] text-white">
            Built for the highest-value data problems in GCC financial services.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-300">
            QBricks speaks directly to the priorities of CDOs, governance leaders, risk teams and financial-crime functions: trusted data, defensible decisions and faster regulated delivery.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
          <div className="flex flex-col gap-3 lg:w-1/3">
            {cases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={useCase.tag}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${isActive ? "border-white/20 bg-white/[0.065] shadow-lg" : "border-white/5 bg-white/[0.025] hover:border-white/10 hover:bg-white/[0.045]"}`}
                >
                  {isActive && <motion.div layoutId="activeUseCase" className="absolute inset-0 bg-gradient-to-r from-q-brand/[0.14] to-transparent" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`rounded-xl p-2 ${isActive ? "bg-q-brand/20 text-q-brand-ember" : "bg-white/5 text-q-gray-500"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`font-black ${isActive ? "text-white" : "text-q-gray-400"}`}>{useCase.tag}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="premium-card flex h-full flex-col p-8 md:p-12"
              >
                <div className="mb-7 flex items-center gap-3">
                  <div className="rounded-2xl border border-q-brand/30 bg-q-brand/[0.18] p-3 text-q-brand-ember">
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm font-bold text-q-gray-300">{activeCase.tag}</span>
                </div>

                <h3 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">{activeCase.title}</h3>

                <div className="mt-9 flex-1 space-y-7">
                  <StoryBlock label="The pain" tone="red" text={activeCase.pain} />
                  <StoryBlock label="How QBricks helps" text={activeCase.help} />
                  <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.07] p-6">
                    <span className="mb-3 block text-xs font-black uppercase tracking-[0.2em] text-emerald-300">The outcome</span>
                    <p className="flex items-start gap-3 text-xl font-black leading-relaxed text-white">
                      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-emerald-300" />
                      {activeCase.outcome}
                    </p>
                  </div>
                </div>

                <a href="mailto:sales@infinium.consulting?subject=QBricks solution demo" className="mt-10 inline-flex items-center gap-2 self-start text-sm font-black text-white transition-colors hover:text-q-brand-ember">
                  Request a tailored demo <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryBlock({ label, text, tone = "neutral" }: { label: string; text: string; tone?: "red" | "neutral" }) {
  return (
    <div className={`border-l-2 pl-6 ${tone === "red" ? "border-red-400/35" : "border-white/20"}`}>
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-q-gray-500">{label}</span>
      <p className="text-lg leading-relaxed text-q-gray-300">{text}</p>
    </div>
  );
}
