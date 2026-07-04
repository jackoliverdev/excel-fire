export type Sector = {
  id: string;
  title: string;
  strap: string;
  description: string;
  challenges: string[];
  relevantServices: { label: string; href: string }[];
  image: string;
  imageAlt: string;
};

export const sectors: Sector[] = [
  {
    id: "social-housing",
    title: "Social Housing",
    strap: "Resident-first delivery for housing providers and councils",
    description:
      "Housing providers carry some of the most demanding fire safety duties in the country — thousands of doors, occupied blocks and Regulation 10 check cycles that never stop. We deliver planned programmes and responsive works with clear resident communication, tidy working and evidence your compliance team can rely on at audit.",
    challenges: [
      "Quarterly communal and annual flat entrance door checks at estate scale",
      "Works in occupied homes with vulnerable residents",
      "Golden thread record-keeping across large asset bases",
    ],
    relevantServices: [
      { label: "Fire Door Inspections", href: "/services/fire-door-inspections" },
      { label: "Fire Door Maintenance", href: "/services/fire-door-maintenance" },
      { label: "Fire Stopping Inspections", href: "/services/fire-stopping-inspections" },
    ],
    image: "/Excel/Services/site-installation-1.jpg",
    imageAlt: "Certified fire door works in an occupied residential block",
  },
  {
    id: "main-contractors",
    title: "Main Contractors",
    strap: "A reliable specialist package on programme, every time",
    description:
      "Principal contractors need a passive fire specialist who turns up resourced, works to programme and hands over clean evidence without chasing. Our FIRAS-accredited teams integrate with your site management, deliver to manufacturer-tested details and close out with OneTrace reports your client's building control will accept first time.",
    challenges: [
      "Programme certainty across fast-moving sites",
      "First-time-acceptance evidence for building control",
      "Coordination with M&E and follow-on trades",
    ],
    relevantServices: [
      { label: "Passive Fire Protection", href: "/services/passive-fire-protection" },
      { label: "Fire Door Installation", href: "/services/fire-door-installation" },
      { label: "Injectaclad", href: "/services/injectaclad" },
    ],
    image: "/Excel/Services/site-firestopping-2.jpg",
    imageAlt: "Fire stopping package delivery on a construction site",
  },
  {
    id: "commercial",
    title: "Commercial & Managed Estates",
    strap: "Keeping trading buildings compliant without disruption",
    description:
      "Offices, retail and mixed-use estates need fire safety works that fit around business hours and building users. We plan around your operations — out-of-hours where needed — and leave facilities teams with the reports, certification and asset records that make the next audit straightforward.",
    challenges: [
      "Works around trading hours and building users",
      "Multi-tenant coordination and access",
      "Audit-ready records for insurers and assessors",
    ],
    relevantServices: [
      { label: "Validation Surveys", href: "/services/validation-surveys" },
      { label: "Fire Stopping Inspections", href: "/services/fire-stopping-inspections" },
      { label: "Active Fire Systems", href: "/services/active-fire-systems" },
    ],
    image: "/Excel/Services/site-firestopping-4.jpg",
    imageAlt: "Compartmentation inspection in a commercial building",
  },
  {
    id: "healthcare",
    title: "Healthcare & Public Sector",
    strap: "Trusted in the buildings that can never close",
    description:
      "Hospitals, care settings and public buildings cannot pause for fire safety works. Our teams are experienced in infection-control aware, phased delivery inside live healthcare environments — trusted by the NHS and local authorities to work safely around patients, staff and the public.",
    challenges: [
      "Live environments that cannot decant",
      "Enhanced permit, DBS and infection-control requirements",
      "Complex older estates with undocumented alterations",
    ],
    relevantServices: [
      { label: "Fire Stopping Inspections", href: "/services/fire-stopping-inspections" },
      { label: "Passive Fire Protection", href: "/services/passive-fire-protection" },
      { label: "Fire Door Maintenance", href: "/services/fire-door-maintenance" },
    ],
    image: "/Excel/Services/site-firestopping-1.jpg",
    imageAlt: "Compliant fire stopping in a public sector building",
  },
  {
    id: "education",
    title: "Education & Student Accommodation",
    strap: "Term-time aware programmes for schools and universities",
    description:
      "Schools, colleges and student accommodation combine high occupancy with hard delivery windows. We plan surveys and remediation around term dates and quiet periods, delivering compliant works with the documentation bursars, estates teams and accommodation managers need for their responsible person duties.",
    challenges: [
      "Holiday-window delivery with fixed end dates",
      "Safeguarding-compliant site teams",
      "High-churn buildings needing robust door hardware",
    ],
    relevantServices: [
      { label: "Fire Door Installation", href: "/services/fire-door-installation" },
      { label: "Fire Door Inspections", href: "/services/fire-door-inspections" },
      { label: "Validation Surveys", href: "/services/validation-surveys" },
    ],
    image: "/Excel/Services/site-installation-2.jpg",
    imageAlt: "Fire door installation in an education building",
  },
];
