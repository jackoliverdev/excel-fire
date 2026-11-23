import type { SectorId } from "@/lib/projects";

export type Sector = {
  id: SectorId;
  /** h1 on the sector page, phrased the way buyers search. */
  heading: string;
  metaTitle: string;
  metaDescription: string;
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
    metaTitle: "Fire Doors & Fire Stopping for Social Housing",
    heading: "Fire doors and fire stopping for social housing",
    metaDescription:
      "Fire door installation, inspection and fire stopping for councils and housing providers, with resident liaison and a FIRAS certificate for every door.",
    title: "Social Housing",
    strap: "Resident-first delivery for housing providers and councils",
    description:
      "Housing providers carry some of the most demanding fire safety duties in the country, thousands of doors, occupied blocks and Regulation 10 check cycles that never stop. We deliver planned programmes and responsive works with clear resident communication, tidy working and evidence your compliance team can rely on at audit.",
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
    image: "/images/projects/lb-ealing/flat-36a-after.webp",
    imageAlt: "Red PAS\u00a024 flat entrance doorset installed for the London Borough of Ealing",
  },
  {
    id: "main-contractors",
    metaTitle: "Passive Fire Subcontractor for Main Contractors",
    heading: "Passive fire protection subcontractor for main contractors",
    metaDescription:
      "FIRAS-accredited fire stopping and fire door packages for principal contractors: mock-up walls, labelled seals and evidence building control accepts.",
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
    image: "/images/projects/printworks-tottenham/site-view.webp",
    imageAlt: "The Printworks new-build site in Tottenham, delivered for McAleer & Rushe",
  },
  {
    id: "commercial",
    metaTitle: "Fire Safety for Venues, Transport & Estates",
    heading: "Fire safety for commercial buildings, venues and transport",
    metaDescription:
      "Fire doors and fire stopping for live venues, transport depots and managed estates, phased around operations. Royal Albert Hall, Emirates, Eurostar.",
    title: "Commercial, Venues & Transport",
    strap: "Keeping live buildings compliant without stopping the show",
    description:
      "Stadiums, concert halls, transport depots and managed estates cannot stop for fire safety works. We phase every programme around fixtures, shows and shift patterns, working with FM providers such as CBRE, and leave facilities teams with certification, installation logs and asset records that make the next audit straightforward.",
    challenges: [
      "Works phased around fixtures, shows and 24/7 operations",
      "Multi-tenant coordination and access",
      "Audit-ready records for insurers and assessors",
    ],
    relevantServices: [
      { label: "Validation Surveys", href: "/services/validation-surveys" },
      { label: "Fire Stopping Inspections", href: "/services/fire-stopping-inspections" },
      { label: "Active Fire Systems", href: "/services/active-fire-systems" },
    ],
    image: "/images/projects/royal-albert-hall/venue.webp",
    imageAlt: "The Royal Albert Hall, where Excel Fire runs a continuous fire stopping programme",
  },
  {
    id: "healthcare",
    metaTitle: "Fire Safety for Healthcare & Public Sector",
    heading: "Fire safety works for healthcare and the public sector",
    metaDescription:
      "Phased fire door and passive fire protection works inside live hospitals, care settings and public buildings, trusted by the NHS and councils.",
    title: "Healthcare & Public Sector",
    strap: "Trusted in the buildings that can never close",
    description:
      "Hospitals, care settings and public buildings cannot pause for fire safety works. Our teams are experienced in infection-control aware, phased delivery inside live healthcare environments, trusted by the NHS and local authorities to work safely around patients, staff and the public.",
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
    metaTitle: "Fire Safety for Schools & Student Housing",
    heading: "Fire safety for universities, schools and student housing",
    metaDescription:
      "Fire doors and fire stopping for schools, universities and student accommodation, planned around term dates and handover deadlines.",
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
    image: "/images/projects/printworks-tottenham/site-crane.webp",
    imageAlt: "Printworks student accommodation under construction in Tottenham",
  },
];

export function getSector(id: string): Sector | undefined {
  return sectors.find((sector) => sector.id === id);
}
