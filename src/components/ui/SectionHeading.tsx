import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subline?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  subline,
  align = "center",
  className = "",
  as = "h2",
}: Props) {
  const Tag = as;
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="text-4xl leading-none sm:text-5xl lg:text-6xl">{title}</Tag>
      {subline && <p className="mt-4 text-base text-white/70 sm:text-lg">{subline}</p>}
    </Reveal>
  );
}
