import { CapabilityOverview, type CapabilityContent } from "@/components/resources/CapabilityOverview";

export const metadata = {
  title: "QBricks + Snowflake | Capability Overview",
  description: "Trusted data, before it reaches Snowflake. QBricks turns fragmented systems of record into governed, A.I.-ready data products delivered straight into your data cloud.",
};

const content: CapabilityContent = {
  partner: "Snowflake",
  partnerLogo: "/assets/partners/Snowflake.png",
  scene: "integrations",
  sceneBadge: "Integrations",
  eyebrow: "No more data pipelines",
  heroIntro:
    "QBricks turns fragmented systems of record into governed, A.I.-ready data products, contract-enforced and audit-ready, then delivers them straight into your Snowflake account. From system of record to the data cloud in hours: no pipelines to build, no warehouse to spin up, no mess to untangle first.",
  handoffLabel: "The handoff, where QBricks meets your data cloud",
  handoff: {
    sourceItems: ["Core banking", "Payments · SWIFT", "Trading · risk"],
    qbricksItems: ["connect & fuse", "clean & validate", "enforce ODCS"],
    productTags: "ODCS · Iceberg",
    partnerItems: ["host & share", "serve BI & apps", "govern: Horizon"],
    partnerTag: "The AI Data Cloud",
  },
  pillars: [
    {
      kicker: "// Local compute",
      title: "Local compute",
      text: "Integration and cleaning run on a local compute engine, enterprise scale on a single node, with no cluster to stand up and no cloud dependency.",
    },
    {
      kicker: "// ODCS",
      title: "Governed by contract",
      text: "Every record is matched to the Open Data Contract Standard at ingestion.",
    },
    {
      kicker: "// Open formats",
      title: "Yours to keep",
      text: "Delivered as open data products to Snowflake, Databricks, Fabric, or your own database.",
    },
  ],
  gap: {
    eyebrow: "The gap before the data cloud",
    title: "A data cloud is only as good as the data that reaches it.",
    text: "Snowflake is built to store, share and serve coherent data at scale, and it does that exceptionally well. But it assumes the hard part is already done: that scattered, inconsistent, ungoverned sources have already become clean, trustworthy tables. In most organisations, they haven't. That gap is where ELT jobs sprawl, credits burn on transformation warehouses, and confidence in the numbers erodes. QBricks closes it.",
  },
  stepsTitle: "From systems of record to governed data products.",
  steps: [
    {
      title: "Connect & fuse",
      text: "Connect to source systems, core banking, payments, trading, risk and reference data, and unify them into coherent datasets.",
    },
    {
      title: "Clean & validate",
      text: "Resolve inconsistencies and catch bad data at the door, before it can ever reach a report or a model.",
    },
    {
      title: "Enforce ODCS",
      text: "Every record is compared to the Open Data Contract Standard, structure, semantics, quality and ownership, guaranteed.",
    },
    {
      title: "Publish & deliver",
      text: "Materialise streaming views as versioned data products and deliver them to Snowflake as Iceberg tables, or as native tables via SQL push-down.",
    },
  ],
  computeNote:
    "Because all the integration, cleaning and transformation run on local compute, at any size, with no cluster to stand up, a single large-memory node handles wholesale-banking volumes. Your Snowflake credits stay free for what they're for: serving, applications and Cortex AI.",
  outcome: "A.I.-ready data in hours, not months of pipeline building.",
  fits: {
    title: "Built to work with Snowflake, not around it.",
    intro:
      "QBricks doesn't replace any part of your platform. It sits upstream of it, a clean division of labour across the data lifecycle, with the governed data product passing cleanly between us.",
    qbricksHandles: [
      "Connecting to Systems of Record and creating governed data contracts to the ODCS format",
      "Cleaning, validation and ODCS enforcement",
      "Data products, lineage and agentic metadata",
      "Local, low-cost compute",
    ],
    partnerHandlesTitle: "Snowflake handles",
    partnerHandles: [
      "Elastic warehousing and serving at scale",
      "Secure data sharing and the Marketplace",
      "Cortex AI and Snowpark workloads",
      "Governance and access with Horizon",
    ],
    complementary:
      "Where Snowflake stores, shares and serves, QBricks prepares and governs what it works from, so the two are complementary, never competing.",
    cards: [
      {
        kicker: "Governance",
        title: "Governance, end to end",
        text: "Together we cover the full lifecycle. QBricks guarantees quality and meaning as data is created; Snowflake governs access as data is consumed, Horizon, policies and sharing controls. The result is a data cloud built on data that is trusted by the time it lands, and controlled once it's there.",
      },
      {
        kicker: "Open standards",
        title: "Open by default",
        text: "Products are delivered as open Apache Iceberg tables, the format Snowflake reads natively and catalogs through Apache Polaris, the open standard it originated, portable, and readable by anything else tomorrow.",
      },
    ],
    closing: "From record to report in minutes.",
  },
};

export default function Page() {
  return <CapabilityOverview content={content} />;
}
