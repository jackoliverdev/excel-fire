export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  sector: string;
  services: string[];
  summary: string;
  outcome: string;
  quote?: { text: string; author: string; role: string };
  image: string;
  imageAlt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "holland-park-gate",
    title: "Holland Park Gate",
    client: "IPB Limited",
    sector: "High-end residential",
    services: ["Passive Fire Protection", "Fire Stopping"],
    summary:
      "Precision fire stopping and mastic works on one of London's premium residential developments, delivered to a standard scrutinised by the client, designers and directors.",
    outcome:
      "Workmanship quality highlighted by the client's designer and directors, with our team retained as a valued part of the supply chain.",
    quote: {
      text: "The quality of the mastic joints has been highlighted today by our client, designer and directors who are impressed by how neat and tidy it all looks. Your team has proven to be a great asset.",
      author: "R. Lacatis",
      role: "Company Manager, IPB Limited",
    },
    image: "/Excel/Services/site-firestopping-1.jpg",
    imageAlt: "Precision fire stopping works at a premium residential development",
  },
  {
    id: "the-trees",
    title: "The Trees",
    client: "Durkan",
    sector: "Residential development",
    services: ["Fire Stopping", "Compartmentation"],
    summary:
      "A full fire stopping package on a live residential project, with compartmentation works delivered to a standard that drew unprompted praise from the client's site leadership.",
    outcome:
      "Fire stopping standard formally commended by the client, with pride in workmanship called out across the project team.",
    quote: {
      text: "We must give praise to the standard of fire stopping currently undertaken at our project 'The Trees'. It's good to see people taking pride in the works they are carrying out.",
      author: "N. S. Durkan",
      role: "Durkan",
    },
    image: "/Excel/Services/site-firestopping-3.jpg",
    imageAlt: "Compartmentation and fire stopping works at a residential project",
  },
  {
    id: "united-living-programmes",
    title: "Housing Remediation Programmes",
    client: "United Living",
    sector: "Social housing",
    services: ["Fire Door Installation", "Fire Door Inspections", "Passive Fire Protection"],
    summary:
      "Ongoing fire door and passive fire protection delivery across occupied social housing schemes — reactive when the programme demanded it, with clear communication to residents and site teams throughout.",
    outcome:
      "Repeat engagements across multiple schemes, with operations managers citing immediate responsiveness on challenging projects.",
    quote: {
      text: "Excel have been extremely helpful on what has been a challenging project. They have reacted immediately when asked and consistently gone above and beyond to help us deliver the scheme.",
      author: "Lewis Melisi",
      role: "Operations Manager, United Living",
    },
    image: "/Excel/Services/site-installation-1.jpg",
    imageAlt: "Fire door installation across occupied social housing",
  },
];

export const clientLogos = [
  { src: "/Excel/Clients/AMBER-LOGO.png.webp", alt: "Amber Construction" },
  { src: "/Excel/Clients/Axis-Logo-CMYK-copy-1-640x344.jpg.webp", alt: "Axis Europe" },
  { src: "/Excel/Clients/Cablesheer_Stacked_Group_Logo.jpg.webp", alt: "Cablesheer Group" },
  { src: "/Excel/Clients/CBRE-350-c.jpg.webp", alt: "CBRE" },
  { src: "/Excel/Clients/durkan-325.png.webp", alt: "Durkan" },
  { src: "/Excel/Clients/GerdaLogo.webp", alt: "Gerda Security" },
  { src: "/Excel/Clients/greyline.png.webp", alt: "Greyline" },
  { src: "/Excel/Clients/Harlow_Council_logo.png.webp", alt: "Harlow Council" },
  { src: "/Excel/Clients/hts_groupltd_logo.jpg.webp", alt: "HTS Group" },
  { src: "/Excel/Clients/McConnell.jpg.webp", alt: "McConnell" },
  { src: "/Excel/Clients/mitie_logo350.webp", alt: "Mitie" },
  { src: "/Excel/Clients/nhs.png.webp", alt: "NHS" },
  { src: "/Excel/Clients/TB.png.webp", alt: "T and B Contractors" },
  { src: "/Excel/Clients/united_living-a-1.jpg.webp", alt: "United Living" },
  { src: "/Excel/Clients/ventol.jpg.webp", alt: "Ventol" },
  { src: "/Excel/Clients/1656667478594.jpg.webp", alt: "Client partner logo" },
  { src: "/Excel/Clients/download.png.webp", alt: "Client partner logo" },
  { src: "/Excel/Clients/logo.jpeg.webp", alt: "Client partner logo" },
];
