import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS, LEGAL_LINKS, APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-deep text-white">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-5 max-w-sm leading-relaxed text-white/65">
              L&apos;application qui connecte les amoureux des plantes pour donner, échanger et cultiver ensemble près de chez eux.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-mint">Découvrir</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-mint">Télécharger</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">App Store</a>
              </li>
              <li>
                <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">Google Play</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-mint">Informations légales</p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none mt-16 select-none whitespace-nowrap text-center font-display text-[min(14.5vw,12rem)] font-semibold leading-none tracking-tighter text-white/[0.06]"
        >
          plantMatch
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>© 2026 PlantMatch. Tous droits réservés.</p>
          <p>Fait avec 🌿 pour les amoureux des plantes</p>
        </div>
      </div>
    </footer>
  );
}
