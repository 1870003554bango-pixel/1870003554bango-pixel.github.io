# AGENTS.md — rules for any AI agent (Codex, Claude) working in this repo

Personal portfolio site. Astro 7, static output, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`. Overall plan: `PLAN.md`.

## Commands

- `npm run dev` — local dev server at http://localhost:4321
- `npm run build` — must pass before every commit
- `npm run preview` — serve the built `dist/`

## Source of truth

`md文件/Sitan_Ding_Portfolio_Claude_网站改造规范.md` (the spec) and `md文件/Sitan_Ding_Home_Claude_Brief_EN.md`
(exact Home copy) override PLAN.md and anything below
when they disagree. Read it before changing content or structure. Key rules from it:
no invented dates, roles, numbers or employers; team projects say `Team project`;
no stock/AI images posing as Sitan's work; no fake buttons; English default, Chinese at `/zh/`.

## Where things go

| What | Where |
|---|---|
| All interface text (en + zh), email, social links, resume path | `src/i18n/ui.ts` |
| All project data (en + zh), order, featured, links | `src/data/projects.ts` |
| Page layouts (shared by both languages) | `src/views/*.astro` |
| Routes (thin wrappers, one per language) | `src/pages/` (en) and `src/pages/zh/` (zh) |
| Images for a project | `src/assets/<slug>/`, imported in `projects.ts` |
| Runnable p5.js sketches / web demos | `public/demos/<slug>/index.html` |
| Short videos (compressed) | `public/video/<slug>/` |
| Bespoke project pages | `src/views/projects/<Name>.astro` + copy in `src/data/<slug>.ts`; set `customPage: true` in `projects.ts` and add `src/pages/work/<slug>.astro` and `src/pages/zh/work/<slug>.astro` (the generic `[slug]` route skips them). Briefs live in `md文件/<project>/` |
| Components | `src/components/` — `Cover` (image or TODO box), `ProjectCard`, `Demo` (click-to-run), `PhotoCarousel` (swipe/arrow/dot photo switcher, no autoplay) |
| Helper scripts (ffmpeg etc.) | `scripts/` |

Raw source material lives OUTSIDE this repo, in sibling folders on the drive
(`../AI视频`, `../blender`, `../学校作品集`). Never copy raw footage, renders,
.blend / .prproj files or archives into the repo — only exported, compressed copies.

## Hard limits

- Any single file in the repo: **< 10 MB** (GitHub hard limit is 100 MB; Pages site should stay < 1 GB).
- Video: H.264 MP4, ≤ 1080p, muted loops ≤ 10 MB. Anything longer → Bilibili / YouTube / Vimeo embed.
- Photos: export at 2400 px long edge before adding; strip GPS EXIF.
- p5.js: load p5 from a CDN with a pinned version; never commit `p5.js` / `p5.sound.min.js` copies.
- Heavy embeds (Bilibili, Figma, p5 iframes) load only after a click: show a poster image + a labelled button first.

## Code rules

- Page links go through `page(lang, route)` and `public/` files through `url()`, both in
  `src/lib/url.ts` (the site may be served under `/<repo>/`). Never hard-code a leading `/`.
  Routes end with `/` (`trailingSlash: 'always'`).
- Visible text never lives in a component: add a key to both `en` and `zh` in `src/i18n/ui.ts`.
- Colours, spacing and type come from the tokens in `src/styles/global.css`. No raw hex in components.
- Visual language: the spec's "Minimal Editorial" (section 8) — off-white `#F7F7F4`, near-black text,
  one blue accent `#276B9B` for links and small emphasis, hairline borders, work images lead.
- Follow the user's global UI rules: one accent colour, no gradients/glow/glassmorphism, hairline
  borders over shadows, body text ≥ 16px, visible focus states, click targets ≥ 44px,
  status never by colour alone, motion only when it explains something and respects reduced motion.
- No fake controls: anything that looks clickable must work.
- Plain Astro components + CSS. Do not add a UI framework or Tailwind without asking.

## Working with two agents

- Only one agent edits a given set of files at a time.
- Commit after every finished step with a clear message, so either agent's work can be reverted.
- Do not rewrite project text the user wrote unless asked; placeholder text is marked `待补充`.

## Drive quirks

The repo sits on an exFAT external drive: macOS writes `._*` files (ignored in `.gitignore`,
and deleted by `npm run clean:mac`, which runs before `dev` and `build`),
and `core.fileMode` is set to false. Use npm, not pnpm (pnpm needs symlinks).

If the dev server shows stale content after changing `src/content.config.ts` (a new frontmatter
field missing in dev but present in `npm run build`), stop the server and delete both caches:
`rm -rf .astro node_modules/.astro`, then restart.
