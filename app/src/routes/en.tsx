import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio-page";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Tomasz Jąder — Fullstack Developer & AI" },
      { name: "description", content: "I build modern web applications, automations, and AI tools." },
      { property: "og:title", content: "Tomasz Jąder — Fullstack Developer & AI" },
      { property: "og:description", content: "I build modern web applications, automations, and AI tools." },
      { property: "og:locale", content: "en_US" },
    ],
  }),
  component: EnglishPortfolio,
});

function EnglishPortfolio() {
  return <PortfolioPage locale="en" />;
}
