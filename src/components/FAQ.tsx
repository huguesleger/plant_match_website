import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "PlantMatch est-elle vraiment gratuite ?",
    a: "Oui. L'application est gratuite sur iOS et Android. Les feuilles, la monnaie de l'app, se gagnent en donnant, en échangeant ou en parrainant vos amis.",
  },
  {
    q: "Comment se déroule un échange ?",
    a: "Vous proposez une de vos plantes contre celle d'un autre membre. S'il accepte, vous organisez le rendez-vous dans la messagerie. Sur place, le propriétaire génère un code à 6 chiffres que le receveur saisit pour confirmer la remise.",
  },
  {
    q: "Et si je veux simplement donner une plante ?",
    a: "Publiez-la en choisissant « don ». Les personnes intéressées vous contactent, vous choisissez à qui la donner, et chaque don confirmé vous rapporte 2 feuilles.",
  },
  {
    q: "À quoi servent les feuilles ?",
    a: "Contacter un donneur pour la première fois coûte 1 feuille. Vous en recevez 5 à l'inscription, 2 par don ou échange confirmé, 3 par parrainage, et des bonus à chaque nouveau niveau.",
  },
  {
    q: "Ma localisation est-elle partagée ?",
    a: "La géolocalisation sert à afficher les plantes et les membres autour de vous selon le rayon que vous choisissez. Vous pouvez l'activer ou la désactiver depuis votre téléphone.",
  },
  {
    q: "Que faire en cas de comportement inapproprié ?",
    a: "Depuis une conversation, vous pouvez signaler ou bloquer un utilisateur. Les signalements sont examinés par l'équipe PlantMatch.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={
            <>
              Vos questions, <span className="text-gradient">nos réponses</span>
            </>
          }
          description="Tout ce qu'il faut savoir avant de faire votre premier match."
        />
        <Reveal delay={0.1} className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-3xl bg-white p-6 ring-1 ring-line transition-all open:ring-mint/70 open:shadow-[0_20px_50px_-30px_rgba(20,116,132,0.4)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-teal [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint/20 text-teal transition-transform duration-300 group-open:rotate-45 group-open:bg-mint">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
