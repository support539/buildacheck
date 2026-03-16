import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Expert Witness Report",
};

export default function ExpertWitnessPage() {
  return (
    <ServicePageLayout
      title="Expert Witness Report"
      subtitle="Tribunal-Ready Reporting. Builder-Grade Expertise. Independent, Defensible Evidence."
      intro="An Expert Witness Report is a formal, standards-aligned document prepared for building disputes, insurance claims, and tribunal proceedings. BuildaCheck provides expert reporting grounded in construction expertise, defect causation analysis, and strict compliance with expert evidence requirements."
      sections={{
        whatItCovers: {
          title: "What an Expert Witness Report Covers",
          items: [
            "Defect identification with photographic evidence",
            "Causation analysis explaining how and why defects occurred",
            "Standards references (NCC, Australian Standards, Guide to Standards & Tolerances)",
            "Assessment of workmanship and compliance",
            "Impact and risk analysis",
            "Rectification recommendations",
            "Expert opinion based on construction experience",
            "VCAT-compliant expert declaration",
          ],
        },
        whyItMatters: {
          intro:
            "An Expert Witness Report provides clarity, authority, and defensibility in situations where standard inspection reports are not sufficient.",
          items: [
            "You are involved in a VCAT building dispute",
            "You need an independent expert opinion",
            "Your builder disputes responsibility for defects",
            "You require evidence for an insurance claim",
            "You need a formal rebuttal to another expert's report",
            "You are preparing for a hearing, mediation, or compulsory conference",
          ],
        },
        whatYouReceive: [
          "Detailed defect descriptions with high-resolution photos",
          "Causation reasoning supported by technical analysis",
          "Standards-based assessment referencing NCC and relevant Australian Standards",
          "Clear, independent expert opinion",
          "Rectification guidance suitable for builders and contractors",
          "Appendices with evidence packs (photos, measurements, diagrams)",
          "VCAT-compliant declaration of independence",
          "Optional appearance at hearing (hourly rate)",
        ],
        whoItsFor: [
          "Homeowners in dispute with builders",
          "Builders requiring independent expert evidence",
          "Lawyers and legal representatives",
          "Insurance claimants",
          "Owners corporations",
          "Clients needing a rebuttal to another expert's report",
        ],
        addOns: [
          "Rebuttal report responding to another expert's findings",
          "Joint expert conference participation",
          "Hearing attendance (VCAT or other tribunals)",
          "Additional site inspections if required",
        ],
        howItProtects: [
          "Your position is supported by independent, technical evidence",
          "Defects are assessed using industry standards and codes",
          "Your case is presented with clarity and authority",
          "You are prepared for mediation, negotiation, or hearing",
          "Your evidence withstands scrutiny from opposing experts",
        ],
      }}
      ctaLabel="Book Expert Assessment"
    />
  );
}
