"use client";

import Link from "next/link";
import { useState } from "react";
import {
  calculateBookableTotal,
  getAvailableAddOnsForOffer,
  getBookableOffersByCategory,
} from "@/lib/pricing";

const categories = [
  {
    id: "buildacheck" as const,
    label: "BuildaCheck",
    desc: "Fixed-price premium inspections and evidence packs.",
  },
  {
    id: "dsi" as const,
    label: "Digital Site Intelligence",
    desc: "Fixed-price BuildaScan packages with optional intelligence add-ons.",
  },
];

const buildaCheckOffers = getBookableOffersByCategory("buildacheck");
const dsiOffers = getBookableOffersByCategory("dsi");

export default function PricingCalculator() {
  const [category, setCategory] = useState<"buildacheck" | "dsi">("buildacheck");
  const [offerId, setOfferId] = useState(buildaCheckOffers[0]?.id ?? "");
  const [addons, setAddons] = useState<Set<string>>(new Set());

  const offers = category === "buildacheck" ? buildaCheckOffers : dsiOffers;
  const selectedOffer = offers.find((offer) => offer.id === offerId) ?? offers[0];
  const availableAddOns = selectedOffer ? getAvailableAddOnsForOffer(selectedOffer.id) : [];
  const total = selectedOffer
    ? calculateBookableTotal(selectedOffer.id, Array.from(addons))
    : null;

  const switchCategory = (nextCategory: "buildacheck" | "dsi") => {
    const nextOffers = nextCategory === "buildacheck" ? buildaCheckOffers : dsiOffers;
    setCategory(nextCategory);
    setOfferId(nextOffers[0]?.id ?? "");
    setAddons(new Set());
  };

  const toggleAddon = (id: string) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-8">
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              1. Choose a service line
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {categories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => switchCategory(item.id)}
                  aria-pressed={category === item.id}
                  className={`border px-5 py-4 text-left transition-colors ${
                    category === item.id
                      ? "border-copper-500 bg-copper-50"
                      : "border-cream-200 bg-white hover:border-cream-300"
                  }`}
                >
                  <p className="font-display text-lg font-bold text-slate-900 text-balance">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              2. Choose a package
            </p>
            <div className="space-y-3">
              {offers.map((offer) => {
                const isSelected = selectedOffer?.id === offer.id;

                return (
                  <button
                    key={offer.id}
                    type="button"
                    onClick={() => {
                      setOfferId(offer.id);
                      setAddons(new Set());
                    }}
                    className={`w-full border px-5 py-5 text-left transition-colors ${
                      isSelected
                        ? "border-copper-500 bg-copper-50"
                        : "border-cream-200 bg-white hover:border-cream-300"
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-slate-900 text-balance">
                        {offer.name}
                      </h3>
                      <span className="font-body text-lg font-semibold text-copper-600 tabular-nums">
                        {offer.priceLabel}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 text-pretty">
                      {offer.summary}
                    </p>
                    {offer.bestFor && (
                      <p className="mt-3 text-xs font-medium uppercase text-slate-500">
                        Best for: {offer.bestFor}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {category === "dsi" && (
            <div>
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                3. Exact-price add-ons
              </p>
              <div className="space-y-3">
                {availableAddOns.map((addon) => (
                  <label
                    key={addon.id}
                    className={`flex cursor-pointer items-center justify-between border px-4 py-3.5 transition-colors ${
                      addons.has(addon.id)
                        ? "border-copper-500 bg-copper-50"
                        : "border-cream-200 bg-white hover:border-cream-300"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={addons.has(addon.id)}
                        onChange={() => toggleAddon(addon.id)}
                        className="mt-1 h-4 w-4 accent-copper-500"
                      />
                      <div>
                        <p className="text-[0.938rem] font-medium text-slate-700 text-balance">
                          {addon.name}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-500 text-pretty">
                          {addon.summary}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-copper-600 tabular-nums">
                      {addon.priceLabel}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="border border-cream-200 bg-white p-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
            Exact Price
          </p>
          {selectedOffer && total !== null ? (
            <>
              <h3 className="mt-3 font-display text-2xl font-bold text-slate-900 text-balance">
                {selectedOffer.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
                {selectedOffer.summary}
              </p>
              <div className="mt-6 border-t border-cream-200 pt-6">
                <p className="text-xs font-medium uppercase text-slate-500">
                  Package total
                </p>
                <p className="mt-2 font-display text-4xl font-bold text-slate-900 tabular-nums">
                  ${total.toLocaleString()}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Includes GST. Fixed-price packages only.
                </p>
              </div>
              <ul className="mt-6 space-y-3 border-t border-cream-200 pt-6">
                {(selectedOffer.includes ?? []).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                    <span className="leading-relaxed text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center bg-copper-500 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
              >
                Confirm Booking Details
              </Link>
            </>
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
              Select a fixed-price package to see the exact total.
            </p>
          )}

          <div className="mt-6 border-t border-cream-200 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Need a quoted scope?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 text-pretty">
              Combined packages, large-format scanning, and specialist inspection scopes sit on the pricing page and are quoted separately.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-copper-500 hover:text-copper-600"
              >
                View Full Pricing
              </Link>
              <Link
                href="/digital-site-intelligence"
                className="inline-flex items-center border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-copper-500 hover:text-copper-600"
              >
                Explore DSI
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
