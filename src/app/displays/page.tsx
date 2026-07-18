import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Heart,
  Gift,
  Flame,
  Building2,
  Landmark,
  Music4,
  Sparkles,
  Plane,
  ShieldCheck,
  Award,
  Cpu,
  MapPin,
} from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Schema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/config/images";
import { site } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Firework Displays For Every Occasion",
  description:
    "Explore our full range of professional firework displays — weddings, Bonfire Night, corporate, pyromusicals, drones and special effects. Fully insured, UK-wide.",
  path: "/displays",
});

type DisplayCard = { title: string; href: string; image: { src: string; alt: string }; blurb: string; icon: typeof Heart };

const displayCards: DisplayCard[] = [
  {
    title: "Weddings",
    href: "/displays/weddings",
    image: images.weddingSparklers,
    blurb: "Romantic displays fired to your first dance, from an intimate flourish to a full pyromusical showstopper.",
    icon: Heart,
  },
  {
    title: "Wedding Packages",
    href: "/displays/wedding-packages",
    image: images.firstDance,
    blurb: "Three clear, fixed-price packages with sparkler send-offs, choreography and add-ons to suit any budget.",
    icon: Gift,
  },
  {
    title: "Bonfire Night",
    href: "/displays/bonfire-night",
    image: images.bonfireCrowd,
    blurb: "Crowd-pleasing 5th of November displays delivered safely at any scale, from village greens to town centres.",
    icon: Flame,
  },
  {
    title: "Corporate & TV",
    href: "/displays/corporate",
    image: images.concert,
    blurb: "Product launches, concerts, festivals and broadcast pyrotechnics from a trusted production partner.",
    icon: Building2,
  },
  {
    title: "Councils & National Events",
    href: "/displays/public-events",
    image: images.cityDisplay,
    blurb: "Procurement-ready public displays with full risk assessments, insurance and multi-agency liaison.",
    icon: Landmark,
  },
  {
    title: "Pyromusicals",
    href: "/displays/pyromusicals",
    image: images.fireworksFinale,
    blurb: "Fireworks choreographed frame-by-frame to your chosen soundtrack with precision digital firing.",
    icon: Music4,
  },
  {
    title: "Special Effects",
    href: "/displays/special-effects",
    image: images.laser,
    blurb: "Lasers, CO2 jets, confetti, flames and close-proximity pyro for indoor and outdoor events.",
    icon: Sparkles,
  },
  {
    title: "Drone Shows",
    href: "/drone-shows",
    image: images.droneShow,
    blurb: "Programmable drone light shows — stunning alone or combined with fireworks for a modern spectacle.",
    icon: Plane,
  },
];

const whyChooseUs = [
  { icon: Award, title: "Championship Pedigree", body: "Competition-winning designers bring award-grade artistry to every show, whatever the size." },
  { icon: ShieldCheck, title: "Fully Insured & BPA-Trained", body: `${site.insurance} cover and British Pyrotechnists Association standards on every booking.` },
  { icon: Cpu, title: "Digital Choreography", body: "Computerised firing for frame-accurate timing and flawless, repeatable pyromusicals." },
  { icon: MapPin, title: "Nationwide Crews", body: `Based in ${site.addressParts.locality}, firing right across the UK from gardens to skylines.` },
];

export default function DisplaysHubPage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Firework Displays",
          "Professional firework and drone displays for weddings, Bonfire Night, corporate events, public celebrations and more across the UK.",
          "/displays"
        )}
      />
      <PageHero image={images.fireworksSky.src} alt={images.fireworksSky.alt}>
        <p className="eyebrow mb-3">Our Displays</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">Firework Displays For Every Occasion</h1>
        <p className="mt-4 max-w-xl text-white/80">
          One team, every kind of spectacle. From the most personal wedding moment to a city-scale public celebration,
          we design, choreograph and fire displays that people remember long after the last shell fades.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Get a Quote
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "Displays", path: "/displays" }]} />

      {/* Intro */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Where To Begin"
            title="Find The Right Display For Your Moment"
            subline="Every occasion has its own rhythm. Choose the category that fits yours and discover packages, effects and the questions worth asking before you book."
          />
        </div>
      </section>

      {/* Display grid */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayCards.map((c) => (
              <StaggerItem key={c.href}>
                <Link
                  href={c.href}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-white/10 bg-night transition-colors hover:border-gold/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={c.image.src}
                      alt={c.image.alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-night to-transparent" />
                    <c.icon className="absolute left-4 top-4 h-7 w-7 text-gold" aria-hidden />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl uppercase text-white">{c.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-white/60">{c.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Why choose us mini strip */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading eyebrow="Why Choose Us" title="The Reassurance Behind The Spectacle" />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((f) => (
              <StaggerItem key={f.title}>
                <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                  <f.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-lg text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-10 text-center">
            <Button href="/about/safety" variant="outline">
              Read About Our Safety Standards <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
