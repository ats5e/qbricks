import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-[22vw] pt-44">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[19vw]" aria-hidden="true">
        <Image src="/assets/brand/hero-why.webp" alt="" fill className="object-cover object-bottom" sizes="100vw" />
      </div>

      <div className="container-x relative z-10 text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="h-display mx-auto max-w-3xl">This page could not be found.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-q-gray-700">
          The link may be out of date, or the page may have moved.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-q-brand px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-q-brand-ember"
          >
            Back to the homepage <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.04] px-7 py-4 text-sm font-bold text-q-ink transition-all hover:-translate-y-0.5 hover:border-black/20"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
