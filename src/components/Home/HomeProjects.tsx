import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { tidy } from "@/lib/text";

/** Featured case studies: one large lead project and three supporting cards. */
export function HomeProjects() {
  const [lead, ...rest] = getFeaturedProjects();
  if (!lead) return null;

  return (
    <section className="section-y">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-6 flex items-end justify-between gap-4 md:mb-8">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2 className="heading-2 mt-3">
              Trusted in some of London&apos;s best-known buildings
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden whitespace-nowrap text-sm font-semibold text-brand-accent transition hover:opacity-80 md:inline-flex"
          >
            View all projects
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="group relative min-h-[360px] overflow-hidden rounded-2xl bg-black md:min-h-[440px] lg:min-h-full">
            <Image
              src={lead.cover.src}
              alt={lead.cover.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="eyebrow text-white/85">{tidy(lead.category)}</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                <Link href={`/projects/${lead.slug}`} className="after:absolute after:inset-0">
                  {tidy(lead.name, 18)}
                </Link>
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-200 md:text-base">{tidy(lead.summary)}</p>
              <dl className="mt-5 grid max-w-md grid-cols-2 gap-x-6 border-t border-white/15 pt-4">
                {lead.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse">
                    <dt className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-300">{tidy(stat.label, 12)}</dt>
                    <dd className="figure text-2xl text-brand-accent md:text-3xl">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>

          <div className="grid gap-4">
            {rest.slice(0, 3).map((project) => (
              <article
                key={project.slug}
                className="group relative grid grid-cols-[112px_1fr] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-nav-panel)] transition hover:border-brand-accent/60 sm:grid-cols-[180px_1fr]"
              >
                <div className="relative min-h-[132px] bg-black">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="180px"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col justify-center p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-accent">
                    {tidy(project.category)}
                  </p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground md:text-lg">
                    <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
                      {tidy(project.name, 18)}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-muted)] sm:hidden">{tidy(project.location)}</p>
                  <p className="mt-1 line-clamp-2 text-sm leading-6 text-[var(--text-muted)] max-sm:hidden">{tidy(project.summary)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Link
          href="/projects"
          className="mt-5 inline-flex text-sm font-semibold text-brand-accent transition hover:opacity-80 md:hidden"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
