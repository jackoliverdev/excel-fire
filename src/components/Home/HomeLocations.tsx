"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type CoverageArea = {
  id: string;
  county: string;
  towns: string[];
  svgIds: string[];
};

type AreaRegionGroup = {
  id: string;
  label: string;
  keywords: string[];
};

const nonEnglandAreaNameFragments = [
  // Northern Ireland (legacy + current council names)
  "ards",
  "antrim",
  "armagh",
  "ballymena",
  "ballymoney",
  "banbridge",
  "belfast",
  "carrickfergus",
  "castlereagh",
  "coleraine",
  "cookstown",
  "craigavon",
  "causeway coast and glens",
  "derry",
  "down",
  "dungannon",
  "fermanagh",
  "larne",
  "limavady",
  "lisburn",
  "magherafelt",
  "mid and east antrim",
  "mid ulster",
  "moyle",
  "newry",
  "newtownabbey",
  "north down",
  "omagh",
  "strabane",
  // Wales
  "anglesey",
  "isle of anglesey",
  "blaenau gwent",
  "bridgend",
  "caerphilly",
  "cardiff",
  "carmarthenshire",
  "ceredigion",
  "conwy",
  "denbighshire",
  "flintshire",
  "gwynedd",
  "merthyr tydfil",
  "monmouthshire",
  "neath port talbot",
  "newport",
  "pembrokeshire",
  "powys",
  "rhondda, cynon, taff",
  "swansea",
  "torfaen",
  "vale of glamorgan",
  "wrexham",
  // Scotland
  "aberdeen",
  "aberdeenshire",
  "angus",
  "argyll and bute",
  "clackmannanshire",
  "dumfries and galloway",
  "dundee",
  "east ayrshire",
  "east dunbartonshire",
  "east lothian",
  "east renfrewshire",
  "edinburgh",
  "eilean siar",
  "falkirk",
  "fife",
  "glasgow",
  "highland",
  "inverclyde",
  "midlothian",
  "moray",
  "north ayshire",
  "north ayrshire",
  "north lanarkshire",
  "orkney",
  "perthshire and kinross",
  "renfrewshire",
  "scottish borders",
  "shetland islands",
  "south ayrshire",
  "south lanarkshire",
  "stirling",
  "west dunbartonshire",
  "west lothian",
];

const nonEnglandAreaNames = new Set(
  [
    ...nonEnglandAreaNameFragments,
  ].map((name) => name.toLowerCase()),
);

const greaterLondonSvgIds = [
  "GBBNE", // Barnet
  "GBBDG", // Barking and Dagenham
  "GBBEN", // Brent
  "GBBEX", // Bexley
  "GBBRY", // Bromley
  "GBCMD", // Camden
  "GBCRY", // Croydon
  "GBEAL", // Ealing
  "GBENF", // Enfield
  "GBGRE", // Greenwich
  "GBHCK", // Hackney
  "GBHAV", // Havering
  "GBHMF", // Hammersmith and Fulham
  "GBHIL", // Hillingdon
  "GBHNS", // Hounslow
  "GBHRW", // Harrow
  "GBHRY", // Haringey
  "GBISL", // Islington
  "GBKEC", // Kensington and Chelsea
  "GBKTT", // Kingston upon Thames
  "GBLBH", // Lambeth
  "GBLEW", // Lewisham
  "GBMRT", // Merton
  "GBNWM", // Newham
  "GBRDB", // Redbridge
  "GBRIC", // Richmond upon Thames
  "GBSTN", // Sutton
  "GBSWK", // Southwark
  "GBTWH", // Tower Hamlets
  "GBWFT", // Waltham Forest
  "GBWND", // Wandsworth
  "GBWSM", // Westminster
  "GBLND", // City of London
];

const londonCentralSvgIds = [
  "GBLND", // City of London
  "GBWSM", // Westminster
  "GBCMD", // Camden
  "GBISL", // Islington
  "GBKEC", // Kensington and Chelsea
  "GBHCK", // Hackney
  "GBTWH", // Tower Hamlets
  "GBSWK", // Southwark
  "GBLBH", // Lambeth
].filter((id) => greaterLondonSvgIds.includes(id));

const greaterLondonOuterSvgIds = greaterLondonSvgIds.filter(
  (id) => !londonCentralSvgIds.includes(id),
);

