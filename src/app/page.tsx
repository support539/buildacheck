import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  buildaCheckSpecialistServices,
  buildaCheckStandardOffers,
  combinedBenefits,
  combinedPackages,
  dsiPackages,
  intelligenceWorkflow,
  parentBrand,
} from "@/lib/catalog";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-900">
        <Image
          src="/images/hero-building.webp"
          alt="Construction professional reviewing a site plan"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/85" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-300">
              BuildaCheck + BuildaScan
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
              Inspections and Digital Site Intelligence in one defensible workflow.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
              BuildaCheck delivers builder-grade inspections. BuildaScan extends that workflow with
              mapping, thermal capture, 3D modelling, and AI-assisted site intelligence for higher-risk,
              higher-value decisions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
              >
                Book a Service
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center border border-slate-600 px-8 py-4 text-sm font-semibold text-slate-200 transition-colors hover:border-copper-500 hover:text-copper-300"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <RevealOnScroll>
            <div className="border border-slate-700 bg-slate-950/70 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
                    Digital Site Intelligence
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-white text-balance">
                    BuildaScan expands what your report can prove.
                  </h2>
                </div>
                <Image
                  src="/images/buildascan-logo.png"
                  alt="BuildaScan logo"
                  width={240}
                  height={160}
                  className="h-20 w-auto shrink-0 object-contain"
                />
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Roof-safe capture, thermal overlays, orthomosaic mapping, and site twin outputs",
                  "Aligned for builders, insurers, engineers, councils, and commercial property owners",
                  "Integrated into one BuildaCheck reporting workflow instead of separate subcontractors",
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
                  className="inline-flex items-center border border-copper-500 px-4 py-2.5 text-sm font-medium text-copper-200 transition-colors hover:bg-copper-500 hover:text-white"
                >
                  Explore DSI
                </Link>
                <Link
                  href="/buildacheck"
                  className="inline-flex items-center border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-copper-500 hover:text-copper-300"
                >
                  Explore BuildaCheck
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-b border-cream-200 bg-cream-50 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/citadel-logo.png"
              alt={parentBrand.name}
              width={132}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <p className="text-sm text-slate-600 text-pretty">
              A {parentBrand.name} workflow for inspection, capture, verification, and reporting.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase text-slate-500">
            {["Regulator-aligned", "Evidence-grade", "Roof-safe capture", "Fixed + quoted pricing"].map(
              (item) => (
                <span key={item}>{item}</span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Two Service Lines
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              Choose the workflow that matches your risk, evidence, and reporting needs.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <RevealOnScroll>
              <div className="border border-cream-200 bg-white p-8">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-copper-500">
                  BuildaCheck
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-slate-900 text-balance">
                  Premium inspections for purchase, construction, handover, and disputes.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 text-pretty">
                  Builder-led inspections with standards-aligned reporting, defect evidence, and clear next-step guidance.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Pre-purchase due diligence",
                    "New construction stage inspections",
                    "Practical completion and handover",
                    "Insurance and dispute evidence packs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                      <span className="leading-relaxed text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/buildacheck"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-copper-600 transition-colors hover:text-copper-700"
                >
                  View BuildaCheck overview
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div className="border border-slate-900 bg-slate-900 p-8">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
                  BuildaScan
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white text-balance">
                  Digital Site Intelligence for mapping, thermal capture, 3D outputs, and verification.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 text-pretty">
                  The safest way to understand roofs, facades, boundaries, terrain, and hard-to-access assets without compromising evidentiary quality.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Orthomosaic and terrain mapping",
                    "Thermal moisture and heat-loss overlays",
                    "3D site models and digital twins",
                    "AI-assisted defect and deviation review",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-400" />
                      <span className="leading-relaxed text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/digital-site-intelligence"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-copper-300 transition-colors hover:text-white"
                >
                  View DSI overview
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Specialist Services
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
              BuildaCheck still covers the detailed specialist scopes behind the new pricing architecture.
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

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-3xl">
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Fixed-Price Packages
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                  Book fixed-price inspections or DSI packages. Quote the larger scopes separately.
                </h2>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-copper-500 hover:text-copper-600"
              >
                See all pricing
              </Link>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <RevealOnScroll>
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900">BuildaCheck</h3>
                <div className="mt-6 space-y-4">
                  {buildaCheckStandardOffers.map((offer) => (
                    <div key={offer.id} className="border border-cream-200 bg-white px-5 py-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <p className="font-display text-xl font-bold text-slate-900 text-balance">
                          {offer.name}
                        </p>
                        <span className="font-body text-lg font-semibold text-copper-600 tabular-nums">
                          {offer.priceLabel}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                        {offer.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Digital Site Intelligence
                </h3>
                <div className="mt-6 space-y-4">
                  {dsiPackages.map((offer) => (
                    <div key={offer.id} className="border border-cream-200 bg-white px-5 py-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <p className="font-display text-xl font-bold text-slate-900 text-balance">
                          {offer.name}
                        </p>
                        <span className="font-body text-lg font-semibold text-copper-600 tabular-nums">
                          {offer.priceLabel}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                        {offer.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
              Unified Workflow
            </p>
            <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
              Capture, analyse, verify, report.
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
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Combined Packages
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 text-balance sm:text-4xl">
                  When the job needs more than one tool, we quote the full ecosystem.
                </h2>
                <ul className="mt-6 space-y-3">
                  {combinedBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                      <span className="leading-relaxed text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4">
                {combinedPackages.map((offer) => (
                  <div key={offer.id} className="border border-cream-200 bg-white p-6">
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
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
              Need inspection clarity, site intelligence, or both?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 text-pretty">
              Start with fixed-price packages where scope is simple. Bring us in for quoted combined workflows when the site, dispute, or stakeholder load gets more complex.
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
