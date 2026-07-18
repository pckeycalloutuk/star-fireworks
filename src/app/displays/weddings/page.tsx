import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, VolumeX, Music4, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Gallery } from "@/components/ui/Gallery";
import { PackageCard, type Package } from "@/components/ui/PackageCard";
import { ReviewsCarousel } from "@/components/ui/ReviewsCarousel";
import { CTABand } from "@/components/ui/CTABand";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { Schema, serviceSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images, galleryImages } from "@/config/images";
import { reviews } from "@/content/reviews";

export const metadata: Metadata = buildMetadata({
  title: "Wedding Fireworks Displays",
  description:
    "Breathtaking wedding fireworks fired to your first dance. Low-noise options, sparkler send-offs and pyromusicals. Fully insured, UK-wide. Packages from £595.",
  path: "/displays/weddings",
});

const packages: Package[] = [
  {
    name: "Sparkle",
    price: "£595",
    priceNote: "the perfect flourish",
    tagline: "A beautiful, budget-friendly finish to the celebration.",
    features: [
      "Around 2 minutes of hand-fired fireworks",
      "A curated palette to match your colours",
      "Ideal as a surprise send-off after the speeches",
      "Low-noise option available on request",
      "BPA-trained crew, setup and clear-up",
      "Full site risk assessment & £10m insurance",
    ],
    ctaHref: "/quote",
    ctaLabel: "Enquire About Sparkle",
  },
  {
    name: "Celebration",
    price: "£995",
    priceNote: "most loved",
    tagline: "Our most popular choice — the wow moment guests expect.",
    popular: true,
    features: [
      "Around 4 minutes of digitally-fired fireworks",
      "Choreographed rise, peaks and a full finale",
      "Fired to a single track of your choosing",
      "Low-noise first half, dramatic finish option",
      "Larger calibre shells for real height and scale",
      "Coordination with your venue and photographer",
      "Full site risk assessment & £10m insurance",
    ],
    ctaHref: "/quote",
    ctaLabel: "Enquire About Celebration",
  },
  {
    name: "Showstopper",
    price: "£1,795",
    priceNote: "the full production",
    tagline: "A cinematic pyromusical your guests will never forget.",
    features: [
      "Around 6–8 minutes of premium fireworks",
      "Full pyromusical choreographed to your music",
      "Multi-position firing for width and depth",
      "Bespoke design with a 3D preview to sign off",
      "Signature effects, gold willows and ghost shells",
      "Optional sparkler send-off included",
      "Dedicated show designer & senior crew on site",
    ],
    ctaHref: "/quote",
    ctaLabel: "Enquire About Showstopper",
  },
];

const venuePoints = [
  { icon: ShieldCheck, title: "We Speak Venue", body: "We liaise directly with your coordinator, supply our RAMS and insurance certificate, and work to their firing-zone and timing requirements." },
  { icon: VolumeX, title: "Low-Noise Options", body: "For venues near livestock, neighbours or sleeping little ones, we design quieter displays that keep every ounce of the visual drama." },
  { icon: Clock, title: "Timed Around Your Day", body: "First dance, cake cut or a midnight send-off — we fire on your cue and rehearse the timing with your DJ or band." },
];

const faqs = [
  {
    q: "Will the fireworks be too loud for the venue?",
    a: "Not if you don't want them to be. We offer low-noise and quiet display designs that use soft, visual effects and minimise the loud bangs, which is ideal for venues near farmland, residential areas or with elderly guests and young children. We'll always match the design to your venue's requirements.",
  },
  {
    q: "Do you handle the licences and permissions?",
    a: "Yes. We complete a site-specific risk assessment, carry £10m public liability insurance, and provide our RAMS and certificates to your venue in advance. Our crews are trained to British Pyrotechnists Association standards and work to the Explosives Regulations 2014. You don't need to arrange anything technical yourself.",
  },
  {
    q: "When during the day is the best time to fire?",
    a: "The most popular slots are as a surprise send-off after the speeches, fired to the first dance, or at the very end of the night. Fireworks need darkness to look their best, so timing shifts with the season. We'll advise on the ideal moment when we plan your display.",
  },
  {
    q: "What happens if it rains on the day?",
    a: "Fireworks are remarkably weatherproof and light rain is rarely a problem. High winds are the only real factor, and safety always comes first. We monitor conditions closely on the day and, in the very rare event a display can't go ahead safely, we'll work with you to reschedule.",
  },
  {
    q: "How much deposit do you need and when do we pay?",
    a: "We secure your date with a deposit on booking, with the balance due before the wedding. Our quotes are fixed and fully transparent with no hidden extras. Get in touch and we'll send clear terms alongside your tailored quote.",
  },
  {
    q: "How far in advance should we book?",
    a: "Popular summer Saturdays and bank-holiday weekends book up months ahead, so the earlier the better. That said, we'll always do our best to accommodate shorter timescales, so it's worth asking even if your date is close.",
  },
];

