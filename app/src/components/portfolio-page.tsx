import type { CSSProperties, ReactNode } from "react";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { siteAssetUrl } from "@/lib/site-asset-url";
import { scrollScrubScenesByLocale, scrollScrubTheme } from "@/scroll-scrub-scenes";

export type Locale = "pl" | "en";

const copy = {
  pl: {
    skip: "Przejdź do treści", home: "strona główna", navLabel: "Nawigacja główna",
    nav: ["O mnie", "Projekty", "Umiejętności", "Po godzinach"], contactShort: "Porozmawiajmy",
    heroSide: "SCROLL / ODKRYWAJ", heroMore: "WIĘCEJ O MNIE", heroMoreAria: "Przewiń do sekcji O mnie",
    aboutEyebrow: "O MNIE", intro: "CZEŚĆ, JESTEM TOMASZ", titleStart: "Nie tylko", titleEmphasis: "piszę kod.", titleEnd: "Nadaję pomysłom formę.",
    signature: "TWÓRCA / FULLSTACK DEVELOPER / FAN AI", portraitAlt: "Portret Tomasza Jądera",
    bio1: "Zajmuję się tworzeniem nowoczesnych aplikacji webowych i eksplorowaniem możliwości sztucznej inteligencji. Najbardziej lubię moment, w którym technologia zaczyna rozwiązywać prawdziwy problem.",
    bio2: "Od 2020 roku rozwijam projekty, uczę się nowych narzędzi i łączę solidny software engineering z ciekawością wobec AI.", seeWork: "Zobacz, co tworzę",
    toolsEyebrow: "NARZĘDZIA I TECHNOLOGIE", expertiseStart: "Od pomysłu", expertiseEmphasis: "do produktu.",
    expertiseIntro: "Technologie są narzędziami. Najważniejsze jest to, co można dzięki nim zbudować.",
    capabilities: [
      { title: "Frontend", text: "Interfejsy, które są intuicyjne, szybkie i przyjemne w użyciu.", tags: ["Angular", "React", "TypeScript", "JavaScript"] },
      { title: "Backend", text: "Logika aplikacji, integracje i fundamenty solidnych systemów.", tags: ["Node.js", "Python", "API"] },
      { title: "Sztuczna inteligencja", text: "Agentowe workflow, modele językowe, wyszukiwanie i automatyzacja.", tags: ["LLM", "RAG", "MCP", "Automatyzacje"] },
    ],
    projectsEyebrow: "WYBRANE PRACE", projectsStart: "Projekty, które", projectsEmphasis: "mówią same za siebie.",
    projectsIntro: "Od aplikacji webowych po eksperymenty z AI. Kilka wybranych rzeczy z mojego GitHuba.",
    projectAria: "Otwórz projekt {name} na GitHub", allProjects: "Więcej projektów na GitHubie",
    labEyebrow: "EKSPERYMENTY AI", labLabel: "THE AI LAB / CIĄGŁA EKSPLORACJA", labStart: "Jutro", labEmphasis: "buduje się dziś.",
    labText: "Agenci AI, RAG, automatyzacja i integracje z narzędziami. Lubię testować to, co nowe, ale jeszcze bardziej lubię sprawdzać, co naprawdę działa.",
    labLink: "Poznaj moje eksperymenty i artykuły",
    interestsEyebrow: "POZA EKRANEM", interestsStart: "Po godzinach", interestsEmphasis: "też jestem ciekawy.",
    interestsIntro: "Świat nie kończy się na ekranie. To, co robię poza pracą, daje mi zupełnie nowe spojrzenie na to, co robię w niej.",
    contactEyebrow: "KONTAKT", contactIntro: "OTWARTY NA NOWE WYZWANIA", contactStart: "Masz pomysł?", contactEmphasis: "Zróbmy coś razem.",
    emailSubject: "Nowy projekt - współpraca", originalSite: "Oryginalna strona", backTop: "WRÓĆ NA GÓRĘ ↑",
    languageLabel: "Wybierz język", switchLanguage: "English",
  },
  en: {
    skip: "Skip to content", home: "home", navLabel: "Main navigation",
    nav: ["About", "Projects", "Skills", "Beyond work"], contactShort: "Let’s talk",
    heroSide: "SCROLL / EXPLORE", heroMore: "MORE ABOUT ME", heroMoreAria: "Scroll to the about section",
    aboutEyebrow: "ABOUT ME", intro: "HI, I’M TOMASZ", titleStart: "I don’t just", titleEmphasis: "write code.", titleEnd: "I bring ideas to life.",
    signature: "CREATOR / FULLSTACK DEVELOPER / AI ENTHUSIAST", portraitAlt: "Portrait of Tomasz Jąder",
    bio1: "I build modern web applications and explore what artificial intelligence can do. My favorite moment is when technology starts solving a real problem.",
    bio2: "Since 2020, I’ve been growing projects, learning new tools, and combining solid software engineering with curiosity about AI.", seeWork: "See what I’m building",
    toolsEyebrow: "TOOLS AND TECHNOLOGIES", expertiseStart: "From an idea", expertiseEmphasis: "to a product.",
    expertiseIntro: "Technology is a set of tools. What matters most is what we can build with them.",
    capabilities: [
      { title: "Frontend", text: "Interfaces that feel intuitive, fast, and enjoyable to use.", tags: ["Angular", "React", "TypeScript", "JavaScript"] },
      { title: "Backend", text: "Application logic, integrations, and the foundations of reliable systems.", tags: ["Node.js", "Python", "API"] },
      { title: "Artificial intelligence", text: "Agent workflows, language models, retrieval, and automation.", tags: ["LLM", "RAG", "MCP", "Automation"] },
    ],
    projectsEyebrow: "SELECTED WORK", projectsStart: "Projects that", projectsEmphasis: "speak for themselves.",
    projectsIntro: "From web applications to AI experiments. A few selected projects from my GitHub.",
    projectAria: "Open {name} on GitHub", allProjects: "More projects on GitHub",
    labEyebrow: "AI EXPERIMENTS", labLabel: "THE AI LAB / CONTINUOUS EXPLORATION", labStart: "Tomorrow", labEmphasis: "is built today.",
    labText: "AI agents, RAG, automation, and tool integrations. I enjoy testing what’s new, and I enjoy even more finding out what actually works.",
    labLink: "Explore my experiments and articles",
    interestsEyebrow: "BEYOND THE SCREEN", interestsStart: "Curiosity doesn’t", interestsEmphasis: "clock out.",
    interestsIntro: "There’s more to life than a screen. What I do outside work gives me a fresh perspective on what I do every day.",
    contactEyebrow: "CONTACT", contactIntro: "OPEN TO NEW CHALLENGES", contactStart: "Have an idea?", contactEmphasis: "Let’s build it together.",
    emailSubject: "New project - collaboration", originalSite: "Main website", backTop: "BACK TO TOP ↑",
    languageLabel: "Choose language", switchLanguage: "Polski",
  },
} as const;

