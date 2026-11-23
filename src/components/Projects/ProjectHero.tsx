import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Breadcrumbs } from "@/components/Ui/Breadcrumbs";
import { primaryButtonClass, heroSecondaryButtonClass } from "@/components/Ui/buttons";
import { tidy } from "@/lib/text";

/** Case study header: dark split hero plus the orange facts band used on Excel Fire's printed case studies. */
export function ProjectHero({ project }: { project: Project }) {
  const facts = [
    { label: "Client", value: project.client },
    ...(project.partner ? [project.partner] : []),
    { label: "Location", value: project.location },
    { label: "Delivered", value: project.period },
  ];

  return (
    <header>
      <section className="bg-[#0b0f14] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 pb-10 pt-8 md:pb-14 md:pt-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
          <div>
            <Breadcrumbs items={[{ name: "Projects", href: "/projects" }, { name: project.name }]} />
            <p className="eyebrow mt-10 text-slate-300">
              Case study · {tidy(project.category)}
            </p>
            <h1 className="heading-1 mt-4 text-[clamp(2rem,1.4rem+2.4vw,3.25rem)]">
              {tidy(project.title, 16)}
            </h1>
            <p className="lead mt-5 max-w-xl text-slate-300">{tidy(project.summary)}</p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/contact-us" className={primaryButtonClass}>
                Talk about your programme
              </Link>
              <Link href="/projects" className={heroSecondaryButtonClass}>
                All projects
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black lg:aspect-[5/4]">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-accent text-white">
        <dl className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-6 gap-y-5 px-6 py-6 md:grid-cols-4 md:py-7">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">{fact.label}</dt>
              <dd className="mt-1 text-sm font-semibold leading-snug text-balance md:text-base">{tidy(fact.value, 18)}</dd>
            </div>
          ))}
        </dl>
      </section>
    </header>
  );
}
