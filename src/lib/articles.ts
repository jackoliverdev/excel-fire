export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  publishedDate: string; // DD/MM/YYYY for display
  publishedIso: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: ArticleSection[];
  metaDescription: string;
};

export const articles: Article[] = [
  {
    slug: "passive-fire-protection-guide-for-building-managers",
    title: "Passive Fire Protection: What Building Managers Need to Know",
    summary:
      "A clear overview of compartmentation, fire stopping and the compliance priorities every responsible person should understand.",
    publishedDate: "12/05/2026",
    publishedIso: "2026-05-12",
    readingTime: "5 min read",
    image: "/Excel/Services/site-firestopping-1.jpg",
    imageAlt: "Compliant fire stopping installation in a riser",
    intro:
      "Passive fire protection is the part of a building's fire strategy that works silently, all day, every day. Unlike alarms and sprinklers, it needs no activation — but it only works if it is installed correctly, inspected regularly and maintained properly. Here is what every building manager and responsible person should know.",
    sections: [
      {
        heading: "What passive fire protection actually does",
        paragraphs: [
          "Passive fire protection compartments a building using fire-resistance rated walls and floors. By dividing a building into smaller fire compartments, it prevents or slows the spread of fire and smoke from the room of origin to the rest of the building — limiting damage and giving occupants time to evacuate or reach an area of refuge.",
          "Typical passive measures include fire doors, fire stopping around service penetrations, cavity barriers, fire-rated boarding and structural fire protection to steelwork.",
        ],
      },
      {
        heading: "Your legal responsibilities",
        paragraphs: [
          "Under the Regulatory Reform (Fire Safety) Order 2005, the responsible person or duty holder must carry out a fire safety risk assessment and implement and maintain a fire management plan. Failure to do so can result in a fine, imprisonment, or both.",
          "It is also worth remembering that when taking out insurance cover, the insurer assumes all fire regulations have been complied with. In the event of a claim, there could be a costly shock if your obligations have not been met.",
        ],
      },
      {
        heading: "Where problems usually hide",
        paragraphs: [
          "The most common compartmentation breaches we find are above suspended ceilings, in loft voids and risers, and around mechanical and electrical penetrations added after the building was completed. Every new cable run or pipe through a compartment wall is a potential breach if it is not fire stopped correctly.",
        ],
        bullets: [
          "Unsealed service penetrations through compartment walls and floors",
          "Missing or damaged cavity barriers",
          "Poorly fitted or damaged fire doors",
          "Unprotected structural steelwork",
        ],
      },
      {
        heading: "Getting it right",
        paragraphs: [
          "Third-party accreditation matters. A FIRAS-accredited contractor works to audited standards, and digital evidence — photographic reporting, QR asset tagging and cloud dashboards — keeps your golden thread of building safety information complete. If you have not had your building's compartmentation inspected recently, a fire stopping inspection or validation survey is the practical first step.",
        ],
      },
    ],
    metaDescription:
      "What building managers and responsible persons need to know about passive fire protection: compartmentation, fire stopping, legal duties and where compliance problems usually hide.",
  },
  {
    slug: "fire-door-checks-regulation-10-explained",
    title: "Fire Door Checks: Regulation 10 of the Fire Safety (England) Regulations 2022 Explained",
    summary:
      "Quarterly communal door checks, annual flat entrance door checks — what the law requires and how to stay compliant.",
    publishedDate: "02/06/2026",
    publishedIso: "2026-06-02",
    readingTime: "4 min read",
    image: "/Excel/Services/site-installation-1.jpg",
    imageAlt: "Certified fire door installation in a residential building",
    intro:
      "Since 23 January 2023, responsible persons for multi-occupied residential buildings in England over 11 metres in height have had specific legal duties for fire door checks. Regulation 10 of the Fire Safety (England) Regulations 2022 is short, but its practical implications are significant.",
    sections: [
      {
        heading: "What Regulation 10 requires",
        paragraphs: [
          "For multi-occupied residential buildings in England with storeys over 11 metres in height, the responsible person must:",
        ],
        bullets: [
          "Undertake quarterly checks of all fire doors, including self-closing devices, in the common parts",
          "Undertake — on a best endeavour basis — annual checks of all flat entrance doors, including self-closing devices, that lead onto a building's common parts",
        ],
      },
      {
        heading: "What a proper check looks like",
        paragraphs: [
          "A meaningful fire door check goes beyond a glance. It should confirm the construction of the door and the materials used, that hinges conform to BS EN 1935, that the self-closer is adequate and closes the door fully, that gaps do not exceed required specifications, that fire-rated glass carries the correct markings, and that smoke and heat seals are present and intact within the frame.",
        ],
      },
      {
        heading: "Recording your compliance",
        paragraphs: [
          "Compliance you cannot evidence is compliance you cannot prove. QR asset tagging aligned with the golden thread regime, cloud-based dashboards and clear PDF reports with remedial schedules give responsible persons a defensible audit trail — and make the next quarterly check faster and cheaper.",
          "Where a check identifies defects, a UKAS third-party accredited maintenance contractor can often repair and certify the door rather than replace it, keeping costs proportionate.",
        ],
      },
    ],
    metaDescription:
      "Regulation 10 of the Fire Safety (England) Regulations 2022 explained: quarterly communal fire door checks, annual flat entrance door checks and how responsible persons stay compliant.",
  },
  {
    slug: "compartmentation-surveys-live-buildings-checklist",
    title: "Compartmentation in Live Buildings: A Practical Delivery Checklist",
    summary:
      "How to deliver high-quality fire stopping works in occupied buildings with minimal disruption to residents and operations.",
    publishedDate: "18/06/2026",
    publishedIso: "2026-06-18",
    readingTime: "4 min read",
    image: "/Excel/Services/site-firestopping-3.jpg",
    imageAlt: "Fire stopping works being delivered in an occupied building",
    intro:
      "Delivering compartmentation works in an occupied building is a different discipline from working on a construction site. Residents are home, businesses are trading, and access is negotiated rather than assumed. This checklist reflects how we plan and deliver fire stopping programmes on live sites.",
    sections: [
      {
        heading: "Before works start",
        paragraphs: ["Good outcomes are set up before anyone lifts a tool:"],
        bullets: [
          "Survey first — a fire stopping inspection or validation survey scopes the real workload, including loft voids and above suspended ceilings",
          "Sequence works by block, core or floor to keep disruption predictable",
          "Communicate with residents early: what is happening, when, and why it matters",
          "Confirm substrates, sizes and manufacturer-compliant installation details for every penetration type",
        ],
      },
      {
        heading: "During delivery",
        paragraphs: [
          "On live sites, tidiness and communication matter as much as technical quality. Dust sheets, daily clean-downs and respectful operatives keep complaints low and access co-operation high. Every installation should be photographed and logged as it is completed — retrofitting evidence later never works.",
        ],
      },
      {
        heading: "At handover",
        paragraphs: [
          "The handover pack should include photographic evidence of every installation, product data and manufacturer specifications, and a clear record of any areas where access was not possible. Digital reporting platforms such as OneTrace make this a by-product of delivery rather than an afterthought — and give asset teams a golden thread record they can rely on at audit.",
        ],
      },
    ],
    metaDescription:
      "A practical checklist for delivering compartmentation and fire stopping works in occupied buildings: surveying, sequencing, resident communication and evidence at handover.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
