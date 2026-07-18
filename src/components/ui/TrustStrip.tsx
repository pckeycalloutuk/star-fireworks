import { Star, ShieldCheck, BadgeCheck, CalendarClock } from "lucide-react";
import { site } from "@/config/site";

const items = [
  { icon: Star, label: `★ ${site.rating.value} Google rating` },
  { icon: BadgeCheck, label: "BPA-trained crews" },
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: CalendarClock, label: `Est. ${site.founded}` },
];

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 ${className}`}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2 text-sm font-medium text-white/80">
          <Icon className="h-4 w-4 text-gold" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}
