import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  buildaCheckIncluded,
  buildaCheckSpecialistServices,
  buildaCheckStandardOffers,
} from "@/lib/catalog";

export const metadata: Metadata = {
  title: "BuildaCheck Inspections",
  description:
    "Explore BuildaCheck's fixed-price inspections, specialist reporting scopes, and integrated pathway into Digital Site Intelligence.",
};

export default function BuildaCheckPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <Image
          src="/images/hero-pre-purchase.webp"
          alt="Inspector documenting an existing property"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-300">
              BuildaCheck
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
              Premium building inspections with evidence built for decisions, not guesswork.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
              BuildaCheck handles the inspection, compliance, handover, and dispute side of the ecosystem. When the job needs deeper capture, the workflow expands into BuildaScan without breaking the chain of evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Fixed-Price Inspections
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              The streamlined BuildaCheck offer stack.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {buildaCheckStandardOffers.map((offer, index) => (
              <RevealOnScroll key={offer.id} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border border-cream-200 bg-white p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold text-slate-900 text-balance">
                      {offer.name}
                    </h3>
                    <span className="font-body text-xl font-semibold text-copper-600 tabular-nums">
                      {offer.priceLabel}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                    {offer.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {(offer.includes ?? []).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                        <span className="leading-relaxed text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Included Standard
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                  Every BuildaCheck scope is built around defensible evidence.
                </h2>
              </div>
              <ul className="space-y-3">
                {buildaCheckIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-copper-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[0.938rem] leading-relaxed text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Specialist Scopes
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              The detailed service pages remain available for more specific inspection needs.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {buildaCheckSpecialistServices.map((service, index) => (
              <RevealOnScroll key={service.href} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <Link href={service.href} className="block border border-cream-200 bg-white p-6 transition-colors hover:border-copper-300">
                  <h3 className="font-display text-xl font-bold text-slate-900 text-balance">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                    {service.summary}
                  </p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
                  Upgrade Path
                </p>
                <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
                  Add Digital Site Intelligence when the site needs more than an inspection alone.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 text-pretty">
                  Some jobs need roof-safe capture, mapped boundaries, thermal overlays, or 3D spatial evidence. BuildaScan extends the BuildaCheck workflow without changing who owns the report or the evidence trail.
                </p>
              </div>
              <div className="border border-slate-800 bg-slate-950 p-7">
                <ul className="space-y-4">
                  {[
                    "Use DSI when access is unsafe or impractical.",
                    "Use DSI when stakeholders need mapped or modelled evidence, not just photographs.",
                    "Use the combined workflow when disputes, insurers, or compliance teams need stronger proof.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-400" />
                      <span className="leading-relaxed text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/digital-site-intelligence"
                    className="inline-flex items-center bg-copper-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
                  >
                    Explore DSI
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-copper-500 hover:text-copper-300"
                  >
                    Compare Pricing
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
