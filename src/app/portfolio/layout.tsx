import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Firework Display Portfolio",
  description:
    "Browse our portfolio of firework and drone displays across weddings, Bonfire Night, corporate, festivals and TV events. Filter our work by category.",
  path: "/portfolio",
});

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
