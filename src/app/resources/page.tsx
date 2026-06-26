import { ArrowRight, BookOpen, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Resources — QBricks",
  description: "Insights and FAQ on AI-ready metadata management, data contracts, lakehouse governance, AML and KYC data foundations.",
};

const insights = [
  "Why 95% of AI use cases fail — and what banks can do about it",
  "The lakehouse data swamp: how migration quietly breaks governance",
  "Data Contracts explained: governance that actually scales",
  "AML and KYC are data problems first",
];

const faqs = [
  [<>What exactly is <QBricksText />?</>, <>An AI-enabled metadata management platform that builds and deploys data quality and ETL workflows through Data Contracts and Data Products.</>],
  ["How fast can we deploy?", "Hours, not weeks — single-file deployment covers both infrastructure and workloads."],
  [<>Which platforms does it work with?</>, <>Databricks, Microsoft Fabric, Snowflake and Quantexa. <QBricksText /> is cloud-agnostic.</>],
  ["How secure is it?", "Databricks- and Microsoft-level security, full auditability and human-in-the-loop control over agentic automation."],
  ["What results can we expect?", "95% fewer data issues, deployment in hours, around 70% lower cost than manually built workflows and end-to-end auditability."],
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-q-black">
      <section className="relative overflow-hidden border-b border-white/5 pt-44 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(232,32,15,0.22),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.035),#000_88%)]" />
        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">Resources</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.075em] text-white">
            Insight for governed, AI-ready enterprise data.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-300 md:text-2xl">
            Practical thinking for CDOs, governance leaders, risk teams and financial-crime functions preparing data for AI, analytics and regulatory confidence.
          </p>
        </div>
      </section>

      <section className="section-y bg-q-black">
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
              {faqs.map(([question, answer]) => (
                <div key={question} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
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
          <a href="mailto:sales@infinium.consulting?subject=QBricks demo request" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-black transition-all hover:-translate-y-1 hover:bg-q-gray-200">
            Request a demo <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
\nimport { QBricksText } from "@/components/ui/QBricksText";
