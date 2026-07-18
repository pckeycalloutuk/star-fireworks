"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogCategories, type BlogPost } from "@/content/blog";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";

const chips = ["All", ...blogCategories] as const;

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<(typeof chips)[number]>("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === c
                ? "border-gold bg-gold/10 text-gold"
                : "border-white/15 text-white/70 hover:border-white/30"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <StaggerItem key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group block h-full overflow-hidden rounded-card border border-white/10 bg-smoke transition-colors hover:border-gold/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-gold">
                  <span>{p.category}</span>
                  <span className="text-white/40">{p.readTime}</span>
                </div>
                <h2 className="mt-2 font-body text-lg font-semibold normal-case tracking-normal text-white">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-white/60">{p.excerpt}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
