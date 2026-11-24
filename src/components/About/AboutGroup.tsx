import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Section } from "@/components/Ui/Section";

/** The group story: Excel Fire plus its electrical division, and where the teams are based. */
export function AboutGroup() {
  return (
    <Section>
      <div className="overflow-hidden rounded-2xl bg-[#0b0f14] text-white">
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="p-6 md:p-10">
            <p className="eyebrow text-slate-400">Wire & fire</p>
            <h2 className="heading-2 mt-3 text-white">
              Passive fire, fire doors and electrics from one group
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              Alongside our fire protection teams, {siteConfig.electrics.name} is our NICEIC approved electrical division.
              On projects like Emirates Stadium, one programme covers the doorsets and the maglocks, hold-open devices
              and alarm interlinks that control them.
            </p>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">London office</dt>
                <dd className="mt-1 text-sm leading-6">{siteConfig.offices.london}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Sawbridgeworth office</dt>
                <dd className="mt-1 text-sm leading-6">{siteConfig.offices.sawbridgeworth}</dd>
              </div>
            </dl>
            <Link href="/excel-electrics" className="mt-6 inline-flex text-sm font-semibold text-brand-accent transition hover:opacity-80">
              About Excel Electrics →
            </Link>
          </div>
          <div className="relative min-h-[260px]">
            <Image
              src="/images/brand/van-rear.webp"
              alt="Rear of the Excel Fire van showing London and Birmingham office details"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
