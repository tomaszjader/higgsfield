import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio-page";

export const Route = createFileRoute("/pl")({
  head: () => ({
    meta: [
      { title: "Tomasz Jąder — Fullstack Developer i AI" },
      { name: "description", content: "Tworzę nowoczesne aplikacje webowe, automatyzacje i narzędzia AI." },
      { property: "og:title", content: "Tomasz Jąder — Fullstack Developer i AI" },
      { property: "og:description", content: "Tworzę nowoczesne aplikacje webowe, automatyzacje i narzędzia AI." },
      { property: "og:locale", content: "pl_PL" },
    ],
  }),
  component: PolishPortfolio,
});

function PolishPortfolio() {
  return <PortfolioPage locale="pl" />;
}