const coverageAreas: CoverageArea[] = [
  {
    id: "essex",
    county: "Essex",
    towns: [
      "Harlow",
      "Chelmsford",
      "Brentwood",
      "Basildon",
      "Colchester",
      "Epping",
      "Southend-on-Sea",
      "Braintree",
    ],
    svgIds: ["GBESS"],
  },
  {
    id: "hertfordshire",
    county: "Hertfordshire",
    towns: ["Bishop's Stortford", "Hertford", "Watford", "St Albans", "Stevenage", "Hemel Hempstead"],
    svgIds: ["GBHRT"],
  },
  {
    id: "london",
    county: "London",
    towns: ["Westminster", "Camden", "Islington", "Southwark", "Lambeth", "City of London"],
    svgIds: londonCentralSvgIds,
  },
  {
    id: "surrey",
    county: "Surrey",
    towns: ["Guildford", "Woking", "Epsom", "Redhill", "Reigate", "Camberley", "Farnham", "Leatherhead"],
    svgIds: ["GBSRY"],
  },
  {
    id: "greater-london",
    county: "Greater London",
    towns: ["Barnet", "Enfield", "Croydon", "Harrow", "Hillingdon", "Bromley", "Newham", "Ealing"],
    svgIds: greaterLondonOuterSvgIds,
  },
  {
    id: "kent",
    county: "Kent",
    towns: [
      "Dartford",
      "Gravesend",
      "Maidstone",
      "Sevenoaks",
      "Tunbridge Wells",
      "Medway",
      "Ashford",
      "Canterbury",
    ],
    svgIds: ["GBKEN", "GBMDW", "GBTHR", "GBSOS"],
  },
  {
    id: "cambridgeshire",
    county: "Cambridgeshire",
    towns: ["Cambridge", "Huntingdon", "St Neots", "Peterborough", "Ely", "Wisbech"],
    svgIds: ["GBCAM"],
  },
  {
    id: "bedfordshire",
    county: "Bedfordshire",
    towns: ["Bedford", "Luton", "Leighton Buzzard", "Central Bedfordshire", "Dunstable", "Biggleswade"],
    svgIds: ["GBBDF", "GBLUT", "GBCBF"],
  },
  {
    id: "buckinghamshire",
    county: "Buckinghamshire",
    towns: ["Milton Keynes", "Aylesbury", "High Wycombe", "Marlow", "Beaconsfield", "Amersham"],
    svgIds: ["GBBKM", "GBMIK"],
  },
  {
    id: "suffolk",
    county: "Suffolk",
    towns: ["Ipswich", "Bury St Edmunds", "Felixstowe", "Lowestoft", "Sudbury", "Newmarket"],
    svgIds: ["GBSFK"],
  },
];

