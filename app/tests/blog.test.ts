import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { blogPosts, blogPostSlugs, getBlogPost } from "../src/blog-content";
import { formatBlogDate, normalizeBlogSearch, prepareBlogContent, resolveBlogHref } from "../src/lib/blog";

// Slugs published in the original site's sitemap when its articles were imported.
// Future articles may be added without changing this compatibility snapshot.
const originalSlugs = [
  "stitch-google-ai-design-tool",
  "nauka-slowek-ai-vocabulary-learning-app",
  "365-dni-na-zielono-github-streak",
  "skille-w-swiecie-llm-czym-sa-i-jak-je-tworzyc",
  "function-calling-vs-mcp-vs-natywne-narzedzia",
  "kompletny-przewodnik-po-serwerach-mcp-model-context-protocol",
  "context-engineering-w-praktyce-agenty-llm",
  "budowa-agentow-ai-to-powazne-wyzwanie",
  "adk-vs-langchain-wybor-frameworka-agenty-ai",
  "szeptucha-szczegolowy-poradnik-dostepny",
  "budowanie-wlasnego-asystenta-glosowego-szeptucha-python",
  "jak-zbudowac-wlasny-system-rag",
  "budowanie-wlasnego-systemu-rag-python",
  "rag-gpt4o-qdrant-assistant",
  "n8n-formularz-kontaktowy",
  "wyszukiwanie-semantyczne-qdrant-python-fastapi",
  "agent-tomek-google-adk-automatyzacja-instagrama",
  "hodowla-kur-na-balkonie-claude-ai-eksperyment",
  "moje-pierwsze-kroki-vibe-coding-sukces",
  "moja-walka-z-literowkami-aplikacja-android",
  "n8n-okiem-programisty-agent-automatyzacji",
  "asystent-pogodowy-n8n-telegram-api",
  "gymtracker-vibe-coding-drugie-podejscie",
  "autocenzura-pod-kontrola-vibe-coding-3",
  "automatyzacja-instagrama-python-google-sheets",
  "automatyzacja-nawykow-n8n-wdziecznosc",
  "ai-journal-dziennik-wspomagany-przez-llm",
  "maly-skrypt-duza-roznica-ctrl-q-autokorekta",
  "szeptucha-notatki-glosowe-whisper",
  "poranny-automat-raportowy-switomir",
  "second-brain-n8n-ai-agent",
  "paradoks-produktywnosci-weekend-planner",
  "czysty-kod-to-tylko-polowa-sukcesu",
  "jak-przestalem-oszukiwac-samego-siebie-w-nauce-angielskiego",
  "moje-hobby-podsumowanie-roku",
];

function assertLocalImage(path: string) {
  expect(path).toMatch(/^assets\/blog\/[a-zA-Z0-9_-]+\.webp$/);
  expect(existsSync(fileURLToPath(new URL(`../public/${path}`, import.meta.url)))).toBe(true);
}

