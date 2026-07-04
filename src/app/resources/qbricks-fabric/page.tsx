import { CapabilityOverview, type CapabilityContent } from "@/components/resources/CapabilityOverview";

export const metadata = {
  title: "QBricks + Microsoft Fabric | Capability Overview",
  description: "Trusted data, before it reaches Microsoft Fabric. QBricks turns fragmented systems of record into governed, A.I.-ready data products delivered straight into OneLake.",
};

const content: CapabilityContent = {
  partner: "Microsoft Fabric",
  partnerLogo: "/assets/partners/Fabric.png",
  scene: "contracts",
  sceneBadge: "ODCS",
  eyebrow: "No more data pipelines",
  heroIntro:
    "QBricks turns fragmented systems of record into governed, A.I.-ready data products – contract-enforced and audit-ready – then delivers them straight into OneLake. From system of record to Power BI in hours: no pipelines to build, no capacity to burn on wrangling, no mess to untangle first.",
  handoffLabel: "The handoff — where QBricks meets OneLake",
  handoff: {
    sourceItems: ["Core banking", "Payments · SWIFT", "Trading · risk"],
    qbricksItems: ["connect & fuse", "clean & validate", "enforce ODCS"],
    productTags: "ODCS · Delta",
    partnerItems: ["land in OneLake", "serve Power BI", "power Copilot & AI"],
    partnerTag: "OneLake · Direct Lake",
  },
  pillars: [
    {
      kicker: "// No Spark",
      title: "Local compute",
      text: "Integration and cleaning run on a local compute engine – enterprise scale on a single node, with no Spark, no cluster and no cloud lock-in.",
    },
    {
      kicker: "// ODCS",
      title: "Governed by contract",
      text: "Every record is matched to the Open Data Contract Standard at ingestion. Nothing ungoverned reaches OneLake.",
    },
    {
      kicker: "// No lock-in",
      title: "Yours to keep",
      text: "Delivered as open data products to Fabric, Databricks, Snowflake – or your own database.",
    },
  ],
  gap: {
    eyebrow: "The gap before OneLake",
    title: "OneLake is only as good as the data that lands in it.",
    text: "Microsoft Fabric is built to unify storage, BI and AI on one SaaS foundation – and it does that exceptionally well. But it assumes the hard part is already done: that scattered, inconsistent, ungoverned sources have already become clean, trustworthy Delta tables. In most organizations, they haven't. That gap is where dataflows sprawl, capacity units burn on wrangling, and confidence in the numbers erodes. QBricks closes it.",
  },
  stepsTitle: "From systems of record to governed data products.",
  steps: [
    {
      title: "Connect & fuse",
      text: "Connect to source systems – core banking, payments, trading, risk and reference data – and unify them into coherent datasets.",
    },
    {
      title: "Clean & validate",
      text: "Resolve inconsistencies and catch bad data at the door, before it can ever reach a report or a model.",
    },
    {
      title: "Enforce ODCS",
      text: "Every record is compared to the Open Data Contract Standard – structure, semantics, quality and ownership, guaranteed.",
    },
    {
      title: "Publish & deliver",
      text: "Materialise streaming views as versioned data products and land them in OneLake as Delta – read instantly by Power BI in Direct Lake mode.",
    },
  ],
  computeNote:
    "Because all the integration, cleaning and transformation run on local compute – at any size, with no Spark cluster – a single large-memory node handles wholesale-banking volumes. Your Fabric capacity stays free for what it's for: Power BI, Real-Time Intelligence and Copilot.",
  outcome: "A.I.-ready data in hours – not months of pipeline building.",
  fits: {
    title: "Built to work with Fabric, not around it.",
    intro:
      "QBricks doesn't replace any part of your platform. It sits upstream of it – a clean division of labor across the data lifecycle, with the governed data product passing cleanly between us.",
    qbricksHandles: [
      "Connecting to and fusing systems of record",
      "Cleaning, validation and ODCS enforcement",
      "Data products, lineage and agentic metadata",
      "Local, low-cost compute — no Spark",
    ],
    partnerHandlesTitle: "Fabric handles",
    partnerHandles: [
      "OneLake storage, shortcuts and mirroring",
      "Power BI with Direct Lake",
      "Real-Time Intelligence and eventstreams",
      "Copilot and AI experiences",
    ],
    complementary:
      "Where Fabric stores, serves and analyses, QBricks prepares and governs what it works from – so the two are complementary, never competing.",
    cards: [
      {
        kicker: "Governance",
        title: "Governance, end to end",
        text: "Together we cover the full lifecycle. QBricks guarantees quality and meaning as data is created; Fabric governs discovery and access as data is consumed – domains, workspaces and Purview. The result is a OneLake built on data that is trusted by the time it lands – and controlled once it's there.",
      },
      {
        kicker: "Open standards",
        title: "Open by default, no lock-in",
        text: "Products are delivered as open Delta Parquet straight into OneLake – the format Fabric reads natively, with no import and no translation – portable, and readable by anything else tomorrow.",
      },
    ],
    closing: "From record to report in minutes.",
  },
};

export default function Page() {
  return <CapabilityOverview content={content} />;
}
