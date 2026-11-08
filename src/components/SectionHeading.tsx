import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "center", dark = false }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
          dark ? "bg-white/10 text-mint ring-1 ring-white/15" : "bg-mint/15 text-teal ring-1 ring-mint/40"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-mint" : "bg-green"}`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl ${
          dark ? "text-white" : "text-teal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${dark ? "text-white/70" : "text-muted"}`}>{description}</p>
      )}
    </Reveal>
  );
}
