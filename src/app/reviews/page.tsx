import type { Metadata } from "next";
import { Star, Quote, BadgeCheck, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Schema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { reviews } from "@/content/reviews";

export const metadata: Metadata = buildMetadata({
  title: "Firework Display Reviews & Testimonials",
  description: `Read verified reviews of our firework and drone displays. Rated ${site.rating.value} from ${site.rating.count} clients across weddings, corporate and public events.`,
  path: "/reviews",
});

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
  })),
};

const badges = [
  { label: "Google Reviews", value: "4.9" },
  { label: "Trustpilot", value: "4.9" },
  { label: "Facebook", value: "5.0" },
];

export default function ReviewsPage() {
  return (
    <>
      <Schema data={reviewSchema} />

      <PageHero image={images.fireworksReflection.src} alt={images.fireworksReflection.alt}>
        <p className="eyebrow mb-3">Client Testimonials</p>
        <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl">What Our Clients Say</h1>
        <div
          className="mt-5 flex flex-wrap items-center gap-3"
          aria-label={`Rated ${site.rating.value} out of 5 from ${site.rating.count} reviews`}
        >
          <span className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-gold text-gold" aria-hidden />
            ))}
          </span>
          <span className="font-display text-3xl text-white">{site.rating.value}</span>
          <span className="text-white/70">from {site.rating.count} reviews</span>
        </div>
        <p className="mt-4 max-w-xl text-white/80">
          Weddings, corporate launches, festivals and civic celebrations — here&apos;s what people say
          after we&apos;ve lit up their night. Every review is from a real, booked client.
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

      <Breadcrumbs items={[{ name: "Reviews", path: "/reviews" }]} />

      {/* Badge strip */}
      <section className="border-b border-white/10 bg-smoke py-8">
        <div className="container-7xl">
          <Reveal className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-4">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-night px-5 py-3"
              >
                <span className="text-sm font-semibold text-white">{b.label}</span>
                <span className="flex items-center gap-1 text-sm font-semibold text-gold">
                  <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
                  {b.value}
                </span>
              </div>
            ))}
            <span className="flex items-center gap-2 text-sm text-white/60">
              <BadgeCheck className="h-5 w-5 text-success" aria-hidden />
              Verified customer reviews
            </span>
          </Reveal>
        </div>
      </section>

      {/* Featured pull quote */}
      <section className="py-16 sm:py-20">
        <div className="container-7xl">
          <Reveal className="mx-auto max-w-3xl rounded-card border border-gold/30 bg-smoke p-8 text-center sm:p-10">
            <Quote className="mx-auto h-10 w-10 text-gold/50" aria-hidden />
            <p className="mt-4 text-xl text-white/90 sm:text-2xl">
              &ldquo;{reviews[0].text}&rdquo;
            </p>
            <p className="mt-6 font-semibold text-white">{reviews[0].name}</p>
            <p className="text-sm text-white/60">
              {reviews[0].event} · {reviews[0].location}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Review wall */}
      <section className="pb-16 sm:pb-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="The Full Wall"
            title="Every Review, In Full"
            subline={`All ${reviews.length} of the testimonials below are from clients we've fired displays for across the UK.`}
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <StaggerItem key={r.name + r.location}>
                <ReviewCard review={r} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Trust reassurance */}
      <section className="border-y border-white/10 bg-smoke py-12">
        <div className="container-7xl">
          <Reveal className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-10 w-10 flex-shrink-0 text-gold" aria-hidden />
              <div>
                <p className="font-display text-2xl uppercase text-white">
                  Trusted Since {site.founded}
                </p>
                <p className="text-sm text-white/60">
                  Fully insured, BPA-trained and rated {site.rating.value} by {site.rating.count}{" "}
                  clients.
                </p>
              </div>
            </div>
            <Button href="/quote" size="lg">
              Join Our Happy Clients
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Your Review Could Be Next"
        subline="Let's create the display your guests will still be talking about months later. Free, no-obligation quotes within 24 hours."
      />
    </>
  );
}
