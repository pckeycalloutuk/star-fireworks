import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export type LegalSection = { h2: string; body: (string | string[])[] };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  path,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  path: string;
  children?: ReactNode;
}) {
  return (
    <div className="pt-16 sm:pt-20">
      <Breadcrumbs items={[{ name: title, path }]} />
      <section className="py-8 sm:py-12">
        <div className="container-7xl">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl sm:text-5xl">{title}</h1>
            <p className="mt-3 text-sm text-white/50">Last updated: {updated}</p>
            <p className="mt-6 text-white/80">{intro}</p>

            <div className="mt-10 space-y-10">
              {sections.map((s) => (
                <section key={s.h2}>
                  <h2 className="text-2xl text-white">{s.h2}</h2>
                  <div className="mt-3 space-y-3 text-white/75">
                    {s.body.map((b, i) =>
                      Array.isArray(b) ? (
                        <ul key={i} className="list-disc space-y-1.5 pl-6 marker:text-gold">
                          {b.map((li) => (
                            <li key={li}>{li}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={i}>{b}</p>
                      )
                    )}
                  </div>
                </section>
              ))}
            </div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
