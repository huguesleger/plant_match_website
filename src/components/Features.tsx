import Image from "next/image";
import { BookOpen, MapPinned, MessagesSquare, Heart, ShieldCheck, Gift, Repeat2, Sun, Droplets, Leaf, Flag } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Card({ className = "", dark = false, children }: { className?: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <div className={`group relative h-full overflow-hidden rounded-[2rem] p-7 ring-1 ${dark ? "bg-teal text-white ring-teal" : "bg-white ring-line"} transition-all duration-500 hover:ring-mint/70 hover:shadow-[0_30px_60px_-30px_rgba(20,116,132,0.4)] ${className}`}>
      {children}
    </div>
  );
}

function Icon({ icon: I, dark = false }: { icon: typeof BookOpen; dark?: boolean }) {
  return (
    <span className={`grid h-11 w-11 place-items-center rounded-2xl ${dark ? "bg-white/10 text-mint" : "bg-mint/20 text-teal"}`}>
      <I className="h-5 w-5" />
    </span>
  );
}

export default function Features() {
  return (
    <section id="fonctionnalites" className="relative bg-soft py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Fonctionnalités"
          title={
            <>
              Tout ce qu&apos;il faut pour <span className="text-gradient">faire matcher</span> vos plantes
            </>
          }
          description="Du catalogue personnel à la remise en main propre, chaque étape de l'échange est pensée pour être simple, locale et sûre."
        />

        <div className="mt-16 grid auto-rows-auto gap-5 md:grid-cols-6">
          {/* Catalogue — large */}
          <Reveal className="md:col-span-4">
            <Card className="flex flex-col p-0 sm:flex-row">
              <div className="flex-1 p-7">
                <Icon icon={BookOpen} />
                <h3 className="mt-5 font-display text-2xl font-semibold text-teal">Votre catalogue de plantes</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Créez votre collection en quelques secondes : photos, description, catégorie, intérieur ou extérieur.
                  Gardez vos fiches en brouillon, publiez-les ou archivez-les.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Publié", "Brouillon", "Archivé"].map((t, i) => (
                    <span key={t} className={`rounded-full px-3 py-1 text-xs font-semibold ${i === 0 ? "bg-teal text-white" : "bg-soft text-ink ring-1 ring-line"}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative min-h-56 flex-1 overflow-hidden sm:min-h-0">
                <Image src="/images/header_catalog.jpg" alt="Étagères de plantes d'intérieur" fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl p-3 shadow-lg">
                  <p className="font-display font-semibold text-teal">Sansevieria</p>
                  <div className="mt-1.5 flex gap-1.5 text-[11px] text-ink">
                    <span className="inline-flex items-center gap-1 rounded-md bg-white px-1.5 py-0.5"><Sun className="h-3 w-3 text-green" />lumière</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-white px-1.5 py-0.5"><Droplets className="h-3 w-3 text-green" />arrosage</span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-white px-1.5 py-0.5"><Leaf className="h-3 w-3 text-green" />entretien</span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Carte */}
          <Reveal className="md:col-span-2" delay={0.08}>
            <Card dark>
              <Icon icon={MapPinned} dark />
              <h3 className="mt-5 font-display text-2xl font-semibold">Carte « À proximité »</h3>
              <p className="mt-3 leading-relaxed text-white/75">
                Visualisez les plantes disponibles autour de vous et réglez votre rayon de recherche.
              </p>
              <div className="relative mx-auto mt-6 h-40 w-40">
                <span className="absolute inset-0 rounded-full border border-mint/30" />
                <span className="absolute inset-5 rounded-full border border-mint/40" />
                <span className="absolute inset-10 rounded-full border border-mint/50 bg-mint/10" />
                <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-mint" />
                <span className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-mint shadow-[0_0_16px_#12F4A9]" />
                <span className="absolute right-[14%] top-[40%] h-3 w-3 rounded-full bg-mint shadow-[0_0_16px_#12F4A9]" />
                <span className="absolute bottom-[16%] left-[38%] h-3 w-3 rounded-full bg-mint shadow-[0_0_16px_#12F4A9]" />
              </div>
            </Card>
          </Reveal>

          {/* Don ou échange */}
          <Reveal className="md:col-span-2" delay={0.04}>
            <Card>
              <Icon icon={Repeat2} />
              <h3 className="mt-5 font-display text-2xl font-semibold text-teal">Don ou échange</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Proposez une de vos plantes contre la sienne, ou offrez simplement une bouture. Acceptez ou refusez en un geste.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mint/20"><Gift className="h-6 w-6 text-teal" /></span>
                <span className="text-sm font-semibold text-muted">ou</span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal"><Repeat2 className="h-6 w-6 text-mint" /></span>
              </div>
            </Card>
          </Reveal>

          {/* Messagerie */}
          <Reveal className="md:col-span-2" delay={0.08}>
            <Card>
              <Icon icon={MessagesSquare} />
              <h3 className="mt-5 font-display text-2xl font-semibold text-teal">Messagerie intégrée</h3>
              <p className="mt-3 leading-relaxed text-muted">Organisez le rendez-vous, posez vos questions, partagez vos conseils.</p>
              <div className="mt-5 space-y-2 text-sm">
                <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-soft px-3.5 py-2 text-ink">Ta bouture de pothos est toujours dispo ? 🌿</p>
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-teal px-3.5 py-2 text-white">Oui ! Samedi au parc ?</p>
              </div>
            </Card>
          </Reveal>

          {/* Confiance */}
          <Reveal className="md:col-span-2" delay={0.12}>
            <Card>
              <Icon icon={ShieldCheck} />
              <h3 className="mt-5 font-display text-2xl font-semibold text-teal">Remise sécurisée</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Le propriétaire génère un code à 6 chiffres au moment de la rencontre : l&apos;échange n&apos;est validé qu&apos;une fois la plante reçue.
              </p>
              <div className="mt-5 flex justify-center gap-1.5">
                {"482913".split("").map((d, i) => (
                  <span key={i} className="grid h-11 w-9 place-items-center rounded-xl bg-soft font-display text-xl font-semibold text-teal ring-1 ring-line">
                    {d}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          {/* Favoris + communauté — wide */}
          <Reveal className="md:col-span-3" delay={0.04}>
            <Card>
              <Icon icon={Heart} />
              <h3 className="mt-5 font-display text-2xl font-semibold text-teal">Favoris & recommandations</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Gardez de côté les plantes qui vous font de l&apos;œil et découvrez les ajouts récents de la communauté sur votre accueil.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Monstera", "Ficus lyrata", "Bouture de pothos", "Calathea"].map((p) => (
                  <span key={p} className="inline-flex items-center gap-1.5 rounded-full bg-soft py-1.5 pl-2 pr-3 text-sm font-medium text-ink ring-1 ring-line">
                    <Heart className="h-3.5 w-3.5 fill-mint text-green" /> {p}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal className="md:col-span-3" delay={0.1}>
            <Card className="flex items-center gap-6">
              <div className="flex-1">
                <Icon icon={Flag} />
                <h3 className="mt-5 font-display text-2xl font-semibold text-teal">Une communauté saine</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Signalez une conversation ou bloquez un utilisateur à tout moment. L&apos;équipe PlantMatch veille au grain.
                </p>
              </div>
              <div className="relative hidden h-36 w-28 shrink-0 sm:block">
                <Image src="/images/illu-plant.png" alt="" fill sizes="112px" className="object-contain" />
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
