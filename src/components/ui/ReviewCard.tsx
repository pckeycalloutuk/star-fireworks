import { Star, Quote } from "lucide-react";
import { Card } from "./Card";

export type Review = {
  name: string;
  location: string;
  event: string;
  rating: number;
  text: string;
};

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="flex h-full flex-col" hover={false}>
      <div className="mb-4 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < review.rating ? "fill-gold text-gold" : "text-white/20"}`}
            aria-hidden
          />
        ))}
      </div>
      <Quote className="mb-3 h-6 w-6 text-gold/40" aria-hidden />
      <p className="flex-1 text-white/80">&ldquo;{review.text}&rdquo;</p>
      <footer className="mt-6 border-t border-white/10 pt-4">
        <p className="font-semibold text-white">{review.name}</p>
        <p className="text-sm text-white/60">
          {review.event} · {review.location}
        </p>
      </footer>
    </Card>
  );
}
