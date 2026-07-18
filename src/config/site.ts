export const site = {
  name: "Starfall Pyrotechnics",
  legalName: "Starfall Pyrotechnics Ltd",
  tagline: "Award-Winning Professional Firework Displays",
  phone: "0800 000 0000",
  landline: "01234 000000",
  email: "hello@starfallpyro.co.uk",
  whatsapp: "447000000000",
  address: "Unit 7 Beacon Park, Harrogate, North Yorkshire, HG3 0AB, United Kingdom",
  addressParts: {
    street: "Unit 7 Beacon Park",
    locality: "Harrogate",
    region: "North Yorkshire",
    postalCode: "HG3 0AB",
    country: "GB",
  },
  geo: { lat: 53.9915, lng: -1.5412 },
  url: "https://www.starfallpyro.co.uk",
  shopUrl: "https://shop.starfallpyro.co.uk",
  areas: ["Yorkshire", "Lancashire", "North East", "Midlands", "London"],
  founded: "1971",
  rating: { value: "4.9", count: "287" },
  insurance: "£10m Public Liability",
  hours: { monFri: "09:00–17:30", sat: "10:00–16:00", sun: "Closed" },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    pinterest: "https://pinterest.com/",
    youtube: "https://youtube.com/",
  },
} as const;

export type Site = typeof site;
