export type Whitepaper = {
  slug: string;
  category: string;
  title: string;
  standfirst: string;
  stats: { value: string; label: string }[];
  pointsTitle: string;
  points: { title: string; text: string }[];
  solutionTitle: string;
  solutionText: string;
  quote: string;
  tagline: string;
  scene: "lineage" | "governance" | "aiready" | "contracts" | "integrations";
  sceneBadge: string;
  sceneLogo?: string;
  sceneLogoAlt?: string;
  pdf: string;
};

export const whitepapers: Whitepaper[] = [
  {
    slug: "ai-compute-numbers",
    category: "AI Economics / Enterprise Data",
    title: "Why the numbers on the AI revolution don't add up.",
    standfirst:
      "The sharpest skepticism about AI economics is now coming from inside the world's largest institutions. J.P. Morgan analysts have modelled the AI infrastructure buildout and concluded that earning a 10% return on it would require roughly $650 billion of annual revenue, in perpetuity. The institutions writing the largest cheques are asking the hardest question: where does the return come from?",
    stats: [
      { value: "$650B", label: "annual revenue required for a 10% return on the AI buildout" },
      { value: "$400B+", label: "hyperscaler capex in 2025, heading toward $700B" },
      { value: "100×", label: "the compute reasoning models can need over single-shot inference" },
    ],
    pointsTitle: "Why the maths breaks",
    points: [
      { title: "Compute demand compounds, revenue doesn't", text: "Reasoning models can need over 100× the compute of single-shot inference, and one agentic workflow can trigger dozens of calls. Falling unit prices drive heavier usage, total spend keeps rising even as each query gets cheaper." },
      { title: "The spend is variable, the value is not", text: "Compute bills scale with every pipeline, reload and experiment. Business value arrives in a handful of proven use cases. When cost grows linearly and value doesn't, the gap widens with adoption, the opposite of what the board was promised." },
      { title: "Most compute feeds preparation, not intelligence", text: "Years of platform and pipeline work precede any AI value. In most enterprises the majority of \"AI spend\" is really data ingestion, cleaning and reprocessing, billed by the second." },
      { title: "Bad data multiplies the bill", text: "Every ungoverned dataset consumed by a model is compute spent twice: once ingesting it, again correcting what it produced. AI built on untrusted data doesn't just fail to return, it actively compounds the cost of failure." },
    ],
    solutionTitle: "Making the numbers add up: fix the denominator",
    solutionText:
      "You cannot control what hyperscalers spend, but you can control your own equation. The return on AI is value divided by the cost of trusted data, and that denominator is where QBricks works. Automated, streaming ingestion moves only incremental change, ending the full reloads that dominate compute bills. Every record is validated against an ODCS data contract before it lands, registered in the governance catalog, auditable before and after, with a human in the loop. And because QBricks runs natively on Databricks, Microsoft Fabric and Snowflake with local compute options, heavy ingestion work can run at fixed cost on infrastructure you own.",
    quote: "The problem is not the AI solution you are trying to implement. It is the quality of your data.",
    tagline: "QBricks: automated, governed, incremental ingestion, from system of record to lakehouse in hours.",
    scene: "aiready",
    sceneBadge: "Q Agent",
    pdf: "/whitepapers/ai-compute-numbers.pdf",
  },
  {
    slug: "ai-environmental-cost",
    category: "ESG / Sustainable Data Platforms",
    title: "The environmental cost of AI is an ESG problem.",
    standfirst:
      "Every AI initiative now carries an environmental line item. Data centres already consume a measurable share of global electricity, and the AI buildout is driving that demand sharply upward. For enterprises with net-zero commitments and CSRD-grade reporting obligations, Scope 2 and 3 emissions from cloud compute are no longer a footnote, they are a disclosure.",
    stats: [
      { value: "Scope 2+3", label: "cloud compute emissions are now disclosure-grade" },
      { value: "0", label: "new information produced by a nightly full reload" },
      { value: "Per-source", label: "attributable, auditable footprint per contract" },
    ],
    pointsTitle: "How QBricks cuts the footprint",
    points: [
      { title: "Process only what changed", text: "QBricks streams incremental change from the system of record. The nightly full reload, the largest recurring waste of energy in most data estates, is eliminated, so compute (and its emissions) scales with business change, not data volume." },
      { title: "Stop waste at the door", text: "Every record is validated against an ODCS data contract at ingestion. Bad data is rejected before it consumes downstream compute, no energy spent processing, storing and correcting records that were never fit for use." },
      { title: "Ingest once, reuse everywhere", text: "One automated, governed ingestion process replaces thousands of notebooks and duplicate pipelines. Trusted data, registered in the catalog with full lineage, is found and reused, not re-ingested by every team that needs it." },
      { title: "Measurable, auditable, reportable", text: "Because ingestion runs as one auditable process, compute consumption is attributable per source and per contract. That gives ESG teams a defensible number for the data platform's footprint, and evidence it is falling." },
    ],
    solutionTitle: "The same discipline that cuts the bill cuts the carbon",
    solutionText:
      "The environmental debate focuses on model training, but in the enterprise the quieter drain is the data machinery underneath: nightly pipelines that reload entire tables, defective records processed through Bronze, Silver and Gold, duplicate copies ingested by teams who couldn't find the first one. Governed, incremental ingestion is not a trade-off between AI ambition and sustainability commitments, it is the mechanism that lets both stand in the same annual report.",
    quote: "The greenest compute is the compute you never spend.",
    tagline: "QBricks: automated, governed, incremental ingestion, from system of record to lakehouse in hours.",
    scene: "governance",
    sceneBadge: "Auditable",
    pdf: "/whitepapers/ai-environmental-cost.pdf",
  },
  {
    slug: "stuck-at-bronze",
    category: "Banking / Data Engineering",
    title: "Are you stuck at the Bronze layer when implementing Databricks?",
    standfirst:
      "Most banks adopt the medallion architecture with confidence: land raw data in Bronze, refine it to Silver, serve trusted Gold. Then reality arrives. Two years in, the lakehouse holds terabytes of raw extracts, a handful of hand-built pipelines, and almost nothing the business can trust. The problem is not Databricks. It is how the data gets there.",
    stats: [
      { value: "100s", label: "of systems of record a bank must ingest" },
      { value: "2 years", label: "in, with almost nothing the business can trust" },
      { value: "Hours", label: "from system of record to lakehouse, not quarters" },
    ],
    pointsTitle: "Five reasons banks stall",
    points: [
      { title: "Hand-built pipelines don't scale", text: "A bank has hundreds of systems of record. Building each pipeline by hand, one notebook, one engineer, one quarter at a time, means the backlog grows faster than the team can deliver." },
      { title: "Governance is bolted on, not built in", text: "BCBS 239, DORA and GDPR demand lineage, quality evidence and auditability. When ungoverned data lands first and controls come later, every dataset needs remediation before it can leave Bronze." },
      { title: "Source knowledge lives in silos", text: "Core banking, payments and risk systems carry decades of undocumented semantics. Without agreed definitions, Silver becomes a negotiation between engineering and the business, and it rarely ends." },
      { title: "Batch thinking in a streaming world", text: "Nightly full loads reprocess everything to change almost nothing. Costs climb, SLAs slip, and incremental change, the thing regulators and ML models actually need, is lost in the reload." },
      { title: "Quality is discovered downstream", text: "Defects surface in a regulatory report or an AI model, weeks after ingestion, at the most expensive point to fix. Without record-level validation at entry, Bronze becomes a landfill, and every AI initiative built on it inherits the mess." },
    ],
    solutionTitle: "The way out: contract-first ingestion",
    solutionText:
      "Banks that escape Bronze invert the model. Instead of landing raw data and cleaning it later, they agree the rules first, as machine-readable data contracts under the Open Data Contract Standard (ODCS), and validate every record against them at ingestion. Governance stops being remediation and becomes the pipeline itself: schema, quality thresholds, ownership and lineage are enforced before data lands, registered in Unity Catalog, with a human always in the loop for exceptions. Automated, streaming ingestion replaces the hand-built backlog, so incremental change flows from system of record to lakehouse in hours, not quarters.",
    quote: "The problem is not the AI solution you are trying to implement. It is the quality of your data.",
    tagline: "QBricks ingests from system of record to governed lakehouse, automated, auditable, ODCS-native on Databricks.",
    scene: "contracts",
    sceneBadge: "ODCS",
    sceneLogo: "/assets/partners/Databricks.png",
    sceneLogoAlt: "Databricks",
    pdf: "/whitepapers/stuck-at-bronze.pdf",
  },
  {
    slug: "cfo-compute-cost",
    category: "Finance / Data Platform Economics",
    title: "The CFO is waking up to the cost of compute.",
    standfirst:
      "Cloud data platforms were sold on elasticity: pay only for what you use. The CFO is now discovering what \"what you use\" actually means, a variable cost that grows with every pipeline, every reload and every new AI initiative, with no natural ceiling. When the unit cost of serving the business rises faster than revenue, the business model itself is at risk.",
    stats: [
      { value: "No ceiling", label: "on variable compute spend that nobody signed off" },
      { value: "1000s", label: "of ungoverned notebooks, each billing by the second" },
      { value: "Fixed cost", label: "for heavy ingestion on infrastructure you own" },
    ],
    pointsTitle: "Four strategies to cap it, and how QBricks delivers each",
    points: [
      { title: "Pay for change, not for volume", text: "QBricks streams incremental change from the system of record. Compute scales with what actually changed today, not with the size of tables you already hold. The nightly full reload, the largest single line on most compute bills, disappears." },
      { title: "Reject bad data before it costs anything", text: "Every record is validated against an ODCS data contract at ingestion, with a human in the loop for exceptions. Defects are stopped at the door instead of being reprocessed through Bronze, Silver and Gold at your expense." },
      { title: "Replace notebooks with one governed factory", text: "Automated ingestion replaces thousands of hand-built pipelines, and the engineering armies that maintain them. One auditable process, one place to measure cost, ingested once and reused by everyone." },
      { title: "Put compute where it's cheapest", text: "QBricks runs natively on Databricks, Microsoft Fabric and Snowflake, with local compute options for heavy ingestion work. Validation can run on infrastructure you own at fixed cost, so premium platform compute is reserved for the analytics that earn revenue." },
    ],
    solutionTitle: "Change the shape of the cost curve",
    solutionText:
      "The driver is rarely the analytics the business consumes. It is the machinery behind it: hand-built pipelines that reload entire tables nightly, bad data reprocessed three layers deep, thousands of ungoverned notebooks and duplicate copies of the same source. The financial outcome of governed ingestion is a change in the shape of the cost curve, not just its level: a governed, predictable process whose cost tracks business change, auditable line by line, instead of an open-ended variable spend that compounds with every new use case.",
    quote: "Make compute a controlled cost, not a variable one.",
    tagline: "QBricks: automated, governed, incremental ingestion, from system of record to lakehouse in hours.",
    scene: "lineage",
    sceneBadge: "Auditable",
    pdf: "/whitepapers/cfo-compute-cost.pdf",
  },
  {
    slug: "fabric-compute",
    category: "Microsoft Fabric / Data Platforms",
    title: "The challenges when implementing Microsoft Fabric, and the hidden cost of compute.",
    standfirst:
      "Fabric's promise is seductive: one SaaS platform, one copy of data in OneLake, one bill. But the unit on that bill, the Capacity Unit, behaves like nothing your finance team has priced before. Every notebook, pipeline, refresh and query draws from the same shared pool, and the true cost of a workload only becomes visible after it has already throttled everyone else.",
    stats: [
      { value: "1 pool", label: "of Capacity Units shared by every workload" },
      { value: "2×", label: "the cost at every F-SKU upgrade step" },
      { value: "24h", label: "smoothing that defers consumption, not cancels it" },
    ],
    pointsTitle: "Five challenges that surface after go-live",
    points: [
      { title: "One capacity, every workload", text: "Pipelines, Spark jobs, warehouses and Power BI all consume the same Capacity Units. A single runaway notebook can throttle the CFO's dashboards, and nobody owns the collision." },
      { title: "Smoothing hides the true bill", text: "Bursting and 24-hour smoothing defer consumption rather than cancel it. Teams discover on Monday that Friday's backfill has mortgaged the capacity, and interactive users pay the throttling penalty." },
      { title: "Sizing is a guess, upgrades are a doubling", text: "F-SKUs scale in powers of two. When an F64 runs hot, the next step is an F128 at twice the cost, a blunt instrument for what is usually one inefficient pipeline." },
      { title: "Full reloads burn the pool", text: "Hand-built pipelines default to reprocessing whole tables. In a capacity model, every unnecessary full load is compute you have already bought being spent to produce nothing new." },
      { title: "Governance lags the workspaces", text: "Fabric makes it effortless to create workspaces, lakehouses and shortcuts, far faster than data owners can define contracts, quality rules and lineage. OneLake fills with ungoverned copies whose ingestion cost recurs every day." },
    ],
    solutionTitle: "The way out: spend compute only on governed change",
    solutionText:
      "In a capacity-priced platform, the cheapest record is the one you never reprocess. The organisations that keep Fabric affordable ingest incrementally, streaming only what changed, and validate every record against a machine-readable data contract (ODCS) before it lands, so bad data never consumes downstream Capacity Units at all. Schema, quality thresholds, ownership and lineage are enforced at the point of entry, with a human in the loop for exceptions. Compute stops being an open tap and becomes an auditable line item: every Capacity Unit spent maps to a governed, incremental change.",
    quote: "Stop paying to reprocess data you already trust.",
    tagline: "QBricks ingests from system of record to governed lakehouse, streaming, incremental, ODCS-native, running natively on Microsoft Fabric.",
    scene: "integrations",
    sceneBadge: "Capacity",
    sceneLogo: "/assets/partners/Fabric.png",
    sceneLogoAlt: "Microsoft Fabric",
    pdf: "/whitepapers/fabric-compute.pdf",
  },
  {
    slug: "new-paradigm",
    category: "Platform Architecture / Compute Economics",
    title: "A new paradigm in data management.",
    standfirst:
      "The prevailing answer to slow data platforms has been the same for a decade: add nodes. Bigger clusters, larger capacities, more parallelism, infrastructure scaled to survive the nightly peak of reloading everything, then sitting idle the rest of the day. QBricks starts from the opposite premise: the work itself is wrong. Move only what changed, validate it before it lands, and the cluster you were about to double becomes a cluster you no longer need.",
    stats: [
      { value: "0", label: "nightly batch peak left to size clusters for" },
      { value: "1", label: "governed process replacing thousands of pipelines" },
      { value: "Fixed", label: "cost for validation on compute you already own" },
    ],
    pointsTitle: "Where the servers go",
    points: [
      { title: "Streaming replaces the batch peak", text: "Clusters are sized for the worst hour of the night, the full reload window. QBricks streams incremental change continuously, so there is no peak to size for. A small, steady flow needs a fraction of the nodes a nightly avalanche does." },
      { title: "Validation runs on local compute", text: "Record-level contract validation, the heavy, repetitive work of ingestion, doesn't need premium lakehouse clusters. QBricks runs it on local compute you already own, at fixed cost, applying each platform's security standards." },
      { title: "One process replaces thousands of pipelines", text: "Every hand-built notebook carries its own cluster, schedule and idle time. One automated, governed ingestion process consolidates that sprawl, fewer jobs, fewer clusters, no duplicate copies of the same source." },
      { title: "Bad data never reaches paid compute", text: "Records that fail their ODCS data contract are stopped at ingestion, with a human in the loop. Downstream nodes never process, store or re-correct data that was never fit for use, work that today silently inflates every cluster." },
    ],
    solutionTitle: "The paradigm shift",
    solutionText:
      "The old model scales infrastructure to tolerate ungoverned work: more nodes, bigger SKUs, taller bills. The new model governs the work so the infrastructure can shrink: incremental by default, validated at the point of entry, ingested once and reused everywhere, with the heaviest processing on the cheapest compute. QBricks runs this natively on Databricks, Microsoft Fabric and Snowflake, auditable end to end, before and after files, agents isolated from the data lake. The result is a platform whose footprint tracks business change, not data volume, and a compute bill that finally has a ceiling.",
    quote: "Don't scale the cluster. Shrink the work.",
    tagline: "QBricks: automated, governed, incremental ingestion, from system of record to lakehouse in hours.",
    scene: "integrations",
    sceneBadge: "Local compute",
    pdf: "/whitepapers/new-paradigm.pdf",
  },
  {
    slug: "shift-right",
    category: "Data Product Strategy",
    title: "Shift the system of record right.",
    standfirst:
      "Your operational systems were never built to answer questions. Stop treating them as where truth lives. Every analytical, AI and regulatory workload in your enterprise re-extracts and re-interprets the same source systems, thousands of pipelines, each a private, ungoverned copy of the truth. The fix is not more pipelines. It is to publish truth as governed data products in the lakehouse, and let that become the record your enterprise actually consumes.",
    stats: [
      { value: "1", label: "governed publication replacing a thousand private extractions" },
      { value: "Right", label: "of the contract boundary is where the record now lives" },
      { value: "Hours", label: "from system of record to governed lakehouse" },
    ],
    pointsTitle: "Why the status quo is the risk",
    points: [
      { title: "Semantic drift", text: "\"Shift left\" told producers to fix quality at the source. A decade on, every notebook still re-derives \"customer\" and \"revenue\" differently. There is no record, only copies, each drifting from the last." },
      { title: "The source can't be fixed", text: "The operational systems haven't changed because they can't: optimised for transactions, owned by vendors, frozen by process. Asking them to become the analytical record was always going to fail." },
      { title: "Ungoverned sprawl", text: "Meanwhile consumption exploded rightward, BI, ML, agents, regulators. Each stands up its own extract. Lineage ends at the extract, and audit becomes archaeology." },
      { title: "AI on sand", text: "Every model reads one of these private copies. The problem is not the AI solution you are trying to implement, it is the quality of the data beneath it." },
    ],
    solutionTitle: "The operating model: the record moves right",
    solutionText:
      "A data product is a versioned, contract-bound publication: schema, semantics, quality thresholds and ownership agreed up front in an Open Data Contract Standard (ODCS) contract, enforced on every streaming record, with a human in the loop on every exception. Once the contract holds, the product is more trustworthy than any private read of the source, so the system of record has shifted right, past the contract boundary and into the lakehouse. The ERP still captures transactions; the data product becomes the record everyone reads. For the CDO, three things change: you fund named data products with contracts and SLAs instead of point-to-point pipelines; governance moves into the flow, enforced at the boundary on every incremental change rather than inspected after the fact; and audit becomes a property of construction, before-and-after files, lineage and versioned contracts make the shifted record defensible to any regulator.",
    quote: "The ERP still captures transactions. The data product becomes the record everyone reads.",
    tagline: "QBricks: automated, governed, incremental ingestion, one publication that replaces a thousand private extractions.",
    scene: "contracts",
    sceneBadge: "Contract boundary",
    pdf: "/whitepapers/Shift-Right.pdf",
  },
];
