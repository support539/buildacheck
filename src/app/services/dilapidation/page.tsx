import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Dilapidation Report",
  description:
    "Pre-construction dilapidation reports in Melbourne. Protect yourself from neighbour disputes with BuildaCheck's detailed condition documentation.",
};

export default function DilapidationPage() {
  return (
    <ServicePageLayout
      title="Dilapidation Report"
      subtitle="Protect Your Project. Prevent Disputes. Document Everything."
      heroImage="/images/hero-dilapidation.webp"
      heroImageAlt="Building surveyor measuring cracks in concrete wall"
      intro="A Dilapidation Report is a pre-construction condition assessment of neighbouring properties, council assets, or surrounding structures before building, excavation, demolition, or major renovation works begin. BuildaCheck provides builder-grade, evidence-driven documentation that protects you from false claims, disputes, and liability during and after construction."
      sections={{
        whatItCovers: {
          title: "What This Inspection Covers",
          items: [
            "Structural cracks (internal and external)",
            "Settlement, movement, and deformation",
            "Walls, ceilings, floors, and finishes",
            "Driveways, paths, retaining walls, fences, and landscaping",
            "External facades, cladding, brickwork, render",
            "Roofing, gutters, downpipes, and drainage elements",
            "Council assets (footpaths, kerbs, crossovers, nature strips)",
            "Neighbouring structures and shared boundaries",
            "Any pre-existing defects or deterioration",
          ],
        },
        whyItMatters: {
          intro:
            "Construction works — especially excavation, piling, demolition, or heavy machinery use — can cause vibration, movement, or cracking in nearby structures. Without a baseline record, you may be held responsible for damage you did not cause.",
          items: [
            "Establish a clear pre-works condition baseline",
            "Protect yourself from false or exaggerated claims",
            "Provide evidence to councils, neighbours, and contractors",
            "Avoid costly disputes and delays",
            "Maintain transparency and trust with all stakeholders",
          ],
        },
        whatYouReceive: [
          "High-resolution photographic record of all inspected areas",
          "Detailed written descriptions of existing conditions",
          "Location-referenced defect documentation",
          "Time-stamped evidence for legal and contractual protection",
          "Pre- and post-works comparison capability",
          "Clear, builder-readable formatting",
          "24–48 hour turnaround",
        ],
        whoItsFor: [
          "Builders and contractors",
          "Developers",
          "Homeowners undertaking major renovations",
          "Excavation and demolition contractors",
          "Neighbouring property owners seeking protection",
          "Councils requiring pre-works documentation",
        ],
        addOns: [
          "Drone roof inspection",
          "Thermal imaging",
          "Moisture mapping",
        ],
        howItProtects: [
          "You have clear evidence of pre-existing conditions",
          "You are protected from liability for unrelated damage",
          "Disputes can be resolved quickly and fairly",
          "Councils and neighbours receive transparent documentation",
          "Your project proceeds with confidence and compliance",
        ],
      }}
    />
  );
}
