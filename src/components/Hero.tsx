"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "motion/react";
import { ArrowRightLeft, Check, KeyRound, Leaf, MapPin } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import StoreButtons from "./StoreButtons";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const titleWords = [
  { w: "Échangez,", accent: false },
  { w: "adoptez", accent: false },
  { w: "et", accent: false },
  { w: "cultivez", accent: true },
  { w: "ensemble.", accent: false },
];

/** Vignette 40px découpée dans la capture d'accueil (1206×2622). */
const thumb = (x: number, y: number): React.CSSProperties => ({
  backgroundImage: "url(/images/app-home.jpg)",
  backgroundSize: "146px 318px",
  backgroundPosition: `${x}px ${y}px`,
});

/** Décalage parallaxe d'un calque selon la position de la souris (depth en px). */
function useDepth(x: MotionValue<number>, y: MotionValue<number>, depth: number) {
  return {
    x: useTransform(x, (v) => v * depth),
    y: useTransform(y, (v) => v * depth),
  };
}

function FloatingCard({
  children,
  className,
  delay,
  depth,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  depth: { x: MotionValue<number>; y: MotionValue<number> };
}) {
  return (
    <motion.div style={depth} className={`absolute z-30 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 16, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 20 });
  const sy = useSpring(my, { stiffness: 70, damping: 20 });

  const rotateY = useTransform(sx, [-1, 1], [-10, 10]);
  const rotateX = useTransform(sy, [-1, 1], [8, -8]);
  const phone = useDepth(sx, sy, 12);
  const plant = useDepth(sx, sy, -16);
  const shadow = useDepth(sx, sy, -36);
  const near = useDepth(sx, sy, 32);
  const far = useDepth(sx, sy, 22);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    mx.set((e.clientX / window.innerWidth) * 2 - 1);
    my.set((e.clientY / window.innerHeight) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative isolate overflow-hidden bg-white pb-16 pt-28 sm:pt-32 lg:pb-20"
    >
      {/* Lumière douce venant du haut à droite, comme une fenêtre */}
      <div className="absolute -right-[10%] -top-[20%] -z-10 h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(18,244,169,0.16),rgba(18,244,169,0.05)_55%,transparent)]" />
      <div className="absolute -left-40 top-10 -z-10 h-[500px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(20,116,132,0.06),transparent)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
        {/* Texte + actions */}
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="font-display text-[3.1rem] font-semibold leading-[0.98] tracking-[-0.035em] text-teal sm:text-7xl lg:text-[5.2rem]">
            {titleWords.map(({ w, accent }, i) => (
              <span key={w} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block ${accent ? "text-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease }}
                >
                  {w}
                </motion.span>
                {i < titleWords.length - 1 && " "}
              </span>
            ))}
          </h1>

          <motion.p {...fadeUp(0.55)} className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl lg:mx-0">
            PlantMatch connecte les amoureux des plantes près de chez vous. Publiez vos plantes et boutures, trouvez-les autour
            de vous, puis donnez ou échangez-les en toute confiance.
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="mt-9 flex justify-center lg:justify-start">
            <StoreButtons className="justify-center lg:justify-start" />
          </motion.div>

          <motion.ul
            {...fadeUp(0.75)}
            className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm font-medium text-ink/80 lg:justify-start"
          >
            {["Dons & échanges", "Géolocalisé", "iOS & Android"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-green" strokeWidth={3} /> {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Scène : téléphone devant un vrai Monstera */}
        <div className="relative mx-auto h-[580px] w-full max-w-[560px] [perspective:1400px] sm:h-[710px]">
          {/* Ombre portée de la plante sur le « mur », qui se balance doucement */}
          <motion.div style={shadow} className="pointer-events-none absolute -right-16 top-10 hidden w-[420px] sm:block" aria-hidden>
            <motion.div
              initial={{ opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, rotate: [-2, 1.5, -2] }}
              transition={{ opacity: { duration: 2, delay: 0.6 }, rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
              style={{ transformOrigin: "50% 100%" }}
            >
              <Image
                src="/images/plant.png"
                alt=""
                width={600}
                height={827}
                className="w-full opacity-[0.08] [filter:brightness(0)_blur(14px)] [transform:skewX(-14deg)_scaleY(0.95)]"
              />
            </motion.div>
          </motion.div>

          {/* Monstera derrière le téléphone */}
          <motion.div style={plant} className="absolute -left-4 bottom-[22px] w-[190px] sm:left-0 sm:w-[250px]">
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.15, ease }}
            >
              <Image src="/images/plant.png" alt="" width={600} height={827} preload className="w-full drop-shadow-[0_30px_40px_rgba(12,79,90,0.18)]" />
            </motion.div>
          </motion.div>

          {/* Ombres au sol (pot + téléphone) */}
          <div className="absolute bottom-4 left-[4%] h-6 w-[34%] rounded-[50%] bg-black/25 blur-xl" />
          <div className="absolute bottom-2 right-[4%] h-8 w-[48%] rounded-[50%] bg-teal-deep/30 blur-2xl" />

          {/* Téléphone : accueil */}
          <motion.div
            style={{ ...phone, rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="absolute right-[2%] top-[4%] z-20 sm:right-[6%]"
          >
            <motion.div
              initial={{ y: 360, opacity: 0, rotate: 6 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.3, delay: 0.3, ease }}
            >
              <PhoneMockup src="/images/app-home.jpg" alt="Écran d'accueil de l'app PlantMatch" preload className="w-[250px] sm:w-[310px]" />
            </motion.div>
          </motion.div>


          {/* Cartes flottantes */}
          <FloatingCard depth={near} delay={1.05} className="-left-2 top-[36%] sm:left-0">
            <div className="flex items-center gap-3 rounded-2xl bg-white/90 p-2.5 pr-4 shadow-[0_20px_50px_-15px_rgba(12,79,90,0.45)] ring-1 ring-teal/5 backdrop-blur-md">
              <div className="flex -space-x-3">
                <span className="block h-10 w-10 rounded-xl ring-2 ring-white" style={thumb(-10, -118)} />
                <span className="block h-10 w-10 rounded-xl ring-2 ring-white" style={thumb(-68, -118)} />
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-sm font-bold text-teal">
                  <ArrowRightLeft className="h-3.5 w-3.5 text-green" /> Échange accepté
                </p>
                <p className="text-xs text-muted">Pothos ↔ Monstera</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard depth={far} delay={1.25} className="-right-1 top-[50%] sm:-right-8">
            <div className="rounded-2xl bg-white/90 p-3.5 shadow-[0_20px_50px_-15px_rgba(12,79,90,0.45)] ring-1 ring-teal/5 backdrop-blur-md">
              <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                <KeyRound className="h-3.5 w-3.5 text-green" /> Code de remise
              </p>
              <div className="mt-2 flex gap-1">
                {"482913".split("").map((d, i) => (
                  <span key={i} className="grid h-8 w-6 place-items-center rounded-md bg-soft font-display text-base font-semibold text-teal sm:w-7">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </FloatingCard>

          <FloatingCard depth={near} delay={1.45} className="bottom-[8%] -right-1 sm:-right-6">
            <div className="flex items-center gap-2.5 rounded-full bg-teal py-2 pl-2 pr-5 text-white shadow-[0_20px_50px_-15px_rgba(12,79,90,0.6)]">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-teal">
                <Leaf className="h-4.5 w-4.5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-base font-semibold">+2 feuilles</p>
                <p className="text-[11px] text-white/70">Don confirmé</p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard depth={far} delay={1.6} className="right-0 top-[14%] hidden sm:block">
            <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-teal shadow-lg ring-1 ring-teal/5 backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-green" /> 4,9 km · Donation
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
