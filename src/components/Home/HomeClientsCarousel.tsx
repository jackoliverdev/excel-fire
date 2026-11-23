import Image from "next/image";
import { clientLogos, clientLogoClass, clientLogoSrc } from "@/lib/projects";


export function HomeClientsCarousel() {
  const duplicated = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="pt-4 pb-10 md:pt-5 md:pb-12">
      <div className="w-full">
        <div className="carousel-edge-fade relative overflow-hidden py-1">
          <div
            className="accreditations-track flex w-max items-center gap-9 px-6 md:gap-14 md:px-8"
            style={{ animationDuration: "46s" }}
          >
            {duplicated.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="relative h-10 w-[108px] shrink-0 md:h-12 md:w-[124px]"
              >
                <Image src={clientLogoSrc(logo.src)} alt={logo.alt} fill sizes="124px" className={clientLogoClass} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
