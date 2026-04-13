import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { href: "/buildacheck", label: "BuildaCheck" },
  { href: "/digital-site-intelligence", label: "BuildaScan (DSI)" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book", label: "Book a Service" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const specialistLinks = [
  { href: "/services/pre-purchase-building", label: "Pre-Purchase Building Inspection" },
  { href: "/services/building-pest", label: "Pre-Purchase Building + Pest" },
  { href: "/services/practical-completion", label: "Practical Completion (PCI)" },
  { href: "/services/warranty", label: "Warranty Inspection" },
  { href: "/services/dilapidation", label: "Dilapidation Report" },
  { href: "/services/expert-witness", label: "Expert Witness Report" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1fr] lg:gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo-icon.svg"
                alt=""
                width={40}
                height={40}
                className="size-10 shrink-0 brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-display text-2xl leading-none text-white">
                  Builda<span className="text-copper-400">Check</span>
                </span>
                <span className="mt-1 text-[0.68rem] font-medium uppercase text-slate-500">
                  Inspection + Site Intelligence
                </span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400 text-pretty">
              One construction intelligence ecosystem for inspections, reporting, mapping, thermal capture, and defensible site evidence.
            </p>
            <div className="mt-8 flex flex-col items-start">
              <p className="text-[0.68rem] font-medium uppercase text-slate-500">
                BuildaScan Digital Site Intelligence
              </p>
              <Image
                src="/images/buildascan-logo.png"
                alt="BuildaScan logo"
                width={260}
                height={173}
                className="mt-3 h-auto w-[240px] max-w-full object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-400">
              Product Links
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-400">
              Specialist Services
            </h4>
            <ul className="space-y-3">
              {specialistLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-copper-400">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="tel:0499919992" className="transition-colors hover:text-white">
                  0499 919 992
                </a>
              </li>
              <li>
                <a href="mailto:info@buildacheck.com.au" className="transition-colors hover:text-white">
                  info@buildacheck.com.au
                </a>
              </li>
              <li>Melbourne &amp; Greater Victoria</li>
              <li>Mon-Fri 8am-6pm</li>
              <li>Sat 9am-2pm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-5 sm:px-8">
          <Image
            src="/images/vba-logo.webp"
            alt="Victorian Building Authority"
            width={160}
            height={48}
            className="h-12 w-auto opacity-80 transition-opacity hover:opacity-100"
          />
          <Image
            src="/images/rbp-logo.webp"
            alt="Registered Building Practitioner"
            width={160}
            height={48}
            className="h-12 w-auto opacity-80 transition-opacity hover:opacity-100"
          />
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/images/citadel-logo.png"
              alt="Citadel Building Group"
              width={132}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <p className="text-xs text-slate-500">Part of the Citadel Building Group ecosystem.</p>
          </div>
          <p className="text-xs text-slate-500">&copy; 2026 BuildaCheck. All rights reserved.</p>
        </div>
      </div>

      <div className="bg-slate-950 py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-xs text-slate-500 sm:px-8">
          {["BuildaCheck inspections", "BuildaScan DSI", "Regulator-aligned reporting", "Quoted enterprise capture"].map(
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
