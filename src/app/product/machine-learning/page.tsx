import { pageMeta } from "@/lib/seo";
import { CopyPage, type CopyPageContent } from "../CopyPage";

export const metadata = pageMeta({
  title: "Machine learning on governed data",
  description:
    "Train, score and explain models on contract-governed data without moving it. Use QBricks models, build your own in SQL, or take the data to the models you already trust with the Python SDK.",
  path: "/product/machine-learning",
});

// Copy verbatim from David's "QBricks Website Copy – Machine Learning" (25 Oct 2026).
const content: CopyPageContent = {
  crumb: "Machine learning",
  image: "/assets/brand/hero-ml.webp",
  headline: "Machine learning where your governed data already lives",
  subhead:
    "Train, score and explain models on contract-governed data, without moving it to another platform. Use our models, build your own in SQL, or take the data to the models you already trust.",
  intro:
    "Most machine learning projects in financial services stall long before the model. Data scientists wait for IT to design a data product, pull the data, test their models, find what is missing, and go back to IT to start the cycle again. Each loop is slow, and every extract drifts further from the lineage regulators expect. QBricks breaks the cycle with streaming data products that your data science teams can design and build themselves, so the time to test and iterate falls significantly. The same ODCS contracts, quality rules and lineage that govern your data also govern the features and predictions.",
  sections: [
    {
      id: "models",
      label: "Models out of the box",
      headline: "Production models, one SQL statement away",
      subhead:
        "Classification, regression and graph neural networks built into QBricks. Train and score where your data lives, with prediction sets that tell you how confident each answer is.",
      intro:
        "QBricks ships with a library of models built directly into EOS, the QBricks SQL engine. There is no separate ML platform to provision, no data to copy, and no notebook hand-off. Point a model at a governed query, and QBricks handles training, pre-processing and scoring in place.",
    },
    {
      id: "sql",
      label: "Build your own model with SQL",
      headline: "If you can write a query, you can build a model",
      subhead:
        "Turn any governed query into a trained model. No Python environment, no data extracts, no hand-off between analyst and data scientist.",
      intro:
        "The people who understand your data best are usually the ones writing SQL against it. QBricks puts model building in their hands. Write the query that defines your training set, choose an algorithm, and QBricks trains the model in place, on the same contract-governed data your reports already use.",
    },
    {
      id: "bring-your-own",
      label: "Bring your own models",
      headline: "Your models. Governed data.",
      subhead:
        "Use the QBricks Python SDK to pull contract-checked, quality-assured data products straight into the frameworks and proprietary models your data scientists already rely on. Your data science team can also design their own data products, with access and security governed by your organisation's own security protocols.",
      intro:
        "Most institutions have years invested in their own models: credit scorecards, fraud engines, pricing and risk models that have passed validation and earned trust. QBricks does not ask you to replace them. The QBricks Python SDK gives your data science teams direct, governed access to QBricks data, so every model starts from data that has already been approved and is ready for use.",
    },
  ],
  next: { label: "Explore Agents", href: "/product/agents" },
};

export default function MachineLearningPage() {
  return <CopyPage content={content} />;
}
