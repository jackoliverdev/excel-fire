import Image from "next/image";
import Link from "next/link";
import { tidy } from "@/lib/text";

const serviceCards = [
  {
    title: "Active Fire Systems",
    summary: "Fire alarm interlinks, hold-open devices and maglocks, delivered with Excel Electrics.",
    image: "/images/projects/emirates-stadium/concourse-e2-after.webp",
    href: "/services/active-fire-systems",
  },
  {
    title: "Fire Doors",
    summary: "Certified doorsets installed, maintained and inspected. 1,500+ flat entrance doors fitted.",
    image: "/images/projects/bryanston-harewood-ealing/finished-red.webp",
    href: "/services/fire-door-installation",
  },
  {
    title: "Injectaclad",
    summary: "Approved installer of Injectaclad cavity barrier remediation for occupied blocks.",
    image: "/images/projects/david-lee-point-brasset-point-newham/tower.webp",
    href: "/services/injectaclad",
  },
  {
    title: "Fire Stopping",
    summary: "FIRAS-accredited penetration sealing, every seal labelled and logged.",
    image: "/images/projects/printworks-tottenham/riser-after.webp",
    href: "/services/passive-fire-protection",
  },
  {
    title: "Surveys",
    summary: "UKAS-certified door and compartmentation surveys with clear remedial reports.",
    image: "/images/projects/eurostar-temple-mills/workshop-after.webp",
    href: "/services/fire-door-inspections",
  },
];

export function HomeStatsStrip() {
  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
          <div>
            <p className="eyebrow">
              Core services
            </p>
            <h2 className="heading-2 mt-3">
              Every part of a building&apos;s passive fire strategy
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden whitespace-nowrap text-sm font-semibold text-brand-accent transition hover:opacity-80 md:inline-flex"
          >
            View all services
          </Link>
        </div>

        <ul className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
          {serviceCards.map((card) => (
            <li key={card.title} className="w-[78%] shrink-0 snap-start sm:w-[44%]">
              <Link href={card.href} className="relative block h-72 overflow-hidden rounded-xl bg-black">
                <Image src={card.image} alt={card.title} fill sizes="80vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-lg font-semibold text-white">{tidy(card.title, 18)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-200">{tidy(card.summary)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden gap-4 lg:grid lg:grid-cols-5">
          {serviceCards.map((card) => (
            <div key={card.title}>
              <Link href={card.href} className="group hidden md:block">
                <article className="relative h-56 w-full [perspective:1200px]">
                  <div className="relative h-full w-full rounded-xl transition duration-500 md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] md:group-focus-visible:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl bg-black md:[backface-visibility:hidden]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-lg font-semibold text-white">{tidy(card.title, 18)}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 hidden rounded-xl bg-black p-4 md:block md:[backface-visibility:hidden] md:[transform:rotateY(180deg)]">
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <p className="text-base font-semibold text-white">{tidy(card.title, 18)}</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">{tidy(card.summary)}</p>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                          Explore service
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
