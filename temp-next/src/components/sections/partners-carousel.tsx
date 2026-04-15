import Image from "next/image";
import type { Partner } from "@/types";

export function PartnersCarousel({ partners }: { partners: Partner[] }) {
  const looped = [...partners, ...partners];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white py-6 shadow-sm">
      <div className="marquee-track flex min-w-max items-center gap-5 px-5">
        {looped.map((partner, index) => (
          <a
            key={`${partner.id}-${index}`}
            href={partner.website}
            target="_blank"
            rel="noreferrer"
            title={partner.name}
            className="flex h-16 min-w-[160px] items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-5 py-3 transition hover:border-ocean/30 hover:bg-ocean/5"
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={130}
                height={50}
                className="h-10 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ) : (
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {partner.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
