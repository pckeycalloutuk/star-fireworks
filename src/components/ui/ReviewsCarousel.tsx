"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewCard, type Review } from "./ReviewCard";

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const perView = 3;
  const maxStart = Math.max(0, reviews.length - perView);
  const clampedStart = Math.min(index, maxStart);

  return (
    <div>
      {/* Mobile: horizontal scroll-snap */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar md:hidden">
        {reviews.map((r) => (
          <div key={r.name} className="w-[85%] flex-shrink-0 snap-center">
            <ReviewCard review={r} />
          </div>
        ))}
      </div>

      {/* Desktop: paged 3-up */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6">
          {reviews.slice(clampedStart, clampedStart + perView).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - perView))}
            disabled={clampedStart === 0}
            aria-label="Previous reviews"
            className="rounded-full border border-white/20 p-3 text-white transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => Math.min(maxStart, i + perView))}
            disabled={clampedStart >= maxStart}
            aria-label="Next reviews"
            className="rounded-full border border-white/20 p-3 text-white transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
