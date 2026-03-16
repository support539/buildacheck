import Link from "next/link";

const services = [
  { href: "/services/pre-purchase-building", label: "Pre-Purchase Building Inspection" },
  { href: "/services/building-pest", label: "Pre-Purchase Building + Pest" },
  { href: "/services/practical-completion", label: "Practical Completion (PCI)" },
  { href: "/services/warranty", label: "Warranty Inspection" },
  { href: "/services/dilapidation", label: "Dilapidation Report" },
  { href: "/services/expert-witness", label: "Expert Witness Report" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/book", label: "Book an Inspection" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center bg-copper-500">
                <div className="h-3.5 w-3.5 border-2 border-white" />
              </div>
              <span className="font-display text-lg tracking-tight text-white">
                Builda<span className="text-copper-400">Check</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Builder-grade property inspections backed by construction expertise, standards-aligned
              reporting, and evidence-driven defect analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-400">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-400">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1300 XXX XXX
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@buildacheck.com.au
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Mon&ndash;Fri: 8am&ndash;6pm
                  <br />
                  Sat: 9am&ndash;2pm
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Melbourne &amp; Greater Victoria
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8">
          <p className="text-xs text-slate-500">&copy; 2026 BuildaCheck. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-slate-300">Terms &amp; Conditions</a>
            <a href="#" className="transition-colors hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-slate-300">Inspection Agreement</a>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="bg-slate-950 py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-xs text-slate-500 sm:px-8">
          {["Fully Insured", "Qualified Inspectors", "Standards-Aligned Reporting", "VCAT Expert Witness"].map(
            (badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-copper-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {badge}
              </span>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
