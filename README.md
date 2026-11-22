# My portfolio

Hi, I'm Tomasz Jąder. I build web applications and explore AI, automation, and tools that turn ideas into working solutions. This is my personal portfolio, where I share selected projects, the technologies I work with, and my interests beyond the screen.

[Live website](https://tomaszjader.github.io/higgsfield/) · [English](https://tomaszjader.github.io/higgsfield/en/) · [Polish](https://tomaszjader.github.io/higgsfield/pl/)

## About the site

The site brings together my work in fullstack development and my experiments with AI agents, RAG, and automation. It also has space for the things I enjoy outside work: travel, chess, and training.

- A hero video that follows the visitor's scroll, with support for reduced motion.
- A responsive layout for desktop and mobile.
- English and Polish versions with a language switch in the header.

On the main URL, the site opens in Polish when Polish is the browser's preferred language, and in English otherwise. The direct `/en/` and `/pl/` links always open the selected version.

## Built with

- React and TypeScript
- TanStack Start and TanStack Router
- Vite and Tailwind CSS
- Bun for dependencies and development scripts
- GitHub Actions and GitHub Pages for deployment

## Run locally

Install [Bun](https://bun.sh/) and Node.js, then run:

```sh
git clone https://github.com/tomaszjader/higgsfield.git
cd higgsfield/app
bun install --frozen-lockfile
bun run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Checks and builds

Run these commands from the `app/` directory:

```sh
bun run typecheck
bun run build
```

The build checks the UI rules and TypeScript before creating the production bundles. To generate the static site for GitHub Pages, enable `GITHUB_PAGES` before building. In PowerShell:

```powershell
$env:GITHUB_PAGES = "true"
bun run build
```

The static pages and assets are written to `app/dist/client/`.

## Project structure

| Location | Contents |
| --- | --- |
| `app/src/components/portfolio-page.tsx` | Shared page layout and English/Polish content |
| `app/src/scroll-scrub-scenes.ts` | Hero text, video sources, and posters |
| `app/src/styles.css` | Site styles and responsive layouts |
| `app/public/assets/` | Images, videos, and brand assets |
| `app/src/app-meta.json` | Shared page metadata and social preview settings |
| `.github/workflows/` | CI checks and GitHub Pages deployment |

## Deployment

The site is live on GitHub Pages. Each push to `main` triggers CI and the deployment workflow. GitHub Actions builds the static site with `GITHUB_PAGES=true` and publishes `app/dist/client/`.

## Connect with me

[LinkedIn](https://www.linkedin.com/in/tomasz-jader/) · [My website](https://tomaszjader.com/) · [Email](mailto:tomasz.jader@gmail.com)
