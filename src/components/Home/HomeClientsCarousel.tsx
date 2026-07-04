import Image from "next/image";

const clientLogos = [
  { src: "/Excel/Clients/1656667478594.jpg.webp", alt: "Client logo" },
  { src: "/Excel/Clients/AMBER-LOGO.png.webp", alt: "Amber Construction" },
  { src: "/Excel/Clients/Axis-Logo-CMYK-copy-1-640x344.jpg.webp", alt: "Axis Europe" },
  { src: "/Excel/Clients/Cablesheer_Stacked_Group_Logo.jpg.webp", alt: "Cablesheer Group" },
  { src: "/Excel/Clients/CBRE-350-c.jpg.webp", alt: "CBRE" },
  { src: "/Excel/Clients/download.png.webp", alt: "Client partner logo" },
  { src: "/Excel/Clients/durkan-325.png.webp", alt: "Durkan" },
  { src: "/Excel/Clients/GerdaLogo.webp", alt: "Gerda Security" },
  { src: "/Excel/Clients/greyline.png.webp", alt: "Greyline" },
  { src: "/Excel/Clients/Harlow_Council_logo.png.webp", alt: "Harlow Council" },
  { src: "/Excel/Clients/hts_groupltd_logo.jpg.webp", alt: "HTS Group" },
  { src: "/Excel/Clients/logo.jpeg.webp", alt: "Client logo" },
  { src: "/Excel/Clients/McConnell.jpg.webp", alt: "McConnell" },
  { src: "/Excel/Clients/mitie_logo350.webp", alt: "Mitie" },
  { src: "/Excel/Clients/nhs.png.webp", alt: "NHS" },
  { src: "/Excel/Clients/TB.png.webp", alt: "T and B Contractors" },
  { src: "/Excel/Clients/united_living-a-1.jpg.webp", alt: "United Living" },
  { src: "/Excel/Clients/ventol.jpg.webp", alt: "Ventol" },
];

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
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="124px"
                  className="object-contain opacity-60 transition"
                  style={{ filter: "grayscale(1) saturate(0) contrast(0.92)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
