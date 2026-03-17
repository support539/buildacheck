import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Pre-Purchase Building + Pest Inspection",
  description:
    "Combined building and pest inspection in Melbourne. One visit, one integrated report covering structural defects and timber pests. Book with BuildaCheck today.",
};

export default function BuildingPestPage() {
  return (
    <ServicePageLayout
      title="Pre-Purchase Building + Pest Inspection"
      subtitle="One Comprehensive Inspection. Complete Peace of Mind."
      heroImage="/images/hero-building-pest.webp"
      heroImageAlt="Pest inspector using thermal camera to scan walls"
      intro="A BuildaCheck Pre-Purchase Building + Pest Inspection combines two critical assessments into one seamless service. You receive a builder-grade structural inspection and a timber pest inspection in a single, integrated report — giving you a complete understanding of the property's condition before you commit."
      sections={{
        whatItCovers: {
          title: "What This Combined Inspection Covers",
          items: [
            "Structural integrity (foundations, framing, load-bearing elements)",
            "Moisture, movement & cracking (identification + likely cause)",
            "Roofing & drainage (tiles, metal roofing, flashings, gutters)",
            "Plumbing & electrical (visual safety indicators)",
            "Interior condition (walls, ceilings, floors, windows, doors)",
            "Exterior condition (cladding, brickwork, render, decks, balconies)",
            "Termite activity (current or past)",
            "Timber decay, fungal rot, moisture-affected timber",
            "Conducive conditions (subfloor moisture, vegetation, drainage issues)",
            "Evidence of borer or wood-destroying insects",
            "Risk assessment for future pest activity",
          ],
        },
        whyItMatters: {
          intro:
            "Buying a property without both assessments leaves blind spots.",
          items: [
            "Whether the home has structural defects",
            "Whether there is active or historical termite activity",
            "Whether conditions exist that could lead to future pest problems",
            "Whether moisture or drainage issues are creating hidden risks",
            "Whether the home is safe, sound, and worth the price",
          ],
        },
        whatYouReceive: [
          "High-resolution photographic evidence",
          "Integrated findings (building + pest in one report)",
          "Defect severity matrix (Major / Minor / Safety / Maintenance)",
          "Timber pest risk assessment",
          "Causation analysis for significant issues",
          "Repair urgency guidance",
          "Negotiation summary for buyers and agents",
          "24–48 hour turnaround",
        ],
        whoItsFor: [
          "Buyers wanting the highest level of due diligence",
          "Investors purchasing older homes",
          "Buyers in areas with known termite activity",
          "Pre-auction buyers needing fast, accurate clarity",
          "Anyone wanting a single, comprehensive inspection",
        ],
        addOns: [
          "Moisture mapping",
          "Thermal imaging",
          "Drone roof inspection",
        ],
        howItProtects: [
          "Avoid unexpected structural or pest-related repair costs",
          "Strengthen your negotiation position",
          "Understand the true condition of the home",
          "Identify hidden risks before moving in",
          "Make a confident, informed decision",
        ],
      }}
    />
  );
}
