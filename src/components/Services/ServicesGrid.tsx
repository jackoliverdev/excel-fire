import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { inlineLinkClass } from "@/components/Ui/buttons";
import { tidy } from "@/lib/text";

/**
 * Services index in the Excel Electrics layout: alternating photo and text rows,
 * each with its number, name, one-paragraph summary, three key points and a link through.
 */
export function ServicesGrid() {
  return (
    <Section id="all-services">
      <SectionHeading
        align="center"
        eyebrow="All services"
        title="Choose the work you need"
        description="Open any service for how we deliver it, the standards we work to and recent projects. Or send one enquiry and we will tell you what fits."
      />

      <ol className="space-y-14 md:space-y-20">
        {services.map((service, index) => {
          const imageFirst = index % 2 === 0;
          const href = `/services/${service.slug}`;
          return (
            <li key={service.slug} className="grid items-center gap-7 lg:grid-cols-2 lg:gap-14">
              <Link
                href={href}
                tabIndex={-1}
                aria-hidden
                className={`group relative aspect-[16/10] overflow-hidden rounded-md bg-black ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
              >
                <Image
                  src={service.cardImage}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
              </Link>

              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <p className="figure text-2xl text-brand-accent">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  <Link href={href} className="transition-colors hover:text-brand-accent">
                    {tidy(service.title, 18)}
                  </Link>
                </h2>
                <p className="mt-3 max-w-xl text-[0.9375rem] leading-7 text-[var(--text-muted)] md:text-base">
                  {tidy(service.cardSummary, 28)}
                </p>
                <ul className="mt-5 max-w-xl space-y-2">
                  {service.keyPoints.slice(0, 3).map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-foreground">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden />
                      <span>{tidy(point)}</span>
                    </li>
                  ))}
                </ul>
                <Link href={href} className={`mt-6 ${inlineLinkClass}`}>
                  View service details
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
