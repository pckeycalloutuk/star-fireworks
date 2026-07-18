import { Check } from "lucide-react";
import { Button } from "./Button";

export type Package = {
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  features: string[];
  popular?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-card border p-6 sm:p-8 ${
        pkg.popular
          ? "border-gold bg-gradient-to-b from-gold/[0.08] to-transparent shadow-[0_0_40px_rgba(245,184,46,0.15)]"
          : "border-white/10 bg-smoke"
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-night">
          ★ Most Popular
        </span>
      )}
      <h3 className="text-2xl">{pkg.name}</h3>
      <p className="mt-1 text-sm text-white/60">{pkg.tagline}</p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-4xl text-gold">{pkg.price}</span>
        {pkg.priceNote && <span className="text-sm text-white/50">{pkg.priceNote}</span>}
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/80">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button
        href={pkg.ctaHref ?? "/quote"}
        variant={pkg.popular ? "solid" : "outline"}
        className="mt-8 w-full"
      >
        {pkg.ctaLabel ?? "Enquire Now"}
      </Button>
    </div>
  );
}
