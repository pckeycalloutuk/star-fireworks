import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Award,
  ShieldCheck,
  MapPin,
  PoundSterling,
  Cpu,
  Trophy,
  ArrowRight,
  ClipboardList,
  PencilRuler,
  Truck,
  Sparkles,
  Plane,
  ShoppingBag,
} from "lucide-react";
import { VideoHero } from "@/components/ui/VideoHero";
import { Button } from "@/components/ui/Button";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Gallery } from "@/components/ui/Gallery";
import { ReviewsCarousel } from "@/components/ui/ReviewsCarousel";
import { CTABand } from "@/components/ui/CTABand";
import { Newsletter } from "@/components/layout/Newsletter";
import { services } from "@/content/services";
import { reviews } from "@/content/reviews";
import { posts } from "@/content/blog";
import { images, galleryImages } from "@/config/images";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${site.name} | ${site.tagline}`,
  description:
    "Award-winning professional firework & drone displays across the UK. Weddings, corporate, Bonfire Night & pyromusicals. Fully insured, BPA-trained. Free quote in 24hrs.",
  path: "/",
});

const whyChooseUs = [
  { icon: Trophy, title: "Championship Pedigree", body: "British Championship-winning designers behind every show, bringing competition-grade artistry to your event." },
  { icon: ShieldCheck, title: "BPA Accreditation", body: "Every crew is trained to British Pyrotechnists Association standards and works to the Explosives Regulations 2014." },
  { icon: Award, title: "Safety First, Always", body: "Site-specific risk assessments, £10m insurance and meticulous planning on every single booking." },
  { icon: MapPin, title: "Nationwide Crews", body: "Based in Yorkshire, firing across the UK — from intimate gardens to city-centre skylines." },
  { icon: PoundSterling, title: "On-Budget Value", body: "Fixed, transparent quotes with no hidden extras. Maximum impact for whatever you invest." },
  { icon: Cpu, title: "Digital Choreography", body: "Computerised firing for frame-accurate pyromusicals timed perfectly to your music." },
];

const steps = [
  { icon: ClipboardList, title: "Enquire", body: "Tell us about your event, venue and vision. We'll reply within 24 hours with ideas and a quote." },
  { icon: PencilRuler, title: "Site Survey & Design", body: "We assess your site, handle the safety paperwork and design a display tailored to the moment." },
  { icon: Truck, title: "Licensed Setup", body: "Our BPA-trained crew arrives early, sets up safely and secures the firing zone." },
  { icon: Sparkles, title: "Showtime", body: "Sit back and enjoy. We fire, make the site safe and sweep it clean the next morning." },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Video hero */}
      <VideoHero>
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Professional Firework Displays Since {site.founded}</p>
          <h1 className="text-5xl leading-[0.9] text-white text-shadow-lg sm:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Breathtaking firework and drone displays designed, choreographed and fired by one of the
            UK&apos;s most trusted pyrotechnic teams.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/quote" size="lg">
              Get a Quote
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
          <TrustStrip className="mt-10 justify-start" />
        </div>
      </VideoHero>

      {/* 2. Services grid */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Displays For Every Occasion"
            subline="From the most personal wedding moment to a city-scale public spectacle, we design and fire it all."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.href}>
                <Link href={s.href} className="group block h-full overflow-hidden rounded-card border border-white/10 bg-smoke transition-colors hover:border-gold/40">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-night to-transparent" />
                    <s.icon className="absolute left-4 top-4 h-7 w-7 text-gold" aria-hidden />
                  </div>
                  <div className="p-6">
                    <h3 className="flex items-center justify-between text-xl text-white">
                      {s.title}
                      <ArrowRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                    </h3>
                    <p className="mt-2 text-sm text-white/60">{s.blurb}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 3. Award band */}
      <section className="border-y border-white/10 bg-smoke py-12">
        <div className="container-7xl">
          <Reveal className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <Trophy className="h-12 w-12 flex-shrink-0 text-gold" aria-hidden />
              <div>
                <p className="font-display text-2xl uppercase text-white">British Championship Winners</p>
                <p className="text-sm text-white/60">Recognised among the UK&apos;s finest display companies</p>
              </div>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold uppercase tracking-wide text-white/70">
              <li className="flex items-center gap-2"><Award className="h-5 w-5 text-gold" /> BPA Member</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-gold" /> {site.insurance}</li>
              <li className="flex items-center gap-2"><Cpu className="h-5 w-5 text-gold" /> Digital Firing</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. Featured weddings split */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative order-2 overflow-hidden rounded-card lg:order-1">
            <Image
              src={images.weddingSparklers.src}
              alt={images.weddingSparklers.alt}
              width={800}
              height={600}
              sizes="(max-width:1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="eyebrow mb-3">Wedding Fireworks</p>
            <h2 className="text-4xl sm:text-5xl">A Finale Worthy Of Your Big Day</h2>
            <p className="mt-4 text-white/70">
              Whether it&apos;s a surprise send-off, a sparkler tunnel or a full pyromusical fired to your
              first dance, we craft the moment your guests will never forget. Low-noise options available for
              sensitive venues.
            </p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-sm text-white/60">Packages from</span>
              <span className="font-display text-4xl text-gold">£595</span>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/displays/weddings">Explore Wedding Displays</Button>
              <Button href="/displays/wedding-packages" variant="outline">
                See Packages
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Why choose us */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading eyebrow="Why Choose Us" title="Trusted To Deliver, Every Time" />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((f) => (
              <StaggerItem key={f.title}>
                <div className="h-full rounded-card border border-white/10 bg-night p-6">
                  <f.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 6. Portfolio masonry */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Our Work"
            title="Portfolio Highlights"
            subline="A glimpse of the skies we've lit up. Tap any image to view it full-screen."
          />
          <div className="mt-12">
            <Gallery images={galleryImages.slice(0, 8)} masonry />
          </div>
          <div className="mt-10 text-center">
            <Button href="/portfolio" variant="outline" size="lg">
              View Full Portfolio <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 7. How it works */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading eyebrow="The Process" title="How It Works" subline="Four simple steps from first enquiry to the final shell." />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="relative h-full rounded-card border border-white/10 bg-night p-6">
                  <span className="font-display text-5xl text-gold/20">0{i + 1}</span>
                  <s.icon className="mt-2 h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-3 text-lg text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 8. Reviews carousel */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subline={`Rated ★ ${site.rating.value} from ${site.rating.count} reviews across weddings, corporate and public events.`}
          />
          <div className="mt-12">
            <ReviewsCarousel reviews={reviews.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* 9. Drone teaser band */}
      <section className="relative overflow-hidden py-24">
        <Image src={images.droneShow.src} alt={images.droneShow.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-night/70" />
        <div className="container-7xl relative">
          <Reveal className="max-w-xl">
            <Plane className="h-10 w-10 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Fireworks + Drones = Unforgettable</h2>
            <p className="mt-4 text-white/80">
              Add a programmable drone light show to your event — spell out names, logos and countdowns,
              then explode into a firework finale. The modern spectacle that gets everyone filming.
            </p>
            <Button href="/drone-shows" className="mt-6">
              Discover Drone Shows <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 10. Shop banner */}
      <section className="border-y border-white/10 py-12">
        <div className="container-7xl">
          <Reveal className="flex flex-col items-center justify-between gap-6 rounded-card border border-gold/30 bg-smoke p-8 md:flex-row">
            <div className="flex items-center gap-4">
              <ShoppingBag className="h-10 w-10 flex-shrink-0 text-gold" aria-hidden />
              <div>
                <h2 className="text-2xl text-white">Buy Fireworks From Our Online Store</h2>
                <p className="text-sm text-white/60">Rockets, barrages, selection boxes, low-noise ranges &amp; sparklers. Click &amp; collect available.</p>
              </div>
            </div>
            <Button href="/shop" size="lg">
              Visit The Shop
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 11. Latest blog */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading eyebrow="From The Blog" title="Guides & Inspiration" align="left" />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <StaggerItem key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block h-full overflow-hidden rounded-card border border-white/10 bg-smoke transition-colors hover:border-gold/40">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold">{p.category}</span>
                    <h3 className="mt-2 font-body text-lg font-semibold normal-case tracking-normal text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{p.excerpt}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 12. Final CTA + newsletter */}
      <CTABand />
      <section className="border-t border-white/10 bg-smoke py-12">
        <div className="container-7xl flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl text-white">Stay In The Loop</h2>
          <p className="max-w-md text-sm text-white/60">Seasonal offers, display tips and the occasional behind-the-scenes look. No spam, ever.</p>
          <Newsletter />
        </div>
      </section>
    </>
  );
}
