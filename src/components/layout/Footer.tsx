import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, ShieldCheck, BadgeCheck, Award } from "lucide-react";
import { site } from "@/config/site";
import { footerDisplays, footerCompany } from "@/config/nav";
import { Newsletter } from "./Newsletter";

const accreditations = [
  { icon: BadgeCheck, label: "BPA Member" },
  { icon: ShieldCheck, label: `${site.insurance}` },
  { icon: Award, label: "Championship Winners" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-smoke pb-24 pt-16 lg:pb-16">
      <div className="container-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + accreditations */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl text-gold" aria-hidden>
                ✦
              </span>
              <span className="font-display text-2xl uppercase text-white">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Designing and firing award-winning professional firework and drone displays across the
              UK since {site.founded}.
            </p>
            <ul className="mt-6 space-y-2">
              {accreditations.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-white/70">
                  <Icon className="h-4 w-4 text-gold" aria-hidden /> {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Displays */}
          <nav aria-label="Displays">
            <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-white">Displays</h2>
            <ul className="space-y-2">
              {footerDisplays.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-white">Company</h2>
            <ul className="space-y-2">
              {footerCompany.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* NAP + hours + newsletter */}
          <div>
            <h2 className="mb-4 font-display text-lg uppercase tracking-wide text-white">Get In Touch</h2>
            <address className="space-y-3 not-italic">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> {site.email}
              </a>
              <p className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" /> {site.address}
              </p>
              <p className="flex items-start gap-2 text-sm text-white/70">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>
                  Mon–Fri {site.hours.monFri}
                  <br />
                  Sat {site.hours.sat} · Sun {site.hours.sun}
                </span>
              </p>
            </address>

            <div className="mt-5 flex gap-3">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full border border-white/15 p-2 text-white/70 hover:border-gold hover:text-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full border border-white/15 p-2 text-white/70 hover:border-gold hover:text-gold">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full border border-white/15 p-2 text-white/70 hover:border-gold hover:text-gold">
                <Youtube className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-white">Display tips &amp; seasonal offers</p>
              <Newsletter compact />
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-12 overflow-hidden rounded-card border border-white/10">
          <iframe
            title={`Map showing ${site.name} location`}
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.62%2C53.96%2C-1.46%2C54.02&layer=mapnik"
            className="h-56 w-full"
            loading="lazy"
          />
        </div>

        {/* Legal strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {site.founded}–2026 {site.legalName}. All rights reserved. Registered in England &amp; Wales.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms
            </Link>
            <Link href="/about/safety" className="hover:text-gold">
              Safety
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
