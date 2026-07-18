import type { Metadata } from "next";
import { Check, Minus, Sparkles, Send, PartyPopper, Type, ClipboardList, PencilRuler, CalendarCheck, Truck } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { CTABand } from "@/components/ui/CTABand";
import { Schema, serviceSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/config/images";

export const metadata: Metadata = buildMetadata({
  title: "Wedding Fireworks Packages Compared",
  description:
    "Compare our Sparkle, Celebration and Showstopper wedding fireworks packages side by side. Duration, effects, low-noise, add-ons and prices. Fully insured, UK-wide.",
  path: "/displays/wedding-packages",
});

type Row = { label: string; sparkle: string | boolean; celebration: string | boolean; showstopper: string | boolean };

const rows: Row[] = [
  { label: "Approximate duration", sparkle: "~2 min", celebration: "~4 min", showstopper: "6–8 min" },
  { label: "Number of effects", sparkle: "Curated selection", celebration: "Extended range", showstopper: "Premium & signature" },
  { label: "Firing method", sparkle: "Hand-fired", celebration: "Digital", showstopper: "Digital, multi-position" },
  { label: "Low-noise option", sparkle: true, celebration: true, showstopper: true },
  { label: "Choreographed sequence", sparkle: false, celebration: true, showstopper: true },
  { label: "Full pyromusical to your song", sparkle: false, celebration: "Single track", showstopper: true },
  { label: "3D design preview to sign off", sparkle: false, celebration: false, showstopper: true },
  { label: "Sparkler send-off included", sparkle: false, celebration: false, showstopper: true },
  { label: "On-site BPA-trained crew", sparkle: true, celebration: true, showstopper: true },
  { label: "£10m public liability insurance", sparkle: true, celebration: true, showstopper: true },
  { label: "From", sparkle: "£595", celebration: "£995", showstopper: "£1,795" },
];

const addOns = [
  { icon: Send, title: "Sparkler Send-Off", body: "A tunnel of light for that iconic exit shot — sparklers, holders and a crew member to hand them out and keep it safe." },
  { icon: PartyPopper, title: "Confetti Cannons", body: "A burst of biodegradable confetti timed to your first kiss or the finale, indoors or out, in your wedding colours." },
  { icon: Type, title: "Letters In Lights", body: "Glowing giant letters — your initials, 'LOVE' or 'MR & MRS' — as a stunning photo backdrop and dance-floor centrepiece." },
];

const steps = [
  { icon: ClipboardList, title: "Enquire", body: "Tell us your date, venue and which package catches your eye. We reply within 24 hours with availability and a fixed quote." },
  { icon: PencilRuler, title: "Design & Preview", body: "We tailor the display to your colours, timing and music. Showstopper couples receive a 3D preview to sign off." },
  { icon: CalendarCheck, title: "Confirm & Coordinate", body: "A deposit secures your date. We handle the venue paperwork, RAMS and insurance, and agree the running order." },
  { icon: Truck, title: "Setup & Showtime", body: "Our crew arrives early, sets up discreetly, fires on your cue and clears the site — leaving only the memory." },
];

const faqs = [
  {
    q: "Can I mix and match features between packages?",
    a: "Absolutely. The three packages are a starting point, not a straitjacket. Want the Celebration duration with a full pyromusical, or the Showstopper with a longer send-off? Just ask and we'll build a bespoke quote around exactly what you want.",
  },
  {
    q: "What is included in every package as standard?",
    a: "All packages include a site-specific risk assessment, £10m public liability insurance, a BPA-trained crew, delivery, setup and full clear-up. There are no hidden extras — the price you're quoted is the price you pay.",
  },
  {
    q: "Do the prices include VAT and travel?",
    a: "We provide a single, transparent quote tailored to your venue and location, so you know the full cost up front. Any travel is factored in at the quoting stage rather than added afterwards. Just tell us your venue and we'll confirm.",
  },
  {
    q: "Can we add fireworks to a package with a drone show?",
    a: "Yes — a drone light show combined with a firework finale is a spectacular modern option. We can quote the two together so the sequencing and timing are perfectly matched. Ask us and we'll design the combined show.",
  },
  {
    q: "How do add-ons affect the price?",
    a: "Add-ons like a sparkler send-off, confetti cannons or letters in lights are priced individually and added to your package total, so you only pay for what you choose. We'll itemise everything clearly in your quote.",
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-success" aria-label="Included" />;
  if (value === false) return <Minus className="mx-auto h-5 w-5 text-white/30" aria-label="Not included" />;
  return <span className="text-sm text-white/80">{value}</span>;
}

export default function WeddingPackagesPage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Wedding Fireworks Packages",
          "Compare Sparkle, Celebration and Showstopper wedding fireworks packages, with add-ons and fixed pricing, across the UK.",
          "/displays/wedding-packages"
        )}
      />
      <Schema data={faqSchema(faqs)} />

      <PageHero image={images.firstDance.src} alt={images.firstDance.alt}>
        <p className="eyebrow mb-3">Wedding Fireworks</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">Wedding Fireworks Packages, Compared</h1>
        <p className="mt-4 max-w-xl text-white/80">
          Three clear, fixed-price packages — and the freedom to make any of them your own. See exactly what you get,
          side by side, before you enquire.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Get a Quote
          </Button>
          <Button href="/displays/weddings" variant="outline" size="lg">
            Back To Weddings
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Displays", path: "/displays" },
          { name: "Weddings", path: "/displays/weddings" },
          { name: "Packages", path: "/displays/wedding-packages" },
        ]}
      />

      {/* Comparison table */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Side By Side"
            title="Compare Every Package"
            subline="From an elegant flourish to a full cinematic production — find the one that fits your day and your budget."
          />
          <Reveal className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-sm font-semibold uppercase tracking-wide text-white/60">Feature</th>
                  <th className="p-4 text-center font-display text-lg uppercase text-white">Sparkle</th>
                  <th className="rounded-t-card bg-gold/[0.06] p-4 text-center font-display text-lg uppercase text-gold">
                    Celebration
                  </th>
                  <th className="p-4 text-center font-display text-lg uppercase text-white">Showstopper</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-white/10">
                    <td className="p-4 text-sm text-white/80">{r.label}</td>
                    <td className="p-4 text-center">
                      <Cell value={r.sparkle} />
                    </td>
                    <td className="bg-gold/[0.06] p-4 text-center">
                      <Cell value={r.celebration} />
                    </td>
                    <td className="p-4 text-center">
                      <Cell value={r.showstopper} />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4" />
                  <td className="p-4 text-center">
                    <Button href="/quote" variant="outline" size="sm">
                      Choose Sparkle
                    </Button>
                  </td>
                  <td className="rounded-b-card bg-gold/[0.06] p-4 text-center">
                    <Button href="/quote" size="sm">
                      Choose Celebration
                    </Button>
                  </td>
                  <td className="p-4 text-center">
                    <Button href="/quote" variant="outline" size="sm">
                      Choose Showstopper
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Make It Yours"
            title="Add-Ons & Finishing Touches"
            subline="Layer these onto any package to personalise your celebration and give your photographer even more to shoot."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {addOns.map((a) => (
              <StaggerItem key={a.title}>
                <div className="h-full rounded-card border border-white/10 bg-night p-6">
                  <a.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-white">{a.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{a.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Booking process */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading eyebrow="The Process" title="From Enquiry To Encore" subline="Four straightforward steps and we take care of everything in between." />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="relative h-full rounded-card border border-white/10 bg-smoke p-6">
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

      {/* FAQ */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Sparkles className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Package Questions, Answered</h2>
            <p className="mt-4 text-white/70">
              Everything you need to know about choosing, customising and booking your wedding fireworks package.
            </p>
            <Button href="/quote" className="mt-6">
              Get Your Tailored Quote
            </Button>
          </Reveal>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Ready To Choose Your Package?"
        subline="Tell us your date and venue and we'll confirm availability with a fixed, no-obligation quote within 24 hours."
      />
    </>
  );
}
