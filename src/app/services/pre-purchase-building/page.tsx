import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Pre-Purchase Building Inspection",
  description:
    "Get a thorough pre-purchase building inspection in Melbourne before you buy. Builder-grade accuracy, detailed reports, and fast turnaround from BuildaCheck.",
};

export default function PrePurchaseBuildingPage() {
  return (
    <ServicePageLayout
      title="Pre-Purchase Building Inspection"
      subtitle="Builder-Grade Accuracy for Confident Property Decisions"
      heroImage="/images/hero-pre-purchase.webp"
      heroImageAlt="Building inspector examining exterior of Australian house"
      intro="A BuildaCheck Pre-Purchase Building Inspection gives you the clarity and certainty you need before committing to a property. Every inspection is carried out by construction professionals who understand how homes are built, how defects form, and what they mean for your safety, budget, and long-term maintenance."
      sections={{
        whatItCovers: {
          title: "What This Inspection Covers",
          items: [
            "Structural integrity — foundations, framing, load-bearing elements",
            "Moisture, movement & cracking — identification and likely cause",
            "Roofing & drainage — tiles, metal roofing, flashings, gutters",
            "Plumbing & electrical (visual) — safety and compliance indicators",
            "Interior condition — walls, ceilings, floors, windows, doors",
            "Exterior condition — cladding, brickwork, render, decks, balconies",
            "Safety hazards — trip hazards, balustrades, fire risks",
            "Major vs minor defect classification — aligned with NCC and Australian Standards",
          ],
        },
        whyItMatters: {
          intro:
            "BuildaCheck inspections are built on construction expertise, not generic checklists.",
          items: [
            "Evidence-driven with clear photographic documentation",
            "Standards-aligned referencing NCC, AS 4349.1, AS 1684, AS 2870 and more",
            "Causation-focused, explaining why defects exist",
            "Builder-readable, ensuring clarity for trades and contractors",
            "Decision-ready, giving you confidence to negotiate or proceed",
          ],
        },
        whatYouReceive: [
          "Comprehensive digital report with high-resolution photos",
          "Defect severity matrix (Major / Minor / Safety / Maintenance)",
          "Causation analysis for each significant defect",
          "Repair urgency guidance",
          "Short- and long-term risk forecast",
          "Negotiation summary to support price adjustments or conditions",
          "24–48 hour turnaround",
        ],
        whoItsFor: [
          "Home buyers",
          "Investors",
          "Pre-auction due diligence",
          "Families wanting clarity before committing",
        ],
        addOns: [
          "Timber pest inspection",
          "Moisture mapping",
          "Thermal imaging",
          "Drone roof inspection",
        ],
        howItProtects: [
          "Avoid unexpected repair costs",
          "Strengthen your negotiation position",
          "Understand the true condition of the home",
          "Identify safety risks before moving in",
          "Make a confident, informed decision",
        ],
      }}
    />
  );
}
