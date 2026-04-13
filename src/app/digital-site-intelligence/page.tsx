import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  buildaScanFaqs,
  dsiAddOns,
  dsiCapabilities,
  dsiStandardInclusions,
  intelligenceWorkflow,
  technologyLayers,
} from "@/lib/catalog";
import { pageImagery } from "@/lib/pageImagery";

export const metadata: Metadata = {
  title: "Digital Site Intelligence",
  description:
    "BuildaScan Digital Site Intelligence combines aerial mapping, thermal capture, 3D modelling, AI-assisted review, and BuildaCheck integration in one workflow.",
};

export default function DigitalSiteIntelligencePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <Image
          src={pageImagery.dsiHero.src}
          alt={pageImagery.dsiHero.alt}
          fill
          priority
          className="object-cover opacity-70"
          style={{ objectPosition: pageImagery.dsiHero.objectPosition }}
          sizes="100vw"
        />
        <div className={`pointer-events-none absolute inset-0 ${pageImagery.dsiHero.overlayClass}`} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,122,61,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-300">
              BuildaScan
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
              Digital Site Intelligence for sites that need more than eyesight alone.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
              High-resolution imaging, thermal intelligence, full site mapping, 3D modelling, and AI-assisted defect detection delivered as one module inside the BuildaCheck ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
              >
                Book Digital Site Intelligence
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center border border-slate-600 px-8 py-4 text-sm font-semibold text-slate-200 transition-colors hover:border-copper-500 hover:text-copper-300"
              >
                Compare Pricing
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Image
                src="/images/buildascan-logo.png"
                alt="BuildaScan"
                width={640}
                height={427}
                className="h-12 w-auto object-contain"
              />
              <div className="hidden h-10 w-px bg-slate-700 sm:block" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Integrated into the BuildaCheck evidence workflow
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Why It Matters
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                See more. Know more. Prove more.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 text-pretty">
                BuildaScan captures roofs, facades, boundaries, terrain, moisture, and defect signals, then turns that evidence into regulator-aligned reporting that fits builders, insurers, owners, and dispute workflows.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {dsiCapabilities.map((capability, index) => (
              <RevealOnScroll key={capability.title} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border border-cream-200 bg-white p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 text-balance">
                    {capability.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {capability.points.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <RevealOnScroll>
            <div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Included Standard
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                The core DSI package already includes the differentiator.
              </h2>
              <ul className="mt-6 space-y-3">
                {dsiStandardInclusions.map((item) => (
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

          <RevealOnScroll delay={2}>
            <div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Optional Add-Ons
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                Expand the output when the stakeholder or evidence load increases.
              </h2>
              <div className="mt-6 space-y-4">
                {dsiAddOns.map((addOn) => (
                  <div key={addOn.id} className="border border-cream-200 bg-white px-5 py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-slate-900 text-balance">
                        {addOn.name}
                      </h3>
                      <span className="font-body text-sm font-semibold text-copper-600">
                        {addOn.priceLabel}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                      {addOn.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
              Workflow
            </p>
            <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
              Built to capture, analyse, verify, and report without breaking context.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {intelligenceWorkflow.map((item, index) => (
              <RevealOnScroll key={item.stage} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border border-slate-800 bg-slate-950 px-6 py-6">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-copper-400">
                    {item.stage}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300 text-pretty">
                    {item.detail}
                  </p>
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
              Technology Stack
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              The platform is built around defensible capture, processing, and collaboration.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {technologyLayers.map((layer, index) => (
              <RevealOnScroll key={layer.title} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border border-cream-200 bg-white p-7">
                  <h3 className="font-display text-2xl font-bold text-slate-900 text-balance">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                    {layer.intro}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {layer.items.map((item) => (
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
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              FAQ
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              Common Digital Site Intelligence questions.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 space-y-4">
            {buildaScanFaqs.map((item, index) => (
              <RevealOnScroll key={item.question} delay={index < 5 ? ((index + 1) as 1 | 2 | 3 | 4 | 5) : undefined}>
                <div className="border border-cream-200 bg-white p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 text-balance">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                    {item.answer}
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
