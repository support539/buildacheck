import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

interface ServiceSection {
  title: string;
  items: string[];
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  intro: string;
  heroImage?: string;
  heroImageAlt?: string;
  sections: {
    whatItCovers: ServiceSection;
    whyItMatters: { intro: string; items: string[] };
    whatYouReceive: string[];
    whoItsFor: string[];
    addOns: string[];
    howItProtects: string[];
  };
  ctaLabel?: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  intro,
  heroImage,
  heroImageAlt,
  sections,
  ctaLabel = "Book Now",
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-28">
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt={heroImageAlt || title}
              fill
              priority
              className="object-cover opacity-80"
              sizes="100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
          </>
        )}
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 h-[2px] w-16 bg-copper-500" />
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 font-display text-lg text-copper-300 italic sm:text-xl">
              {subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600"
              >
                {ctaLabel}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-slate-600 px-7 py-3.5 text-sm font-semibold tracking-wide text-slate-300 transition-colors hover:border-copper-500 hover:text-copper-400"
              >
                Request Sample Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What It Covers */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Scope
                </p>
                <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                  {sections.whatItCovers.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {sections.whatItCovers.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-copper-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[0.938rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Why It Matters
              </p>
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Why This Inspection Matters
              </h2>
              <p className="mt-4 text-[0.938rem] leading-relaxed text-slate-600">
                {sections.whyItMatters.intro}
              </p>
              <ul className="mt-8 space-y-3">
                {sections.whyItMatters.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                    <span className="text-[0.938rem] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What You Receive + Who It's For */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll>
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Your Report
                </p>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  What You Receive
                </h2>
                <ul className="mt-6 space-y-3">
                  {sections.whatYouReceive.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-copper-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[0.938rem] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Ideal For
                </p>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  Who This Is For
                </h2>
                <ul className="mt-6 space-y-3">
                  {sections.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                      <span className="text-[0.938rem] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Add-Ons + Protection */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <RevealOnScroll>
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
                  Enhance Your Inspection
                </p>
                <h2 className="font-display text-2xl font-bold text-white">
                  Optional Add-Ons
                </h2>
                <ul className="mt-6 space-y-3">
                  {sections.addOns.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-copper-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="text-[0.938rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
                  Your Protection
                </p>
                <h2 className="font-display text-2xl font-bold text-white">
                  How This Protects You
                </h2>
                <ul className="mt-6 space-y-3">
                  {sections.howItProtects.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-copper-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[0.938rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blueprint-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Ready to Book?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-600">
              Select your preferred time, provide property details, and we&apos;ll take care of the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600"
              >
                {ctaLabel}
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
