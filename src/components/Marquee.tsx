const items = [
  "Monstera",
  "Pothos",
  "Calathea",
  "Ficus",
  "Sansevieria",
  "Philodendron",
  "Boutures",
  "Plantes d'extérieur",
  "Succulentes",
  "Alocasia",
  "Fougères",
  "Aromatiques",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-teal/10 bg-mint py-5" aria-hidden>
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-display text-2xl font-medium text-teal">
            {item}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-teal">
              <path d="M12 2c3 4 3 8 0 12-3-4-3-8 0-12Zm0 12c4-1 7 0 10 3-4 1-7 0-10-3Zm0 0c-3 3-6 4-10 3 3-3 6-4 10-3Zm0 0v8" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
