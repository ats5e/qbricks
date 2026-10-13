import Link from "next/link";

// Briefly lived here; the page sits under Solutions. A meta refresh keeps the
// shared link working on Vercel and the static export (no config redirects there).
export const metadata = { robots: { index: false, follow: true } };

export default function MovedPage() {
  return (
    <main className="min-h-screen bg-white page-hero">
      <meta httpEquiv="refresh" content="0;url=/solutions/data-products" />
      <div className="container-x text-center">
        <p className="text-q-gray-700">
          This page has moved to{" "}
          <Link href="/solutions/data-products" className="font-semibold text-q-brand-deep underline">
            Data products
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
