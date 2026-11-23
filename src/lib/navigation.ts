import { services } from "@/lib/services";
import { sectors } from "@/lib/sectors";

export type NavLink = {
  label: string;
  /** One short line shown under the label. Keep it under ~40 characters so it never wraps. */
  blurb: string;
  href: string;
  image?: string;
};

export type NavMenu = {
  label: string;
  href: string;
  /** "View all" link at the foot of the dropdown. */
  viewAll?: { label: string; href: string };
  items?: NavLink[];
};

const serviceBlurbs: Record<string, string> = {
  "passive-fire-protection": "FIRAS-accredited fire stopping",
  "fire-door-installation": "Certified door sets, supplied and fitted",
  "fire-door-maintenance": "Accredited repairs and upkeep",
  "fire-door-inspections": "QR-tagged, evidence-led reporting",
  "fire-stopping-inspections": "Compartmentation checks and reports",
  "validation-surveys": "Non-intrusive communal surveys",
  injectaclad: "Cavity barrier remediation",
  "active-fire-systems": "Detection and alarm support",
};

const sectorBlurbs: Record<string, string> = {
  "social-housing": "Councils and housing providers",
  "main-contractors": "A specialist package on programme",
  commercial: "Live venues, depots and offices",
  healthcare: "Hospitals and public buildings",
  education: "Schools and student housing",
};

/** Primary navigation, shared by the desktop and mobile menus so they never drift apart. */
export const primaryNav: NavMenu[] = [
  {
    label: "Services",
    href: "/services",
    viewAll: { label: "View all services", href: "/services" },
    items: services.map((service) => ({
      label: service.title,
      blurb: serviceBlurbs[service.slug] ?? service.cardSummary,
      href: `/services/${service.slug}`,
      image: service.cardImage,
    })),
  },
  {
    label: "Sectors",
    href: "/sectors",
    viewAll: { label: "View all sectors", href: "/sectors" },
    items: sectors.map((sector) => ({
      label: sector.title,
      blurb: sectorBlurbs[sector.id] ?? sector.strap,
      href: `/sectors/${sector.id}`,
      image: sector.image,
    })),
  },
  { label: "Projects", href: "/projects" },
  {
    label: "About",
    href: "/about-us",
    items: [
      { label: "Why us", blurb: "Who we are and how we work", href: "/about-us" },
      { label: "Accreditations", blurb: "What our certifications cover", href: "/accreditations" },
      { label: "Areas we cover", blurb: "Where our teams work", href: "/areas-we-cover" },
      { label: "Excel Electrics", blurb: "Our NICEIC approved electrical division", href: "/excel-electrics" },
    ],
  },
];
