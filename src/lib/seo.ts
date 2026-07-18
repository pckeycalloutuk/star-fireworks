import type { Metadata } from "next";
import { site } from "@/config/site";
import { images } from "@/config/images";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Build page metadata with canonical, OG and Twitter cards. */
export function buildMetadata({ title, description, path, image }: SeoInput): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const ogImage = image ?? images.heroPoster.src;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
