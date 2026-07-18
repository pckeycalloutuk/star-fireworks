import { images, type Img } from "@/config/images";
import { Heart, Flame, Building2, Music4, Plane, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  href: string;
  icon: LucideIcon;
  blurb: string;
  image: Img;
};

export const services: Service[] = [
  {
    title: "Weddings",
    href: "/displays/weddings",
    icon: Heart,
    blurb: "Romantic, tailored displays fired to your first dance — from an intimate flourish to a full showstopper.",
    image: images.weddingSparklers,
  },
  {
    title: "Bonfire Night",
    href: "/displays/bonfire-night",
    icon: Flame,
    blurb: "Crowd-pleasing public displays for the 5th of November, delivered safely at any scale.",
    image: images.bonfireCrowd,
  },
  {
    title: "Corporate & TV",
    href: "/displays/corporate",
    icon: Building2,
    blurb: "Brand launches, concerts, festivals and broadcast pyrotechnics from a trusted production partner.",
    image: images.concert,
  },
  {
    title: "Pyromusicals",
    href: "/displays/pyromusicals",
    icon: Music4,
    blurb: "Fireworks choreographed frame-by-frame to your chosen soundtrack with digital firing.",
    image: images.fireworksFinale,
  },
  {
    title: "Drone Shows",
    href: "/drone-shows",
    icon: Plane,
    blurb: "Programmable drone light shows — stunning alone or combined with fireworks for a modern spectacle.",
    image: images.drone,
  },
  {
    title: "Special Effects",
    href: "/displays/special-effects",
    icon: Sparkles,
    blurb: "Lasers, CO2 jets, confetti, flames and close-proximity pyro for indoor and outdoor events.",
    image: images.laser,
  },
];
