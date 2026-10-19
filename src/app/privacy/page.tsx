import { pageMeta } from "@/lib/seo";

// Drafted 19 Oct 2026 from the website review (QB-022). Legal to confirm before
// this goes live: lawful bases, retention, transfer safeguards and the contact address.
export const metadata = pageMeta({
  title: "Privacy notice",
  description:
    "How Infinium Consulting B.V. handles personal data collected through qbricks.ai: the contact form, analytics and embedded video.",
  path: "/privacy",
});

const sections: Array<{ heading: string; paragraphs: string[] }> = [
  {
    heading: "Who we are",
    paragraphs: [
      "qbricks.ai is run by Infinium Consulting B.V., Edge Olympic, Fred. Roeskestraat 115, Amsterdam, the Netherlands. We are the controller of the personal data described here.",
    ],
  },
  {
    heading: "What we collect through the contact form",
    paragraphs: [
      "When you send us a message we collect your full name, company, work email address and anything you choose to tell us about your workload.",
      "We use it to reply to your enquiry, arrange a demo or evaluation, and follow up on it. We rely on our legitimate interest in responding to business enquiries, and on taking steps at your request before entering into a contract.",
      "The form is delivered to us through Formspree, which processes the submission on our behalf. Please do not include sensitive personal data in your message.",
    ],
  },
  {
    heading: "Analytics",
    paragraphs: [
      "We use Vercel Web Analytics to count page views and see which pages are useful. It does not use cookies and does not identify individual visitors; data is aggregated.",
    ],
  },
  {
    heading: "Embedded video",
    paragraphs: [
      "Videos are hosted by Mux. The player only loads, and only connects to Mux, when you choose to play a video.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep enquiry data for as long as we need it to deal with your enquiry and any relationship that follows, and then delete it.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "You can ask us for access to, correction or deletion of your personal data, ask us to restrict or stop using it, or ask for a copy to take elsewhere. Email sales@infinium.consulting and we will respond within one month.",
      "You can also complain to the Dutch data protection authority, the Autoriteit Persoonsgegevens.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="page-hero border-b border-black/5 pb-16">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Privacy</p>
            <h1 className="h-display">Privacy notice</h1>
            <p className="mt-6 text-lg leading-relaxed text-q-gray-700">
              What personal data qbricks.ai collects, why, and what you can ask us to do with it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y-sm bg-white">
        <div className="container-x">
          <div className="max-w-3xl space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="h-sub">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((text) => (
                    <p key={text} className="leading-relaxed text-q-gray-700">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-sm text-q-gray-500">Last updated October 2026.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
