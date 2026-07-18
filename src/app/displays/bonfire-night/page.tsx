import type { Metadata } from "next";
import { ArrowRight, CalendarClock, Flame, Users, ShieldCheck, Sparkles, Megaphone, Truck } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Gallery } from "@/components/ui/Gallery";
import { CTABand } from "@/components/ui/CTABand";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { Schema, serviceSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/config/images";
import { site } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Bonfire Night Firework Displays",
  description:
    "Professional Bonfire Night firework displays for the 5th of November, at any scale. Crowd-tested, fully insured and BPA-trained. November dates book out early.",
  path: "/displays/bonfire-night",
});

const included = [
  { icon: Flame, title: "Bespoke Display Design", body: "A show scaled to your site, crowd size and budget — from a village green to a stadium-sized town centre event." },
  { icon: ShieldCheck, title: "All Safety Paperwork", body: "Site-specific risk assessments, RAMS, firing plans and £10m public liability insurance handled for you." },
  { icon: Megaphone, title: "Crowd Management Advice", body: "Guidance on spectator distances, viewing areas and stewarding so your event runs safely and smoothly." },
  { icon: Truck, title: "Full Crew & Clear-Up", body: "BPA-trained crew, professional firing, and a thorough site sweep the following morning. You just enjoy the night." },
];

const stats = [
  { value: "8,000+", label: "Spectators at our largest annual display" },
  { value: "50+", label: "Public displays fired every year" },
  { value: "50+", label: "Years lighting up the 5th of November" },
  { value: "£10m", label: "Public liability insurance on every event" },
];

const faqs = [
  {
    q: "How early do we need to book for Bonfire Night?",
    a: "Early November is our single busiest period and popular dates around the 5th genuinely do sell out by late summer. If you're planning a display for this year, enquire as soon as you can — many organisers book their date twelve months in advance to guarantee it.",
  },
  {
    q: "Can you cater for large public crowds?",
    a: "Yes. We regularly design and fire displays for crowds from a few hundred up to several thousand spectators. We advise on safety distances, viewing areas and stewarding, and scale the fireworks so they read beautifully from across a large field or town centre.",
  },
  {
    q: "Do you provide the safety documentation councils and venues ask for?",
    a: `Absolutely. Every display comes with a site-specific risk assessment, RAMS, a firing plan and our ${site.insurance} certificate. Our crews are trained to British Pyrotechnists Association standards and work to the Explosives Regulations 2014, so your paperwork is watertight.`,
  },
  {
    q: "What happens if the weather turns on the night?",
    a: "Fireworks handle rain well, so a wet evening is rarely an issue. Strong wind is the only real safety factor, and we monitor conditions closely on the day. In the very rare event a display can't go ahead safely, we'll work with you on the best course of action.",
  },
  {
    q: "Can you include a bonfire and other attractions?",
    a: "We focus on the pyrotechnics, but we're happy to work alongside your bonfire, funfair, food stalls and PA provider, coordinating timings so the whole event flows. We'll fit our firing window neatly around your running order.",
  },
  {
    q: "Do you offer lower-noise displays for residential areas?",
    a: "Yes. Where a site is close to housing, livestock or a hospital, we can design a quieter display that keeps the visual spectacle while reducing the loudest effects. Just let us know the location and we'll advise on the best approach.",
  },
];

const bonfireGallery = [
  images.bonfireCrowd,
  images.bonfire,
  images.fireworksBurst,
  images.fireworksSky,
  images.fireworksGold,
  images.fireworksReflection,
];

export default function BonfireNightPage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Bonfire Night Firework Displays",
          "Professional Bonfire Night firework displays for public events on and around the 5th of November, at any scale, across the UK.",
          "/displays/bonfire-night"
        )}
      />
      <Schema data={faqSchema(faqs)} />

      <PageHero image={images.bonfireCrowd.src} alt={images.bonfireCrowd.alt}>
        <p className="eyebrow mb-3">The 5th Of November</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">Bonfire Night Displays That Draw A Crowd</h1>
        <p className="mt-4 max-w-xl text-white/80">
          The biggest night in the fireworks calendar deserves a display to match. We deliver safe, spectacular
          Bonfire Night shows at every scale — and we've been doing it for over half a century.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Check Availability
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Displays", path: "/displays" },
          { name: "Bonfire Night", path: "/displays/bonfire-night" },
        ]}
      />

      {/* Urgency band */}
      <section className="border-y border-gold/30 bg-gold/[0.06] py-8">
        <div className="container-7xl">
          <Reveal className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:text-left">
            <CalendarClock className="h-10 w-10 flex-shrink-0 text-gold" aria-hidden />
            <p className="text-lg text-white/90">
              <span className="font-semibold text-white">November dates book out by August.</span> The most popular
              slots around the 5th are claimed a year ahead — enquire early to secure yours.
            </p>
            <Button href="/quote" className="flex-shrink-0">
              Secure Your Date
            </Button>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything Handled, End To End"
            subline="Organising a public display shouldn't mean drowning in logistics. We take care of the complicated bits so you can focus on the night itself."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((f) => (
              <StaggerItem key={f.title}>
                <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                  <f.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-lg text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Crowd-scale proof */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Crowd-Tested"
            title="Built For The Big Night"
            subline="Bonfire Night is our specialism, and the numbers speak for themselves."
          />
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="h-full rounded-card border border-white/10 bg-night p-6 text-center">
                  <p className="font-display text-4xl text-gold sm:text-5xl">{s.value}</p>
                  <p className="mt-2 text-sm text-white/60">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Safety & licensing */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Users className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Safety That Stands Up To Scrutiny</h2>
            <p className="mt-4 text-white/70">
              Public events carry real responsibility, and organisers, councils and venues need to know their
              provider takes it seriously. We do. Every Bonfire Night display is underpinned by rigorous planning
              and documentation that meets the standards expected of a professional operator.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "British Pyrotechnists Association (BPA) trained crews",
                `${site.insurance} public liability insurance`,
                "Site-specific risk assessments and RAMS for every event",
                "Detailed firing plans and spectator-distance calculations",
                "Compliance with the Explosives Regulations 2014",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/80">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button href="/about/safety" variant="outline" className="mt-8">
              Read About Our Safety Standards <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal className="rounded-card border border-white/10 bg-smoke p-8 sm:p-10">
            <p className="font-display text-2xl uppercase text-white">Our Safety Promise</p>
            <p className="mt-4 text-white/70">
              We have never compromised on safety in over fifty years of firing, and we never will. If conditions
              aren't right, we say so — because a display is only ever a success when everyone goes home safely.
            </p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-sm text-white/60">Trusted by councils &amp; organisers since</span>
              <span className="font-display text-4xl text-gold">{site.founded}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading eyebrow="Bonfire Night Gallery" title="Nights We've Lit Up" subline="Tap any image to view it full-screen." />
          <div className="mt-12">
            <Gallery images={bonfireGallery} masonry />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Sparkles className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Bonfire Night, Answered</h2>
            <p className="mt-4 text-white/70">
              The questions event organisers ask us most about booking a Bonfire Night display. Still wondering
              something? Get in touch and we'll happily talk it through.
            </p>
            <Button href="/quote" className="mt-6">
              Enquire About Your Event
            </Button>
          </Reveal>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <RelatedServices
        current="/displays/bonfire-night"
        hrefs={["/displays/public-events", "/displays/corporate", "/drone-shows"]}
      />
      <CTABand
        title="Secure Your Bonfire Night Date"
        subline="November fills fast. Tell us your date and location and we'll confirm availability with a fixed quote within 24 hours."
        primaryLabel="Check Availability"
      />
    </>
  );
}
