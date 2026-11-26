import { createFileRoute, notFound } from "@tanstack/react-router";
import { getBlogPost } from "@/blog-content";
import { BlogPostNotFound, BlogPostPage } from "@/components/blog/blog-post";
import { siteAssetUrl } from "@/lib/site-asset-url";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Nie znaleziono wpisu | Tomasz Jąder" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    return { meta: [
      { title: `${post.title} | Tomasz Jąder` },
      { name: "description", content: post.excerpt },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.excerpt },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:image", content: siteAssetUrl(post.image) },
      { name: "twitter:image", content: siteAssetUrl(post.image) },
      { property: "article:published_time", content: post.publishedAt },
      { property: "article:author", content: "Tomasz Jąder" },
    ], links: [{ rel: "canonical", href: post.sourceUrl }] };
  },
  component: Article,
  notFoundComponent: BlogPostNotFound,
});

function Article() {
  return <BlogPostPage post={Route.useLoaderData().post} />;
}
