export type FocusArea = {
  id: string;
  number: string;
  title: string;
  scope: string;
  value: string;
  oneLiner: string;
  intro: string;
  products: { name: string; text: string }[];
};

/* Order, titles, scopes, one-liners and value tags follow David's
   "Beyond KYC: five data products, ranked by value" summary slide.
   Intros and products are drawn from the October 2026 architecture papers. */
export const focusAreas: FocusArea[] = [
  {
    id: "risk-data",
    number: "01",
    title: "Risk data and regulatory reporting",
    scope: "BCBS 239 · COREP and FINREP · FRTB · DORA",
    value: "Regulatory",
    oneLiner: "One golden source of exposures feeds every report; avoids capital add-ons and fines.",
    intro:
      "Every return, from COREP and FINREP to AnaCredit and the DORA register, draws on the same counterparty, exposure, ledger, collateral and reference data. QBricks builds those as contracted data products once, checks every load against its contract, reconciles to the general ledger before a return is signed and freezes a snapshot at each reference date. Reporting platforms and risk engines stay where they are. Any figure can be traced to its source on the day it was filed, which is what BCBS 239 asks for.",
    products: [
      { name: "Critical data element register", text: "Owner, threshold and approved definition for every critical data element, linked to the report line it feeds." },
      { name: "Ledger to risk reconciliation", text: "Balances matched to the general ledger on every load; every break carries an owner, a reason and an age." },
      { name: "Reporting input set", text: "Every attribute a COREP or FINREP template needs, frozen at the reference date so a resubmission uses the original data." },
    ],
  },
  {
    id: "aml",
    number: "02",
    title: "AML transaction monitoring",
    scope: "Builds directly on the KYC data products",
    value: "Cost-out",
    oneLiner: "Cuts false positives, often by 30 to 60 percent, and analyst effort; enables perpetual KYC.",
    intro:
      "Monitoring is only as good as the population it sees. QBricks contracts the monitored transaction set and reconciles it to source on every load, so nothing is silently dropped. Resolved parties, feature aggregates and peer-group baselines are published as data products for the scenarios, scoring models and case tools to consume. Every threshold change, disposition and tuning run is kept as evidence. Fewer false positives, less analyst effort, and the same foundation that makes perpetual KYC possible.",
    products: [
      { name: "Monitored transaction set", text: "The complete population the scenarios see, with every exclusion recorded and justified." },
      { name: "Population reconciliation", text: "Counts tied from source feed to monitored set on every load, so a missing file is caught before an alert is missed." },
      { name: "Tuning evidence pack", text: "Thresholds, below-the-line samples and outcomes kept together as the model-risk evidence supervisors ask for." },
    ],
  },
  {
    id: "credit-risk",
    number: "03",
    title: "Credit risk and lending decisions",
    scope: "Early warning · IFRS 9 ECL · origination",
    value: "Loss and capital",
    oneLiner: "Lower losses, sharper provisioning, faster time to decision, capital efficiency.",
    intro:
      "Obligor, facility, collateral, arrears, financials and macro data are built once and reused from origination through IFRS 9 staging and IRB. QBricks leads where lineage and point-in-time evidence are the problem: any credit decision, stage allocation or PD estimate can be rebuilt as it stood on the day, from the same inputs, rules and model versions. Decision, rating and ECL engines keep their methods and receive data of known quality before they calculate.",
    products: [
      { name: "Affordability assessment", text: "Buffer and stress rate applied per policy version, with a result that can be reproduced for conduct review." },
      { name: "Obligor signal panel", text: "Early-warning signals per obligor, with versioned thresholds and missing sources flagged." },
      { name: "Stage allocation", text: "The trigger behind each IFRS 9 stage recorded, backstops applied and overrides justified." },
    ],
  },
  {
    id: "customer-360",
    number: "04",
    title: "Customer 360 and next-best-action",
    scope: "Cross-sell · churn · pricing · lifetime value",
    value: "Revenue",
    oneLiner: "The main revenue lever; value depends on front-office adoption.",
    intro:
      "One resolved customer, with households, holdings, interactions and consent, serves every model and channel. QBricks owns the contracted customer data products and the evidence layer; CRM, marketing automation and decisioning platforms stay in place and consume them. Consent, objections, suppressions and suitability are tested before any offer is ranked, and the answer on that date can be proven later. Value is measured, not assumed: control groups and an action log show what the front office did with each action.",
    products: [
      { name: "Customer golden record", text: "A single resolved customer with source keys, verified contact points and a history of every merge and split." },
      { name: "Permitted-use flag", text: "Whether the bank may act, derived from consent and objections by a stated rule, with the rule version on every row." },
      { name: "Propensity score", text: "A score per customer and product, with model id and version, computed only where permitted use is true." },
    ],
  },
  {
    id: "reference-data",
    number: "05",
    title: "Reference and market data",
    scope: "Security master · pricing · LEI hierarchies",
    value: "Cost and operations",
    oneLiner: "Lower data licence spend, fewer trade breaks; underpins areas 1 and 3.",
    intro:
      "Instruments, legal entities, prices, calendars, client static and vendor licences are mastered once and read by every discipline, engine and report. Each vendor file and registry extract is checked against its contract on arrival, before it reaches a golden copy. Every product is versioned and point in time, so a mark, a report or a licence declaration can be replayed with the reference data that applied on the day. Fewer trade breaks, lower licence spend, and the reference layer beneath areas 1 and 3.",
    products: [
      { name: "Instrument golden copy", text: "One record per instrument, with identifier, classification, currency and maturity checked on arrival." },
      { name: "Legal entity (resolved)", text: "One golden record per LEI, with registry id, country and group hierarchy." },
      { name: "Licence entitlement", text: "What each user and application may use under which licence, reconciled to usage for vendor audits and cost charge-back." },
    ],
  },
];
