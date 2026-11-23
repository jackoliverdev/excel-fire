/**
 * Accreditations. Logos checked against the artwork on 13/11/2026.
 * The case study sheets list: FIRAS (UKAS), BM TRADA Q-Mark, Bluesky FDIN, CHAS,
 * Constructionline Gold, SafeContractor and NICEIC (NICEIC is held for Excel Electrics).
 */
export type Accreditation = {
  name: string;
  short: string;
  logo?: string;
  meaning: string;
  covers: string;
};

export const accreditations: Accreditation[] = [
  {
    name: "FIRAS, Warrington Certification (UKAS accredited)",
    short: "FIRAS",
    logo: "/Excel/Accreditations/A0A1E93E-48AF-4DBB-9A9A-383C9CC7D0CA-scaled-1-1920x1106.jpg.webp",
    meaning:
      "FIRAS is the third-party certification scheme for installers of passive fire protection, run by Warrington Certification under UKAS accreditation. Our installations are audited, and each certified installation can be issued with its own FIRAS certificate.",
    covers: "Fire stopping and fire door installation",
  },
  {
    name: "BM TRADA Q-Mark Fire Door Maintenance (UKAS accredited)",
    short: "BM TRADA Q-Mark",
    logo: "/Excel/Accreditations/UKAS-Q-Mark-Fire-Door-Maintenance-Colour-clear-UKAS71.jpg.webp",
    meaning:
      "The Q-Mark scheme certifies that our fire door maintenance and repair works are carried out by trained operatives, using compatible components, with every job documented and auditable.",
    covers: "Fire door maintenance and remediation",
  },
  {
    name: "Bluesky Certified Fire Door Inspector (FDIN)",
    short: "Bluesky FDIN",
    logo: "/Excel/Accreditations/Excel_FireFDInsp_UKASlogo.png.webp",
    meaning:
      "Our fire door inspection capability is certified by Bluesky Certification under a UKAS-accredited scheme. Inspectors are audited against a published standard, not self-declared.",
    covers: "Fire door inspections and reporting",
  },
  {
    name: "CHAS",
    short: "CHAS",
    logo: "/Excel/Accreditations/chas-1024x537-1.png.webp",
    meaning:
      "The Contractors Health and Safety Assessment Scheme confirms our health and safety policies, processes and track record meet the standard required by public and private sector clients.",
    covers: "Health and safety (SSIP)",
  },
  {
    name: "Constructionline Gold",
    short: "Constructionline Gold",
    logo: "/Excel/Accreditations/constructionline-gold.jpg.webp",
    meaning:
      "Gold membership means we have passed enhanced prequalification covering governance, financials, environmental practice, modern slavery and equality, which simplifies supplier onboarding for procurement teams.",
    covers: "Prequalification and procurement",
  },
  {
    name: "SMAS Worksafe",
    short: "SMAS Worksafe",
    logo: "/Excel/Accreditations/smas-300x105-1.jpg.webp",
    meaning:
      "SMAS Worksafe certification shows our health and safety arrangements meet the SSIP core criteria recognised across the construction industry.",
    covers: "Health and safety (SSIP)",
  },
  {
    name: "Avetta",
    short: "Avetta",
    logo: "/Excel/Accreditations/image001.jpg@01D93BB8.A719FDE0.jpg.webp",
    meaning:
      "Avetta supply chain prequalification, used by many facilities management and corporate clients to vet contractors before they work on site.",
    covers: "Supply chain prequalification",
  },
  {
    name: "Injectaclad Approved Installer",
    short: "Injectaclad",
    logo: "/Excel/Accreditations/Injectaclad.webp",
    meaning:
      "We are approved by the system manufacturer to install Injectaclad cavity barrier remediation, with training, technique and documentation audited by the people who make the product.",
    covers: "Cavity barrier remediation",
  },
  {
    name: "SafeContractor",
    short: "SafeContractor",
    meaning: "Health and safety accreditation recognised by FM providers and commercial clients.",
    covers: "Health and safety",
  },
  {
    name: "NICEIC Approved Contractor (Excel Electrics)",
    short: "NICEIC",
    meaning:
      "Our electrical division, Excel Electrics, is an NICEIC Approved Contractor, assessed on the safety and quality of its electrical work.",
    covers: "Electrical installation and fire alarm interlinks",
  },
];
