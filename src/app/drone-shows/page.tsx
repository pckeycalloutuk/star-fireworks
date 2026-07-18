import Image from "next/image";
import type { Metadata } from "next";
import {
  Plane,
  Sparkles,
  Heart,
  Music4,
  Building2,
  Landmark,
  Share2,
  ShieldCheck,
  MonitorPlay,
  PencilRuler,
  CheckCircle2,
  Users,
  Tv,
  Trophy,
  Cpu,
} from "lucide-react";
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
  title: "Drone Light Shows",
  description:
    "Programmable drone light shows across the UK, stunning alone or fired with pyrotechnics. CAA-licensed, insured and built to sell tickets and go viral.",
  path: "/drone-shows",
});

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    body: "Spell out your names, a shared date or a glowing heart above the venue, then melt into a firework send-off. An unrepeatable moment your guests will film and share for years.",
  },
  {
    icon: Music4,
    title: "Festivals",
    body: "A headline-worthy aerial finale that lifts your line-up and gives audiences a reason to stay to the very last act — and to post about it all the way home.",
  },
  {
    icon: Building2,
    title: "Corporate",
    body: "Launch a product, animate a logo or count down to a milestone in the sky. Precision-choreographed brand storytelling that looks extraordinary on camera.",
  },
  {
    icon: Landmark,
    title: "Councils & Public Events",
    body: "A modern, low-fallout centrepiece for town celebrations, switch-ons and civic milestones — fully risk-assessed and delivered with council-grade paperwork.",
  },
];

const pyroDronePoints = [
  {
    icon: Sparkles,
    title: "Sparks From The Sky",
    body: "Purpose-built drones carry CAA-approved pyrotechnic gerbs that rain gold and silver comet trails mid-flight — an effect no ground-based display can replicate.",
  },
  {
    icon: Share2,
    title: "Built To Be Shared",
    body: "Animated shapes, cascading sparks and firework finales are engineered for the phone screen. Every guest becomes a broadcaster, extending your reach far beyond the field.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & Controlled",
    body: "Pyro drones are flown by qualified pilots to strict safety distances, with each ignition sequenced by computer. Spectacular to watch, meticulously managed behind the scenes.",
  },
];

const designSteps = [
  {
    title: "Brief & Concept",
    body: "We start with your story — the names, logos, colours and moments that matter — and shape them into a creative concept and flight-time proposal.",
  },
  {
    title: "3D Storyboard",
    body: "Our animators build every frame in software, sequencing hundreds of drones into your shapes and transitions across a simulated night sky.",
  },
  {
    title: "Preview & Sign-Off",
    body: "You receive a rendered 3D preview video of the whole show. Refine the choreography, timing and finale until it is exactly right, then approve it.",
  },
  {
    title: "Airspace & Approvals",
    body: "We handle the CAA permissions, NOTAMs, risk assessments and site survey — the technical groundwork that makes a safe, legal flight possible.",
  },
  {
    title: "Show Night",
    body: "Our crew arrives early, calibrates the fleet by GPS and flies the show to the frame, blending drones and pyrotechnics into one seamless spectacle.",
  },
];

const collaborate = [
  {
    icon: Users,
    title: "Event Producers",
    body: "A dependable aerial supplier for large-scale productions, with the insurance, paperwork and rehearsal discipline your programme demands.",
  },
  {
    icon: Music4,
    title: "Festivals",
    body: "White-label finales that become part of your brand. We build the creative around your identity and headline moments.",
  },
  {
    icon: Tv,
    title: "TV & Broadcast",
    body: "Camera-ready choreography timed to your run of show, delivered by a crew used to working around directors, cues and live transmission.",
  },
  {
    icon: Landmark,
    title: "Tenders & Bids",
    body: "Strengthen a public-event bid with a costed, compliant drone and pyrotechnic package and a partner who understands local-authority requirements.",
  },
];

const galleryImages = [
  images.droneShow,
  images.drone,
  images.fireworksFinale,
  images.fireworksSky,
  images.cityDisplay,
  images.fireworksGold,
  images.fireworksReflection,
  images.fireworksBurst,
];

