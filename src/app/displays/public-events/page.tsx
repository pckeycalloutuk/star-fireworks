import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, FileCheck2, Users, Ship, Landmark, Sparkles, ClipboardCheck } from "lucide-react";
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
import { site } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Council & National Event Displays",
  description:
    "Procurement-ready firework displays for councils and national celebrations. Full RAMS, £10m insurance and multi-agency liaison. Barge and city-centre firing.",
  path: "/displays/public-events",
});

const procurement = [
  { icon: FileCheck2, title: "Tender-Ready Documentation", body: "Method statements, risk assessments, insurance certificates and firing plans supplied in the format your procurement team needs." },
  { icon: ShieldCheck, title: "£10m Public Liability", body: "Comprehensive cover on every event, with certificates issued in advance for your records and sign-off." },
  { icon: Users, title: "Multi-Agency Liaison", body: "We coordinate with police, fire, coastguard, harbour authorities and local safety advisory groups as required." },
  { icon: ClipboardCheck, title: "Compliance & Accreditation", body: "BPA-trained crews working fully within the Explosives Regulations 2014 and to the highest industry standards." },
];

const caseStudies = [
  {
    tag: "City-Centre New Year",
    title: "Midnight Over The River, Fired From A Barge",
    body: "A city-centre New Year's Eve celebration for a crowd of thousands lining both banks. We fired from a moored barge mid-river, liaising with the harbour authority and emergency services, delivering a synchronised countdown finale visible across the whole waterfront.",
    image: images.cityDisplay,
  },
  {
    tag: "Town Bonfire Night",
    title: "Six Years Of A Sold-Out Bonfire Night",
    body: "A borough council's flagship 5th of November event, re-booked six years running. Faultless paperwork, considered crowd-management advice and a display that grows a little bolder each year — with attendance climbing to over 8,000 spectators.",
    image: images.bonfireCrowd,
  },
  {
    tag: "National Celebration",
    title: "A Nation's Moment, Lit In Unison",
    body: "Part of a coordinated national celebration, fired precisely to a broadcast time cue so our display peaked in step with events across the country. Rooftop firing positions, tight spectator distances and complete multi-agency sign-off.",
    image: images.fireworksReflection,
  },
];

const faqs = [
  {
    q: "Are you set up to work with council procurement processes?",
    a: "Yes. We regularly tender for and deliver council and public-sector events. We provide all the documentation your procurement and safety teams require — method statements, RAMS, insurance certificates and firing plans — in good time and in a clear, auditable format.",
  },
  {
    q: "What level of insurance do you carry?",
    a: `We hold ${site.insurance} public liability insurance as standard, and issue certificates in advance for your records. For larger or higher-risk events we can discuss additional cover where a specific brief calls for it.`,
  },
  {
    q: "Can you fire from a barge, rooftop or other city-centre position?",
    a: "Absolutely. Constrained urban sites are a specialism of ours. We have extensive experience firing from barges on rivers, from rooftops and from tightly-bounded city-centre positions, calculating safe fallout zones and liaising with harbour, highways and emergency services as needed.",
  },
  {
    q: "Do you handle liaison with the emergency services and safety groups?",
    a: "We do. For public events we work directly with police, fire and rescue, ambulance, coastguard and local Safety Advisory Groups, attending planning meetings and providing whatever documentation each body requires to sign off the event.",
  },
  {
    q: "How far in advance should a public event be booked?",
    a: "For anything involving procurement, multi-agency liaison or a complex site, the earlier the better — often six to twelve months ahead. That said, we're experienced at mobilising quickly when needed, so it's always worth asking about your timescale.",
  },
];

