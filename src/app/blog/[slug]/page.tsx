import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Reveal } from "@/components/ui/Reveal";
import { Schema, articleSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { posts, getPost } from "@/content/blog";
import { site } from "@/config/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image.src,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = post.related.map((s) => getPost(s)).filter(Boolean) as typeof posts;
  const midpoint = Math.ceil(post.sections.length / 2);

  return (
    <article className="pt-16 sm:pt-20">
      <Schema
        data={articleSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
          image: post.image.src,
        })}
      />
      <Schema data={faqSchema(post.faqs)} />

      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} />

      <div className="container-7xl">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <header className="py-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-gold">{post.category}</span>
            <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
          </header>

          {/* Hero image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-card">
            <Image src={post.image.src} alt={post.image.alt} fill priority sizes="(max-width:768px) 100vw, 768px" className="object-cover" />
          </div>

          {/* Body */}
          <div className="prose-invert mt-10 space-y-5 text-lg leading-relaxed text-white/80">
            {post.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {post.sections.map((section, si) => (
            <div key={section.h2}>
              <Reveal>
                <section className="mt-10">
                  <h2 className="text-2xl text-white sm:text-3xl">{section.h2}</h2>
                  <div className="mt-4 space-y-4 text-white/80">
                    {section.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {section.list && (
                      <ul className="space-y-2">
                        {section.list.map((li) => (
                          <li key={li} className="flex items-start gap-3">
                            <ArrowRight className="mt-1.5 h-4 w-4 flex-shrink-0 text-gold" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.sub?.map((sub) => (
                      <div key={sub.h3} className="mt-4">
                        <h3 className="font-body text-xl font-semibold normal-case tracking-normal text-white">
                          {sub.h3}
                        </h3>
                        {sub.body.map((p, i) => (
                          <p key={i} className="mt-2">
                            {p}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>

              {/* Mid-article CTA */}
              {si === midpoint - 1 && (
                <Reveal>
                  <div className="my-12 rounded-card border border-gold/30 bg-gradient-to-r from-gold/[0.08] to-transparent p-6 sm:p-8">
                    <p className="font-display text-2xl uppercase text-white">Planning a display?</p>
                    <p className="mt-2 text-white/70">
                      Get a free, no-obligation quote from our award-winning team within 24 hours.
                    </p>
                    <Button href="/quote" className="mt-4">
                      Get Your Free Quote
                    </Button>
                  </div>
                </Reveal>
              )}
            </div>
          ))}

          {/* FAQ */}
          {post.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-6 text-2xl text-white sm:text-3xl">Frequently Asked Questions</h2>
              <Accordion items={post.faqs} />
            </section>
          )}

          {/* Internal links */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-sm text-white/60">
              Ready to talk it through? <Link href="/contact" className="text-gold hover:underline">Contact our team</Link>{" "}
              or <Link href="/quote" className="text-gold hover:underline">build your quote</Link>.
            </p>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-5xl">
            <h2 className="mb-6 text-2xl text-white">Keep Reading</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex gap-4 rounded-card border border-white/10 bg-smoke p-4 transition-colors hover:border-gold/40"
                >
                  <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-xl">
                    <Image src={r.image.src} alt={r.image.alt} fill sizes="128px" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold">{r.category}</span>
                    <h3 className="mt-1 font-body text-base font-semibold normal-case tracking-normal text-white group-hover:text-gold">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="mt-16">
        <CTABand />
      </div>
    </article>
  );
}
