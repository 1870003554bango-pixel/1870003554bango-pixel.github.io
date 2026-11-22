# AGENTS.md — rules for any AI agent (Codex, Claude) working in this repo

Personal portfolio site. Astro 7, static output, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`. Overall plan: `PLAN.md`.

## Commands

- `npm run dev` — local dev server at http://localhost:4321
- `npm run build` — must pass before every commit
- `npm run preview` — serve the built `dist/`

## Where things go

| What | Where |
|---|---|
| One project = one file | `src/content/work/<slug>.md` or `.mdx` (schema in `src/content.config.ts`) |
| Images for a project | `src/assets/<slug>/` (Astro optimises them; reference relatively from the .md) |
| Short videos (compressed) | `public/video/<slug>/` |
| Runnable p5.js sketches | `public/sketches/<name>/index.html` (+ sketch.js) |
| Other runnable web demos | `public/demos/<name>/` |
| Reusable embeds | `src/components/` (Bilibili, Video, P5Sketch, FigmaEmbed, Gallery) |
| Helper scripts (ffmpeg etc.) | `scripts/` |

Raw source material lives OUTSIDE this repo, in sibling folders on the drive
(`../AI视频`, `../blender`, `../学校作品集`). Never copy raw footage, renders,
.blend / .prproj files or archives into the repo — only exported, compressed copies.

## Hard limits

- Any single file in the repo: **< 10 MB** (GitHub hard limit is 100 MB; Pages site should stay < 1 GB).
- Video: H.264 MP4, ≤ 1080p, muted loops ≤ 10 MB. Anything longer → Bilibili / YouTube / Vimeo embed.
- Photos: export at 2400 px long edge before adding; strip GPS EXIF.
- p5.js: load p5 from cdnjs with a pinned version; never commit `p5.js` / `p5.sound.min.js` copies.
- Heavy embeds (Bilibili, Figma, p5 iframes) load only after a click: show a poster image + a labelled button first.

## Code rules

- Internal links and `public/` asset URLs go through `url()` from `src/lib/url.ts`
  (the site may be served under `/<repo>/`). Never hard-code a leading `/` in an `href`/`src`.
- Colours, spacing and type come from the tokens in `src/styles/global.css`. No raw hex in components.
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

The repo sits on an exFAT external drive: macOS writes `._*` files (ignored in `.gitignore`),
and `core.fileMode` is set to false. Use npm, not pnpm (pnpm needs symlinks).
