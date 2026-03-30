import Image from "next/image";

const logos = [
  { name: "Amazon Mall", src: "/images/clients/amazon-mall.svg", h: "h-20" },
  { name: "Boulevard Mall", src: "/images/clients/boulevard-mall.svg", h: "h-28" },
  { name: "DHA Lahore", src: "/images/clients/dha-lahore.svg", h: "h-20" },
  { name: "Engro", src: "/images/clients/engro.svg", h: "h-28" },
  { name: "South City Hospital", src: "/images/clients/south-city-hospital.svg", h: "h-20" },
  { name: "Gul Ahmed Ideas", src: "/images/clients/gul-ahmed.svg", h: "h-20" },
];

export default function ClientLogos() {
  return (
    <section className="bg-[#FAFBFF] dark:bg-[#e8edf5] py-10 border-b border-[#BCC5E3] dark:border-[#c0c8d8]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-[#3B4862] dark:text-[#3B4862] uppercase tracking-widest mb-8">
          Trusted by leading businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="transition-opacity"
            >
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={80}
                  className={`${logo.h} w-auto object-contain mix-blend-multiply opacity-60 hover:opacity-100 transition-opacity`}
                />
              ) : (
                <span
                  className="text-sm font-semibold text-[#00174b] tracking-tight"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