const weddingReviews = reviews.filter((r) => r.event === "Wedding");
const weddingGallery = [
  images.weddingSparklers,
  images.firstDance,
  images.wedding,
  images.weddingVenue,
  images.fireworksGold,
  images.fireworksReflection,
  images.sparklersHands,
  images.fireworksFinale,
];

export default function WeddingsPage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Wedding Fireworks Displays",
          "Bespoke wedding fireworks and pyromusicals fired to your first dance, with low-noise options and sparkler send-offs, across the UK.",
          "/displays/weddings"
        )}
      />
      <Schema data={faqSchema(faqs)} />

      <PageHero image={images.weddingSparklers.src} alt={images.weddingSparklers.alt}>
        <p className="eyebrow mb-3">Wedding Fireworks</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">A Finale Worthy Of Your Big Day</h1>
        <p className="mt-4 max-w-xl text-white/80">
          The kiss, the vows, the first dance — and then the sky. We craft the moment your guests will still be
          talking about long after the confetti has settled.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Get a Quote
          </Button>
          <Button href="/displays/wedding-packages" variant="outline" size="lg">
            See Packages
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Displays", path: "/displays" },
          { name: "Weddings", path: "/displays/weddings" },
        ]}
      />

      {/* Emotional intro + pull quote */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">The Moment</p>
            <h2 className="text-4xl sm:text-5xl">Some Memories Deserve The Whole Sky</h2>
            <p className="mt-4 text-white/70">
              You have planned every detail — the flowers, the first look, the song you will dance to. A firework
              display is the punctuation on all of it: a shared gasp, a hundred phones raised at once, and a
              feeling nobody in the room will forget.
            </p>
            <p className="mt-4 text-white/70">
              We have lit the skies over castles, marquees, country estates and city rooftops. Whatever your venue
              and whatever your budget, we design a display around your day rather than pulling one off a shelf —
              your colours, your timing, your music, your moment.
            </p>
          </Reveal>
          <Reveal>
            <blockquote className="relative rounded-card border border-gold/30 bg-smoke p-8 sm:p-10">
              <span className="absolute -top-6 left-6 font-display text-7xl leading-none text-gold/40" aria-hidden>
                &ldquo;
              </span>
              <p className="relative text-lg text-white/90 sm:text-xl">
                Utterly magical. They fired the display to our first dance and every guest was speechless. From the
                first phone call to the final shell, the whole team was calm, professional and completely on budget.
              </p>
              <footer className="mt-6 border-l-2 border-gold pl-4">
                <p className="font-semibold text-white">Hannah &amp; James Whitfield</p>
                <p className="text-sm text-white/60">Ripley Castle, Yorkshire</p>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Three Ways To Wow"
            title="Wedding Display Packages"
            subline="Clear, fixed prices with no hidden extras. Every package includes safety paperwork, setup and clear-up as standard."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/displays/wedding-packages" variant="outline">
              Compare Packages In Detail <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Pyromusical upsell split */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative order-2 overflow-hidden rounded-card lg:order-1">
            <Image
              src={images.firstDance.src}
              alt={images.firstDance.alt}
              width={800}
              height={600}
              sizes="(max-width:1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <Music4 className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Fired To Your First Dance</h2>
            <p className="mt-4 text-white/70">
              Upgrade to a full pyromusical and we choreograph every burst frame-by-frame to your chosen song. As
              you step onto the floor, the sky moves with the music — the swell of the chorus met by a wall of gold,
              the final note punctuated by the finale. It is, quite simply, the most cinematic thing we do.
            </p>
            <Button href="/displays/pyromusicals" className="mt-6">
              Discover Pyromusicals <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Venue reassurance */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading eyebrow="Peace Of Mind" title="Kind To Your Venue, Big On Impact" />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {venuePoints.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-card border border-white/10 bg-night p-6">
                  <p.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Real Weddings"
            title="Skies We've Lit For Couples"
            subline="Tap any image to view it full-screen."
          />
          <div className="mt-12">
            <Gallery images={weddingGallery} masonry />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Happily Ever Afters"
            title="What Couples Say"
            subline="A few words from the newlyweds whose big day we helped finish with a bang."
          />
          <div className="mt-12">
            <ReviewsCarousel reviews={weddingReviews} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Sparkles className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Wedding Fireworks, Answered</h2>
            <p className="mt-4 text-white/70">
              The questions couples and coordinators ask us most. Not seeing yours? We are always happy to talk it
              through — no pressure, no hard sell.
            </p>
            <Button href="/quote" className="mt-6">
              Ask Us Anything <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <RelatedServices
        current="/displays/weddings"
        hrefs={["/displays/wedding-packages", "/displays/pyromusicals", "/displays/special-effects"]}
      />
      <CTABand
        title="Let's Design Your Wedding Finale"
        subline="Tell us your date, venue and vision. We'll reply within 24 hours with ideas and a fixed, no-obligation quote."
      />
    </>
  );
}
