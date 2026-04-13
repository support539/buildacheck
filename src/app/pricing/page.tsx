import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  buildaCheckStandardOffers,
  combinedPackages,
  deliverablePricing,
  dsiAddOns,
  dsiPackages,
  enterprisePackages,
  professionalRates,
} from "@/lib/catalog";
import { pageImagery } from "@/lib/pageImagery";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare BuildaCheck inspection pricing, BuildaScan Digital Site Intelligence packages, quoted combined workflows, and enterprise deliverables.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <Image
          src={pageImagery.pricingHero.src}
          alt={pageImagery.pricingHero.alt}
          fill
          priority
          className="object-cover opacity-70"
          style={{ objectPosition: pageImagery.pricingHero.objectPosition }}
          sizes="100vw"
        />
        <div className={`pointer-events-none absolute inset-0 ${pageImagery.pricingHero.overlayClass}`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,122,61,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.12),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-300">
              Pricing
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
              Fixed where scope is simple. Quoted where the workflow gets bigger.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
              Use BuildaCheck and DSI fixed-price packages for fast booking. Use quoted combined packages and enterprise scanning when the property, asset, or stakeholder load requires tailored capture and deliverables.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  BuildaCheck
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                  Premium inspection pricing
                </h2>
                <div className="mt-8 space-y-4">
                  {buildaCheckStandardOffers.map((offer) => (
                    <div key={offer.id} className="border border-cream-200 bg-white px-6 py-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="font-display text-2xl font-bold text-slate-900 text-balance">
                          {offer.name}
                        </h3>
                        <span className="font-body text-lg font-semibold text-copper-600 tabular-nums">
                          {offer.priceLabel}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                        {offer.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  BuildaScan
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                  Digital Site Intelligence packages
                </h2>
                <div className="mt-8 space-y-4">
                  {dsiPackages.map((offer) => (
                    <div key={offer.id} className="border border-cream-200 bg-white px-6 py-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="font-display text-2xl font-bold text-slate-900 text-balance">
                          {offer.name}
                        </h3>
                        <span className="font-body text-lg font-semibold text-copper-600 tabular-nums">
                          {offer.priceLabel}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                        {offer.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Add-Ons
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              Layer in more intelligence where it changes the outcome.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dsiAddOns.map((addOn, index) => (
              <RevealOnScroll key={addOn.id} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border border-cream-200 bg-white px-5 py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-slate-900 text-balance">
                      {addOn.name}
                    </h3>
                    <span className="font-body text-sm font-semibold text-copper-600">
                      {addOn.priceLabel}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                    {addOn.summary}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
              Combined Packages
            </p>
            <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
              Best-value workflows for customers who need inspection plus capture.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {combinedPackages.map((offer, index) => (
              <RevealOnScroll key={offer.id} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border border-slate-800 bg-slate-950 p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold text-white text-balance">
                      {offer.name}
                    </h3>
                    <span className="font-body text-lg font-semibold text-copper-300">
                      {offer.priceLabel}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 text-pretty">
                    {offer.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {(offer.includes ?? []).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-400" />
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

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Enterprise Scanning
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              Larger scans and digital twin scopes are quoted by size, complexity, and output.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {enterprisePackages.map((offer, index) => (
              <RevealOnScroll key={offer.id} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border border-cream-200 bg-white px-6 py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold text-slate-900 text-balance">
                      {offer.name}
                    </h3>
                    <span className="font-body text-lg font-semibold text-copper-600">
                      {offer.priceLabel}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                    {offer.summary}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase text-slate-500">
                    Best for: {offer.bestFor}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <RevealOnScroll>
            <div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Rate-Based Pricing
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                Custom capture and processing rates
              </h2>
              <div className="mt-8 space-y-4">
                {professionalRates.map((rate) => (
                  <div key={rate.name} className="border border-cream-200 bg-white px-6 py-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl font-bold text-slate-900 text-balance">
                        {rate.name}
                      </h3>
                      <span className="font-body text-lg font-semibold text-copper-600">
                        {rate.priceLabel}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                      {rate.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Deliverables
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                Output pricing for custom project work
              </h2>
              <div className="mt-8 space-y-4">
                {deliverablePricing.map((item) => (
                  <div key={item.name} className="border border-cream-200 bg-white px-6 py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-slate-900 text-balance">
                        {item.name}
                      </h3>
                      <span className="font-body text-sm font-semibold text-copper-600">
                        {item.priceLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
              Need help matching scope to package?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 text-pretty">
              Book the fixed-price items directly. For combined workflows, complex sites, or enterprise deliverables, we will scope the job and quote it quickly.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
              >
                Book Fixed-Price Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-slate-600 px-8 py-4 text-sm font-semibold text-slate-200 transition-colors hover:border-copper-500 hover:text-copper-300"
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
