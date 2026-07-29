"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";
import { QBricksText } from "@/components/ui/QBricksText";

// Hosted form-backend endpoint (Formspree). The endpoint is a public URL (it
// lives in the plain-HTML form action), so it's safe to keep here. An env var
// can override it — but only if it's a valid absolute URL; anything malformed
// (empty string, a bare form id, whitespace) falls back to the known-good URL
// so a misconfigured env var can never break the form in production.
const DEFAULT_ENDPOINT = "https://formspree.io/f/xykrzyrr";
const ENV_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
const FORM_ENDPOINT =
  ENV_ENDPOINT && /^https?:\/\//.test(ENV_ENDPOINT) ? ENV_ENDPOINT : DEFAULT_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    // Honeypot: real users leave this empty; bots tend to fill every field.
    company_website: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company_website) return; // honeypot tripped — silently drop

    if (!FORM_ENDPOINT) {
      // Fallback so the button still works if the endpoint isn't configured yet.
      const subject = encodeURIComponent(`Demo request from ${formData.name} (${formData.company})`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:sales@infinium.consulting?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          _subject: `Demo request from ${formData.name} (${formData.company})`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "", company_website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-q-black selection:bg-q-brand/30 selection:text-white pb-24 relative overflow-hidden">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 pointer-events-none">
        <Image
          src="/assets/DubaiSkyline.png"
          alt="Dubai Skyline"
          fill
          className="object-cover object-bottom opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-q-black via-q-black/20 to-transparent" />
      </div>

      {/* Background Hero Effects */}
      <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,32,15,0.15),transparent_50%),linear-gradient(to_bottom,rgba(255,255,255,0.02),#000)]" />
      </div>

      <div className="container-x relative z-10 pt-40 md:pt-48">
        <div className="mb-16 text-center md:mb-24">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.9] tracking-tight text-white">
            Try <QBricksText /> on your data.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-q-gray-300">
            Book a 30-minute demo and we will show record-to-report on a representative dataset.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          
          {/* Left Column: Contact Info & Address */}
          <div className="flex flex-col gap-8">
            <div className="premium-card relative overflow-hidden p-8 md:p-10">
              <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-q-brand opacity-[0.08] blur-3xl" />
              
              <h2 className="mb-8 text-2xl font-black text-white">Our Offices</h2>
              
              <div className="mb-10 grid gap-7 text-q-gray-300">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 rounded-full bg-q-brand/10 p-2 text-q-brand-ember shadow-[0_0_10px_rgba(232,32,15,0.1)]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-1.5 leading-relaxed">
                    <h3 className="text-lg font-bold text-white mb-1">Amsterdam Office</h3>
                    <p className="text-sm text-q-gray-300">Infinium Consulting BV</p>
                    <p className="text-sm text-q-gray-300">Edge Olympic, Fred. Roeskestraat 115</p>
                    <p className="text-sm text-q-gray-300">Amsterdam, The Netherlands</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 rounded-full bg-q-brand/10 p-2 text-q-brand-ember shadow-[0_0_10px_rgba(232,32,15,0.1)]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-1.5 leading-relaxed">
                    <h3 className="text-lg font-bold text-white mb-1">Dubai Office</h3>
                    <p className="text-sm text-q-gray-300">Level 02, Innovation One</p>
                    <p className="text-sm text-q-gray-300">Dubai International Financial Centre, UAE</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 text-q-gray-300">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 rounded-full bg-q-brand/10 p-2 text-q-brand-ember shadow-[0_0_10px_rgba(232,32,15,0.1)]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:sales@infinium.consulting" className="text-sm font-medium transition-colors hover:text-white">
                    sales@infinium.consulting
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="premium-card p-8 md:p-10">
            <h2 className="mb-8 text-2xl font-black text-white">Send us a message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-q-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white transition-colors focus:border-q-brand/50 focus:bg-white/[0.05] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-bold text-q-gray-300">Company</label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white transition-colors focus:border-q-brand/50 focus:bg-white/[0.05] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-q-gray-300">Work Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white transition-colors focus:border-q-brand/50 focus:bg-white/[0.05] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-q-gray-300">How can we help?</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white transition-colors focus:border-q-brand/50 focus:bg-white/[0.05] focus:outline-none"
                />
              </div>

              {/* Honeypot — hidden from users, catches bots */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="company_website">Company website</label>
                <input
                  type="text"
                  id="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company_website}
                  onChange={(e) => setFormData({ ...formData, company_website: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-q-brand px-8 py-4 font-black text-white transition-all hover:bg-q-brand-ember hover:shadow-[0_0_30px_rgba(232,32,15,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
                <Send className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>

              {status === "success" && (
                <p role="status" className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Thanks — your message is on its way. We&apos;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="flex items-center gap-2 text-sm font-bold text-q-brand-ember">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  Something went wrong. Please try again, or email sales@infinium.consulting directly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
