import { ArrowRight, Play, Plus } from "lucide-react";
import { whitepaperImage, whitepapers } from "./whitepapers/data";
import { insightImage, insights } from "./insights/data";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { QBricksText, brand } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Resources",
  description:
    "Insights and FAQ on A.I.-ready metadata management, data contracts, lakehouse governance, AML and KYC data foundations.",
  path: "/resources",
});

const capabilityOverviews = [
  {
    partner: "Databricks",
    logo: "/assets/partners/Databricks-dark.png",
    href: "/resources/qbricks-databricks",
    text: "Governed, A.I.-ready data products delivered straight into Unity Catalog.",
  },
  {
    partner: "Microsoft Fabric",
    logo: "/assets/partners/Fabric-dark.png",
    href: "/resources/qbricks-fabric",
    text: "Contract-enforced Delta Parquet landed in OneLake, read instantly by Power BI.",
  },
  {
    partner: "Snowflake",
    logo: "/assets/partners/Snowflake.png",
    href: "/resources/qbricks-snowflake",
    text: "Open Iceberg tables into the data cloud, credits stay free for Cortex AI.",
  },
  {
    partner: "Quantexa",
    logo: "/assets/partners/Quantexa-dark.png",
    href: "/resources/qbricks-quantexa",
    text: "Entity-ready products, field-mapped to the Quantexa data model.",
  },
  {
    partner: "Cloudera",
    logo: "/assets/partners/Cloudera_logo.webp",
    href: "/resources/qbricks-cloudera",
    text: "Trusted, ODCS-governed data products for the Cloudera lakehouse.",
  },
  {
    partner: "Alteryx",
    logo: "/assets/partners/Alteryx.png",
    href: "/resources/qbricks-alteryx",
    text: "Governed data landed in the stores your Alteryx workflows already read.",
  },
];