describe("imported blog compatibility", () => {
  test("keeps every original public slug, uniquely addressable", () => {
    expect(blogPostSlugs).toEqual(expect.arrayContaining(originalSlugs));
    expect(new Set(blogPostSlugs).size).toBe(blogPostSlugs.length);
    for (const slug of originalSlugs) expect(getBlogPost(slug)?.slug).toBe(slug);
    expect(getBlogPost("this-article-does-not-exist")).toBeUndefined();
  });

  test.each(blogPosts)("validates imported article $slug", (post) => {
    expect(post.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    expect(post.title.trim().length).toBeGreaterThan(0);
    expect(post.excerpt.trim().length).toBeGreaterThan(0);
    expect(post.imageAlt.trim().length).toBeGreaterThan(0);
    expect(post.sourceUrl).toBe(`https://tomaszjader.com/blog/${post.slug}`);
    expect(post.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(new Date(post.publishedAt).toISOString().slice(0, 10)).toBe(post.publishedAt);
    expect(new Date(`${post.originalDate} 12:00:00 UTC`).toISOString().slice(0, 10)).toBe(post.publishedAt);
    expect(post.readingMinutes).toBeGreaterThan(0);
    expect(post.wordCount).toBeGreaterThan(0);
    assertLocalImage(post.image);

    expect(post.contentHtml).not.toMatch(/<\s*\/?\s*(?:script|style|iframe|object|embed|form)\b/i);
    expect(post.contentHtml).not.toMatch(/\son[\w-]+\s*=/i);
    expect(post.contentHtml).not.toMatch(/(?:href|src)\s*=\s*["']\s*(?:javascript|data):/i);

    for (const [, src] of post.contentHtml.matchAll(/\bsrc=["']([^"']+)["']/gi)) assertLocalImage(src);
    for (const [, href] of post.contentHtml.matchAll(/\bhref=["']([^"']+)["']/gi)) {
      const url = new URL(href, "https://tomaszjader.com/");
      if (url.origin !== "https://tomaszjader.com") continue;
      const slug = url.pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1];
      if (slug) expect(getBlogPost(slug)).toBeDefined();
    }

    const prepared = prepareBlogContent(post.contentHtml, "/higgsfield/");
    expect(prepared.headings).toHaveLength([...post.contentHtml.matchAll(/<h2\b/gi)].length);
    expect(new Set(prepared.headings.map(({ id }) => id)).size).toBe(prepared.headings.length);
    for (const heading of prepared.headings) expect(prepared.html).toContain(`id="${heading.id}"`);
  });
});

describe.each(["/", "/higgsfield/"])("blog links below %s", (base) => {
  const slug = originalSlugs[0];

  test("resolves local images and original article URLs below the deployment base", () => {
    expect(resolveBlogHref("assets/blog/cover.webp", base)).toBe(`${base}assets/blog/cover.webp`);
    expect(resolveBlogHref("/assets/blog/cover.webp", base)).toBe(`${base}assets/blog/cover.webp`);
    expect(resolveBlogHref(`/blog/${slug}`, base)).toBe(`${base}blog/${slug}/`);
    expect(resolveBlogHref(`https://tomaszjader.com/blog/${slug}/?from=blog#details`, base))
      .toBe(`${base}blog/${slug}/?from=blog#details`);
    expect(resolveBlogHref("https://tomaszjader.com/blog", base)).toBe(`${base}blog/`);
    expect(resolveBlogHref("/blog/?tag=AI#articles", base)).toBe(`${base}blog/?tag=AI#articles`);
  });

  test("preserves anchors, external URLs and contact links", () => {
    for (const href of ["#section-1", "https://github.com/tomaszjader/RAG", "mailto:tomasz.jader@gmail.com", "tel:+48123456789"])
      expect(resolveBlogHref(href, base)).toBe(href);
    expect(resolveBlogHref("/blog/not-imported", base)).toBe("https://tomaszjader.com/blog/not-imported");
  });

  test("prepares article links without changing code, lists or inline formatting", () => {
    const html = `<h2>Przykład <em>AI</em> &amp; kod</h2><p>Tekst <strong>ważny</strong>.</p><ul><li>Lista</li></ul><pre><code>if (a &lt; b) return a;</code></pre><a href="/blog/${slug}?a=1&amp;b=2#details">Wpis</a><img src="assets/blog/cover.webp" alt="Ilustracja"><h2>Przykład <em>AI</em> &amp; kod</h2>`;
    const prepared = prepareBlogContent(html, base);
    expect(prepared.headings.map(({ title }) => title)).toEqual(["Przykład AI & kod", "Przykład AI & kod"]);
    expect(new Set(prepared.headings.map(({ id }) => id)).size).toBe(2);
    expect(prepared.html).toContain('<p>Tekst <strong>ważny</strong>.</p><ul><li>Lista</li></ul>');
    expect(prepared.html).toContain('<pre><code>if (a &lt; b) return a;</code></pre>');
    expect(prepared.html).toContain(`<a href="${base}blog/${slug}/?a=1&amp;b=2#details">Wpis</a>`);
    expect(prepared.html).toContain(`<img src="${base}assets/blog/cover.webp" alt="Ilustracja">`);
  });
});

test("formats publication dates in Polish independently of the browser timezone", () => {
  expect(formatBlogDate("2026-04-12")).toBe("12 kwietnia 2026");
});

test("matches Polish article titles regardless of case and diacritics", () => {
  expect(normalizeBlogSearch("Nauka SŁÓWEK – ŻÓŁĆ, ĄĘŚŃŹ"))
    .toBe("nauka slowek – zolc, aesnz");
});
