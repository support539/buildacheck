import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

const faqSections = [
  {
    category: "General",
    items: [
      {
        question: "What areas do you service?",
        answer:
          "We service Melbourne, Greater Victoria, and selected regional areas. Regional bookings may include a small travel fee, always disclosed upfront.",
      },
      {
        question: "Are your inspectors qualified?",
        answer:
          "Yes. All inspections are carried out by builder-trained professionals with real construction experience, supported by full insurance coverage and standards-aligned reporting.",
      },
      {
        question: "How long does an inspection take?",
        answer:
          "Most inspections take 60\u2013120 minutes depending on property size, condition, and access.",
      },
      {
        question: "Do I need to be present?",
        answer:
          "No. You\u2019re welcome to attend, but it\u2019s not required. We coordinate access directly with the agent, owner, or builder.",
      },
    ],
  },
  {
    category: "Inspections & Reporting",
    items: [
      {
        question: "What does the report include?",
        answer:
          "Every report includes high-resolution photos, defect descriptions, causation analysis, severity ratings, standards references where applicable, recommended next steps, and builder-ready rectification notes.",
      },
      {
        question: "How fast will I receive my report?",
        answer:
          "Reports are delivered within 24\u201348 hours. Urgent pre-auction inspections can be prioritised.",
      },
      {
        question: "Do you inspect the roof space and subfloor?",
        answer:
          "Yes \u2014 where safe and accessible. If access is restricted, we document the limitation and provide alternative recommendations.",
      },
      {
        question:
          "Do you use tools like moisture meters or thermal imaging?",
        answer:
          "Yes. Moisture mapping, thermal imaging, and drone roof inspections are available as optional add-ons.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        question: "How do I know the exact price before booking?",
        answer:
          "Your price is calculated instantly based on inspection type, property type, and location. No estimates, no \u2018from\u2019 pricing. Full transparency.",
      },
      {
        question: "Do you charge extra for travel?",
        answer:
          "Only for properties outside standard service areas. Any travel fee is disclosed before booking.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Credit/debit card, bank transfer, or invoice for builders, developers, and legal professionals.",
      },
    ],
  },
  {
    category: "Pre-Purchase Inspections",
    items: [
      {
        question: "Do you inspect for termites?",
        answer:
          "Yes \u2014 when you select the Building + Pest package.",
      },
      {
        question: "Will the report help me negotiate?",
        answer:
          "Yes. Your report clearly identifies major defects, safety hazards, and repair implications, giving you strong evidence for negotiation.",
      },
    ],
  },
  {
    category: "New Builds (PCI & Warranty)",
    items: [
      {
        question: "What is a PCI inspection?",
        answer:
          "A Practical Completion Inspection identifies workmanship defects, incomplete items, safety issues, non-compliant elements, and items requiring rectification before handover.",
      },
      {
        question:
          "Do you check compliance with NCC and Australian Standards?",
        answer:
          "Yes. Your inspector assesses workmanship and defects against relevant standards and tolerances.",
      },
      {
        question: "Can you help with warranty claims?",
        answer:
          "Yes. Warranty inspections identify defects before your statutory period expires and provide evidence for builder discussions.",
      },
    ],
  },
  {
    category: "Dilapidation Reports",
    items: [
      {
        question: "Who needs a Dilapidation Report?",
        answer:
          "Builders, developers, homeowners undertaking major works, and neighbours seeking protection from potential damage.",
      },
      {
        question: "Do you inspect council assets?",
        answer:
          "Yes \u2014 including footpaths, kerbs, crossovers, and nature strips.",
      },
    ],
  },
  {
    category: "Expert Witness Reports",
    items: [
      {
        question: "What\u2019s included in an Expert Witness Report?",
        answer:
          "Causation analysis, standards references, independent expert opinion, evidence pack, tribunal-ready structure, and declaration of independence.",
      },
      {
        question: "Do you handle multi-unit disputes?",
        answer:
          "Yes. We offer structured pricing for 2\u20134 units, 5\u201310 units, and large complexes.",
      },
      {
        question: "Can you attend hearings?",
        answer:
          "Yes. Hearing attendance is available at an hourly rate.",
      },
    ],
  },
  {
    category: "Booking & Access",
    items: [
      {
        question: "Can you organise access with the agent or builder?",
        answer:
          "Yes \u2014 we handle all access coordination for you.",
      },
      {
        question: "Can I reschedule my booking?",
        answer:
          "Yes. Rescheduling is free with reasonable notice.",
      },
    ],
  },
  {
    category: "Guarantees & Support",
    items: [
      {
        question: "Do you offer a guarantee?",
        answer:
          "We provide professional indemnity insurance, public liability insurance, and independent standards-aligned reporting.",
      },
      {
        question: "Do you provide support after the report?",
        answer:
          "Yes. We help you understand findings, prepare follow-up lists, and plan next steps.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <Image
          src="/images/hero-faq.webp"
          alt="Building inspection documents and reports"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Everything you need to know about our inspections, pricing,
              reports, and process &mdash; answered clearly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <RevealOnScroll>
            <FaqAccordion sections={faqSections} />
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              Get in touch with our team or go ahead and book your inspection
              with fixed, transparent pricing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600"
              >
                Book an Inspection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-slate-600 px-8 py-4 text-sm font-semibold tracking-wide text-slate-300 transition-colors hover:border-copper-500 hover:text-copper-400"
              >
                Contact Us
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
