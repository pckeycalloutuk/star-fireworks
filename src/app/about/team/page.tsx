import type { Metadata } from "next";
import { BadgeCheck, Sparkles, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Team — Meet the Pyrotechnicians",
  description:
    "Meet the designers, riggers and BPA-trained shot-firers behind our championship-winning firework and drone displays across the UK.",
  path: "/about/team",
});

const team = [
  {
    name: "Marcus Bellamy",
    role: "Founder & Lead Display Designer",
    cert: "BPA Senior Firer · 40+ years' experience",
    fact: "Can name the shell type from the shape of the break, every time.",
  },
  {
    name: "Priya Nair",
    role: "Head of Pyromusical Choreography",
    cert: "BPA Certified · Digital firing specialist",
    fact: "Once synced a 12-minute finale to a live orchestra without a click track.",
  },
  {
    name: "Callum Fraser",
    role: "Senior Shot-Firer & Site Lead",
    cert: "BPA Senior Firer · SGSA event trained",
    fact: "Keeps a tally of every county he's fired in — currently 41 and counting.",
  },
  {
    name: "Amara Okafor",
    role: "Drone Show Programmer",
    cert: "CAA-certified drone operator · GVC holder",
    fact: "Flew a 200-drone swarm to spell a proposal — she said yes.",
  },
  {
    name: "Ffion Davies",
    role: "Safety & Compliance Manager",
    cert: "NEBOSH · RAMS lead · Explosives Regs 2014",
    fact: "Reads wind forecasts for fun and owns four anemometers.",
  },
  {
    name: "Tomasz Kowalski",
    role: "Rigging & Logistics Supervisor",
    cert: "BPA Certified · LGV licensed",
    fact: "Can build a 500-cue firing rack faster than the kettle boils.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function TeamPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Breadcrumbs
        items={[
          { name: "About", path: "/about" },
          { name: "Our Team", path: "/about/team" },
        ]}
      />

      <section className="py-8 sm:py-12">
        <div className="container-7xl">
          <SectionHeading
            as="h1"
            eyebrow="The Crew"
            title="Meet Our Team"
            subline="Behind every skyward spectacle is a close-knit team of designers, programmers and BPA-trained firers. Say hello to the people who light up your night."
          />

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="flex h-full flex-col rounded-card border border-white/10 bg-smoke p-6">
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-night font-display text-2xl text-gold"
                    aria-hidden
                  >
                    {initials(member.name)}
                  </span>
                  <h2 className="mt-4 text-xl text-white">{member.name}</h2>
                  <p className="text-sm font-semibold text-gold">{member.role}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-white/70">
                    <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden />
                    {member.cert}
                  </p>
                  <p className="mt-auto flex items-start gap-2 pt-4 text-sm text-white/60">
                    <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden />
                    {member.fact}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Recruitment band */}
      <section className="py-8 sm:py-12">
        <div className="container-7xl">
          <Reveal className="flex flex-col items-center justify-between gap-6 rounded-card border border-gold/30 bg-smoke p-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl text-white">Fancy Joining The Crew?</h2>
              <p className="mt-2 max-w-xl text-sm text-white/60">
                We&apos;re always keen to hear from people who love the craft —
                whether you&apos;re an experienced firer or eager to train from
                the ground up.
              </p>
            </div>
            <Button href="/careers" size="lg">
              View Careers <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
