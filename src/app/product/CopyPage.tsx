import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { QBricksText, brand } from "@/components/ui/QBricksText";

export type CopySection = {
  id: string;
  label: string;
  headline: string;
  subhead: string;
  intro: string;
};

export type CopyPageContent = {
  crumb: string;
  image: string;
  headline: string;
  subhead: string;
  intro: string;
  sections: CopySection[];
  next: { label: string; href: string };
};

/* Shared layout for the product sub-pages written by David (Machine learning, Agents):
   a hero, the intro, then one section per item in his copy, as on /solutions/data-products. */
export function CopyPage({ content }: { content: CopyPageContent }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5 page-hero pb-[22vw]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src={content.image} alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>
        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6">
            <Link href="/product" className="hover:underline">
              Product
            </Link>{" "}
            · {content.crumb}
          </p>
          <h1 className="h-display mx-auto max-w-5xl font-black tracking-tight text-q-ink">{brand(content.headline)}</h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-q-gray-700 [text-wrap:balance] md:text-2xl">{brand(content.subhead)}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-black/5 bg-white section-y-sm">
        <div className="container-x">
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-q-gray-700 md:text-xl">{brand(content.intro)}</p>
        </div>
      </section>

      {/* One section per item */}
      {content.sections.map((section, index) => (
        <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-black/5 bg-white section-y-sm">
          <div className="container-x">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <p className="eyebrow mb-3">
                  {String(index + 1).padStart(2, "0")} · {brand(section.label)}
                </p>
                <h2 className="h-sub">{brand(section.headline)}</h2>
                <p className="mt-5 leading-relaxed text-q-gray-600">{brand(section.subhead)}</p>
              </div>
              <p className="text-lg leading-relaxed text-q-gray-700 lg:pt-1">{brand(section.intro)}</p>
            </div>
          </div>
        </section>
      ))}

      {/* Close */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h-section">
              See <QBricksText /> on your own&nbsp;data<span className="text-q-brand-ember">.</span>
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request a demo <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href={content.next.href} className="btn-secondary">
                {content.next.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
