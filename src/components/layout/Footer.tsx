import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { QBricksText } from "@/components/ui/QBricksText";

const columns = [
  {
    title: "Product",
    links: [
      ["Overview", "/product"],
      ["Solutions", "/solutions"],
      ["Integrations", "/integrations"],
      ["Why QBricks", "/why-qbricks"],
    ],
  },
  {
    title: "Use cases",
    links: [
      ["AML", "/solutions"],
      ["KYC / pKYC", "/solutions"],
      ["Fraud", "/solutions"],
      ["MDM & risk", "/solutions"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Resources", "/resources"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#040404] pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-q-brand/70 to-transparent" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-q-brand/[0.08] blur-[100px]" />

      <div className="container-x relative z-10">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="mb-6 flex items-center -ml-[0.6rem]">
              <Logo className="h-10 w-[160px] opacity-90" />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-q-gray-500">
              A.I.-enabled metadata management for your organisation. Built for governed, secure, auditable enterprise data.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="mb-5 font-black text-white">{column.title}</h4>
                <ul className="space-y-3 text-sm text-q-gray-400">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="transition-colors hover:text-white">
                        {label === "Why QBricks" ? (
                          <>
                            Why <QBricksText />
                          </>
                        ) : (
                          label
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-q-gray-600">&copy; {new Date().getFullYear()} Infinium Consulting B.V. All rights reserved.</p>
          <div className="flex items-center text-xs text-q-gray-600">
            <span>qbricks.ai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
