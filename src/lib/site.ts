export const siteConfig = {
  name: "Excel Fire",
  legalName: "Excel Fire Ltd",
  url: "https://excelfireltd.com",
  description:
    "Excel Fire Ltd are passive fire protection specialists and fire door experts delivering compliant, accredited fire safety services across London, the South East and England.",
  tagline: "Our forward thinking gives you reassurance",
  phone: "0203 302 9558",
  phoneHref: "tel:02033029558",
  phoneE164: "+442033029558",
  email: "info@excelfireltd.com",
  companyNumber: "11776179",
  vatNumber: "313466910",
  foundingDate: "2019-01-18",
  foundingYear: "2019",
  offices: {
    london: "Kemp House, 124 City Road, London, EC1V 2NX",
    birmingham: "Somerset House, 37 Temple Street, Birmingham, B2 5DP",
    registered: "Swift House, Ground Floor, 18 Hoffmanns Way, Chelmsford, CM1 1GU",
  },
  areasServed: ["London", "Essex", "Hertfordshire", "Kent", "Surrey", "South East England", "West Midlands", "England"],
  social: {
    facebook: "https://www.facebook.com/excelfireuk/",
    linkedin: "https://uk.linkedin.com/company/excelfire",
  },
  ogImage: "/images/brand/og-default.jpg",
  electrics: {
    name: "Excel Electrics",
    url: "https://excelelectrics.com",
    phone: "07730 591822",
    phoneHref: "tel:07730591822",
    email: "info@excelelectrics.com",
  },
  developer: {
    name: "Jack Oliver Dev",
    url: "https://www.jackodev.co.uk",
  },
} as const;

export const companiesHouseUrl = `https://find-and-update.company-information.service.gov.uk/company/${siteConfig.companyNumber}`;
