"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const serviceCards = [
  {
    title: "Active Fire Systems",
    summary: "Alarm and detection support designed for safer, compliant buildings.",
    image: "/Excel/active.webp",
    href: "/services/active-fire-systems",
  },
  {
    title: "Fire Doors",
    summary: "Installation, remediation and compliance checks for critical fire doors.",
    image: "/Excel/doors.webp",
    href: "/services/fire-door-installation",
  },
  {
    title: "Injectaclad",
    summary: "Specialist cavity barrier repair with minimal disruption on live sites.",
    image: "/Excel/interclad.webp",
    href: "/services/injectaclad",
  },
  {
    title: "Fire Stopping",
    summary: "High-quality compartmentation and penetration sealing services.",
    image: "/Excel/stopping.webp",
    href: "/services/passive-fire-protection",
  },
  {
    title: "Surveys",
    summary: "Clear, evidence-led inspections with practical next-step reporting.",
    image: "/Excel/surveys.webp",
    href: "/services/fire-door-inspections",
  },
];

export function HomeStatsStrip() {
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  const toggleMobileCard = (title: string) => {
    setActiveMobileCard((prev) => (prev === title ? null : title));
  };

  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
          <div>
            <p className="text-muted text-xs font-medium uppercase tracking-[0.16em]">
              Core services
            </p>
            <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Trusted expertise across every stage of fire safety
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-sm font-semibold text-brand-accent transition hover:opacity-80 md:inline-flex"
          >
            View all services
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {serviceCards.map((card) => (
            <div key={card.title}>
              <div
                className="block md:hidden"
                role="button"
                tabIndex={0}
                onClick={() => toggleMobileCard(card.title)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleMobileCard(card.title);
                  }
                }}
                aria-label={`Toggle details for ${card.title}`}
              >
                <article className="relative h-56 w-full [perspective:1200px]">
                  <div
                    className={`relative h-full w-full rounded-xl transition duration-500 [transform-style:preserve-3d] ${
                      activeMobileCard === card.title ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-xl bg-black [backface-visibility:hidden]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-lg font-semibold text-white">{card.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-200">{card.summary}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-xl bg-black p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <p className="text-base font-semibold text-white">{card.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.summary}</p>
                        </div>
                        <Link
                          href={card.href}
                          onClick={(event) => event.stopPropagation()}
                          className="w-fit text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent"
                        >
                          Explore service
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

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
                        <p className="text-lg font-semibold text-white">{card.title}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 hidden rounded-xl bg-black p-4 md:block md:[backface-visibility:hidden] md:[transform:rotateY(180deg)]">
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <p className="text-base font-semibold text-white">{card.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.summary}</p>
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
