import Link from "next/link";

// The data products page moved to /data-products (it is a QBricks platform
// page, not a solution). A meta refresh keeps old links working on both
// Vercel and the static export, where config redirects are unsupported.
export const metadata = { robots: { index: false, follow: true } };

export default function MovedPage() {
  return (
    <main className="min-h-screen bg-white page-hero">
      <meta httpEquiv="refresh" content="0;url=/data-products" />
      <div className="container-x text-center">
        <p className="text-q-gray-700">
          This page has moved to{" "}
          <Link href="/data-products" className="font-semibold text-q-brand-deep underline">
            Data products
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
