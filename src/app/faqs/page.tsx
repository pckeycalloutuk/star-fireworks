import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, HelpCircle } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CTABand } from "@/components/ui/CTABand";
import { Schema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { faqGroups, flatFaqs } from "@/content/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Firework Display FAQs",
  description:
    "Answers to common questions on firework display pricing, booking, safety, licensing, weather, low-noise options and our shop. Everything you need to plan with confidence.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <Schema data={faqSchema(flatFaqs)} />

      <PageHero image={images.planning.src} alt={images.planning.alt}>
        <p className="eyebrow mb-3">Help & Advice</p>
        <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          Everything you need to know about booking a professional firework or drone display — from
          pricing and safety to weather, noise and buying from our shop. Can&apos;t find your answer?
          We&apos;re only a phone call away.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Get a Quote
          </Button>
          <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="outline" size="lg">
            <Phone className="h-4 w-4" /> {site.phone}
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "FAQs", path: "/faqs" }]} />

      {/* Grouped accordions */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <div className="mx-auto max-w-3xl space-y-14">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <SectionHeading title={group.title} align="left" />
                <div className="mt-6">
                  <Accordion items={group.items} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions band */}
      <section className="border-y border-white/10 bg-smoke py-16 sm:py-20">
        <div className="container-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <HelpCircle className="mx-auto h-10 w-10 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Still Have Questions?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Our team plans displays every week and we&apos;re always happy to talk things through —
              no pressure, no jargon. Get in touch and we&apos;ll point you in the right direction.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Contact Us
              </Button>
              <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="outline" size="lg">
                <Phone className="h-4 w-4" /> {site.phone}
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-card border border-white/10 bg-night px-4 py-4 text-sm text-white/80 transition-colors hover:border-gold/40 hover:text-gold"
              >
                <Phone className="h-5 w-5 flex-shrink-0 text-gold" aria-hidden />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center justify-center gap-2 rounded-card border border-white/10 bg-night px-4 py-4 text-sm text-white/80 transition-colors hover:border-gold/40 hover:text-gold"
              >
                <Mail className="h-5 w-5 flex-shrink-0 text-gold" aria-hidden />
                <span className="truncate">{site.email}</span>
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-card border border-white/10 bg-night px-4 py-4 text-sm text-white/80 transition-colors hover:border-gold/40 hover:text-gold"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-gold" aria-hidden />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
