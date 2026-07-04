type AreaGroup = { county: string; locations: string[] };

const coverageByCounty: AreaGroup[] = [
  {
    county: "Essex",
    locations: [
      "Harlow",
      "Chelmsford",
      "Brentwood",
      "Basildon",
      "Colchester",
      "Epping",
      "Braintree",
      "Romford",
      "Southend-on-Sea",
      "Clacton-on-Sea",
    ],
  },
  {
    county: "Hertfordshire",
    locations: [
      "Bishop's Stortford",
      "Hertford",
      "Watford",
      "St Albans",
      "Stevenage",
      "Hemel Hempstead",
      "Hitchin",
      "Welwyn Garden City",
      "Borehamwood",
      "Harpenden",
    ],
  },
  {
    county: "London",
    locations: [
      "Westminster",
      "Camden",
      "Islington",
      "Southwark",
      "Lambeth",
      "City of London",
      "Chelsea",
      "Kensington",
      "Hackney",
      "Tower Hamlets",
    ],
  },
  {
    county: "Surrey",
    locations: [
      "Guildford",
      "Woking",
      "Epsom",
      "Redhill",
      "Reigate",
      "Camberley",
      "Farnham",
      "Leatherhead",
      "Dorking",
      "Staines-upon-Thames",
    ],
  },
  {
    county: "Greater London",
    locations: [
      "Barnet",
      "Enfield",
      "Croydon",
      "Harrow",
      "Hillingdon",
      "Bromley",
      "Newham",
      "Ealing",
      "Wandsworth",
      "Richmond",
      "Sutton",
      "Greenwich",
    ],
  },
  {
    county: "Kent",
    locations: [
      "Dartford",
      "Gravesend",
      "Maidstone",
      "Sevenoaks",
      "Tunbridge Wells",
      "Medway",
      "Ashford",
      "Canterbury",
      "Tonbridge",
      "Sittingbourne",
      "Folkestone",
      "Rochester",
    ],
  },
  {
    county: "Cambridgeshire",
    locations: [
      "Cambridge",
      "Huntingdon",
      "St Neots",
      "Peterborough",
      "Ely",
      "Wisbech",
      "March",
      "Chatteris",
      "St Ives",
      "Soham",
    ],
  },
  {
    county: "Bedfordshire",
    locations: [
      "Bedford",
      "Luton",
      "Leighton Buzzard",
      "Central Bedfordshire",
      "Dunstable",
      "Biggleswade",
      "Sandy",
      "Ampthill",
      "Flitwick",
      "Kempston",
    ],
  },
  {
    county: "Buckinghamshire",
    locations: [
      "Milton Keynes",
      "Aylesbury",
      "High Wycombe",
      "Marlow",
      "Beaconsfield",
      "Amersham",
      "Chesham",
      "Buckingham",
      "Princes Risborough",
      "Wendover",
    ],
  },
  {
    county: "Suffolk",
    locations: [
      "Ipswich",
      "Bury St Edmunds",
      "Felixstowe",
      "Lowestoft",
      "Sudbury",
      "Newmarket",
      "Stowmarket",
      "Haverhill",
      "Beccles",
      "Mildenhall",
    ],
  },
];

export function AreasSeo() {
  return (
    <section id="full-locations" className="pt-10 pb-20 md:pt-12 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <header className="mb-6 md:mb-8">
          <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">Coverage in detail</p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Full locations covered
          </h2>
          <p className="mt-3 max-w-[68ch] text-sm leading-7 text-[var(--text-muted)] md:text-base">
            Excel Fire covers London and surrounding counties, with teams operating across the
            locations below.
          </p>
        </header>

        <article className="rounded-xl border border-[var(--border)] bg-[var(--surface-nav-panel)] p-5 md:p-6">
          <div className="divide-y divide-[var(--border)]">
            {coverageByCounty.map((area) => (
              <div key={area.county} className="py-3 first:pt-0 last:pb-0">
                <h3 className="text-sm font-semibold text-foreground md:text-base">{area.county}</h3>
                <p className="mt-1 text-sm leading-7 text-[var(--text-muted)]">{area.locations.join(", ")}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
