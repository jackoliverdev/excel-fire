import Image from "next/image";
import type { Project } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { tidy } from "@/lib/text";

export function ProjectGallery({ project }: { project: Project }) {
  if (!project.gallery.length) return null;

  return (
    <Section>
      <SectionHeading eyebrow="On site" title="From the job" />
      <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        {project.gallery.map((photo) => (
          <li key={photo.src}>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-black">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs font-medium leading-5 text-[var(--text-muted)] md:text-sm">
                {tidy(photo.caption)}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
