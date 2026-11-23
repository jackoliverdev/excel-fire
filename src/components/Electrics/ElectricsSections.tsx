import Image from "next/image";
import Link from "next/link";
import { electricsFaqs, electricsServices } from "@/lib/electrics";
import { siteConfig } from "@/lib/site";
import { getProject } from "@/lib/projects";
import { Section } from "@/components/Ui/Section";
import { SectionHeading } from "@/components/Ui/SectionHeading";
import { primaryButtonClass } from "@/components/Ui/buttons";
import { FaqList } from "@/components/Ui/FaqList";
import { LinkList } from "@/components/Ui/LinkList";

export function ElectricsIntro() {
  return (
    <Section>
      <article className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black">
          <Image
            src="/images/electrics/bp-forecourt-ipswich.webp"
            alt="Excel Electrics engineers working at height on a BP forecourt canopy in Ipswich"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">In plain English</p>
          <h2 className="heading-2 mt-3">
            Friendly, qualified electricians from a name you already trust
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] md:text-base">
            {siteConfig.electrics.name} is the electrical side of Excel Fire. We look after homes, landlords and
            businesses: fixing faults, fitting new lights and sockets, testing and certifying installations, and
            keeping alarms, gates and door entry working.
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] md:text-base">
            We turn up when we say we will, explain what we are doing without the jargon, and leave things clean and
            safe. Every job is tested and certified by NICEIC approved electricians.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href={siteConfig.electrics.phoneHref} className={primaryButtonClass}>
              Call {siteConfig.electrics.phone}
            </a>
            <a
              href={siteConfig.electrics.url}
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold text-brand-accent transition hover:opacity-80"
            >
              Visit excelelectrics.com ↗
            </a>
          </div>
        </div>
      </article>
    </Section>
  );
}

export function ElectricsServicesList() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What we do"
        title="Electrical services for homes and businesses"
        description="Big or small, domestic or commercial. If it is wired in, we can help."
      />
      <LinkList
        columns={2}
        items={electricsServices.map((service) => ({ label: service.title, href: service.href, description: service.summary, external: true }))}
      />
      <p className="mt-6 text-sm leading-6 text-[var(--text-muted)]">
        NICEIC Approved Contractor. Mon to Fri, 08:00 to 17:00. Email{" "}
        <a href={`mailto:${siteConfig.electrics.email}`} className="font-semibold text-foreground underline underline-offset-4">
          {siteConfig.electrics.email}
        </a>
        .
      </p>
    </Section>
  );
}

export function ElectricsWireAndFire() {
  const emirates = getProject("emirates-stadium");
  if (!emirates) return null;

  return (
    <Section>
      <div className="relative overflow-hidden rounded-2xl bg-[#0b0f14] text-white">
        <div className="grid lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[260px] lg:min-h-full">
            <Image src={emirates.cover.src} alt={emirates.cover.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="p-6 md:p-10">
            <p className="eyebrow text-slate-400">Wire & fire</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              Fire doors and the electrics that control them, delivered by one group
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              Modern fire doors rarely work alone. Maglocks, hold-open devices, access control and the fire alarm all
              have to talk to each other. With Excel Fire and Excel Electrics under one roof, you get one programme,
              one point of contact and no gaps between trades.
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-200">
              <li>· Fire alarm interlinks for hold-open devices and maglocks</li>
              <li>· Access control on fire doorsets and communal entrances</li>
              <li>· Emergency lighting and alarm installation alongside door programmes</li>
            </ul>
            <Link
              href={`/projects/${emirates.slug}`}
              className="mt-6 inline-flex text-sm font-semibold text-brand-accent transition hover:opacity-80"
            >
              See the Emirates Stadium case&nbsp;study&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ElectricsFaqs() {
  return (
    <Section>
      <SectionHeading eyebrow="Questions" title="Common questions about Excel Electrics" />
      <FaqList faqs={electricsFaqs} />
    </Section>
  );
}
