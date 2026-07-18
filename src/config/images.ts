// Central image library. All sourced from Unsplash. Helper appends sizing params.
const U = "https://images.unsplash.com/";

export function unsplash(id: string, w = 1600, q = 80) {
  return `${U}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export type Img = { src: string; alt: string };

// Curated, keyword-rich alt text for SEO + accessibility.
export const images = {
  heroPoster: {
    src: unsplash("photo-1467810563316-b5476525c0f9", 1920, 75),
    alt: "Golden firework display bursting over a night sky at a professional event",
  },
  fireworksBurst: {
    src: unsplash("photo-1498931299472-f7a63a5a1cfa"),
    alt: "Bright golden and red fireworks exploding above a crowd on a dark night",
  },
  fireworksSky: {
    src: unsplash("photo-1530103862676-de8c9debad1d"),
    alt: "Multi-coloured professional firework display lighting up the night sky",
  },
  fireworksGold: {
    src: unsplash("photo-1514912885225-5c9ec8507d68"),
    alt: "Cascading gold willow fireworks over a silhouetted skyline",
  },
  fireworksReflection: {
    src: unsplash("photo-1481931715705-36f5f79f1f3d"),
    alt: "Fireworks reflected over water at a large outdoor celebration",
  },
  fireworksFinale: {
    src: unsplash("photo-1552413544-30ea44da8a5c"),
    alt: "Dense grand finale of a firework display with white and gold bursts",
  },
  wedding: {
    src: unsplash("photo-1519741497674-611481863552"),
    alt: "Bride and groom embracing at an outdoor wedding venue at dusk",
  },
  weddingSparklers: {
    src: unsplash("photo-1464366400600-7168b8af9bc3"),
    alt: "Wedding guests holding lit sparklers to form a send-off tunnel at night",
  },
  weddingVenue: {
    src: unsplash("photo-1465495976277-4387d4b0b4c6"),
    alt: "Elegant marquee wedding venue illuminated warmly against an evening sky",
  },
  firstDance: {
    src: unsplash("photo-1511285560929-80b456fea0bc"),
    alt: "Newlyweds sharing their first dance under fairy lights at a reception",
  },
  drone: {
    src: unsplash("photo-1508614589041-895b88991e3e"),
    alt: "Illuminated drone light show forming a glowing pattern in the night sky",
  },
  droneShow: {
    src: unsplash("photo-1506947411487-a56738267384"),
    alt: "Swarm of lit drones creating an animated aerial display over a festival",
  },
  bonfire: {
    src: unsplash("photo-1476673160081-cf065607f449"),
    alt: "Large bonfire blazing beneath a firework display on Bonfire Night",
  },
  bonfireCrowd: {
    src: unsplash("photo-1478147427282-58a87a120781"),
    alt: "Large crowd watching a public Bonfire Night firework display",
  },
  concert: {
    src: unsplash("photo-1470229722913-7c0e2dbbafd3"),
    alt: "Concert crowd with hands raised as stage pyrotechnics erupt behind the stage",
  },
  stagePyro: {
    src: unsplash("photo-1493225457124-a3eb161ffa5f"),
    alt: "Stage flames and pyrotechnic fountains firing during a live music performance",
  },
  corporate: {
    src: unsplash("photo-1540575467063-178a50c2df87"),
    alt: "Corporate gala event audience seated beneath dramatic event lighting",
  },
  cityDisplay: {
    src: unsplash("photo-1533230408708-8f9f91d1235a"),
    alt: "City-centre firework display fired over a river with buildings behind",
  },
  confetti: {
    src: unsplash("photo-1492684223066-81342ee5ff30"),
    alt: "Colourful confetti falling over a celebrating crowd at an event",
  },
  laser: {
    src: unsplash("photo-1516450360452-9312f5e86fc7"),
    alt: "Green and blue laser beams cutting through a smoky event space",
  },
  crew: {
    src: unsplash("photo-1521737604893-d14cc237f11d"),
    alt: "Professional pyrotechnic crew preparing firing racks before a display",
  },
  planning: {
    src: unsplash("photo-1454165804606-c3d57bc86b40"),
    alt: "Event planning meeting with laptop and notes for a firework display design",
  },
  sparklersHands: {
    src: unsplash("photo-1482329833197-916d32bdf74c"),
    alt: "Hands holding bright sparklers against a dark celebratory background",
  },
} as const;

export const galleryImages: Img[] = [
  images.fireworksBurst,
  images.fireworksSky,
  images.weddingSparklers,
  images.drone,
  images.fireworksGold,
  images.concert,
  images.fireworksReflection,
  images.bonfireCrowd,
  images.fireworksFinale,
  images.cityDisplay,
  images.stagePyro,
  images.confetti,
];
