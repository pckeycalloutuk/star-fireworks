import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Zap, Wind, PartyPopper, Snowflake, Flame, Sparkles, Layers } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CTABand } from "@/components/ui/CTABand";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { Schema, serviceSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/config/images";

export const metadata: Metadata = buildMetadata({
  title: "Special Effects & Stage Pyrotechnics",
  description:
    "Lasers, CO2 jets, confetti cannons, snow machines, stage flames and close-proximity pyro for indoor and outdoor events. Fully certified and risk-assessed, UK-wide.",
  path: "/displays/special-effects",
});

type Effect = { icon: typeof Zap; title: string; tag: "Indoor" | "Outdoor" | "Indoor & Outdoor"; body: string };

const effects: Effect[] = [
  { icon: Zap, title: "Laser Shows", tag: "Indoor & Outdoor", body: "Full-colour laser systems that carve beams and animations through the dark or paint onto a screen, atmosphere or building." },
  { icon: Wind, title: "CO2 Jets", tag: "Indoor & Outdoor", body: "Towering plumes of cryo fog that hit hard on the beat — an instant crowd-lifter for stages, clubs and reveals." },
  { icon: PartyPopper, title: "Confetti Cannons", tag: "Indoor & Outdoor", body: "Biodegradable confetti and streamers in your colours, launched to fill the air at the perfect moment." },
  { icon: Snowflake, title: "Snow Machines", tag: "Indoor & Outdoor", body: "A gentle, magical snowfall on demand — a winter-wonderland favourite for weddings and festive events." },
  { icon: Flame, title: "Stage Flames", tag: "Indoor & Outdoor", body: "Flame projectors and fire effects that throw genuine heat and drama into a performance, safely and controllably." },
  { icon: Sparkles, title: "Close-Proximity Pyro", tag: "Indoor & Outdoor", body: "Gerbs, comets, mines and indoor fountains rated to fire safely close to performers and audiences." },
];

const tagClass: Record<Effect["tag"], string> = {
  Indoor: "border-success/40 text-success",
  Outdoor: "border-gold/40 text-gold",
  "Indoor & Outdoor": "border-white/30 text-white/80",
};

const faqs = [
  {
    q: "Can these effects be used indoors?",
    a: "Yes. Everything we offer has indoor-rated options, from cold-spark fountains and close-proximity gerbs to CO2 jets, lasers, confetti and snow. Each indoor effect is chosen for the venue and comes with a space-specific risk assessment and the appropriate certification.",
  },
  {
    q: "Can I combine several effects in one show?",
    a: "Absolutely — that's where it gets exciting. We routinely blend lasers, CO2, flames, confetti and pyro into a single choreographed sequence, timed to your music or a stage cue. Mixing effects is the quickest route to a genuine wow moment.",
  },
  {
    q: "Are the effects safe around performers and guests?",
    a: "Yes. Close-proximity effects are specifically designed and rated to fire safely near people, and we calculate safe distances for every setup. Our crews are trained to British Pyrotechnists Association standards and we carry £10m public liability insurance.",
  },
  {
    q: "Is confetti and snow safe and easy to clear up?",
    a: "We use biodegradable, flame-retardant confetti and a residue-light snow fluid, and we handle the clear-up as part of our service. It's all chosen to look spectacular while being kind to your venue and easy to tidy afterwards.",
  },
  {
    q: "Do you supply effects for indoor venues with restrictions?",
    a: "We're used to working within strict venue rules, including fully indoor spaces with no traditional pyro allowed. In those cases we lean on lasers, CO2, cold-spark fountains, confetti and snow to create impact without heat or fallout. Tell us your venue and we'll advise.",
  },
];

export default function SpecialEffectsPage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Special Effects & Stage Pyrotechnics",
          "Lasers, CO2 jets, confetti cannons, snow machines, stage flames and close-proximity pyrotechnics for indoor and outdoor events across the UK.",
          "/displays/special-effects"
        )}
      />
      <Schema data={faqSchema(faqs)} />

      <PageHero image={images.laser.src} alt={images.laser.alt}>
        <p className="eyebrow mb-3">Special Effects</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">Effects That Do More Than Fireworks</h1>
        <p className="mt-4 max-w-xl text-white/80">
          Lasers, CO2, confetti, snow, flames and close-proximity pyro — indoor or out, on their own or layered into
          one jaw-dropping sequence. If you can imagine the moment, we can engineer it.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Build My Effects Package
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Displays", path: "/displays" },
          { name: "Special Effects", path: "/displays/special-effects" },
        ]}
      />

      {/* Effects grid */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="The Toolkit"
            title="Every Effect In One Place"
            subline="A full arsenal of indoor and outdoor effects, all fully certified and risk-assessed. Look for the tag to see where each one shines."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {effects.map((e) => (
              <StaggerItem key={e.title}>
                <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                  <div className="flex items-center justify-between">
                    <e.icon className="h-8 w-8 text-gold" aria-hidden />
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tagClass[e.tag]}`}>
                      {e.tag}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl uppercase text-white">{e.title}</h2>
                  <p className="mt-2 text-sm text-white/60">{e.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Mix and match feature */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative order-2 overflow-hidden rounded-card lg:order-1">
            <Image
              src={images.confetti.src}
              alt={images.confetti.alt}
              width={800}
              height={600}
              sizes="(max-width:1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <Layers className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Mix, Match &amp; Choreograph</h2>
            <p className="mt-4 text-white/70">
              The magic is in the combination. Picture a first dance where CO2 jets bloom on the chorus, cold-spark
              fountains frame the couple and confetti falls on the final note. Or a product reveal lit by lasers,
              punched home with flames and finished with a burst of streamers.
            </p>
            <p className="mt-4 text-white/70">
              We design layered sequences timed to your music or stage cues, so every effect lands exactly where it
              should. Tell us the moment you want to create and we'll build the package around it.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote">
                Build My Package <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/displays/corporate" variant="outline">
                For Corporate &amp; TV
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Indoor showcase strip */}
      <section className="relative overflow-hidden py-24">
        <Image src={images.stagePyro.src} alt={images.stagePyro.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-night/75" />
        <div className="container-7xl relative">
          <Reveal className="max-w-xl">
            <Flame className="h-10 w-10 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Impact Without Compromise, Indoors</h2>
            <p className="mt-4 text-white/80">
              No outdoor space? No problem. Cold-spark fountains, indoor-rated gerbs, CO2, lasers, confetti and snow
              deliver a genuine spectacle inside marquees, ballrooms and venues — safely, cleanly and within even the
              strictest house rules.
            </p>
            <Button href="/quote" className="mt-6">
              Plan An Indoor Show <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Sparkles className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Special Effects, Answered</h2>
            <p className="mt-4 text-white/70">
              The questions we're asked most about lasers, CO2, confetti, flames and indoor pyro. Planning something
              specific? We'll happily advise.
            </p>
            <Button href="/quote" className="mt-6">
              Get A Tailored Quote
            </Button>
          </Reveal>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <RelatedServices
        current="/displays/special-effects"
        hrefs={["/displays/corporate", "/displays/pyromusicals", "/displays/weddings"]}
      />
      <CTABand
        title="Ready To Layer On The Wow?"
        subline="Tell us your venue, moment and mood and we'll design an effects package to match — free, no-obligation quote within 24 hours."
        primaryLabel="Build My Package"
      />
    </>
  );
}
