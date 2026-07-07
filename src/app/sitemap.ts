import type { MetadataRoute } from "next";
import { whitepapers } from "./resources/whitepapers/data";
import { insights } from "./resources/insights/data";

const base = "https://qbricks.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/product",
    "/solutions",
    "/integrations",
    "/why-qbricks",
    "/resources",
    "/resources/cost-calculator",
    "/resources/10-reasons-why",
    "/resources/use-cases",
    "/resources/qbricks-databricks",
    "/resources/qbricks-fabric",
    "/resources/qbricks-snowflake",
    "/resources/qbricks-quantexa",
    "/resources/qbricks-cloudera",
    "/about",
    "/contact",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...whitepapers.map(({ slug }) => ({
      url: `${base}/resources/whitepapers/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insights.map(({ slug }) => ({
      url: `${base}/resources/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