const areaRegionGroups: AreaRegionGroup[] = [
  {
    id: "london",
    label: "London",
    keywords: [
      "london",
      "westminster",
      "camden",
      "islington",
      "hackney",
      "barking and dagenham",
      "southwark",
      "lambeth",
      "newham",
      "croydon",
      "hillingdon",
      "greenwich",
      "haringey",
      "hounslow",
      "ealing",
      "enfield",
      "wandsworth",
      "tower hamlets",
      "bromley",
      "barnet",
      "bexley",
      "waltham forest",
      "havering",
      "redbridge",
      "brent",
      "harrow",
      "merton",
      "sutton",
      "lewisham",
      "richmond upon thames",
      "kingston upon thames",
      "kensington and chelsea",
      "hammersmith and fulham",
      "city",
    ],
  },
  {
    id: "south-east",
    label: "South East",
    keywords: [
      "kent",
      "surrey",
      "sussex",
      "hampshire",
      "berkshire",
      "slough",
      "wokingham",
      "bracknell",
      "reading",
      "medway",
      "portsmouth",
      "southampton",
      "isle of wight",
      "milton keynes",
      "buckinghamshire",
      "brighton and hove",
      "oxfordshire",
      "royal borough of windsor and maidenhead",
      "windsor and maidenhead",
    ],
  },
  {
    id: "south-west",
    label: "South West",
    keywords: [
      "cornwall",
      "devon",
      "dorset",
      "somerset",
      "bristol",
      "gloucestershire",
      "wiltshire",
      "wiltshire council",
      "isles of scilly",
      "plymouth",
      "torbay",
      "bournemouth",
      "poole",
      "bath",
      "north somerset",
      "south gloucestershire",
      "swindon",
    ],
  },
  {
    id: "east-of-england",
    label: "East of England",
    keywords: [
      "essex",
      "hertfordshire",
      "cambridgeshire",
      "norfolk",
      "suffolk",
      "dacorum",
      "bedfordshire",
      "bedford",
      "luton",
      "peterborough",
      "southend",
      "thurrock",
    ],
  },
  {
    id: "midlands",
    label: "Midlands",
    keywords: [
      "northamptonshire",
      "leicestershire",
      "lincolnshire",
      "derby",
      "nottinghamshire",
      "nottingham",
      "leicester",
      "rutland",
      "derbyshire",
      "warwickshire",
      "worcestershire",
      "staffordshire",
      "shropshire",
      "herefordshire",
      "birmingham",
      "coventry",
      "wolverhampton",
      "dudley",
      "walsall",
      "sandwell",
      "telford and wrekin",
      "stoke-on-trent",
      "west midlands",
      "east midlands",
    ],
  },
  {
    id: "north",
    label: "North",
    keywords: [
      "yorkshire",
      "lancashire",
      "cheshire",
      "cumbria",
      "greater manchester",
      "merseyside",
      "tyne",
      "durham",
      "darlington",
      "gateshead",
      "hartlepool",
      "middlesbrough",
      "stockton-on-tees",
      "redcar and cleveland",
      "northumberland",
      "newcastle",
      "sunderland",
      "liverpool",
      "manchester",
      "bolton",
      "bury",
      "blackburn with darwen",
      "warrington",
      "wigan",
      "stockport",
      "tameside",
      "trafford",
      "salford",
      "oldham",
      "rochdale",
      "leeds",
      "bradford",
      "barnsley",
      "doncaster",
      "york",
      "city of york",
      "rotherham",
      "sheffield",
      "wakefield",
      "calderdale",
      "kirklees",
      "hull",
      "blackpool",
      "halton",
      "knowsley",
      "sefton",
      "north lincolnshire",
      "north east lincolnshire",
    ],
  },
];

