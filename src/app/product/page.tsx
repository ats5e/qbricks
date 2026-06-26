import { ArrowRight, CheckCircle2, FileCode2, GitBranch, Layers3, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DeveloperExperience } from "@/components/interactive/DeveloperExperience";
import { FeaturesBento } from "@/components/interactive/FeaturesBento";

export const metadata = {
  title: "Product — QBricks",
  description: "AI-enabled metadata management built for governed enterprise data, Data Contracts, Data Products and auditable deployment.",
};

const flow = [
  ["Define", "Express data quality and ETL logic as owned, versioned Data Contracts."],
  ["Compose", "Assemble contracts into discoverable Data Products the business can trust."],
  ["Deploy", "Use a single file to deploy infrastructure and workloads in hours."],
  ["Automate", "Agents handle metadata work while humans stay in control."],
  ["Audit", "Track every decision, exception and lineage event end to end."],
];

const constructs = [
  { icon: FileCode2, title: "Data Contracts", text: "The unit of governance: explicit, owned and enforceable quality and transformation logic." },
  { icon: Layers3, title: "Data Products", text: "Governed, discoverable assets carrying quality guarantees, ownership and lineage." },
  { icon: GitBranch, title: "Decision lineage", text: "A transparent audit trail across agent actions, approvals, exceptions and releases." },
  { icon: ShieldCheck, title: "Bank-secure architecture", text: "Cloud-agnostic, human-in-the-loop and designed for regulated environments." },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-q-black">
      <section className="relative overflow-hidden border-b border-white/5 pt-44 pb-28">
        <div className="absolute inset-0 -z-0">
          <Image src="/assets/bricks-3.png" alt="" fill priority className="object-cover object-top opacity-35 mix-blend-screen" sizes="100vw" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(232,32,15,0.22),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.5),#000_88%)]" />
        </div>

        <div className="container-x relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow mb-6">The platform</p>
            <h1 className="text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.075em] text-white">
              AI-enabled metadata management, built for governed enterprise data.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-300 md:text-2xl">
              <QBricksText /> builds and deploys data quality and ETL workflows through Data Contracts and Data Products, automating metadata management without losing control or auditability.
            </p>
            <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-black transition-all hover:-translate-y-1 hover:bg-q-gray-200">
              Request a demo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-q-black pb-10 pt-20 lg:pb-12 lg:pt-32">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-tight tracking-[-0.06em] text-white">Five steps from contract to audit trail.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {flow.map(([title, text], index) => (
              <div key={title} className="premium-card p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-q-brand/25 bg-q-brand/[0.12] text-lg font-black text-q-brand-ember">{index + 1}</div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-q-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-q-black pb-20 pt-10 lg:pb-32 lg:pt-12">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {constructs.map((construct) => {
              const Icon = construct.icon;
              return (
                <div key={construct.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <Icon className="mb-5 h-7 w-7 text-q-brand-ember" />
                  <h3 className="text-xl font-black text-white">{construct.title}</h3>
                  <p className="mt-3 leading-relaxed text-q-gray-400">{construct.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FeaturesBento />
      <DeveloperExperience />

      <section className="section-y bg-q-black text-center pb-32">
        <div className="container-x relative z-10">
          <Link href="/solutions" className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-black text-black transition-all hover:-translate-y-1 hover:bg-q-gray-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            Explore use cases
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

import { QBricksText } from "@/components/ui/QBricksText";
