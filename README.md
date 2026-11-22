# Sitan Ding — Portfolio

Personal portfolio: digital media, interactive design and creative production.
Static site built with [Astro](https://astro.build), deployed to GitHub Pages.
English at `/`, Chinese at `/zh/`.

The target design and content rules are in
[`md文件/Sitan_Ding_Portfolio_Claude_网站改造规范.md`](md文件/Sitan_Ding_Portfolio_Claude_网站改造规范.md);
the Home page copy is in [`md文件/Sitan_Ding_Home_Claude_Brief_EN.md`](md文件/Sitan_Ding_Home_Claude_Brief_EN.md).

## Run locally

Requires Node 22+.

```bash
npm ci
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs dist/
npm run preview    # serves dist/ locally
```

## Where to edit

| What | File |
|---|---|
| Interface text, intro, About text, email | `src/i18n/ui.ts` (both `en` and `zh`) |
| Projects (titles, roles, tools, links, order, featured) | `src/data/projects.ts` |
| Project images | `src/assets/<slug>/` (imported in `projects.ts`) |
| Runnable demos | `public/demos/<slug>/` |
| Colours, type, spacing | `src/styles/global.css` |

Unknown facts stay `null` in `projects.ts` and show as **TBC**; missing images show a labelled
**TODO** box. Never replace these with stock or AI images.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo. Naming it `<username>.github.io` gives the shortest URL.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which sets the correct base path
   automatically (`/` for `<username>.github.io`, `/<repo>/` otherwise).

### Check after deploying

- Open a project URL directly, e.g. `/work/through-the-window/`, and refresh — it must not 404.
- Switch EN / 中文 on a project page — you should stay on the same project.
- On Through the Window, click **Experience the demo** and **Open fullscreen**.

Every page is pre-rendered to its own `index.html`, so deep links work without SPA rewrites.
