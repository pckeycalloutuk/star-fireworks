"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Img } from "@/config/images";

type Props = {
  images: (Img & { category?: string })[];
  masonry?: boolean;
};

export function Gallery({ images, masonry = false }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div
        className={
          masonry
            ? "columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3"
            : "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        }
      >
        {images.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative block w-full overflow-hidden rounded-card ${
              masonry ? "break-inside-avoid" : "aspect-square"
            }`}
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={masonry ? 800 : 600}
              height={masonry ? (i % 3 === 0 ? 1000 : 600) : 600}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                masonry ? "h-auto" : "h-full"
              }`}
            />
            <span className="absolute inset-0 bg-night/0 transition-colors group-hover:bg-night/20" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.figure
              key={active}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active].src}
                alt={images[active].alt}
                width={1600}
                height={1000}
                className="max-h-[85vh] w-auto rounded-card object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-white/70">
                {images[active].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
