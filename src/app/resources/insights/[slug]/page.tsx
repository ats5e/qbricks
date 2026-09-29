import { brand } from "@/components/ui/QBricksText";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, insightImage } from "../data";
import { clip, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((entry) => entry.slug === slug);
  if (!insight) return {};
  return pageMeta({
    title: insight.title,
    description: clip(insight.standfirst),
    path: `/resources/insights/${slug}`,
    type: "article",
  });
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
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="relative overflow-hidden border-b border-black/5 pb-16 pt-40 lg:pt-44">
        <div className="container-x relative z-10">
          <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-q-gray-600 transition-colors hover:text-q-ink">
            <ArrowLeft className="h-4 w-4" /> Resources
            <span className="text-q-gray-500">/</span>
            <span className="text-q-gray-700">Insight</span>
          </Link>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-q-brand/40 bg-q-brand/10 px-4 py-1.5 text-xs text-q-brand-deep font-medium">
              <BookOpen className="h-3.5 w-3.5" /> Insight · {insight.category}
            </span>
            <h1 className="h-section font-black tracking-tight text-q-ink">
              {brand(insight.title)}
            </h1>
            <p className="mt-7 text-xl leading-relaxed text-q-gray-700">{brand(insight.standfirst)}</p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
            <Image src={insightImage(insight.slug)} alt="" fill priority className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-12 md:pb-24 md:pt-14 lg:pb-32 lg:pt-16">
        <div className="container-x">
          <div className="max-w-3xl space-y-14">
            {insight.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-black tracking-tight text-q-ink md:text-3xl">{brand(section.heading)}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mt-5 text-lg leading-relaxed text-q-gray-700">
                    {brand(paragraph)}
                  </p>
                ))}
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[2rem] border border-q-brand/25 bg-gradient-to-br from-[#f5e9e9]/80 to-transparent p-8 md:p-10">
              <p className="text-xs text-q-brand-deep font-medium">The takeaway</p>
              <p className="mt-3 text-2xl font-black leading-snug tracking-tight text-q-ink md:text-3xl">{brand(insight.takeaway)}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
                Request a demo <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/resources" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/[0.055] px-8 py-4 font-black text-q-ink transition-all hover:-translate-y-1 hover:bg-black/[0.08]">
                More resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
