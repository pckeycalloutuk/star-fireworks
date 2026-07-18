import type { Metadata } from "next";
import { ArrowRight, Music4, Cpu, Boxes, Zap, PlayCircle, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { CTABand } from "@/components/ui/CTABand";
import { RelatedServices } from "@/components/ui/RelatedServices";
import { Schema, serviceSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/config/images";

export const metadata: Metadata = buildMetadata({
  title: "Pyromusical Firework Displays",
  description:
    "Fireworks choreographed frame-by-frame to your music with digital firing and a 3D preview to sign off. Cinematic pyromusicals for weddings, events and public shows.",
  path: "/displays/pyromusicals",
});

const process = [
  { icon: Music4, title: "Choose Your Music", body: "Pick a single track or a stitched medley. We build the entire show around the emotion, tempo and structure of your song." },
  { icon: Cpu, title: "Choreograph The Timeline", body: "Using professional pyro-design software, we map every effect to the waveform — beats, builds, drops and the final note." },
  { icon: Boxes, title: "Preview In 3D", body: "We render a full 3D simulation of your display so you can watch it, tweak it and sign it off before a single shell is loaded." },
  { icon: Zap, title: "Fire Digitally", body: "On the night, a computer fires every cue to within a hundredth of a second, so the sky and the sound move as one." },
];

const faqs = [
  {
    q: "What exactly is a pyromusical?",
    a: "A pyromusical is a firework display choreographed precisely to music, so every burst, rise and colour change is timed to the beats and swells of a soundtrack. Rather than fireworks with music playing over the top, the two are composed together — the effect is cinematic and genuinely moving.",
  },
  {
    q: "Can I choose any song?",
    a: "In almost all cases, yes. We build the show around your choice, whether that's your first-dance track, an anthem for a public event or a bespoke medley. We'll advise on how a song's structure will translate into fireworks and can suggest edits to maximise the impact.",
  },
  {
    q: "How is the music played on the night?",
    a: "For weddings and private events we typically play the soundtrack through the venue's PA or a system we provide, synchronised to the firing computer. For large public events we can broadcast to an FM frequency or integrate with the event's main sound system.",
  },
  {
    q: "Will I see the display before the event?",
    a: "Yes — that's one of the joys of a pyromusical. We produce a 3D preview simulation of your show, timed to your music, so you can watch the whole thing in advance, request changes and sign it off with complete confidence.",
  },
  {
    q: "Is a pyromusical more expensive than a standard display?",
    a: "There's more design and choreography involved, so a pyromusical typically sits above a hand-fired display of the same length. The uplift buys you precision, a bespoke soundtrack and that unforgettable synced finale. We'll give you a clear, fixed quote so you can decide.",
  },
];

export default function PyromusicalsPage() {
  return (
    <>
      <Schema
        data={serviceSchema(
          "Pyromusical Firework Displays",
          "Fireworks choreographed frame-by-frame to your chosen music with digital firing and a 3D preview, for weddings, events and public displays across the UK.",
          "/displays/pyromusicals"
        )}
      />
      <Schema data={faqSchema(faqs)} />

      <PageHero image={images.fireworksFinale.src} alt={images.fireworksFinale.alt}>
        <p className="eyebrow mb-3">Fireworks Set To Music</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl max-w-3xl">Pyromusicals: The Sky, Choreographed</h1>
        <p className="mt-4 max-w-xl text-white/80">
          When fireworks are composed to music rather than fired alongside it, something extraordinary happens.
          Every beat has a burst, every crescendo a wall of gold — and your audience feels it in their chest.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/quote" size="lg">
            Design My Pyromusical
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View Our Work
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { name: "Displays", path: "/displays" },
          { name: "Pyromusicals", path: "/displays/pyromusicals" },
        ]}
      />

      {/* What it is */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="The Art Form"
            title="More Than Fireworks With A Soundtrack"
            subline="A true pyromusical is composed, not accompanied. The music and the fireworks are built together, so the two are locked in perfect step from the first note to the last."
          />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Reveal>
              <p className="text-white/70">
                It's the difference between hearing a song and watching it. A rising string section lifts a comet
                skyward; a drum fill scatters crackle across the darkness; the final chorus detonates into a finale
                so tightly synced it looks impossible. Whether it's your first dance or a city's countdown, a
                pyromusical turns a display into a performance.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="How We Build It"
            title="From Song To Sky In Four Steps"
            subline="Choreography software, a 3D preview and frame-accurate digital firing — here's how your pyromusical comes together."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
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

      {/* Video */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="See &amp; Hear It"
            title="Pyromusical Showreel"
            subline="Turn the sound up. This is what happens when fireworks and music are composed as one."
          />
          <Reveal className="mx-auto mt-12 max-w-4xl">
            <LiteYouTube id="dQw4w9WgXcQ" title="Pyromusical Showreel" />
          </Reveal>
        </div>
      </section>

      {/* Song-choice CTA */}
      <section className="bg-smoke py-16 sm:py-24">
        <div className="container-7xl">
          <Reveal className="mx-auto max-w-3xl rounded-card border border-gold/30 bg-night p-8 text-center sm:p-12">
            <PlayCircle className="mx-auto h-12 w-12 text-gold" aria-hidden />
            <h2 className="mt-4 text-3xl sm:text-4xl">Got A Song In Mind?</h2>
            <p className="mt-4 text-white/70">
              The best pyromusicals start with a track that means something. Your first dance, an event anthem, a
              piece that gives you goosebumps every time — tell us what it is and we'll show you how it could look
              written across the sky.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/quote" size="lg">
                Tell Us Your Song <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/displays/weddings" variant="outline" size="lg">
                Pyromusicals For Weddings
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Sparkles className="h-9 w-9 text-gold" aria-hidden />
            <h2 className="mt-4 text-4xl sm:text-5xl">Pyromusicals, Answered</h2>
            <p className="mt-4 text-white/70">
              The questions people ask most before commissioning a display set to music. Curious about your own
              track? Just ask.
            </p>
            <Button href="/quote" className="mt-6">
              Start Designing
            </Button>
          </Reveal>
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <RelatedServices current="/displays/pyromusicals" hrefs={["/displays/weddings", "/drone-shows"]} />
      <CTABand
        title="Let's Write Your Show In The Sky"
        subline="Send us your song and your date and we'll come back within 24 hours with ideas and a fixed, no-obligation quote."
        primaryLabel="Design My Pyromusical"
      />
    </>
  );
}
