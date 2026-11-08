import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/site";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 fill-current">
      <path d="M16.37 12.6c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.8 1.3 10.35.86 1.25 1.89 2.65 3.23 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.03 2.28-1.27 3.13-2.52.99-1.45 1.39-2.85 1.42-2.92-.03-.01-2.72-1.04-2.71-4.15ZM13.79 4.97c.71-.87 1.2-2.07 1.06-3.27-1.03.04-2.28.69-3.02 1.55-.66.77-1.24 1.99-1.09 3.17 1.15.09 2.33-.58 3.05-1.45Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6">
      <path fill="#12F4A9" d="M3.6 1.8 13.4 11.6 3.6 21.4c-.36-.2-.6-.6-.6-1.1V2.9c0-.5.24-.9.6-1.1Z" />
      <path fill="#17CA8F" d="m16.8 8.2-3.4 3.4-9.8-9.8c.33-.18.75-.2 1.15.03L16.8 8.2Z" />
      <path fill="#147484" d="m16.8 15-11.05 6.37c-.4.23-.82.21-1.15.03l9.8-9.8 3.4 3.4Z" />
      <path fill="#18AA95" d="m20.4 10.3c.75.43.75 1.67 0 2.1L16.8 15l-3.4-3.4 3.4-3.4 3.6 2.1Z" />
    </svg>
  );
}

type Props = { dark?: boolean; className?: string };

export default function StoreButtons({ dark = true, className = "" }: Props) {
  const base =
    "group inline-flex h-14 items-center gap-3 rounded-2xl pl-4 pr-6 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";
  const tone = dark
    ? "bg-ink text-white shadow-lg shadow-ink/20 hover:bg-teal hover:shadow-xl hover:shadow-teal/30"
    : "bg-white text-teal shadow-lg shadow-black/10 hover:bg-mint";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${tone}`} aria-label="Télécharger PlantMatch sur l'App Store">
        <AppleIcon />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-medium opacity-70">Télécharger dans</span>
          <span className="font-display text-lg font-semibold -mt-0.5">l&apos;App Store</span>
        </span>
      </a>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${tone}`} aria-label="Télécharger PlantMatch sur Google Play">
        <PlayIcon />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[11px] font-medium opacity-70">Disponible sur</span>
          <span className="font-display text-lg font-semibold -mt-0.5">Google Play</span>
        </span>
      </a>
    </div>
  );
}
