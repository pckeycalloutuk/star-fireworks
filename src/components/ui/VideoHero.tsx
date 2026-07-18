"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { images } from "@/config/images";

type Props = {
  poster?: string;
  videoSrc?: string;
  children: ReactNode;
  minH?: string;
  overlay?: boolean;
};

const DEFAULT_VIDEO =
  "https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4";

export function VideoHero({
  poster = images.heroPoster.src,
  videoSrc = DEFAULT_VIDEO,
  children,
  minH = "min-h-[92vh]",
  overlay = true,
}: Props) {
  return (
    <section className={`relative flex ${minH} items-center overflow-hidden`}>
      {/* Static poster is the LCP element; sits under the video */}
      <Image
        src={poster}
        alt={images.heroPoster.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {overlay && (
        <>
          <div className="absolute inset-0 bg-night/60" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/30" aria-hidden />
        </>
      )}
      <Particles />

      <div className="container-7xl relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/** Simpler image-only hero for interior pages. */
export function PageHero({
  image,
  alt,
  children,
}: {
  image: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[56vh] items-center overflow-hidden">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-night/70" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-night to-transparent" aria-hidden />
      <Particles />
      <div className="container-7xl relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
