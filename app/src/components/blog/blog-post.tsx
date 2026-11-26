import { blogPosts, type BlogPost } from "@/blog-content";
import { blogReadingMinutes, formatBlogDate, prepareBlogContent } from "@/lib/blog";
import { siteAssetUrl } from "@/lib/site-asset-url";
import { BlogCard } from "./blog-index";
import { BlogArrow, BlogLayout } from "./blog-layout";

export function BlogPostPage({ post }: { post: BlogPost }) {
  const content = prepareBlogContent(post.contentHtml, import.meta.env.BASE_URL);
  const related = blogPosts.filter((item) => item.slug !== post.slug).sort((a, b) =>
    Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 2);
  return (
    <BlogLayout>
      <article>
        <header className="tj-container tj-blog-post-intro">
          <a href={siteAssetUrl("blog/")} className="tj-blog-back"><BlogArrow back /> Wszystkie wpisy</a>
          <div className="tj-blog-post-meta"><span>{post.category}</span><time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time><span>{blogReadingMinutes(post.contentHtml)} min czytania</span></div>
          <h1>{post.title}</h1>
          <p className="tj-blog-post-lead">{post.excerpt}</p>
          <div className="tj-blog-author"><img src={siteAssetUrl("assets/jader/tomaszjader.webp")} alt="" width="44" height="44" /><div><strong>Tomasz Jąder</strong><span>Fullstack developer / fan AI</span></div></div>
          <figure className="tj-blog-post-cover"><img src={siteAssetUrl(post.image)} alt={post.imageAlt} fetchPriority="high" /></figure>
        </header>
        <div className="tj-blog-reading">
          <div className="tj-container tj-blog-reading-grid">
            <aside className="tj-blog-contents" aria-label="Spis treści">
              <div className="tj-blog-contents-inner"><p>W TYM ARTYKULE</p>
                {content.headings.length ? <ol>{content.headings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`}>{heading.title}</a></li>)}</ol> : <p className="tj-blog-contents-note">Notatka z pracy i eksperymentów.</p>}
                <a href={siteAssetUrl("blog/")} className="tj-blog-back"><BlogArrow back /> Wróć do bloga</a>
              </div>
            </aside>
            <div>
              <div className="tj-blog-prose" dangerouslySetInnerHTML={{ __html: content.html }} />
              <div className="tj-blog-article-end"><div className="tj-blog-tags">{post.tags.map((tag) => <span key={tag}>#{tag.replace(/^#/, "")}</span>)}</div><a href={post.sourceUrl} target="_blank" rel="noopener noreferrer">Wpis na tomaszjader.com <BlogArrow /></a></div>
            </div>
          </div>
        </div>
      </article>
      <section className="tj-container tj-blog-related" aria-labelledby="related-title"><div className="tj-blog-archive-top"><h2 id="related-title">Czytaj dalej<em>.</em></h2><a href={siteAssetUrl("blog/")}>Wszystkie wpisy <BlogArrow /></a></div><div className="tj-blog-related-grid">{related.map((item) => <BlogCard key={item.slug} post={item} />)}</div></section>
    </BlogLayout>
  );
}

export function BlogPostNotFound() {
  return <BlogLayout><div className="tj-container tj-blog-missing"><p className="tj-section-number">404 / BLOG</p><h1>Nie znaleziono wpisu.</h1><p>Sprawdź adres lub wybierz artykuł z listy.</p><a className="tj-text-action" href={siteAssetUrl("blog/")}><BlogArrow back /> Wróć do bloga</a></div></BlogLayout>;
}
