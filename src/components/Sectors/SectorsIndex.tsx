import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/lib/sectors";
import { getProjectsBySector } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { tidy } from "@/lib/text";

export function SectorsIndex() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Sectors"
        title="Who we work with"
        description="Every sector carries different duties, occupants and delivery constraints. Choose yours to see how we plan the work and the projects that prove it."
      />

      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
        {sectors.map((sector) => {
          const count = getProjectsBySector(sector.id).length;
          return (
            <article
              key={sector.id}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black">
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <p className="eyebrow">{count ? `${count} case ${count === 1 ? "study" : "studies"}` : "Sector"}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground transition group-hover:text-brand-accent">
                  <Link href={`/sectors/${sector.id}`} className="after:absolute after:inset-0">
                    {tidy(sector.title, 22)}
                  </Link>
                </h2>
                <p className="mt-2 mb-5 text-[0.9375rem] leading-7 text-[var(--text-muted)]">{tidy(sector.strap)}</p>
                <p className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4 text-sm font-semibold text-foreground">
                  Explore sector
                  <span aria-hidden className="text-brand-accent transition group-hover:translate-x-1">→</span>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
