import { CapabilityOverview, type CapabilityContent } from "@/components/resources/CapabilityOverview";
import { QuantexaFlowDiagram } from "@/components/diagrams/QuantexaFlowDiagram";

export const metadata = {
  title: "QBricks + Quantexa | Capability Overview",
  description: "Trusted data, before it reaches Quantexa. QBricks turns fragmented systems of record into governed, entity-ready data products, field-mapped to the Quantexa data model.",
};

const content: CapabilityContent = {
  partner: "Quantexa",
  partnerLogo: "/assets/partners/Quantexa.png",
  scene: "lineage",
  sceneBadge: "Lineage",
  eyebrow: "No more mapping projects",
  heroIntro:
    "QBricks turns fragmented systems of record into governed, entity-ready data products – contract-enforced and audit-ready – then delivers them straight into your Quantexa platform, field-mapped to its data model. From system of record to resolution in hours: no pipelines to build, no cluster to stand up, no mess to untangle first.",
  handoffLabel: "The handoff — where QBricks meets your decision platform",
  handoff: {
    sourceItems: ["Core banking", "Payments · SWIFT", "KYC · customer"],
    qbricksItems: ["connect & fuse", "clean & validate", "enforce ODCS"],
    productTags: "Entity-ready · Field-mapped",
    partnerItems: ["resolve entities", "build networks", "score & decide"],
    partnerTag: "Contextual scale",
  },
  pillars: [
    {
      kicker: "// Local compute",
      title: "Local compute",
      text: "Integration and cleaning run on a local Rust engine – enterprise scale on a single node, with no cluster to stand up and no cloud dependency.",
    },
    {
      kicker: "// ODCS",
      title: "Governed by contract",
      text: "Every record is matched to the Open Data Contract Standard at ingestion. Nothing ungoverned gets through.",
    },
    {
      kicker: "// Field-mapped",
      title: "Quantexa-ready",
      text: "Every product is delivered field-mapped to the Quantexa data model – sources land resolution-ready, not as a mapping project.",
    },
  ],
  gap: {
    eyebrow: "The gap before resolution",
    title: "Entity resolution is only as good as the data that reaches it.",
    text: "Quantexa is built to resolve entities, build networks and reveal context at scale – and it does that exceptionally well. But it assumes the hard part is already done: that scattered, inconsistent, ungoverned sources have already become clean, coherent, well-mapped inputs. In most organizations, they haven't. That gap is where implementations stall, match rates suffer, and false positives climb. QBricks closes it.",
  },
  stepsTitle: "From systems of record to Quantexa-ready data products.",
  steps: [
    {
      title: "Connect & fuse",
      text: "Connect to source systems – core banking, payments, trading, KYC and reference data – and unify them into coherent datasets.",
    },
    {
      title: "Clean & validate",
      text: "Resolve inconsistencies and catch bad data at the door, before it can ever reach a match, a network or a score.",
    },
    {
      title: "Enforce ODCS",
      text: "Every record is compared to the Open Data Contract Standard – structure, semantics, quality and ownership, guaranteed.",
    },
    {
      title: "Map & deliver",
      text: "Materialise versioned data products, field-mapped to the Quantexa data model, and deliver them resolution-ready with full lineage.",
    },
  ],
  computeNote:
    "Because all the integration, cleaning and transformation run on local compute – at any size, with no cluster to stand up – a single large-memory node handles wholesale-banking volumes. Quantexa's compute stays free for what it's for: resolution, networks and scoring.",
  outcome: "Higher match rates in hours – not months of mapping projects.",
  fits: {
    title: "Built to work with Quantexa, not around it.",
    intro:
      "QBricks doesn't replace any part of your platform. It sits upstream of it – a clean division of labour across the decision lifecycle, with the governed, field-mapped data product passing cleanly between us.",
    qbricksHandles: [
      "Connecting to and fusing systems of record",
      "Cleaning, validation and ODCS enforcement",
      "Data products, lineage and agentic metadata",
      "Field mapping to the Quantexa data model",
      "Local, low-cost compute",
    ],
    partnerHandlesTitle: "Quantexa handles",
    partnerHandles: [
      "Entity resolution at contextual scale",
      "Network generation and graph analytics",
      "Scoring, alerts and decisioning",
      "Investigations and case work",
    ],
    complementary:
      "Where your data-movement tooling moves and lands data, QBricks transforms and governs it into products worth resolving – so the two are complementary, never competing.",
    cards: [
      {
        kicker: "Trust",
        title: "Quality in, confidence out",
        text: "Together we cover the full lifecycle. QBricks guarantees quality and meaning as data is created; Quantexa turns it into context, networks and decisions. The result is higher match rates, fewer false positives, and alerts you can defend to a regulator.",
      },
      {
        kicker: "Open formats",
        title: "Open by default",
        text: "Products are delivered in open formats with full lineage – consumed by Quantexa today, and readable by anything else tomorrow. Your data stays portable, and stays yours.",
      },
    ],
    closing: "From record to resolved entity in minutes.",
  },
};

export default function Page() {
  return <CapabilityOverview content={content} diagram={<QuantexaFlowDiagram />} />;
}
