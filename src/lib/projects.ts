/**
 * Case studies. Every fact here comes from the case study sheets Excel Fire
 * supplied on 13/11/2026 (docs/excelfire/wetransfer). Do not add figures that
 * are not in those sheets.
 */

export type SectorId = "social-housing" | "main-contractors" | "commercial" | "healthcare" | "education";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BeforeAfterPair = {
  caption: string;
  before: ProjectImage;
  after: ProjectImage;
};

export type ProjectStat = { value: string; label: string };
export type ProjectStep = { title: string; detail: string };
export type ProjectFact = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  /** Short name for cards, breadcrumbs and menus. */
  name: string;
  category: string;
  location: string;
  period: string;
  /** ISO date used for Article schema (sheet issue date, not completion). */
  publishedIso: string;
  client: string;
  partner?: { label: string; value: string };
  sectors: SectorId[];
  services: string[];
  summary: string;
  overview: string[];
  stats: ProjectStat[];
  steps: ProjectStep[];
  scope?: ProjectFact[];
  pairs: BeforeAfterPair[];
  gallery: (ProjectImage & { caption: string })[];
  cover: ProjectImage;
  featured: boolean;
  jointWithElectrics?: boolean;
  metaTitle: string;
  metaDescription: string;
};

const img = (src: string, alt: string, width: number, height: number): ProjectImage => ({
  src,
  alt,
  width,
  height,
});

const p = (slug: string, name: string) => `/images/projects/${slug}/${name}.webp`;

