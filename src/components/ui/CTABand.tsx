import { Phone } from "lucide-react";
import { Button } from "./Button";
import { Particles } from "./Particles";
import { site } from "@/config/site";
import { Reveal } from "./Reveal";

type Props = {
  title?: string;
  subline?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTABand({
  title = "Ready To Light Up Your Event?",
  subline = "Tell us about your celebration and we'll design a display to remember. Free, no-obligation quotes within 24 hours.",
  primaryLabel = "Get Your Free Quote",
  primaryHref = "/quote",
}: Props) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-ember-gradient opacity-[0.08]" aria-hidden />
      <Particles />
      <div className="container-7xl relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{subline}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="outline" size="lg">
              <Phone className="h-4 w-4" /> {site.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
