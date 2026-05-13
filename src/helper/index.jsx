const SITE_NAME = "Agencija za upravljanje prirodnim dobrima";
const DEFAULT_TITLE = "Agencija za upravljanje prirodnim dobrima Bijelo Polje";
const DEFAULT_DESCRIPTION =
  "Agencija za upravljanje prirodnim dobrima opštine Bijelo Polje upravlja, štiti i promoviše zaštićena prirodna područja, biodiverzitet i održivo korišćenje prirodnih resursa.";
const DEFAULT_IMAGE = "/assets/img/cover-hero.jpg";

const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;

  const origin =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "";

  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
};

const getCurrentPath = () => {
  if (typeof window === "undefined") return "/";
  return `${window.location.pathname}${window.location.search}`;
};

const normalizeDescription = (description) => {
  const text = String(description || DEFAULT_DESCRIPTION)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return text.length > 165 ? `${text.slice(0, 162).trim()}...` : text;
};

const upsertMeta = (selectorAttribute, selectorValue, content) => {
  if (!content && content !== "") return;

  let element = document.head.querySelector(
    `meta[${selectorAttribute}="${selectorValue}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(selectorAttribute, selectorValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  if (!href) return;

  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const upsertJsonLd = (id, data) => {
  let element = document.head.querySelector(`script[data-seo="${id}"]`);

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.setAttribute("data-seo", id);
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

export const setSeoMeta = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  locale = "me",
  noIndex = false,
} = {}) => {
  const canonicalUrl = getAbsoluteUrl(path || getCurrentPath());
  const imageUrl = getAbsoluteUrl(image);
  const metaDescription = normalizeDescription(description);
  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large";

  document.title = title;
  document.documentElement.lang = locale === "en" ? "en" : "me";

  upsertMeta("name", "description", metaDescription);
  upsertMeta("name", "robots", robotsContent);
  upsertMeta("name", "author", SITE_NAME);
  upsertMeta("name", "theme-color", "#374836");

  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", metaDescription);
  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("property", "og:image", imageUrl);
  upsertMeta("property", "og:locale", locale === "en" ? "en_US" : "me_ME");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", metaDescription);
  upsertMeta("name", "twitter:image", imageUrl);

  upsertLink("canonical", canonicalUrl);

  upsertJsonLd("organization", {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    name: SITE_NAME,
    url: getAbsoluteUrl("/"),
    logo: getAbsoluteUrl("/assets/img/logo.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rista Ratkovića bb",
      postalCode: "84300",
      addressLocality: "Bijelo Polje",
      addressCountry: "ME",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+382 50 435 837",
      email: "aupd@bijelopolje.co.me",
      contactType: "customer support",
    },
  });
};

export const pageTitle = (title, options = {}) => {
  setSeoMeta({ title, ...options });
  return title;
};
