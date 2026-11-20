import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";
import { siteAssetUrl } from "@/lib/site-asset-url";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#F1876C",
  background: "#10151B",
  ink: "#F5F2EB",
  muted: "#C8D0D3",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "poznaj-tomasza",
    label: "Początek",
    kicker: "TOMASZ JĄDER  /  FULLSTACK + AI",
    title: "Technologia z ludzką perspektywą.",
    body: "Jestem Tomasz. Projektuję i buduję aplikacje, automatyzacje i narzędzia AI, które przekuwają pomysły w działające rozwiązania.",
    tags: ["FULLSTACK DEVELOPMENT", "AI & AUTOMATION"],
    clip: siteAssetUrl("assets/world/scene-01.mp4"),
    mobileClip: siteAssetUrl("assets/world/scene-01-mobile.mp4"),
    poster: siteAssetUrl("assets/world/scene-01-poster.png"),
    mobilePoster: siteAssetUrl("assets/world/scene-01-mobile-poster.png"),
    scroll: 2.35,
    linger: 0.12,
    objectPosition: "55% 42%",
    mobileObjectPosition: "52% 37%",
  },
];

export const scrollScrubScenesByLocale: Record<"pl" | "en", ScrollScrubScene[]> = {
  pl: scrollScrubScenes,
  en: [
    {
      ...scrollScrubScenes[0],
      id: "meet-tomasz",
      label: "The beginning",
      kicker: "TOMASZ JĄDER  /  FULLSTACK + AI",
      title: "Technology with a human perspective.",
      body: "I’m Tomasz. I design and build applications, automations, and AI tools that turn ideas into working solutions.",
      tags: ["FULLSTACK DEVELOPMENT", "AI & AUTOMATION"],
    },
  ],
};
