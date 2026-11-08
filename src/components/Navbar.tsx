"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full py-2.5 pl-5 pr-2.5 transition-all duration-500 ${
          scrolled || open ? "glass shadow-[0_8px_40px_-12px_rgba(20,116,132,0.25)] ring-1 ring-teal/10" : ""
        }`}
      >
        <Link href="/#top" aria-label="PlantMatch — accueil">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-mint/15 hover:text-teal"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/#telecharger"
            className="hidden items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-semibold text-teal transition-all hover:bg-green hover:text-white sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Télécharger
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-teal hover:bg-mint/15 lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 shadow-xl ring-1 ring-teal/10 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-medium text-ink hover:bg-mint/15 hover:text-teal"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#telecharger"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-2xl bg-mint px-4 py-3 text-center font-semibold text-teal"
              >
                Télécharger l&apos;app
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
