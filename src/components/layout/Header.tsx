"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/config/site";
import { megaMenu, primaryNav } from "@/config/nav";
import { images } from "@/config/images";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-night/80 shadow-lg backdrop-blur-md" : "bg-gradient-to-b from-night/80 to-transparent"
      }`}
    >
      <div className="container-7xl flex h-16 items-center justify-between gap-4 sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <span className="text-2xl leading-none text-gold sm:text-3xl" aria-hidden>
            ✦
          </span>
          <span className="font-display text-xl uppercase tracking-wide text-white sm:text-2xl">
            {site.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              href="/displays"
              className="flex items-center gap-1 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold"
            >
              Displays <ChevronDown className="h-4 w-4" />
            </Link>
            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-3 gap-6 rounded-card border border-white/10 bg-smoke p-6 shadow-2xl">
                    <div>
                      <p className="eyebrow mb-3">Private Events</p>
                      <ul className="space-y-1">
                        {megaMenu.privateEvents.map((l) => (
                          <MegaLink key={l.href} {...l} />
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">Public &amp; Corporate</p>
                      <ul className="space-y-1">
                        {megaMenu.publicCorporate.map((l) => (
                          <MegaLink key={l.href} {...l} />
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/portfolio"
                      className="group relative overflow-hidden rounded-xl"
                    >
                      <Image
                        src={images.fireworksGold.src}
                        alt="Explore our firework display portfolio"
                        fill
                        sizes="240px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-night/50" />
                      <span className="absolute bottom-3 left-3 flex items-center gap-1 font-display text-sm uppercase text-white">
                        View Portfolio <ArrowRight className="h-4 w-4 text-gold" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {primaryNav.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold md:flex"
          >
            <Phone className="h-4 w-4 text-gold" /> {site.phone}
          </a>
          <Button href="/quote" size="sm" className="hidden sm:inline-flex">
            Get a Quote
          </Button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-night lg:hidden"
          >
            <div className="container-7xl flex h-16 items-center justify-between">
              <span className="font-display text-xl text-white">{site.name}</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav
              className="h-[calc(100vh-4rem)] overflow-y-auto px-6 pb-32 pt-4"
              aria-label="Mobile"
            >
              <MobileGroup title="Private Events" links={megaMenu.privateEvents} onNav={() => setMobileOpen(false)} />
              <MobileGroup title="Public & Corporate" links={megaMenu.publicCorporate} onNav={() => setMobileOpen(false)} />
              <ul className="mt-4 space-y-1 border-t border-white/10 pt-4">
                {[
                  { label: "Drone Shows", href: "/drone-shows" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "About", href: "/about" },
                  { label: "Safety", href: "/about/safety" },
                  { label: "Reviews", href: "/reviews" },
                  { label: "Blog", href: "/blog" },
                  { label: "Shop", href: "/shop" },
                  { label: "FAQs", href: "/faqs" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 font-display text-2xl uppercase text-white/90"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/quote" size="lg" className="mt-6 w-full" >
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaLink({ label, href, description }: { label: string; href: string; description?: string }) {
  return (
    <li>
      <Link href={href} className="group block rounded-lg px-3 py-2 transition-colors hover:bg-white/5">
        <span className="block text-sm font-semibold text-white group-hover:text-gold">{label}</span>
        {description && <span className="block text-xs text-white/50">{description}</span>}
      </Link>
    </li>
  );
}

function MobileGroup({
  title,
  links,
  onNav,
}: {
  title: string;
  links: { label: string; href: string }[];
  onNav: () => void;
}) {
  return (
    <div className="mb-2">
      <p className="eyebrow mb-1 mt-4">{title}</p>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              onClick={onNav}
              className="block py-2 text-lg font-medium text-white/80"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
