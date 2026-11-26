import { useState } from "react";
import { blogPosts, type BlogPost } from "@/blog-content";
import { blogReadingMinutes, formatBlogDate, normalizeBlogSearch } from "@/lib/blog";
import { siteAssetUrl } from "@/lib/site-asset-url";
import { BlogArrow, BlogLayout } from "./blog-layout";

const topics = [
  { label: "AI i LLM", tags: ["ai", "llm", "sztucznainteligencja", "artificialintelligence", "rag", "generativeai"] },
  { label: "Agenci AI", tags: ["agents", "agentarchitecture", "googleadk", "mcp", "skills"] },
  { label: "Automatyzacja", tags: ["automatyzacja", "automation", "n8n"] },
  { label: "Python", tags: ["python"] },
  { label: "Frontend", tags: ["frontend", "angular", "react", "reactjs", "webdesign", "webdevelopment"] },
];
const pageSize = 9;

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`tj-blog-card${featured ? " tj-blog-featured" : ""}`}>
      <a href={siteAssetUrl(`blog/${post.slug}/`)} className="tj-blog-card-link">
        <div className="tj-blog-card-image"><img src={siteAssetUrl(post.image)} alt={post.imageAlt} loading={featured ? "eager" : "lazy"} /><span className="tj-blog-image-arrow"><BlogArrow /></span></div>
        <div className="tj-blog-card-copy">
          <div className="tj-blog-post-meta"><span>{featured ? "NAJNOWSZY WPIS" : post.category}</span><time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time></div>
          <h2>{post.title}</h2><p>{post.excerpt}</p>
          <div className="tj-blog-card-bottom"><span>Czytaj artykuł <BlogArrow /></span><span>{blogReadingMinutes(post.contentHtml)} min czytania</span></div>
        </div>
      </a>
    </article>
  );
}

export function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const normalizedQuery = normalizeBlogSearch(query.trim());
  const isFiltered = Boolean(normalizedQuery || category);
  const topic = topics.find((item) => item.label === category);
  const filteredPosts = blogPosts.filter((post) => (!topic || post.tags.some((tag) => topic.tags.includes(normalizeBlogSearch(tag)))) &&
    (!normalizedQuery || normalizeBlogSearch([post.title, post.excerpt, ...post.tags].join(" ")).includes(normalizedQuery)));
  const posts = isFiltered ? filteredPosts : blogPosts.slice(1);
  return (
    <BlogLayout>
      <div className="tj-container tj-blog-intro">
        <div className="tj-section-meta"><span className="tj-section-number">DZIENNIK / {String(blogPosts.length).padStart(2, "0")}</span><span>BLOG</span></div>
        <div className="tj-blog-heading"><h1>Sprawdzam.<br /><em>Buduję. Zapisuję.</em></h1><p>Programowanie, sztuczna inteligencja i to, czego uczę się po drodze. Praktyka, eksperymenty i własne projekty.</p></div>
        <BlogCard post={blogPosts[0]} featured />
      </div>
      <section className="tj-container tj-blog-archive" aria-labelledby="archive-title">
        <div className="tj-blog-archive-top"><h2 id="archive-title">Wszystkie wpisy<span> / {blogPosts.length}</span></h2>
          <label className="tj-blog-search"><span>Szukaj we wpisach</span><input type="search" placeholder="Tytuł, temat lub tag…" value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(pageSize); }} /></label>
        </div>
        <div className="tj-blog-filters" role="group" aria-label="Filtruj według tematu">
          {["", ...topics.map((item) => item.label)].map((value) => <button key={value} type="button" aria-pressed={category === value} onClick={() => { setCategory(value); setVisibleCount(pageSize); }}>{value || "Wszystkie"}</button>)}
        </div>
        <p className="tj-blog-result-count" role="status">{isFiltered ? `Liczba wyników: ${filteredPosts.length}` : "Najnowszy wpis powyżej. Więcej historii poniżej."}</p>
        {posts.length ? <div className="tj-blog-grid">{posts.slice(0, visibleCount).map((post) => <BlogCard key={post.slug} post={post} />)}</div> :
          <div className="tj-blog-empty"><h3>Nie ma wpisów dla tego wyszukiwania.</h3><p>Spróbuj innego hasła lub wyświetl wszystkie artykuły.</p><button type="button" onClick={() => { setQuery(""); setCategory(""); setVisibleCount(pageSize); }}>Wyczyść filtry <BlogArrow /></button></div>}
        {visibleCount < posts.length && <button className="tj-blog-load-more" type="button" onClick={() => setVisibleCount((count) => count + pageSize)}>Pokaż więcej wpisów <span>{Math.min(visibleCount, posts.length)} / {posts.length} ↓</span></button>}
      </section>
    </BlogLayout>
  );
}
