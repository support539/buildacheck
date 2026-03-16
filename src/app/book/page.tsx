import type { Metadata } from "next";
import Link from "next/link";
import PricingCalculator from "@/components/PricingCalculator";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Book Your Inspection",
};

const steps = [
  {
    num: "01",
    title: "Choose Inspection Type",
    desc: "Pre-purchase, building + pest, PCI, warranty, dilapidation, or expert witness.",
  },
  {
    num: "02",
    title: "Select Property Type",
    desc: "Apartment, townhouse, single-storey, double-storey, or large home.",
  },
  {
    num: "03",
    title: "See Your Exact Price",
    desc: "Instant fixed pricing with no hidden fees. No estimates, no 'from' pricing.",
  },
  {
    num: "04",
    title: "Add Optional Tools",
    desc: "Moisture mapping, thermal imaging, or drone roof inspection.",
  },
  {
    num: "05",
    title: "Select Date & Time",
    desc: "Choose a time that works for you. We inspect seven days a week.",
  },
  {
    num: "06",
    title: "Provide Property Details",
    desc: "Address, access instructions, agent contacts, and any specific concerns.",
  },
  {
    num: "07",
    title: "Secure Payment",
    desc: "Pay securely online by card or bank transfer. Tax invoice issued automatically.",
  },
];

const afterBooking = [
  {
    num: "01",
    title: "Appointment Confirmed",
    desc: "You receive instant confirmation with your inspection date, time, and inspector details.",
  },
  {
    num: "02",
    title: "Access Coordinated",
    desc: "We contact the selling agent, builder, or owner directly to arrange site access.",
  },
  {
    num: "03",
    title: "Assessment Completed",
    desc: "Your builder-trained inspector conducts a thorough, standards-aligned on-site assessment.",
  },
  {
    num: "04",
    title: "Digital Report in 24\u201348 Hours",
    desc: "A clear, structured report with high-resolution photos, defect analysis, and severity ratings.",
  },
  {
    num: "05",
    title: "Next Steps Support",
    desc: "We help you understand findings, prepare follow-up lists, and support negotiations or claims.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)",
              color: "#c47a3d",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Book Your Inspection
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Fast, transparent, and built around your schedule &mdash; with
              fixed pricing for every property type.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              How It Works
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Seven simple steps to your inspection
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <RevealOnScroll key={step.num}>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 font-body text-3xl font-bold text-copper-500/30">
                    {step.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="text-center">
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Instant Pricing
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                Calculate your exact price
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-slate-600">
                Select your inspection type, property type, and optional
                add-ons. Your price is calculated instantly &mdash; no
                estimates, no callbacks.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-12">
            <PricingCalculator />
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Payment
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Simple, secure payment
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Pay your way with full transparency. A tax invoice is issued
                  automatically with every booking.
                </p>
              </div>
              <div className="lg:col-span-3">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Credit / Debit Card",
                      desc: "Visa, Mastercard, and AMEX accepted. Processed securely at checkout.",
                    },
                    {
                      title: "Bank Transfer",
                      desc: "Direct bank transfer available for all bookings. Details provided at checkout.",
                    },
                    {
                      title: "Invoice for Professionals",
                      desc: "Builders, developers, and legal professionals can request invoice-based payment.",
                    },
                    {
                      title: "Automatic Tax Invoice",
                      desc: "A GST-inclusive tax invoice is issued automatically with every completed booking.",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="border-l-2 border-copper-200 py-1 pl-5"
                    >
                      <h3 className="font-display text-base font-bold text-slate-900">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* After Booking */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
              After You Book
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              What happens next
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {afterBooking.map((step) => (
              <RevealOnScroll key={step.num}>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 font-body text-3xl font-bold text-copper-500/30">
                    {step.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 border-t border-slate-800 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to protect your investment?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              Choose your service, select your time, and upload your property
              details. We&apos;ll take care of the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center border border-slate-600 px-8 py-4 text-sm font-semibold tracking-wide text-slate-300 transition-colors hover:border-copper-500 hover:text-copper-400"
              >
                View FAQ
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
