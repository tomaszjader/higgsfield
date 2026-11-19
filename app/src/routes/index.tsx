import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { siteAssetUrl } from "@/lib/site-asset-url";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({ component: Portfolio });

const projects = [
  {
    number: "01",
    name: "Szeptucha",
    category: "AI / VOICE ASSISTANT",
    description: "Eksperyment z asystentem głosowym i inteligentną interakcją. Łączę modele językowe z praktycznymi scenariuszami.",
    image: siteAssetUrl("assets/jader/szeptucha-voice-assistant.png"),
    url: "https://github.com/tomaszjader/szeptucha",
    tech: ["AI", "VOICE", "PYTHON"],
  },
  {
    number: "02",
    name: "RAG / Source of Truth",
    category: "AI / KNOWLEDGE SYSTEMS",
    description: "Praca z wyszukiwaniem informacji i kontekstem w aplikacjach opartych na modelach językowych.",
    image: siteAssetUrl("assets/jader/rag-python-system.png"),
    url: "https://github.com/tomaszjader/RAG",
    tech: ["RAG", "LLM", "PYTHON"],
  },
  {
    number: "03",
    name: "Context Engineering Agent",
    category: "AGENTS / AUTOMATION",
    description: "Budowanie agentów, którym zależy nie tylko na promptach, ale też na właściwym kontekście i narzędziach.",
    image: siteAssetUrl("assets/jader/llm-skills-blog-cover.png"),
    url: "https://github.com/tomaszjader/context-engineering-agent",
    tech: ["AGENTS", "TOOLS", "AI"],
  },
  {
    number: "04",
    name: "Agricultural Application",
    category: "FRONTEND / WEB APPLICATION",
    description: "Aplikacja webowa wykorzystująca Angular i TypeScript. Jeden z projektów z mojego portfolio open source.",
    image: siteAssetUrl("assets/jader/ai.webp"),
    url: "https://github.com/tomaszjader/agricultural-application",
    tech: ["ANGULAR", "TYPESCRIPT", "WEB"],
  },
];

const interests = [
  { number:"01", name:"Sztuczna inteligencja", text:"Modele LLM, automatyzacje i nowe sposoby pracy.", image:siteAssetUrl("assets/jader/ai.webp") },
  { number:"02", name:"Podróże", text:"Nowe miejsca, perspektywy i historie.", image:siteAssetUrl("assets/jader/travel.webp") },
  { number:"03", name:"Szachy", text:"Strategia, cierpliwość i myślenie kilka ruchów naprzód.", image:siteAssetUrl("assets/jader/chess.webp") },
  { number:"04", name:"Trening", text:"Równowaga, dyscyplina i rozwój poza ekranem.", image:siteAssetUrl("assets/jader/gim.webp") },
];

function Arrow({ diagonal=false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <path d="M6 22 22 6M8 6h14v14"/> : <path d="M3 14h21m-8-8 8 8-8 8"/>}
    </svg>
  );
}

function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return <div className="tj-section-meta"><span className="tj-section-number">{index}</span><span>{children}</span></div>;
}

