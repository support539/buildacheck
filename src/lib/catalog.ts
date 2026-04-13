export type OfferCategory =
  | "buildacheck"
  | "dsi"
  | "combined"
  | "enterprise";

export interface Offer {
  id: string;
  category: OfferCategory;
  name: string;
  summary: string;
  price?: number;
  priceFrom?: number;
  priceTo?: number;
  priceLabel: string;
  quoteOnly?: boolean;
  bestFor?: string;
  includes?: string[];
  includedAddOnIds?: string[];
}

export interface AddOn {
  id: string;
  name: string;
  summary: string;
  price?: number;
  priceLabel: string;
  exactPrice?: boolean;
}

export const parentBrand = {
  name: "Citadel Building Group",
  strapline: "Parent group for BuildaCheck and BuildaScan",
};

export const buildaCheckIncluded = [
  "NCC and Australian Standards compliance checks",
  "Defect identification and defect context",
  "High-resolution photographic evidence",
  "Regulator-aligned reporting",
  "Optional BuildaScan integration where deeper site intelligence is required",
];

export const buildaCheckStandardOffers: Offer[] = [
  {
    id: "pre-purchase-building-inspection",
    category: "buildacheck",
    name: "Pre-Purchase Building Inspection",
    summary:
      "Builder-led due diligence for existing homes, focused on condition, defects, and decision-ready reporting.",
    price: 399,
    priceLabel: "$399",
    bestFor: "Home buyers and investors",
    includes: [
      "Condition assessment of the home and visible structural elements",
      "Major and minor defect identification",
      "High-resolution evidence pack",
      "Standards-aligned written report",
    ],
  },
  {
    id: "new-construction-stage-inspection",
    category: "buildacheck",
    name: "New Construction Stage Inspection",
    summary:
      "Independent inspection at key construction stages to catch issues before they get buried in the build.",
    price: 449,
    priceLabel: "$449",
    bestFor: "Builders, owners, and progress sign-off",
    includes: [
      "Stage-based workmanship review",
      "Compliance observations against relevant standards",
      "Photographic defect evidence",
      "Builder-ready issue summary",
    ],
  },
  {
    id: "practical-completion-handover",
    category: "buildacheck",
    name: "Practical Completion / Handover",
    summary:
      "A handover-focused inspection that identifies incomplete items, workmanship defects, and rectification priorities.",
    price: 499,
    priceLabel: "$499",
    bestFor: "New-home handover and PCI sign-off",
    includes: [
      "Practical completion defect identification",
      "Workmanship review",
      "Incomplete item schedule",
      "Handover-ready defect list",
    ],
  },
  {
    id: "vcat-insurance-evidence-pack",
    category: "buildacheck",
    name: "VCAT / Insurance Evidence Pack",
    summary:
      "Structured inspection evidence for disputes, insurance matters, and regulator-facing documentation.",
    price: 899,
    priceLabel: "$899",
    bestFor: "Disputes, insurance, and evidence-led claims",
    includes: [
      "Insurance-grade photographic evidence",
      "Defect and causation summary",
      "Regulator-aligned report structure",
      "Documentation suitable for dispute workflows",
    ],
  },
];

export const buildaCheckSpecialistServices = [
  {
    name: "Pre-Purchase Building + Pest",
    href: "/services/building-pest",
    summary:
      "Combined building and timber pest investigations for buyers who need a broader pre-purchase scope.",
  },
  {
    name: "Warranty Inspection",
    href: "/services/warranty",
    summary:
      "Pre-expiry defect documentation for owners preparing for warranty discussions and builder follow-up.",
  },
  {
    name: "Dilapidation Report",
    href: "/services/dilapidation",
    summary:
      "Pre-works condition reporting for neighboring properties, streetscape assets, and risk management.",
  },
  {
    name: "Expert Witness Report",
    href: "/services/expert-witness",
    summary:
      "Independent reporting for complex disputes, tribunal matters, and technical building evidence.",
  },
];

