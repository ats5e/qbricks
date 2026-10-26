import { pageMeta } from "@/lib/seo";
import { CopyPage, type CopyPageContent } from "../CopyPage";

export const metadata = pageMeta({
  title: "Agents on governed data",
  description:
    "Put the QBricks Agentic Crew, led by Stanley, to work, build agents of your own, or connect your governed data to the agentic platforms you already use through the QBricks API.",
  path: "/product/agents",
});

// Copy verbatim from David's "QBricks Website Copy – Agents" (25 Oct 2026).
const content: CopyPageContent = {
  crumb: "Agents",
  image: "/assets/brand/hero-agents.webp",
  headline: "Agents that work on governed data, not around it",
  subhead:
    "Put the QBricks Agentic Crew to work, build agents of your own, or connect your governed data to the agentic platforms you already use.",
  intro:
    "Agents are only as trustworthy as the data they act on. In financial services, an agent that reads an unchecked table or skips a control is a liability, not a productivity gain. QBricks gives agents a governed foundation: ODCS data contracts, quality scores and lineage on every dataset they touch, and a human in the loop wherever a decision matters.",
  sections: [
    {
      id: "crew",
      label: "The Agentic Crew, led by Stanley",
      headline: "Meet Stanley, and the crew that runs your data governance",
      subhead:
        "A team of AI agents built into QBricks that does the repetitive, specialist work of keeping data governed, so your people can focus on the decisions.",
      intro:
        "Governing data at a bank or insurer takes an army: analysts profiling sources, engineers building pipelines, data stewards writing rules, compliance teams mapping regulation. QBricks gives you a crew of agents that does much of that work from day one. Stanley leads the crew, assigning work, checking results and bringing your team in when a human decision is needed.",
    },
    {
      id: "build",
      label: "Build your own agents",
      headline: "Your processes. Your agents. Our guardrails.",
      subhead:
        "Build agents for the work only your institution does, on the same governed foundation, controls and audit trail as the QBricks crew.",
      intro:
        "Every institution has processes no off-the-shelf agent will understand: a reconciliation that follows your own rules, a review step unique to your risk framework, a report your regulator asks for in a particular way. QBricks lets you build agents for those processes without giving up control of the data they use.",
    },
    {
      id: "connect",
      label: "Connect your agent platform",
      headline: "Governed data for every agent you run",
      subhead:
        "Your customer-facing and operational agents may live on another platform. The QBricks API gives them data that has already passed its contract.",
      intro:
        "Many institutions are deploying agents on dedicated agentic platforms, such as Wonderful, for customer service across voice, chat and email, or for back-office workflows. Those agents are only as good as the answers behind them. When an agent quotes a balance, a fee or a claim status, that answer needs to come from data your institution can stand behind. QBricks is the governed layer between your systems of record and the agents that speak for you.",
    },
  ],
  next: { label: "Machine learning", href: "/product/machine-learning" },
};

export default function AgentsPage() {
  return <CopyPage content={content} />;
}
