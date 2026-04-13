import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers on BuildaCheck inspections, BuildaScan Digital Site Intelligence, pricing, timing, reports, and what to expect from the workflow.",
};

const faqSections = [
  {
    category: "General",
    items: [
      {
        question: "What areas do you service?",
        answer:
          "We service Melbourne, Greater Victoria, and selected regional areas. Regional bookings may include a disclosed travel fee when scope or distance requires it.",
      },
      {
        question: "Are your inspectors qualified?",
        answer:
          "Yes. BuildaCheck inspections are handled by builder-trained professionals with real construction experience, supported by insured, standards-aligned reporting.",
      },
      {
        question: "How long does an inspection or DSI capture take?",
        answer:
          "Most standard inspections take 60-120 minutes. DSI capture timing varies by site size, access, and output complexity.",
      },
      {
        question: "Do I need to be present?",
        answer:
          "No. You are welcome to attend, but it is not required. We coordinate access directly with the agent, owner, builder, or site contact.",
      },
    ],
  },
  {
    category: "Pricing & Booking",
    items: [
      {
        question: "Which services are fixed-price?",
        answer:
          "The booking page and calculator cover fixed-price BuildaCheck inspections and fixed-price DSI packages. Combined packages, larger scan scopes, and enterprise deliverables are quoted separately.",
      },
      {
        question: "Can I book BuildaScan without a BuildaCheck inspection?",
        answer:
          "Yes. BuildaScan can be booked as a standalone DSI service, though it integrates directly into the BuildaCheck reporting workflow when both are used together.",
      },
      {
        question: "Do you charge extra for travel?",
        answer:
          "Only when the property falls outside standard service areas or when the site scope requires additional logistics. Any extra charge is disclosed before the job proceeds.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Credit/debit card, bank transfer, or invoice arrangements for professional and enterprise clients depending on the scope.",
      },
    ],
  },
  {
    category: "Digital Site Intelligence",
    items: [
      {
        question: "Is site mapping included?",
        answer:
          "Yes. Full site mapping with orthomosaic and terrain modelling is included in the standard DSI workflow.",
      },
      {
        question: "Is this safe for roofs and high-risk areas?",
        answer:
          "Yes. BuildaScan is designed to reduce ladder work and roof access by using drone-based and remote capture methods wherever appropriate.",
      },
      {
        question: "Is the data regulator-aligned?",
        answer:
          "Yes. The workflow is positioned around NCC, relevant Australian Standards, and insurer or VCAT-ready reporting structures.",
      },
      {
        question: "What add-ons are available for DSI?",
        answer:
          "Thermal intelligence, 3D modelling, FastTrack delivery, evidence packs, annual monitoring, and advanced site mapping can all be layered in depending on the package and required output.",
      },
    ],
  },
  {
    category: "Inspections & Reporting",
    items: [
      {
        question: "What does the report include?",
        answer:
          "Reports include photographs, issue descriptions, defect context, standards references where applicable, recommended next steps, and any mapped or annotated outputs relevant to the booked workflow.",
      },
      {
        question: "How fast will I receive my report?",
        answer:
          "Standard reporting is generally delivered within 24-48 hours. FastTrack delivery is available for eligible DSI scopes.",
      },
      {
        question: "Do you inspect the roof space and subfloor?",
        answer:
          "Yes, where safe and accessible. If access is restricted, we document the limitation and recommend the right alternate capture or follow-up scope.",
      },
      {
        question: "Do you use tools like thermal imaging or mapping?",
        answer:
          "Yes. BuildaScan extends the workflow into thermal overlays, aerial mapping, terrain modelling, and 3D outputs when deeper site intelligence is required.",
      },
    ],
  },
  {
    category: "Specialist BuildaCheck Scopes",
    items: [
      {
        question: "Do you inspect for termites?",
        answer:
          "Yes, through the specialist Pre-Purchase Building + Pest scope.",
      },
      {
        question: "Can you help with warranty claims or disputes?",
        answer:
          "Yes. Warranty inspections, VCAT and insurance evidence packs, and expert witness scopes are available depending on the matter.",
      },
      {
        question: "Do you inspect neighboring properties or council assets?",
        answer:
          "Yes. Dilapidation reporting can cover neighboring buildings, footpaths, kerbs, crossovers, and similar assets.",
      },
    ],
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <Image
          src="/images/hero-faq.webp"
          alt="Inspection reports, plans, and site intelligence outputs"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-white text-balance sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
              Answers on BuildaCheck inspections, BuildaScan Digital Site Intelligence, pricing, reporting, and how the combined workflow fits together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <RevealOnScroll>
            <FaqAccordion sections={faqSections} />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
              Need a fixed-price booking or a quoted scope?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 text-pretty">
              Use the booking page for fixed-price packages. Use contact for combined workflows, large-format scanning, and specialist project scoping.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
              >
                Book a Service
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-slate-600 px-8 py-4 text-sm font-semibold text-slate-300 transition-colors hover:border-copper-500 hover:text-copper-400"
              >
                Request a Quote
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