const faqs = [
  {
    q: "What happens if it is windy or wet on the night?",
    a: "Drones are more weather-sensitive than fireworks. Light rain is usually fine, but strong or gusting wind is the deciding factor as it affects flight stability and safety margins. We monitor forecasts closely in the final days and make the call on the night, always prioritising safety. If we have to stand the fleet down, we reschedule at no extra cost.",
  },
  {
    q: "Do you need airspace permission and a CAA licence?",
    a: "Yes. Every show is flown under the appropriate Civil Aviation Authority permissions with qualified pilots, and we file NOTAMs and liaise with local air traffic where required. Managing airspace, exclusion zones and approvals is part of every booking — you don't need to arrange anything yourself.",
  },
  {
    q: "How does the cost compare to a firework display?",
    a: "Drone shows carry a higher entry cost than fireworks because of the fleet, the pilots and the bespoke animation and approvals for each performance. As a guide, meaningful drone shows typically start in the low thousands and scale with fleet size and flight time. Many clients get the best value by combining a shorter drone sequence with fireworks. We'll always quote transparently.",
  },
  {
    q: "Can you combine drones with fireworks?",
    a: "Absolutely — it's what we do best. A drone sequence can spell out a message or animate a logo, then hand over to a pyromusical finale for a genuine crescendo. We also fly pyro drones that emit sparks in flight, blurring the line between the two disciplines into one show.",
  },
  {
    q: "Can a drone show be flown indoors?",
    a: "Small indoor micro-drone shows are possible in large arenas and halls with sufficient ceiling height and the right safety measures, though the scale is naturally more intimate than an outdoor flight. Tell us about your venue and we'll advise honestly on what will work.",
  },
];

