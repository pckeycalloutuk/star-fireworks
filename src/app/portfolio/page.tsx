"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Gallery } from "@/components/ui/Gallery";
import { CTABand } from "@/components/ui/CTABand";
import { images, type Img } from "@/config/images";
import { site } from "@/config/site";

type GalleryItem = Img & { category: string };

const categories = ["All", "Weddings", "Bonfire", "Corporate", "Drone", "TV & Events"] as const;

const items: GalleryItem[] = [
  { ...images.weddingSparklers, category: "Weddings" },
  { ...images.wedding, category: "Weddings" },
  { ...images.firstDance, category: "Weddings" },
  { ...images.weddingVenue, category: "Weddings" },
  { ...images.bonfire, category: "Bonfire" },
  { ...images.bonfireCrowd, category: "Bonfire" },
  { ...images.fireworksReflection, category: "Bonfire" },
  { ...images.corporate, category: "Corporate" },
  { ...images.cityDisplay, category: "Corporate" },
  { ...images.fireworksGold, category: "Corporate" },
  { ...images.drone, category: "Drone" },
  { ...images.droneShow, category: "Drone" },
  { ...images.fireworksSky, category: "Drone" },
  { ...images.concert, category: "TV & Events" },
  { ...images.stagePyro, category: "TV & Events" },
  { ...images.confetti, category: "TV & Events" },
  { ...images.laser, category: "TV & Events" },
  { ...images.fireworksFinale, category: "TV & Events" },
  { ...images.fireworksBurst, category: "TV & Events" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <PageHero image={images.fireworksFinale.src} alt={images.fireworksFinale.alt}>
        <p className="eyebrow mb-3">Our Work</p>
        <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl">Firework Display Portfolio</h1>
        <p className="mt-4 max-w-xl text-white/80">
          Half a century of skies lit up across the UK — weddings, Bonfire Night, corporate launches,
          festivals and broadcast events. Filter by occasion and tap any image to view it full-screen.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Get a Quote
          </Button>
          <Button href="/displays/weddings" variant="outline" size="lg">
            Explore Displays
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "Portfolio", path: "/portfolio" }]} />

      {/* Filter + gallery */}
      <section className="py-12 sm:py-16">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Browse"
            title="Explore Our Displays"
            subline={`Rated ★ ${site.rating.value} from ${site.rating.count} reviews. Every image below is a real show designed and fired by our team.`}
          />

          {/* Sticky filter bar */}
          <div className="sticky top-16 z-20 -mx-4 mt-10 border-y border-white/10 bg-night/90 px-4 py-3 backdrop-blur sm:top-20">
            <div
              className="flex gap-2 overflow-x-auto pb-1"
              role="tablist"
              aria-label="Filter portfolio by category"
            >
              {categories.map((c) => {
                const isActive = c === active;
                return (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(c)}
                    className={`min-h-[44px] flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isActive
                        ? "bg-gold text-night"
                        : "border border-white/20 text-white/70 hover:border-gold hover:text-gold"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-sm text-white/50" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? "display" : "displays"}
            {active !== "All" ? ` in ${active}` : ""}.
          </p>

          <div className="mt-6">
            {/* Array identity changes on filter, remounting the Gallery lightbox state */}
            <Gallery images={filtered} masonry />
          </div>
        </div>
      </section>

      {/* Prominent CTA */}
      <section className="border-y border-white/10 bg-smoke py-12">
        <div className="container-7xl">
          <Reveal className="flex flex-col items-center justify-between gap-6 rounded-card border border-gold/30 bg-night p-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl text-white sm:text-3xl">Picture Your Event In These Skies</h2>
              <p className="mt-2 text-sm text-white/60">
                Every display starts with a conversation. Tell us your date, venue and vision and
                we&apos;ll design something unforgettable.
              </p>
            </div>
            <Button href="/quote" size="lg" className="flex-shrink-0">
              Get Your Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
