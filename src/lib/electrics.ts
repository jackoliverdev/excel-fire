import { siteConfig } from "@/lib/site";

/** Excel Electrics: the electrical division of Excel Fire Ltd. Service list mirrors excelelectrics.com. */
export const electricsServices = [
  {
    title: "Electrical work",
    summary: "Fault finding, sockets, lighting, consumer units, EICRs and rewires, for homes and small businesses.",
    href: `${siteConfig.electrics.url}/services/electrical-work`,
  },
  {
    title: "Fire alarms & detection",
    summary: "Smoke alarms, heat detectors and linked fire alarm systems, installed, tested and certified.",
    href: `${siteConfig.electrics.url}/services/fire-safety`,
  },
  {
    title: "Access & security",
    summary: "Intercoms, keypads, fobs and access control for homes, flats and commercial buildings.",
    href: `${siteConfig.electrics.url}/services/access-security`,
  },
  {
    title: "Gates, garage doors & bollards",
    summary: "Electric gates, garage doors and rising bollards, new installs or repairs.",
    href: `${siteConfig.electrics.url}/services/gates-garage-bollards`,
  },
  {
    title: "EV charging",
    summary: "Home and workplace EV charger installs, repairs, upgrades and load advice.",
    href: `${siteConfig.electrics.url}/services/ev-charging`,
  },
];

export const electricsFaqs = [
  {
    question: "Is Excel Electrics part of Excel Fire?",
    answer:
      "Yes. Excel Electrics is the electrical division of Excel Fire Ltd. Same company, same standards, with its own NICEIC approved electricians and its own phone line.",
  },
  {
    question: "Do you do small domestic jobs?",
    answer:
      "Yes. A new socket, a light that keeps tripping, a smoke alarm that will not stop chirping: no job is too small. Call or message and we will tell you plainly what it needs and what it will cost.",
  },
  {
    question: "Are your electricians qualified?",
    answer:
      "Excel Electrics is an NICEIC Approved Contractor. Work is tested and certified, and you receive the right paperwork for your records, your landlord or your insurer.",
  },
  {
    question: "Can one team do the fire doors and the electrics on our project?",
    answer:
      "Yes, and that is the point of having both. At Emirates Stadium, Excel Fire installed the fire doorsets and Excel Electrics fitted and interlinked every maglock and hold-open device with the fire alarm, on one programme.",
  },
];
