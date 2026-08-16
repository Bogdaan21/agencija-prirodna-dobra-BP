const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

const SITE_URL = "https://aupd.me";

const staticUrls = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/protectedareas", priority: "0.9" },
  { path: "/protectedareas/djalovica-klisura", priority: "0.8" },
  { path: "/protectedareas/cehotina", priority: "0.8" },
  { path: "/news", priority: "0.8" },
  { path: "/contact", priority: "0.7" },
  { path: "/faq", priority: "0.5" },
];

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const normalizeDate = (value) => {
  if (!value) return "";

  const date =
    typeof value.toDate === "function"
      ? value.toDate()
      : new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return date.toISOString().split("T")[0];
};

const getBlogLastmod = (blog) =>
  normalizeDate(blog.updatedAt) ||
  normalizeDate(blog.createdAt) ||
  normalizeDate(blog.date);

const renderUrl = ({ path, priority, lastmod }) => {
  const lastmodTag = lastmod
    ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>`
    : "";

  return `  <url>
    <loc>${escapeXml(`${SITE_URL}${path}`)}</loc>${lastmodTag}
    <priority>${escapeXml(priority)}</priority>
  </url>`;
};

exports.sitemap = onRequest(
  {
    region: "europe-west1",
    memory: "256MiB",
    timeoutSeconds: 30,
  },
  async (_request, response) => {
    try {
      const snapshot = await db.collection("blogs").get();

      const blogUrls = snapshot.docs
        .map((doc) => {
          const blog = doc.data();
          const slug = String(blog.slug || doc.id).replace(/^\/+|\/+$/g, "");

          if (!slug) return null;

          return {
            path: `/news/${encodeURI(slug)}`,
            priority: "0.7",
            lastmod: getBlogLastmod(blog),
          };
        })
        .filter(Boolean);

      const seenUrls = new Set();
      const urls = [...staticUrls, ...blogUrls].filter((urlItem) => {
        if (seenUrls.has(urlItem.path)) return false;
        seenUrls.add(urlItem.path);
        return true;
      });

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(renderUrl).join("\n")}
</urlset>
`;

      response
        .status(200)
        .set("Content-Type", "application/xml; charset=utf-8")
        .set("Cache-Control", "public, max-age=300, s-maxage=300")
        .send(sitemap);
    } catch (error) {
      console.error("Failed to generate sitemap", error);
      response.status(500).send("Failed to generate sitemap");
    }
  },
);