export default function PublicEventsPage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Council & National Event Firework Displays",
          "Procurement-ready firework displays for councils, city centres and national celebrations, with full documentation, insurance and multi-agency liaison across the UK.",
          "/displays/public-events"
        )}
      />
      <Schema data={faqSchema(faqs)} />

      <PageHero image={images.cityDisplay.src} alt={images.cityDisplay.alt}>
        <p className="eyebrow mb-3">Councils &amp; National Events</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">Public Displays A Whole City Can Watch</h1>
        <p className="mt-4 max-w-xl text-white/80">
          When the audience is a town, a city or a nation, you need a firework partner councils and event boards can
          trust completely. Procurement-ready, meticulously documented and proven at the highest profile.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Request A Tender Response
          </Button>
          <Button href="/about/safety" variant="outline" size="lg">
            Our Safety Standards
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Displays", path: "/displays" },
          { name: "Public Events", path: "/displays/public-events" },
        ]}
      />

      {/* Procurement intro */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Built For Buyers"
            title="The Provider Procurement Teams Prefer"
            subline="We make it easy to choose us and easy to justify the choice — with documentation, insurance and a track record that stands up to any scrutiny."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {procurement.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                  <p.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-lg text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Risk & insurance block */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <ShieldCheck className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Risk Managed, Fully Insured</h2>
            <p className="mt-4 text-white/70">
              Public events leave no room for shortcuts. Every display we deliver is underpinned by a documented
              safety case that gives councils, boards and Safety Advisory Groups complete confidence.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                `${site.insurance} public liability insurance, certificate in advance`,
                "Site-specific risk assessments and detailed method statements (RAMS)",
                "Firing plans with calculated spectator and fallout distances",
                "BPA-trained crews compliant with the Explosives Regulations 2014",
                "Full liaison with police, fire, coastguard and harbour authorities",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-white/80">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button href="/about/safety" variant="outline" className="mt-8">
              Read About Our Safety Standards <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal className="rounded-card border border-gold/30 bg-night p-8 sm:p-10">
            <Landmark className="h-9 w-9 text-gold" aria-hidden />
            <p className="mt-4 font-display text-2xl uppercase text-white">Trusted By The Public Sector</p>
            <p className="mt-4 text-white/70">
              &ldquo;We've trusted them with our town Bonfire Night for six years running. Their risk assessments and
              paperwork are faultless, the crowd management advice is invaluable and the show gets better every
              year.&rdquo;
            </p>
            <footer className="mt-6 border-l-2 border-gold pl-4">
              <p className="font-semibold text-white">Craig Donnelly</p>
              <p className="text-sm text-white/60">Harrogate Borough Council</p>
            </footer>
          </Reveal>
        </div>
      </section>

      {/* Barge / rooftop firing */}
      <section className="relative overflow-hidden py-24">
        <Image src={images.cityDisplay.src} alt={images.cityDisplay.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-night/75" />
        <div className="container-7xl relative">
          <Reveal className="max-w-xl">
            <Ship className="h-10 w-10 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">City-Centre &amp; Barge Firing</h2>
            <p className="mt-4 text-white/80">
              Tight urban sites are where experience really counts. We fire from barges on rivers, from rooftops and
              from carefully-bounded city-centre positions — calculating safe fallout zones, managing sightlines for
              huge crowds, and coordinating with harbour, highways and emergency services so a complex show goes off
              without a hitch.
            </p>
            <Button href="/quote" className="mt-6">
              Discuss A City-Centre Display <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Delivered With Distinction"
            title="Public Events We're Proud Of"
            subline="A snapshot of the high-profile, high-stakes displays we've delivered for councils and national occasions."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-card border border-white/10 bg-smoke">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cs.image.src}
                      alt={cs.image.alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-smoke to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-night">
                      {cs.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-body text-lg font-semibold normal-case tracking-normal text-white">{cs.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-white/60">{cs.body}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Sparkles className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Public Events, Answered</h2>
            <p className="mt-4 text-white/70">
              The questions councils, event boards and procurement teams ask us most. Preparing a brief or tender?
              We'll respond promptly and thoroughly.
            </p>
            <Button href="/quote" className="mt-6">
              Request A Tender Response
            </Button>
          </Reveal>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <RelatedServices
        current="/displays/public-events"
        hrefs={["/displays/bonfire-night", "/displays/corporate", "/drone-shows"]}
      />
      <CTABand
        title="Planning A Public Celebration?"
        subline="Send us your brief, date and location and we'll respond with documentation and a costed proposal your team can sign off with confidence."
        primaryLabel="Request A Proposal"
      />
    </>
  );
}
