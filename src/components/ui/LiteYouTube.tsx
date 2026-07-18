"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/** Facade YouTube embed — loads the iframe only on click for performance. */
export function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-card border border-white/10 bg-night">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Play video: ${title}`}
        >
          <Image src={poster} alt={title} fill sizes="(max-width:768px) 100vw, 800px" className="object-cover" />
          <span className="absolute inset-0 bg-night/40 transition-colors group-hover:bg-night/30" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold text-night shadow-lg transition-transform group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-night" />
          </span>
        </button>
      )}
    </div>
  );
}