const faqs: Array<{ id: string; question: ReactNode; answer: ReactNode }> = [
  { id: "what-is-qbricks", question: <>What exactly is <QBricksText />?</>, answer: "An A.I.-enabled metadata management platform that builds and deploys data quality and ETL workflows through Data Contracts and Data Products." },
  { id: "deployment-speed", question: "How fast can we deploy?", answer: "Hours, not weeks. Single-file deployment covers both infrastructure and workloads." },
  { id: "supported-platforms", question: "Which platforms does it work with?", answer: <>Databricks, Microsoft Fabric, Snowflake, or your own on-premise database, via SQL push-down. <QBricksText /> is cloud-agnostic, delivering in open, portable formats.</> },
  { id: "security", question: "How secure is it?", answer: "Enterprise-grade security applying your organisation's own standards, full auditability and human-in-the-loop control over agentic automation." },
  { id: "expected-results", question: "What results can we expect?", answer: "Fewer data-quality issues, deployment in hours, lower compute cost on local compute, and end-to-end auditability." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { q: "What exactly is QBricks?", a: "An A.I.-enabled metadata management platform that builds and deploys data quality and ETL workflows through Data Contracts and Data Products." },
    { q: "How fast can we deploy?", a: "Hours, not weeks. Single-file deployment covers both infrastructure and workloads." },
    { q: "Which platforms does it work with?", a: "Databricks, Microsoft Fabric, Snowflake, or your own on-premise database, via SQL push-down. QBricks is cloud-agnostic, delivering in open, portable formats." },
    { q: "How secure is it?", a: "Enterprise-grade security applying your organisation's own standards, full auditability and human-in-the-loop control over agentic automation." },
    { q: "What results can we expect?", a: "Fewer data-quality issues, deployment in hours, lower compute cost on local compute, and end-to-end auditability." },
  ].map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const sections = [
  { id: "white-papers", label: "White papers" },
  { id: "watch", label: "Watch" },
  { id: "insights", label: "Insights" },
  { id: "capability-overviews", label: "Capability overviews" },
  { id: "faq", label: "FAQ" },
];

const videos = [
  {
    href: "/resources/10-reasons-why",
    poster: "/assets/brand/poster-10-reasons.webp",
    title: <>10 reasons why <QBricksText /></>,
    text: "See how governed data becomes an A.I.-ready foundation, no pipelines, delivered in open, portable formats.",
  },
  {
    href: "/resources/use-cases",
    poster: "/assets/brand/poster-use-cases.webp",
    title: <><QBricksText /> use cases in action</>,
    text: "Explore governed data products for financial crime, customer intelligence and risk workflows.",
  },
];

function SectionHead({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="mb-8 flex scroll-mt-28 items-end justify-between gap-6 border-b border-black/[0.08] pb-4">
      <h2 className="text-2xl font-black tracking-tight text-q-ink md:text-3xl">{label}</h2>
    </div>
  );
}

/** Image-led card used for white papers and insights. */
function StoryCard({ href, image, kicker, title, cta }: { href: string; image: string; kicker: string; title: string; cta: string }) {
  return (
    <Link href={href} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.08] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
      <div className="relative aspect-[3/2] overflow-hidden bg-q-panel">
        <Image src={image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-q-gray-500">{brand(kicker)}</p>
        <h3 className="mt-2 flex-1 text-lg font-black leading-snug tracking-tight text-q-ink">{brand(title)}</h3>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-q-ink transition-colors group-hover:text-q-brand-deep">
          {cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function ResourcesPage() {
  const [featured, ...papers] = whitepapers;

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5 pb-[22vw] pt-40 lg:pt-44">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src="/assets/brand/resources/resources-hero.webp" alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>
        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Resources</p>
            <h1 className="h-display">Make data your competitive edge.</h1>
            <p className="mt-6 text-lg leading-relaxed text-q-gray-700 md:text-xl">
              Capability overviews, white papers and field-tested thinking on governed, A.I.-ready data, plus an illustrative calculator to model the saving on your own numbers. Everything a CDO, risk or financial-crime team needs to make the case for getting the data foundation right.
            </p>
          </div>
          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Resources sections">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-bold text-q-gray-700 backdrop-blur transition-colors hover:border-q-brand/40 hover:text-q-ink">
                {s.label}
              </a>
            ))}
            <Link href="/resources/cost-calculator" className="rounded-full bg-q-brand px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-q-brand-ember">
              Cost calculator
            </Link>
          </nav>
        </div>
      </section>

      <div className="container-x space-y-24 py-20 lg:py-28">
        {/* White papers */}
        <section>
          <SectionHead id="white-papers" label="White papers" />
          <Link
            href={`/resources/whitepapers/${featured.slug}`}
            className="group mb-6 grid overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white transition-shadow duration-300 hover:shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-q-panel lg:aspect-auto lg:min-h-[420px]">
              <Image src={whitepaperImage(featured.slug)} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-sm font-medium text-q-brand-deep">{brand(featured.category)}</p>
              <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-q-ink md:text-4xl">{brand(featured.title)}</h3>
              <p className="mt-5 text-lg leading-relaxed text-q-gray-600">{brand(featured.standfirst.slice(0, 220))}…</p>
              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-q-brand px-6 py-3 text-sm font-bold text-white transition-colors group-hover:bg-q-brand-ember">
                Read & download <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {papers.map((paper) => (
              <StoryCard key={paper.slug} href={`/resources/whitepapers/${paper.slug}`} image={whitepaperImage(paper.slug)} kicker={paper.category} title={paper.title} cta="Read & download" />
            ))}
          </div>
        </section>

        {/* Cost calculator */}
        <Link href="/resources/cost-calculator" className="group grid overflow-hidden rounded-[2rem] border border-black/[0.08] bg-q-panel transition-shadow duration-300 hover:shadow-[0_40px_90px_rgba(0,0,0,0.08)] lg:grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="eyebrow mb-3">Illustrative cost calculator</p>
            <h2 className="text-3xl font-black tracking-tight text-q-ink md:text-4xl">Where <QBricksText /> takes cost out</h2>
            <p className="mt-4 max-w-xl text-lg text-q-gray-700">
              Model the saving on your own numbers across the four cost lines an organisation carries to keep data fit for use.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-bold text-q-ink transition-colors group-hover:text-q-brand-ember">
              Open the calculator <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
          <div className="relative hidden min-h-[280px] lg:block">
            <Image src={whitepaperImage("cfo-compute-cost")} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="40vw" />
          </div>
        </Link>

        {/* Watch */}
        <section>
          <SectionHead id="watch" label="Watch" />
          <div className="grid gap-6 lg:grid-cols-2">
            {videos.map((v) => (
              <Link key={v.href} href={v.href} className="group overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white transition-shadow duration-300 hover:shadow-[0_40px_90px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-video overflow-hidden bg-q-panel">
                  <Image src={v.poster} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 1024px) 45vw, 100vw" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-q-brand text-white shadow-[0_12px_40px_rgba(232,32,15,0.35)] transition-transform duration-300 group-hover:scale-105">
                      <Play className="ml-1 h-6 w-6 fill-current" />
                    </span>
                  </span>
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="text-2xl font-black tracking-tight text-q-ink">{v.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-q-gray-600">{v.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section>
          <SectionHead id="insights" label="Insights" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((item) => (
              <StoryCard key={item.slug} href={`/resources/insights/${item.slug}`} image={insightImage(item.slug)} kicker={item.category} title={item.title} cta="Read the insight" />
            ))}
          </div>
        </section>

        {/* Capability overviews */}
        <section>
          <SectionHead id="capability-overviews" label="Capability overviews" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityOverviews.map((item) => (
              <Link key={item.partner} href={item.href} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.08] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
                <div className="flex h-32 items-center justify-center border-b border-black/[0.06] bg-q-panel">
                  <Image src={item.logo} alt={item.partner} width={180} height={36} className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-black leading-snug text-q-ink">Trusted data for {item.partner}</h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-q-gray-600">{brand(item.text)}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-q-ink transition-colors group-hover:text-q-brand-deep">
                    Read the overview <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHead id="faq" label="FAQ" />
          </div>
          <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {faqs.map(({ id, question, answer }) => (
              <details key={id} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black text-q-ink">
                  <span>{brand(question)}</span>
                  <Plus className="h-5 w-5 shrink-0 text-q-brand-ember transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-q-gray-600">{brand(answer)}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
            Request a demo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
