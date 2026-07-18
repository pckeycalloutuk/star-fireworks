export type NavLink = { label: string; href: string; description?: string };

export const megaMenu: {
  privateEvents: NavLink[];
  publicCorporate: NavLink[];
} = {
  privateEvents: [
    { label: "Weddings", href: "/displays/weddings", description: "Fireworks for your first dance" },
    { label: "Wedding Packages", href: "/displays/wedding-packages", description: "From £595, fully tailored" },
    { label: "Pyromusicals", href: "/displays/pyromusicals", description: "Fired in time to music" },
    { label: "Parties & Celebrations", href: "/displays/weddings", description: "Birthdays, anniversaries & more" },
  ],
  publicCorporate: [
    { label: "Bonfire Night", href: "/displays/bonfire-night", description: "Public 5th November displays" },
    { label: "Corporate & TV", href: "/displays/corporate", description: "Brand launches, concerts & broadcast" },
    { label: "Councils & National Events", href: "/displays/public-events", description: "Procurement-ready delivery" },
    { label: "Special Effects", href: "/displays/special-effects", description: "Lasers, CO2, confetti & flames" },
  ],
};

export const primaryNav: NavLink[] = [
  { label: "Displays", href: "/displays" },
  { label: "Weddings", href: "/displays/weddings" },
  { label: "Drone Shows", href: "/drone-shows" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const footerDisplays: NavLink[] = [
  { label: "Wedding Fireworks", href: "/displays/weddings" },
  { label: "Wedding Packages", href: "/displays/wedding-packages" },
  { label: "Bonfire Night", href: "/displays/bonfire-night" },
  { label: "Corporate & TV", href: "/displays/corporate" },
  { label: "Councils & National Events", href: "/displays/public-events" },
  { label: "Pyromusicals", href: "/displays/pyromusicals" },
  { label: "Special Effects", href: "/displays/special-effects" },
  { label: "Drone Shows", href: "/drone-shows" },
];

export const footerCompany: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Safety & Accreditation", href: "/about/safety" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Careers", href: "/careers" },
  { label: "Online Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];
