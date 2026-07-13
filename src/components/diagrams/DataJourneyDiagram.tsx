import type { LucideIcon } from "lucide-react";
import {
  ArrowLeftRight,
  Blocks,
  CalendarClock,
  CircleEllipsis,
  Cloud,
  CloudCog,
  CreditCard,
  Database,
  FileCheck2,
  FileSpreadsheet,
  Gauge,
  GitBranch,
  Grid2X2,
  Landmark,
  Layers3,
  Network,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Snowflake,
  Sparkles,
  TrendingUp,
  UserRoundCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import { QBricksText } from "@/components/ui/QBricksText";

type DiagramVariant = "manual" | "platform" | "qbricks";

type NodeItem = {
  icon: LucideIcon;
  subtitle?: string;
  title: string;
};

const systems: NodeItem[] = [
  { icon: Landmark, title: "Core Banking", subtitle: "Temenos · Flexcube" },
  { icon: ArrowLeftRight, title: "Payments", subtitle: "SWIFT · SEPA · Instant" },
  { icon: CreditCard, title: "Cards", subtitle: "Issuing · Processing" },
  { icon: TrendingUp, title: "Treasury & Trading", subtitle: "Murex · Calypso" },
  { icon: Users, title: "CRM & Onboarding", subtitle: "Salesforce · Dynamics" },
];

const aiUseCases: NodeItem[] = [
  { icon: SearchCheck, title: "AML" },
  { icon: UserRoundCheck, title: "KYC" },
  { icon: ShieldCheck, title: "Fraud" },
  { icon: FileCheck2, title: "Regulatory Reporting" },
];

const platformNodes: Record<DiagramVariant, NodeItem[]> = {
  manual: [
    { icon: Network, title: "Quantexa", subtitle: "Decision Intelligence" },
    { icon: Cloud, title: "Cloudera", subtitle: "Hybrid Data" },
    { icon: CircleEllipsis, title: "Others", subtitle: "Databricks · Fabric · Snowflake" },
  ],
  platform: [
    { icon: Network, title: "Quantexa", subtitle: "Decision Intelligence" },
    { icon: Cloud, title: "Cloudera", subtitle: "Hybrid Data" },
    { icon: CircleEllipsis, title: "Others", subtitle: "Decisioning · B.I. · M.L." },
  ],
  qbricks: [
    { icon: Layers3, title: "Databricks", subtitle: "Lakehouse" },
    { icon: Grid2X2, title: "Microsoft Fabric", subtitle: "OneLake" },
    { icon: Snowflake, title: "Snowflake", subtitle: "Data Cloud" },
    { icon: Network, title: "Quantexa", subtitle: "Decision Intelligence" },
    { icon: Cloud, title: "Cloudera", subtitle: "Hybrid Data" },
  ],
};

const diagramContent = {
  manual: {
    eyebrow: "The starting point",
    title: (
      <>
        Today: <span className="text-q-brand-ember">months or years</span>
        <br className="hidden md:block" /> before A.I. sees any quality data.
      </>
    ),
    description:
      "Spreadsheets and large teams sit between your systems of record and your platforms, ungoverned, manual and slow.",
    layerLabel: "The manual layer",
    layerTitle: "Excel and large teams of data professionals and analysts.",
    layerIcons: [FileSpreadsheet, Users],
    bullets: [
      { icon: ShieldAlert, text: "Poor governance" },
      { icon: CalendarClock, text: "Lengthy data processes" },
      { icon: ShieldAlert, text: "Error-prone, manual rework" },
      { icon: CalendarClock, text: "Months to build data sets" },
    ],
    timing: "months, not hours",
    connectorLabel: "Manual",
  },
  platform: {
    eyebrow: "Today",
    title: (
      <>
        The Data Management approach: <span className="text-q-brand-ember">months or years</span>
        <br className="hidden md:block" /> before A.I. sees any quality data.
      </>
    ),
    description:
      "Hand-built pipelines and heavy compute on the platforms themselves, engineering-led, costly and slow.",
    layerLabel: "The engineering layer",
    layerTitle: "Pipelines built on Databricks, Microsoft Fabric or Snowflake.",
    layerIcons: [Layers3, Grid2X2, Snowflake],
    bullets: [
      { icon: GitBranch, text: "Hand-built pipeline builds" },
      { icon: CloudCog, text: "Costly compute" },
      { icon: FileSpreadsheet, text: "Ungoverned notebooks" },
      { icon: CalendarClock, text: "Months or years to data sets" },
    ],
    timing: "months or years, not hours",
    connectorLabel: "Manual",
  },
  qbricks: {
    eyebrow: "The accelerator",
    title: (
      <>
        From system of record to A.I. use case,{" "}
        <span className="text-q-brand-ember">in hours.</span>
      </>
    ),
    description: (
      <>
        <QBricksText /> accelerates the platforms you already run, streaming governed, A.I.-ready data from
        your systems of record straight into production use cases.
      </>
    ),
    layerLabel: "Data Management Platform",
    layerTitle: "Governed, A.I.-ready data, in hours, not years.",
    layerIcons: [],
    bullets: [
      { icon: Workflow, text: "Automatic pipeline building" },
      { icon: Gauge, text: "Local compute" },
      { icon: Zap, text: "Lightning speed" },
      { icon: Database, text: "Materialised views" },
      { icon: Blocks, text: "Catalogue of catalogues" },
    ],
    timing: "production data in hours",
    connectorLabel: "Streaming",
  },
} satisfies Record<
  DiagramVariant,
  {
    bullets: Array<{ icon: LucideIcon; text: string }>;
    connectorLabel: string;
    description: React.ReactNode;
    eyebrow: string;
    layerIcons: LucideIcon[];
    layerLabel: string;
    layerTitle: string;
    timing: string;
    title: React.ReactNode;
  }
>;

export function DataJourneyDiagram({ variant }: { variant: DiagramVariant }) {
  const content = diagramContent[variant];
  const isQBricks = variant === "qbricks";

  return (
    <section
      id={`data-journey-${variant}`}
      className={`relative overflow-hidden border-y border-white/5 ${
        isQBricks ? "bg-[#030303]" : "bg-[#050507]"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isQBricks
            ? "bg-[radial-gradient(circle_at_48%_54%,rgba(232,32,15,0.13),transparent_28%)]"
            : "bg-[radial-gradient(circle_at_50%_46%,rgba(255,255,255,0.035),transparent_38%)]"
        }`}
      />
      <div className="container-x relative z-10 py-16 md:py-24">
        <div className="max-w-5xl">
          <p className={`eyebrow mb-5 ${isQBricks ? "" : "text-q-gray-500"}`}>{content.eyebrow}</p>
          <h2 className="text-[clamp(2.35rem,4.6vw,4.9rem)] font-black leading-[0.98] tracking-tight text-white">
            {content.title}
          </h2>
          <div className="mt-6 max-w-3xl text-lg leading-relaxed text-q-gray-300 md:text-xl">
            {content.description}
          </div>
        </div>

        <div className="mt-14 grid items-center gap-5 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_44px_minmax(260px,1.12fr)_44px_minmax(0,1fr)_44px_minmax(0,1fr)] lg:gap-3">
          <DiagramColumn label="Systems of record">
            {systems.map((item) => (
              <DiagramNode key={item.title} item={item} />
            ))}
          </DiagramColumn>

          <Connector label={content.connectorLabel} active={isQBricks} />

          <CoreLayer content={content} active={isQBricks} />

          <Connector active={isQBricks} />

          <DiagramColumn label="Your platforms">
            {platformNodes[variant].map((item) => (
              <DiagramNode key={item.title} item={item} />
            ))}
          </DiagramColumn>

          <Connector active={isQBricks} />

          <DiagramColumn label="A.I. use cases">
            {aiUseCases.map((item) => (
              <DiagramNode key={item.title} item={item} muted={!isQBricks} active={isQBricks} />
            ))}
          </DiagramColumn>
        </div>
      </div>
    </section>
  );
}

function DiagramColumn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div>
      <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-q-gray-500">{label}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function DiagramNode({
  active = false,
  item,
  muted = false,
}: {
  active?: boolean;
  item: NodeItem;
  muted?: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`flex min-h-[64px] items-center gap-3 rounded-2xl border px-3 py-2.5 transition-colors ${
        active
          ? "border-q-brand/45 bg-q-brand/[0.055]"
          : muted
            ? "border-white/[0.065] bg-white/[0.018] opacity-45"
            : "border-white/10 bg-white/[0.035]"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
          active
            ? "border-q-brand/50 bg-q-brand/[0.12] text-q-brand-ember"
            : "border-white/10 bg-white/[0.04] text-q-gray-300"
        }`}
      >
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-white">{item.title}</p>
        {item.subtitle ? (
          <p className="mt-1 truncate font-mono text-[0.6rem] tracking-wide text-q-gray-500">{item.subtitle}</p>
        ) : muted ? (
          <p className="mt-1 font-mono text-[0.6rem] tracking-wide text-q-gray-600">waiting on data</p>
        ) : null}
      </div>
    </div>
  );
}

