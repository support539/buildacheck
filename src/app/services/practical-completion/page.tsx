import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Practical Completion Inspection (PCI)",
};

export default function PracticalCompletionPage() {
  return (
    <ServicePageLayout
      title="Practical Completion Inspection (PCI)"
      subtitle="Builder-Grade Handover Inspections for a Defect-Free New Home"
      intro="A Practical Completion Inspection is the final and most important quality check before you take possession of your newly built home. BuildaCheck conducts PCI inspections with builder-level expertise, ensuring every defect, omission, and non-compliant item is identified before you make your final payment."
      sections={{
        whatItCovers: {
          title: "What a PCI Inspection Covers",
          items: [
            "NCC and Australian Standards compliance",
            "Workmanship defects across all trades",
            "Incomplete or missing items",
            "Cosmetic defects within tolerance guidelines",
            "Doors, windows, cabinetry, tiling, flooring, paintwork",
            "Plumbing fixtures, drainage, tapware, appliances",
            "Electrical fixtures, switches, lighting, safety elements",
            "Roofing, gutters, downpipes, external finishes",
            "Functionality checks (opening, closing, alignment, operation)",
            "Safety hazards and non-compliant installations",
          ],
        },
        whyItMatters: {
          intro:
            "The PCI stage is your last opportunity to ensure the builder delivers the home to the standard you paid for.",
          items: [
            "Identify defects before handover",
            "Ensure compliance with NCC and contract specifications",
            "Avoid disputes by having clear, documented evidence",
            "Prevent costly post-handover repairs",
            "Hold the builder accountable with a structured defect list",
          ],
        },
        whatYouReceive: [
          "Comprehensive defect list with photos",
          "Standards references for non-compliant items",
          "Rectification instructions written in builder-readable language",
          "Trade-specific categorisation",
          "Severity and urgency classification",
          "Follow-up list for builder accountability",
          "24–48 hour turnaround",
        ],
        whoItsFor: [
          "Clients building a new home",
          "House & land package buyers",
          "Custom home builds",
          "Townhouse and unit developments",
          "Anyone preparing for final handover",
        ],
        addOns: [
          "Moisture mapping",
          "Thermal imaging",
          "Drone roof inspection",
        ],
        howItProtects: [
          "Your home meets the standard you paid for",
          "Defects are identified before handover",
          "You avoid disputes and delays",
          "You receive a home that is safe, compliant, and complete",
          "You enter handover with confidence, not uncertainty",
        ],
      }}
    />
  );
}
