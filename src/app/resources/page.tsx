import { ArrowRight, BookOpen, FileText, Video, HelpCircle } from "lucide-react";
import { whitepapers } from "./whitepapers/data";
import { insights } from "./insights/data";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata = {
  title: "Resources | QBricks",
  description: "Insights and FAQ on A.I.-ready metadata management, data contracts, lakehouse governance, AML and KYC data foundations.",
};

const capabilityOverviews = [
  {
    partner: "Databricks",
    logo: "/assets/partners/Databricks.png",
    href: "/resources/qbricks-databricks",
    text: "Governed, A.I.-ready data products delivered straight into Unity Catalog.",
  },
  {
    partner: "Microsoft Fabric",
    logo: "/assets/partners/Fabric.png",
    href: "/resources/qbricks-fabric",
    text: "Contract-enforced Delta Parquet landed in OneLake, read instantly by Power BI.",
  },
  {
    partner: "Snowflake",
    logo: "/assets/partners/Snowflake.png",
    href: "/resources/qbricks-snowflake",
    text: "Open Iceberg tables into the data cloud — credits stay free for Cortex AI.",
  },
  {
    partner: "Quantexa",
    logo: "/assets/partners/Quantexa.png",
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

const consumptionLanes = [
  { lane: "BI & Analytics", tools: ["Power BI", "Tableau", "Qlik", "Looker"] },
  { lane: "AI & ML Serving", tools: ["Mosaic AI", "MLflow", "Azure ML", "Vector stores"] },
  { lane: "Operational Activation", tools: ["Hightouch", "Census", "Kafka", "Low-latency stores"] },
  { lane: "Regulatory & Decisioning", tools: ["Quantexa"] },
  { lane: "Governance & Observability", tools: ["Collibra", "Alation", "Purview", "Monte Carlo"] },
];

const faqs: Array<{ id: string; question: ReactNode; answer: ReactNode }> = [
  { id: "what-is-qbricks", question: <>What exactly is <QBricksText />?</>, answer: "An A.I.-enabled metadata management platform that builds and deploys data quality and ETL workflows through Data Contracts and Data Products." },
  { id: "deployment-speed", question: "How fast can we deploy?", answer: "Hours, not weeks. Single-file deployment covers both infrastructure and workloads." },
  { id: "supported-platforms", question: "Which platforms does it work with?", answer: <>Databricks, Microsoft Fabric, Snowflake, or your own on-premise database, via SQL push-down. <QBricksText /> is cloud-agnostic, delivering in open, portable formats.</> },
  { id: "security", question: "How secure is it?", answer: "Databricks- and Microsoft-level security, full auditability and human-in-the-loop control over agentic automation." },
  { id: "expected-results", question: "What results can we expect?", answer: "Fewer data-quality issues, deployment in hours, lower compute cost on local compute, and end-to-end auditability." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { q: "What exactly is QBricks?", a: "An A.I.-enabled metadata management platform that builds and deploys data quality and ETL workflows through Data Contracts and Data Products." },
    { q: "How fast can we deploy?", a: "Hours, not weeks. Single-file deployment covers both infrastructure and workloads." },
    { q: "Which platforms does it work with?", a: "Databricks, Microsoft Fabric, Snowflake, or your own on-premise database, via SQL push-down. QBricks is cloud-agnostic, delivering in open, portable formats." },
    { q: "How secure is it?", a: "Databricks- and Microsoft-level security, full auditability and human-in-the-loop control over agentic automation." },
    { q: "What results can we expect?", a: "Fewer data-quality issues, deployment in hours, lower compute cost on local compute, and end-to-end auditability." },
  ].map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-q-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="bg-q-black pb-24 pt-40 lg:pt-44">
        <div className="container-x mb-16">
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow mb-4">Resources</p>
            <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-black leading-[0.95] tracking-tight text-white">
              Make data your competitive edge.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-q-gray-300 md:text-xl">
              Capability overviews, white papers and field-tested thinking on governed, A.I.-ready data — plus an illustrative calculator to model the saving on your own numbers. Everything a CDO, risk or financial-crime team needs to make the case for getting the data foundation right.
            </p>
          </div>
          <Link href="/resources/cost-calculator" className="premium-card group block p-8 transition-all duration-300 hover:border-white/20">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow mb-2">Illustrative cost calculator</p>
                <h2 className="text-3xl font-black text-white">Where <QBricksText /> takes cost out</h2>
                <p className="mt-3 text-lg text-q-gray-300">
                  Model the saving on your own numbers across the four cost lines an organisation carries to keep data fit for use.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 font-bold text-white md:mt-0 transition-colors group-hover:text-q-brand-ember">
                Open the calculator <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        <div className="container-x mb-16">
          <p className="eyebrow mb-4">White papers</p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whitepapers.map((paper) => (
              <Link
                key={paper.slug}
                href={`/resources/whitepapers/${paper.slug}`}
                className="premium-card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-q-brand/40"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-q-brand/35 bg-q-brand/10 text-q-brand-ember">
                    <FileText className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-q-gray-500">{paper.category}</span>
                </div>
                <h2 className="text-xl font-black leading-snug text-white">{paper.title}</h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-q-gray-400">{paper.standfirst.slice(0, 150)}…</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-q-brand-ember">
                  Read & download <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="container-x mb-16">
          <p className="eyebrow mb-4">Capability overviews</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityOverviews.map((item) => (
              <Link
                key={item.partner}
                href={item.href}
                className="premium-card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-q-brand/40"
              >
                <div className="mb-5 flex h-9 items-center">
                  <Image src={item.logo} alt={item.partner} width={140} height={28} className="h-6 w-auto object-contain" />
                </div>
                <h2 className="text-lg font-black leading-snug text-white">
                  Trusted data for {item.partner}
                </h2>
                <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-q-gray-400">{item.text}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-q-brand-ember">
                  Read the overview <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="container-x mb-16">
          <p className="eyebrow mb-4">Watch</p>
          <div className="grid gap-6 lg:grid-cols-2">
            <Link href="/resources/10-reasons-why" className="premium-card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 md:p-8">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-q-brand/30 bg-q-brand/10 text-q-brand-ember">
                <Video className="h-5 w-5" />
              </div>
              <p className="eyebrow mb-3">Video</p>
              <h2 className="text-3xl font-black leading-tight text-white">
                10 reasons why <QBricksText />
              </h2>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-q-gray-300">
                See how governed data becomes an A.I.-ready foundation — no pipelines, delivered in open, portable formats.
              </p>
              <div className="mt-8 flex items-center gap-2 font-bold text-white transition-colors group-hover:text-q-brand-ember">
                Watch the video <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/resources/use-cases" className="premium-card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 md:p-8">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10 text-emerald-300">
                <Video className="h-5 w-5" />
              </div>
              <p className="eyebrow mb-3">Video</p>
              <h2 className="text-3xl font-black leading-tight text-white">
                <QBricksText /> use cases in action
              </h2>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-q-gray-300">
                Explore governed data products for financial crime, customer intelligence and risk workflows.
              </p>
              <div className="mt-8 flex items-center gap-2 font-bold text-white transition-colors group-hover:text-q-brand-ember">
                Watch the video <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>

        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Insights</p>
            <div className="space-y-4">
              {insights.map((item) => (
                <Link
                  key={item.slug}
                  href={`/resources/insights/${item.slug}`}
                  className="premium-card group flex items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-q-brand/40"
                >
                  <BookOpen className="mt-1 h-5 w-5 shrink-0 text-q-brand-ember" />
                  <div>
                    <h2 className="text-xl font-black leading-snug text-white">{item.title}</h2>
                    <span className="mt-2 flex items-center gap-2 text-sm font-bold text-q-gray-400 transition-colors group-hover:text-q-brand-ember">
                      Read the insight <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">FAQ</p>
            <div className="space-y-4">
              {faqs.map(({ id, question, answer }) => (
                <div key={id} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-q-brand-ember" />
                    <h2 className="text-lg font-black text-white">{question}</h2>
                  </div>
                  <p className="leading-relaxed text-q-gray-400">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-x mt-20">
          <p className="eyebrow mb-4">By consumption lane</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white md:text-4xl">
            How <QBricksText /> accelerates the tools you consume data with.
          </h2>
          <div className="mt-10 space-y-10">
            {consumptionLanes.map((group) => (
              <div key={group.lane}>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-q-brand-ember">{group.lane}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {group.tools.map((tool) => (
                    <div key={tool} className="premium-card flex h-full flex-col p-5 opacity-80 transition-opacity hover:opacity-100">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-q-gray-500">{group.lane}</p>
                      <h3 className="mt-2 text-lg font-black leading-snug text-white">
                        How <QBricksText /> accelerates {tool}
                      </h3>
                      <span className="mt-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-q-gray-400">
                        Coming soon
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-x mt-16 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
            Request a demo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
