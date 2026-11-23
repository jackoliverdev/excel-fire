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
  heroImageAlt: string;
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
    cardSummary: "FIRAS-accredited fire stopping and compartmentation installed to tested details and logged.",
    heroDescription:
      "Installing, assessing and improving passive fire protection standards using tested, certified products and expert knowledge, fully FIRAS accredited.",
    cardImage: "/images/projects/printworks-tottenham/riser-after.webp",
    heroImage: "/images/projects/printworks-tottenham/riser-after.webp",
    detailImage: "/images/projects/printworks-tottenham/mock-up-wall-services.webp",
    heroImageAlt: "Multi-service riser fire stopped with a batt system and an Excel Fire QR install label",
    detailImageAlt: "The full-scale fire stopping mock-up wall Excel Fire built at Printworks, Tottenham",
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
          "Every installation is photographed and logged in OneTrace at the point of completion, nothing retrofitted, nothing missed.",
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
          "Excel Fire are fully FIRAS accredited to deliver fire stopping services including mastic application, fire batt, collars, wraps, fire-lined boarding and more. We conduct every installation to the manufacturer's tested details, using certified products and FIRAS-trained operatives.",
          "As a FIRAS-accredited supplier, we hold both the technical and practical knowledge to carry out work that adheres to all industry standards and necessary compliances. Every project is compiled into an in-depth digital report using the OneTrace platform once works are complete.",
        ],
      },
      {
        heading: "Reassurance and compliance",
        paragraphs: [
          "As one of few FIRAS-accredited contractors operating in London and the South East, we give clients the evidence they need: a photographed, logged record of every seal, so you can show residents, insurers and the fire authority exactly what was done.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between passive and active fire protection?",
        answer:
          "Passive fire protection contains fire and smoke through the building fabric itself, compartment walls, floors, fire doors and fire stopping. Active fire protection detects and responds to fire, such as alarms, detection and suppression systems. A compliant building needs both.",
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
    metaTitle: "Passive Fire Protection & Fire Stopping, London",
    metaDescription:
      "FIRAS-accredited fire stopping and compartmentation across London and the South East. Every seal labelled, photographed and logged for your golden thread.",
  },
  {
    slug: "fire-door-installation",
    title: "Fire Door Installation",
    navLabel: "Fire Door Installation",
    cardSummary: "FIRAS-certified installation of fully accredited timber fire door sets.",
    heroDescription:
      "Our specialist teams assess, install and certify fully accredited fire doors for residential and commercial properties, in accordance with BS\u00a08214.",
    cardImage: "/images/projects/bryanston-harewood-ealing/finished-red.webp",
    heroImage: "/images/projects/bryanston-harewood-ealing/finished-red.webp",
    detailImage: "/images/projects/lb-ealing/flat-36a-after.webp",
    heroImageAlt: "Certified flat entrance doorset installed by Excel Fire for L&Q residents in Ealing",
    detailImageAlt: "PAS\u00a024 FD30S flat entrance doorset with fire-rated vision panels, LB Ealing",
    keyPoints: [
      "FIRAS-certified installer working to BS\u00a08214",
      "Door sets tested under BS\u00a0476-22 or BS\u00a0476-31",
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
        title: "Install to BS\u00a08214",
        detail:
          "FIRAS-certified teams fit each door to the standard and the manufacturer's guidance, with clean, respectful working on occupied sites.",
      },
      {
        title: "Certify and hand over",
        detail:
          "A FIRAS supervisor signs off every set with a methodical, photographic installation report.",
      },
    ],
    standards: ["FIRAS certified", "BS\u00a08214 installation", "BS\u00a0476-22 / BS\u00a0476-31 tested", "Third-party documentation"],
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
          "As a FIRAS-certified installer, Excel Fire's competent and talented team fits and installs timber fire doors in accordance with BS\u00a08214 and manufacturers' guidance.",
          "Each door set comes equipped with ironmongery, framing and additional items that have been subject to relevant regulatory testing under BS\u00a0476-22 or BS\u00a0476-31. Every set is provided along with the necessary documentation and legislation from accredited third-party manufacturers.",
          "All door sets installed are certified by our FIRAS supervisors with a methodical, photographic and detailed installation report.",
        ],
      },
      {
        heading: "Door sets we install",
        paragraphs: ["Excel Fire installs the full range of certified fire door sets, including:"],
        bullets: [
          "FD30: fire door, 30-minute resistance",
          "FD30s: fire and smoke door, 30-minute resistance",
          "FD60: fire door, 60-minute resistance",
          "FD60s: fire and smoke door, 60-minute resistance",
          "FD30s SC&VP: fire and smoke door with vision panel and self-closing device, 30-minute resistance (usually communal)",
          "FD60s SC&VP: fire and smoke door with vision panel and self-closing device, 60-minute resistance (usually communal)",
          "FEDs: front/flat entrance doors, most commonly FD30s",
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
    metaTitle: "Fire Door Installation, FIRAS Certified",
    metaDescription:
      "Certified fire door and flat entrance door installation to BS\u00a08214. 1,500+ FD30S doorsets fitted for councils and housing providers, each certified.",
  },
  {
    slug: "fire-door-maintenance",
    title: "Fire Door Maintenance",
    navLabel: "Fire Door Maintenance",
    cardSummary: "UKAS third-party accredited maintenance and repair of fire rated door sets.",
    heroDescription:
      "Certified maintenance to existing fire doorsets, bringing existing doors up to standard with certified repairs and a full works log.",
    cardImage: "/images/projects/eurostar-temple-mills/glazed-doorset-after.webp",
    heroImage: "/images/projects/eurostar-temple-mills/glazed-doorset-after.webp",
    detailImage: "/images/projects/emirates-stadium/back-of-house-after.webp",
    heroImageAlt: "Certified glazed fire doorset at Eurostar Temple Mills after Excel Fire works",
    detailImageAlt: "Metal fire doorset with keypad access and overhead closers at Emirates Stadium",
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
          "A fastidious, priced schedule sets out exactly what each door needs, easing, seals, ironmongery, repairs.",
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
          "Regulation 10 of the Fire Safety (England) Regulations 2022 made it a legal requirement from 23 January 2023 for responsible persons of multi-occupied residential buildings in England with storeys over 11 metres to undertake quarterly checks of all fire doors in common parts, and annual checks, on a best endeavour basis, of all flat entrance doors that open onto common parts.",
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
    metaTitle: "Fire Door Maintenance & Repairs",
    metaDescription:
      "BM TRADA Q-Mark fire door maintenance: closers, seals, gaps and ironmongery put right, with a certified record for every door. London and the South East.",
  },
  {
    slug: "fire-door-inspections",
    title: "Fire Door Inspections",
    navLabel: "Fire Door Inspections",
    cardSummary: "Evidence-led inspections with QR asset tagging and clear remedial reporting.",
    heroDescription:
      "We assess existing fire doors and determine if they are compliant and certified, with thorough photographic reporting and QR asset tagging on every door set.",
    cardImage: "/images/projects/bryanston-harewood-ealing/finished-blue.webp",
    heroImage: "/images/projects/eurostar-temple-mills/canteen-after.webp",
    detailImage: "/images/projects/david-lee-point-brasset-point-newham/tower.webp",
    heroImageAlt: "Fire doorset with vision panels and overpanel at Eurostar Temple Mills",
    detailImageAlt: "22-storey residential tower in Newham where Excel Fire surveyed 396 communal doorsets",
    keyPoints: [
      "Compliance surveys to BS\u00a08214, BS\u00a0476-22 and BS\u00a0476-31",
      "QR asset tagging in line with the golden thread regime",
      "Cloud-based dashboard access to all inspections",
      "Easy-to-navigate PDF reports with remedial schedules",
    ],
    process: [
      {
        title: "Plan the inspection",
        detail:
          "We agree scope and access with your building team, communal doors, flat entrance doors, or a full estate programme.",
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
    standards: ["BS\u00a08214 assessment", "BS EN\u00a01935 ironmongery checks", "Golden thread QR tagging", "Regulation 10 compliant"],
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
          "Our fire door inspections look at existing fire doors and determine whether they are compliant and certified. Each survey establishes whether doors can be improved under BS\u00a08214 or should be replaced with a certified fire door set tested to BS\u00a0476-22 or BS\u00a0476-31.",
          "We photograph and report on every critical element of the door set:",
        ],
        bullets: [
          "Construction of the door and the materials used",
          "Whether hinges conform to BS EN\u00a01935",
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
          "Once completed, an easy-to-navigate PDF report is issued along with a schedule of remedial works for each door set, giving you a clear, prioritised path to full compliance.",
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
    metaTitle: "Fire Door Inspections & Regulation 10 Checks",
    metaDescription:
      "UKAS-certified fire door inspections for Regulation 10 and FRA actions. Photo reports, QR asset tags and a priced remedial schedule for every door.",
  },
  {
    slug: "fire-stopping-inspections",
    title: "Fire Stopping Inspections",
    navLabel: "Fire Stopping Inspections",
    cardSummary: "Compartmentation assurance from Level 3 accredited, UKAS-certified inspectors.",
    heroDescription:
      "Ensuring your building meets the required compartmentation between fire separating walls and ceilings, with photographic evidence and compliant recommendations.",
    cardImage: "/images/projects/printworks-tottenham/duct-after.webp",
    heroImage: "/images/projects/printworks-tottenham/duct-after.webp",
    detailImage: "/Excel/Services/site-firestopping-3.jpg",
    heroImageAlt: "Ductwork penetration sealed and labelled with an Excel Fire QR install label",
    detailImageAlt: "Fire stopped service penetrations above a doorway",
    keyPoints: [
      "Level 3 accredited and UKAS third-party certified inspectors",
      "M&E penetrations and structural fire protection identified",
      "Photographic evidence with sizes, substrates and nonconformities",
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
          "Level 3 accredited inspectors identify M&E penetrations, structural protection gaps and irregularities, including loft voids and above suspended ceilings.",
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
          "Even in hard-to-reach places such as loft voids or above suspended ceilings, our teams can inspect these areas for you, so nothing is missed.",
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
          "Yes. We routinely inspect loft voids, risers and areas above suspended ceilings, the places where compartmentation breaches most often go unnoticed.",
      },
      {
        question: "Can you complete the remedial fire stopping works?",
        answer:
          "Yes. As a FIRAS-accredited fire stopping contractor we can deliver the compliant remediation identified in the inspection, with full digital evidence of completed works.",
      },
    ],
    metaTitle: "Fire Stopping Inspections & Surveys",
    metaDescription:
      "Compartmentation and fire stopping inspections by UKAS-certified inspectors, including risers, lofts and ceiling voids. Clear photo reports and remedial scope.",
  },
  {
    slug: "validation-surveys",
    title: "Validation Surveys",
    navLabel: "Validation Surveys",
    cardSummary: "Non-intrusive assessments of communal areas with a broad compliance overview.",
    heroDescription:
      "A flexible, non-intrusive assessment of communal areas throughout your building, confirming compliance and outlining any further remedial works needed.",
    cardImage: "/images/projects/david-lee-point-brasset-point-newham/both-blocks.webp",
    heroImage: "/images/projects/david-lee-point-brasset-point-newham/both-blocks.webp",
    detailImage: "/Excel/Services/site-firestopping-4.jpg",
    heroImageAlt: "David Lee Point and Brasset Point, two occupied high-rise blocks in Newham",
    detailImageAlt: "Fire stopping around cable trays and pipework in a service void",
    keyPoints: [
      "Non-intrusive assessment of communal areas",
      "Fire doors, passive fire protection and compartmentation reviewed",
      "Scope set by your building: one block, an estate or a problem area",
      "Clear overview of any further remedial works required",
    ],
    process: [
      {
        title: "Agree the scope",
        detail:
          "We tailor the survey to your building and your questions, a single block, a whole estate, or targeted problem areas.",
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
          "A prioritised overview of compliance status and remedial works, ideal for budget and works programme planning.",
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
          "The survey consists of varied inspections, from fire doors and passive fire protection to the generic compartmentation of the building.",
        ],
      },
      {
        heading: "Flexible and practical",
        paragraphs: [
          "Not to be confused with a fire risk assessment, fire validations are a flexible way to get a hold on what needs to be done. We work to your needs, including providing information regarding electrical, gas or plumbing hazards that will require further assessment from a third party.",
          "The result is a practical, prioritised picture of your building's fire safety position, ideal for asset teams planning budgets and works programmes.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is a validation survey different from a fire risk assessment?",
        answer:
          "A fire risk assessment is a formal legal assessment of fire risk under the Regulatory Reform (Fire Safety) Order 2005. A validation survey is a flexible, non-intrusive check of communal areas that confirms compliance and highlights remedial works, a practical tool for planning rather than a statutory document.",
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
    metaTitle: "Fire Safety Validation Surveys",
    metaDescription:
      "Non-intrusive validation surveys of communal areas: fire doors, fire stopping and compartmentation reviewed, with a prioritised report for planning works.",
  },
  {
    slug: "injectaclad",
    title: "Injectaclad",
    navLabel: "Injectaclad",
    cardSummary: "Specialist cavity barrier reinstatement with minimal disruption on live sites.",
    heroDescription:
      "Reinstating the fire resistance performance of wall and floor construction cavity details using the specialist Injectaclad system, with minimal disruption.",
    cardImage: "/images/projects/david-lee-point-brasset-point-newham/tower-22-floors.webp",
    heroImage: "/images/projects/david-lee-point-brasset-point-newham/tower-22-floors.webp",
    detailImage: "/Excel/Services/site-firestopping-2.jpg",
    heroImageAlt: "High-rise residential tower, the type of building where cavity barrier remediation is needed",
    detailImageAlt: "Fire stopping beneath a run of sprinkler pipework",
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
          "The graphite-based system is injected to reinstate the fire resistance of the cavity, residents typically stay in place throughout.",
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
          "It is particularly effective where cavity barriers are missing, defective or damaged, a common issue identified in external wall and compartmentation surveys.",
        ],
      },
      {
        heading: "Remediation with minimal disruption",
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
          "Injectaclad is used to reinstate fire resistance in construction cavities, typically where cavity barriers in external walls, compartment walls or floor details are missing, damaged or incorrectly installed.",
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
      "Approved Injectaclad installer. We reinstate missing or defective cavity barriers in occupied buildings, usually with residents staying in place.",
  },
  {
    slug: "active-fire-systems",
    title: "Active Fire Systems",
    navLabel: "Active Fire Systems",
    cardSummary: "Detection and alarm support from specification through to ongoing compliance.",
    heroDescription:
      "A full-service approach to active fire systems, from specification and installation through to ongoing maintenance and compliance.",
    cardImage: "/images/projects/emirates-stadium/concourse-e2-after.webp",
    heroImage: "/images/projects/emirates-stadium/concourse-e2-after.webp",
    detailImage: "/images/projects/emirates-stadium/stadium.webp",
    heroImageAlt: "Alarm-interlinked glazed fire doorset at Emirates Stadium",
    detailImageAlt: "Emirates Stadium, where Excel Electrics interlinked every door device with the fire alarm",
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
          "Ongoing compliance support and clear records, one accountable partner across active and passive fire safety.",
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
          "Active systems (detection, alarms and emergency lighting) are the early-warning half of a compliant building. Combined with our passive fire protection services, we can act as one accountable partner across your entire fire safety strategy.",
        ],
      },
      {
        heading: "Designed around your building",
        paragraphs: [
          "Every building is different. We work with responsible persons, building managers and contractors to specify systems that meet the relevant British Standards and the practical needs of the building and its occupants, then keep them tested, maintained and audit-ready.",
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
          "Yes. That is one of our key strengths. Excel Fire delivers passive fire protection, fire doors and active systems as a single accountable partner, simplifying compliance for responsible persons.",
      },
      {
        question: "Do you offer ongoing maintenance contracts?",
        answer:
          "Yes. We provide planned maintenance and compliance support to keep your active fire systems tested, certified and audit-ready year-round.",
      },
    ],
    metaTitle: "Active Fire Systems & Door Interlinks",
    metaDescription:
      "Fire alarm interlinks, maglocks and hold-open devices installed with our fire doors by Excel Electrics, as at Emirates Stadium. One accountable contractor.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
