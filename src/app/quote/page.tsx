import type { Metadata } from "next";
import { Phone, Clock, ShieldCheck, Star } from "lucide-react";
import { QuoteBuilder } from "@/components/forms/QuoteBuilder";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Particles } from "@/components/ui/Particles";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Get a Free Firework Display Quote",
  description:
    "Get a free, no-obligation quote for your firework or drone display. Answer a few quick questions and we'll reply within 24 hours with a tailored price.",
  path: "/quote",
});

const points = [
  { icon: Clock, text: "Reply within 24 hours" },
  { icon: ShieldCheck, text: "£10m insured, BPA-trained" },
  { icon: Star, text: `Rated ★ ${site.rating.value}` },
];

export default function QuotePage() {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20">
      <Particles />
      <Breadcrumbs items={[{ name: "Get a Quote", path: "/quote" }]} />
      <section className="relative py-8 sm:py-12">
        <div className="container-7xl grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:pt-6">
            <p className="eyebrow mb-3">Free &amp; No-Obligation</p>
            <h1 className="text-4xl sm:text-5xl">Build Your Display Quote</h1>
            <p className="mt-4 text-white/70">
              Tell us a little about your event and our team will design the perfect show for your budget.
              It only takes a minute — no pressure, no hard sell.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-white/80">
                  <p.icon className="h-5 w-5 text-gold" /> {p.text}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-card border border-white/10 bg-smoke p-6">
              <p className="text-sm text-white/60">Prefer to talk it through?</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-1 flex items-center gap-2 font-display text-2xl text-gold">
                <Phone className="h-5 w-5" /> {site.phone}
              </a>
            </div>
          </div>

          <QuoteBuilder />
        </div>
      </section>
    </div>
  );
}