export const projects: Project[] = [
  {
    slug: "royal-albert-hall",
    title: "Continuous fire stopping at the Royal Albert Hall",
    name: "Royal Albert Hall",
    category: "Passive fire protection",
    location: "Kensington, London",
    period: "2025 to present",
    publishedIso: "2026-11-13",
    client: "Royal Albert Hall",
    partner: { label: "Partner", value: "FFT Fire Consultants" },
    sectors: ["commercial"],
    services: ["passive-fire-protection", "fire-stopping-inspections"],
    summary:
      "A permanent passive fire protection team inside a Grade I listed, 5,000-seat venue, sealing nearly 3,000 penetrations as shows come and go.",
    overview: [
      "Excel Fire holds a continuous passive fire protection programme at the Royal Albert Hall, delivering fire stopping and compartmentation works throughout the Grade I listed venue in partnership with FFT Fire Consultants. A dedicated Excel Fire team is permanently on site.",
      "The Hall never stands still. Every incoming show brings its own electrical, M&E and stage equipment, and routing it through the building inevitably breaches compartment lines. Our team fire stops each breach, the show moves out, the next moves in, and the cycle begins again.",
      "Every seal is recorded on our installation log with its size, the M&E breach, the substrate and the compliant system installed. Nearly 3,000 penetrations have been sealed since our arrival.",
    ],
    stats: [
      { value: "~3,000", label: "Penetrations sealed to date" },
      { value: "On site", label: "Permanent Excel Fire team" },
      { value: "100%", label: "Seals logged and labelled" },
      { value: "Grade I", label: "Listed venue, built 1871" },
    ],
    steps: [
      {
        title: "Always on site",
        detail:
          "A dedicated Excel Fire team is based at the Hall permanently, so breaches are dealt with as they appear rather than queued for a future visit.",
      },
      {
        title: "Working around the show",
        detail:
          "Works are sequenced around get-ins, performances and get-outs, so compartmentation is reinstated without disrupting the venue's programme.",
      },
      {
        title: "Heritage-aware sealing",
        detail:
          "Each breach is sealed with a compliant, tested system matched to its substrate and services, in a Grade I listed building where every fabric detail matters.",
      },
      {
        title: "Logged every time",
        detail:
          "Every seal is recorded on our installation log (size, M&E breach, substrate and system used), building a live compartmentation record for the Hall.",
      },
    ],
    scope: [
      { label: "Venue", value: "The Royal Albert Hall, Kensington. Grade I listed and in continuous operation throughout." },
      {
        label: "Fire stopping",
        value:
          "Penetration sealing and compartmentation works following each show's electrical, M&E and stage installations. Nearly 3,000 penetrations sealed to date.",
      },
      { label: "Programme", value: "Continuous since 2025, with works sequenced around the live performance schedule." },
      { label: "Partnership", value: "Delivered with FFT Fire Consultants: joint consultancy and installation on one programme." },
      { label: "Records", value: "A live, auditable compartmentation record for the venue." },
    ],
    pairs: [],
    gallery: [],
    cover: img(p("royal-albert-hall", "venue"), "The Royal Albert Hall at dusk, where Excel Fire runs a continuous fire stopping programme", 1296, 848),
    featured: true,
    metaTitle: "Royal Albert Hall Fire Stopping Case Study",
    metaDescription:
      "How Excel Fire keeps compartmentation intact at the Grade I listed Royal Albert Hall: a permanent on-site team and nearly 3,000 logged penetration seals.",
  },
  {
    slug: "emirates-stadium",
    title: "Certified metal fire doorsets at Emirates Stadium",
    name: "Emirates Stadium",
    category: "Fire doors & active fire",
    location: "Holloway, London N5",
    period: "2025 to 2026",
    publishedIso: "2026-11-13",
    client: "CBRE & Emirates Stadium",
    partner: { label: "Co-division", value: "Excel Electrics" },
    sectors: ["commercial"],
    services: ["fire-door-installation", "active-fire-systems"],
    summary:
      "A multi-phase replacement of fire doorsets at the home of Arsenal FC, with every maglock, hold-open device and strike interlinked to the fire alarm.",
    overview: [
      "Excel Fire was appointed to the fire door replacement programme at the Emirates Stadium, the home of Arsenal FC, delivered over multiple phases for CBRE and the stadium. We began by surveying every doorset in scope, capturing measurements and specification, and built the replacement scope in line with the stadium's fire strategy.",
      "The existing doorsets were replaced with Metador certified metal fire doorsets, installed by our in-house fire door teams. Working alongside them, Excel Electrics installed and commissioned the electronic devices (maglocks, hold-open devices and strike plates) and interlinked every one with the stadium's fire alarm, so each door releases and closes exactly as the fire strategy requires.",
    ],
    stats: [
      { value: "Multi-phase", label: "Replacement programme" },
      { value: "Metador", label: "Certified metal doorsets" },
      { value: "100%", label: "Devices alarm-interlinked" },
      { value: "60,000+", label: "Seats, venue kept in use" },
    ],
    steps: [
      {
        title: "Survey and scope",
        detail:
          "Every doorset in scope was surveyed for measurements and specification, and the replacement scope built in line with the stadium's fire strategy before anything was ordered.",
      },
      {
        title: "Phased delivery",
        detail:
          "The programme was split into phases sequenced around the match and event calendar, so works never compromised a live operational day.",
      },
      {
        title: "Metador installation",
        detail:
          "Existing doorsets were replaced with Metador certified metal fire doorsets, installed by our in-house teams with new closers, vision panels and ironmongery to specification.",
      },
      {
        title: "Alarm interlink",
        detail:
          "Excel Electrics installed maglocks, hold-open devices and strike plates on the new doorsets, interlinked every device with the fire alarm, then commissioned the lot.",
      },
    ],
    pairs: [
      {
        caption: "Concourse exit E2: glazed double doorset",
        before: img(p("emirates-stadium", "concourse-e2-before"), "Concourse exit E2 double doorset before replacement", 629, 571),
        after: img(p("emirates-stadium", "concourse-e2-after"), "New Metador glazed double fire doorset at concourse exit E2", 629, 562),
      },
      {
        caption: "Back-of-house store: keypad access and overhead closers",
        before: img(p("emirates-stadium", "back-of-house-before"), "Back-of-house store doorset before replacement", 629, 571),
        after: img(p("emirates-stadium", "back-of-house-after"), "New Metador metal fire doorset with keypad access at a back-of-house store", 629, 562),
      },
      {
        caption: "External plant access: solid metal doorset",
        before: img(p("emirates-stadium", "plant-access-before"), "External plant access doors before replacement", 629, 571),
        after: img(p("emirates-stadium", "plant-access-after"), "New solid metal doorset to external plant access", 629, 562),
      },
    ],
    gallery: [],
    cover: img(p("emirates-stadium", "stadium"), "Emirates Stadium, home of Arsenal FC, where Excel Fire replaced fire doorsets for CBRE", 1296, 848),
    featured: true,
    jointWithElectrics: true,
    metaTitle: "Emirates Stadium Fire Door Case Study",
    metaDescription:
      "Metador certified metal fire doorsets installed at Emirates Stadium for CBRE, with every maglock and hold-open device interlinked to the fire alarm by Excel Electrics.",
  },
  {
    slug: "eurostar-temple-mills",
    title: "Certified fire door works for a 24/7 Eurostar depot",
    name: "Eurostar Temple Mills",
    category: "Fire door inspection & works",
    location: "Leyton, London E10",
    period: "2025",
    publishedIso: "2026-11-13",
    client: "Eurostar",
    partner: { label: "Doorset supplier", value: "West Port Windows & Doors" },
    sectors: ["commercial"],
    services: ["fire-door-inspections", "fire-door-maintenance", "fire-door-installation"],
    summary:
      "UKAS certified inspections, maintenance and FD30S / FD60S installations to every doorset at a train maintenance depot that never closes. Appointed directly by Eurostar.",
    overview: [
      "Excel Fire secured the fire door works directly with Eurostar, delivering essential fire door improvements to its 24/7 train maintenance facility at Temple Mills, Leyton. With rolling stock serviced around the clock, every doorset had to be surveyed, maintained or replaced without interrupting the depot's operation.",
      "We began with UKAS certified fire door inspections across the facility to establish exactly what each doorset needed: maintenance where it could be brought back to compliance, replacement where it could not. We then delivered both. Certified maintenance to the existing doorsets, and new certified FD30S and FD60S doorsets supplied by West Port Windows & Doors and installed by our in-house teams.",
    ],
    stats: [
      { value: "24/7", label: "Depot kept running" },
      { value: "FD30S/60S", label: "Certified West Port doorsets" },
      { value: "100%", label: "UKAS certified works" },
      { value: "Direct", label: "Appointed by Eurostar" },
    ],
    steps: [
      {
        title: "UKAS inspections",
        detail:
          "Every doorset in the facility was inspected by our UKAS certified fire door inspectors, recording its condition and compliance to establish the exact works required.",
      },
      {
        title: "Maintain or replace",
        detail:
          "Each doorset was scoped as either certified maintenance or full replacement, with FD30S or FD60S specified to suit its location within the depot's fire strategy.",
      },
      {
        title: "Working live",
        detail:
          "Works were sequenced around the depot's round-the-clock maintenance operation, so rolling stock, staff and escape routes were never compromised.",
      },
      {
        title: "Certified delivery",
        detail:
          "Certified maintenance was carried out to existing doorsets and new West Port FD30S and FD60S doorsets installed, all under our UKAS third-party certification.",
      },
    ],
    pairs: [
      {
        caption: "Glazed corridor doorset: clear fire-rated overpanel, vision panels, closer and kick plates",
        before: img(p("eurostar-temple-mills", "glazed-doorset-before"), "Corridor doorset with obscured overpanel before replacement at Eurostar Temple Mills", 715, 848),
        after: img(p("eurostar-temple-mills", "glazed-doorset-after"), "New certified doorset with clear fire-rated glazed overpanel at Eurostar Temple Mills", 724, 848),
      },
      {
        caption: "P163 plant room doorset with solid overpanel",
        before: img(p("eurostar-temple-mills", "plant-room-before"), "Plant room doorset before replacement", 457, 562),
        after: img(p("eurostar-temple-mills", "plant-room-after"), "New certified plant room doorset with solid overpanel", 457, 571),
      },
      {
        caption: "Road 9 canteen: vision panels and overpanel",
        before: img(p("eurostar-temple-mills", "canteen-before"), "Road 9 canteen doorset before replacement", 457, 572),
        after: img(p("eurostar-temple-mills", "canteen-after"), "New certified canteen doorset with vision panels and overpanel", 457, 571),
      },
      {
        caption: "P2 workshop entrance: twin vision panels",
        before: img(p("eurostar-temple-mills", "workshop-before"), "Workshop entrance doorset before replacement", 467, 562),
        after: img(p("eurostar-temple-mills", "workshop-after"), "New certified workshop doorset with twin vision panels", 467, 571),
      },
      {
        caption: "The White Rose: signage reinstated",
        before: img(p("eurostar-temple-mills", "white-rose-before"), "The White Rose doorset before replacement", 457, 562),
        after: img(p("eurostar-temple-mills", "white-rose-after"), "New certified doorset at The White Rose with signage reinstated", 457, 571),
      },
    ],
    gallery: [],
    cover: img(p("eurostar-temple-mills", "glazed-doorset-after"), "New certified fire doorset installed by Excel Fire at Eurostar Temple Mills depot", 724, 848),
    featured: true,
    metaTitle: "Eurostar Temple Mills Fire Door Case Study",
    metaDescription:
      "UKAS certified fire door inspections, maintenance and FD30S / FD60S installations at Eurostar's 24/7 Temple Mills depot in Leyton, appointed directly by Eurostar.",
  },
  {
    slug: "printworks-tottenham",
    title: "2,300 fire-stopped locations on a new-build student block",
    name: "Printworks, Tottenham",
    category: "Passive fire protection",
    location: "Tottenham, London N17",
    period: "2026",
    publishedIso: "2026-11-13",
    client: "McAleer & Rushe",
    partner: { label: "Our role", value: "PFP installer & consultant" },
    sectors: ["main-contractors", "education"],
    services: ["passive-fire-protection"],
    summary:
      "Fire stopping of every M&E penetration and compartmentation line on a new-build student scheme, starting with a full-scale mock-up wall that set the standard for every trade.",
    overview: [
      "Excel Fire was appointed by McAleer & Rushe as passive fire protection installer and consultant for Printworks, a new-build student accommodation development in Tottenham, N17. Our scope covers the fire stopping of every M&E penetration and compartmentation line across the block, from first fix through to handover.",
      "Before works began, our team built a full-scale mock-up wall on site to show the M&E installers exactly what a compliant installation looks like: service spacing, linear apertures, seal depths and the details that make a penetration fire-stoppable. Since then the team has fire stopped more than 2,300 locations, penetrations and compartment breaches, readying the block to welcome its first students in 2027.",
    ],
    stats: [
      { value: "2,300+", label: "Locations fire stopped" },
      { value: "1:1", label: "Mock-up wall built before start" },
      { value: "QR", label: "Install label on every seal" },
      { value: "2027", label: "Block ready for first students" },
    ],
    steps: [
      {
        title: "Consult first",
        detail:
          "Appointed as both installer and consultant, we reviewed the M&E design and compartmentation lines with McAleer & Rushe before works began, so the fire stopping strategy was agreed up front.",
      },
      {
        title: "Mock-up wall",
        detail:
          "We built a full-scale mock-up wall on site showing the M&E trades the compliant service spacing, linear apertures and seal depths, cutting rework before it happened.",
      },
      {
        title: "Fire stopping",
        detail:
          "Our in-house teams have fire stopped 2,300+ locations, from single pipe penetrations to multi-service risers and ductwork, reinstating every compartment line as the build progressed.",
      },
      {
        title: "Labelled and logged",
        detail:
          "Every seal carries an Excel Fire install label with its install number, date, initials and QR code, tying each location back to our installation log for the building safety file.",
      },
    ],
    pairs: [
      {
        caption: "Ductwork penetration: boarded and sealed around the duct",
        before: img(p("printworks-tottenham", "duct-before"), "Ductwork penetration through a compartment line before fire stopping at Printworks", 1600, 1200),
        after: img(p("printworks-tottenham", "duct-after"), "Ductwork penetration boarded, sealed and labelled by Excel Fire", 1600, 1200),
      },
      {
        caption: "Multi-service riser with heating and chilled water",
        before: img(p("printworks-tottenham", "riser-before"), "Multi-service riser opening before fire stopping", 1600, 1200),
        after: img(p("printworks-tottenham", "riser-after"), "Multi-service riser sealed with a fire batt system and labelled", 1600, 1200),
      },
      {
        caption: "Insulated pipework through a compartment wall",
        before: img(p("printworks-tottenham", "pipework-before"), "Insulated pipework through a compartment wall before sealing", 1600, 1200),
        after: img(p("printworks-tottenham", "pipework-after"), "Insulated pipework penetration fire stopped and labelled", 1600, 1200),
      },
      {
        caption: "Vertical containment through a partition",
        before: img(p("printworks-tottenham", "containment-before"), "Vertical steel containment through a partition before sealing", 1050, 1400),
        after: img(p("printworks-tottenham", "containment-after"), "Vertical containment fire stopped with a QR install label", 1050, 1400),
      },
    ],
    gallery: [
      { ...img(p("printworks-tottenham", "mock-up-wall-full"), "Full-scale fire stopping mock-up wall built by Excel Fire at Printworks", 1152, 1536), caption: "The 1:1 mock-up wall" },
      { ...img(p("printworks-tottenham", "mock-up-wall-services"), "Mock-up wall showing compliant M&E service spacing", 1152, 1536), caption: "Service spacing shown to the M&E trades" },
      { ...img(p("printworks-tottenham", "mock-up-wall-detail"), "Close-up of sealed pipework on the mock-up wall", 1152, 1536), caption: "Seal detail on the mock-up" },
      { ...img(p("printworks-tottenham", "site-crane"), "Printworks new-build student block under construction in Tottenham", 1152, 1536), caption: "The live site, N17" },
    ],
    cover: img(p("printworks-tottenham", "site-view"), "View across the Printworks new-build site in Tottenham, London N17", 2048, 1536),
    featured: true,
    metaTitle: "Printworks Tottenham Fire Stopping Case Study",
    metaDescription:
      "2,300+ M&E penetrations fire stopped, labelled and logged on a new-build student block in Tottenham for McAleer & Rushe, starting with a 1:1 mock-up wall.",
  },
  {
    slug: "david-lee-point-brasset-point-newham",
    title: "Emergency fire door and fire stopping works across two 22-storey towers",
    name: "David Lee Point & Brasset Point",
    category: "Fire doors & fire stopping",
    location: "Newham, London",
    period: "2026",
    publishedIso: "2026-11-13",
    client: "Newham Council",
    partner: { label: "Partner", value: "Greyline" },
    sectors: ["social-housing"],
    services: ["fire-door-maintenance", "passive-fire-protection", "fire-door-inspections"],
    summary:
      "Same-day survey and remediation of 396 communal doorsets and all means-of-escape fire stopping across 44 occupied floors, on an emergency programme.",
    overview: [
      "Excel Fire was appointed by Newham Council, in partnership with Greyline, to carry out emergency fire door and fire stopping works to the communal areas of David Lee Point and Brasset Point: two high-rise residential blocks totalling 44 floors. The works covered 396 communal doorsets and all fire stopping within the means-of-escape corridors, risers and electrical intake cupboards (EICs).",
      "Because the works were classified as an emergency, our teams surveyed and remediated on the same day, for both fire doors and fire stopping, so each floor was left compliant as it was visited. Every survey, repair and installation was captured on our installation logs, giving the client full transparency and proof of completion across both blocks.",
    ],
    stats: [
      { value: "44", label: "Floors across 2 blocks" },
      { value: "396", label: "Communal doorsets maintained" },
      { value: "Same day", label: "Survey and remediation" },
      { value: "100%", label: "Captured on installation logs" },
    ],
    steps: [
      {
        title: "Emergency mobilisation",
        detail:
          "Appointed on an emergency basis, we mobilised combined fire door and fire stopping teams to both blocks, planned floor by floor so occupied escape routes were made good without delay.",
      },
      {
        title: "Same-day survey and remedy",
        detail:
          "Each area was surveyed and the required works carried out on the same visit, for both doorsets and fire stopping, so no floor was left waiting between inspection and repair.",
      },
      {
        title: "Doors and fire stopping",
        detail:
          "396 communal doorsets were maintained across 44 floors, and the means-of-escape corridors, risers and EICs were fire stopped to reinstate compartmentation.",
      },
      {
        title: "Full transparency",
        detail:
          "Every survey, maintenance task and installation was captured on our installation logs, giving Newham Council and Greyline a complete record and proof of completion.",
      },
    ],
    scope: [
      { label: "Blocks", value: "David Lee Point and Brasset Point, Newham. 2 occupied high-rise residential blocks, 44 floors in total." },
      { label: "Fire doors", value: "396 communal doorsets surveyed and maintained: hinges, closers, seals, gaps and ironmongery addressed on the day." },
      { label: "Fire stopping", value: "All communal fire stopping within the means-of-escape corridors, plus every riser and EIC, sealed to reinstate compartmentation." },
      { label: "Programme", value: "Emergency works, completed floor by floor with residents in occupation throughout." },
      { label: "Records", value: "All surveys, maintenance and installations captured on Excel Fire installation logs." },
    ],
    pairs: [],
    gallery: [
      { ...img(p("david-lee-point-brasset-point-newham", "both-blocks"), "David Lee Point and Brasset Point tower blocks in Newham", 715, 848), caption: "Both blocks" },
      { ...img(p("david-lee-point-brasset-point-newham", "tower"), "One of the two 22-storey residential towers", 724, 848), caption: "22 storeys, fully occupied" },
    ],
    cover: img(p("david-lee-point-brasset-point-newham", "tower-22-floors"), "22-storey residential tower in Newham where Excel Fire carried out emergency fire safety works", 715, 1067),
    featured: false,
    metaTitle: "Newham Towers Emergency Fire Safety Case Study",
    metaDescription:
      "Emergency same-day survey and remediation of 396 communal fire doors and all means-of-escape fire stopping across two 22-storey towers for Newham Council.",
  },
  {
    slug: "chp-chelmsford",
    title: "1,000+ fire-rated flat entrance doorsets across Chelmsford",
    name: "CHP Chelmsford",
    category: "Fire door installation",
    location: "Chelmsford, Essex",
    period: "2025",
    publishedIso: "2026-11-13",
    client: "Chelmsford Housing Procurement (CHP)",
    partner: { label: "Partner", value: "Gerda Security Products" },
    sectors: ["social-housing"],
    services: ["fire-door-installation"],
    summary:
      "A resident-led programme installing more than 1,000 PAS\u00a024 / Secured by Design FD30S flat entrance doorsets, each with its own UKAS-accredited FIRAS certificate.",
    overview: [
      "In 2025, Excel Fire installed more than 1,000 FD30S flat entrance doorsets (FEDs) across CHP's housing stock in Chelmsford and the surrounding area. The PAS\u00a024 and Secured by Design certified doorsets were manufactured by Gerda Security Products, with Excel Fire appointed as installation partner and Resident Liaison Officer (RLO).",
      "Working closely with CHP's housing team, we scheduled every appointment directly with residents, ran the daily call-off of doorsets from a central storage point in Chelmsford and maintained a steady output of 10 to 20 installations per day. Each doorset was catalogued on our installation log and issued with its own UKAS-accredited FIRAS certificate.",
    ],
    stats: [
      { value: "1,000+", label: "Doorsets installed" },
      { value: "10–20", label: "Installations per day" },
      { value: "100%", label: "UKAS FIRAS certified" },
      { value: "RLO", label: "Resident liaison by Excel Fire" },
    ],
    steps: [
      {
        title: "Resident liaison",
        detail:
          "Acting as RLO, we contacted every household and booked appointments directly with residents, working with CHP's housing team to keep access rates high and disruption to a minimum.",
      },
      {
        title: "Logistics",
        detail:
          "Gerda doorsets were held at a central storage point in Chelmsford and called off to site daily, so every team arrived with the right doorsets for that day's appointments.",
      },
      {
        title: "Installation",
        detail:
          "Our in-house teams fitted 10 to 20 doorsets a day, each installed to the manufacturer's instructions and left clean, fully functioning and ready for the resident the same day.",
      },
      {
        title: "Certification",
        detail:
          "Every FD30S doorset was recorded on our installation log and issued with its own UKAS-accredited FIRAS certificate: a complete, auditable record for the building safety file.",
      },
    ],
    pairs: [
      {
        caption: "Flat 139: timber door and frame replaced with a PAS\u00a024 FD30S doorset, overhead closer and threshold",
        before: img(p("chp-chelmsford", "flat-139-before"), "Flat 139 existing timber door before replacement", 715, 848),
        after: img(p("chp-chelmsford", "flat-139-after"), "Flat 139 new black PAS\u00a024 FD30S flat entrance doorset", 724, 848),
      },
      {
        caption: "Flat 118: glazed vision panel",
        before: img(p("chp-chelmsford", "flat-118-before"), "Flat 118 door before replacement", 629, 610),
        after: img(p("chp-chelmsford", "flat-118-after"), "Flat 118 new FD30S doorset with glazed vision panel", 629, 610),
      },
      {
        caption: "Flat 89: doorset with side screen",
        before: img(p("chp-chelmsford", "flat-89-before"), "Flat 89 door and side screen before replacement", 629, 610),
        after: img(p("chp-chelmsford", "flat-89-after"), "Flat 89 new FD30S doorset with side screen", 629, 610),
      },
      {
        caption: "Flat 9: external lobby entrance",
        before: img(p("chp-chelmsford", "flat-9-before"), "Flat 9 external lobby entrance before replacement", 629, 610),
        after: img(p("chp-chelmsford", "flat-9-after"), "Flat 9 new white FD30S doorset at an external lobby", 629, 610),
      },
    ],
    gallery: [],
    cover: img(p("chp-chelmsford", "flat-139-after"), "New PAS\u00a024 FD30S flat entrance doorset installed by Excel Fire for CHP in Chelmsford", 724, 848),
    featured: false,
    metaTitle: "CHP Chelmsford Flat Entrance Door Case Study",
    metaDescription:
      "1,000+ PAS\u00a024 / Secured by Design FD30S flat entrance doorsets installed for CHP in Chelmsford, with resident liaison and a FIRAS certificate for every door.",
  },
  {
    slug: "lb-ealing",
    title: "500+ certified flat entrance doorsets across the London Borough of Ealing",
    name: "London Borough of Ealing",
    category: "Fire door installation",
    location: "Ealing, London",
    period: "2025 to present",
    publishedIso: "2026-11-13",
    client: "London Borough of Ealing",
    partner: { label: "Partner", value: "Gerda Security Products" },
    sectors: ["social-housing"],
    services: ["fire-door-installation"],
    summary:
      "An ongoing programme of PAS\u00a024 FD30S doorset installations for LB Ealing, with Excel Fire as Resident Liaison Officer and a single-visit install for every home.",
    overview: [
      "Excel Fire was appointed to install new certified PAS\u00a024 FD30S flat entrance doorsets across the London Borough of Ealing's housing stock, on an ongoing programme that began in 2025 and continues today. The doorsets are manufactured and supplied by Gerda Security Products, with Excel Fire delivering the installations and managing every resident interaction along the way.",
      "Acting as Resident Liaison Officer, our team contacts each household directly, books a convenient appointment and keeps residents informed from first contact to handover. Each visit leaves the resident with a new, secure, fire-rated front door fitted in a single appointment. More than 500 doorsets have been installed to date, and the programme continues to roll out across the borough.",
    ],
    stats: [
      { value: "500+", label: "Doorsets installed to date" },
      { value: "PAS\u00a024", label: "Certified FD30S doorsets" },
      { value: "1 visit", label: "Old door out, new door in" },
      { value: "RLO", label: "Resident liaison by Excel Fire" },
    ],
    steps: [
      {
        title: "Resident liaison",
        detail:
          "As RLO, we contact every household directly, explain the works and book an appointment that suits the resident, keeping access rates high and the programme moving.",
      },
      {
        title: "Gerda doorsets",
        detail:
          "Each opening receives a PAS\u00a024 certified FD30S flat entrance doorset manufactured by Gerda Security Products, combining fire performance with security certification.",
      },
      {
        title: "Single-visit install",
        detail:
          "Our in-house teams remove the old door and fit the new doorset in one visit, leaving the resident with a secure, fully working front door the same day.",
      },
      {
        title: "Ongoing programme",
        detail:
          "With 500+ doorsets installed since 2025, the programme continues across the borough, with every installation recorded on our installation log for LB Ealing.",
      },
    ],
    pairs: [
      {
        caption: "Flat 36A: single-glazed timber door replaced with a red PAS\u00a024 FD30S doorset with fire-rated vision panels",
        before: img(p("lb-ealing", "flat-36a-before"), "Flat 36A single-glazed timber door before replacement", 715, 848),
        after: img(p("lb-ealing", "flat-36a-after"), "Flat 36A new red PAS\u00a024 FD30S doorset with fire-rated vision panels", 724, 848),
      },
      {
        caption: "Flat 16: external entrance, navy",
        before: img(p("lb-ealing", "flat-16-before"), "Flat 16 external entrance before replacement", 457, 572),
        after: img(p("lb-ealing", "flat-16-after"), "Flat 16 new navy FD30S external entrance doorset", 457, 572),
      },
      {
        caption: "Flat 18: with glazed side screen",
        before: img(p("lb-ealing", "flat-18-before"), "Flat 18 door with side screen before replacement", 457, 572),
        after: img(p("lb-ealing", "flat-18-after"), "Flat 18 new FD30S doorset with glazed side screen", 457, 572),
      },
      {
        caption: "Flat 39: white, with side screen",
        before: img(p("lb-ealing", "flat-39-before"), "Flat 39 door before replacement", 467, 572),
        after: img(p("lb-ealing", "flat-39-after"), "Flat 39 new white FD30S doorset with side screen", 467, 572),
      },
      {
        caption: "Flat 1: internal lobby, navy",
        before: img(p("lb-ealing", "flat-1-before"), "Flat 1 internal lobby door before replacement", 457, 572),
        after: img(p("lb-ealing", "flat-1-after"), "Flat 1 new navy FD30S doorset in an internal lobby", 457, 572),
      },
    ],
    gallery: [],
    cover: img(p("lb-ealing", "flat-36a-after"), "Red PAS\u00a024 FD30S flat entrance doorset installed by Excel Fire for LB Ealing", 724, 848),
    featured: false,
    metaTitle: "LB Ealing Flat Entrance Door Programme",
    metaDescription:
      "500+ PAS\u00a024 certified FD30S flat entrance doorsets installed for the London Borough of Ealing with Gerda, with Excel Fire as Resident Liaison Officer.",
  },
  {
    slug: "bryanston-harewood-ealing",
    title: "Certified flat entrance doorsets for L&Q residents at Bryanston & Harewood",
    name: "Bryanston & Harewood",
    category: "Fire door installation",
    location: "Ealing, London",
    period: "2026",
    publishedIso: "2026-11-13",
    client: "L&Q",
    partner: { label: "Principal contractor", value: "Equans (Tier 1)" },
    sectors: ["social-housing", "main-contractors"],
    services: ["fire-door-installation", "validation-surveys"],
    summary:
      "Survey, specification and installation of made-to-measure certified FEDs across two L&Q blocks, with every resident choosing their door colour.",
    overview: [
      "In 2026, Excel Fire was appointed by Tier 1 contractor Equans and housing association L&Q to deliver new certified flat entrance doorsets (FEDs) at Bryanston and Harewood, two of L&Q's social housing blocks in Ealing, covering the full journey from survey to handover.",
      "Our structural opening surveys confirmed accurate opening dimensions, scope and doorset specification for manufacture, so every doorset arrived made to measure. Residents chose any standard RAL colour for their new door, and the doorsets were delivered to site and installed by our in-house teams, leaving client and residents reassured and pleased with the result.",
    ],
    stats: [
      { value: "2", label: "Social housing blocks" },
      { value: "RAL", label: "Resident colour choice" },
      { value: "100%", label: "Surveyed & certified" },
      { value: "Tier 1", label: "Appointed via Equans" },
    ],
    steps: [
      {
        title: "Opening surveys",
        detail:
          "Our surveyors carried out structural opening surveys to every flat, recording accurate dimensions, scope and site constraints so nothing was left to assumption at manufacture.",
      },
      {
        title: "Specification",
        detail:
          "Survey data was translated into a doorset specification for each opening, confirming configuration, ironmongery and certification requirements before manufacture.",
      },
      {
        title: "Resident choice",
        detail:
          "Residents were offered any standard RAL colour for their new door, giving each household a say in the finish and a doorset that felt like their own front door.",
      },
      {
        title: "Delivery and installation",
        detail:
          "Made-to-measure doorsets were delivered to site and installed by our in-house teams, with client and residents left reassured and pleased with the finished doorsets.",
      },
    ],
    pairs: [
      {
        caption: "Flat 64: gloss-painted door replaced with a made-to-measure certified FED in RAL white, with new frame, ironmongery and threshold",
        before: img(p("bryanston-harewood-ealing", "flat-64-before"), "Flat 64 gloss-painted door before replacement", 715, 848),
        after: img(p("bryanston-harewood-ealing", "flat-64-after"), "Flat 64 new white certified flat entrance doorset", 724, 848),
      },
      {
        caption: "Flat 62: RAL green",
        before: img(p("bryanston-harewood-ealing", "flat-62-before"), "Flat 62 door before replacement", 457, 571),
        after: img(p("bryanston-harewood-ealing", "flat-62-after"), "Flat 62 new green certified FED", 457, 572),
      },
      {
        caption: "Flat 49: RAL blue",
        before: img(p("bryanston-harewood-ealing", "flat-49-before"), "Flat 49 door before replacement", 457, 571),
        after: img(p("bryanston-harewood-ealing", "flat-49-after"), "Flat 49 new blue certified FED", 457, 572),
      },
      {
        caption: "Flat 1: RAL red",
        before: img(p("bryanston-harewood-ealing", "flat-1-before"), "Flat 1 door before replacement", 457, 571),
        after: img(p("bryanston-harewood-ealing", "flat-1-after"), "Flat 1 new red certified FED", 457, 572),
      },
    ],
    gallery: [
      { ...img(p("bryanston-harewood-ealing", "finished-red"), "Finished red certified flat entrance doorset at Bryanston & Harewood", 1050, 1400), caption: "RAL red" },
      { ...img(p("bryanston-harewood-ealing", "finished-green"), "Finished green certified flat entrance doorset", 1050, 1400), caption: "RAL green" },
      { ...img(p("bryanston-harewood-ealing", "finished-black"), "Finished black certified flat entrance doorset", 1050, 1400), caption: "RAL black" },
      { ...img(p("bryanston-harewood-ealing", "finished-white"), "Finished white certified flat entrance doorset", 1050, 1400), caption: "RAL white" },
    ],
    cover: img(p("bryanston-harewood-ealing", "finished-red"), "Red certified flat entrance doorset installed by Excel Fire for L&Q residents in Ealing", 1050, 1400),
    featured: false,
    metaTitle: "Bryanston & Harewood FED Case Study, L&Q",
    metaDescription:
      "Made-to-measure certified flat entrance doorsets surveyed, specified and installed for L&Q residents in Ealing, appointed by Tier 1 contractor Equans.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsBySector(sector: SectorId): Project[] {
  return projects.filter((project) => project.sectors.includes(sector));
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((project) => project.services.includes(serviceSlug));
}

/** Other projects ranked by shared services, then shared sectors. */
export function getRelatedProjects(current: Project, limit = 3): Project[] {
  return projects
    .filter((project) => project.slug !== current.slug)
    .map((project) => ({
      project,
      score:
        project.services.filter((s) => current.services.includes(s)).length * 2 +
        project.sectors.filter((s) => current.sectors.includes(s)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.project);
}

/**
 * Client logo treatment. "mono" uses the background-free single-colour copies in /Excel/Clients/mono
 * (built by scripts/clean-client-logos.mjs): dark in light mode, white in dark mode.
 * Set to "original" to put the supplied logos back exactly as they were.
 */
export const CLIENT_LOGO_STYLE: "mono" | "original" = "mono";

export function clientLogoSrc(src: string): string {
  if (CLIENT_LOGO_STYLE === "original") return src;
  return src.replace("/Excel/Clients/", "/Excel/Clients/mono/").replace(/\.(png|jpe?g)\.webp$|\.webp$/i, ".png");
}

/** Image classes for each treatment (the originals keep their previous greyscale fade). */
export const clientLogoClass =
  CLIENT_LOGO_STYLE === "mono"
    ? "object-contain opacity-75 transition duration-300 dark:invert dark:opacity-85"
    : "object-contain opacity-60 grayscale transition duration-300";

export const clientLogos = [
  { src: "/Excel/Clients/AMBER-LOGO.png.webp", alt: "Amber Construction" },
  { src: "/Excel/Clients/Axis-Logo-CMYK-copy-1-640x344.jpg.webp", alt: "Axis Europe" },
  { src: "/Excel/Clients/Cablesheer_Stacked_Group_Logo.jpg.webp", alt: "Cablesheer Group" },
  { src: "/Excel/Clients/CBRE-350-c.jpg.webp", alt: "CBRE" },
  { src: "/Excel/Clients/durkan-325.png.webp", alt: "Durkan" },
  { src: "/Excel/Clients/GerdaLogo.webp", alt: "Gerda Security Products" },
  { src: "/Excel/Clients/greyline.png.webp", alt: "Greyline" },
  { src: "/Excel/Clients/Harlow_Council_logo.png.webp", alt: "Harlow Council" },
  { src: "/Excel/Clients/hts-group.webp", alt: "HTS Group" },
  { src: "/Excel/Clients/McConnell.jpg.webp", alt: "McConnell" },
  { src: "/Excel/Clients/mitie_logo350.webp", alt: "Mitie" },
  { src: "/Excel/Clients/nhs-england.webp", alt: "NHS" },
  { src: "/Excel/Clients/TB.png.webp", alt: "T&B Contractors" },
  { src: "/Excel/Clients/united_living-a-1.jpg.webp", alt: "United Living" },
  { src: "/Excel/Clients/ventol.jpg.webp", alt: "Ventol" },
  { src: "/Excel/Clients/1656667478594.jpg.webp", alt: "Chas Berger" },
  { src: "/Excel/Clients/download.png.webp", alt: "Weston Homes" },
  { src: "/Excel/Clients/logo.jpeg.webp", alt: "Equans" },
];

/** Short quotes from the testimonials on the live site. */
export const clientQuotes = [
  { quote: "Tidiest firestopping the architect had ever seen.", author: "Amanda Holland", role: "McConnell" },
  {
    quote: "Very professional from start to finish. We look forward to using you much more.",
    author: "Dave Clay",
    role: "Equans",
  },
  { quote: "Proactive and innovative where others have struggled.", author: "Dave Fogarty", role: "T&B Contractors" },
  {
    quote: "The NHBC approved every one of your installations and remarked on the workmanship.",
    author: "DC",
    role: "Weston Group Plc",
  },
  { quote: "A valued addition to our supply chain. Great service, great people.", author: "Dan Read", role: "Boom Construction Ltd" },
  { quote: "Knowledgeable and reassuring. A credit to work alongside.", author: "Alexander Charter", role: "TfL" },
];
