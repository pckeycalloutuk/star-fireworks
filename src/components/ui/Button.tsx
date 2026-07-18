import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60 disabled:pointer-events-none min-h-[44px]";

const variants: Record<Variant, string> = {
  solid: "bg-gold text-night hover:bg-gold/90 hover:shadow-[0_8px_30px_rgba(245,184,46,0.35)]",
  outline: "border border-white/30 text-white hover:border-gold hover:text-gold",
  ghost: "text-white/80 hover:text-gold",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & { href?: string } & Partial<ComponentProps<"button">>) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
