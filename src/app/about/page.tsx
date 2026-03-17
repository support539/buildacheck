import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the licensed building inspectors behind BuildaCheck. Trusted, independent property inspections across Melbourne & Greater Victoria.",
};

const values = [
  {
    name: "Accuracy",
    desc: "Every inspection is carried out with the precision and discipline of a builder. We measure, document, and assess with technical rigour — because your decisions depend on it.",
  },
  {
    name: "Transparency",
    desc: "Clear, honest reporting with no ambiguity. We explain what we find, why it matters, and what it means for you — in plain language backed by evidence.",
  },
  {
    name: "Independence",
    desc: "Our assessments are unbiased, evidence-based, and free from external influence. We work for you — not the agent, the builder, or the insurer.",
  },
  {
    name: "Accountability",
    desc: "We stand behind every finding. Our reports are built to support negotiations, warranty claims, and legal proceedings if needed.",
  },
  {
    name: "Protection",
    desc: "Your home is one of your biggest investments. We exist to make sure you understand exactly what you're buying, building, or maintaining.",
  },
];

const expertise = [
  "Residential construction",
  "Structural and defect assessment",
  "NCC compliance",
  "Waterproofing, framing, and roofing",
  "Warranty processes",
  "Expert witness reporting",
];

const services = [
  "Pre-Purchase Building Inspections",
  "Pre-Purchase Building + Pest Inspections",
  "Practical Completion (PCI) Inspections",
  "Warranty Inspections",
  "Dilapidation Reports",
  "Expert Witness Reports",
];

const supportedBy = [
  "High-resolution photographic evidence",
  "Causation analysis for every defect",
  "Standards-referenced reporting (NCC, AS 4349.1, AS 1684, AS 2870)",
  "Builder-readable defect lists",
  "24\u201348 hour turnaround",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <Image
          src="/images/blueprint-drawing.webp"
          alt="Architectural blueprint with measuring tools"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              About <span className="text-copper-400">BuildaCheck</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Builder-Grade Inspections. Evidence-Driven Reporting. Built on
              Real Construction Expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Our Story
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Founded by construction professionals who saw a gap
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Too many property inspections are carried out by operators
                  without genuine construction experience. Reports are vague,
                  findings lack context, and homeowners are left guessing about
                  the true condition of their property.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  BuildaCheck was founded to change that. We bring
                  builder-trained expertise to every inspection, delivering
                  reports that are technically rigorous, evidence-driven, and
                  aligned with the standards that govern Australian construction.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Inspections carried out by builder-trained experts",
                  "Reports aligned with NCC and Australian Standards",
                  "Defect analysis based on causation, not just observation",
                  "Evidence-driven reporting you can rely on",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-l-2 border-copper-200 py-2 pl-5"
                  >
                    <p className="text-[0.938rem] leading-relaxed text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Our Values
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              What We Stand For
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <RevealOnScroll key={value.name} delay={i < 5 ? ((i + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border-l-2 border-copper-200 py-1 pl-5">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {value.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Our Expertise
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Deep knowledge across residential construction
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Our team brings hands-on experience across every stage of the
                  building process. From footings to finishes, we understand how
                  homes are built and where things go wrong.
                </p>
              </div>
              <ul className="space-y-3">
                {expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <svg
                      className="mt-1 h-4 w-4 shrink-0 text-copper-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[0.938rem] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              What We Deliver
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Comprehensive Inspection Services
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Our Services
                </h3>
                <ul className="mt-6 space-y-3">
                  {services.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                      <span className="text-[0.938rem] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Supported By
                </h3>
                <ul className="mt-6 space-y-3">
                  {supportedBy.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-copper-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[0.938rem] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
                Our Commitment
              </p>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Your confidence is our benchmark
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-300">
                Whether you&apos;re buying your first home, signing off on a new
                build, or protecting an investment property, we deliver the
                clarity you need to make confident decisions. Every inspection is
                backed by construction expertise, evidence, and accountability.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                We don&apos;t just find problems — we explain what caused them,
                what they mean, and what to do next. That&apos;s the BuildaCheck
                difference.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="blueprint-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Ready to book your inspection?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-600">
              Choose your service, select your time, and let our builder-trained
              inspectors deliver the clarity you deserve.
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
                className="inline-flex items-center border border-slate-300 px-8 py-4 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:border-copper-500 hover:text-copper-600"
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
