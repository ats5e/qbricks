import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Agentic } from "@/components/interactive/Agentic";
import { FeaturesBento } from "@/components/interactive/FeaturesBento";
import { MigrationGraphic, RoutingGraphic } from "@/components/interactive/flowGraphics";
import { QBricksText, brand } from "@/components/ui/QBricksText";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Product",
  description:
    "AI-enabled metadata management built for governed enterprise data, Data Contracts, Data Products and auditable deployment.",
  path: "/product",
});

const flow = [
  ["Define", "Express data quality and ETL logic as owned, versioned Data Contracts."],
  ["Compose", "Assemble contracts into discoverable Data Products the business can trust."],
  ["Deploy", "Use a single file to deploy infrastructure and workloads in hours."],
  ["Automate", "Agents handle metadata work while humans stay in control."],
  ["Audit", "Track every decision, exception and lineage event end to end."],
];

const more = [
  {
    label: "Machine learning",
    href: "/product/machine-learning",
    title: "Machine learning where your governed data already lives",
    text: "Use our models, build your own in SQL, or take the data to the models you already trust.",
  },
  {
    label: "Agents",
    href: "/product/agents",
    title: "Agents that work on governed data, not around it",
    text: "Put the QBricks Agentic Crew to work, build agents of your own, or connect the agentic platforms you already use.",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-black/5 page-hero pb-[22vw]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[19vw]" aria-hidden="true">
          <Image src="/assets/brand/hero-product.webp" alt="" fill priority className="object-cover object-bottom" sizes="100vw" />
        </div>

        <div className="container-x relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow mb-6">The platform</p>
            <h1 className="h-display font-black tracking-tight text-q-ink">
              The platform that governs data at the source.
            </h1>
            <p className="mx-auto mt-14 max-w-4xl text-lg leading-relaxed text-q-gray-700">
              <QBricksText /> brings high-performance SQL execution and data management into one platform. The EOS engine avoids unnecessary work so difficult queries finish sooner; local compute gets more useful analytics from your infrastructure; and the Open Data Contract Standard is enforced on every record, with agentic metadata management and full lineage, so you can govern the data behind every answer. Works with Databricks, Microsoft Fabric, Snowflake or your own on-premise database via SQL push-down, delivered in open formats that stay fully portable.
            </p>
            <Link href="/contact" className="btn-primary mt-10">
              Evaluate your workload <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <FeaturesBento />

      <section className="border-b border-black/5 bg-white section-y-sm">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-6xl text-center">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="h-section font-black tracking-tight text-q-ink">
              <span className="lg:whitespace-nowrap">Five steps from</span>
              <br className="hidden lg:block" />
              <span className="lg:whitespace-nowrap"> contract to audit trail.</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {flow.map(([title, text], index) => (
              <div key={title} className="premium-card p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-q-brand/25 bg-q-brand/[0.12] text-lg font-black text-q-brand-ember">{index + 1}</div>
                <h3 className="text-xl font-black text-q-ink">{brand(title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-q-gray-600">{brand(text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Agentic />

      <section className="border-y border-black/5 bg-white section-y-sm">
        <div className="container-x space-y-20">
          <div>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <p className="eyebrow mb-3">Workload routing</p>
                <h2 className="h-sub">Data lands in the lakehouse. <QBricksText /> runs the workload.</h2>
              </div>
              <p className="leading-relaxed text-q-gray-700 lg:pt-1">
                Your lakehouse stays the governed landing zone. <QBricksText /> routes each workload to the EOS engine on one right-sized node, then returns governed data products to the landing zone for downstream consumption and to data scientists through the Python SDK.
              </p>
            </div>
            <div className="mt-8 rounded-[1.6rem] border border-black/10 bg-black/[0.02] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.165)] sm:p-3">
              <RoutingGraphic />
            </div>
          </div>
          <div>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <p className="eyebrow mb-3">Database to lakehouse migration</p>
                <h2 className="h-sub">Tables become contract-enforced data products on the way across.</h2>
              </div>
              <p className="leading-relaxed text-q-gray-700 lg:pt-1">
                Profile and ingest incrementally, generate the Open Data Contract Standard contract, validate with a human in the loop and publish in open formats. A migration that once took 12 to 18 months becomes a matter of hours to days.
              </p>
            </div>
            <div className="mt-8 rounded-[1.6rem] border border-black/10 bg-black/[0.02] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.165)] sm:p-3">
              <MigrationGraphic />
            </div>
          </div>
        </div>
      </section>


      <section className="border-b border-black/5 bg-white section-y-sm">
        <div className="container-x">
          <p className="eyebrow mb-3">On the platform</p>
          <h2 className="h-sub">Models and agents on governed data.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {more.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col rounded-3xl border border-black/10 bg-black/[0.035] p-6 transition-colors hover:border-q-brand/40 md:p-8"
              >
                <p className="text-sm font-bold text-q-gray-500">{item.label}</p>
                <h3 className="mt-3 text-xl font-black leading-tight text-q-ink md:text-2xl">{brand(item.title)}</h3>
                <p className="mt-3 leading-relaxed text-q-gray-600">{brand(item.text)}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-q-brand-deep">
                  Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h-section">
              See <QBricksText /> on your own&nbsp;workload<span className="text-q-brand-ember">.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-q-gray-700">
              Bring us a representative workload. We will show you where <QBricksText /> helps, where it does not, and what adoption would take.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request a demo <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Explore use cases <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
