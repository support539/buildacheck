import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

const services = [
  {
    num: "01",
    title: "Pre-Purchase Building Inspection",
    href: "/services/pre-purchase-building",
    desc: "A comprehensive condition assessment of an existing home, carried out by builder-trained inspectors.",
    items: ["Structural integrity", "Moisture, movement, cracking", "Roofing, plumbing, electrical (visual)", "Major vs minor defect classification"],
  },
  {
    num: "02",
    title: "Pre-Purchase Building + Pest",
    href: "/services/building-pest",
    desc: "A combined building and timber pest inspection for complete peace of mind.",
    items: ["All building inspection inclusions", "Termite activity & conducive conditions", "Timber decay, fungal rot", "Integrated building + pest report"],
  },
  {
    num: "03",
    title: "Practical Completion (PCI)",
    href: "/services/practical-completion",
    desc: "A builder-grade handover inspection for new homes.",
    items: ["NCC & Standards compliance", "Workmanship defects", "Incomplete items", "Builder-ready defect list"],
  },
  {
    num: "04",
    title: "Warranty Inspection",
    href: "/services/warranty",
    desc: "Identify defects before your statutory warranty expires.",
    items: ["Structural & non-structural defects", "Waterproofing & moisture issues", "Internal & external finishes", "Warranty-aligned classification"],
  },
  {
    num: "05",
    title: "Dilapidation Report",
    href: "/services/dilapidation",
    desc: "A pre-construction condition report for neighbouring properties and council assets.",
    items: ["Structural cracks & settlement", "Internal & external condition", "Time-stamped photographic evidence", "Post-works comparison capability"],
  },
  {
    num: "06",
    title: "Expert Witness Report",
    href: "/services/expert-witness",
    desc: "Tribunal-ready reporting for disputes and insurance claims.",
    items: ["Defect identification & causation analysis", "Standards-aligned assessment", "Independent expert opinion", "VCAT-compliant declaration"],
  },
];

const testimonials = [
  {
    quote: "The inspector walked me through every major issue and explained the cause, not just the symptom. The report helped me negotiate thousands off the purchase price.",
    name: "Sarah M.",
    role: "Home Buyer",
  },
  {
    quote: "Our PCI inspection picked up workmanship issues we never would have noticed. The builder fixed everything before handover. The defect list was precise and impossible to dispute.",
    name: "Daniel & Priya",
    role: "New Home Owners",
  },
  {
    quote: "The expert report was detailed, standards-referenced, and professionally structured. It helped resolve our dispute without needing a hearing.",
    name: "Owners Corporation",
    role: "VIC",
  },
];

