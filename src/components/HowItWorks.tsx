import Image from "next/image";
import { Camera, MapPin, Handshake } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Camera,
    n: "01",
    title: "Publiez vos plantes",
    text: "Ajoutez une à trois photos, une courte description, le besoin en lumière, en eau et le niveau d'entretien. Choisissez : don ou échange.",
    image: "/images/onboarding_1.png",
  },
  {
    icon: MapPin,
    n: "02",
    title: "Trouvez autour de vous",
    text: "La carte « À proximité » affiche les passionnés et leurs plantes dans le rayon que vous choisissez. Filtrez par don, échange, intérieur ou extérieur.",
    image: "/images/map-page.png",
  },
  {
    icon: Handshake,
    n: "03",
    title: "Rencontrez & validez",
    text: "Discutez dans la messagerie, proposez un échange, puis confirmez la remise en main propre grâce à un code unique à 6 chiffres.",
    image: "/images/onboarding_3.png",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Comment ça marche"
          title={
            <>
              Trois étapes pour donner <br className="hidden sm:block" />
              <span className="text-gradient">une seconde vie</span> à vos plantes
            </>
          }
          description="Une bouture en trop, une plante qui prend trop de place, l'envie d'une nouvelle variété ? PlantMatch rend le partage simple et local."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-mint/60 hover:shadow-[0_30px_60px_-25px_rgba(20,116,132,0.35)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/20 text-teal transition-colors group-hover:bg-mint">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl font-semibold text-line transition-colors group-hover:text-mint/60">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-teal">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                <div className="relative mt-8 h-48">
                  <Image src={s.image} alt="" fill sizes="(min-width: 768px) 30vw, 90vw" className="object-contain transition-transform duration-700 group-hover:scale-105" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
