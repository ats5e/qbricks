import type { LucideIcon } from "lucide-react";
import { Banknote, Database, Landmark, ShieldAlert, Users } from "lucide-react";

export type DataProduct = {
  name: string;
  grain: string;
  cadence: string;
  text: string;
  consumers: string;
};

export type FocusArea = {
  id: string;
  number: string;
  title: string;
  short: string;
  value: string;
  oneLiner: string;
  scope: string;
  icon: LucideIcon;
  intro: string;
  leads: string[];
  foundation: string[];
  disciplines: string[];
  products: DataProduct[];
  productCount: number;
};

export const focusAreas: FocusArea[] = [
  {
    id: "risk-data",
    number: "01",
    title: "Risk data and regulatory reporting",
    short: "Risk data & regulatory reporting",
    value: "Regulatory",
    oneLiner: "One golden source of exposures feeds every report; avoids capital add-ons and fines.",
    scope: "BCBS 239 · COREP and FINREP · FRTB · DORA",
    icon: Landmark,
    intro:
      "Every return, from COREP and FINREP to AnaCredit and the DORA register, draws on the same counterparty, exposure, ledger, collateral and reference data. QBricks builds those as contracted products once, checks every load against its ODCS contract, reconciles to the general ledger before a return is signed and freezes a snapshot at each reference date. Reporting platforms and risk engines stay where they are and read the products as tables. The result is the evidence BCBS 239 asks for: any figure traced to its source on the day it was filed.",
    leads: ["BCBS 239 and risk data", "DORA reporting"],
    foundation: ["Counterparty (resolved)", "Exposure and position", "Ledger and balance", "Collateral and guarantees", "Reference data", "Market data"],
    disciplines: [
      "BCBS 239 and risk data",
      "COREP and FINREP",
      "Large exposures",
      "Liquidity reporting",
      "Market risk and FRTB",
      "Credit RWA and output floor",
      "AnaCredit and IReF",
      "IRRBB",
      "DORA reporting",
    ],
    productCount: 36,
    products: [
      {
        name: "Critical data element register",
        grain: "per data element",
        cadence: "on change",
        text: "Owner, threshold and approved definition for every critical element, linked to the report line it feeds.",
        consumers: "Risk data office, audit, supervisor pack",
      },
      {
        name: "Ledger to risk reconciliation",
        grain: "per entity per day",
        cadence: "daily",
        text: "Balances matched within tolerance on every load; each break carries an owner, a reason and an age.",
        consumers: "Finance, risk reporting, audit",
      },
      {
        name: "Reporting input set",
        grain: "per exposure per reference date",
        cadence: "reference date",
        text: "Every mandatory DPM attribute present and the reference date frozen, so a resubmission uses the data of the original run.",
        consumers: "Regulatory reporting platform",
      },
      {
        name: "Incident classification",
        grain: "per incident",
        cadence: "minutes",
        text: "DORA criteria scored at triage with a timestamped major-incident flag, pre-filling the initial notification.",
        consumers: "ITSM, ICT risk, competent authority reports",
      },
    ],
  },
  {
    id: "aml",
    number: "02",
    title: "AML transaction monitoring",
    short: "AML transaction monitoring",
    value: "Cost-out",
    oneLiner: "Cuts false positives, often by 30 to 60 percent, and analyst effort; enables perpetual KYC.",
    scope: "Builds directly on the KYC data products",
    icon: ShieldAlert,
    intro:
      "Monitoring is only as good as the population it sees. QBricks contracts the monitored transaction set and reconciles it to source on every load, so nothing is silently dropped. Resolved parties, feature aggregates and peer-group baselines are published as data products that the scenarios, scoring models and case tools consume. Every threshold change, disposition and tuning run is kept as evidence. That is what cuts false positives and analyst effort, and it is the same foundation that makes perpetual KYC possible.",
    leads: ["Population completeness", "Model risk and evidence"],
    foundation: ["Party (resolved)", "Account and product", "Monitored transaction set", "Transaction network", "Reference data"],
    disciplines: [
      "Population completeness",
      "Scenarios and tuning",
      "Segments and behaviour",
      "Networks and mules",
      "Alert scoring",
      "Investigation and cases",
      "FIU reporting",
      "Payments monitoring",
      "Model risk and evidence",
    ],
    productCount: 36,
    products: [
      {
        name: "Monitored transaction set",
        grain: "per transaction",
        cadence: "daily",
        text: "The complete population the scenarios see, with every exclusion recorded and justified.",
        consumers: "Monitoring scenarios, model risk",
      },
      {
        name: "Population reconciliation",
        grain: "per source per day",
        cadence: "daily",
        text: "Counts tie from source feed to monitored set on every load, so a missing file is caught before an alert is missed.",
        consumers: "Financial crime operations, audit",
      },
      {
        name: "Alert feature vector",
        grain: "per alert",
        cadence: "on alert",
        text: "The features behind each triage score, with model id and version, so any disposition can be explained.",
        consumers: "Alert scoring, investigators",
      },
      {
        name: "Tuning evidence pack",
        grain: "per scenario per tuning run",
        cadence: "per run",
        text: "Thresholds, below-the-line samples and outcomes kept together as the model-risk evidence the regulator asks for.",
        consumers: "Model risk, validation, supervisor pack",
      },
    ],
  },
  {
    id: "credit-risk",
    number: "03",
    title: "Credit risk and lending decisions",
    short: "Credit risk & lending decisions",
    value: "Loss & capital",
    oneLiner: "Lower losses, sharper provisioning, faster time to decision, capital efficiency.",
    scope: "Early warning · IFRS 9 ECL · origination",
    icon: Banknote,
    intro:
      "Obligor, facility, collateral, arrears, financials and macro data are built once and reused from origination through IFRS 9 staging, IRB parameters and ESG reporting. QBricks leads where lineage and point-in-time evidence are the problem: any credit decision, stage allocation or PD estimate can be rebuilt as it stood on the day, from the same inputs, rules and model versions. Decision, rating and ECL engines keep their methods and receive data of known quality before they calculate.",
    leads: ["IFRS 9 staging and ECL", "IRB parameters"],
    foundation: ["Obligor (resolved)", "Facility and exposure", "Collateral", "Repayment and arrears", "Financials and bureau", "Reference and macro data"],
    disciplines: [
      "Origination and affordability",
      "Scoring and creditworthiness",
      "Collateral and valuation",
      "Connected obligors",
      "Early warning",
      "IFRS 9 staging and ECL",
      "IRB parameters",
      "Forbearance and NPL",
      "Climate and ESG risk",
    ],
    productCount: 36,
    products: [
      {
        name: "Affordability assessment",
        grain: "per application",
        cadence: "per decision",
        text: "Buffer and stress rate applied per policy version, with a reproducible result for conduct MI and the CCD2 file.",
        consumers: "Decision engine, conduct MI",
      },
      {
        name: "Obligor signal panel",
        grain: "per obligor per day",
        cadence: "daily",
        text: "Early-warning signals with coverage per obligor, versioned thresholds and missing sources flagged.",
        consumers: "Early-warning engine, credit officers",
      },
      {
        name: "Stage allocation",
        grain: "per exposure per date",
        cadence: "monthly",
        text: "The trigger behind each IFRS 9 stage recorded, backstops applied and overrides justified.",
        consumers: "ECL engine, FINREP, disclosures",
      },
      {
        name: "Default event register",
        grain: "per obligor per default",
        cadence: "monthly",
        text: "One definition of default, with triggers, dates and cures and no gaps, feeding PD and LGD models.",
        consumers: "PD and LGD models, validation",
      },
    ],
  },
  {
    id: "customer-360",
    number: "04",
    title: "Customer 360 and next-best-action",
    short: "Customer 360 & next-best-action",
    value: "Revenue",
    oneLiner: "The main revenue lever; value depends on front-office adoption.",
    scope: "Cross-sell · churn · pricing · lifetime value",
    icon: Users,
    intro:
      "One resolved customer, with households, holdings, interactions and consent, serves every model and channel. QBricks owns the contracted customer products and the evidence layer; CRM, marketing automation and decisioning platforms stay in place and consume them. Consent, objections, suppressions and suitability are tested before any offer is ranked, and the answer on that date can be proven later. Value is measured rather than assumed: control groups and an action log show what the front office actually did with each action.",
    leads: ["Golden record and identity", "Consent and permitted use"],
    foundation: ["Customer (resolved)", "Relationship graph", "Account and holding", "Interaction event", "Consent and preference", "Reference data"],
    disciplines: [
      "Golden record and identity",
      "Households and hierarchies",
      "Holdings and balances",
      "Interactions and journeys",
      "Consent and permitted use",
      "Propensity and next-best-action",
      "Churn and retention",
      "Pricing, profitability, CLV",
      "Suitability and fair treatment",
    ],
    productCount: 36,
    products: [
      {
        name: "Customer golden record",
        grain: "per customer",
        cadence: "seconds to daily",
        text: "A single resolved customer with source keys, verified contact points and a history of every merge and split.",
        consumers: "Every channel, model and report",
      },
      {
        name: "Permitted-use flag",
        grain: "per customer per purpose",
        cadence: "milliseconds",
        text: "Derived from consent and objections by a stated rule, with the rule version on every row.",
        consumers: "Decisioning, campaigns, CRM",
      },
      {
        name: "Propensity score",
        grain: "per customer per product",
        cadence: "daily",
        text: "A score with model id and version, computed only where permitted use is true.",
        consumers: "Decisioning engine, advisers",
      },
      {
        name: "Customer lifetime value",
        grain: "per customer per month",
        cadence: "monthly",
        text: "Margin, retention curve and discount rate referenced, with the model version recorded.",
        consumers: "Decisioning, retention, acquisition",
      },
    ],
  },
  {
    id: "reference-data",
    number: "05",
    title: "Reference and market data",
    short: "Reference & market data",
    value: "Cost & ops",
    oneLiner: "Lower data licence spend, fewer trade breaks; underpins areas 1 and 3.",
    scope: "Security master · pricing · LEI hierarchies",
    icon: Database,
    intro:
      "Instruments, legal entities, prices, calendars, client static and vendor licences are mastered once as foundation products and read by every discipline, engine and report. EOS checks each vendor file and registry extract against its ODCS contract on arrival, before it reaches a golden copy or a consumer. Every product is versioned and point in time, so a mark, a report or a licence declaration can be replayed with the reference data that applied on the day. Fewer trade breaks, lower licence spend, and the reference layer underneath areas 1 and 3.",
    leads: ["Reporting reference", "Market data licensing", "ESG reference data"],
    foundation: ["Instrument", "Legal entity (resolved)", "Price and valuation point", "Calendars and codes", "Client static and SSI", "Vendor feed and licence"],
    disciplines: [
      "Security master",
      "Legal entity and hierarchy",
      "Pricing and IPV",
      "Corporate actions",
      "Benchmarks and indices",
      "Client static and SSIs",
      "Reporting reference",
      "Market data licensing",
      "ESG reference data",
    ],
    productCount: 36,
    products: [
      {
        name: "Instrument golden copy",
        grain: "per instrument",
        cadence: "intraday",
        text: "One record per instrument with valid ISIN, CFI classification, currency and maturity checked on arrival.",
        consumers: "Trading, booking, risk, reporting",
      },
      {
        name: "Legal entity (resolved)",
        grain: "per resolved entity",
        cadence: "daily",
        text: "One golden record per LEI with registry id, country and hierarchy, resolved where Quantexa is in place.",
        consumers: "Credit, KYC, reporting, limits",
      },
      {
        name: "End-of-day price",
        grain: "per instrument per day",
        cadence: "daily",
        text: "A price hierarchy across venues, vendors and models, with stale-price rules by asset class, as the IPV input.",
        consumers: "IPV, valuation, risk",
      },
      {
        name: "Licence entitlement",
        grain: "per vendor, dataset and term",
        cadence: "daily",
        text: "What each user and application may use under which licence, reconciled to usage for vendor audits and cost charge-back.",
        consumers: "Market data operations, finance, vendor audits",
      },
    ],
  },
];
