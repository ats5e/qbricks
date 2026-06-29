"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sales@infinium.consulting?subject=${subject}&body=${body}`;
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
            Try <span className="text-q-brand-ember font-bold">Q</span><span className="font-normal text-white">Bricks</span> on your data.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-q-gray-300">
            Book a 30-minute demo and we will show record-to-report on a representative dataset.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          
          {/* Left Column: Contact Info & Address */}
          <div className="flex flex-col gap-8">
            <div className="premium-card relative overflow-hidden p-8 md:p-10">
              <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-q-brand opacity-[0.08] blur-3xl" />
              
              <h2 className="mb-8 text-2xl font-black text-white">Our Offices</h2>
              
              <div className="mb-10 grid gap-8 md:grid-cols-2 text-q-gray-300">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 rounded-full bg-q-brand/10 p-2 text-q-brand-ember shadow-[0_0_10px_rgba(232,32,15,0.1)]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-1.5 leading-relaxed">
                    <h3 className="text-lg font-bold text-white mb-1">Dubai Office</h3>
                    <p className="text-sm text-q-gray-300">Level 02, Innovation One</p>
                    <p className="text-sm text-q-gray-300">Dubai International Financial Centre</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 rounded-full bg-q-brand/10 p-2 text-q-brand-ember shadow-[0_0_10px_rgba(232,32,15,0.1)]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-1.5 leading-relaxed">
                    <h3 className="text-lg font-bold text-white mb-1">Amsterdam Office</h3>
                    <p className="text-sm text-q-gray-300">Edge Olympic, Fred. Roeskestraat 115</p>
                    <p className="text-sm text-q-gray-300">Amsterdam</p>
                  </div>
                </div>
              </div>

              <div className="mb-10 flex flex-col gap-5 text-q-gray-300">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 rounded-full bg-q-brand/10 p-2 text-q-brand-ember shadow-[0_0_10px_rgba(232,32,15,0.1)]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:sales@infinium.consulting" className="text-sm font-medium transition-colors hover:text-white">
                    sales@infinium.consulting
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="shrink-0 rounded-full bg-q-brand/10 p-2 text-q-brand-ember shadow-[0_0_10px_rgba(232,32,15,0.1)]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+310646627480" className="text-sm font-medium transition-colors hover:text-white">
                    +31 (0) 646627480
                  </a>
                </div>
              </div>

              {/* DIFC SVG Graphic */}
              <div className="relative mt-auto pt-8 border-t border-white/10">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-q-gray-500">DIFC Innovation Hub</p>
                <div className="relative h-48 w-full rounded-2xl border border-white/5 bg-gradient-to-tr from-white/[0.02] to-white/[0.05] p-6 shadow-[inset_0_2px_20px_rgba(255,255,255,0.02)] overflow-hidden">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />
                  
                  {/* DIFC Abstract Skyline SVG */}
                  <svg className="absolute bottom-0 left-1/2 w-[110%] -translate-x-1/2 text-q-gray-400 opacity-70 mix-blend-plus-lighter" viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Gate Building */}
                    <path d="M160 140V30H240V140M175 140V45H225V140" stroke="currentColor" strokeWidth="2.5" fill="url(#gate-grad)"/>
                    {/* Innovation One / Generic Tower */}
                    <path d="M260 140L275 40H315L325 140" stroke="currentColor" strokeWidth="2" fill="url(#tower-grad)"/>
                    {/* Another Tower */}
                    <path d="M120 140L100 60H60L50 140" stroke="currentColor" strokeWidth="2" fill="url(#tower-grad)"/>
                    {/* Glows */}
                    <circle cx="200" cy="40" r="6" fill="#E8200F" className="animate-pulse" />
                    
                    <defs>
                      <linearGradient id="gate-grad" x1="200" y1="30" x2="200" y2="140" gradientUnits="userSpaceOnUse">
                        <stop stopColor="currentColor" stopOpacity="0.2"/>
                        <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="tower-grad" x1="200" y1="40" x2="200" y2="140" gradientUnits="userSpaceOnUse">
                        <stop stopColor="currentColor" stopOpacity="0.1"/>
                        <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
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

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-q-brand px-8 py-4 font-black text-white transition-all hover:bg-q-brand-ember hover:shadow-[0_0_30px_rgba(232,32,15,0.3)]"
              >
                Send Message <Send className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}
