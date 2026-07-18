import { site } from "@/config/site";

/** Renders a JSON-LD script tag. Pass any schema.org object. */
export function Schema({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    foundingDate: site.founded,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.social.instagram, site.social.facebook, site.social.pinterest, site.social.youtube],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    image: `${site.url}/logo.png`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "££-£££",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressParts.street,
      addressLocality: site.addressParts.locality,
      addressRegion: site.addressParts.region,
      postalCode: site.addressParts.postalCode,
      addressCountry: site.addressParts.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.areas.map((a) => ({ "@type": "AdministrativeArea", name: a })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.pinterest, site.social.youtube],
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: site.areas.map((a) => ({ "@type": "AdministrativeArea", name: a })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: { "@type": "Organization", name: site.legalName },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
    mainEntityOfPage: `${site.url}${opts.path}`,
  };
}