export const dsiPackages: Offer[] = [
  {
    id: "dsi-standard",
    category: "dsi",
    name: "Digital Site Inspection (Standard)",
    summary:
      "Aerial imaging, roof condition scan, orthomosaic mapping, terrain model, and a DSI report with intelligence annexure.",
    price: 349,
    priceLabel: "$349",
    bestFor: "Fast site understanding and roof-safe capture",
    includes: [
      "Aerial imaging and mapping",
      "Roof condition scan",
      "Orthomosaic map",
      "3D terrain and structure model",
      "Compliance measurements",
      "BuildaScan DSI report with intelligence annexure",
    ],
  },
  {
    id: "dsi-thermal-intelligence",
    category: "dsi",
    name: "DSI + Thermal Intelligence",
    summary:
      "Adds thermal moisture detection and heat-loss mapping to the standard DSI capture package.",
    price: 449,
    priceLabel: "$449",
    bestFor: "Moisture, insulation, and hidden heat-loss issues",
    includedAddOnIds: ["thermal-intelligence-pack"],
    includes: [
      "Everything in DSI Standard",
      "Thermal moisture detection",
      "Insulation and HVAC heat-loss mapping",
      "Thermal overlays in the report",
    ],
  },
  {
    id: "dsi-ai-defect-intelligence",
    category: "dsi",
    name: "DSI + AI Defect Intelligence",
    summary:
      "Adds anomaly and crack detection workflows for teams that want machine-assisted issue triage.",
    price: 449,
    priceLabel: "$449",
    bestFor: "Automated defect screening and anomaly review",
    includes: [
      "Everything in DSI Standard",
      "Automated crack detection",
      "Pooling and anomaly identification",
      "AI-flagged defect annexure",
    ],
  },
  {
    id: "dsi-complete-intelligence",
    category: "dsi",
    name: "DSI Complete Intelligence",
    summary:
      "The most complete fixed package, combining thermal, AI defect, compliance, timeline, and site twin outputs.",
    price: 649,
    priceLabel: "$649",
    bestFor: "Owners, builders, and insurers who need deeper evidence",
    includedAddOnIds: ["thermal-intelligence-pack", "3d-modelling-pack"],
    includes: [
      "Everything in DSI Standard",
      "Thermal Intelligence",
      "AI Defect Intelligence",
      "Compliance Intelligence",
      "Timeline comparison where applicable",
      "Site Twin Intelligence",
      "360-degree panoramas",
    ],
  },
  {
    id: "dsi-premium-full-visual-suite",
    category: "dsi",
    name: "DSI Premium (Full Visual Suite)",
    summary:
      "Adds cinematic and presentation-ready outputs to the full intelligence stack.",
    price: 899,
    priceLabel: "$899",
    bestFor: "Developer, agent, and stakeholder presentation workflows",
    includedAddOnIds: ["thermal-intelligence-pack", "3d-modelling-pack"],
    includes: [
      "Everything in DSI Complete Intelligence",
      "Cinematic flyover",
      "Marketing-grade aerial footage",
      "Future-view rendering where applicable",
      "Developer or agent presentation pack",
    ],
  },
];

