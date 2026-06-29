import { ArrowRight, BookOpen, FileText, Video, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata = {
  title: "Resources | QBricks",
  description: "Insights and FAQ on A.I.-ready metadata management, data contracts, lakehouse governance, AML and KYC data foundations.",
};

const insights = [
  "Why 95% of A.I. use cases fail, and what organisations can do about it",
  "The lakehouse data swamp: how migration quietly breaks governance",
  "Data Contracts explained: governance that actually scales",
  "AML and KYC are data problems first",
];

const faqs: Array<{ id: string; question: ReactNode; answer: ReactNode }> = [
  { id: "what-is-qbricks", question: <>What exactly is <QBricksText />?</>, answer: "An A.I.-enabled metadata management platform that builds and deploys data quality and ETL workflows through Data Contracts and Data Products." },
  { id: "deployment-speed", question: "How fast can we deploy?", answer: "Hours, not weeks. Single-file deployment covers both infrastructure and workloads." },
  { id: "supported-platforms", question: "Which platforms does it work with?", answer: <>Databricks, Microsoft Fabric, Snowflake, or your own on-premise database, via SQL push-down, with no Spark and no lock-in. <QBricksText /> is cloud-agnostic.</> },
  { id: "security", question: "How secure is it?", answer: "Databricks- and Microsoft-level security, full auditability and human-in-the-loop control over agentic automation." },
  { id: "expected-results", question: "What results can we expect?", answer: "Fewer data-quality issues, deployment in hours, lower compute cost with no Spark, and end-to-end auditability." },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-q-black">
      <section className="relative overflow-hidden border-b border-white/5 pt-44 pb-24">
        <div className="absolute inset-0 -z-0">
          <Image src="/assets/bg-pathway-city.png" alt="" fill priority className="object-cover object-center opacity-40 mix-blend-screen" sizes="100vw" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(232,32,15,0.22),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.5),#000_88%)]" />
        </div>
        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Resources</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.9] tracking-tight text-white">
            Insight for governed, A.I.-ready enterprise data.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-300 md:text-2xl">
            Practical thinking for CDOs, governance leaders, risk teams and financial-crime functions preparing data for A.I., analytics and regulatory confidence.
          </p>
        </div>
      </section>

      <section className="section-y bg-q-black">
        <div className="container-x mb-16">
          <Link href="/resources/compute-trap" className="premium-card group block p-8 transition-all duration-300 hover:border-white/20">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow mb-2">Interactive Guide</p>
                <h2 className="text-3xl font-black text-white">The Compute Trap</h2>
                <p className="mt-3 text-lg text-q-gray-300">
                  Trading people for cloud compute did not lower the bill. See where <QBricksText /> takes the cost out, and model the saving on your own numbers.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 font-bold text-white md:mt-0 transition-colors group-hover:text-q-brand-ember">
                Explore the cost story <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>

        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow mb-4">Launch insights</p>
            <div className="space-y-4">
              {insights.map((item) => (
                <div key={item} className="premium-card flex items-start gap-4 p-6">
                  <BookOpen className="mt-1 h-5 w-5 shrink-0 text-q-brand-ember" />
                  <h2 className="text-xl font-black leading-snug text-white">{item}</h2>
                </div>
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

        <div className="container-x mt-12 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-black transition-all hover:-translate-y-1 hover:bg-q-gray-200">
            Request a demo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
