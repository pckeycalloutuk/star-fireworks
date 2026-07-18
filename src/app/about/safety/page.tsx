import type { Metadata } from "next";
import {
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Warehouse,
  CloudRain,
  Wind,
  ClipboardCheck,
  FileText,
  ArrowRight,
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
  title: "Safety & Accreditation — Fully Insured & BPA-Trained",
  description:
    "BPA accreditation, £10m public liability insurance, Explosives Regulations 2014 compliance and full RAMS. The trusted choice for councils and corporate buyers.",
  path: "/about/safety",
});

const credentials = [
  {
    icon: BadgeCheck,
    title: "BPA Accreditation",
    text: "We are members of the British Pyrotechnists Association, and every firer is trained and assessed to BPA standards. Membership is our commitment to the highest professional benchmarks in the industry.",
  },
  {
    icon: ShieldCheck,
    title: `${site.insurance} Insurance`,
    text: "We carry £10m public liability insurance on every booking. Certificates are issued on request and named-interest endorsements can be arranged for venues, councils and event organisers.",
  },
  {
    icon: FileCheck,
    title: "Explosives Regulations 2014",
    text: "All storage, transport, handling and firing is fully compliant with the Explosives Regulations 2014 and associated ACOP guidance, with competent-person oversight throughout.",
  },
  {
    icon: Warehouse,
    title: "Licensed Explosives Storage",
    text: "Fireworks are held in licensed, alarmed and inspected explosives stores. Stock is tracked from delivery to firing, and unused product is returned to secure storage the same night.",
  },
];

const ramsSteps = [
  {
    title: "Site Survey",
    text: "We assess the firing site, spectator positions, fallout zones, access and hazards — in person or via detailed plans for out-of-area events.",
  },
  {
    title: "Risk Assessment",
    text: "A site-specific risk assessment identifies every foreseeable hazard and sets the control measures, safety distances and exclusion zones for the show.",
  },
  {
    title: "Method Statement",
    text: "A written method statement documents exactly how the display will be set up, fired and made safe, and who is responsible for each stage.",
  },
  {
    title: "Documentation Pack",
    text: "Your RAMS, insurance certificate and product details are shared ahead of the event, ready for council licensing, venue sign-off and SAG submission.",
  },
  {
    title: "On-Site Briefing",
    text: "Before firing, the crew runs a safety briefing, confirms the exclusion zone is clear and holds the show until every control measure is in place.",
  },
];

const weatherSteps = [
  {
    icon: Wind,
    title: "Wind Monitoring",
    text: "We track wind speed and direction against the fallout zone throughout setup and up to the firing window, using on-site anemometer readings.",
  },
  {
    icon: CloudRain,
    title: "Decision Thresholds",
    text: "Displays are held or amended if wind exceeds safe limits for the calibre in use, or if conditions would carry debris toward spectators or property.",
  },
  {
    icon: ClipboardCheck,
    title: "Postponement Policy",
    text: "Safety always outranks the schedule. Where conditions are unsafe, we postpone in agreement with you and re-fire at the earliest safe opportunity.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero image={images.crew.src} alt={images.crew.alt}>
        <p className="eyebrow mb-3">Safety First, Always</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">
          Safety & Accreditation
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          The credentials, insurance and processes that make {site.name} the
          trusted choice for councils, venues and corporate event teams across
          the UK.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/contact" size="lg">
            Request Our Certificates
          </Button>
          <Button href="/quote" variant="outline" size="lg">
            Get a Quote
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "About", path: "/about" },
          { name: "Safety & Accreditation", path: "/about/safety" },
        ]}
      />

      {/* Credentials */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Accreditation & Cover"
            title="Credentials You Can Verify"
            subline="No box-ticking. Every claim below is backed by documentation we're happy to share before you commit."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {credentials.map((c) => (
              <StaggerItem key={c.title}>
                <div className="flex h-full gap-4 rounded-card border border-white/10 bg-smoke p-6">
                  <c.icon className="h-8 w-8 flex-shrink-0 text-gold" aria-hidden />
                  <div>
                    <h2 className="text-xl text-white">{c.title}</h2>
                    <p className="mt-2 text-sm text-white/60">{c.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* RAMS */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title="Risk Assessment & Method Statement"
            subline="Every display follows the same rigorous RAMS process — the documentation councils and venues need, prepared as standard."
          />
          <ol className="mt-12 space-y-4">
            {ramsSteps.map((step, i) => (
              <li key={step.title}>
                <Reveal className="flex gap-5 rounded-card border border-white/10 bg-night p-6">
                  <span className="font-display text-4xl text-gold/40" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Weather */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Weather Protocols"
            title="A Clear Plan For British Skies"
            subline="Weather rarely stops a professional display — but our protocols mean it never compromises one either."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {weatherSteps.map((w) => (
              <StaggerItem key={w.title}>
                <div className="h-full rounded-card border border-white/10 bg-smoke p-6">
                  <w.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{w.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Documents CTA */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <Reveal className="mx-auto max-w-3xl rounded-card border border-gold/30 bg-night p-8 text-center sm:p-10">
            <FileText className="mx-auto h-10 w-10 text-gold" aria-hidden />
            <h2 className="mt-4 text-3xl text-white">
              Need Our Documents For Sign-Off?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              We&apos;ll send your public liability certificate, sample RAMS and
              accreditation details straight over — everything your licensing
              team, venue or safety advisory group requires.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Request Documents & Certificates <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                variant="outline"
                size="lg"
              >
                Call {site.phone}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
