import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex } from "@/components/blog/blog-index";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Blog — programowanie i eksperymenty AI | Tomasz Jąder" },
    { name: "description", content: "Praktyczne artykuły Tomasza Jądera o programowaniu, sztucznej inteligencji, agentach AI i automatyzacji. Projekty, poradniki i doświadczenia." },
    { property: "og:title", content: "Blog | Tomasz Jąder" },
    { property: "og:description", content: "Programowanie, sztuczna inteligencja i to, czego uczę się po drodze." },
    { property: "og:locale", content: "pl_PL" },
  ] }),
  component: BlogIndex,
});
