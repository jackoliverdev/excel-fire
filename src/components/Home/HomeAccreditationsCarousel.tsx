import Image from "next/image";

const accreditationLogos = [
  {
    src: "/Excel/Accreditations/A0A1E93E-48AF-4DBB-9A9A-383C9CC7D0CA-scaled-1-1920x1106.jpg.webp",
    alt: "BM TRADA accreditation",
  },
  { src: "/Excel/Accreditations/chas-1024x537-1.png.webp", alt: "CHAS accreditation" },
  {
    src: "/Excel/Accreditations/constructionline-gold.jpg.webp",
    alt: "Constructionline Gold accreditation",
  },
  {
    src: "/Excel/Accreditations/Excel_FireFDInsp_UKASlogo.png.webp",
    alt: "UKAS fire door inspection accreditation",
  },
  {
    src: "/Excel/Accreditations/image001.jpg@01D93BB8.A719FDE0.jpg.webp",
    alt: "Additional accreditation logo",
  },
  { src: "/Excel/Accreditations/Injectaclad.webp", alt: "Injectaclad approved installer" },
  { src: "/Excel/Accreditations/smas-300x105-1.jpg.webp", alt: "SMAS accreditation" },
  {
    src: "/Excel/Accreditations/UKAS-Q-Mark-Fire-Door-Maintenance-Colour-clear-UKAS71.jpg.webp",
    alt: "UKAS Q-Mark fire door maintenance",
  },
];

export function HomeAccreditationsCarousel() {
  const duplicated = [...accreditationLogos, ...accreditationLogos];

  return (
    <section className="pt-10 pb-20 md:pt-12 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="text-foreground text-lg font-semibold tracking-tight md:text-xl">
            Proudly accredited by
          </h3>
        </div>

        <div className="carousel-edge-fade relative overflow-hidden py-4">
          <div className="accreditations-track flex w-max items-center gap-8 px-4 md:gap-12 md:px-6">
            {duplicated.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex h-14 w-[132px] shrink-0 items-center justify-center md:h-16 md:w-[150px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={64}
                  sizes="150px"
                  className="max-h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
