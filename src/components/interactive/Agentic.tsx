"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GitBranch, Network, ScanLine, ShieldCheck, UserCheck } from "lucide-react";
import { QBricksText, brand } from "@/components/ui/QBricksText";

const features = [
  {
    icon: BrainCircuit,
    title: "Agentic automation",
    description: "Depending on an organisation's policies, agents can be used to handle routine metadata work and act according to your governance policy.",
  },
  {
    icon: GitBranch,
    title: "Data Lineage",
    description: <>Fully understand how data assets and products have been created by <QBricksText />. Drill down on each and see a visualisation of the joins and underlying data tables.</>,
  },
  {
    icon: Network,
    title: "Knowledge graphs",
    description: "Fully understand your data with clickable knowledge graphs, enabling a full and detailed understanding of your organisation's data.",
  },
  {
    icon: UserCheck,
    title: "Human in the loop",
    description: "Automation scales the work; your governance, risk and data teams retain review, control and accountability.",
  },
];

const outputs = ["Data Contracts", "Data Products"];
const guarantees = ["Governed", "Auditable", "Lineage", "Ontologies"];

function Chip({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 text-center text-sm font-bold ${
        strong ? "border-q-brand/30 bg-q-brand/[0.06] text-q-ink" : "border-black/10 bg-white text-q-ink"
      }`}
    >
      {children}
    </div>
  );
}

function Connector({ className = "" }: { className?: string }) {
  return <div className={`h-px flex-1 bg-gradient-to-r from-black/15 via-q-brand/50 to-black/15 ${className}`} aria-hidden="true" />;
}

/** Data Assets flow through the governed agentic mesh into Data Contracts and Data Products, on a base of guarantees. */
function MeshDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="rounded-[2rem] border border-black/[0.08] bg-q-panel p-5 sm:p-7"
    >
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-0">
        <div className="sm:w-32">
          <p className="mb-2 text-center text-xs font-medium text-q-gray-500">In</p>
          <Chip>Data Assets</Chip>
        </div>

        <Connector className="hidden sm:block" />

        <div className="rounded-3xl border border-q-brand/30 bg-white p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:w-64">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-q-brand/10 text-q-brand-ember">
            <ScanLine className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-black text-q-ink">Governed Agentic Mesh</h3>
          <p className="mt-2 text-sm leading-relaxed text-q-gray-600">Learns, recommends and executes with human approval and full lineage.</p>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-q-brand/[0.05] px-3 py-1.5 text-xs font-bold text-q-brand-deep">
            <ShieldCheck className="h-3.5 w-3.5" />
            Always auditable
          </div>
        </div>

        <Connector className="hidden sm:block" />

        <div className="sm:w-36">
          <p className="mb-2 text-center text-xs font-medium text-q-gray-500">Out</p>
          <div className="flex flex-col gap-2">
            {outputs.map((label) => (
              <Chip key={label} strong>{label}</Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 border-t border-black/[0.08] pt-6 sm:grid-cols-4">
        {guarantees.map((label) => (
          <div key={label} className="flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2.5 text-sm font-bold text-q-gray-700 ring-1 ring-black/[0.06]">
            <span className="h-1.5 w-1.5 rounded-full bg-q-brand" />
            {label}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Agentic() {
  return (
    <section className="section-y relative overflow-hidden border-y border-black/5 bg-white">

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
          >
            <p className="eyebrow mb-5">Secure agentic metadata management</p>
            <h2 className="h-section font-black tracking-tight text-q-ink">
              Automate the heavy work. Audit everything.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-q-gray-700">
              <QBricksText />{" "}automates the data management process by creating data contracts, performing complex pipeline builds and joins and providing data products that can be used either in existing data management platforms or in an organisation&apos;s local database. Accelerate your organisation&apos;s AI journey and keep complete control of each and every data product.
            </p>

          </motion.div>

          <MeshDiagram />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-3xl border border-black/[0.08] bg-white p-6 transition-colors hover:border-q-brand/30"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-black/10 bg-black/5 p-3 text-q-brand-ember">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-black text-q-ink">{brand(feature.title)}</h3>
                <p className="text-sm leading-relaxed text-q-gray-600">{brand(feature.description)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
