import type { Metadata } from "next";

const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "QBricks, No more data pipelines." };

// Trim to a search-friendly length on a word boundary, never mid-word.
export function clip(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.–-]+$/, "")}…`;
}

// Per-page metadata: title, description, canonical URL and matching share
// previews (Open Graph / Twitter), so a shared link shows the page itself
// rather than the homepage. `title` goes through the "%s | QBricks" template
// unless `absolute` is set (pages whose title already leads with QBricks).
export function pageMeta({
  title,
  description,
  path,
  absolute = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
  type?: "website" | "article";
}): Metadata {
  title = title.replace(/\.$/, "");
  const full = absolute ? title : `${title} | QBricks`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { type, siteName: "QBricks", title: full, description, url: path, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: full, description, images: [OG_IMAGE.url] },
  };
}