export const dsiAddOns: AddOn[] = [
  {
    id: "thermal-intelligence-pack",
    name: "Thermal Intelligence Pack",
    summary: "Advanced moisture and insulation diagnostics.",
    price: 149,
    priceLabel: "+$149",
    exactPrice: true,
  },
  {
    id: "3d-modelling-pack",
    name: "3D Modelling Pack",
    summary: "Full digital twin with measurement tools.",
    price: 199,
    priceLabel: "+$199",
    exactPrice: true,
  },
  {
    id: "fast-track-delivery",
    name: "FastTrack Delivery",
    summary: "Same-day or next-day reporting.",
    price: 99,
    priceLabel: "+$99",
    exactPrice: true,
  },
  {
    id: "insurance-vcat-pack",
    name: "Insurance / VCAT Evidence Pack",
    summary: "Audit-ready documentation for disputes and claims.",
    price: 249,
    priceLabel: "+$249",
    exactPrice: true,
  },
  {
    id: "annual-monitoring-subscription",
    name: "Annual Monitoring Subscription",
    summary: "Track changes, defects, and deterioration over time.",
    priceLabel: "from $299/year",
  },
  {
    id: "advanced-site-mapping-pack",
    name: "Advanced Site Mapping Pack",
    summary:
      "High-precision orthomosaic, terrain model, setback mapping, and exportable engineering files.",
    priceLabel: "+$199-$349",
  },
];

export const enterprisePackages: Offer[] = [
  {
    id: "small-site-room-roof-scan",
    category: "enterprise",
    name: "Small Site / Room / Roof Scan",
    summary: "Compact capture scope for rooms, roofs, and smaller commercial environments.",
    priceFrom: 1800,
    priceTo: 3500,
    priceLabel: "$1,800-$3,500",
    quoteOnly: true,
    bestFor: "Rooms, small commercial spaces, roofs",
    includes: [
      "Drone and LiDAR capture",
      "Registered point cloud",
      "RTK control when required",
    ],
  },
  {
    id: "medium-building-scan",
    category: "enterprise",
    name: "Medium Building Scan",
    summary: "Multi-room and fitout-focused scanning for more complex interiors.",
    priceFrom: 4500,
    priceTo: 9500,
    priceLabel: "$4,500-$9,500",
    quoteOnly: true,
    bestFor: "Multi-room interiors, retail, fitouts",
    includes: [
      "Drone and LiDAR capture",
      "Registered point cloud",
      "Optional deviation mapping",
    ],
  },
  {
    id: "large-building-warehouse-scan",
    category: "enterprise",
    name: "Large Building / Warehouse Scan",
    summary: "Larger scanning scopes for warehouses, construction sites, and complex envelopes.",
    priceFrom: 12000,
    priceTo: 25000,
    priceLabel: "$12,000-$25,000",
    quoteOnly: true,
    bestFor: "Warehouses and construction sites",
    includes: [
      "Large-footprint capture",
      "RTK survey control",
      "Registered point cloud and mapping layers",
    ],
  },
  {
    id: "full-digital-twin-scan-to-bim",
    category: "enterprise",
    name: "Full Digital Twin / Scan-to-BIM",
    summary: "Full building capture, intelligence processing, and engineering-ready modelling.",
    priceFrom: 25000,
    priceTo: 120000,
    priceLabel: "$25,000-$120,000+",
    quoteOnly: true,
    bestFor: "Entire buildings and engineering models",
    includes: [
      "Drone and LiDAR capture",
      "Scan-to-BIM model",
      "Digital twin environment",
      "Integrated reporting outputs",
    ],
  },
];

export const professionalRates = [
  {
    name: "Capture (Scanning)",
    priceLabel: "$350-$550 per hour",
    summary:
      "LiDAR scanning, drone mapping, thermal imaging, and RTK control for custom site scopes.",
  },
  {
    name: "Processing & Registration",
    priceLabel: "$150-$300 per hour",
    summary:
      "Point cloud registration, noise reduction, and multi-sensor fusion for custom deliverables.",
  },
];

export const deliverablePricing = [
  { name: "Raw point cloud", priceLabel: "$800-$2,500" },
  { name: "Cleaned point cloud", priceLabel: "$1,500-$4,500" },
  { name: "Scan-to-BIM", priceLabel: "$4-$12 per m2" },
  { name: "Deviation / QA maps", priceLabel: "$1,200-$3,500" },
  { name: "Digital twin", priceLabel: "$3,000-$12,000" },
  { name: "Thermal analysis", priceLabel: "$450-$1,200" },
  { name: "Progress timeline", priceLabel: "$600-$2,000" },
];

