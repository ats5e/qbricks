"use client";

import { QBricksText } from "@/components/ui/QBricksText";

import { motion } from "framer-motion";
import { Check, CheckCircle2, Code2, Copy, Play, Terminal } from "lucide-react";
import { useState } from "react";

const yamlCode = `name: customer_risk_data_product
version: v1.2.0

owner:
  domain: financial_crime
  steward: data-governance

source:
  platform: databricks
  table: raw.customers

contract:
  controls:
    - pii_tokenised
    - no_orphaned_transactions
    - sanctions_fields_complete
  quality_threshold: 99.5

product:
  name: trusted_customer_profile
  lineage: required
  audit: enabled

deploy:
  target: fabric_onelake
  mode: governed_release
`;

export function DeveloperExperience() {
  const [copied, setCopied] = useState(false);
  const [deploying, setDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDeploy = () => {
    if (deploying || deployed) return;
    setDeploying(true);
    setTimeout(() => {
      setDeploying(false);
      setDeployed(true);
    }, 3200);
  };

  return (
    <section id="deployment" className="section-y relative overflow-hidden border-y border-white/5 bg-q-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(232,32,15,0.13),transparent_34%),linear-gradient(to_bottom,#000,rgba(255,255,255,0.025),#000)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      <div className="container-x relative z-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="eyebrow mb-5">Single-file deployment</p>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.96] tracking-[-0.06em] text-white">
            Built for the release discipline of a regulated bank.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-q-gray-300">
            Define the contract once. Deploy the infrastructure and workload together. <QBricksText /> replaces fragile manual build patterns with governed releases your teams can inspect, approve and audit.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-q-panel shadow-[0_35px_120px_rgba(0,0,0,0.55)] lg:grid-cols-2">
          <div className="relative flex h-[560px] flex-col border-b border-white/10 bg-[#070707] lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-4 py-3">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-q-gray-500" />
                <span className="font-mono text-sm text-q-gray-300">data-product.contract.yaml</span>
              </div>
              <button onClick={handleCopy} className="text-q-gray-500 transition-colors hover:text-white" aria-label="Copy contract">
                {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <motion.div className="relative flex-1 overflow-auto p-6 font-mono text-sm leading-relaxed text-q-gray-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="absolute bottom-0 left-0 top-0 flex w-11 select-none flex-col items-end border-r border-white/5 bg-white/[0.015] py-6 pr-2 text-q-gray-600">
                {[...Array(26)].map((_, i) => (
                  <div key={i} className="h-6">{i + 1}</div>
                ))}
              </div>
              <pre className="pl-9 text-[13px] sm:text-sm">
                <motion.code
                  className="block"
                  initial={{ clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)" }}
                  whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.4, ease: "linear" }}
                  dangerouslySetInnerHTML={{
                    __html: yamlCode
                      .replace(/([a-zA-Z_]+):/g, '<span class="text-blue-300">$1</span>:')
                      .replace(/financial_crime|trusted_customer_profile|governed_release/g, '<span class="text-emerald-300">$&</span>')
                      .replace(/databricks|fabric_onelake/g, '<span class="text-orange-300">$&</span>')
                      .replace(/(enabled|required|99.5)/g, '<span class="text-q-brand-ember">$&</span>'),
                  }}
                />
              </pre>
            </motion.div>
          </div>

          <div className="relative flex h-[560px] flex-col overflow-hidden bg-black">
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-white/[0.025] px-6 py-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-q-gray-500" />
                <span className="font-mono text-sm text-q-gray-300">qbricks deploy --audit required</span>
              </div>
              <button
                onClick={handleDeploy}
                disabled={deploying || deployed}
                className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-black transition-all ${
                  deployed
                    ? "border border-emerald-400/30 bg-emerald-400/[0.15] text-emerald-300"
                    : deploying
                      ? "cursor-not-allowed border border-q-brand/30 bg-q-brand/20 text-q-brand-ember opacity-70"
                      : "bg-white text-black hover:bg-q-gray-200"
                }`}
              >
                {deployed && <span className="flex items-center gap-2">Deployed <CheckCircle2 className="h-4 w-4" /></span>}
                {deploying && <span>Deploying...</span>}
                {!deployed && !deploying && <span className="flex items-center gap-2">Deploy <Play className="h-3 w-3 fill-current" /></span>}
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center p-8">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              {!deploying && !deployed && <div className="font-mono text-sm text-q-gray-500">Waiting for governed release...</div>}

              {(deploying || deployed) && (
                <div className="relative flex w-full max-w-sm flex-col gap-8">
                  <PipelineNode title="Source scanned" subtitle="Databricks raw.customers" delay={0.1} isActive />
                  <PipelineNode title="Controls enforced" subtitle="PII, lineage, quality rules" delay={0.85} isActive isBrand />
                  <PipelineNode title="Data Product released" subtitle="Audit evidence attached" delay={1.75} isActive={deployed} isFinal />
                  <ConnectingLine top="3.4rem" height="2.4rem" delay={0.55} />
                  <ConnectingLine top="11rem" height="2.4rem" delay={1.25} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PipelineNode({ title, subtitle, delay, isActive, isBrand, isFinal }: { title: string; subtitle: string; delay: number; isActive: boolean; isBrand?: boolean; isFinal?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative z-10 flex items-center gap-4 rounded-2xl border p-4 backdrop-blur-md transition-colors duration-500 ${
        isActive && isBrand
          ? "border-q-brand/35 bg-q-brand/[0.12] shadow-[0_0_35px_rgba(232,32,15,0.18)]"
          : isActive && isFinal
            ? "border-emerald-400/35 bg-emerald-400/[0.12] shadow-[0_0_35px_rgba(16,185,129,0.18)]"
            : isActive
              ? "border-white/20 bg-white/[0.055]"
              : "border-white/5 bg-white/[0.035] opacity-45 grayscale"
      }`}
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${isActive && isBrand ? "bg-q-brand/20 text-q-brand-ember" : isActive && isFinal ? "bg-emerald-400/20 text-emerald-300" : "bg-white/10 text-blue-300"}`}>
        {isFinal ? <CheckCircle2 className="h-5 w-5" /> : <Terminal className="h-5 w-5" />}
      </div>
      <div>
        <h4 className="font-black text-white">{title}</h4>
        <p className="font-mono text-sm text-q-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function ConnectingLine({ top, height, delay }: { top: string; height: string; delay: number }) {
  return (
    <div className="absolute left-[2.7rem] z-0 w-0.5 bg-white/10" style={{ top, height }}>
      <motion.div className="w-full bg-q-brand-ember" initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.5, delay }} />
    </div>
  );
}