export default function DroneShowsPage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Drone Light Shows",
          "Programmable drone light shows across the UK, delivered alone or combined with pyrotechnics. CAA-licensed pilots, full insurance and bespoke 3D-previewed choreography.",
          "/drone-shows"
        )}
      />
      <Schema data={faqSchema(faqs)} />

      <PageHero image={images.droneShow.src} alt={images.droneShow.alt}>
        <p className="eyebrow mb-3">Drones + Pyrotechnics</p>
        <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Drone Light Shows</h1>
        <p className="mt-4 max-w-xl text-white/80">
          Hundreds of luminous drones choreographed into your names, logos and countdowns — then
          detonated into a firework finale. The modern spectacle that sells tickets and gets every
          phone in the crowd filming.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Get a Quote
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "Drone Shows", path: "/drone-shows" }]} />

      {/* Intro */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">A Perfect Match</p>
            <h2 className="text-4xl sm:text-5xl">Drones And Fireworks Belong Together</h2>
            <p className="mt-4 text-white/70">
              A drone light show paints the sky with programmable precision — shapes, words and
              animations that hold in the air and dissolve on cue. Fireworks bring the raw energy,
              colour and thunder that a screen can never quite capture. Fly them as one production
              and you get the best of both: an emotional, legible story followed by a heart-in-mouth
              crescendo.
            </p>
            <p className="mt-4 text-white/70">
              It's more than a pretty ending. A bespoke aerial show is a genuine draw — a reason for
              audiences to buy a ticket, stay to the finale and share the footage far and wide. For
              event organisers, that means stronger sales, longer dwell time and a marketing asset
              that keeps working long after the last drone has landed.
            </p>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-card">
            <Image
              src={images.drone.src}
              alt={images.drone.alt}
              width={800}
              height={600}
              sizes="(max-width:1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Event types */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Where They Shine"
            title="Drone Shows For All Events"
            subline="From the most personal wedding moment to a city-scale civic celebration, a drone show scales to the occasion."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {eventTypes.map((e) => (
              <StaggerItem key={e.title}>
                <div className="h-full rounded-card border border-white/10 bg-night p-6">
                  <e.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{e.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{e.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Pyro drones */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Next-Level Spectacle"
            title="Pyro Drones"
            subline="CAA-licensed pyrotechnics flown from the drones themselves — a shareable, one-of-a-kind effect that stops a crowd in its tracks."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pyroDronePoints.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                  <p.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-10 rounded-card border border-gold/30 bg-smoke p-6 sm:p-8">
            <p className="text-white/80">
              Pyro drones carry certified gerbs that spray sparks as they fly, so the light show and
              the pyrotechnics become a single, weaving performance rather than two separate acts.
              It's the effect that turns a great show into unmissable content — the kind audiences
              reach for their phones to capture and can't help but share.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3D preview process */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="How We Build It"
            title="The 3D Preview Design Process"
            subline="You see your show before a single drone leaves the ground. Nothing is left to chance."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {designSteps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="relative h-full rounded-card border border-white/10 bg-night p-6">
                  <span className="font-display text-5xl text-gold/20">0{i + 1}</span>
                  <h3 className="mt-2 text-lg text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-10 flex flex-col items-start gap-4 rounded-card border border-white/10 bg-night p-6 sm:flex-row sm:items-center sm:gap-6">
            <MonitorPlay className="h-10 w-10 flex-shrink-0 text-gold" aria-hidden />
            <p className="text-white/70">
              Every commission includes a rendered 3D preview so you can approve the choreography,
              timings and finale with total confidence — the same tool our designers use to fly the
              show to the frame.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Collaborate B2B */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <p className="eyebrow mb-3">B2B Partnerships</p>
              <h2 className="text-4xl sm:text-5xl">Collaborate With Us</h2>
              <p className="mt-4 text-white/70">
                We partner with the people who make big events happen. Whether you're producing a
                festival, curating a broadcast moment or assembling a competitive tender, we bring
                the aerial spectacle, the licensing and the reliability to match your ambition.
              </p>
              <p className="mt-4 text-white/70">
                Trained crew, full insurance, rehearsed choreography and camera-ready delivery — with
                a single, accountable point of contact from brief to show night.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Start a Conversation
                </Button>
                <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="outline" size="lg">
                  Call {site.phone}
                </Button>
              </div>
            </Reveal>
            <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {collaborate.map((c) => (
                <StaggerItem key={c.title}>
                  <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                    <c.icon className="h-8 w-8 text-gold" aria-hidden />
                    <h3 className="mt-4 text-lg text-white">{c.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{c.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <Reveal className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: site.insurance },
              { icon: Cpu, label: "CAA-Licensed Pilots" },
              { icon: Trophy, label: "Championship-Winning Design" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-card border border-white/10 bg-smoke px-5 py-4"
              >
                <b.icon className="h-6 w-6 flex-shrink-0 text-gold" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  {b.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="Drones Meet Fireworks"
            subline="A glimpse of the skies we've painted. Tap any image to view it full-screen."
          />
          <div className="mt-12">
            <Gallery images={galleryImages} masonry />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading eyebrow="Good To Know" title="Drone Show FAQs" align="left" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Accordion items={faqs} />
            <Reveal className="rounded-card border border-white/10 bg-smoke p-6">
              <h3 className="text-xl text-white">Still deciding?</h3>
              <p className="mt-3 text-sm text-white/60">
                Not sure whether a pure drone show, a firework display or a combined production is
                right for your event? Tell us your date, venue and vision and we'll recommend the
                approach that delivers the most impact for your budget.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {["Free, no-obligation advice", "Rendered 3D preview before you commit", "CAA approvals handled for you"].map(
                  (li) => (
                    <li key={li} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden />
                      {li}
                    </li>
                  )
                )}
              </ul>
              <Button href="/quote" className="mt-6 w-full sm:w-auto">
                <Plane className="h-4 w-4" /> Enquire Now
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <RelatedServices
        hrefs={["/displays/pyromusicals", "/displays/corporate", "/displays/public-events"]}
      />
      <CTABand
        title="Ready To Light Up The Sky?"
        subline="Combine drones and fireworks into one unforgettable show. Free, no-obligation quotes within 24 hours."
      />
    </>
  );
}
