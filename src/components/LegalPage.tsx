import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LEGAL, LEGAL_LINKS } from "@/lib/site";

export type LegalSection = { id: string; title: string; content: React.ReactNode };

type Props = {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  sections: LegalSection[];
  current: (typeof LEGAL_LINKS)[number]["href"];
};

export default function LegalPage({ eyebrow, title, intro, sections, current }: Props) {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-x-clip bg-white">
        <div className="absolute -right-40 -top-40 -z-10 h-[600px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(18,244,169,0.14),transparent)]" />

        {/* En-tête */}
        <header className="mx-auto max-w-6xl px-5 pb-12 pt-36 sm:pt-40">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-teal">
            <ArrowLeft className="h-4 w-4" /> Retour à l&apos;accueil
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-green">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-teal text-balance sm:text-6xl">{title}</h1>
          <p className="mt-4 text-sm text-muted">Dernière mise à jour : {LEGAL.lastUpdate}</p>
          <div className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/80">{intro}</div>
        </header>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-24 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Sommaire */}
          <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Sommaire" className="rounded-3xl bg-soft p-5 ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sommaire</p>
              <ol className="mt-3 space-y-1.5 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex gap-2 rounded-lg px-2 py-1 text-ink/80 transition-colors hover:bg-white hover:text-teal">
                      <span className="tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <nav aria-label="Autres documents" className="mt-4 space-y-1 px-2 text-sm">
              {LEGAL_LINKS.filter((l) => l.href !== current).map((l) => (
                <Link key={l.href} href={l.href} className="block py-1 font-medium text-teal hover:text-green">
                  {l.label} →
                </Link>
              ))}
            </nav>
          </aside>

          {/* Contenu */}
          <article className="legal min-w-0 max-w-3xl">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0">
                <h2>
                  <span className="mr-3 text-green">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                {s.content}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