const process = [
  { step: "01", title: "Book Your Inspection", desc: "Choose your service, select your property type, and lock in a time that suits you." },
  { step: "02", title: "We Coordinate Access", desc: "We contact the selling agent, builder, or owner directly. You don\u2019t need to chase anyone." },
  { step: "03", title: "On-Site Assessment", desc: "Your builder-trained inspector conducts a thorough, standards-aligned inspection." },
  { step: "04", title: "Evidence & Analysis", desc: "Every defect is documented with high-resolution photos, causation analysis, and severity ratings." },
  { step: "05", title: "Report in 24\u201348 Hours", desc: "A clear, structured digital report with defect list, photos, and recommended next steps." },
  { step: "06", title: "Post-Inspection Support", desc: "We help clarify findings, prepare follow-up lists, and support negotiations or warranty claims." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)",
            color: "#c47a3d",
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Builder-Grade Inspections.{" "}
              <span className="text-copper-400">Evidence-Driven</span> Reports.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Buying, building, or protecting a home is too important to rely on generic checklists.
              BuildaCheck delivers construction-expert inspections backed by standards, evidence,
              and real-world building experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600"
              >
                Book an Inspection
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center border border-slate-600 px-8 py-4 text-sm font-semibold tracking-wide text-slate-300 transition-colors hover:border-copper-500 hover:text-copper-400"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-cream-200 bg-cream-50 py-5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
            {[
              "Builder-trained inspectors",
              "Standards-aligned reporting",
              "24\u201348 hour turnaround",
              "Digital Site Intelligence",
              "Expert Witness capability",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[0.8125rem] tracking-wide text-slate-500">
                <div className="h-1 w-1 bg-copper-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Our Difference
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Construction expertise, not generic checklists
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Every inspection is carried out by construction professionals who understand how homes
                  are built, how defects form, and what they mean for your safety and budget.
                </p>
              </div>
              <div className="lg:col-span-3">
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { title: "Builder-Trained Inspectors", desc: "Real construction experience on every job, not franchise operators." },
                    { title: "Causation-Based Analysis", desc: "We explain why defects exist, not just that they\u2019re there." },
                    { title: "Standards-Aligned Reporting", desc: "Referencing NCC, AS 4349.1, AS 1684, AS 2870 and more." },
                    { title: "Evidence-Driven Documentation", desc: "High-resolution photos, severity matrices, and repair guidance." },
                    { title: "Digital Site Intelligence", desc: "Moisture mapping, thermal imaging, and drone inspection capability." },
                    { title: "Accountability Workflow", desc: "We follow through until you get answers and resolution." },
                  ].map((card) => (
                    <div key={card.title} className="border-l-2 border-copper-200 py-1 pl-5">
                      <h3 className="font-display text-base font-bold text-slate-900">{card.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Our Services
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Inspection Services
            </h2>
          </RevealOnScroll>

          <div className="mt-12 divide-y divide-cream-300">
            {services.map((svc) => (
              <RevealOnScroll key={svc.num}>
                <Link
                  href={svc.href}
                  className="group grid gap-4 py-8 transition-colors lg:grid-cols-12 lg:gap-8"
                >
                  <span className="font-body text-sm font-semibold text-copper-400 lg:col-span-1">
                    {svc.num}
                  </span>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-copper-600">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{svc.desc}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {svc.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="h-1 w-1 shrink-0 bg-copper-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-end lg:col-span-2">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-copper-600 opacity-0 transition-opacity group-hover:opacity-100">
                      Learn More
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="blueprint-bg py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div>
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Enhanced Visibility
              </p>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Optional Add-Ons
              </h2>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                { name: "Moisture Mapping", price: "$79", desc: "Identify hidden moisture issues beneath surfaces." },
                { name: "Thermal Imaging", price: "$99", desc: "Detect insulation gaps, leaks, and electrical hotspots." },
                { name: "Drone Roof Inspection", price: "$129", desc: "High-resolution aerial assessment of roof conditions." },
              ].map((addon) => (
                <div key={addon.name} className="border border-cream-200 bg-white px-6 py-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-base font-bold text-slate-900">{addon.name}</h3>
                    <span className="font-body text-lg font-semibold text-copper-600">{addon.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{addon.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
              How It Works
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Our Inspection Process
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <RevealOnScroll key={step.step}>
                <div className="relative pl-12">
                  <span className="absolute left-0 top-0 font-body text-3xl font-bold text-copper-500/30">
                    {step.step}
                  </span>
                  <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
              Client Feedback
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Real clients. Real clarity.
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t) => (
              <RevealOnScroll key={t.name}>
                <blockquote className="flex h-full flex-col border-l-2 border-copper-300 py-2 pl-6">
                  <p className="flex-1 text-[0.938rem] leading-relaxed text-slate-700 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-5">
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </footer>
                </blockquote>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="border-t border-cream-200 bg-cream-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                Service Areas
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Melbourne &amp; Greater Victoria &middot; Selected regional areas
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Travel fees apply only outside standard zones.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to protect your investment?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              Choose your service, select your time, and upload your property details.
              We&apos;ll take care of the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600"
              >
                Book Now
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
