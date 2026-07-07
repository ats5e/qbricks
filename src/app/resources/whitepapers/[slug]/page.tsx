import { ArrowLeft, ArrowRight, Download, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AiReadyScene,
  ContractsScene,
  GovernanceScene,
  IntegrationsScene,
  LineageScene,
} from "@/components/interactive/scenes";
import { whitepapers } from "../data";

const scenes = {
  lineage: LineageScene,
  governance: GovernanceScene,
  aiready: AiReadyScene,
  contracts: ContractsScene,
  integrations: IntegrationsScene,
} as const;

export function generateStaticParams() {
  return whitepapers.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = whitepapers.find((entry) => entry.slug === slug);
  if (!paper) return {};
  return {
    title: `${paper.title} | QBricks White Paper`,
    description: paper.standfirst.slice(0, 155),
  };
}

function DownloadButton({ href, large = false }: { href: string; large?: boolean }) {
  return (
    <a
      href={href}
      download
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-q-brand font-black text-white transition-all hover:-translate-y-0.5 hover:bg-q-brand-ember ${large ? "px-8 py-4 text-base" : "px-7 py-3.5 text-sm"}`}
    >
      <Download className={`transition-transform group-hover:translate-y-0.5 ${large ? "h-5 w-5" : "h-4 w-4"}`} />
      Download the white paper
    </a>
  );
}

export default async function WhitepaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = whitepapers.find((entry) => entry.slug === slug);
  if (!paper) notFound();

  const Scene = scenes[paper.scene];

  return (
    <main className="min-h-screen bg-q-black selection:bg-q-brand/30 selection:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 pb-20 pt-40 lg:pt-44">
        <div className="absolute inset-0 -z-0">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(1000px 700px at 24% 20%, rgba(232,32,15,0.15), transparent 65%)", animation: "cc-breathe 10s ease-in-out infinite" }}
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        </div>

        <div className="container-x relative z-10">
          <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-q-gray-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Resources
            <span className="text-q-gray-500">/</span>
            <span className="text-q-gray-300">White paper</span>
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-q-brand/40 bg-q-brand/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-q-brand-ember">
                  <FileText className="h-3.5 w-3.5" /> White paper · July 2026
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-q-gray-400">
                  {paper.category}
                </span>
              </div>
              <h1 className="text-[clamp(2.6rem,4.8vw,4.2rem)] font-black leading-[0.97] tracking-tight text-white">
                {paper.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-q-gray-300">{paper.standfirst}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DownloadButton href={paper.pdf} />
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/[0.08]">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-q-brand/15 blur-[120px]" />
              <div className="relative h-[320px] rounded-2xl shadow-[0_50px_130px_rgba(0,0,0,0.6)] sm:h-[340px]">
                <Scene badge={paper.sceneBadge} logo={paper.sceneLogo} logoAlt={paper.sceneLogoAlt} />
              </div>
            </div>
          </div>

          {/* Stats band */}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {paper.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
                <p className="text-4xl font-black tracking-tight text-q-brand-ember">{stat.value}</p>
                <p className="mt-2 leading-relaxed text-q-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered points */}
      <section className="section-y relative overflow-hidden bg-q-black">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_78%_20%,rgba(232,32,15,0.09),transparent_65%)]" />
        <div className="container-x relative z-10">
          <h2 className="max-w-3xl text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[0.98] tracking-tight text-white">
            {paper.pointsTitle}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {paper.points.map((point, index) => (
              <div key={point.title} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-q-brand/30">
                <p className="text-3xl font-black text-q-brand-ember">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-black text-white">{point.title}</h3>
                <p className="mt-2.5 leading-relaxed text-q-gray-400">{point.text}</p>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-q-brand/25 bg-gradient-to-br from-[#160a0a]/80 to-transparent p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_12%_40%,rgba(232,32,15,0.12),transparent_70%)]" />
            <div className="relative max-w-4xl">
              <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-black leading-[1.02] tracking-tight text-white">
                {paper.solutionTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-q-gray-300">{paper.solutionText}</p>
            </div>
          </div>

          {/* Pull quote + CTA */}
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-4xl text-[clamp(1.7rem,3.6vw,3rem)] font-black leading-[1.05] tracking-tight text-brand-gradient">
              “{paper.quote}”
            </p>
            <p className="mx-auto mt-8 max-w-2xl font-mono text-sm leading-relaxed text-q-gray-500">{paper.tagline}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DownloadButton href={paper.pdf} large />
              <Link href="/resources" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-8 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-white/[0.08]">
                More resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
