import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { noOrphan, tidy } from "@/lib/text";

type ProjectCardProps = {
  project: Project;
  sizes?: string;
  /** Use h3 inside sections that already have an h2. */
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({
  project,
  sizes = "(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw",
  headingLevel = "h3",
}: ProjectCardProps) {
  const Heading = headingLevel;

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow">{tidy(project.category)}</p>
        <Heading className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground transition group-hover:text-brand-accent">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {tidy(project.name, 18)}
          </Link>
        </Heading>
        <p className="mt-2 mb-5 line-clamp-3 text-[0.9375rem] leading-7 text-[var(--text-muted)]">{noOrphan(project.summary)}</p>
        <p className="mt-auto flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4 text-sm text-[var(--text-muted)]">
          <span>
            {project.location} · {project.period}
          </span>
          <span aria-hidden className="text-brand-accent transition group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </article>
  );
}
