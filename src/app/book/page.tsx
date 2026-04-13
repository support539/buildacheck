import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PricingCalculator from "@/components/PricingCalculator";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Book a Service",
  description:
    "Book fixed-price BuildaCheck inspections or BuildaScan Digital Site Intelligence packages online, or request a quote for combined and enterprise scopes.",
};

const steps = [
  {
    num: "01",
    title: "Choose BuildaCheck or DSI",
    desc: "Start with inspection or Digital Site Intelligence depending on the evidence you need.",
  },
  {
    num: "02",
    title: "Select a Fixed-Price Package",
    desc: "Choose from the fixed-price BuildaCheck and DSI packages we can confirm immediately.",
  },
  {
    num: "03",
    title: "Add Exact-Price DSI Modules",
    desc: "If you are booking DSI, you can layer in thermal, modelling, FastTrack, or evidence-pack upgrades.",
  },
  {
    num: "04",
    title: "Confirm Access and Timing",
    desc: "We lock in access, date, and any site-specific notes before the job proceeds.",
  },
  {
    num: "05",
    title: "Escalate to Quote if Needed",
    desc: "Combined packages, large sites, and enterprise deliverables are scoped and quoted separately.",
  },
];

const afterBooking = [
  {
    num: "01",
    title: "Appointment Confirmed",
    desc: "You receive confirmation of the package, timing, and the information we need from you.",
  },
  {
    num: "02",
    title: "Access Coordinated",
    desc: "We coordinate with the agent, owner, builder, or site contact as needed.",
  },
  {
    num: "03",
    title: "Site Intelligence Captured",
    desc: "Your inspection and capture scope is completed by the right workflow for the job.",
  },
  {
    num: "04",
    title: "Report Delivered",
    desc: "We issue the relevant BuildaCheck, DSI, or combined output with the required evidence and annotations.",
  },
  {
    num: "05",
    title: "Next-Step Support",
    desc: "We help you understand findings, add further modules if required, and scope any follow-on work.",
  },
];

const quotedScopes = [
  "BuildaCheck + BuildaScan Essentials",
  "Construction Progress Intelligence Pack",
  "Premium Digital Twin + Compliance Pack",
  "Medium to large building scans",
  "Scan-to-BIM and custom deliverables",
];

export default function BookPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <Image
          src="/images/hero-book.webp"
          alt="Building inspection and digital site intelligence workflow"
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
              Book a fixed-price service or start a quoted workflow
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
              Use the calculator below for fixed-price BuildaCheck and DSI packages. If your site needs a combined, multi-stage, or enterprise capture workflow, we will scope and quote it directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              How Booking Works
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              Five steps from package selection to site-ready delivery.
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <RevealOnScroll key={step.num}>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 font-body text-3xl font-bold text-copper-500/30">
                    {step.num}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 text-balance">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="text-center">
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Instant Pricing
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                Calculate your exact fixed-price package
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600 text-pretty">
                The calculator covers fixed-price BuildaCheck inspections and DSI packages only. Quoted combined and enterprise workflows sit below and on the pricing page.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-12">
            <PricingCalculator />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Quoted Workflows
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                  These scopes need a quick quoting step before booking.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 text-pretty">
                  Once the job moves into combined packages, larger scan footprints, or custom deliverables, scope matters more than surface area alone. We quote these directly so the workflow is accurate from the outset.
                </p>
              </div>
              <div className="border border-cream-200 bg-white p-7">
                <ul className="space-y-4">
                  {quotedScopes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                      <span className="text-[0.938rem] leading-relaxed text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-copper-500 hover:text-copper-600"
                  >
                    View Full Pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-copper-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
              After You Book
            </p>
            <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
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
                  <h3 className="font-display text-base font-bold text-white text-balance">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 text-pretty">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
