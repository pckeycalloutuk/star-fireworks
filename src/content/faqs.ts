import type { FaqItem } from "@/components/ui/Accordion";

export const faqGroups: { title: string; items: FaqItem[] }[] = [
  {
    title: "Booking & Pricing",
    items: [
      {
        q: "How much does a professional firework display cost?",
        a: "Our fired displays start from £595 for an intimate wedding flourish and scale to £10,000+ for large public and pyromusical shows. Most private events land between £995 and £2,500. Price depends on duration, the effects chosen, site access and travel — we'll always give you a fixed, no-surprises quote.",
      },
      {
        q: "How far in advance should I book?",
        a: "For weddings and summer events we recommend 3–6 months. Bonfire Night dates in early November are our busiest and typically sell out by August, so book early. That said, we can often accommodate shorter timescales — just call us and we'll do our best.",
      },
      {
        q: "Do you require a deposit?",
        a: "Yes, we ask for a 25% deposit to secure your date, with the balance due two weeks before the display. Deposits are transferable if we have to postpone for safety or weather reasons.",
      },
      {
        q: "Which areas do you cover?",
        a: "We're based in Yorkshire and regularly fire displays across Lancashire, the North East, the Midlands and London — and travel nationwide for larger commissions. Get in touch with your postcode and we'll confirm.",
      },
    ],
  },
  {
    title: "Safety & Licensing",
    items: [
      {
        q: "Are you fully insured?",
        a: "Yes. We carry £10 million public liability insurance and can provide certificates to your venue, council or production company on request.",
      },
      {
        q: "Are your crews qualified?",
        a: "All of our firing crews are trained to British Pyrotechnists Association (BPA) standards and work to the Explosives Regulations 2014. Every display is led by an experienced, certified pyrotechnician.",
      },
      {
        q: "Do you provide risk assessments and method statements?",
        a: "Always. Every booking includes a site-specific risk assessment and method statement (RAMS). For public and corporate events we're happy to liaise directly with your safety advisory group, venue and the emergency services.",
      },
      {
        q: "How do you store and transport fireworks?",
        a: "All product is held in licensed explosives storage and transported in compliance with ADR regulations. Nothing is left unattended on site, and everything is handled by trained crew.",
      },
    ],
  },
  {
    title: "Weather & Cancellations",
    items: [
      {
        q: "What happens if it rains?",
        a: "Fireworks are surprisingly weather-resistant — rain rarely stops a display. High winds are the main concern, as they affect safety distances. We monitor forecasts closely and make the final call on the night, always prioritising safety.",
      },
      {
        q: "What if the display has to be postponed?",
        a: "If we have to postpone for genuine safety reasons, we'll reschedule to a mutually convenient date at no extra cost and your deposit carries over. We'll keep you informed every step of the way.",
      },
    ],
  },
  {
    title: "Venues & Noise",
    items: [
      {
        q: "Do you offer low-noise or quiet fireworks?",
        a: "Yes. Our low-noise displays keep the visual spectacle — colour, height and choreography — while dramatically reducing the bangs. They're ideal for venues near livestock, residential areas or for guests with young children and pets.",
      },
      {
        q: "How much space is needed for a display?",
        a: "It varies with the size of the show, but a typical wedding display needs a firing area roughly 20m x 20m with a safe distance to spectators. We carry out a site survey to confirm exactly what's possible at your venue.",
      },
      {
        q: "Will you liaise with my venue?",
        a: "Absolutely — we work with wedding coordinators and venue managers every week. We'll handle the technical questions, safety distances and paperwork so you don't have to.",
      },
    ],
  },
  {
    title: "The Shop",
    items: [
      {
        q: "Can I buy fireworks to let off myself?",
        a: "Yes, our retail shop stocks rockets, barrages, selection boxes, low-noise ranges and sparklers. You must be 18 or over to buy fireworks, and we're happy to advise on safe use.",
      },
      {
        q: "Do you offer click & collect?",
        a: "We do. Order online and collect from our shop during opening hours. Our team can help you choose the right products for your budget and space.",
      },
    ],
  },
];

export const flatFaqs: FaqItem[] = faqGroups.flatMap((g) => g.items);
