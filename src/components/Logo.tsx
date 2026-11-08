import Image from "next/image";

type Props = { variant?: "color" | "white"; className?: string };

export default function Logo({ variant = "color", className = "" }: Props) {
  const white = variant === "white";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={white ? "/logo-icon-white.svg" : "/logo-icon.svg"}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9"
      />
      <span
        className={`font-display text-[1.45rem] leading-none tracking-tight ${white ? "text-white" : "text-teal"}`}
      >
        <span className="font-semibold">plant</span>
        <span className="font-light">Match</span>
      </span>
    </span>
  );
}