const projects = [
  {
    number: "01", name: "Szeptucha", category: "AI / VOICE ASSISTANT",
    description: {
      pl: "Eksperyment z asystentem głosowym i inteligentną interakcją. Łączę modele językowe z praktycznymi scenariuszami.",
      en: "An experiment in voice assistants and natural interaction, combining language models with practical use cases.",
    },
    image: siteAssetUrl("assets/jader/szeptucha-voice-assistant.png"), url: "https://github.com/tomaszjader/szeptucha", tech: ["AI", "VOICE", "PYTHON"],
  },
  {
    number: "02", name: "RAG / Source of Truth", category: "AI / KNOWLEDGE SYSTEMS",
    description: {
      pl: "Praca z wyszukiwaniem informacji i kontekstem w aplikacjach opartych na modelach językowych.",
      en: "Exploring information retrieval and context in applications powered by language models.",
    },
    image: siteAssetUrl("assets/jader/rag-python-system.png"), url: "https://github.com/tomaszjader/RAG", tech: ["RAG", "LLM", "PYTHON"],
  },
  {
    number: "03", name: "Context Engineering Agent", category: "AGENTS / AUTOMATION",
    description: {
      pl: "Budowanie agentów, którym zależy nie tylko na promptach, ale też na właściwym kontekście i narzędziach.",
      en: "Building agents that depend on more than prompts: the right context and tools matter too.",
    },
    image: siteAssetUrl("assets/jader/llm-skills-blog-cover.png"), url: "https://github.com/tomaszjader/context-engineering-agent", tech: ["AGENTS", "TOOLS", "AI"],
  },
  {
    number: "04", name: "Agricultural Application", category: "FRONTEND / WEB APPLICATION",
    description: {
      pl: "Aplikacja webowa wykorzystująca Angular i TypeScript. Jeden z projektów z mojego portfolio open source.",
      en: "A web application built with Angular and TypeScript, featured in my open-source portfolio.",
    },
    image: siteAssetUrl("assets/jader/ai.webp"), url: "https://github.com/tomaszjader/agricultural-application", tech: ["ANGULAR", "TYPESCRIPT", "WEB"],
  },
];

