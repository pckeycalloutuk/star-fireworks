import type { Metadata } from "next";
import { PageHero } from "@/components/ui/VideoHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogList } from "@/components/blog/BlogList";
import { CTABand } from "@/components/ui/CTABand";
import { buildMetadata } from "@/lib/seo";
import { posts } from "@/content/blog";
import { images } from "@/config/images";

export const metadata: Metadata = buildMetadata({
  title: "Firework Display Blog & Guides",
  description:
    "Expert guides on wedding fireworks, Bonfire Night planning, drone shows, low-noise displays and UK firework law from our professional pyrotechnic team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero image={images.fireworksSky.src} alt={images.fireworksSky.alt}>
        <p className="eyebrow mb-3">Guides &amp; Inspiration</p>
        <h1 className="max-w-3xl text-5xl sm:text-6xl">The Starfall Blog</h1>
        <p className="mt-4 max-w-xl text-white/80">
          Practical advice, planning checklists and behind-the-scenes insight from decades of lighting up
          the UK&apos;s skies.
        </p>
      </PageHero>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-7xl">
          <BlogList posts={posts} />
        </div>
      </section>
      <CTABand />
    </>
  );
}
