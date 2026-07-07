import { CapabilityOverview, type CapabilityContent } from "@/components/resources/CapabilityOverview";

export const metadata = {
  title: "QBricks + Databricks | Capability Overview",
  description: "Trusted data, before it reaches Databricks. QBricks turns fragmented systems of record into governed, A.I.-ready data products delivered straight into your lakehouse.",
};

const content: CapabilityContent = {
  partner: "Databricks",
  partnerLogo: "/assets/partners/Databricks.png",
  scene: "aiready",
  sceneBadge: "Q Agent",
  eyebrow: "No more data pipelines",
  heroIntro:
    "QBricks turns fragmented systems of record into governed, A.I.-ready data products – contract-enforced and audit-ready – then delivers them straight into your Databricks lakehouse. From system of record to Unity Catalog in hours: no pipelines to build, no cluster to stand up, no mess to untangle first.",
  handoffLabel: "The handoff — where QBricks meets your lakehouse",
  handoff: {
    sourceItems: ["Core banking", "Payments · SWIFT", "Trading · risk"],
    qbricksItems: ["connect & fuse", "clean & validate", "enforce ODCS"],
    productTags: "ODCS · Delta",
    partnerItems: ["host & catalog", "serve BI, ML & AI", "govern access"],
    partnerTag: "Lakehouse & AI",
  },
  pillars: [
    {
      kicker: "// Local compute",
      title: "Local compute",
      text: "Integration and cleaning run on a local compute engine – enterprise scale on a single node, with no cluster to stand up and no cloud dependency.",
    },
    {
      kicker: "// ODCS",
      title: "Governed by contract",
      text: "Every record is matched to the Open Data Contract Standard at ingestion. Nothing ungoverned reaches your lakehouse.",
    },
    {
      kicker: "// Open formats",
      title: "Yours to keep",
      text: "Delivered as open data products to Databricks, Fabric, Snowflake – or your own database.",
    },
  ],
  gap: {
    eyebrow: "The gap before the lakehouse",
    title: "A lakehouse is only as good as the data that reaches it.",
    text: "Databricks is built to host, analyse and serve coherent data at scale – and it does that exceptionally well. But it assumes the hard part is already done: that scattered, inconsistent, ungoverned sources have already become clean, trustworthy tables. In most organizations, they haven't. That gap is where medallion pipelines sprawl, DBUs burn on wrangling, and confidence in the numbers erodes. QBricks closes it.",
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
      text: "Materialise streaming views as versioned data products and register them in Unity Catalog – or deliver to your own database.",
    },
  ],
  computeNote:
    "Because all the integration, cleaning and transformation run on local compute – at any size, with no cluster to stand up – a single large-memory node handles wholesale-banking volumes. Your Databricks compute stays free for what it's for: analytics, ML and AI.",
  outcome: "A.I.-ready data in hours – not months of pipeline building.",
  fits: {
    title: "Built to work with Databricks, not around it.",
    intro:
      "QBricks doesn't replace any part of your platform. It sits upstream of it – a clean division of labor across the data lifecycle, with the governed data product passing cleanly between us.",
    qbricksHandles: [
      "Connecting to and fusing systems of record",
      "Cleaning, validation and ODCS enforcement",
      "Data products, lineage and agentic metadata",
      "Local, low-cost compute",
    ],
    partnerHandlesTitle: "Databricks handles",
    partnerHandles: [
      "Lakehouse hosting and cataloging at scale",
      "Interactive BI and SQL warehousing (DBSQL)",
      "Large-scale engineering and streaming",
      "Machine learning and generative AI (Mosaic AI)",
    ],
    complementary:
      "Where Databricks hosts, analyses and serves, QBricks prepares and governs what it works from – so the two are complementary, never competing.",
    cards: [
      {
        kicker: "Governance",
        title: "Governance, end to end",
        text: "Together we cover the full lifecycle. QBricks guarantees quality and meaning as data is created – contracts enforced at execution time, products registered in Unity Catalog; Databricks governs access as data is consumed. The result is a lakehouse built on data that is trusted by the time it lands – and controlled once it's there.",
      },
      {
        kicker: "Open standards",
        title: "Open by default",
        text: "Products are delivered as open Delta and Iceberg tables, registered in Unity Catalog through its open APIs – portable, and readable by anything else tomorrow.",
      },
    ],
    closing: "From record to lakehouse in minutes.",
  },
};

export default function Page() {
  return <CapabilityOverview content={content} />;
}
