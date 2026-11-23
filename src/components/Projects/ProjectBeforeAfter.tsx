import type { Project } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { BeforeAfterSlider } from "@/components/Ui/BeforeAfterSlider";
import { tidy } from "@/lib/text";

/** Before and after comparisons. The first pair is shown large; the rest sit in a grid. */
export function ProjectBeforeAfter({ project }: { project: Project }) {
  if (!project.pairs.length) return null;

  const [lead, ...rest] = project.pairs;
  const leadIsLandscape = lead.after.width > lead.after.height;
  const restAspect = rest.every((pair) => pair.after.width > pair.after.height) ? "aspect-[4/3]" : "aspect-[4/5]";

  return (
    <Section>
      <SectionHeading
        eyebrow="Before & after"
        title="As found, and as handed over"
        description="Drag across a photo to compare. Every photo is from the job itself."
      />

      <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <figure>
          <BeforeAfterSlider
            before={lead.before}
            after={lead.after}
            aspect={leadIsLandscape ? "aspect-[4/3]" : "aspect-[4/5]"}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <figcaption className="mt-3 text-sm font-medium leading-6 text-[var(--text-muted)] lg:sr-only">{tidy(lead.caption)}</figcaption>
        </figure>
        <div aria-hidden className="hidden rounded-2xl bg-[#0b0f14] p-6 text-white md:p-8 lg:block">
          <p className="eyebrow text-slate-400">Featured</p>
          <p className="mt-3 text-xl font-semibold leading-snug tracking-tight md:text-2xl">{tidy(lead.caption)}</p>
        </div>
      </div>

      {rest.length ? (
        <ul
          className={`mt-8 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 ${
            rest.length >= 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {rest.map((pair) => (
            <li key={pair.caption}>
              <figure>
                <BeforeAfterSlider
                  before={pair.before}
                  after={pair.after}
                  aspect={restAspect}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 100vw"
                />
                <figcaption className="mt-2.5 text-xs font-medium leading-5 text-[var(--text-muted)] sm:text-sm sm:leading-6">
                  {tidy(pair.caption)}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}