function Connector({ active = false, label }: { active?: boolean; label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {label ? (
        <span className={`mb-2 text-[0.56rem] font-black uppercase tracking-[0.17em] ${active ? "text-q-brand-ember" : "text-q-gray-600"}`}>
          {label}
        </span>
      ) : null}
      <div className="relative h-12 w-px border-l border-dashed border-white/20 lg:h-px lg:w-full lg:border-l-0 lg:border-t">
        <span
          className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            active ? "bg-q-brand-ember shadow-[0_0_14px_rgba(255,58,38,0.9)]" : "bg-q-gray-500"
          }`}
        />
      </div>
    </div>
  );
}

function CoreLayer({
  active,
  content,
}: {
  active: boolean;
  content: (typeof diagramContent)[DiagramVariant];
}) {
  return (
    <div
      className={`relative rounded-[1.7rem] border p-5 shadow-[12px_12px_0_rgba(255,255,255,0.025),20px_20px_0_rgba(255,255,255,0.018)] md:p-6 ${
        active
          ? "border-q-brand bg-[#100708] shadow-[0_0_70px_rgba(232,32,15,0.14),12px_12px_0_rgba(232,32,15,0.055)]"
          : "border-white/15 bg-[#141419]"
      }`}
    >
      {active ? (
        <div className="mb-6">
          <QBricksText />
        </div>
      ) : (
        <div className="mb-6 flex gap-2">
          {content.layerIcons.map((Icon, index) => (
            <div key={index} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-q-gray-200">
              <Icon className="h-5 w-5" />
            </div>
          ))}
        </div>
      )}

      <p className={`text-[0.66rem] font-black uppercase tracking-[0.15em] ${active ? "text-q-brand-ember" : "text-q-gray-500"}`}>
        {content.layerLabel}
      </p>
      <h3 className="mt-3 text-[1.1rem] font-black leading-tight text-white md:text-xl">{content.layerTitle}</h3>

      <div className="my-5 h-px bg-white/10" />

      <div className="space-y-3">
        {content.bullets.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 text-sm text-q-gray-300">
            <Icon className={`h-4 w-4 shrink-0 ${active ? "text-q-brand-ember" : "text-q-brand"}`} />
            <span>{text}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 font-mono text-[0.62rem] tracking-wide text-q-gray-600">
        {active ? <Sparkles className="h-3.5 w-3.5 text-q-brand-ember" /> : <CalendarClock className="h-3.5 w-3.5" />}
        {content.timing}
      </div>
    </div>
  );
}
