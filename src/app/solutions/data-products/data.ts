export type UseCaseArea = {
  id: string;
  number: string;
  title: string;
  scope: string;
  value: string;
  oneLiner: string;
  support: string;
  related: { label: string; href: string }[];
  products: { name: string; text: string }[];
};

/* Order, titles, scopes, one-liners and value tags follow David's
   "Beyond KYC: five data products, ranked by value" slide (Oct 2026).
   Support text and products are drawn from his architecture papers and his
   "Data product focus areas" index. Use case 02 has no paper yet: its
   copy rests on the index and the slide only. */
export const useCases: UseCaseArea[] = [
  {
    id: "risk-data",
    number: "01",
    title: "Risk data and regulatory reporting",
    scope: "BCBS 239 · COREP and FINREP · FRTB · DORA",
    value: "Regulatory",
    oneLiner: "One golden source of exposures feeds every report, reducing the risk of capital add-ons and fines.",
    support:
      "Counterparty, exposure, ledger, collateral, reference and market data are built once as contracted data products and reused by every return, from COREP to AnaCredit. Every load is checked against its contract and reconciled to the general ledger before a return is signed, and each reference date is frozen, so any figure traces to its sources: the evidence BCBS 239 asks for. The same products carry the inputs for FRTB from 1 January 2027 and for the output floor, which reaches 72.5% in 2030. Your reporting platform and risk engines stay as they are.",
    related: [],
    products: [
      { name: "Critical data element register", text: "The owner, threshold and approved definition of every critical data element, linked to the report line it feeds." },
      { name: "Reporting input set", text: "The mandatory attributes for COREP and FINREP, frozen at the reference date, so a resubmission starts from the original snapshot." },
      { name: "Incident classification", text: "Each ICT incident scored against the DORA classification criteria within minutes, with major incidents flagged and a timestamp kept." },
    ],
  },
  {
    id: "aml",
    number: "02",
    title: "AML transaction monitoring",
    scope: "Builds directly on the KYC data products",
    value: "Cost reduction",
    oneLiner: "Cuts false positives, often by 30 to 60 percent, and analyst effort; enables perpetual KYC.",
    support:
      "The monitored transaction set is published as a contracted data product, with every exclusion registered, so your scenarios see the full population. Resolved parties, behaviour baselines and alert features sit alongside it for your scoring and case tools, and threshold changes, test samples and dispositions are kept as model-risk evidence.",
    related: [
      { label: "AML", href: "/solutions#aml" },
      { label: "KYC", href: "/solutions#kyc" },
      { label: "pKYC and AMLR", href: "/solutions#pkyc" },
    ],
    products: [
      { name: "Monitored transaction set", text: "The full population your scenarios run against, with every exclusion held in an exclusion register." },
      { name: "Alert feature vector", text: "The features behind each alert's triage score, held with the alert so the score can be explained." },
      { name: "Tuning evidence pack", text: "Thresholds, below-the-line test samples and outcomes kept together as model-risk evidence." },
    ],
  },
  {
    id: "credit-risk",
    number: "03",
    title: "Credit risk and lending decisions",
    scope: "Early warning · IFRS 9 ECL · origination",
    value: "Loss and capital",
    oneLiner: "Lower losses, sharper provisioning, faster time to decision and better capital efficiency.",
    support:
      "Obligor, facility, collateral, arrears, financials and macro data are built once as contracted data products, checked on every load and reused from origination through early warning, IFRS 9 and IRB. Your decision, rating and ECL engines keep their methods, and any credit decision, stage allocation or PD estimate can be rebuilt as it stood on the day, from the same inputs, rules and model versions.",
    related: [{ label: "Credit and ESG risk", href: "/solutions#credit-risk" }],
    products: [
      { name: "Affordability assessment", text: "Buffer and stress rate applied per policy version, with a result that can be reproduced." },
      { name: "Obligor signal panel", text: "Early-warning signals for every obligor, with versioned thresholds and missing sources flagged." },
      { name: "Stage allocation", text: "The trigger behind each IFRS 9 stage recorded, with backstops applied and overrides justified." },
    ],
  },
  {
    id: "customer-360",
    number: "04",
    title: "Customer 360 and next best action",
    scope: "Cross-sell · churn · pricing · lifetime value",
    value: "Revenue",
    oneLiner: "The main revenue lever: cross-sell, retention and pricing, with the uplift of every action measured.",
    support:
      "One resolved customer, with households, holdings, interactions and consent, is built as contracted data products that your CRM, marketing and decisioning platforms read. Consent, objections, suppressions and suitability are tested before any offer is ranked, and control groups and an action log measure the incremental value of each action.",
    related: [{ label: "Contextual MDM", href: "/solutions#mdm" }],
    products: [
      { name: "Customer golden record", text: "One resolved customer per person or business, with the survivorship rule recorded for every attribute." },
      { name: "Permitted-use flag", text: "Whether the bank may act for a given purpose, derived from consent and objections, with the rule version on every row." },
      { name: "Propensity score", text: "A score per customer and product, with model id and version, computed only where permitted use is true." },
    ],
  },
  {
    id: "reference-data",
    number: "05",
    title: "Reference and market data",
    scope: "Security master · pricing · LEI hierarchies",
    value: "Cost and operations",
    oneLiner: "Lower data licence spend and fewer trade breaks; the reference layer under use cases 1 and 3.",
    support:
      "Instruments, legal entities, prices, calendars, client static and vendor licences are mastered once as foundation data products. Each vendor file and registry extract is checked against its contract on arrival, before it reaches a golden copy, and every product is versioned point in time, so a mark or a report can be replayed with the reference data of the day.",
    related: [{ label: "Contextual MDM", href: "/solutions#mdm" }],
    products: [
      { name: "Instrument golden copy", text: "One record per instrument, with ISIN, CFI classification, currency and maturity checked on arrival." },
      { name: "End-of-day price", text: "One price per instrument per day, with the snapshot time inside the cut and stale prices flagged." },
      { name: "Entity hierarchy", text: "Parent and child links for every legal entity, with one ultimate parent, no cycles and GLEIF reporting exceptions carried." },
    ],
  },
];
