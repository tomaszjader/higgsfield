import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "@/blog-content";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const base = import.meta.env.BASE_URL.replace(/\/$/, "");
        const today = new Date().toISOString().split("T")[0];
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          "  <url>",
          `    <loc>${origin}${base}/</loc>`,
          `    <lastmod>${today}</lastmod>`,
          "    <changefreq>weekly</changefreq>",
          "    <priority>1.0</priority>",
          "  </url>",
          ...["pl/", "en/", "blog/"].map((path) => `  <url><loc>${origin}${base}/${path}</loc><changefreq>weekly</changefreq></url>`),
          ...blogPosts.map((post) => `  <url><loc>${origin}${base}/blog/${post.slug}/</loc><lastmod>${post.publishedAt}</lastmod><changefreq>monthly</changefreq></url>`),
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