function Portfolio() {
  return (
    <div className="tj-website">
      <a className="tj-skip" href="#o-mnie">Przejdź do treści</a>
      <header className="tj-header">
        <a href="#start" className="tj-brand" aria-label="Tomasz Jąder — strona główna"><img src={siteAssetUrl("assets/jader/brand-mark.svg")} alt="" width="31" height="31"/><span>TOMASZ <strong>JĄDER</strong></span></a>
        <nav className="tj-nav" aria-label="Nawigacja główna">
          <a href="#o-mnie">O mnie</a>
          <a href="#projekty">Projekty</a>
          <a href="#umiejetnosci">Umiejętności</a>
          <a href="#po-godzinach">Po godzinach</a>
        </nav>
        <a href="mailto:tomasz.jader@gmail.com?subject=Porozmawiajmy%20o%20projekcie" className="tj-header-contact"><span>Porozmawiajmy</span><Arrow diagonal /></a>
      </header>

      <main id="start">
        <div className="tj-hero">
          <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
          <div aria-hidden="true" className="tj-hero-side">SCROLL / ODKRYWAJ</div>
          <a className="tj-hero-bottom" href="#o-mnie" aria-label="Przewiń do sekcji O mnie"><span>WIĘCEJ O MNIE</span><span className="tj-down-arrow">↓</span></a>
        </div>

        <section className="tj-manifest tj-container" id="o-mnie">
          <Eyebrow index="01 / 06">O MNIE</Eyebrow>
          <div className="tj-manifest-grid">
            <div className="tj-manifest-title">
              <p className="tj-intro-label"><span className="tj-signal" /> CZEŚĆ, JESTEM TOMASZ</p>
              <h2>Nie tylko <em>piszę kod.</em> Nadaję pomysłom formę.</h2>
              <div className="tj-signature"><img src={siteAssetUrl("assets/jader/brand-mark.svg")} alt="" width="38" height="38"/><span>TWÓRCA / FULLSTACK DEVELOPER / FAN AI</span></div>
            </div>
            <div className="tj-manifest-aside">
              <div className="tj-portrait"><img src={siteAssetUrl("assets/jader/tomaszjader.webp")} alt="Portret Tomasza Jądera" loading="lazy"/><span className="tj-portrait-index">TJ / 001</span></div>
              <p>Zajmuję się tworzeniem nowoczesnych aplikacji webowych i eksplorowaniem możliwości sztucznej inteligencji. Najbardziej lubię moment, w którym technologia zaczyna rozwiązywać prawdziwy problem.</p>
              <p>Od 2020 roku rozwijam projekty, uczę się nowych narzędzi i łączę solidny software engineering z ciekawością wobec AI.</p>
              <a className="tj-text-action" href="#projekty">Zobacz, co tworzę <Arrow diagonal /></a>
            </div>
          </div>
        </section>

        <section className="tj-expertise" id="umiejetnosci">
          <div className="tj-container">
            <Eyebrow index="02 / 06">NARZĘDZIA I TECHNOLOGIE</Eyebrow>
            <div className="tj-expertise-heading"><h2>Od pomysłu <em>do produktu.</em></h2><p>Technologie są narzędziami. Najważniejsze jest to, co można dzięki nim zbudować.</p></div>
            <div className="tj-capabilities">
              <div className="tj-capability"><span className="tj-capability-n">01</span><h3>Frontend</h3><p>Interfejsy, które są intuicyjne, szybkie i przyjemne w użyciu.</p><div className="tj-pill-set"><span>Angular</span><span>React</span><span>TypeScript</span><span>JavaScript</span></div><Arrow diagonal /></div>
              <div className="tj-capability"><span className="tj-capability-n">02</span><h3>Backend</h3><p>Logika aplikacji, integracje i fundamenty solidnych systemów.</p><div className="tj-pill-set"><span>Node.js</span><span>Python</span><span>API</span></div><Arrow diagonal /></div>
              <div className="tj-capability"><span className="tj-capability-n">03</span><h3>Artificial Intelligence</h3><p>Agentowe workflow, modele językowe, wyszukiwanie i automatyzacja.</p><div className="tj-pill-set"><span>LLM</span><span>RAG</span><span>MCP</span><span>Automations</span></div><Arrow diagonal /></div>
            </div>
          </div>
        </section>

        <section className="tj-projects tj-container" id="projekty">
          <Eyebrow index="03 / 06">WYBRANE PRACE</Eyebrow>
          <div className="tj-section-heading"><h2>Projekty, które <em>mówią same za siebie.</em></h2><p>Od aplikacji webowych po eksperymenty z AI. Kilka wybranych rzeczy z mojego GitHuba.</p></div>
          <div className="tj-project-grid">
            {projects.map((project) => (
              <article className="tj-project" key={project.name}>
                <a className="tj-project-image" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Otwórz projekt ${project.name} na GitHub`}>
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <span className="tj-project-hover"><Arrow diagonal /></span>
                </a>
                <div className="tj-project-topline"><span>{project.number} / {project.category}</span><span>GITHUB ↗</span></div>
                <div className="tj-project-details"><h3>{project.name}</h3><p>{project.description}</p></div>
                <div className="tj-project-tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
          <a className="tj-all-projects" href="https://github.com/tomaszjader" target="_blank" rel="noopener noreferrer"><span>Więcej projektów na GitHubie</span><Arrow diagonal /></a>
        </section>

        <section className="tj-ai-lab" id="ai-lab">
          <div className="tj-ai-lab-art" aria-hidden="true" style={{ "--tj-ai-lab-image": `url("${siteAssetUrl("assets/jader/lab-architecture.webp")}")` } as CSSProperties & { "--tj-ai-lab-image": string }} />
          <div className="tj-container tj-ai-lab-content">
            <Eyebrow index="04 / 06">EKSPERYMENTY AI</Eyebrow>
            <div className="tj-ai-lab-label">THE AI LAB / CONTINUOUS EXPLORATION</div>
            <h2>Jutro <em>buduje się dziś.</em></h2>
            <p>Agenci AI, RAG, automatyzacja i integracje z narzędziami. Lubię testować to, co nowe, ale jeszcze bardziej lubię sprawdzać, co naprawdę działa.</p>
            <a className="tj-lab-link" href="https://tomaszjader.com/" target="_blank" rel="noopener noreferrer"><span>Poznaj moje eksperymenty i artykuły</span><Arrow diagonal /></a>
          </div>
          <div className="tj-ai-lab-footer" aria-hidden="true"><span>HUMAN IDEAS</span><span>✳</span><span>INTELLIGENT SYSTEMS</span></div>
        </section>

        <section className="tj-interests tj-container" id="po-godzinach">
          <Eyebrow index="05 / 06">POZA EKRANEM</Eyebrow>
          <div className="tj-section-heading tj-interests-heading"><h2>Po godzinach <em>też jestem ciekawy.</em></h2><p>Świat nie kończy się na ekranie. To, co robię poza pracą, daje mi zupełnie nowe spojrzenie na to, co robię w niej.</p></div>
          <div className="tj-interest-grid">
            {interests.map((interest) => (
              <article className="tj-interest" key={interest.name}>
                <img src={interest.image} alt="" loading="lazy" />
                <div className="tj-interest-shade"/>
                <span className="tj-interest-n">{interest.number} / 04</span>
                <div className="tj-interest-copy"><h3>{interest.name}</h3><p>{interest.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="tj-contact" id="kontakt">
          <div className="tj-container">
            <Eyebrow index="06 / 06">KONTAKT</Eyebrow>
            <p className="tj-contact-intro"><span className="tj-signal"/> OTWARTY NA NOWE WYZWANIA</p>
            <h2>Masz pomysł?<br/><em>Zróbmy coś razem.</em></h2>
            <a className="tj-mail-link" href="mailto:tomasz.jader@gmail.com?subject=Nowy%20projekt%20-%20wsp%C3%B3%C5%82praca"><span>tomasz.jader@gmail.com</span><Arrow diagonal /></a>
            <div className="tj-footer-bottom">
              <div className="tj-footer-brand"><img src={siteAssetUrl("assets/jader/brand-mark.svg")} alt="" width="28" height="28"/><span>TOMASZ JĄDER © 2026</span></div>
              <div className="tj-socials"><a href="https://github.com/tomaszjader" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tomasz-j" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://tomaszjader.com/" target="_blank" rel="noopener noreferrer">Oryginalna strona ↗</a></div>
              <a className="tj-back-top" href="#start">WRÓĆ NA GÓRĘ ↑</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
