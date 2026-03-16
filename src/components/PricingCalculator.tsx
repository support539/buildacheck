"use client";

import { useState, useMemo } from "react";

const PRICES: Record<string, Record<string, number>> = {
  "pre-purchase": {
    apartment: 399, townhouse: 449, "single-storey": 499,
    "double-storey": 549, "large-home": 599,
  },
  "building-pest": {
    apartment: 499, townhouse: 549, "single-storey": 599,
    "double-storey": 649, "large-home": 699,
  },
  pci: {
    townhouse: 449, "single-storey": 499,
    "double-storey": 549, "large-home": 599,
  },
  warranty: {
    apartment: 399, townhouse: 449, "single-storey": 499,
    "double-storey": 549,
  },
  dilapidation: { "single-property": 449 },
  "expert-witness": { "single-dwelling": 899 },
};

const SERVICE_LABELS: Record<string, string> = {
  "pre-purchase": "Pre-Purchase Building Inspection",
  "building-pest": "Pre-Purchase Building + Pest",
  pci: "Practical Completion (PCI)",
  warranty: "Warranty Inspection",
  dilapidation: "Dilapidation Report",
  "expert-witness": "Expert Witness Report",
};

const PROPERTY_LABELS: Record<string, string> = {
  apartment: "Apartment / Unit",
  townhouse: "Townhouse",
  "single-storey": "Single-storey house",
  "double-storey": "Double-storey house",
  "large-home": "Large home (5+ bedrooms)",
  "single-property": "Single property",
  "single-dwelling": "Single dwelling",
};

const ADDONS = [
  { id: "moisture", label: "Moisture mapping", price: 79 },
  { id: "thermal", label: "Thermal imaging", price: 99 },
  { id: "drone", label: "Drone roof inspection", price: 129 },
];

export default function PricingCalculator() {
  const [service, setService] = useState("");
  const [property, setProperty] = useState("");
  const [addons, setAddons] = useState<Set<string>>(new Set());

  const propertyOptions = useMemo(() => {
    if (!service) return [];
    return Object.keys(PRICES[service] || {});
  }, [service]);

  const basePrice = service && property ? PRICES[service]?.[property] : null;

  const addonTotal = useMemo(() => {
    return ADDONS.reduce((sum, a) => sum + (addons.has(a.id) ? a.price : 0), 0);
  }, [addons]);

  const total = basePrice !== null && basePrice !== undefined ? basePrice + addonTotal : null;

  const toggleAddon = (id: string) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Service Select */}
      <div className="mb-6">
        <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
          1. Inspection Type
        </label>
        <select
          value={service}
          onChange={(e) => { setService(e.target.value); setProperty(""); }}
          className="w-full border border-cream-200 bg-white px-4 py-3.5 text-[0.938rem] text-slate-800 focus:border-copper-500 focus:outline-none"
        >
          <option value="">Select an inspection</option>
          {Object.entries(SERVICE_LABELS).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {/* Property Select */}
      <div className="mb-6">
        <label className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
          2. Property Type
        </label>
        <select
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          disabled={!service}
          className="w-full border border-cream-200 bg-white px-4 py-3.5 text-[0.938rem] text-slate-800 transition-colors focus:border-copper-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-cream-50 disabled:text-slate-400"
        >
          <option value="">Select property type</option>
          {propertyOptions.map((key) => (
            <option key={key} value={key}>{PROPERTY_LABELS[key] || key}</option>
          ))}
        </select>
      </div>

      {/* Add-Ons */}
      <div className="mb-8">
        <label className="mb-3 block font-body text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
          3. Optional Add-Ons
        </label>
        <div className="space-y-3">
          {ADDONS.map((addon) => (
            <label
              key={addon.id}
              className={`flex cursor-pointer items-center justify-between border px-4 py-3.5 transition-all ${
                addons.has(addon.id)
                  ? "border-copper-500 bg-copper-50"
                  : "border-cream-200 bg-white hover:border-cream-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={addons.has(addon.id)}
                  onChange={() => toggleAddon(addon.id)}
                  className="h-4 w-4 accent-copper-500"
                />
                <span className="text-[0.938rem] text-slate-700">{addon.label}</span>
              </div>
              <span className="text-sm font-medium text-copper-600">+${addon.price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Display */}
      {total !== null && (
        <div className="border-t-2 border-copper-500 bg-slate-900 px-6 py-8 text-center">
          <p className="mb-1 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-400">
            Your Price
          </p>
          <p className="font-display text-4xl font-bold text-white">
            ${total.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Includes GST &middot; No hidden fees
          </p>
          <button className="mt-6 w-full bg-copper-500 px-6 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-copper-600">
            Continue to Booking
          </button>
        </div>
      )}

      {!total && service && property && (
        <div className="border border-cream-200 bg-cream-50 px-6 py-6 text-center">
          <p className="text-sm text-slate-500">
            Custom quote required. <a href="/contact" className="text-copper-600 underline">Contact us</a> for pricing.
          </p>
        </div>
      )}
    </div>
  );
}