export const combinedPackages: Offer[] = [
  {
    id: "buildacheck-buildascan-essentials",
    category: "combined",
    name: "BuildaCheck + BuildaScan Essentials",
    summary:
      "A combined inspection and small-site scan for customers who need immediate evidence and spatial context.",
    priceFrom: 2200,
    priceTo: 4200,
    priceLabel: "$2,200-$4,200",
    quoteOnly: true,
    includes: [
      "Full BuildaCheck inspection",
      "Small-site 3D scan",
      "Registered point cloud",
      "Integrated BuildaCheck report",
    ],
  },
  {
    id: "construction-progress-intelligence-pack",
    category: "combined",
    name: "Construction Progress Intelligence Pack",
    summary:
      "Recurring progress capture with deviation tracking and compliance checks for active construction projects.",
    priceFrom: 6500,
    priceTo: 14500,
    priceLabel: "$6,500-$14,500",
    quoteOnly: true,
    includes: [
      "Monthly BuildaScan progress scans",
      "Drone mapping and LiDAR",
      "Deviation maps",
      "BuildaCheck compliance checks",
      "Timestamped progress timeline",
    ],
  },
  {
    id: "premium-digital-twin-compliance-pack",
    category: "combined",
    name: "Premium Digital Twin + Compliance Pack",
    summary:
      "Full capture, modelling, compliance, and handover documentation in a single defensible workflow.",
    priceFrom: 28000,
    priceTo: 140000,
    priceLabel: "$28,000-$140,000+",
    quoteOnly: true,
    includes: [
      "Full-building scan",
      "Scan-to-BIM model",
      "Digital twin environment",
      "BuildaCheck compliance audit",
      "Defect and deviation intelligence",
      "Handover documentation",
    ],
  },
];

export const combinedBenefits = [
  "One provider",
  "One workflow",
  "One defensible report",
  "NCC-aligned inspections with millimetre-accurate scans",
  "AI-assisted defect and deviation detection",
  "Stronger evidence for insurance, VCAT, and compliance",
];

export const dsiCapabilities = [
  {
    title: "High-Resolution Imaging",
    points: [
      "Full-site visual capture",
      "Roof, facade, and hard-to-reach areas",
      "Evidence-grade clarity for insurers and regulators",
    ],
  },
  {
    title: "Thermal Intelligence",
    points: [
      "Moisture detection",
      "Insulation gap identification",
      "Hidden defect visibility beyond the naked eye",
    ],
  },
  {
    title: "Full Site Mapping",
    points: [
      "Orthomosaic mapping",
      "Terrain and elevation modelling",
      "Boundary and setback proximity mapping",
      "Roof geometry and surface area calculations",
      "Exportable layers for engineers, architects, and insurers",
    ],
  },
  {
    title: "3D Modelling and Digital Twins",
    points: [
      "Photogrammetry-based 3D models",
      "Volume, height, and distance measurements",
      "Progress tracking and dispute-resolution support",
    ],
  },
  {
    title: "AI-Assisted Defect Detection",
    points: [
      "Automated classification",
      "Severity scoring",
      "Compliance-aligned issue review",
    ],
  },
  {
    title: "Unified BuildaCheck Integration",
    points: [
      "All intelligence flows into one BuildaCheck report",
      "Clear, structured, regulator-aligned findings",
      "Suitable for builders, insurers, and homeowners",
    ],
  },
];

export const dsiStandardInclusions = [
  "High-resolution site capture",
  "Full site mapping with orthomosaic and terrain model",
  "AI-assisted defect detection",
  "Compliance snapshot",
  "Digital report with annotated findings",
  "BuildaCheck integration for a unified report",
];

