import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "../data";

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((entry) => entry.slug === slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.standfirst.slice(0, 155),
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((entry) => entry.slug === slug);
  if (!insight) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.standfirst,
    author: { "@type": "Organization", name: "QBricks" },
    publisher: { "@type": "Organization", name: "Infinium Consulting B.V." },
  };

  return (
    <main className="min-h-screen bg-q-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="relative overflow-hidden border-b border-white/5 pb-16 pt-40 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_30%_10%,rgba(232,32,15,0.13),transparent_65%)]" />
        <div className="container-x relative z-10">
          <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-q-gray-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Resources
            <span className="text-q-gray-500">/</span>
            <span className="text-q-gray-300">Insight</span>
          </Link>
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-q-brand/40 bg-q-brand/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-q-brand-ember">
              <BookOpen className="h-3.5 w-3.5" /> Insight · {insight.category}
            </span>
            <h1 className="text-[clamp(2.4rem,4.6vw,4rem)] font-black leading-[0.98] tracking-tight text-white">
              {insight.title}
            </h1>
            <p className="mt-7 text-xl leading-relaxed text-q-gray-300">{insight.standfirst}</p>
          </div>
        </div>
      </section>

      <section className="bg-q-black pb-16 pt-12 md:pb-24 md:pt-14 lg:pb-32 lg:pt-16">
        <div className="container-x">
          <div className="max-w-3xl space-y-14">
            {insight.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mt-5 text-lg leading-relaxed text-q-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[2rem] border border-q-brand/25 bg-gradient-to-br from-[#160a0a]/80 to-transparent p-8 md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-q-brand-ember">{"// The takeaway"}</p>
              <p className="mt-3 text-2xl font-black leading-snug tracking-tight text-white md:text-3xl">{insight.takeaway}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
                Request a demo <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/resources" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-white/[0.08]">
                More resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
