import { ArrowRight, Building2, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InfiniumLockup } from "@/components/ui/InfiniumLockup";
import { QBricksText } from "@/components/ui/QBricksText";

export const metadata = {
  title: "About",
  description: "QBricks is developed and owned by Infinium Consulting B.V., part of Infinium Technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-black/5 pt-44 pb-[22vw]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src="/assets/brand/hero-about.webp" alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6"><QBricksText /> &amp; Infinium</p>
          <h1 className="h-display mx-auto max-w-5xl font-black tracking-tight text-q-ink">
            The platform behind trustworthy A.I.
          </h1>

        </div>
      </section>

      <section className="bg-white pb-20 pt-12 lg:pb-32 lg:pt-16">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="premium-card p-7">
              <Building2 className="mb-6 h-8 w-8 text-q-brand-ember" />
              <h2 className="text-2xl font-black text-q-ink">Our mission</h2>
              <p className="mt-4 leading-relaxed text-q-gray-600">To fix the layer the market skips: the governed data management foundation that makes A.I., analytics and regulatory reporting trustworthy.</p>
            </div>
            <div className="premium-card p-7">
              <ShieldCheck className="mb-6 h-8 w-8 text-q-brand-ember" />
              <h2 className="text-2xl font-black text-q-ink">Built for regulated data</h2>
              <p className="mt-4 leading-relaxed text-q-gray-600"><QBricksText /> is an A.I.-enabled data management platform built for secure, governed enterprise data and auditable delivery.</p>
            </div>
            <div className="premium-card p-7">
              <Globe2 className="mb-6 h-8 w-8 text-q-brand-ember" />
              <h2 className="text-2xl font-black text-q-ink">Built for every organisation</h2>
              <p className="mt-4 leading-relaxed text-q-gray-600">Designed for the realities of data-driven organisations: A.I. ambition, governance and trust in every data decision.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-black/10 bg-white p-7 md:flex-row md:items-center md:p-8">
            <div>
              <InfiniumLockup className="mb-4 text-[26px]" />
              <p className="eyebrow mb-2">Part of Infinium Technology</p>
              <p className="max-w-2xl leading-relaxed text-q-gray-600">
                <QBricksText /> is developed and owned by Infinium Consulting B.V., the Amsterdam-based consultancy behind Infinium Technology. Infinium delivers the data, A.I. and transformation programmes that <QBricksText /> was built to accelerate.
              </p>
            </div>
            <a
              href="https://infinium-technology.com/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-black/[0.055] px-6 py-3 text-sm font-bold text-q-ink transition-all hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/[0.08]"
            >
              Visit Infinium Technology <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="premium-card mx-auto mt-10 max-w-4xl p-8 text-center md:p-12">
            <h2 className="h-section font-black tracking-tight text-q-ink">
              See <QBricksText /> on your own data.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-q-gray-600">Tell us your platform and priority use case, AML, KYC, fraud, MDM or risk, and we will tailor the demo.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-q-brand px-8 py-4 font-black text-white transition-all hover:-translate-y-1 hover:bg-q-brand-ember">
              Contact Us <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
