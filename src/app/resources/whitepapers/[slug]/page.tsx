import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AiReadyScene,
  ContractsScene,
  GovernanceScene,
  IntegrationsScene,
  LineageScene,
} from "@/components/interactive/scenes";
import { MigrationGraphic, PipelineGraphic, RoutingGraphic } from "@/components/interactive/flowGraphics";
import { whitepapers } from "../data";

const scenes = {
  lineage: LineageScene,
  governance: GovernanceScene,
  aiready: AiReadyScene,
  contracts: ContractsScene,
  integrations: IntegrationsScene,
} as const;

const graphics = {
  migration: MigrationGraphic,
  pipeline: PipelineGraphic,
  routing: RoutingGraphic,
} as const;

export function generateStaticParams() {
  return whitepapers.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = whitepapers.find((entry) => entry.slug === slug);
  if (!paper) return {};
  return {
    title: { absolute: `${paper.title} | QBricks White Paper` },
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: paper.title,
    description: paper.standfirst,
    author: { "@type": "Organization", name: "QBricks" },
    publisher: { "@type": "Organization", name: "Infinium Consulting B.V." },
  };

  return (
    <main className="min-h-screen bg-q-black selection:bg-q-brand/30 selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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
      <section className="relative overflow-hidden bg-q-black pb-16 pt-12 md:pb-24 md:pt-14 lg:pb-32 lg:pt-16">
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

          {/* Layered stack (optional) */}
          {paper.stack && (
            <div className="mt-20">
              <h2 className="max-w-3xl text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[0.98] tracking-tight text-white">
                {paper.stack.title}
              </h2>
              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-q-gray-300">{paper.stack.intro}</p>
              <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10">
                <div className="hidden grid-cols-[88px_1fr_1fr] gap-6 border-b border-white/10 bg-white/[0.03] px-7 py-4 md:grid">
                  <span />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-q-gray-500">What you inherit</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-q-brand-ember">Where you extend it</span>
                </div>
                {paper.stack.layers.map((layer, index) => (
                  <div
                    key={layer.letter}
                    className={`grid gap-5 px-7 py-7 md:grid-cols-[88px_1fr_1fr] md:gap-6 ${index < paper.stack!.layers.length - 1 ? "border-b border-white/10" : ""}`}
                  >
                    <div className="flex items-start gap-4 md:block">
                      <span className="text-[3.6rem] font-black leading-none text-q-brand-ember md:text-[4.4rem]">{layer.letter}</span>
                      <div className="md:hidden">
                        <p className="text-lg font-black text-white">{layer.name}</p>
                        <p className="text-sm text-q-gray-500">{layer.role}</p>
                      </div>
                    </div>
                    <div>
                      <p className="hidden text-lg font-black text-white md:block">{layer.name}</p>
                      <p className="hidden text-sm text-q-gray-500 md:block">{layer.role}</p>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-q-gray-500 md:hidden">What you inherit</p>
                      <p className="mt-1 leading-relaxed text-q-gray-400 md:mt-3">{layer.inherit}</p>
                    </div>
                    <div className="border-l-2 border-q-brand/60 pl-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-q-brand-ember md:hidden">Where you extend it</p>
                      <p className="mt-1 leading-relaxed text-q-gray-300 md:mt-0">{layer.extend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Animated figures (optional) */}
          {paper.figures?.map((figure) => {
            const Graphic = graphics[figure.graphic];
            return (
              <div key={figure.graphic} className="mt-20">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                  <div>
                    <p className="eyebrow mb-3">{figure.eyebrow}</p>
                    <h2 className="text-[clamp(1.6rem,2.8vw,2.3rem)] font-black leading-[1.05] tracking-tight text-white">{figure.title}</h2>
                  </div>
                  <p className="leading-relaxed text-q-gray-300 lg:pt-1">{figure.text}</p>
                </div>
                <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:p-3">
                  <Graphic />
                </div>
              </div>
            );
          })}

          {/* Solution */}
          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-q-brand/25 bg-gradient-to-br from-[#160a0a]/80 to-transparent p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_12%_40%,rgba(232,32,15,0.12),transparent_70%)]" />
            <div className="relative max-w-4xl">
              <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)] font-black leading-[1.02] tracking-tight text-white">
                {paper.solutionTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-q-gray-300">{paper.solutionText}</p>
              {paper.related && (
                <Link href={paper.related.href} className="mt-7 inline-flex items-center gap-2 font-bold text-white transition-colors hover:text-q-brand-ember">
                  {paper.related.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Caveats (optional) */}
          {paper.caveats && (
            <div className="mt-16">
              <h2 className="max-w-3xl text-[clamp(1.8rem,3.4vw,2.8rem)] font-black leading-[1.02] tracking-tight text-white">{paper.caveats.title}</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {paper.caveats.items.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-q-gray-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pull quote + CTA */}
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-4xl text-[clamp(1.7rem,3.6vw,3rem)] font-black leading-[1.05] tracking-tight text-brand-gradient">
              “{paper.quote}”
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DownloadButton href={paper.pdf} large />
              <Link href="/resources" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-8 py-4 text-base font-black text-white transition-all hover:-translate-y-1 hover:bg-white/[0.08]">
                More resources
              </Link>
            </div>
          </div>

          {(paper.references || paper.note) && (
            <div className="mt-20 border-t border-white/10 pt-8">
              {paper.references && (
                <>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-q-gray-500">References</p>
                  <ol className="mt-4 space-y-2 text-sm leading-relaxed text-q-gray-400">
                    {paper.references.map((ref, index) => (
                      <li key={ref.label} className="flex gap-3">
                        <span className="shrink-0 font-mono text-q-gray-500">{index + 1}.</span>
                        {ref.href ? (
                          <a href={ref.href} target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-q-brand-ember">
                            {ref.label}
                          </a>
                        ) : (
                          <span>{ref.label}</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </>
              )}
              {paper.note && <p className="mt-6 text-xs leading-relaxed text-q-gray-500">{paper.note}</p>}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
