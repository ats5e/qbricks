"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { name: "Product", href: "/product" },
  { name: "Solutions", href: "/solutions" },
  { name: "Why QBricks", href: "/why-qbricks" },
  { name: "Integrations", href: "/integrations" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className={`flex items-center justify-between gap-4 rounded-full border px-3 py-2 pl-5 transition-all duration-300 sm:pl-6 ${
            scrolled || mobileMenuOpen
              ? "border-white/10 bg-black/70 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              : "border-white/[0.06] bg-white/[0.03] backdrop-blur-xl"
          }`}
        >
          <Link href="/" className="group flex shrink-0 items-center" aria-label="QBricks home">
            <Logo className="h-12 w-auto transition-transform group-hover:scale-[1.03] sm:h-14" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "text-white" : "text-q-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <a
              href="mailto:sales@infinium.consulting?subject=QBricks demo request"
              className="group inline-flex items-center gap-2 rounded-full bg-q-brand px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-q-brand-ember"
            >
              Request a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] p-2.5 text-white lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/85 p-4 backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                        isActive ? "bg-white/[0.06] text-white" : "text-q-gray-300 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <a
                href="mailto:sales@infinium.consulting?subject=QBricks demo request"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-q-brand px-5 py-3 text-sm font-bold text-white"
              >
                Request a demo <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