export const intelligenceWorkflow = [
  {
    stage: "Capture",
    detail:
      "BuildaCheck inspections and BuildaScan multi-sensor capture gather site condition, compliance context, and spatial evidence.",
  },
  {
    stage: "Analyse",
    detail:
      "AI-assisted review, point-cloud processing, and standards-aligned inspection interpretation convert raw data into usable intelligence.",
  },
  {
    stage: "Verify",
    detail:
      "Deviation maps, progress layers, QA checks, and compliance observations validate what is happening on site.",
  },
  {
    stage: "Report",
    detail:
      "BuildaCheck's report engine consolidates evidence into a defensible output for clients, disputes, claims, and handover.",
  },
];

export const technologyLayers = [
  {
    title: "Capture Layer",
    intro:
      "Multi-sensor reality capture for roofs, facades, interiors, and hazardous zones.",
    items: [
      "RTK-enabled drones with photogrammetry and LiDAR payloads",
      "Thermal and multispectral sensors",
      "Terrestrial LiDAR with 360-degree HDR imaging",
      "Ground-based photogrammetry, mobile LiDAR, and mast imaging",
    ],
  },
  {
    title: "Geospatial Layer",
    intro: "Survey-grade accuracy that keeps every dataset anchored and audit-ready.",
    items: [
      "GNSS and RTK base and rover workflows",
      "Total stations and ground control networks",
      "Coordinate transformation workflows",
    ],
  },
  {
    title: "Processing Layer",
    intro:
      "Point-cloud processing, modelling, and AI-assisted interpretation for construction-grade outputs.",
    items: [
      "Automated registration and noise reduction",
      "SLAM correction and multi-sensor fusion",
      "Automated defect detection and deviation heatmaps",
      "Structural alignment analysis, progress quantification, and safety hazard identification",
      "Scan-to-BIM compatibility with Revit, AutoCAD, Civil 3D, ArchiCAD, Rhino, SolidWorks, and Bentley",
    ],
  },
  {
    title: "Cloud Layer",
    intro:
      "Secure client access to the BuildaScan Digital Site Intelligence environment.",
    items: [
      "Web-based point-cloud viewer",
      "BIM model collaboration",
      "Timestamped progress layers",
      "Contractor accountability logs",
      "Automated BuildaCheck report integration",
      "Secure client portals",
    ],
  },
  {
    title: "Deliverables Layer",
    intro: "Outputs designed for construction, compliance, and asset lifecycle use.",
    items: [
      "Point clouds, mesh models, and Scan-to-BIM models",
      "Deviation maps and QA outputs",
      "Digital twins and lifecycle asset records",
      "Thermal maps and progress timelines",
    ],
  },
  {
    title: "Security and Sovereign Capability",
    intro:
      "A platform posture designed for defensibility, compliance, and Australian capability-building.",
    items: [
      "Australian data residency",
      "Enterprise-grade encryption",
      "Regulator-aligned reporting",
      "Government-aligned sovereign capability positioning",
    ],
  },
];

export const buildaScanFaqs = [
  {
    question: "Is site mapping included?",
    answer:
      "Yes. Full site mapping with orthomosaic and terrain modelling is included as standard in the core DSI offer.",
  },
  {
    question: "Do I need a BuildaCheck inspection first?",
    answer:
      "No. BuildaScan can be booked as a standalone service, but it integrates directly into the BuildaCheck reporting workflow when both are used together.",
  },
  {
    question: "Is this safe for roofs and high-risk areas?",
    answer:
      "Yes. BuildaScan reduces ladder work and roof access requirements by using drone-based capture and remote intelligence workflows.",
  },
  {
    question: "Is the data regulator-aligned?",
    answer:
      "Yes. The workflow is positioned around NCC, relevant Australian Standards, and insurer or VCAT-ready evidence structures.",
  },
];

export const allOffers = [
  ...buildaCheckStandardOffers,
  ...dsiPackages,
  ...enterprisePackages,
  ...combinedPackages,
];
