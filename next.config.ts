import type { NextConfig } from "next";

// STATIC_EXPORT=1 npm run build writes a plain HTML copy of the site to .next-export/,
// with deploy/siteground.htaccess copied in as .htaccess (scripts/copy-htaccess.mjs)
// for upload to the SiteGround host behind qbricks.ai. Vercel builds are unaffected.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = staticExport
  ? {
      output: "export",
      distDir: ".next-export",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
