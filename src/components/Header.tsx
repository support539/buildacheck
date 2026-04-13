"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const buildaCheckLinks = [
  { href: "/buildacheck", label: "BuildaCheck Overview" },
  { href: "/services/pre-purchase-building", label: "Pre-Purchase Building Inspection" },
  { href: "/services/building-pest", label: "Pre-Purchase Building + Pest" },
  { href: "/services/practical-completion", label: "Practical Completion (PCI)" },
  { href: "/services/warranty", label: "Warranty Inspection" },
  { href: "/services/dilapidation", label: "Dilapidation Report" },
  { href: "/services/expert-witness", label: "Expert Witness Report" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/digital-site-intelligence", label: "Digital Site Intelligence" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [buildaCheckOpen, setBuildaCheckOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setBuildaCheckOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const isBuildaCheckPage = pathname.startsWith("/buildacheck") || pathname.startsWith("/services");

  return (
    <>
      <header
        className={`site-header fixed left-0 right-0 top-0 z-50 bg-cream-50/80 backdrop-blur-sm ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-icon.svg"
                alt=""
                width={36}
                height={36}
                className="size-9"
                priority
              />
              <span className="font-display text-xl text-slate-900">
                Builda<span className="text-copper-600">Check</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
              <Link
                href="/"
                className={`copper-underline text-[0.938rem] transition-colors ${
                  isActive("/") ? "font-medium text-copper-600" : "text-slate-700 hover:text-copper-600"
                }`}
              >
                Home
              </Link>

              <div className="service-trigger relative">
                <button
                  type="button"
                  aria-label="Open BuildaCheck menu"
                  className={`copper-underline flex items-center gap-1 text-[0.938rem] transition-colors ${
                    isBuildaCheckPage
                      ? "font-medium text-copper-600"
                      : "text-slate-700 hover:text-copper-600"
                  }`}
                >
                  BuildaCheck
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="service-dropdown absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                  <div className="border border-cream-200 bg-white py-2 shadow-lg shadow-slate-900/5">
                    {buildaCheckLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-2.5 text-sm text-slate-700 transition-colors hover:bg-cream-50 hover:text-copper-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`copper-underline text-[0.938rem] transition-colors ${
                    isActive(link.href)
                      ? "font-medium text-copper-600"
                      : "text-slate-700 hover:text-copper-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/book"
                className="hidden items-center bg-copper-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-600 sm:inline-flex"
              >
                Book Now
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="-mr-2 p-2 text-slate-700 lg:hidden"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-overlay fixed inset-0 z-50 bg-slate-900/40 ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      <div className={`mobile-menu fixed bottom-0 right-0 top-0 z-50 w-[320px] overflow-y-auto bg-cream-50 ${menuOpen ? "open" : ""}`}>
        <div className="flex h-[72px] items-center justify-between border-b border-cream-200 px-5">
          <span className="font-display text-lg text-slate-900">Menu</span>
          <button type="button" onClick={closeMenu} className="-mr-2 p-2 text-slate-500" aria-label="Close menu">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-5 py-4" aria-label="Mobile navigation">
          <Link href="/" onClick={closeMenu} className="block border-b border-cream-100 py-3 font-medium text-slate-800">
            Home
          </Link>

          <div className="border-b border-cream-100">
            <button
              type="button"
              onClick={() => setBuildaCheckOpen((open) => !open)}
              className="flex w-full items-center justify-between py-3 font-medium text-slate-800"
            >
              BuildaCheck
              <svg
                className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${buildaCheckOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`faq-answer ${buildaCheckOpen ? "open" : ""}`}>
              <div>
                {buildaCheckLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 pl-4 text-sm text-slate-600 hover:text-copper-600"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block border-b border-cream-100 py-3 font-medium text-slate-800"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/book"
            onClick={closeMenu}
            className="mt-5 block bg-copper-500 px-5 py-3 text-center font-medium text-white transition-colors hover:bg-copper-600"
          >
            Book Now
          </Link>
        </nav>
      </div>

      <div className="h-[72px]" />
    </>
  );
}
