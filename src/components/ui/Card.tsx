import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
};

export function Card({ children, className = "", href, hover = true }: Props) {
  const classes = `card-surface p-6 sm:p-8 ${hover ? "transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.04]" : ""} ${className}`;
  if (href) {
    return (
      <Link href={href} className={`block ${classes}`}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}
