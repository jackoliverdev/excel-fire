export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  title: string;
  detail: string;
};

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  cardSummary: string;
  heroDescription: string;
  cardImage: string;
  heroImage: string;
  detailImage: string;
  detailImageAlt: string;
  keyPoints: string[];
  process: ServiceProcessStep[];
  standards: string[];
  deliverables: string[];
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "passive-fire-protection",
    title: "Passive Fire Protection",
    navLabel: "Passive Fire Protection",
    cardSummary: "FIRAS-accredited fire stopping and compartmentation delivered to the highest standard.",
    heroDescription:
      "Installing, assessing and improving passive fire protection standards using industry-leading products and expert knowledge, fully FIRAS accredited.",
    cardImage: "/Excel/stopping.webp",
    heroImage: "/Excel/Services/site-firestopping-2.jpg",
    detailImage: "/Excel/Services/site-firestopping-1.jpg",
    detailImageAlt: "Excel Fire operative completing compliant fire stopping works on site",
    keyPoints: [
      "FIRAS-accredited fire stopping contractor",
      "Mastic application, fire batt, collars, wraps and fire-lined boarding",
      "In-depth digital reporting via the OneTrace platform",
      "Serving London, the South East and wider England",
    ],
    process: [
      {
        title: "Survey and scope",
        detail:
          "We inspect the building, identify every breach and penetration, and agree a clear scope with substrates, sizes and product specifications.",
      },
      {
        title: "Compliant installation",
        detail:
          "FIRAS-accredited operatives install mastic, batt, collars, wraps and boarding to the manufacturer's tested details.",
      },
      {
        title: "Evidence as we go",
        detail:
          "Every installation is photographed and logged in OneTrace at the point of completion — nothing retrofitted, nothing missed.",
      },
      {
        title: "Certified handover",
        detail:
          "You receive an in-depth digital report and certification for your golden thread of building safety information.",
      },
    ],
    standards: ["FIRAS accredited", "OneTrace digital evidence", "Manufacturer-tested details", "RRO 2005 compliant"],
    deliverables: [
      "In-depth OneTrace digital report with photographic evidence",
      "Certification for all installed systems",
      "Product data and manufacturer specifications",
      "Clear record of any access limitations",
    ],
    sections: [
      {
        heading: "What is passive fire protection?",
        paragraphs: [
          "Passive fire protection compartments a building using fire-resistance rated walls and floors. Dividing a building into smaller fire compartments, consisting of one or more rooms or floors, prevents or slows the spread of fire and smoke from the room of origin to other building spaces. This limits building damage and provides occupants with more time to evacuate safely or reach an area of refuge.",
        ],
      },
      {
        heading: "How Excel Fire delivers",
        paragraphs: [
          "Excel Fire are fully FIRAS accredited to deliver fire stopping services including mastic application, fire batt, collars, wraps, fire-lined boarding and more. We conduct every installation to the highest standard, coupling industry-leading products with our team's expert knowledge to ensure excellence at all stages.",
          "As a FIRAS-accredited supplier, we hold both the technical and practical knowledge to carry out work that adheres to all industry standards and necessary compliances. Our workforce exercises acute attention to detail across all aspects of passive fire protection, and every project is compiled into an in-depth digital report using the OneTrace platform once works are complete.",
        ],
      },
      {
        heading: "Reassurance and compliance",
        paragraphs: [
          "As one of few FIRAS-accredited contractors operating in London and the South East, our aim is to give clients both the tools and the information they need to rest easy — knowing tenants, employees and occupants are safe while you remain covered and legally compliant.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between passive and active fire protection?",
        answer:
          "Passive fire protection contains fire and smoke through the building fabric itself — compartment walls, floors, fire doors and fire stopping. Active fire protection detects and responds to fire, such as alarms, detection and suppression systems. A compliant building needs both.",
      },
      {
        question: "Are your operatives third-party accredited?",
        answer:
          "Yes. Excel Fire is FIRAS accredited for fire stopping works and our teams include UKAS third-party certified assessors, supervisors and technicians.",
      },
      {
        question: "How is the work evidenced?",
        answer:
          "Every installation is photographed and logged through the OneTrace platform, producing an in-depth digital report you can retain as part of your golden thread of building safety information.",
      },
    ],
    metaTitle: "Passive Fire Protection & Fire Stopping",
    metaDescription:
      "FIRAS-accredited passive fire protection and fire stopping across London and the South East. Mastic, fire batt, collars, wraps and full digital reporting from Excel Fire Ltd.",
  },
  {
    slug: "fire-door-installation",
    title: "Fire Door Installation",
    navLabel: "Fire Door Installation",
    cardSummary: "FIRAS-certified installation of fully accredited timber fire door sets.",
    heroDescription:
      "Our specialist teams assess, install and certify fully accredited fire doors for residential and commercial properties, in accordance with BS 8214.",
    cardImage: "/Excel/doors.webp",
    heroImage: "/Excel/Services/site-installation-2.jpg",
    detailImage: "/Excel/Services/site-installation-1.jpg",
    detailImageAlt: "Excel Fire engineer installing a certified fire door set",
    keyPoints: [
      "FIRAS-certified installer working to BS 8214",
      "Door sets tested under BS 476-22 or BS 476-31",
      "Full documentation from accredited third-party manufacturers",
      "Methodical, photographic installation reports on every door",
    ],
    process: [
      {
        title: "Assess and specify",
        detail:
          "We survey the openings, agree the correct door set specification (FD30 to FD60s, vision panels, closers) and confirm lead times.",
      },
      {
        title: "Supply certified sets",
        detail:
          "Door sets arrive complete with tested ironmongery, framing and third-party manufacturer documentation.",
      },
      {
        title: "Install to BS 8214",
        detail:
          "FIRAS-certified teams fit each door to the standard and the manufacturer's guidance, with clean, respectful working on occupied sites.",
      },
      {
        title: "Certify and hand over",
        detail:
          "A FIRAS supervisor signs off every set with a methodical, photographic installation report.",
      },
    ],
    standards: ["FIRAS certified", "BS 8214 installation", "BS 476-22 / BS 476-31 tested", "Third-party documentation"],
    deliverables: [
      "Photographic installation report per door set",
      "FIRAS supervisor certification",
      "Manufacturer documentation and test evidence",
      "Ironmongery and hardware schedules",
    ],
    sections: [
      {
        heading: "Certified installation",
        paragraphs: [
          "As a FIRAS-certified installer, Excel Fire's competent and talented team fits and installs timber fire doors in accordance with BS 8214 and manufacturers' guidance.",
          "Each door set comes equipped with ironmongery, framing and additional items that have been subject to relevant regulatory testing under BS 476-22 or BS 476-31. Every set is provided along with the necessary documentation and legislation from accredited third-party manufacturers.",
          "All door sets installed are certified by our FIRAS supervisors with a methodical, photographic and detailed installation report.",
        ],
      },
      {
        heading: "Door sets we install",
        paragraphs: ["Excel Fire installs the full range of certified fire door sets, including:"],
        bullets: [
          "FD30 — fire door, 30-minute resistance",
          "FD30s — fire and smoke door, 30-minute resistance",
          "FD60 — fire door, 60-minute resistance",
          "FD60s — fire and smoke door, 60-minute resistance",
          "FD30s SC&VP — fire and smoke door with vision panel and self-closing device, 30-minute resistance (usually communal)",
          "FD60s SC&VP — fire and smoke door with vision panel and self-closing device, 60-minute resistance (usually communal)",
          "FEDs — front/flat entrance doors, most commonly FD30s",
        ],
      },
      {
        heading: "Who we work with",
        paragraphs: [
          "We support building owners, landlords, housing providers, hospitals, public buildings, councils, local authorities and principal contractors with compliant fire door installation programmes across residential and commercial properties.",
        ],
      },
    ],
    faqs: [
      {
        question: "What certification do your installers hold?",
        answer:
          "Our installation teams are FIRAS certified and every completed door set is signed off by a FIRAS supervisor with a detailed, photographic installation report.",
      },
      {
        question: "Do you supply the fire doors as well as install them?",
        answer:
          "Yes. We supply fully tested and certified door sets from accredited third-party manufacturers, complete with compliant ironmongery, framing and documentation.",
      },
      {
        question: "Can you install fire doors in occupied buildings?",
        answer:
          "Absolutely. Our teams regularly work in occupied residential blocks and live commercial sites, planning works to minimise disruption to residents and building users.",
      },
    ],
    metaTitle: "Fire Door Installation",
    metaDescription:
      "FIRAS-certified fire door installation to BS 8214 for residential and commercial properties. FD30, FD60 and flat entrance door sets supplied, installed and certified by Excel Fire Ltd.",
  },
  {
    slug: "fire-door-maintenance",
    title: "Fire Door Maintenance",
    navLabel: "Fire Door Maintenance",
    cardSummary: "UKAS third-party accredited maintenance and repair of fire rated door sets.",
    heroDescription:
      "Accredited, compliant maintenance works to fire rated door sets — bringing existing doors up to standard with certified repairs and a full works log.",
    cardImage: "/Excel/doors.webp",
    heroImage: "/Excel/Services/site-installation-3.jpg",
    detailImage: "/Excel/Services/site-installation-2.jpg",
    detailImageAlt: "Excel Fire operative carrying out fire door maintenance works",
    keyPoints: [
      "UKAS third-party accredited maintenance capability",
      "Detailed schedule of works following inspection",
      "Easing, adjusting, ironmongery replacement and repairs",
      "All works certified with a works and installation log",
    ],
    process: [
      {
        title: "Inspect the door set",
        detail:
          "We assess whether the door can be brought up to standard through maintenance, or whether replacement is the compliant route.",
      },
      {
        title: "Schedule of works",
        detail:
          "A fastidious, priced schedule sets out exactly what each door needs — easing, seals, ironmongery, repairs.",
      },
      {
        title: "Certified remediation",
        detail:
          "UKAS third-party accredited operatives complete the works with minimal disruption to residents and building users.",
      },
      {
        title: "Works log handover",
        detail: "Every door is certified and documented with a full works and installation log.",
      },
    ],
    standards: ["UKAS third-party accredited", "Fire Safety (England) Regulations 2022", "Certified works log", "Repair-first approach"],
    deliverables: [
      "Door-by-door schedule of works",
      "Certified works and installation log",
      "Photographic before-and-after evidence",
      "Clear recommendations where replacement is required",
    ],
    sections: [
      {
        heading: "Compliant maintenance",
        paragraphs: [
          "Further to our inspection and installation schemes, Excel Fire is UKAS third-party accredited to undertake compliant maintenance works to fire rated door sets.",
          "Should we deem post-inspection that a fire door can be repaired or maintained rather than replaced, we issue a fastidious schedule of works to bring the door set up to current standards and regulations. Works can include easing and adjusting, replacement of ironmongery and hardware, and targeted repairs.",
          "All works are certified and inclusive of a works and installation log, giving you a clear audit trail for every door.",
        ],
      },
      {
        heading: "Why maintenance matters",
        paragraphs: [
          "Regulation 10 of the Fire Safety (England) Regulations 2022 made it a legal requirement from 23 January 2023 for responsible persons of multi-occupied residential buildings in England with storeys over 11 metres to undertake quarterly checks of all fire doors in common parts, and annual checks — on a best endeavour basis — of all flat entrance doors that open onto common parts.",
          "A well-managed maintenance programme keeps your doors compliant between inspections and avoids the cost of unnecessary full replacements.",
        ],
      },
    ],
    faqs: [
      {
        question: "When can a fire door be repaired instead of replaced?",
        answer:
          "Where an inspection shows the core door leaf is sound, issues such as worn seals, failed self-closers, non-compliant ironmongery or excessive gaps can often be remediated. We confirm this on inspection and issue a clear schedule of works.",
      },
      {
        question: "How often should fire doors be checked?",
        answer:
          "For residential buildings over 11 metres, communal fire doors must be checked quarterly and flat entrance doors annually under the Fire Safety (England) Regulations 2022. We recommend routine checks for all buildings regardless of height.",
      },
      {
        question: "Is the maintenance work certified?",
        answer:
          "Yes. All maintenance works are certified under our UKAS third-party accreditation and documented with a full works log.",
      },
    ],
    metaTitle: "Fire Door Maintenance",
    metaDescription:
      "UKAS third-party accredited fire door maintenance and repair. Certified easing, adjusting, ironmongery replacement and remedial works with full documentation from Excel Fire Ltd.",
  },
  {
    slug: "fire-door-inspections",
    title: "Fire Door Inspections",
    navLabel: "Fire Door Inspections",
    cardSummary: "Evidence-led inspections with QR asset tagging and clear remedial reporting.",
    heroDescription:
      "We assess existing fire doors and determine if they are compliant and certified, with thorough photographic reporting and QR asset tagging on every door set.",
    cardImage: "/Excel/surveys.webp",
    heroImage: "/Excel/Services/site-installation-1.jpg",
    detailImage: "/Excel/Services/site-installation-3.jpg",
    detailImageAlt: "Excel Fire inspector assessing an existing fire door for compliance",
    keyPoints: [
      "Compliance surveys to BS 8214, BS 476-22 and BS 476-31",
      "QR asset tagging in line with the golden thread regime",
      "Cloud-based dashboard access to all inspections",
      "Easy-to-navigate PDF reports with remedial schedules",
    ],
    process: [
      {
        title: "Plan the inspection",
        detail:
          "We agree scope and access with your building team — communal doors, flat entrance doors, or a full estate programme.",
      },
      {
        title: "Inspect every element",
        detail:
          "Construction, hinges, closers, gaps, glazing markings and seals are checked and photographed on each door.",
      },
      {
        title: "QR tag and log",
        detail:
          "Every door set is QR asset tagged and linked to our cloud dashboard in line with the golden thread regime.",
      },
      {
        title: "Report and prioritise",
        detail:
          "You receive an easy-to-navigate PDF report with a schedule of remedial works for each door set.",
      },
    ],
    standards: ["BS 8214 assessment", "BS EN 1935 ironmongery checks", "Golden thread QR tagging", "Regulation 10 compliant"],
    deliverables: [
      "PDF inspection report per door set",
      "QR asset tags linked to the cloud dashboard",
      "Prioritised schedule of remedial works",
      "Photographic evidence of every defect",
    ],
    sections: [
      {
        heading: "What we inspect",
        paragraphs: [
          "Our fire door inspections look at existing fire doors and determine whether they are compliant and certified. Each survey establishes whether doors can be improved under BS 8214 or should be replaced with a certified fire door set tested to BS 476-22 or BS 476-31.",
          "We photograph and report on every critical element of the door set:",
        ],
        bullets: [
          "Construction of the door and the materials used",
          "Whether hinges conform to BS EN 1935",
          "Whether the self-closer is adequate and conforms to standards",
          "Whether gaps exceed the required specifications",
          "Whether the overall installation of the door set is compliant",
          "Correct markings on any fire rated glass",
          "Adequate smoke and heat seals within the door frame",
        ],
      },
      {
        heading: "Golden thread reporting",
        paragraphs: [
          "All door sets inspected by Excel Fire are QR asset tagged in line with the golden thread regime and linked to our cloud-based dashboard, giving clients access to all inspections undertaken.",
          "Once completed, an easy-to-navigate PDF report is issued along with a schedule of remedial works for each door set — giving you a clear, prioritised path to full compliance.",
        ],
      },
    ],
    faqs: [
      {
        question: "What do I receive after an inspection?",
        answer:
          "A clear PDF report covering every inspected door, with photographic evidence, compliance findings and a schedule of remedial works. All doors are QR tagged and accessible via our cloud dashboard.",
      },
      {
        question: "Are fire door inspections a legal requirement?",
        answer:
          "For multi-occupied residential buildings over 11 metres in England, quarterly communal fire door checks and annual flat entrance door checks are required under the Fire Safety (England) Regulations 2022. Responsible persons for other premises must keep fire doors maintained under the Regulatory Reform (Fire Safety) Order 2005.",
      },
      {
        question: "Can you carry out the remedial works you identify?",
        answer:
          "Yes. We are UKAS third-party accredited for fire door maintenance and FIRAS certified for installation, so we can complete any remediation or replacement identified in the report.",
      },
    ],
    metaTitle: "Fire Door Inspections",
    metaDescription:
      "Professional fire door inspections with photographic reporting, QR asset tagging and remedial schedules. UKAS-accredited inspection capability from Excel Fire Ltd.",
  },
  {
    slug: "fire-stopping-inspections",
    title: "Fire Stopping Inspections",
    navLabel: "Fire Stopping Inspections",
    cardSummary: "Compartmentation assurance from Level 3 accredited, UKAS-certified inspectors.",
    heroDescription:
      "Ensuring your building meets the required compartmentation between fire separating walls and ceilings, with photographic evidence and compliant recommendations.",
    cardImage: "/Excel/stopping.webp",
    heroImage: "/Excel/Services/site-firestopping-3.jpg",
    detailImage: "/Excel/Services/site-firestopping-4.jpg",
    detailImageAlt: "Excel Fire inspector reviewing compartmentation and fire stopping works",
    keyPoints: [
      "Level 3 accredited and UKAS third-party certified inspectors",
      "M&E penetrations and structural fire protection identified",
      "Photographic evidence with sizes, substrates and non-conformities",
      "Hard-to-reach areas inspected, including loft voids and suspended ceilings",
    ],
    process: [
      {
        title: "Define the compartment lines",
        detail:
          "We review drawings and walk the building to establish where fire separating walls and ceilings should perform.",
      },
      {
        title: "Inspect and identify",
        detail:
          "Level 3 accredited inspectors identify M&E penetrations, structural protection gaps and irregularities — including loft voids and above suspended ceilings.",
      },
      {
        title: "Record everything",
        detail:
          "Photographic evidence with substrates, sizes, measurements and access notes for every non-conformity.",
      },
      {
        title: "Recommend compliant fixes",
        detail:
          "Each finding comes with a recommended installation to the manufacturer's specification, ready to price and programme.",
      },
    ],
    standards: ["Level 3 accredited inspectors", "UKAS third-party certified", "Manufacturer specifications", "Full photographic evidence"],
    deliverables: [
      "Compartmentation report with photographic evidence",
      "Non-conformity schedule with sizes and substrates",
      "Recommended compliant installations per breach",
      "Access limitation record",
    ],
    sections: [
      {
        heading: "Compartmentation assurance",
        paragraphs: [
          "Our fire stopping inspections are designed to ensure your property meets the required compartmentation between fire separating walls and ceilings.",
          "Our Level 3 accredited and UKAS third-party certified inspectors identify M&E penetrations, structural fire protection such as steels and boardings, and any other passive fire protection irregularities across the building.",
        ],
      },
      {
        heading: "Detailed reporting",
        paragraphs: [
          "Within our reports, photographic evidence is provided along with access issues, substrates, sizes and measurements, non-conformities and recommended compliant installations in accordance with the manufacturer's specifications and guidelines.",
          "Even in hard-to-reach places such as loft voids or above suspended ceilings, our teams can inspect these areas for you — so nothing is missed.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a fire stopping inspection cover?",
        answer:
          "We inspect fire separating walls and ceilings for M&E penetrations, structural fire protection and passive fire protection irregularities, recording photographic evidence, measurements and non-conformities with recommended compliant remediation.",
      },
      {
        question: "Do you inspect concealed areas?",
        answer:
          "Yes. We routinely inspect loft voids, risers and areas above suspended ceilings — the places where compartmentation breaches most often go unnoticed.",
      },
      {
        question: "Can you complete the remedial fire stopping works?",
        answer:
          "Yes. As a FIRAS-accredited fire stopping contractor we can deliver the compliant remediation identified in the inspection, with full digital evidence of completed works.",
      },
    ],
    metaTitle: "Fire Stopping Inspections & Compartmentation Surveys",
    metaDescription:
      "Fire stopping inspections and compartmentation surveys from Level 3 accredited, UKAS-certified inspectors. Photographic reporting and compliant remediation from Excel Fire Ltd.",
  },
  {
    slug: "validation-surveys",
    title: "Validation Surveys",
    navLabel: "Validation Surveys",
    cardSummary: "Non-intrusive assessments of communal areas with a broad compliance overview.",
    heroDescription:
      "A flexible, non-intrusive assessment of communal areas throughout your building, confirming compliance and outlining any further remedial works needed.",
    cardImage: "/Excel/surveys.webp",
    heroImage: "/Excel/Services/site-firestopping-1.jpg",
    detailImage: "/Excel/Services/site-firestopping-3.jpg",
    detailImageAlt: "Excel Fire surveyor carrying out a validation survey of communal areas",
    keyPoints: [
      "Non-intrusive assessment of communal areas",
      "Fire doors, passive fire protection and compartmentation reviewed",
      "Flexible scope tailored to your building and needs",
      "Clear overview of any further remedial works required",
    ],
    process: [
      {
        title: "Agree the scope",
        detail:
          "We tailor the survey to your building and your questions — a single block, a whole estate, or targeted problem areas.",
      },
      {
        title: "Non-intrusive assessment",
        detail:
          "Communal areas are assessed across fire doors, passive fire protection and general compartmentation without disturbing residents.",
      },
      {
        title: "Flag third-party hazards",
        detail:
          "Electrical, gas or plumbing hazards that need specialist assessment are recorded and flagged for follow-up.",
      },
      {
        title: "Practical report",
        detail:
          "A prioritised overview of compliance status and remedial works — ideal for budget and works programme planning.",
      },
    ],
    standards: ["Non-intrusive methodology", "Communal area focus", "Prioritised reporting", "Budget-planning ready"],
    deliverables: [
      "Validation survey report with compliance overview",
      "Prioritised remedial works summary",
      "Third-party hazard flags (electrical, gas, plumbing)",
      "Follow-up options priced by our accredited teams",
    ],
    sections: [
      {
        heading: "What is a validation survey?",
        paragraphs: [
          "A validation survey is a non-intrusive assessment of communal areas throughout the building, designed to confirm their compliance whilst giving a broad overview of any further remedial works needed.",
          "The survey consists of varied inspections — from fire doors and passive fire protection to the generic compartmentation of the building.",
        ],
      },
      {
        heading: "Flexible and practical",
        paragraphs: [
          "Not to be confused with a fire risk assessment, fire validations are a flexible way to get a hold on what needs to be done. We work to your needs, including providing information regarding electrical, gas or plumbing hazards that will require further assessment from a third party.",
          "The result is a practical, prioritised picture of your building's fire safety position — ideal for asset teams planning budgets and works programmes.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is a validation survey different from a fire risk assessment?",
        answer:
          "A fire risk assessment is a formal legal assessment of fire risk under the Regulatory Reform (Fire Safety) Order 2005. A validation survey is a flexible, non-intrusive check of communal areas that confirms compliance and highlights remedial works — a practical tool for planning rather than a statutory document.",
      },
      {
        question: "Is a validation survey disruptive to residents?",
        answer:
          "No. Validation surveys are non-intrusive and focused on communal areas, so residents experience minimal or no disruption.",
      },
      {
        question: "What happens after the survey?",
        answer:
          "You receive a clear report outlining compliance status and any recommended remedial works. Excel Fire can then price and deliver those works through our accredited installation and maintenance teams.",
      },
    ],
    metaTitle: "Validation Surveys",
    metaDescription:
      "Non-intrusive validation surveys of communal areas covering fire doors, passive fire protection and compartmentation. Practical compliance reporting from Excel Fire Ltd.",
  },
  {
    slug: "injectaclad",
    title: "Injectaclad",
    navLabel: "Injectaclad",
    cardSummary: "Specialist cavity barrier reinstatement with minimal disruption on live sites.",
    heroDescription:
      "Reinstating the fire resistance performance of wall and floor construction cavity details using the specialist Injectaclad system — with minimal disruption.",
    cardImage: "/Excel/interclad.webp",
    heroImage: "/Excel/Services/site-firestopping-4.jpg",
    detailImage: "/Excel/Services/site-firestopping-2.jpg",
    detailImageAlt: "Injectaclad cavity barrier installation by Excel Fire",
    keyPoints: [
      "Approved Injectaclad installer",
      "Reinstates fire resistance of cavity details",
      "Minimal disruption on live and occupied sites",
      "Ideal for remediating defective or missing cavity barriers",
    ],
    process: [
      {
        title: "Identify defective cavities",
        detail:
          "Survey findings or external wall assessments pinpoint where cavity barriers are missing, damaged or incorrectly installed.",
      },
      {
        title: "Specify the repair",
        detail:
          "We confirm Injectaclad is the right system for the cavity detail and agree access points to minimise opening-up works.",
      },
      {
        title: "Inject and seal",
        detail:
          "The graphite-based system is injected to reinstate the fire resistance of the cavity — residents typically stay in place throughout.",
      },
      {
        title: "Evidence and certify",
        detail:
          "Full photographic evidence and compliant documentation for your building safety records.",
      },
    ],
    standards: ["Approved Injectaclad installer", "Minimal opening-up works", "Graphite-based intumescent system", "Documented for building safety records"],
    deliverables: [
      "Photographic evidence of every injection point",
      "Compliant installation documentation",
      "Reinstated cavity barrier performance",
      "Minimal disruption to residents",
    ],
    sections: [
      {
        heading: "What is Injectaclad?",
        paragraphs: [
          "Injectaclad is a specialist system used to reinstate the fire resistance performance of wall and floor construction cavity details. It provides an injected, graphite-based solution that expands under heat to seal cavities and restore compartmentation.",
          "It is particularly effective where cavity barriers are missing, defective or damaged — a common issue identified in external wall and compartmentation surveys.",
        ],
      },
      {
        heading: "Minimal disruption remediation",
        paragraphs: [
          "Because Injectaclad is installed via injection, remediation can be carried out with minimal opening-up works and minimal disruption to residents and building users. This makes it ideally suited to live sites and occupied buildings where traditional remediation would be intrusive and costly.",
          "As an approved installer, Excel Fire delivers Injectaclad works with full photographic evidence and compliant documentation for your building safety records.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is Injectaclad used?",
        answer:
          "Injectaclad is used to reinstate fire resistance in construction cavities — typically where cavity barriers in external walls, compartment walls or floor details are missing, damaged or incorrectly installed.",
      },
      {
        question: "Is the building disrupted during installation?",
        answer:
          "Disruption is minimal. The system is injected, so extensive opening-up works are usually avoided and residents can typically remain in place throughout.",
      },
      {
        question: "Is the installation certified?",
        answer:
          "Yes. Excel Fire is an approved Injectaclad installer and all works are documented with photographic evidence for your compliance records.",
      },
    ],
    metaTitle: "Injectaclad Cavity Barrier Remediation",
    metaDescription:
      "Approved Injectaclad installer reinstating cavity barrier fire resistance with minimal disruption. Specialist remediation for live and occupied buildings from Excel Fire Ltd.",
  },
  {
    slug: "active-fire-systems",
    title: "Active Fire Systems",
    navLabel: "Active Fire Systems",
    cardSummary: "Detection and alarm support from specification through to ongoing compliance.",
    heroDescription:
      "A full-service approach to active fire systems — from specification and installation through to ongoing maintenance and compliance.",
    cardImage: "/Excel/active.webp",
    heroImage: "/Excel/london.jpg",
    detailImage: "/Excel/active.webp",
    detailImageAlt: "Active fire detection and alarm system installation",
    keyPoints: [
      "Specification, installation, maintenance and compliance",
      "Fire detection and alarm system support",
      "Complements our passive fire protection services",
      "One accountable partner for complete fire safety",
    ],
    process: [
      {
        title: "Specify",
        detail:
          "We work with responsible persons and building managers to specify detection and alarm systems that meet the relevant British Standards.",
      },
      {
        title: "Install and commission",
        detail:
          "Systems are installed and commissioned around the practical needs of the building and its occupants.",
      },
      {
        title: "Maintain",
        detail:
          "Planned maintenance keeps systems tested, certified and audit-ready year-round.",
      },
      {
        title: "Stay compliant",
        detail:
          "Ongoing compliance support and clear records — one accountable partner across active and passive fire safety.",
      },
    ],
    standards: ["British Standards specification", "Full lifecycle support", "Planned maintenance", "Combined active and passive delivery"],
    deliverables: [
      "System specification and design documentation",
      "Commissioning certificates",
      "Planned maintenance schedule",
      "Compliance test records",
    ],
    sections: [
      {
        heading: "Complete active fire cover",
        paragraphs: [
          "Excel Fire provides a full-service approach to active fire systems, supporting clients from initial specification and design through installation, commissioning, ongoing maintenance and compliance.",
          "Active systems — detection, alarms and emergency lighting — are the early-warning half of a compliant building. Combined with our passive fire protection services, we can act as one accountable partner across your entire fire safety strategy.",
        ],
      },
      {
        heading: "Designed around your building",
        paragraphs: [
          "Every building is different. We work with responsible persons, building managers and contractors to specify systems that meet the relevant British Standards and the practical needs of the building and its occupants — then keep them tested, maintained and audit-ready.",
        ],
      },
    ],
    faqs: [
      {
        question: "What active fire systems do you support?",
        answer:
          "We support fire detection and alarm systems from specification and installation through to ongoing maintenance and compliance testing.",
      },
      {
        question: "Can you manage both active and passive fire protection?",
        answer:
          "Yes — that is one of our key strengths. Excel Fire delivers passive fire protection, fire doors and active systems as a single accountable partner, simplifying compliance for responsible persons.",
      },
      {
        question: "Do you offer ongoing maintenance contracts?",
        answer:
          "Yes. We provide planned maintenance and compliance support to keep your active fire systems tested, certified and audit-ready year-round.",
      },
    ],
    metaTitle: "Active Fire Systems",
    metaDescription:
      "Full-service active fire system support — specification, installation, maintenance and compliance for fire detection and alarm systems from Excel Fire Ltd.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
