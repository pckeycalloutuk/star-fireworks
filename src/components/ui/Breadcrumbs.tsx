import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Schema, breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <Schema data={breadcrumbSchema(full)} />
      <nav aria-label="Breadcrumb" className="container-7xl py-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-white/50">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
                {last ? (
                  <span className="text-white/80" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="transition-colors hover:text-gold">
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
