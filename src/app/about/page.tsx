import Image from "next/image";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Palette,
  Clock3,
  Leaf,
  Cpu,
  Boxes,
  Music4,
  ArrowRight,
  Trophy,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { CTABand } from "@/components/ui/CTABand";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Our Story & Championship Pedigree",
  description:
    "Firing the UK's skies since 1971. Meet the championship-winning team behind our fully insured, BPA-trained firework and drone displays.",
  path: "/about",
});

const timeline = [
  {
    year: "1971",
    title: "A Spark In Yorkshire",
    text: "Founded as a family firm firing village bonfire displays across the Dales, built on a simple promise: safety and spectacle in equal measure.",
  },
  {
    year: "1980s",
    title: "Regional Growth",
    text: "Word spread. We became the go-to team for town councils and county shows throughout the North, expanding our licensed stock and crew.",
  },
  {
    year: "1990s",
    title: "Our First Championship",
    text: "Recognition on the national stage arrived with our first British firework championship title — proof that artistry, not just volume, wins skies.",
  },
  {
    year: "2000s",
    title: "Going Digital",
    text: "We adopted computerised electronic firing, unlocking frame-accurate pyromusicals choreographed to the millisecond against a client's chosen score.",
  },
  {
    year: "2010s",
    title: "Drones Take Flight",
    text: "We introduced programmable drone light shows, pairing swarms of illuminated craft with our firework finales for a wholly modern spectacle.",
  },
  {
    year: "2020s",
    title: "Nationwide & Beyond",
    text: "Today our crews fire from intimate country gardens to city-centre skylines across the UK, blending five decades of craft with cutting-edge technology.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Every decision starts with safety. Site-specific risk assessments, licensed handling and BPA-trained crews on every single booking, without exception.",
  },
  {
    icon: Palette,
    title: "Artistry",
    text: "A display is a composition, not a countdown. Our championship designers shape colour, rhythm and height into a story your audience will remember.",
  },
  {
    icon: Clock3,
    title: "Reliability",
    text: "We arrive early, communicate clearly and fire on cue. Councils and couples alike trust us to deliver the moment exactly as promised.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Lower-residue effects, responsible sourcing and thorough site clearance help us light up the night while treading lightly on the ground below.",
  },
];

const tech = [
  {
    icon: Cpu,
    title: "Digital Electronic Firing",
    text: "Computerised firing systems deliver millisecond precision, so every effect lands exactly where the design intends it.",
  },
  {
    icon: Music4,
    title: "Pyromusical Choreography",
    text: "We map each shell, mine and comet to your soundtrack, turning a display into a performance timed to the beat.",
  },
  {
    icon: Boxes,
    title: "3D Show Previews",
    text: "Before a single firework is loaded, we simulate the full sequence in 3D so you can see and refine your show in advance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero image={images.crew.src} alt={images.crew.alt}>
        <p className="eyebrow mb-3">Established {site.founded}</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">
          About {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          More than fifty years of lighting up British skies — from a Yorkshire
          family firm to a championship-winning national display company.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Get a Quote
          </Button>
          <Button href="/about/team" variant="outline" size="lg">
            Meet the Team
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      {/* Story intro */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="text-4xl sm:text-5xl">
              Half A Century Of Skyward Ambition
            </h2>
            <p className="mt-4 text-white/70">
              {site.name} began in {site.founded} with a single firing box, a
              trailer and a belief that a great display moves people. Five decades
              on, that belief still drives everything we do. We have grown from
              village bonfires into one of the UK&apos;s most trusted names in
              professional pyrotechnics — yet we remain, at heart, a team of
              craftspeople obsessed with the perfect moment.
            </p>
            <p className="mt-4 text-white/70">
              Championship titles, digital firing, drone swarms: the tools have
              changed, but the purpose has not. We design, choreograph and fire
              displays that turn a night into a memory.
            </p>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-card">
            <Image
              src={images.fireworksGold.src}
              alt={images.fireworksGold.alt}
              width={800}
              height={600}
              sizes="(max-width:1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Our Journey"
            title="From 1971 To Today"
            subline="Six milestones that shaped the company we are now."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <ol className="relative border-l border-white/15 pl-8 sm:pl-10">
              {timeline.map((item) => (
                <li key={item.year} className="relative mb-10 last:mb-0">
                  <span
                    className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-night sm:-left-[49px]"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <Reveal>
                    <span className="font-display text-2xl text-gold">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-xl text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{item.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            subline="Four principles that guide every design, every crew and every booking."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                  <v.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Tech */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="The Technology"
            title="Where Craft Meets Code"
            subline="Precision engineering behind the artistry — so the show you imagine is the show you get."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {tech.map((t) => (
              <StaggerItem key={t.title}>
                <div className="h-full rounded-card border border-white/10 bg-night p-6">
                  <t.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{t.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{t.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Championship + Safety links */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid gap-6 lg:grid-cols-2">
          <Reveal className="flex h-full flex-col rounded-card border border-gold/30 bg-smoke p-8">
            <Trophy className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-2xl text-white">Championship Pedigree</h2>
            <p className="mt-3 flex-1 text-white/70">
              Our designers have competed and won on the national stage,
              bringing competition-grade artistry to every event we fire — from a
              back-garden proposal to a stadium finale.
            </p>
            <Button href="/portfolio" variant="outline" className="mt-6 self-start">
              See Our Work <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal className="flex h-full flex-col rounded-card border border-white/10 bg-smoke p-8">
            <ShieldCheck className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-2xl text-white">Safety & Accreditation</h2>
            <p className="mt-3 flex-1 text-white/70">
              Fully insured with {site.insurance}, BPA-trained crews and full
              compliance with the Explosives Regulations 2014. Councils and
              corporate buyers can review our credentials in detail.
            </p>
            <Button href="/about/safety" variant="outline" className="mt-6 self-start">
              View Safety & Accreditation <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Team teaser */}
      <section className="relative overflow-hidden py-24">
        <Image
          src={images.crew.src}
          alt={images.crew.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-night/75" aria-hidden />
        <div className="container-7xl relative">
          <Reveal className="max-w-xl">
            <Users className="h-10 w-10 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">
              The People Behind The Pyrotechnics
            </h2>
            <p className="mt-4 text-white/80">
              Designers, riggers and BPA-trained shot-firers who live for the
              moment the first shell breaks. Get to know the crew that makes it
              happen.
            </p>
            <Button href="/about/team" className="mt-6">
              Meet the Team <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <RelatedServices hrefs={["/displays/pyromusicals", "/drone-shows", "/displays/corporate"]} />
      <CTABand />
    </>
  );
}