const interests = {
  pl: [
    { number: "01", name: "Sztuczna inteligencja", text: "Modele LLM, automatyzacje i nowe sposoby pracy.", image: siteAssetUrl("assets/jader/ai.webp") },
    { number: "02", name: "Podróże", text: "Nowe miejsca, perspektywy i historie.", image: siteAssetUrl("assets/jader/travel.webp") },
    { number: "03", name: "Szachy", text: "Strategia, cierpliwość i myślenie kilka ruchów naprzód.", image: siteAssetUrl("assets/jader/chess.webp") },
    { number: "04", name: "Trening", text: "Równowaga, dyscyplina i rozwój poza ekranem.", image: siteAssetUrl("assets/jader/gim.webp") },
  ],
  en: [
    { number: "01", name: "Artificial intelligence", text: "LLMs, automation, and new ways of working.", image: siteAssetUrl("assets/jader/ai.webp") },
    { number: "02", name: "Travel", text: "New places, perspectives, and stories.", image: siteAssetUrl("assets/jader/travel.webp") },
    { number: "03", name: "Chess", text: "Strategy, patience, and thinking a few moves ahead.", image: siteAssetUrl("assets/jader/chess.webp") },
    { number: "04", name: "Training", text: "Balance, discipline, and growth away from the screen.", image: siteAssetUrl("assets/jader/gim.webp") },
  ],
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <path d="M6 22 22 6M8 6h14v14" /> : <path d="M3 14h21m-8-8 8 8-8 8" />}
    </svg>
  );
}

