import { Sprout, Leaf, Wheat, Shovel, Flower, TreePine, Trees } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Niveaux, paliers et icônes repris de l'app (level_fr.i18n.json, user_points_utils.dart, functions/src/rewards.ts)
const levels = [
  { n: 1, name: "Novice des plantes", req: "Inscription", reward: "5 feuilles", icon: Sprout },
  { n: 2, name: "Amoureux des feuilles", req: "2 dons/échanges", reward: "+3 feuilles", icon: Leaf },
  { n: 3, name: "Cultivateur actif", req: "5 dons/échanges", reward: "+5 feuilles", icon: Wheat },
  { n: 4, name: "Jardinier confirmé", req: "10 dons/échanges", reward: "+8 feuilles", icon: Shovel },
  { n: 5, name: "Expert des plantes", req: "25 dons/échanges", reward: "+12 feuilles", icon: Flower },
  { n: 6, name: "Maître du jardinage", req: "50 dons/échanges", reward: "+20 feuilles", icon: TreePine },
  { n: 7, name: "Gardien de la nature", req: "100 dons/échanges", reward: "Contacts illimités", icon: Trees },
];

export default function Levels() {
  return (
    <section id="niveaux" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Niveaux & badges"
          title={
            <>
              De novice à <span className="text-gradient">gardien de la nature</span>
            </>
          }
          description="Chaque don ou échange confirmé vous fait grandir. Sept niveaux à débloquer, avec des feuilles bonus à chaque palier."
        />

        <div className="relative mt-16">
          {/* Ligne de progression */}
          <div className="absolute left-0 right-0 top-[38px] hidden h-1 rounded-full bg-gradient-to-r from-mint via-green to-teal lg:block" />

          <div role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3">
            {levels.map((l, i) => (
              <Reveal key={l.n} delay={i * 0.07} y={20}>
                <div role="listitem" className="group relative flex h-full gap-4 rounded-3xl bg-white p-5 ring-1 ring-line transition-all hover:-translate-y-1 hover:ring-mint lg:flex-col lg:items-center lg:bg-transparent lg:p-0 lg:text-center lg:ring-0 lg:hover:ring-0">
                  <span
                    className="relative z-10 grid h-[76px] w-[76px] shrink-0 place-items-center rounded-full border-4 border-white text-white shadow-lg transition-transform group-hover:scale-110"
                    style={{ background: `color-mix(in srgb, #147484 ${(i / 6) * 100}%, #12F4A9)` }}
                  >
                    <l.icon className="h-8 w-8" strokeWidth={1.8} />
                  </span>
                  <div className="lg:mt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-green">Niveau {l.n}</p>
                    <p className="mt-1 font-display text-lg font-semibold leading-tight text-teal">{l.name}</p>
                    <p className="mt-2 text-sm text-muted">{l.req}</p>
                    <span className="mt-2 inline-block rounded-full bg-mint/15 px-2.5 py-0.5 text-xs font-semibold text-teal">{l.reward}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
