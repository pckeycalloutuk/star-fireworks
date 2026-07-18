import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";

/** Internal-linking block. Pass hrefs of related services to feature. */
export function RelatedServices({ current, hrefs }: { current?: string; hrefs: string[] }) {
  const items = hrefs
    .map((h) => services.find((s) => s.href === h))
    .filter((s): s is (typeof services)[number] => Boolean(s) && s!.href !== current);

  if (items.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="container-7xl">
        <SectionHeading eyebrow="Explore More" title="Related Displays" align="left" />
        <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((s) => (
            <StaggerItem key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full items-center justify-between gap-4 rounded-card border border-white/10 bg-smoke p-6 transition-colors hover:border-gold/40"
              >
                <div className="flex items-center gap-4">
                  <s.icon className="h-6 w-6 text-gold" aria-hidden />
                  <span className="font-display text-lg uppercase text-white">{s.title}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
