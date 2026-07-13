import { CapabilityOverview, type CapabilityContent } from "@/components/resources/CapabilityOverview";

export const metadata = {
  title: "QBricks + Alteryx | Capability Overview",
  description: "Trusted data, before it reaches Alteryx. QBricks turns fragmented systems of record into governed, A.I.-ready data products delivered into the stores your Alteryx workflows already read.",
};

const content: CapabilityContent = {
  partner: "Alteryx",
  partnerLogo: "/assets/partners/Alteryx.png",
  scene: "workflow",
  sceneBadge: "Workflow",
  eyebrow: "No more data pipelines",
  heroIntro:
    "QBricks turns fragmented systems of record into governed, A.I.-ready data products, contract-enforced and audit-ready, then delivers them into the stores your Alteryx workflows already read. From system of record to analyst-ready in hours: no pipelines to build, no re-cleaning, no mess to untangle first.",
  handoffLabel: "The handoff, where QBricks meets your analysts",
  handoff: {
    sourceItems: ["Core banking", "Payments · SWIFT", "Trading · risk"],
    qbricksItems: ["connect & fuse", "clean & validate", "enforce ODCS"],
    productTags: "ODCS · SQL / Files",
    partnerItems: ["prep & blend", "analyse & predict", "automate & report"],
    partnerTag: "Analytics automation",
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
      text: "Delivered as open data products readable by Alteryx, via Databricks, Fabric, Snowflake or your own database.",
    },
  ],
  gap: {
    eyebrow: "The gap before the workflow",
    title: "A workflow is only as good as the data it starts from.",
    text: "Alteryx is built to let analysts prep, blend and analyse without code, and it does that exceptionally well. But every workflow starts from whatever data it is given: scattered, inconsistent, ungoverned extracts. In most organisations that means hundreds of workflows re-cleaning the same sources, each slightly differently. That gap is where versions of the truth multiply, key-person risk grows, and confidence in the outputs erodes. QBricks closes it.",
  },
  stepsTitle: "From systems of record to governed data products.",
  steps: [
    {
      title: "Connect & fuse",
      text: "Connect to source systems, core banking, payments, trading, risk and reference data, and unify them into coherent datasets.",
    },
    {
      title: "Clean & validate",
      text: "Resolve inconsistencies and catch bad data at the door, before it can ever reach a workflow or a report.",
    },
    {
      title: "Enforce ODCS",
      text: "Every record is compared to the Open Data Contract Standard, structure, semantics, quality and ownership, guaranteed.",
    },
    {
      title: "Publish & deliver",
      text: "Materialise streaming views as versioned data products and land them in the databases, warehouses or files your workflows read.",
    },
  ],
  computeNote:
    "Because all the integration, cleaning and transformation run on local compute, at any size, with no cluster to stand up, a single large-memory node handles wholesale-banking volumes. Your analysts' time stays free for what it's for: analysis, insight and automation.",
  outcome: "A.I.-ready data in hours, not months of pipeline building.",
  fits: {
    title: "Built to work with Alteryx, not around it.",
    intro:
      "QBricks doesn't replace any part of your platform. It sits upstream of it, a clean division of labour, with the governed data product passing cleanly between us.",
    qbricksHandles: [
      "Connecting to Systems of Record and creating governed data contracts to the ODCS format",
      "Cleaning, validation and ODCS enforcement",
      "Data products, lineage and agentic metadata",
      "Local, low-cost compute",
    ],
    partnerHandlesTitle: "Alteryx handles",
    partnerHandles: [
      "Self-service prep and blending",
      "Spatial, predictive and ML tools",
      "Analytic apps and automation",
      "Reporting and regulatory delivery",
    ],
    complementary:
      "Where Alteryx empowers the analyst, QBricks governs the enterprise source the workflow starts from, so the two are complementary, never competing.",
    cards: [
      {
        kicker: "Governance",
        title: "Governance, end to end",
        text: "QBricks guarantees quality and meaning as enterprise data is created; Alteryx governs the analyst's process as it is consumed. Self-service that starts from trust instead of creating it.",
      },
      {
        kicker: "Open standards",
        title: "Open by default",
        text: "Products land as open, versioned data products in the stores your workflows already read, warehouse tables, databases or files, portable, and readable by anything else tomorrow.",
      },
    ],
    closing: "From record to insight in minutes.",
  },
};

export default function Page() {
  return <CapabilityOverview content={content} />;
}