function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return <div className="tj-section-meta"><span className="tj-section-number">{index}</span><span>{children}</span></div>;
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="tj-website" lang={locale}>
      <a className="tj-skip" href="#o-mnie">{t.skip}</a>
      <header className="tj-header">
        <a href="#start" className="tj-brand" aria-label={`Tomasz Jąder — ${t.home}`}><img src={siteAssetUrl("assets/jader/brand-mark.svg")} alt="" width="31" height="31" /><span>TOMASZ <strong>JĄDER</strong></span></a>
        <nav className="tj-nav" aria-label={t.navLabel}>
          <a href="#o-mnie">{t.nav[0]}</a>
          <a href="#projekty">{t.nav[1]}</a>
          <a href="#umiejetnosci">{t.nav[2]}</a>
          <a href="#po-godzinach">{t.nav[3]}</a>
        </nav>
        <div className="tj-header-actions">
          <a className="tj-language-switch" href={siteAssetUrl(locale === "pl" ? "en/" : "pl/")} lang={locale === "pl" ? "en" : "pl"} aria-label={`${t.languageLabel}: ${t.switchLanguage}`}>
            {locale === "pl" ? "EN" : "PL"}
          </a>
          <a href={`mailto:tomasz.jader@gmail.com?subject=${encodeURIComponent(locale === "pl" ? "Porozmawiajmy o projekcie" : "Let’s talk about a project")}`} className="tj-header-contact"><span>{t.contactShort}</span><Arrow diagonal /></a>
        </div>
      </header>

      <main id="start">
        <div className="tj-hero">
          <ScrollScrub scenes={scrollScrubScenesByLocale[locale]} theme={scrollScrubTheme} />
          <div aria-hidden="true" className="tj-hero-side">{t.heroSide}</div>
          <a className="tj-hero-bottom" href="#o-mnie" aria-label={t.heroMoreAria}><span>{t.heroMore}</span><span className="tj-down-arrow">↓</span></a>
        </div>

        <section className="tj-manifest tj-container" id="o-mnie">
          <Eyebrow index="01 / 06">{t.aboutEyebrow}</Eyebrow>
          <div className="tj-manifest-grid">
            <div className="tj-manifest-title">
              <p className="tj-intro-label"><span className="tj-signal" /> {t.intro}</p>
              <h2>{t.titleStart} <em>{t.titleEmphasis}</em> {t.titleEnd}</h2>
              <div className="tj-signature"><img src={siteAssetUrl("assets/jader/brand-mark.svg")} alt="" width="38" height="38" /><span>{t.signature}</span></div>
            </div>
            <div className="tj-manifest-aside">
              <div className="tj-portrait"><img src={siteAssetUrl("assets/jader/tomaszjader.webp")} alt={t.portraitAlt} loading="lazy" /><span className="tj-portrait-index">TJ / 001</span></div>
              <p>{t.bio1}</p>
              <p>{t.bio2}</p>
              <a className="tj-text-action" href="#projekty">{t.seeWork} <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section className="tj-expertise" id="umiejetnosci">
          <div className="tj-container">
            <Eyebrow index="02 / 06">{t.toolsEyebrow}</Eyebrow>
            <div className="tj-expertise-heading"><h2>{t.expertiseStart} <em>{t.expertiseEmphasis}</em></h2><p>{t.expertiseIntro}</p></div>
            <div className="tj-capabilities">
              {t.capabilities.map((capability, index) => (
                <div className="tj-capability" key={capability.title}><span className="tj-capability-n">0{index + 1}</span><h3>{capability.title}</h3><p>{capability.text}</p><div className="tj-pill-set">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Arrow diagonal /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="tj-projects tj-container" id="projekty">
          <Eyebrow index="03 / 06">{t.projectsEyebrow}</Eyebrow>
          <div className="tj-section-heading"><h2>{t.projectsStart} <em>{t.projectsEmphasis}</em></h2><p>{t.projectsIntro}</p></div>
          <div className="tj-project-grid">
            {projects.map((project) => (
              <article className="tj-project" key={project.name}>
                <a className="tj-project-image" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={t.projectAria.replace("{name}", project.name)}>
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <span className="tj-project-hover"><Arrow diagonal /></span>
                </a>
                <div className="tj-project-topline"><span>{project.number} / {project.category}</span><span>GITHUB ↗</span></div>
                <div className="tj-project-details"><h3>{project.name}</h3><p>{project.description[locale]}</p></div>
                <div className="tj-project-tags">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <a className="tj-all-projects" href="https://github.com/tomaszjader" target="_blank" rel="noopener noreferrer"><span>{t.allProjects}</span><Arrow diagonal /></a>
        </section>

        <section className="tj-ai-lab" id="ai-lab">
          <div className="tj-ai-lab-art" aria-hidden="true" style={{ "--tj-ai-lab-image": `url("${siteAssetUrl("assets/jader/lab-architecture.webp")}")` } as CSSProperties & { "--tj-ai-lab-image": string }} />
          <div className="tj-container tj-ai-lab-content">
            <Eyebrow index="04 / 06">{t.labEyebrow}</Eyebrow>
            <div className="tj-ai-lab-label">{t.labLabel}</div>
            <h2>{t.labStart} <em>{t.labEmphasis}</em></h2>
            <p>{t.labText}</p>
            <a className="tj-lab-link" href="https://tomaszjader.com/" target="_blank" rel="noopener noreferrer"><span>{t.labLink}</span><Arrow diagonal /></a>
          </div>
          <div className="tj-ai-lab-footer" aria-hidden="true"><span>HUMAN IDEAS</span><span>✳</span><span>INTELLIGENT SYSTEMS</span></div>
        </section>

        <section className="tj-interests tj-container" id="po-godzinach">
          <Eyebrow index="05 / 06">{t.interestsEyebrow}</Eyebrow>
          <div className="tj-section-heading tj-interests-heading"><h2>{t.interestsStart} <em>{t.interestsEmphasis}</em></h2><p>{t.interestsIntro}</p></div>
          <div className="tj-interest-grid">
            {interests[locale].map((interest) => (
              <article className="tj-interest" key={interest.name}>
                <img src={interest.image} alt="" loading="lazy" />
                <div className="tj-interest-shade" />
                <span className="tj-interest-n">{interest.number} / 04</span>
                <div className="tj-interest-copy"><h3>{interest.name}</h3><p>{interest.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="tj-contact" id="kontakt">
          <div className="tj-container">
            <Eyebrow index="06 / 06">{t.contactEyebrow}</Eyebrow>
            <p className="tj-contact-intro"><span className="tj-signal" /> {t.contactIntro}</p>
            <h2>{t.contactStart}<br /><em>{t.contactEmphasis}</em></h2>
            <a className="tj-mail-link" href={`mailto:tomasz.jader@gmail.com?subject=${encodeURIComponent(t.emailSubject)}`}><span>tomasz.jader@gmail.com</span><Arrow diagonal /></a>
            <div className="tj-footer-bottom">
              <div className="tj-footer-brand"><img src={siteAssetUrl("assets/jader/brand-mark.svg")} alt="" width="28" height="28" /><span>TOMASZ JĄDER © 2026</span></div>
              <div className="tj-socials"><a href="https://github.com/tomaszjader" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tomasz-j" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://tomaszjader.com/" target="_blank" rel="noopener noreferrer">{t.originalSite} ↗</a></div>
              <a className="tj-back-top" href="#start">{t.backTop}</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
