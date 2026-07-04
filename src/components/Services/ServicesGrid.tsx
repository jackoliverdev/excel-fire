"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/services";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";

export function ServicesGrid() {
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  const toggleMobileCard = (slug: string) => {
    setActiveMobileCard((prev) => (prev === slug ? null : slug));
  };

  return (
    <Section id="all-services">
      <SectionHeading
        eyebrow="Our services"
        title="Every service line, delivered to accredited standards"
        description="Explore each service to see how we work, the standards we install to, and the reporting you receive at handover."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const chips = service.standards.slice(0, 2);

          return (
            <div key={service.slug}>
              {/* Mobile: tap to flip, explicit link on the back */}
              <div
                className="block md:hidden"
                role="button"
                tabIndex={0}
                onClick={() => toggleMobileCard(service.slug)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleMobileCard(service.slug);
                  }
                }}
                aria-label={`Toggle details for ${service.title}`}
              >
                <article className="relative h-64 w-full [perspective:1200px]">
                  <div
                    className={`relative h-full w-full rounded-xl transition duration-500 [transform-style:preserve-3d] ${
                      activeMobileCard === service.slug ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-xl bg-black [backface-visibility:hidden]">
                      <Image
                        src={service.cardImage}
                        alt={service.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-lg font-semibold text-white">{service.title}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                          Tap for details
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-xl bg-black p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <p className="text-base font-semibold text-white">{service.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            {service.cardSummary}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {chips.map((chip) => (
                              <span
                                key={chip}
                                className="rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link
                          href={`/services/${service.slug}`}
                          onClick={(event) => event.stopPropagation()}
                          className="w-fit text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent"
                        >
                          View service
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Desktop: hover to flip, whole card is a link */}
              <Link href={`/services/${service.slug}`} className="group hidden md:block">
                <article className="relative h-64 w-full [perspective:1200px]">
                  <div className="relative h-full w-full rounded-xl transition duration-500 md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] md:group-focus-visible:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl bg-black md:[backface-visibility:hidden]">
                      <Image
                        src={service.cardImage}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-lg font-semibold leading-snug text-white">{service.title}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 hidden rounded-xl bg-black p-4 md:block md:[backface-visibility:hidden] md:[transform:rotateY(180deg)]">
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <p className="text-base font-semibold text-white">{service.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">
                            {service.cardSummary}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {chips.map((chip) => (
                              <span
                                key={chip}
                                className="rounded-full border border-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                          View service
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