export function HomeLocations() {
  const pathname = usePathname();
  const [displayAreas, setDisplayAreas] = useState<CoverageArea[]>(coverageAreas);
  const [activeAreaId, setActiveAreaId] = useState<string>(coverageAreas[0].id);
  const [activeRegionId, setActiveRegionId] = useState<string>("london");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [mapReady, setMapReady] = useState<{ desktop: boolean; mobile: boolean }>({
    desktop: false,
    mobile: false,
  });
  const desktopMapObjectRef = useRef<HTMLObjectElement | null>(null);
  const mobileMapObjectRef = useRef<HTMLObjectElement | null>(null);
  const regionChipScrollerRef = useRef<HTMLDivElement | null>(null);
  const regionChipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const regionSwitchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const regionSwitchLockUntilRef = useRef(0);
  const manualRegionLockUntilRef = useRef(0);
  const svgIdToAreaId = useMemo(() => {
    const map = new Map<string, string>();

    displayAreas.forEach((area) => {
      area.svgIds.forEach((svgId) => {
        // Keep the first mapping to prioritise specific areas (for example London over Greater London).
        if (!map.has(svgId)) {
          map.set(svgId, area.id);
        }
      });
    });

    return map;
  }, [displayAreas]);

  const activeArea = useMemo(
    () => displayAreas.find((area) => area.id === activeAreaId) ?? displayAreas[0],
    [activeAreaId, displayAreas],
  );
  const mapSrc = useMemo(
    () => `/maps/gb-admin1.svg?v=${encodeURIComponent(pathname ?? "base")}`,
    [pathname],
  );
  const groupedAreas = useMemo(() => {
    const grouped = new Map<string, CoverageArea[]>();
    areaRegionGroups.forEach((group) => grouped.set(group.id, []));
    grouped.set("other", []);

    displayAreas.forEach((area) => {
      const areaName = area.county.toLowerCase();
      const matchedGroup = areaRegionGroups.find((group) =>
        group.keywords.some((keyword) => areaName.includes(keyword)),
      );
      const bucketId = matchedGroup?.id ?? "other";
      grouped.get(bucketId)?.push(area);
    });

    const ordered = areaRegionGroups
      .map((group) => ({
        id: group.id,
        label: group.label,
        areas: (grouped.get(group.id) ?? []).sort((a, b) => a.county.localeCompare(b.county, "en-GB")),
      }))
      .filter((group) => group.areas.length > 0);

    const otherAreas = (grouped.get("other") ?? []).sort((a, b) => a.county.localeCompare(b.county, "en-GB"));
    if (otherAreas.length > 0) {
      ordered.push({ id: "other", label: "Other England", areas: otherAreas });
    }

    return ordered;
  }, [displayAreas]);
  const activeRegion = useMemo(
    () => groupedAreas.find((group) => group.id === activeRegionId) ?? groupedAreas[0],
    [groupedAreas, activeRegionId],
  );
  const areaToRegionId = useMemo(() => {
    const regionMap = new Map<string, string>();
    groupedAreas.forEach((group) => {
      group.areas.forEach((area) => regionMap.set(area.id, group.id));
    });
    return regionMap;
  }, [groupedAreas]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const syncTheme = () => setIsDarkTheme(root.classList.contains("dark"));

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (displayAreas.length === 0) return;
    if (!displayAreas.some((area) => area.id === activeAreaId)) {
      setActiveAreaId(displayAreas[0].id);
    }
  }, [displayAreas, activeAreaId]);

  useEffect(() => {
    if (groupedAreas.length === 0) return;
    if (!groupedAreas.some((group) => group.id === activeRegionId)) {
      setActiveRegionId(groupedAreas[0].id);
    }
  }, [groupedAreas, activeRegionId]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    const scroller = regionChipScrollerRef.current;
    const chipEl = regionChipRefs.current[activeRegionId];
    if (!scroller || !chipEl) return;

    const targetLeft =
      chipEl.offsetLeft - scroller.clientWidth / 2 + chipEl.clientWidth / 2;

    scroller.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeRegionId, groupedAreas.length]);

  useEffect(() => {
    if (!activeArea) return;
    if (Date.now() < manualRegionLockUntilRef.current) return;

    const targetRegionId = areaToRegionId.get(activeArea.id);
    if (!targetRegionId || targetRegionId === activeRegionId) return;

    if (regionSwitchTimeoutRef.current) {
      clearTimeout(regionSwitchTimeoutRef.current);
    }

    const now = Date.now();
    const switchCadenceMs = 220;
    const baseDelayMs = 120;
    const lockRemaining = Math.max(0, regionSwitchLockUntilRef.current - now);
    const delay = Math.max(baseDelayMs, lockRemaining);

    regionSwitchTimeoutRef.current = setTimeout(() => {
      setActiveRegionId(targetRegionId);
      regionSwitchLockUntilRef.current = Date.now() + switchCadenceMs;
      regionSwitchTimeoutRef.current = null;
    }, delay);

    return () => {
      if (regionSwitchTimeoutRef.current) {
        clearTimeout(regionSwitchTimeoutRef.current);
        regionSwitchTimeoutRef.current = null;
      }
    };
  }, [activeArea, activeRegionId, areaToRegionId]);

  useEffect(() => {
    const objectEls = [desktopMapObjectRef.current, mobileMapObjectRef.current].filter(
      Boolean,
    ) as HTMLObjectElement[];
    if (objectEls.length === 0) return;

    const eventCleanups: Array<() => void> = [];
    const loadCleanups: Array<() => void> = [];
    const retryTimeouts: Array<ReturnType<typeof setTimeout>> = [];

    const styleMap = (objectEl: HTMLObjectElement, interactive: boolean): boolean => {
      const svgDoc = objectEl.contentDocument;
      if (!svgDoc) return false;

      const svgEl = svgDoc.documentElement as unknown as SVGSVGElement;
      const mapBackground = isDarkTheme ? "#0b0f14" : "#ffffff";
      svgEl.style.backgroundColor = mapBackground;

      // Normalise any hard-coded white SVG background rectangles to theme-aware colour.
      const bgRects = Array.from(svgDoc.querySelectorAll<SVGRectElement>("rect")).filter((rect) => {
        const fill = (rect.getAttribute("fill") ?? "").trim().toLowerCase();
        return fill === "#fff" || fill === "#ffffff" || fill === "white";
      });
      bgRects.forEach((rect) => rect.setAttribute("fill", mapBackground));

      const featuresGroup = svgDoc.getElementById("features") as SVGGElement | null;
      const featurePaths = Array.from(svgDoc.querySelectorAll<SVGPathElement>("#features path"));
      const hasRequiredIds = ["GBESS", "GBHRT", "GBSRY"].every((id) => Boolean(svgDoc.getElementById(id)));
      if (!featuresGroup || featurePaths.length === 0 || !hasRequiredIds) {
        return false;
      }
      const derivedAreas = featurePaths
        .map((path) => {
          const name = (path.getAttribute("name") ?? "").trim();
          return { name, svgId: path.id };
        })
        .filter(({ name, svgId }) => Boolean(name) && Boolean(svgId))
        .filter(({ name }) => {
          const normalisedName = name.toLowerCase();
          if (nonEnglandAreaNames.has(normalisedName)) return false;
          return !nonEnglandAreaNameFragments.some((fragment) => normalisedName.includes(fragment));
        })
        .map(({ name, svgId }) => ({
          id: svgId.toLowerCase(),
          county: name,
          towns: [] as string[],
          svgIds: [svgId],
        }))
        .sort((a, b) => a.county.localeCompare(b.county, "en-GB"));

      if (derivedAreas.length > 0) {
        setDisplayAreas((prevAreas) => {
          const isSameLength = prevAreas.length === derivedAreas.length;
          const isSameOrder =
            isSameLength &&
            prevAreas.every(
              (area, index) =>
                area.id === derivedAreas[index].id &&
                area.svgIds[0] === derivedAreas[index].svgIds[0] &&
                area.county === derivedAreas[index].county,
            );
          return isSameOrder ? prevAreas : derivedAreas;
        });
      }

      const coverageIds = new Set(derivedAreas.map((area) => area.svgIds[0]));
      const boxes = featurePaths
        .map((path) => {
          try {
            return path.getBBox();
          } catch {
            return null;
          }
        })
        .filter((bbox): bbox is DOMRect => Boolean(bbox && bbox.width > 0 && bbox.height > 0));
      const coverageBoxes = featurePaths
        .filter((path) => coverageIds.has(path.id))
        .map((path) => {
          try {
            return path.getBBox();
          } catch {
            return null;
          }
        })
        .filter((bbox): bbox is DOMRect => Boolean(bbox && bbox.width > 0 && bbox.height > 0));

      if (boxes.length === 0) {
        return false;
      }

      const minX = Math.min(...boxes.map((bbox) => bbox.x));
      const minY = Math.min(...boxes.map((bbox) => bbox.y));
      const maxX = Math.max(...boxes.map((bbox) => bbox.x + bbox.width));
      const maxY = Math.max(...boxes.map((bbox) => bbox.y + bbox.height));

      const weighted = boxes.reduce(
        (acc, bbox) => {
          const area = bbox.width * bbox.height;
          const cx = bbox.x + bbox.width / 2;
          const cy = bbox.y + bbox.height / 2;

          acc.area += area;
          acc.x += cx * area;
          acc.y += cy * area;
          return acc;
        },
        { area: 0, x: 0, y: 0 },
      );

      const coverageWeighted = coverageBoxes.reduce(
        (acc, bbox) => {
          const area = bbox.width * bbox.height;
          const cx = bbox.x + bbox.width / 2;
          const cy = bbox.y + bbox.height / 2;

          acc.area += area;
          acc.x += cx * area;
          acc.y += cy * area;
          return acc;
        },
        { area: 0, x: 0, y: 0 },
      );

      const defaultCenterX = weighted.area > 0 ? weighted.x / weighted.area : (minX + maxX) / 2;
      const defaultCenterY = weighted.area > 0 ? weighted.y / weighted.area : (minY + maxY) / 2;
      const coverageCenterX =
        coverageWeighted.area > 0 ? coverageWeighted.x / coverageWeighted.area : defaultCenterX;
      const coverageCenterY =
        coverageWeighted.area > 0 ? coverageWeighted.y / coverageWeighted.area : defaultCenterY;

      const focusStrength = 0.16;
      const centerX = defaultCenterX + (coverageCenterX - defaultCenterX) * focusStrength;
      const centerY = defaultCenterY + (coverageCenterY - defaultCenterY) * focusStrength;

      const halfWidth = Math.max(centerX - minX, maxX - centerX);
      const halfHeight = Math.max(centerY - minY, maxY - centerY);
      const padding = 0.09;
      const zoomFactor = 0.62;
      const finalHalfWidth = halfWidth * (1 + padding) * zoomFactor;
      const finalHalfHeight = halfHeight * (1 + padding) * zoomFactor;

      svgEl.setAttribute(
        "viewBox",
        `${centerX - finalHalfWidth} ${centerY - finalHalfHeight} ${finalHalfWidth * 2} ${finalHalfHeight * 2}`,
      );
      svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");

      featurePaths.forEach((path) => {
        const pathId = path.id;
        path.style.fill = coverageIds.has(pathId) ? "#f97316" : "#000000";
        path.style.opacity = "0.9";
        path.style.stroke = "#ffffff";
        path.style.strokeWidth = "0.7";
      });

      const circles = svgDoc.querySelectorAll<SVGCircleElement>("circle");
      circles.forEach((circle) => {
        const circleId = circle.id;
        if (coverageIds.has(circleId)) {
          circle.style.opacity = "1";
          circle.style.fill = "#f97316";
          circle.style.stroke = "#0f172a";
          circle.style.strokeWidth = "1";
        } else {
          circle.style.opacity = "0";
        }
      });

      activeArea.svgIds.forEach((svgId) => {
        const activePath = svgDoc.getElementById(svgId) as SVGPathElement | null;
        if (activePath) {
          activePath.style.fill = "#22c55e";
          activePath.style.opacity = "0.96";
        }

        const activeCircle = svgDoc.querySelector<SVGCircleElement>(`circle#${svgId}`);
        if (activeCircle) {
          activeCircle.style.opacity = "1";
          activeCircle.style.fill = "#22c55e";
          activeCircle.style.stroke = "#0f172a";
          activeCircle.style.strokeWidth = "1";
        }
      });

      if (!interactive) return true;

      const interactiveElements = Array.from(
        svgDoc.querySelectorAll<SVGPathElement | SVGCircleElement>("#features path, circle"),
      ).filter((el) => coverageIds.has(el.id));

      interactiveElements.forEach((el) => {
        const areaId = svgIdToAreaId.get(el.id);
        if (!areaId) return;

        const handleActivate = () => setActiveAreaId(areaId);
        el.style.cursor = "pointer";
        el.addEventListener("mouseenter", handleActivate);
        el.addEventListener("click", handleActivate);
        el.addEventListener("pointerdown", handleActivate);
        eventCleanups.push(() => {
          el.removeEventListener("mouseenter", handleActivate);
          el.removeEventListener("click", handleActivate);
          el.removeEventListener("pointerdown", handleActivate);
        });
      });

      return true;
    };

    objectEls.forEach((objectEl, index) => {
      const mapKey = index === 0 ? "desktop" : "mobile";
      const isInteractive = true;
      const applyStyles = () => {
        const didStyle = styleMap(objectEl, isInteractive);
        if (didStyle) {
          setMapReady((prev) => (prev[mapKey] ? prev : { ...prev, [mapKey]: true }));
        }
        return didStyle;
      };
      const runWithRetry = (attempt = 0) => {
        if (applyStyles()) return;
        if (attempt >= 24) return;

        const timeout = setTimeout(() => runWithRetry(attempt + 1), 90);
        retryTimeouts.push(timeout);
      };

      // Always attempt immediately in case the object loaded before listeners were attached.
      runWithRetry();

      const readyState = objectEl.contentDocument?.readyState;
      if (readyState !== "complete") {
        const handleLoad = () => runWithRetry();
        objectEl.addEventListener("load", handleLoad);
        loadCleanups.push(() => objectEl.removeEventListener("load", handleLoad));
      }
    });

    return () => {
      retryTimeouts.forEach((timeout) => clearTimeout(timeout));
      loadCleanups.forEach((cleanup) => cleanup());
      eventCleanups.forEach((cleanup) => cleanup());
    };
  }, [activeArea, pathname, svgIdToAreaId, isDarkTheme]);

  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
        <div className="min-w-0 space-y-6">
          <div>
            <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">Coverage</p>
            <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Areas we cover
            </h2>
          </div>

          <p className="text-base leading-8 text-[var(--text-muted)]">
            We cover all of England at county and authority level. We currently do not cover Wales,
            Scotland or Northern Ireland.
          </p>

          <div
            className="w-full max-w-[360px] rounded-xl border bg-[var(--surface)] p-3 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.28)] lg:hidden"
            style={{
              borderColor: isDarkTheme ? "transparent" : "var(--border)",
              backgroundColor: isDarkTheme ? "#000000" : "var(--surface)",
              boxShadow: isDarkTheme ? "none" : "0 18px 32px -26px rgba(15,23,42,0.28)",
            }}
          >
            <div
              className="relative aspect-square rounded-lg p-2"
              style={{ backgroundColor: isDarkTheme ? "#0b0f14" : "var(--surface-muted)" }}
            >
              <object
                ref={mobileMapObjectRef}
                type="image/svg+xml"
                data={mapSrc}
                aria-label="Interactive UK coverage map"
                className={`h-full w-full transition-opacity duration-150 ${
                  mapReady.mobile ? "opacity-100" : "opacity-0"
                }`}
                style={{ border: 0, outline: "none" }}
              />
              {!mapReady.mobile && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[var(--surface-muted)]">
                  <span className="animate-pulse text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Loading coverage map...
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Browse by region
            </p>
            <div className="min-w-0 w-full max-w-full overflow-hidden">
              <div
                ref={regionChipScrollerRef}
                className="flex w-full max-w-full gap-2 overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex-nowrap md:gap-1.5 md:overflow-visible md:pb-0"
              >
                {groupedAreas.map((group) => (
                  <button
                    key={group.id}
                    ref={(el) => {
                      regionChipRefs.current[group.id] = el;
                    }}
                    type="button"
                    onClick={() => {
                      manualRegionLockUntilRef.current = Date.now() + 1200;
                      setActiveRegionId(group.id);
                    }}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition whitespace-nowrap md:min-w-0 md:flex-1 md:px-2 md:text-[11px] ${
                      activeRegion?.id === group.id
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : "border-[var(--border)] bg-[var(--surface-nav-panel)] text-[var(--text-muted)] hover:border-brand-accent hover:text-foreground"
                    }`}
                  >
                    <span className="md:block md:truncate">
                      {group.label === "East of England" ? "East" : group.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid h-[226px] grid-cols-2 content-start gap-2 overflow-y-auto pr-1">
            {(activeRegion?.areas ?? []).map((area) => (
              <button
                key={area.id}
                type="button"
                onMouseEnter={() => setActiveAreaId(area.id)}
                onFocus={() => setActiveAreaId(area.id)}
                onClick={() => setActiveAreaId(area.id)}
                className={`flex items-center gap-2 rounded-md border px-3 py-2 text-left text-sm font-semibold transition ${
                  activeAreaId === area.id
                    ? "border-emerald-500 bg-emerald-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] dark:border-emerald-500 dark:bg-emerald-500 dark:text-white"
                    : "border-[var(--border)] bg-[var(--surface-nav-panel)] text-[var(--text-muted)] hover:border-brand-accent hover:bg-orange-50 hover:text-slate-900 dark:hover:bg-orange-950/30 dark:hover:text-orange-100"
                }`}
              >
                <span
                  className={`transition ${
                    activeAreaId === area.id
                      ? "text-white dark:text-white"
                      : "text-brand-accent"
                  }`}
                >
                  ✓
                </span>
                <span>{area.county}</span>
              </button>
            ))}
          </div>

          <p className="max-w-[58ch] text-base leading-8 text-[var(--text-muted)]">
            <span className="font-semibold text-foreground">{activeArea?.county ?? "Area"} coverage:</span>{" "}
            {activeArea && activeArea.towns.length > 0
              ? activeArea.towns.join(", ")
              : "County-wide coverage available."}
          </p>

        </div>

        <div
          className="hidden w-full max-w-[540px] justify-self-center rounded-xl border bg-[var(--surface)] p-3 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.28)] lg:block lg:justify-self-end"
          style={{
            borderColor: isDarkTheme ? "transparent" : "var(--border)",
            backgroundColor: isDarkTheme ? "#000000" : "var(--surface)",
            boxShadow: isDarkTheme ? "none" : "0 18px 32px -26px rgba(15,23,42,0.28)",
          }}
        >
          <div
            className="relative aspect-square rounded-lg p-2"
            style={{ backgroundColor: isDarkTheme ? "#0b0f14" : "var(--surface-muted)" }}
          >
            <object
              ref={desktopMapObjectRef}
              type="image/svg+xml"
              data={mapSrc}
              aria-label="Interactive UK coverage map"
              className={`h-full w-full transition-opacity duration-150 ${
                mapReady.desktop ? "opacity-100" : "opacity-0"
              }`}
              style={{ border: 0, outline: "none" }}
            />
            {!mapReady.desktop && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-[var(--surface-muted)]">
                <span className="animate-pulse text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Loading coverage map...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
