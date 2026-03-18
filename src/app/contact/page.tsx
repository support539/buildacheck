"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

// export const metadata: Metadata — cannot use with "use client";
// Title is set via the layout template in generateMetadata or useEffect.
// For App Router "use client" pages, export metadata from a separate layout or use <title>.

const inspectionTypes = [
  "Pre-Purchase Building Inspection",
  "Pre-Purchase Building + Pest",
  "Practical Completion (PCI)",
  "Warranty Inspection",
  "Dilapidation Report",
  "Expert Witness Report",
  "Other / Not Sure",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inspectionType: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: integrate with backend / API route
    setSubmitted(true);
  }

  return (
    <>
      {/* Page title for App Router */}
      <title>Contact Us | BuildaCheck</title>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-32">
        <Image
          src="/images/hero-contact.webp"
          alt="Inspector reviewing architectural plans"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 h-[2px] w-20 bg-copper-500" />
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Contact <span className="text-copper-400">Us</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              We&apos;re here to help you make confident, informed property
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="bg-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <RevealOnScroll>
            <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
              {/* Left — Form */}
              <div className="lg:col-span-3">
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Get In Touch
                </p>
                <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="mt-8 border border-copper-200 bg-copper-50 px-6 py-8">
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      Thank you for your enquiry
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      We&apos;ve received your message and will be in touch
                      within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-cream-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus:border-copper-500 focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full border border-cream-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus:border-copper-500 focus:outline-none"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-slate-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full border border-cream-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus:border-copper-500 focus:outline-none"
                          placeholder="04XX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="inspectionType"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Inspection Type
                      </label>
                      <select
                        id="inspectionType"
                        name="inspectionType"
                        value={form.inspectionType}
                        onChange={handleChange}
                        className="w-full border border-cream-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus:border-copper-500 focus:outline-none"
                      >
                        <option value="">Select an inspection type</option>
                        {inspectionTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Property Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full border border-cream-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus:border-copper-500 focus:outline-none"
                        placeholder="Property address to be inspected"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-cream-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors focus:border-copper-500 focus:outline-none"
                        placeholder="Tell us about your property or any specific concerns..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Right — Contact Details */}
              <div className="lg:col-span-2">
                <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                  Contact Details
                </p>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  Reach Us Directly
                </h2>

                <div className="mt-8 space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-copper-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Phone
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600">
                        <a href="tel:0499919992" className="text-copper-600 transition-colors hover:text-copper-700">0499 919 992</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-copper-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Email
                      </p>
                      <a
                        href="mailto:info@buildacheck.com.au"
                        className="mt-0.5 text-sm text-copper-600 transition-colors hover:text-copper-700"
                      >
                        info@buildacheck.com.au
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-copper-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Business Hours
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600">
                        Mon&ndash;Fri: 8am&ndash;6pm
                      </p>
                      <p className="text-sm text-slate-600">
                        Sat: 9am&ndash;2pm
                      </p>
                    </div>
                  </div>
                </div>

                {/* Builders / Developers / Legal */}
                <div className="mt-10 border-t border-cream-200 pt-8">
                  <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
                    For Builders, Developers &amp; Legal
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    For project-related enquiries, multi-site inspections, or
                    expert witness engagements, contact our projects team
                    directly.
                  </p>
                  <a
                    href="mailto:info@buildacheck.com.au"
                    className="mt-3 inline-block text-sm font-medium text-copper-600 transition-colors hover:text-copper-700"
                  >
                    info@buildacheck.com.au
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
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
                Melbourne &amp; Greater Victoria &middot; Selected regional
                areas
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
              Choose your service, select your time, and upload your property
              details. We&apos;ll take care of the rest.
            </p>
            <div className="mt-8">
              <a
                href="/book"
                className="inline-flex items-center bg-copper-500 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600"
              >
                Book an Inspection
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
