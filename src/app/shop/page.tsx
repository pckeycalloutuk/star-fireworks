import Image from "next/image";
import type { Metadata } from "next";
import {
  AlertTriangle,
  Sparkles,
  Store,
  Clock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fireworks Shop — Buy Rockets, Barrages & More",
  description:
    "Buy quality fireworks online or in store: rockets, barrages, selection boxes, low-noise ranges and sparklers. Click & collect in Harrogate. Over 18s only.",
  path: "/shop",
});

const categories = [
  {
    name: "Rockets",
    image: images.fireworksSky,
    blurb: "Single-shot showstoppers that scream skyward and break into colour. From starter rockets to hefty display-grade heads.",
  },
  {
    name: "Barrages",
    image: images.fireworksBurst,
    blurb: "Multi-shot cakes that do the hard work for you. Light one fuse and enjoy a fully choreographed sequence.",
  },
  {
    name: "Selection Boxes",
    image: images.fireworksFinale,
    blurb: "A ready-made display in a box — fountains, cakes and rockets curated to build from a gentle start to a big finish.",
  },
  {
    name: "Low Noise",
    image: images.fireworksReflection,
    blurb: "All the colour, far less bang. Perfect for gardens, younger families, pets and noise-sensitive neighbours.",
  },
  {
    name: "Sparklers",
    image: images.sparklersHands,
    blurb: "The classic finishing touch. Handheld sparklers for send-offs, celebrations and photographs to treasure.",
  },
];

export default function ShopPage() {
  return (
    <>
      <PageHero image={images.fireworksBurst.src} alt={images.fireworksBurst.alt}>
        <p className="eyebrow mb-3">The Fireworks Shop</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">
          Buy Fireworks Online & In Store
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          Hand-picked ranges from trusted manufacturers, priced for every budget.
          Shop online for delivery, or click &amp; collect from our Harrogate base.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href={site.shopUrl} size="lg">
            Shop Online <ExternalLink className="h-4 w-4" />
          </Button>
          <Button href="/quote" variant="outline" size="lg">
            Book a Pro Display
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "Shop", path: "/shop" }]} />

      {/* Age notice */}
      <section className="pt-8 sm:pt-12">
        <div className="container-7xl">
          <div className="flex items-start gap-4 rounded-card border border-gold/40 bg-gold/10 p-5 sm:items-center">
            <AlertTriangle className="h-8 w-8 flex-shrink-0 text-gold" aria-hidden />
            <p className="text-sm text-white/90 sm:text-base">
              <span className="font-display text-lg text-gold">18+ Only.</span>{" "}
              It is illegal to sell adult fireworks to anyone under 18. We operate
              a Challenge 25 policy and valid photo ID is required for collection
              and delivery. Please buy and use fireworks responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal banner */}
      <section className="pt-8 sm:pt-12">
        <div className="container-7xl">
          <Reveal className="flex flex-col items-center justify-between gap-4 rounded-card border border-white/10 bg-ember-gradient/[0.06] bg-smoke p-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 flex-shrink-0 text-gold" aria-hidden />
              <p className="text-white/90">
                <span className="font-display text-lg text-gold">In Stock Now:</span>{" "}
                Bonfire Night &amp; New Year ranges have landed — the season&apos;s
                best sellers go fast, so order early.
              </p>
            </div>
            <Button href={site.shopUrl}>
              Shop the Range <ExternalLink className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Browse By Category"
            title="Something For Every Celebration"
            subline="Not sure where to start? Every range is graded so you can build a garden display that flows from first light to grand finale."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <StaggerItem key={c.name}>
                <a
                  href={site.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-white/10 bg-smoke transition-colors hover:border-gold/40"
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
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="flex items-center justify-between text-xl text-white">
                      {c.name}
                      <ArrowRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                    </h3>
                    <p className="mt-2 text-sm text-white/60">{c.blurb}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-10 text-center">
            <Button href={site.shopUrl} size="lg">
              View the Full Online Store <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Click & collect + hours */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-card border border-white/10 bg-night p-8">
            <Store className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-2xl text-white">Click &amp; Collect</h2>
            <p className="mt-3 text-white/70">
              Order online and collect from our licensed Harrogate store, usually
              ready the same day. Our team can help you pick the right range and
              answer any safety questions in person. Photo ID is required at
              collection.
            </p>
            <p className="mt-4 text-sm text-white/60">{site.address}</p>
          </Reveal>
          <Reveal className="rounded-card border border-white/10 bg-night p-8">
            <Clock className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-2xl text-white">Opening Hours</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday – Friday</span>
                <span className="font-semibold text-white">{site.hours.monFri}</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="font-semibold text-white">{site.hours.sat}</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-white">{site.hours.sun}</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-white/60">
              Extended hours apply in the run-up to Bonfire Night and New Year —
              call {site.phone} to confirm.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <Reveal className="mx-auto max-w-3xl rounded-card border border-gold/30 bg-smoke p-8 text-center sm:p-10">
            <Sparkles className="mx-auto h-10 w-10 text-gold" aria-hidden />
            <h2 className="mt-4 text-3xl text-white">
              Want A Professional Display Instead?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Leave the setup, safety and spectacle to us. Our BPA-trained crews
              design and fire fully insured displays for weddings, corporate
              events and public occasions across the UK.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/quote" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/displays" variant="outline" size="lg">
                Explore Displays <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Big Night Coming Up?"
        subline="Whether you're stocking up for the garden or planning a headline display, we've got you covered."
        primaryLabel="Shop Fireworks Online"
        primaryHref={site.shopUrl}
      />
    </>
  );
}
