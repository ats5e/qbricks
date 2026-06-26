import { ArrowRight, Building2, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — QBricks",
  description: "QBricks is developed and owned by Infinium Consulting B.V. under the NextWave Infinium identity.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-q-black">
      <section className="relative overflow-hidden border-b border-white/5 pb-12 pt-44 lg:pb-16">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(232,32,15,0.22),transparent_34%),linear-gradient(to_bottom,rgba(0,0,0,0.58),#000_88%)]" />
        </div>

        <div className="container-x relative z-10 text-center">
          <p className="eyebrow mb-6"><QBricksText /> & Infinium</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.9] tracking-[-0.075em] text-white">
            The platform behind trustworthy AI in financial services.
          </h1>

        </div>
      </section>

      <section className="bg-q-black pb-20 pt-12 lg:pb-32 lg:pt-16">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="premium-card p-7">
              <Building2 className="mb-6 h-8 w-8 text-q-brand-ember" />
              <h2 className="text-2xl font-black text-white">Our mission</h2>
              <p className="mt-4 leading-relaxed text-q-gray-400">To fix the layer the market skips: the governed metadata foundation that makes AI, analytics and regulatory reporting trustworthy.</p>
            </div>
            <div className="premium-card p-7">
              <ShieldCheck className="mb-6 h-8 w-8 text-q-brand-ember" />
              <h2 className="text-2xl font-black text-white">Built for regulated data</h2>
              <p className="mt-4 leading-relaxed text-q-gray-400"><QBricksText /> is an AI-enabled metadata management platform built for secure, governed enterprise data and auditable delivery.</p>
            </div>
            <div className="premium-card p-7">
              <Globe2 className="mb-6 h-8 w-8 text-q-brand-ember" />
              <h2 className="text-2xl font-black text-white">Built for the GCC</h2>
              <p className="mt-4 leading-relaxed text-q-gray-400">Designed for the realities of financial services in the UAE and wider GCC: regulatory scrutiny, AI ambition and trust in every data decision.</p>
            </div>
          </div>

          <div className="premium-card mx-auto mt-10 max-w-4xl p-8 text-center md:p-12">
            <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-black tracking-[-0.05em] text-white">
              See <QBricksText /> on your data.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-q-gray-400">Tell us your platform and priority use case — AML, KYC, fraud, MDM or risk — and we will tailor the demo.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-black transition-all hover:-translate-y-1 hover:bg-q-gray-200">
              Contact Us <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import { QBricksText } from "@/components/ui/QBricksText";
