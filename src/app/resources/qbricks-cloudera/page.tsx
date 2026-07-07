import { CapabilityOverview, type CapabilityContent } from "@/components/resources/CapabilityOverview";
import { ClouderaFlowDiagram } from "@/components/diagrams/ClouderaFlowDiagram";

export const metadata = {
  title: "QBricks + Cloudera | Capability Overview",
  description: "Trusted data, before it reaches Cloudera. QBricks turns fragmented systems of record into governed, A.I.-ready data products delivered straight into your Cloudera platform.",
};

const content: CapabilityContent = {
  partner: "Cloudera",
  partnerLogo: "/assets/partners/Cloudera_logo.webp",
  scene: "governance",
  sceneBadge: "Live audit",
  eyebrow: "No more data pipelines",
  heroIntro:
    "QBricks turns fragmented systems of record into governed, A.I.-ready data products — contract-enforced and audit-ready — then delivers them straight into your Cloudera platform. From system of record to lakehouse in hours: no pipelines to build, no cluster to stand up, no mess to untangle first.",
  handoffLabel: "The handoff — where QBricks meets your lakehouse",
  handoff: {
    sourceItems: ["Core banking", "Payments · SWIFT", "Trading · risk"],
    qbricksItems: ["connect & fuse", "clean & validate", "enforce ODCS"],
    productTags: "Iceberg / Polaris",
    partnerItems: ["host & catalog", "serve BI & AI", "govern access"],
    partnerTag: "Distributed scale",
  },
  pillars: [
    {
      kicker: "// Local compute",
      title: "Local compute",
      text: "Integration and cleaning run on a local DataFusion engine — enterprise scale on a single node, with no cluster to stand up and no cloud dependency.",
    },
    {
      kicker: "// ODCS",
      title: "Governed by contract",
      text: "Every record is matched to the Open Data Contract Standard at ingestion. Nothing ungoverned gets through.",
    },
    {
      kicker: "// Open formats",
      title: "Yours to keep",
      text: "Delivered as open data products to Cloudera, Databricks, Fabric, Snowflake — or your own database.",
    },
  ],
  gap: {
    eyebrow: "The gap before the lakehouse",
    title: "A lakehouse is only as good as the data that reaches it.",
    text: "Cloudera is built to host, serve, and govern coherent data at scale — and it does that exceptionally well. But it assumes the hard part is already done: that scattered, inconsistent, ungoverned sources have already become clean, trustworthy tables. In most organizations, they haven't. That gap is where projects stall, costs climb, and confidence in the numbers erodes. QBricks closes it.",
  },
  stepsTitle: "From systems of record to governed data products.",
  steps: [
    {
      title: "Connect & fuse",
      text: "Connect to source systems — core banking, payments, trading, risk and reference data — and unify them into coherent datasets.",
    },
    {
      title: "Clean & validate",
      text: "Resolve inconsistencies and catch bad data at the door, before it can ever reach a report or a model.",
    },
    {
      title: "Enforce ODCS",
      text: "Every record is compared to the Open Data Contract Standard — structure, semantics, quality and ownership, guaranteed.",
    },
    {
      title: "Publish & deliver",
      text: "Materialise streaming views as versioned data products and deliver them to Cloudera, Azure, Databricks, or your own database.",
    },
  ],
  computeNote:
    "Because all the integration, cleaning and transformation run on local compute — at any size, with no cluster to stand up — a single large-memory node handles wholesale-banking volumes. Cloudera's compute stays free for what it's for: serving, analytics and AI.",
  outcome: "A.I.-ready data in hours — not months of pipeline building.",
  fits: {
    title: "Built to work with Cloudera, not around it.",
    intro:
      "QBricks doesn't replace any part of your platform. It sits upstream of it — a clean division of labor across the data lifecycle, with the governed data product passing cleanly between us.",
    qbricksHandles: [
      "Connecting to and fusing systems of record",
      "Cleaning, validation and ODCS enforcement",
      "Data products, lineage and agentic metadata",
      "Local, low-cost compute",
    ],
    partnerHandlesTitle: "Cloudera handles",
    partnerHandles: [
      "Hosting and cataloging at scale",
      "Interactive BI and large analytical queries",
      "Access governance, lineage and audit",
      "Machine learning and enterprise AI",
    ],
    complementary:
      "Where your data-movement tooling moves and lands data, QBricks transforms and governs it into products worth trusting — so the two are complementary, never competing.",
    cards: [
      {
        kicker: "Governance",
        title: "Governance, end to end",
        text: "Together we cover the full lifecycle. QBricks guarantees quality and meaning as data is created; Cloudera governs access as data is consumed. The result is data that is trusted by the time it lands — and controlled once it's there.",
      },
      {
        kicker: "Open standards",
        title: "Open by default",
        text: "Products are delivered as open Apache Iceberg tables and can be registered through Apache Polaris — the open catalog Cloudera has adopted. Your data stays portable, readable by Cloudera today and by anything else tomorrow.",
      },
    ],
    closing: "From record to report in minutes.",
  },
};

export default function Page() {
  return <CapabilityOverview content={content} diagram={<ClouderaFlowDiagram />} />;
}
