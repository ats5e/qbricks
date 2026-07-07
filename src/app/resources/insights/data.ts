export type Insight = {
  slug: string;
  category: string;
  title: string;
  standfirst: string;
  sections: { heading: string; paragraphs: string[] }[];
  takeaway: string;
};

export const insights: Insight[] = [
  {
    slug: "why-ai-use-cases-fail",
    category: "AI readiness",
    title: "Why 95% of A.I. use cases fail, and what organisations can do about it",
    standfirst:
      "A 2025 MIT report found that around 95% of A.I.-related use cases were failing — not because the models were weak, but because the underlying data quality and metadata foundation could not be trusted. The pattern repeats across industries, and it is fixable.",
    sections: [
      {
        heading: "The failure is upstream of the model",
        paragraphs: [
          "When an A.I. initiative stalls, the post-mortem rarely blames the model. It finds unclear data ownership, undocumented semantics, quality defects discovered weeks after ingestion, and a lakehouse full of raw extracts nobody trusts. The model was asked to reason over data that was never fit for use.",
          "The economics compound the problem. Every ungoverned dataset consumed by a model is compute spent twice: once ingesting it, and again correcting what it produced. Failed use cases don't just miss their business case — they actively inflate the cost of the next attempt.",
        ],
      },
      {
        heading: "Why throwing money at it hasn't worked",
        paragraphs: [
          "The default response has been spend: more data engineers, more remediation programmes, more platform licences, more pipeline building. But hand-built pipelines and after-the-fact cleansing scale linearly with headcount, while the backlog of sources scales with the business. Organisations are recognising that these costs outweigh the savings A.I. was meant to deliver.",
        ],
      },
      {
        heading: "What the successful 5% do differently",
        paragraphs: [
          "They treat data readiness as a governed engineering discipline, not a cleanup project. Rules are agreed first — as machine-readable data contracts under the Open Data Contract Standard (ODCS) — and every record is validated against them at ingestion, with a human in the loop for exceptions. Quality stops being discovered downstream because nothing ungoverned gets through.",
          "They also stop rebuilding the same plumbing. One automated, streaming ingestion process replaces the pipeline backlog, moving only incremental change, with full lineage registered in the catalog. Trusted data becomes something teams find and reuse — not something each project reconstructs.",
        ],
      },
    ],
    takeaway: "The problem is not the A.I. solution you are trying to implement. It is the quality of your data.",
  },
  {
    slug: "lakehouse-data-swamp",
    category: "Lakehouse governance",
    title: "The lakehouse data swamp: how migration quietly breaks governance",
    standfirst:
      "Lakehouse migrations are sold as modernisation. Two years in, many organisations find terabytes of raw extracts, thousands of notebooks and a governance posture worse than the estate they left behind. The swamp was not inevitable — it was imported.",
    sections: [
      {
        heading: "How the swamp forms",
        paragraphs: [
          "The medallion pattern makes it easy to land data first and govern it later: raw extracts arrive in Bronze faster than anyone can define ownership, quality thresholds or lineage. Every team ingests its own copy of the sources it couldn't find or couldn't trust, and each copy carries its own pipeline, schedule and cost.",
          "Migration deadlines make it worse. Moving fast means lifting ungoverned processes as they are — so the new platform inherits the old estate's problems, now billed by the second.",
        ],
      },
      {
        heading: "Why remediation programmes don't drain it",
        paragraphs: [
          "Cleaning a swamp downstream is remediation without prevention: the same ungoverned ingestion that filled it keeps running every night. Regulators are unimpressed too — BCBS 239, DORA and GDPR ask for lineage and quality evidence at the point of creation, not a cleanup story after the fact.",
        ],
      },
      {
        heading: "Prevention: govern the door, not the lake",
        paragraphs: [
          "The alternative is contract-first ingestion. Schema, semantics, quality thresholds and ownership are agreed as ODCS data contracts before data lands, enforced record by record at ingestion, and registered in the catalog with full lineage. The swamp never forms because nothing enters ungoverned — and incremental streaming replaces the nightly reloads that made it expensive.",
        ],
      },
    ],
    takeaway: "A lakehouse is only as good as the data that reaches it — govern the door, not the lake.",
  },
  {
    slug: "data-contracts-explained",
    category: "Data contracts",
    title: "Data Contracts explained: governance that actually scales",
    standfirst:
      "Policies describe how data should behave. Data contracts make it behave that way — machine-readable agreements, enforced automatically on every record, at the point of ingestion. It is the difference between governance as documentation and governance as engineering.",
    sections: [
      {
        heading: "What a data contract is",
        paragraphs: [
          "A data contract is a versioned, machine-readable specification of a dataset: its schema, semantics, quality thresholds, ownership and service levels. Under the Open Data Contract Standard (ODCS), contracts are portable artefacts — reviewable like code, enforceable by machines, and meaningful to the business.",
          "Because the contract is executable, validation is not a periodic audit but a property of the pipeline: every record is compared to its contract before it lands, and exceptions are routed to a human for decision.",
        ],
      },
      {
        heading: "Why contracts scale where policies don't",
        paragraphs: [
          "Manual governance scales with people; contract enforcement scales with compute. Once a contract exists, it costs the same to enforce on the millionth record as the first. Ownership becomes explicit, quality becomes measurable, and lineage is generated as a by-product of execution rather than reconstructed afterwards.",
          "Contracts also create a shared, fully auditable language between business and technology: the business agrees what the data means and when it is good enough; engineering encodes it once; auditors read the evidence directly.",
        ],
      },
      {
        heading: "From contracts to data products",
        paragraphs: [
          "Contracts are the unit of governance; data products are the unit of consumption. A data product bundles governed, contract-validated data with its lineage, documentation and quality guarantees — discoverable in the catalog, versioned like software, and reusable by every downstream team. This is how governance stops slowing delivery and starts accelerating it.",
        ],
      },
    ],
    takeaway: "Governance as documentation fails at scale. Governance as an enforced contract compounds.",
  },
  {
    slug: "aml-kyc-data-problems-first",
    category: "Financial crime",
    title: "AML and KYC are data problems first",
    standfirst:
      "Financial-crime programmes are judged on outcomes — match rates, false positives, alerts you can defend to a regulator. But every one of those outcomes inherits the quality of the data beneath it. Before AML and KYC are analytics problems, they are data problems.",
    sections: [
      {
        heading: "Where investigations actually fail",
        paragraphs: [
          "Entity resolution is only as good as the records it receives. Fragmented customer data across core banking, payments and onboarding systems, inconsistent identifiers, stale watchlist copies and undocumented semantics all surface downstream as missed matches and false positives — at the most expensive point to fix, inside a live investigation.",
          "Regulators see it the same way: a suspicious-activity decision built on data with no lineage is a finding waiting to happen, however good the model that produced it.",
        ],
      },
      {
        heading: "The data foundation financial crime needs",
        paragraphs: [
          "Effective AML and KYC start with governed, entity-ready data products: sources fused and validated against ODCS contracts at ingestion, delivered field-mapped to the decision platform's data model, with full lineage from system of record to alert. Quality in, confidence out.",
          "Streaming matters as much as quality. Financial crime moves daily; nightly batch reloads mean screening yesterday's world. Incremental, governed ingestion keeps the decision platform current in hours, not cycles.",
        ],
      },
      {
        heading: "The payoff",
        paragraphs: [
          "Institutions that fix the data layer first report the outcomes the programme is actually measured on: higher match rates, fewer false positives, faster investigations and audit evidence generated as a by-product of the pipeline. The models did not change — the data underneath them did.",
        ],
      },
    ],
    takeaway: "Fix the data foundation first, and every financial-crime outcome built on it improves.",
  },
];
