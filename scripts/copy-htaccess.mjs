// Runs after `npm run build`. For STATIC_EXPORT=1 builds, copies the SiteGround
// .htaccess (HTTPS redirect, security headers) into .next-export/. It lives in
// deploy/ rather than public/ so Vercel doesn't serve it.
import { copyFileSync } from "node:fs";

if (process.env.STATIC_EXPORT === "1") {
  copyFileSync("deploy/siteground.htaccess", ".next-export/.htaccess");
  console.log("Copied deploy/siteground.htaccess to .next-export/.htaccess");
}
