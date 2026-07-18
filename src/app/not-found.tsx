import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/ui/Particles";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-24">
      <Particles />
      <div className="container-7xl relative text-center">
        <p className="font-display text-8xl text-gold sm:text-9xl">404</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">This Page Fizzled Out</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          Looks like this one didn&apos;t quite make it to the sky. Let&apos;s get you back to the good stuff.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/portfolio" variant="outline">
            View Our Work
          </Button>
          <Button href="/quote" variant="ghost">
            Get a Quote
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
          {[
            { label: "Weddings", href: "/displays/weddings" },
            { label: "Drone Shows", href: "/drone-shows" },
            { label: "Bonfire Night", href: "/displays/bonfire-night" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-gold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
