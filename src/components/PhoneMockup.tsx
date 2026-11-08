import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  preload?: boolean;
  className?: string;
};

/** Mockup iPhone affichant une vraie capture de l'app. */
export default function PhoneMockup({ src, alt, preload = false, className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[3rem] bg-[#1d2a2e] p-[9px] shadow-[0_60px_120px_-30px_rgba(12,79,90,0.65),inset_0_0_0_1.5px_rgba(255,255,255,0.12)]">
        {/* Boutons latéraux */}
        <span className="absolute -left-[3px] top-[18%] h-10 w-[3px] rounded-l bg-[#1d2a2e]" />
        <span className="absolute -left-[3px] top-[27%] h-14 w-[3px] rounded-l bg-[#1d2a2e]" />
        <span className="absolute -right-[3px] top-[24%] h-20 w-[3px] rounded-r bg-[#1d2a2e]" />

        <div className="relative aspect-[1206/2622] overflow-hidden rounded-[2.45rem] bg-white">
          <Image src={src} alt={alt} fill preload={preload} sizes="(min-width: 640px) 320px, 260px" className="object-cover" />
          {/* Barre de statut redessinée (masque celle de la capture) */}
          <div className="absolute inset-x-0 top-0 flex h-[7.3%] items-center justify-between bg-white px-[9%] pt-[1%] text-[12px] font-semibold text-black">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 18 12" className="h-2.5 w-4 fill-black" aria-hidden>
                <rect x="0" y="8" width="3" height="4" rx="1" />
                <rect x="5" y="5" width="3" height="7" rx="1" />
                <rect x="10" y="2" width="3" height="10" rx="1" />
                <rect x="15" y="0" width="3" height="12" rx="1" />
              </svg>
              <span className="relative h-3 w-6 rounded-[4px] border border-black/40 p-[1.5px]">
                <span className="block h-full w-full rounded-[2px] bg-black" />
              </span>
            </span>
          </div>
          <div className="absolute left-1/2 top-[1.6%] h-[3.6%] w-[31%] -translate-x-1/2 rounded-full bg-black" />
          {/* Reflet */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
