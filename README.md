# Portfolio Tomasza Jądera

Osobista strona prezentująca projekty, doświadczenie i zainteresowania.

## Strona

Po wdrożeniu przez GitHub Actions strona będzie dostępna pod adresem:

<https://tomaszjader.github.io/higgsfield/>

## Uruchomienie lokalne

Wymagany jest [Bun](https://bun.sh/).

```powershell
cd app
bun install
bun run dev
```

## Publikacja

Każdy push do gałęzi `main` uruchamia workflow GitHub Pages. Aplikacja jest
budowana jako statyczna strona i publikowana z `app/dist/client`.
