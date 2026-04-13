export interface PageImageAsset {
  src: `/images/${string}`;
  alt: string;
  width: number;
  height: number;
  heroMode: "full-bleed";
  overlayClass: string;
  objectPosition?: string;
}

export const pageImagery = {
  dsiHero: {
    src: "/images/hero-dsi-intelligence.webp",
    alt: "Drone surveying a commercial roof and facade for digital site intelligence capture.",
    width: 1600,
    height: 1200,
    heroMode: "full-bleed",
    overlayClass: "bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80",
    objectPosition: "center center",
  },
  pricingHero: {
    src: "/images/hero-pricing-intelligence.webp",
    alt: "Inspection documents, plans, and digital site intelligence tools arranged across a premium workspace.",
    width: 1600,
    height: 900,
    heroMode: "full-bleed",
    overlayClass: "bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80",
    objectPosition: "center center",
  },
} satisfies Record<string, PageImageAsset>;
