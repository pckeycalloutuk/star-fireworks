import Image from "next/image";
import type { Metadata } from "next";
import { Flame, Store, ClipboardList, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { CTABand } from "@/components/ui/CTABand";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { ApplyForm } from "./ApplyForm";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Join Our Pyrotechnics Crew",
  description:
    "Work with an award-winning UK firework and drone company. Display crew, seasonal retail and admin roles. Full BPA training and a season you won't forget.",
  path: "/careers",
});

const roles = [
  {
    icon: Flame,
    title: "Display Crew",
    description:
      "Be at the heart of the action — rigging, wiring and firing displays across the country alongside our BPA-trained team. Full training provided; no experience required, just the right attitude.",
    responsibilities: [
      "Load and rig firing racks safely to plan",
      "Support setup, firing and site clearance",
      "Follow RAMS and exclusion-zone procedures",
      "Weekend and evening availability, seasonal peaks",
    ],
  },
  {
    icon: Store,
    title: "Seasonal Retail Assistant",
    description:
      "Help customers pick the perfect fireworks in our Harrogate store through our busiest months. A friendly, safety-first role ideal for the run-up to Bonfire Night and New Year.",
    responsibilities: [
      "Advise customers and recommend ranges",
      "Operate the till and process click & collect",
      "Apply our Challenge 25 age-verification policy",
      "Keep the shop floor tidy, stocked and safe",
    ],
  },
  {
    icon: ClipboardList,
    title: "Business Administrator",
    description:
      "Keep the operation running smoothly behind the scenes — coordinating bookings, documentation and compliance paperwork that keeps every show on track and on time.",
    responsibilities: [
      "Manage enquiries, bookings and scheduling",
      "Prepare RAMS packs and insurance documents",
      "Liaise with venues, councils and suppliers",
      "Maintain records to compliance standards",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero image={images.crew.src} alt={images.crew.alt}>
        <p className="eyebrow mb-3">Join The Team</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">
          Build A Career In Fireworks
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          Few jobs end with a standing ovation and a sky full of colour. If you
          love craft, teamwork and the buzz of a live event, we&apos;d love to
          hear from you.
        </p>
      </PageHero>

      <Breadcrumbs items={[{ name: "Careers", path: "/careers" }]} />

      {/* Crew life intro */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative order-2 overflow-hidden rounded-card lg:order-1">
            <Image
              src={images.crew.src}
              alt={images.crew.alt}
              width={800}
              height={600}
              sizes="(max-width:1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="eyebrow mb-3">Life On The Crew</p>
            <h2 className="text-4xl sm:text-5xl">More Than Just A Job</h2>
            <p className="mt-4 text-white/70">
              At {site.name} you&apos;ll work with people who take safety
              seriously and take pride even more seriously. Every display is a
              team effort — from the first rack loaded to the final shell fired —
              and there&apos;s nothing quite like watching a crowd fall silent,
              then roar, at a show you helped build.
            </p>
            <p className="mt-4 text-white/70">
              We invest in our people with full BPA training pathways, real
              responsibility and a genuinely close-knit team that&apos;s been
              lighting up British skies since {site.founded}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Open Roles"
            title="Where You Could Fit In"
            subline="Three ways to join the team — whether you're chasing the thrill of the firing line or keeping the whole show on the road."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {roles.map((role) => (
              <StaggerItem key={role.title}>
                <div className="flex h-full flex-col rounded-card border border-white/10 bg-night p-6">
                  <role.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{role.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{role.description}</p>
                  <ul className="mt-4 space-y-2">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Apply form */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Apply Now</p>
            <h2 className="text-4xl sm:text-5xl">Send Us Your Details</h2>
            <p className="mt-4 text-white/70">
              Tell us which role suits you and a little about yourself. No formal
              CV to hand? No problem — a few honest lines about your experience
              and availability is a great place to start.
            </p>
            <p className="mt-4 text-white/70">
              We review every application personally and will get back to you if
              there&apos;s a good fit for the season ahead.
            </p>
          </Reveal>
          <div className="rounded-card border border-white/10 bg-smoke p-6 sm:p-8">
            <ApplyForm />
          </div>
        </div>
      </section>

      <CTABand
        title="Questions Before You Apply?"
        subline="Not sure which role is right, or want to know more about training? Get in touch and we'll happily talk it through."
        primaryLabel="Contact the Team"
        primaryHref="/contact"
      />
    </>
  );
}
