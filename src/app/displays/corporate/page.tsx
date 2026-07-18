import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Rocket, Tv, Music, Building2, Flame, Camera, Clapperboard, Sparkles } from "lucide-react";
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
  title: "Corporate, TV & Concert Pyrotechnics",
  description:
    "Pyrotechnics for product launches, broadcast, concerts and festivals. Stage pyro, close-proximity effects and firework finales from a trusted production partner.",
  path: "/displays/corporate",
});

const capabilities = [
  { icon: Rocket, title: "Product Launches", body: "Reveal moments engineered for impact and camera — timed pyro that turns a stage cue into a headline photograph." },
  { icon: Tv, title: "Broadcast & TV", body: "Close-proximity effects for live and recorded television, delivered to schedule, brief and health-and-safety sign-off." },
  { icon: Music, title: "Concerts & Tours", body: "Stage pyro, flames and CO2 that hit on the downbeat, integrated with your production and lighting teams." },
  { icon: Building2, title: "Festivals", body: "Headline finales and nightly closers scaled for large arena and greenfield crowds, fired to a set-time cue." },
  { icon: Flame, title: "Stage Effects", body: "Flame projectors, gerbs, comets and fallout-safe indoor pyro for theatre, awards and brand experiences." },
  { icon: Camera, title: "Film & Content Shoots", body: "Repeatable, directable pyro for commercials and music videos, with the patience to nail take after take." },
];

const proof = [
  { value: "24 hrs", label: "Typical turnaround on a first-response quote" },
  { value: "40+", label: "Broadcast & branded projects a year" },
  { value: "100%", label: "Certified, insured and sign-off ready" },
];

const faqs = [
  {
    q: "Can you fire pyrotechnics indoors and on stage?",
    a: "Yes. We hold a full range of indoor-rated, low-fallout stage pyrotechnics — flames, gerbs, comets, mines and CO2 jets — designed for close proximity to performers and audiences. Every indoor effect comes with the appropriate certification and a venue-specific risk assessment.",
  },
  {
    q: "Do you work to a broadcast schedule and health-and-safety sign-off?",
    a: "We do this constantly. We're used to working to a rundown, a director's cue and a broadcaster's or venue's compliance team. We provide method statements, risk assessments and insurance documentation in advance, and our crews are experienced on live and recorded sets.",
  },
  {
    q: "Can you integrate with our lighting, sound and staging teams?",
    a: "Absolutely. We're a production partner, not just a supplier. We attend production meetings, take timecode or manual cues, and coordinate closely with your LX, audio and staging crews so the pyro lands exactly where it should in the show.",
  },
  {
    q: "How much lead time do you need for a corporate event?",
    a: "The more the better, especially for anything broadcast or with complex staging, but we're also set up to respond quickly. For straightforward brand events we can often turn things around in a matter of weeks. Get in touch with your date and brief and we'll advise.",
  },
  {
    q: "Are you fully insured for corporate and public-facing work?",
    a: "Yes — we carry £10m public liability insurance and provide certificates and full RAMS as standard. Our crews are trained to British Pyrotechnists Association standards and work to the Explosives Regulations 2014.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Corporate, TV & Concert Pyrotechnics",
          "Pyrotechnics and firework displays for product launches, broadcast, concerts and festivals, from a trusted UK production partner.",
          "/displays/corporate"
        )}
      />
      <Schema data={faqSchema(faqs)} />

      <PageHero image={images.concert.src} alt={images.concert.alt}>
        <p className="eyebrow mb-3">Corporate, TV &amp; Live Events</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">Pyrotechnics Built For The Spotlight</h1>
        <p className="mt-4 max-w-xl text-white/80">
          Product launches, broadcast, concerts and festivals — when the moment has to land on cue and look
          flawless on camera, brands and production companies call us.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Discuss Your Project
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Displays", path: "/displays" },
          { name: "Corporate & TV", path: "/displays/corporate" },
        ]}
      />

      {/* Capabilities */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Whatever The Brief Demands"
            subline="From a single reveal cue to a full festival finale, we bring the technical range and the calm professionalism the biggest events require."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                  <c.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Named-scale proof */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Proven At Scale"
            title="Trusted On The Big Ones"
            subline="Automotive launches, live broadcast entertainment, arena tours and greenfield festivals — we've fired them all, on time and on brief."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {proof.map((p) => (
              <Reveal key={p.label} className="rounded-card border border-white/10 bg-night p-8 text-center">
                <p className="font-display text-5xl text-gold">{p.value}</p>
                <p className="mt-2 text-sm text-white/60">{p.label}</p>
              </Reveal>
            ))}
          </div>
          <StaggerGroup className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Rocket, text: "Flagship automotive and tech product launches with broadcast-grade reveal moments." },
              { icon: Clapperboard, text: "Live and recorded television entertainment, working to rundowns and compliance sign-off." },
              { icon: Music, text: "Arena tours and greenfield festivals with nightly stage pyro and headline finales." },
            ].map((item) => (
              <StaggerItem key={item.text}>
                <div className="flex h-full items-start gap-4 rounded-card border border-white/10 bg-night p-6">
                  <item.icon className="h-7 w-7 flex-shrink-0 text-gold" aria-hidden />
                  <p className="text-sm text-white/70">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Production partner positioning */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative order-2 overflow-hidden rounded-card lg:order-1">
            <Image
              src={images.corporate.src}
              alt={images.corporate.alt}
              width={800}
              height={600}
              sizes="(max-width:1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="eyebrow mb-3">A Partner, Not A Supplier</p>
            <h2 className="text-4xl sm:text-5xl">We Slot Into Your Production</h2>
            <p className="mt-4 text-white/70">
              The best pyrotechnics are invisible until the moment they aren't. We work the way your production team
              works — attending planning meetings, reading the rundown, taking cues from stage management or
              timecode, and integrating cleanly with lighting, audio and staging.
            </p>
            <p className="mt-4 text-white/70">
              You get a single, accountable point of contact, documentation that satisfies any compliance team, and
              a crew that stays unflappable when the schedule moves. It's the difference between a firm that fires
              fireworks and a partner who helps deliver the show.
            </p>
            <Button href="/quote" className="mt-6">
              Talk To Our Team <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Stage pyro & close-proximity */}
      <section className="relative overflow-hidden py-24">
        <Image src={images.stagePyro.src} alt={images.stagePyro.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-night/75" />
        <div className="container-7xl relative">
          <Reveal className="max-w-xl">
            <Flame className="h-10 w-10 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Stage Pyro &amp; Close-Proximity Effects</h2>
            <p className="mt-4 text-white/80">
              Flames, gerbs, comets, mines and CO2 jets rated for indoor use and close proximity to performers and
              audiences. Perfect for awards nights, brand experiences, theatre and live music — all fully certified
              and risk-assessed for the venue.
            </p>
            <Button href="/displays/special-effects" className="mt-6">
              Explore Special Effects <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Sparkles className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Corporate Pyro, Answered</h2>
            <p className="mt-4 text-white/70">
              The questions producers, event managers and brand teams ask us most. Working to a tight brief? Get in
              touch and we'll advise quickly.
            </p>
            <Button href="/quote" className="mt-6">
              Start The Conversation
            </Button>
          </Reveal>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <RelatedServices
        current="/displays/corporate"
        hrefs={["/displays/special-effects", "/displays/pyromusicals", "/drone-shows"]}
      />
      <CTABand
        title="Let's Make Your Moment Land"
        subline="Share your brief, date and venue and we'll come back within 24 hours with ideas and a quote."
        primaryLabel="Discuss Your Project"
      />
    </>
  );
}
