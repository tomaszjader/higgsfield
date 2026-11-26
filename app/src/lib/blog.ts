import { blogPosts } from "../blog-content";

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${date.slice(0, 10)}T12:00:00Z`));
}

export function blogReadingMinutes(html: string): number {
  return Math.max(1, Math.ceil(html.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length / 200));
}

export function normalizeBlogSearch(value: string): string {
  return value.toLocaleLowerCase("pl").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l");
}

function atBase(base: string, path: string): string {
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

// Resolve links at render time so this also works below GitHub Pages' /higgsfield/.
export function resolveBlogHref(href: string, base: string): string {
  if (href.startsWith("#") || /^(?:mailto:|tel:)/i.test(href)) return href;
  let url: URL;
  try { url = new URL(href, "https://tomaszjader.com/"); } catch { return href; }
  if (url.origin !== "https://tomaszjader.com") return href;
  const path = url.pathname.replace(/\/+$/, "");
  if (path === "/blog") return `${atBase(base, "blog/")}${url.search}${url.hash}`;
  const slug = path.match(/^\/blog\/([^/]+)$/)?.[1];
  if (slug && blogPosts.some((post) => post.slug === slug)) {
    return `${atBase(base, `blog/${slug}/`)}${url.search}${url.hash}`;
  }
  if (url.pathname.startsWith("/assets/blog/")) return atBase(base, url.pathname);
  return url.href;
}

function headingText(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
}

export function prepareBlogContent(html: string, base: string) {
  const headings: { id: string; title: string }[] = [];
  const content = html
    .replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi, (_match, attributes: string, title: string) => {
      const id = attributes.match(/\bid=["']([^"']+)["']/)?.[1] ?? `section-${headings.length + 1}`;
      headings.push({ id, title: headingText(title) });
      return `<h2${attributes.replace(/\s*id=["'][^"']*["']/g, "")} id="${id}">${title}</h2>`;
    })
    .replace(/\b(href|src)="([^"]*)"/gi, (_match, attribute: string, value: string) => {
      const resolved = resolveBlogHref(value.replace(/&amp;/g, "&"), base);
      return `${attribute}="${resolved.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"`;
    });
  return { html: content, headings };
}
