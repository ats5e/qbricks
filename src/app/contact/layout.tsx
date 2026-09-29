import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Talk to the QBricks team. Bring a representative workload and we will show you where QBricks helps, where it does not, and what adoption would require.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
