import { images, type Img } from "@/config/images";
import type { FaqItem } from "@/components/ui/Accordion";

export type BlogSection = {
  h2: string;
  body: string[];
  sub?: { h3: string; body: string[] }[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: "Weddings" | "Bonfire Night" | "Guides" | "Industry News";
  date: string;
  readTime: string;
  image: Img;
  excerpt: string;
  intro: string[];
  sections: BlogSection[];
  faqs: FaqItem[];
  related: string[];
};

export const blogCategories = ["Weddings", "Bonfire Night", "Guides", "Industry News"] as const;

export const posts: BlogPost[] = [
  {
    slug: "wedding-fireworks-cost-2026",
    title: "How Much Do Wedding Fireworks Cost in 2026?",
    metaTitle: "How Much Do Wedding Fireworks Cost in 2026?",
    description:
      "A clear, honest breakdown of wedding firework prices in 2026 — what drives the cost, package tiers and how to get the best display for your budget.",
    category: "Weddings",
    date: "2026-01-14",
    readTime: "6 min read",
    image: images.weddingSparklers,
    excerpt:
      "From a £595 flourish to a full pyromusical finale — here's exactly what shapes the price of wedding fireworks and how to spend wisely.",
    intro: [
      "Fireworks turn a wonderful wedding into an unforgettable one. But because every display is tailored, couples often struggle to find a straight answer on price. This guide gives you real 2026 figures, explains what you're paying for, and shows how to get the biggest impact for your budget.",
      "As a rule of thumb, professional wedding displays in the UK start around £595 and most couples spend between £995 and £2,500. Here's why that range exists.",
    ],
    sections: [
      {
        h2: "What you're actually paying for",
        body: [
          "A firework display isn't just the fireworks. Roughly half of your fee covers the product itself; the rest pays for the expertise, safety and logistics that make it legal and spectacular.",
        ],
        list: [
          "Professional-grade product (far higher quality than shop fireworks)",
          "A BPA-trained firing crew and a lead pyrotechnician",
          "£10m public liability insurance and site-specific risk assessments",
          "Design time, digital choreography and setup on the day",
          "Travel, licensed storage and safe transport",
        ],
      },
      {
        h2: "Typical wedding display price tiers",
        body: [
          "Most professional companies, us included, structure weddings into tiers so you can match the show to your venue and budget.",
        ],
        sub: [
          {
            h3: "Entry-level (£595–£895)",
            body: [
              "A short, punchy display of two to three minutes — perfect as a surprise after the speeches or a send-off as you leave. Great impact for intimate weddings.",
            ],
          },
          {
            h3: "Mid-range (£995–£1,795)",
            body: [
              "Our most popular choice. A fuller show with more varied effects, greater height and often a low-noise option. This is the sweet spot for most couples.",
            ],
          },
          {
            h3: "Showstopper & pyromusicals (£1,795+)",
            body: [
              "A longer, choreographed display — frequently fired to music such as your first dance. This is where fireworks become a headline moment your guests will talk about for years.",
            ],
          },
        ],
      },
      {
        h2: "Five things that move the price",
        body: ["If you're comparing quotes, these are the factors that make the biggest difference:"],
        list: [
          "Duration — every extra minute of intense firing adds product cost",
          "Choreography — a pyromusical fired to music takes far more design time",
          "Low-noise requirements — quiet product can change the mix and quantity",
          "Site access and distance — remote or awkward sites take longer to set up",
          "Season and date — peak Saturdays in summer book out first",
        ],
      },
      {
        h2: "How to get the best value",
        body: [
          "You don't need the biggest budget to get a jaw-dropping result. Be clear about the single moment you want to elevate — the first dance, the send-off, the reveal — and let your display company design around it. A well-choreographed two-minute show often beats a longer, unstructured one.",
          "Always book a fully insured, BPA-trained company and get a written quote with no hidden extras. The cheapest quote is rarely the best value once safety and quality are factored in.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a minimum spend for wedding fireworks?",
        a: "Our wedding displays start at £595. Below that it's difficult to deliver a professional, fully insured show, though we can advise on options for very tight budgets.",
      },
      {
        q: "Can we fire fireworks to our first dance?",
        a: "Yes — this is a pyromusical, and it's one of our most requested wedding moments. We choreograph the display frame-by-frame to your chosen track.",
      },
    ],
    related: ["low-noise-fireworks-venues", "pyromusicals-choreography"],
  },
  {
    slug: "bonfire-night-council-checklist",
    title: "Bonfire Night Display Planning: A Council's Checklist",
    metaTitle: "Bonfire Night Planning: A Council's Checklist",
    description:
      "A practical checklist for councils and event organisers planning a safe, successful public Bonfire Night firework display — timelines, safety and procurement.",
    category: "Bonfire Night",
    date: "2026-01-08",
    readTime: "7 min read",
    image: images.bonfireCrowd,
    excerpt:
      "Everything a council or committee needs to deliver a safe, memorable 5th November display — from early planning to the final shell.",
    intro: [
      "Public Bonfire Night displays draw huge crowds and carry real responsibility. Whether you're a parish council, a town events team or a charity committee, careful planning is what separates a smooth, celebrated event from a stressful one. Use this checklist to keep your project on track.",
    ],
    sections: [
      {
        h2: "6–9 months out: scope and budget",
        body: [
          "Bonfire Night is the busiest date in the pyrotechnics calendar. Established display companies fill their diaries by late summer, so start early.",
        ],
        list: [
          "Agree your budget and expected attendance",
          "Confirm the site, land ownership and permissions",
          "Shortlist fully insured, BPA-trained display companies",
          "Request references from comparable public events",
        ],
      },
      {
        h2: "3–6 months out: safety and paperwork",
        body: [
          "This is where the detail matters. A reputable display company will lead on the technical documents, but you should expect and review the following.",
        ],
        list: [
          "Site-specific risk assessment and method statement (RAMS)",
          "£10m public liability insurance certificate",
          "Crowd management and spectator distance plan",
          "Liaison with your Safety Advisory Group (SAG) and emergency services",
          "Traffic management and parking plan",
        ],
      },
      {
        h2: "1–3 months out: logistics",
        body: ["With the safety framework agreed, focus on the visitor experience and operations."],
        list: [
          "Stewarding and first aid provision",
          "Lighting, signage and accessible viewing areas",
          "Contingency and weather plan with clear decision points",
          "Communications: website, social media and local press",
        ],
      },
      {
        h2: "On the day",
        body: [
          "Your display company will arrive early to set up and secure the firing zone. A good crew keeps you informed, walks the site with your event lead and confirms the go/no-go decision with you before the show.",
          "After the finale, the crew makes the site safe and carries out a thorough sweep the following morning to clear any debris — an important detail for public land.",
        ],
      },
      {
        h2: "Choosing the right partner",
        body: [
          "The single most important decision is who fires your display. Look for a company with a strong public-event track record, faultless paperwork and a calm, communicative team. Procurement-friendly suppliers will happily provide everything your finance and safety teams need.",
        ],
      },
    ],
    faqs: [
      {
        q: "How early should a council book Bonfire Night fireworks?",
        a: "Ideally 6–9 months ahead. Early November dates are in extremely high demand and the best companies book out by August.",
      },
      {
        q: "Who is responsible for the safety advisory group liaison?",
        a: "Your display company should lead on technical safety documentation and is usually happy to attend or support SAG meetings alongside your event team.",
      },
    ],
    related: ["uk-firework-law-explained", "low-noise-fireworks-venues"],
  },
  {
    slug: "low-noise-fireworks-venues",
    title: "Low-Noise Fireworks: Everything Venues Need to Know",
    metaTitle: "Low-Noise Fireworks: A Guide for Venues",
    description:
      "How low-noise fireworks work, when to choose them, and what venues near livestock or homes need to know about quiet displays that still dazzle.",
    category: "Guides",
    date: "2026-01-02",
    readTime: "5 min read",
    image: images.fireworksReflection,
    excerpt:
      "Quiet doesn't mean underwhelming. Here's how low-noise displays keep the spectacle while keeping the peace.",
    intro: [
      "More venues than ever ask for low-noise fireworks — and it's easy to see why. They protect the experience for neighbours, livestock and nervous pets while still delivering colour, height and choreography. Here's what venues and couples need to know.",
    ],
    sections: [
      {
        h2: "What makes a firework 'low-noise'?",
        body: [
          "The bang comes from the bursting charge. Low-noise product is engineered to open with far less report while still producing rich colour and generous spread. You keep the visual drama — the willows, comets, gold cascades and vivid stars — with a fraction of the noise.",
        ],
      },
      {
        h2: "When to choose a low-noise display",
        body: ["Low-noise shows are ideal in a surprising number of situations:"],
        list: [
          "Venues bordering farmland, stables or wildlife",
          "Residential areas with strict noise conditions",
          "Weddings and events with young children or elderly guests",
          "Later firing times when sound travels further",
          "Anywhere you want a refined, elegant atmosphere",
        ],
      },
      {
        h2: "Do you lose any of the spectacle?",
        body: [
          "No — and this surprises people. A well-designed low-noise display is every bit as beautiful as a traditional one. What changes is the soundtrack: instead of loud reports, the display leans on colour, movement and, often, music. Many couples actually prefer the atmosphere it creates.",
        ],
      },
      {
        h2: "Advice for venues",
        body: [
          "If you host regular events, a clear low-noise policy reassures neighbours and makes your venue more attractive to couples. Work with a display company that offers a proper low-noise range rather than simply firing fewer loud fireworks.",
          "It's also worth agreeing sensible firing curfews and letting immediate neighbours know in advance — a small courtesy that prevents complaints and protects your licence.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are low-noise fireworks more expensive?",
        a: "They're broadly comparable to standard displays. The mix of product changes rather than the overall budget, though very specific requirements can affect quantities.",
      },
      {
        q: "Are low-noise fireworks completely silent?",
        a: "Not silent, but dramatically quieter. There's still some gentle sound, which most people find pleasant — it's the loud percussive bangs that are removed.",
      },
    ],
    related: ["wedding-fireworks-cost-2026", "pyromusicals-choreography"],
  },
  {
    slug: "drone-shows-vs-fireworks",
    title: "Drone Shows vs Fireworks: Which Is Right for Your Event?",
    metaTitle: "Drone Shows vs Fireworks: Which To Choose",
    description:
      "A balanced comparison of drone light shows and fireworks — cost, wow-factor, venue suitability and why combining both is often the best answer.",
    category: "Guides",
    date: "2025-12-18",
    readTime: "6 min read",
    image: images.drone,
    excerpt:
      "Drones or fireworks? We compare the two head-to-head — and explain why the most memorable events increasingly use both.",
    intro: [
      "Drone light shows have moved from novelty to mainstream, and event organisers now weigh them against traditional fireworks. Both are spectacular, but they shine in different situations. Here's an honest comparison to help you decide.",
    ],
    sections: [
      {
        h2: "Fireworks: raw emotion and heritage",
        body: [
          "Nothing matches the visceral thrill of fireworks — the light, the colour, the feeling in your chest. They're weatherproof in most conditions, need less airspace approval than drones and remain the gold standard for pure spectacle and celebration.",
        ],
      },
      {
        h2: "Drone shows: storytelling in the sky",
        body: [
          "Drones paint precise, animated pictures — logos, words, shapes and countdowns — in a way fireworks simply can't. They're quiet, reusable, produce no fallout and are ideal for noise-sensitive or environmentally conscious events. They do require suitable airspace, favourable weather and CAA authorisation.",
        ],
      },
      {
        h2: "Head-to-head",
        body: ["A quick way to think about the trade-offs:"],
        list: [
          "Wow-factor: fireworks for raw impact, drones for precision and branding",
          "Noise: drones are near-silent; fireworks can be loud (or low-noise)",
          "Messaging: only drones can spell out names, logos and countdowns",
          "Weather: fireworks cope with more conditions; drones need low wind",
          "Environmental profile: drones produce no fallout and are reusable",
        ],
      },
      {
        h2: "Why combine both?",
        body: [
          "The most talked-about finales we produce blend the two: drones build a branded, animated sequence, then fireworks explode around and through them for an unforgettable crescendo. For festivals and ticketed events, this hybrid is a genuine draw that boosts shareability and ticket sales.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are drone shows more expensive than fireworks?",
        a: "Drone shows typically carry a higher entry cost due to the technology and crew, but they're reusable and produce no fallout. We'll advise on the best value for your specific event.",
      },
      {
        q: "Can you do drones and fireworks together?",
        a: "Yes — combined shows are one of our specialities and create a truly modern spectacle. We design the two to complement each other precisely.",
      },
    ],
    related: ["wedding-fireworks-cost-2026", "pyromusicals-choreography"],
  },
  {
    slug: "uk-firework-law-explained",
    title: "UK Firework Law Explained (Explosives Regulations 2014)",
    metaTitle: "UK Firework Law Explained (Regs 2014)",
    description:
      "A plain-English guide to UK firework law — the Explosives Regulations 2014, curfews, categories and what professional displays require.",
    category: "Industry News",
    date: "2025-12-05",
    readTime: "7 min read",
    image: images.fireworksSky,
    excerpt:
      "Curfews, categories, storage and licensing — a clear, jargon-free explainer of the rules that govern fireworks in the UK.",
    intro: [
      "Firework law in the UK is often misunderstood. Whether you're planning a display, buying for home or organising a public event, it pays to know the basics. This is a plain-English overview — not legal advice, but a solid grounding in the key rules.",
    ],
    sections: [
      {
        h2: "The main pieces of legislation",
        body: [
          "Several laws work together. The Fireworks Regulations 2004 set curfews and age limits; the Pyrotechnic Articles (Safety) Regulations 2015 govern product categories; and the Explosives Regulations 2014 cover the storage, handling and transport of professional product.",
        ],
      },
      {
        h2: "Firework categories",
        body: ["Fireworks are classified by their intended use and hazard:"],
        list: [
          "F1 — indoor and very close-proximity, low hazard",
          "F2 — outdoor garden fireworks, limited safety distance",
          "F3 — larger outdoor display fireworks",
          "F4 — professional-only product, not sold to the public",
        ],
      },
      {
        h2: "Curfews and the public",
        body: [
          "It's illegal to set off fireworks between 11pm and 7am, with seasonal exceptions: until midnight on Bonfire Night, and 1am for New Year, Diwali and Chinese New Year. You must be 18 to buy adult fireworks, and it's an offence to set them off in a public place.",
        ],
      },
      {
        h2: "What professional displays require",
        body: [
          "Professional companies operate under a stricter framework. F4 product can only be used by trained operators, must be stored in licensed explosives storage and transported under ADR rules. Every display should be backed by a risk assessment, method statement and appropriate public liability insurance.",
        ],
      },
      {
        h2: "The bottom line",
        body: [
          "For anything beyond a modest garden display, a professional company is the safe and sensible choice. They hold the licences, storage, insurance and training that keep everyone — and the event organiser — on the right side of the law.",
        ],
      },
    ],
    faqs: [
      {
        q: "What time do fireworks have to stop in the UK?",
        a: "Generally 11pm, extended to midnight on Bonfire Night and 1am for New Year, Diwali and Chinese New Year.",
      },
      {
        q: "Do I need a licence to have a firework display?",
        a: "Home garden displays with consumer fireworks don't need a licence, but professional (F4) displays require trained operators, licensed storage and insurance. We handle all of this for you.",
      },
    ],
    related: ["bonfire-night-council-checklist", "low-noise-fireworks-venues"],
  },
  {
    slug: "pyromusicals-choreography",
    title: "Pyromusicals: How We Choreograph Fireworks to Music",
    metaTitle: "Pyromusicals: Choreographing Fireworks to Music",
    description:
      "Go behind the scenes of a pyromusical — how we choreograph fireworks to music with digital firing, 3D previews and frame-accurate timing.",
    category: "Guides",
    date: "2025-11-20",
    readTime: "6 min read",
    image: images.fireworksFinale,
    excerpt:
      "A look inside the art and science of firing fireworks in perfect time to music — from song choice to the final millisecond.",
    intro: [
      "A pyromusical is a firework display choreographed to music so precisely that every beat, swell and lyric is matched by light in the sky. It's the pinnacle of our craft — and the process behind it is part art, part engineering. Here's how we create one.",
    ],
    sections: [
      {
        h2: "It starts with the music",
        body: [
          "The soundtrack shapes everything. A single dramatic track, a wedding first dance, or a medley for a festival finale — each calls for a different design. We analyse the tempo, dynamics and key moments, then build the display around them.",
        ],
      },
      {
        h2: "Designing on a digital timeline",
        body: [
          "Using professional choreography software, we place each firework on a timeline down to a fraction of a second. Effects are chosen for how they behave in the air — the rise time of a comet, the hang of a willow — so the visual lands exactly on the beat.",
        ],
      },
      {
        h2: "3D previews before a single shell is fired",
        body: [
          "Before your event, we render the whole show in 3D so you can see and sign off the design. It's a powerful way to fine-tune the crescendo and guarantee there are no surprises on the night — and clients love watching their display come to life on screen.",
        ],
      },
      {
        h2: "Digital firing on the night",
        body: [
          "The magic happens through a computerised firing system. Electronic matches are wired to a controller synced to the audio, so every cue fires within milliseconds of its mark. This precision is impossible by hand — it's what makes a true pyromusical feel like the sky is dancing.",
        ],
      },
      {
        h2: "The result",
        body: [
          "When it all comes together, a pyromusical is pure emotion. Guests don't just watch it — they feel it. Whether it's fired to your first dance or a stadium anthem, it's a moment that stays with people long after the smoke clears.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we choose any song for our pyromusical?",
        a: "Almost always, yes. We'll talk through your track and make sure it works well for choreography — some songs lend themselves to it even better than others.",
      },
      {
        q: "How long does a pyromusical last?",
        a: "Most run between two and five minutes — long enough to build a full emotional arc without losing impact. Festival finales can be longer.",
      },
    ],
    related: ["wedding-fireworks-cost-2026", "drone-shows-vs-fireworks"],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
