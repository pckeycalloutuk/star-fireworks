import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with our firework display team. Call, WhatsApp or send us a message and we'll reply within 24 hours to help plan your event.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <section className="py-8 sm:py-12">
        <div className="container-7xl">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Plan Your Display"
            subline="Whether you know exactly what you want or need a little guidance, we're here to help."
            align="left"
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-card border border-white/10 bg-smoke p-6 sm:p-8">
              <ContactForm />
            </div>

            {/* NAP + map */}
            <div>
              <address className="space-y-5 not-italic">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-start gap-4 text-white/80 hover:text-gold">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                  <span>
                    <span className="block text-sm text-white/50">Freephone</span>
                    <span className="text-lg font-semibold">{site.phone}</span>
                    <span className="block text-sm text-white/50">or {site.landline}</span>
                  </span>
                </a>
                <a href={`mailto:${site.email}`} className="flex items-start gap-4 text-white/80 hover:text-gold">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                  <span>
                    <span className="block text-sm text-white/50">Email</span>
                    <span className="text-lg font-semibold">{site.email}</span>
                  </span>
                </a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-white/80 hover:text-gold">
                  <MessageCircle className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                  <span>
                    <span className="block text-sm text-white/50">WhatsApp</span>
                    <span className="text-lg font-semibold">Message us instantly</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 text-white/80">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                  <span>
                    <span className="block text-sm text-white/50">Address</span>
                    <span className="text-lg font-semibold">{site.address}</span>
                  </span>
                </div>
                <div className="flex items-start gap-4 text-white/80">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                  <span>
                    <span className="block text-sm text-white/50">Opening hours</span>
                    <span className="text-lg font-semibold">Mon–Fri {site.hours.monFri}</span>
                    <span className="block text-sm text-white/60">Sat {site.hours.sat} · Sun {site.hours.sun}</span>
                  </span>
                </div>
              </address>

              <div className="mt-8 overflow-hidden rounded-card border border-white/10">
                <iframe
                  title={`Map showing ${site.name}`}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-1.62%2C53.96%2C-1.46%2C54.02&layer=mapnik"
                  className="h-72 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
