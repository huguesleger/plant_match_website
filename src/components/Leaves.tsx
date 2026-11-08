import { Gift, Leaf, MessageCircle, UserPlus, Sprout } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Valeurs reprises de functions/src/rewards.ts
const rules = [
  { icon: Sprout, value: "5", label: "feuilles offertes", text: "Votre pack de bienvenue à l'inscription." },
  { icon: MessageCircle, value: "−1", label: "feuille", text: "Pour contacter un donneur la première fois." },
  { icon: Gift, value: "+2", label: "feuilles", text: "À chaque don ou échange confirmé." },
  { icon: UserPlus, value: "+3", label: "feuilles", text: "Quand vous parrainez un ami." },
];

export default function Leaves() {
  return (
    <section id="feuilles" className="relative isolate overflow-hidden bg-teal py-24 text-white sm:py-32">
      <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(#12F4A9_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-mint/25 blur-[120px]" />
      <div className="absolute -bottom-52 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-green/30 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <SectionHeading
            dark
            align="left"
            eyebrow="La monnaie verte"
            title={
              <>
                Les <span className="text-mint">feuilles</span> récompensent la générosité
              </>
            }
            description="Sur PlantMatch, on gagne en partageant. Les feuilles permettent de contacter les donneurs et récompensent chaque plante qui change de mains."
          />
          <Reveal delay={0.15} className="mt-10">
            <div className="relative inline-flex items-center gap-4 rounded-3xl bg-white/10 p-4 pr-6 ring-1 ring-white/15 backdrop-blur">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-mint/20 text-mint ring-1 ring-mint/30"><Leaf className="h-8 w-8" aria-label="Feuilles PlantMatch" /></span>
              <p className="text-sm leading-relaxed text-white/80">
                Au niveau maximum, <strong className="text-white">les contacts deviennent illimités</strong>, sans dépenser de feuilles.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {rules.map((r, i) => (
            <Reveal key={r.text} delay={i * 0.08}>
              <div className="h-full rounded-[1.75rem] bg-white/[0.07] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]">
                <r.icon className="h-6 w-6 text-mint" />
                <p className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-semibold text-mint">{r.value}</span>
                  <span className="font-medium text-white/80">{r.label}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
