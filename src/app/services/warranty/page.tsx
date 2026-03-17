import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Warranty Inspection",
  description:
    "Don't let defects go unclaimed. BuildaCheck warranty inspections in Melbourne document issues before your builder's warranty expires. Book now.",
};

export default function WarrantyPage() {
  return (
    <ServicePageLayout
      title="Warranty Inspection"
      subtitle="Identify Defects Early. Protect Your Warranty Rights."
      heroImage="/images/hero-warranty.webp"
      heroImageAlt="Inspector documenting defects in a home"
      intro="A Warranty Inspection ensures that any defects, incomplete works, or non-compliant items in your home are identified before your statutory warranty period expires. BuildaCheck conducts these inspections with builder-grade expertise, giving you a clear, evidence-driven report you can confidently present to your builder, insurer, or warranty provider."
      sections={{
        whatItCovers: {
          title: "What This Inspection Covers",
          items: [
            "Structural defects such as movement, cracking, or settlement",
            "Waterproofing and moisture issues in wet areas and external elements",
            "Roofing, gutters, downpipes, and drainage performance",
            "Internal finishes including walls, ceilings, floors, cabinetry, tiling, and paintwork",
            "External finishes including cladding, render, brickwork, decks, and balconies",
            "Plumbing fixtures and drainage function",
            "Electrical fixtures, switches, lighting, and safety elements",
            "Incomplete, deteriorating, or non-compliant items",
            "Safety hazards",
            "Defects that fall under statutory warranty obligations",
          ],
        },
        whyItMatters: {
          intro:
            "Warranty periods are limited. Once they expire, repair costs become your responsibility.",
          items: [
            "Identify defects while they are still covered",
            "Document issues with clear photographic evidence",
            "Understand which defects fall under warranty obligations",
            "Provide your builder or insurer with a structured defect list",
            "Avoid costly repairs after the warranty period ends",
          ],
        },
        whatYouReceive: [
          "Comprehensive defect list with high-resolution photos",
          "Standards references for non-compliant items",
          "Warranty classification (structural, non-structural, workmanship)",
          "Rectification guidance written in builder-readable language",
          "Severity and urgency ratings",
          "Follow-up list for builder accountability",
          "24–48 hour turnaround",
        ],
        whoItsFor: [
          "Homeowners approaching the end of their warranty period",
          "Owners of homes less than six years old",
          "Owner-builders preparing for warranty insurance",
          "Builders wanting a third-party defect list before handover",
          "Anyone concerned about defects that may worsen over time",
        ],
        addOns: [
          "Moisture mapping",
          "Thermal imaging",
          "Drone roof inspection",
        ],
        howItProtects: [
          "Defects are identified before your warranty expires",
          "You have clear evidence to support your claim",
          "Builders and insurers receive a structured, standards-aligned defect list",
          "You avoid paying for repairs that should be covered",
          "Your home remains safe, compliant, and performing as intended",
        ],
      }}
    />
  );
}
