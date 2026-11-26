import type { ReactNode } from "react";
import { siteAssetUrl } from "@/lib/site-asset-url";
import "./blog.css";

export function BlogArrow({ back = false }: { back?: boolean }) {
  return <span aria-hidden="true">{back ? "←" : "↗"}</span>;
}

export function BlogLayout({ children }: { children: ReactNode }) {
  const home = siteAssetUrl("pl/");
  return (
    <div className="tj-website tj-blog-website" lang="pl">
      <a className="tj-skip" href="#blog-main">Przejdź do treści</a>
      <header className="tj-header tj-blog-header">
        <a href={home} className="tj-brand" aria-label="Tomasz Jąder — strona główna">
          <img src={siteAssetUrl("assets/jader/brand-mark.svg")} alt="" width="31" height="31" />
          <span>TOMASZ <strong>JĄDER</strong></span>
        </a>
        <nav className="tj-nav" aria-label="Nawigacja główna">
          <a href={`${home}#o-mnie`}>O mnie</a><a href={`${home}#projekty`}>Projekty</a>
          <a href={`${home}#umiejetnosci`}>Umiejętności</a>
          <a href={siteAssetUrl("blog/")} aria-current="true">Blog</a>
        </nav>
        <div className="tj-header-actions">
          <a href={home} className="tj-blog-home-link"><BlogArrow back /> Portfolio</a>
          <a href="mailto:tomasz.jader@gmail.com" className="tj-header-contact"><span>Porozmawiajmy</span><BlogArrow /></a>
        </div>
      </header>
      <main id="blog-main">{children}</main>
      <footer className="tj-blog-footer tj-container">
        <a href={home} className="tj-footer-brand"><img src={siteAssetUrl("assets/jader/brand-mark.svg")} alt="" width="28" height="28" /><span>TOMASZ JĄDER © 2026</span></a>
        <p>Pomysły. Kod. Doświadczenia.</p>
        <a href="mailto:tomasz.jader@gmail.com">Porozmawiajmy <BlogArrow /></a>
      </footer>
    </div>
  );
}
