import Image from "next/image";
import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";

export default function DownloadCTA() {
  return (
    <section id="telecharger" className="px-5 py-24 sm:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-mint px-7 py-14 sm:px-14 sm:py-16 lg:py-20">
          <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-white/50 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-green/60 blur-3xl" />
          <Image
            src="/logo-icon.svg"
            alt=""
            width={420}
            height={420}
            className="pointer-events-none absolute -bottom-24 -left-20 -z-10 w-[380px] opacity-[0.08] mix-blend-multiply"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-teal text-balance sm:text-6xl">
                Prêt à faire matcher vos plantes&nbsp;?
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-teal/80">
                Téléchargez PlantMatch gratuitement et rejoignez la communauté des amoureux des plantes près de chez vous.
              </p>
              <StoreButtons className="mt-9" />
            </div>
            <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80">
              <Image src="/images/onboarding_2.png" alt="Illustration PlantMatch" fill sizes="(min-width: 1024px) 380px, 90vw" className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
