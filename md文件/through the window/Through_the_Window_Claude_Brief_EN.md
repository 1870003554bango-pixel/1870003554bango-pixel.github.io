# Through the Window — Project Detail Page
## Implementation brief for Claude · Sitan Ding portfolio

> **Objective:** Build the first fully realised project detail page in my existing GitHub-hosted personal portfolio. Treat this as an independent digital-media artwork rather than a university assignment report. The page must include the **actual interactive p5.js sketch**, not just a video or screenshots. All public-facing copy should be in **English** and written in a natural first-person voice.

## 0. Files I have provided

1. `assets/airplane-window-inspiration.jpg` — **my real photograph**, taken through an airplane window at dusk. This is the primary creative inspiration and must be used in the page. Keep the image's authorship intact; do not replace it with AI-generated or stock imagery. The original is portrait, 1536 × 2048, with a dark cabin interior, aircraft wing, a blue-purple sky and a narrow orange sunset at the horizon.
2. `source/Deco1012 Design Rationale(3).pdf` — my original project rationale, presentation transcript, technical breakdown and references. Use its actual content and tone as the source of truth.
3. `source/Deco1012.zip` — my original project source: `index.html`, `sketch.js`, `style.css`, `p5.js`, `p5.sound.min.js`. Do not rewrite the artwork from scratch or change its behaviour simply to fit the website.
4. Live editor/full-screen URL provided by me: `https://editor.p5js.org/1870003554bango/full/1boOWnIYq`

If any file is missing from the working repository, tell me exactly what to copy over rather than inventing a replacement.

## 1. Inspect the current codebase first

- Determine the existing framework, router, design tokens, components, navigation, data conventions, and GitHub Pages deployment configuration.
- Create or update **one** project route, e.g. `/work/through-the-window` (adapt to the site's existing routing conventions). Update the relevant Work card and, if needed, the Home featured-project link to target it.
- Reuse the existing header, footer, visual language and responsive behaviour. Do **not** redesign the Home page, overwrite unrelated projects, or break the English-first navigation.
- Avoid unnecessary dependencies, back-end services, fake metrics, stock photos, and artificially generated mockup pictures.
- Check both local development and production build behaviour before finishing.

## 2. Page concept and visual direction

**Project name:** Through the Window  
**Tagline:** A quiet window into the changing sky.  
**Category:** Generative Art / Interactive Experience / Creative Coding  
**Technology:** p5.js · JavaScript  
**Role:** Independent concept, visual design, interaction design, and development.

The emotional journey of the page is:

**Real view through an airplane window → personal observation → a digital window visitors can control → visual systems and small discoveries → reflection.**

Make the result look like a calm, premium editorial digital-media portfolio, **not a DECO1012 assignment submission**. Recommended design:
- Light, slightly warm off-white background, dark text and subtle blue-violet accents taken from the actual photograph.
- One strong sans-serif headline family, restrained mono labels if the site already uses them.
- Generous whitespace, consistent content width (roughly 1080–1200px max), short readable paragraphs (roughly 60–75 characters per line), and minimal decoration.
- The image and interactive artwork provide most of the colour. Do not add decorative gradients over the original photo or crop away its aircraft-window shape.
- Desktop: combine portrait image and copy; use wide, full-content-width interactive artwork. Mobile: single column and a clear fullscreen alternative.
- Avoid covering the sketch's **top-right analogue clock**, **digital clock** or **books** with floating UI overlays.
- Prefer motion in the actual artwork to unnecessary website scroll animations. Respect `prefers-reduced-motion` for added website motion.

## 3. Section order + EXACT PUBLIC-FACING ENGLISH COPY

The headings and paragraphs below are ready to publish. Small edits for rhythm and layout are fine, but preserve the facts and first-person viewpoint.

### Section A — Hero / opening impression

**Eyebrow:** INTERACTIVE ART · CREATIVE CODING · P5.JS

# Through the Window

**A quiet window into the changing sky.**

> I’ve always enjoyed watching the world from a window, especially when flying. Through the Window takes that feeling and turns it into an interactive scene, where you can move through a whole day and watch the light, landscape and sky change around you.

**Primary CTA:** `Explore the Interactive Artwork ↓` → scroll to `#experience`  
**Secondary CTA:** `View in Fullscreen ↗` → open my live p5.js URL in a new tab

**Hero media:** Use `assets/airplane-window-inspiration.jpg` as a genuine, prominent **portrait photograph**. Give it a small caption:

*The view that started it all — photographed from an airplane window.*

Suggested desktop layout: image 38–42% on left; title/intro/CTA on right. Do not stretch/crop the portrait image into an unsuitable wide hero. On mobile stack image and text without cropping the window.

**Optional small metadata row:** `Type: Generative interactive artwork` · `Role: Independent project` · `Tools: p5.js / JavaScript`.

### Section B — Experience it (MOST IMPORTANT)

## Step into the Window

> This isn’t a video. The scene responds to your choices — try moving time forward, slowing down for a moment, or finding the little details hidden inside the room.

Immediately underneath the heading, render a **large, live, interactive p5.js iframe**. It should receive pointer and keyboard interaction. For the first implementation use the exact URL I provided:

```html
<section id="experience" aria-labelledby="experience-heading">
  <h2 id="experience-heading">Step into the Window</h2>
  <div class="sketch-embed">
    <iframe
      src="https://editor.p5js.org/1870003554bango/full/1boOWnIYq"
      title="Through the Window — interactive generative artwork by Sitan Ding"
      loading="lazy"
      allowfullscreen
      allow="fullscreen"
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>
  <a href="https://editor.p5js.org/1870003554bango/full/1boOWnIYq"
     target="_blank" rel="noopener noreferrer">Open the full experience ↗</a>
</section>
```

```css
.sketch-embed {
  width: 100%;
  aspect-ratio: 4 / 3; /* source virtual canvas is 7680 × 5760 */
  min-height: 0;
  overflow: hidden;
  background: #101522;
  border-radius: 10px;
}
.sketch-embed iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
```

Adapt this to React/Next/Vite or the existing CSS system, if applicable. Do not blindly paste duplicate components.

**Interaction instructions directly under the demo (three short items):**

- **Drag the analogue clock** — Choose any moment in the 24-hour cycle.
- **Click the digital clock** — Switch between four time speeds and watch the scene evolve.
- **Click the books** — Discover a small animation tucked into the room.

Make the instructions easy to scan; use three text columns on desktop, a stacked layout on mobile. These are real behaviours in the original sketch.

**Important technical notes:**
- The original sketch uses `VIRTUAL_W = 7680`, `VIRTUAL_H = 5760` and fits the canvas within the viewport. Prefer a **4:3** frame to avoid large black letterbox areas and unreadably small interactions.
- Dragging the analogue clock pauses the normal time flow while the user controls time. Clicking the digital clock resumes time progression and cycles four speed factors (`1`, `100`, `10000`, `100000`). Do not promise drag-and-auto-play at the same time.
- Do not put a transparent link, scroll-trigger overlay, or pointer-blocking hero graphic over the iframe.
- Do not invent a React approximation of the sketch. Use the original code or the actual live embed.
- **Test the real embed in production.** The external fullscreen URL was provided by me, but its behaviour inside my final site's iframe must be verified. If embedding is blocked, keep the prominent fullscreen link and switch to a self-hosted copy from the supplied ZIP.
- For mobile, make the `Open the full experience` link particularly clear. The original tiny clock controls may need a thoughtfully scoped touch-accessibility improvement; do not claim mobile drag works until tested.

### Section C — Personal inspiration

## Inspired by the View Outside My Window

> I often choose a window seat when I fly because I love watching how the sky changes. I’ve seen sunrises and sunsets above the clouds, and I’ve also spent time photographing the night sky and early-morning light by the sea.
>
> I started this project with those memories and my own photographs. The colours of the digital sky are based on light and gradients I’ve observed and captured, rather than an imagined colour palette alone.
>
> I wanted to turn the feeling of waiting for the perfect light into something others could explore for themselves.

**Media:** Use my supplied airplane-window photograph, already in the hero, as the core reference. If I upload additional **real** photographs of dawn, sunset or night sky, you may add a 2–3 photo strip here. Until then, **do not invent additional personal photographs**. A tasteful close-up reuse of the original is acceptable, but avoid duplicating the full portrait several times.

**Visual connection suggestion:** a discreet palette of sampled sky tones; the source `skyColors` array contains hourly colour values. Do not pretend the palette is a measured scientific dataset.

### Section D — The changing day

## One Window. Twenty-Four Hours.

> The view is never quite the same. Cool early-morning colours turn into daylight, the sky warms around sunset, and the stars return at night. Mountains, clouds and small details shift along with the time of day.
>
> I wanted the transitions to feel gentle and familiar, even though the scenery is created through code.

**Gallery:** 3–4 screenshots **captured from the real sketch** at consistent viewport dimensions. Suggested labels: `DAWN`, `DAYLIGHT`, `SUNSET`, `NIGHT`. Prefer matching screenshots from the same program over unrelated stock imagery. If screenshots are not yet available, create clear, neutral asset placeholders with descriptive filenames, and tell me precisely which screenshots to capture; do not auto-generate fake scenes.

A short looping screen recording showing a day-to-night change is optional; ensure it does not replace the live interactive demo.

### Section E — Interactions & small discoveries

## More Than Just Watching

> I didn’t want to make a fixed animation. I wanted visitors to have a little control over what they see, while still leaving some moments to chance.

Three feature rows with small **real** screenshots or captures:

**01 / Move Through Time**  
*Drag the analogue clock to choose a moment and watch the colours and scenery respond.*

**02 / Change the Pace**  
*Click the digital clock to switch between time speeds. At faster speeds, the movement of the sky and stars becomes easier to notice.*

**03 / Find the Small Surprises**  
*Click the books by the window to see a subtle falling animation. Other details, like passing meteors, appear unexpectedly.*

The source includes a ring-based hit area around the analogue clock, a clickable digital clock, and interactive books. Do not describe features not present in `sketch.js`.

### Section F — Behind the digital scene

## A Scene Built from Rules

> I used p5.js and JavaScript to bring the landscape to life. Some elements follow the time of day, while others use controlled randomness so that the experience doesn’t feel exactly the same every time.
>
> The sky moves between colours taken from my photographs. The stars and meteors have their own motion, while clouds, mountains, flowers and occasional cats add variation to the scene. I also organised the code into smaller functions to make the different visual elements easier to adjust.

**Technical details to represent accurately without overwhelming visitors:**
- An hourly `skyColors` palette and colour interpolation drive the changing sky.
- Stars are generated, twinkle, and may create trails after dark; meteors appear randomly.
- Mountains, clouds, flowers and cats use generated or time-dependent behaviour.
- `drawSky`, `drawMountains` and other drawing functions organise the sketch.
- A virtual-coordinate scaling system and `windowResized` handle responsive canvas sizing (this does not automatically guarantee that interactions are easy to hit on small mobile screens).

**Visual:** one annotated screenshot and/or a small real-code excerpt. No giant source-code wall. Technical explanations can optionally appear in a collapsible `How it works` section, but the page must remain understandable without it.

### Section G — Reflection / ending

## A Small Reminder to Look Outside

> This project brought together three things I care about: photography, the feeling of travelling, and my curiosity about what I can create with code.
>
> The most interesting part was trying to make something programmed feel natural — balancing smooth changes in light with small, unexpected details. It helped me see interactive media as another way of sharing memories and experiences, not just showing information on a screen.
>
> I hope it gives people a reason to slow down for a moment and notice the view around them.

**Large ending quote:**

> **“Stop and look more at the things around you.”**

**Bottom navigation:** `← All Work` and `Next Project →` (use valid existing routes; if the next route does not exist yet, omit or disable that action instead of linking to a dead page).

**Credits / transparency (small, unobtrusive text):**

`Concept, visual design, interaction design and development: Sitan Ding.`  
`Made with p5.js and JavaScript. Original sky colours and creative direction informed by my photography.`  
`Selected AI assistance: ChatGPT was used to help sample sky colours from my photographs and to assist with parts of code development.`

The source Design Rationale also acknowledges *Moon Knight* (2022) as an inspiration for the accelerated star-trail visual. If referencing this in the final public page, acknowledge it as an inspiration rather than suggesting Marvel imagery or music was used.

## 4. Recommended final page wireframe

```text
[SHARED SITE HEADER / HOME / WORK / ABOUT / CONTACT]

[breadcrumb: Work / Through the Window]

[ HERO: portrait real airplane photo | title, tagline, 3-line intro, CTA ]

[ 'STEP INTO THE WINDOW' ]
[                LIVE INTERACTIVE p5.js — 4:3                   ]
[     Drag analogue clock   |   Change speed   |   Tap books    ]
[              OPEN THE FULL EXPERIENCE ↗                      ]

[ 'INSPIRED BY THE VIEW OUTSIDE MY WINDOW' ]
[ natural personal writing | photo-derived colour palette / photo ]

[ 'ONE WINDOW. TWENTY-FOUR HOURS.' ]
[ screenshot Dawn ] [ screenshot Daylight ] [ screenshot Sunset ] [ screenshot Night ]

[ 'MORE THAN JUST WATCHING' ]
[ clock capture + text ]
[ digital clock capture + text ]
[ book animation capture + text ]

[ 'A SCENE BUILT FROM RULES' ]
[ real screenshot / short code snippet + 2 concise paragraphs ]

[ reflection + large final quote ]
[ credits + Back to Work ]
[ SHARED FOOTER ]
```

## 5. Technical implementation requirements

1. **Prioritise the working p5.js interactive frame.** Keep it on the page itself and ensure it is clickable. It must not be replaced with a video, a fake canvas, a static image or a button-only external link.
2. **Recommended first iteration: iframe to the supplied fullscreen URL.** There should also be a clear external `Open full experience` fallback. The official p5.js editor also provides a share/embed option. If the fullscreen URL fails as an iframe, check the actual editor's Share → Embed code before using a locally hosted copy.
3. **Optionally self-host:** Extract the original source from `Deco1012.zip` into a dedicated standalone static directory, e.g. `public/experiences/through-the-window/` (adapt to the repo's framework). Use the original `sketch.js` and an available p5.js library. Embed that local index in an iframe with a GitHub Pages base-aware path; do not drop code into the global React app scope or load the sketch on every route.
4. **Preserve proportions:** the source artwork's virtual canvas is 7680 × 5760, or 4:3. Don't arbitrarily crop its important controls into a cinematic 16:9 frame.
5. **Mobile and accessibility:** keep a full-page launch button, meaningful iframe `title`, useful image alt text, visible focus styles, and no hover-only information. Test mouse, trackpad and touch interactions, as feasible. Don't pretend original touch support exists without verifying it.
6. **Performance:** the sketch uses an offscreen star-trail buffer, many stars and other animated elements. Avoid loading multiple copies on the Home and Work pages. Lazy-load it when near the Experience section; use screenshots for project thumbnails.
7. **No made-up results:** don't claim user testing, awards, published impressions or external reviews. There is no evidence of those in this project's provided materials.
8. **No made-up assets:** only use the provided real airplane photo and genuine captures of the sketch; if real captures are unavailable, leave clean labelled placeholders and report them.
9. **Works on GitHub Pages:** respect the repository's base path, static assets, and direct-route refresh behaviour. No server APIs. Confirm the production build and deployed links.
10. **Keep a coherent site:** use shared typography, header and footer, and current project cards. Don't redesign unrelated pages.

## 6. Asset checklist

**Available now**
- [x] `assets/airplane-window-inspiration.jpg`: original photo, portrait 1536×2048.
- [x] `source/Deco1012.zip`: complete source-code archive.
- [x] Public URL for original interactive sketch.
- [x] `source/Deco1012 Design Rationale(3).pdf`: project text and explanation.

**Still needed / may be created by capturing the actual running project**
- [ ] 1 genuine wide screenshot for the Work project card.
- [ ] 3–4 matching screenshots at different times of day.
- [ ] 2–3 cropped interaction-detail screenshots for analogue clock, digital clock and books.
- [ ] Optional 10–20-second screen recording of the changing landscape.
- [ ] Optional additional real personal photography if I provide it later.

Do not generate missing imagery and pass it off as my original work.

## 7. Acceptance checklist

- [ ] Homepage and Work page retain their existing designs and links.
- [ ] `Through the Window` card opens this new project page.
- [ ] My real airplane-window photo is prominent, not distorted or replaced.
- [ ] Project headings and writing match the natural first-person English copy above.
- [ ] The real p5.js artwork is present and interactive within the project page.
- [ ] Dragging analogue clock, clicking digital clock and books work in desktop testing.
- [ ] Mobile view remains legible and has a functioning fullscreen link; report touch-control limitations honestly.
- [ ] No broken images, no non-working next-project buttons, no JavaScript console errors caused by integration.
- [ ] GitHub Pages production build and routes work, including direct refresh.
- [ ] Any missing assets, caveats, design decisions and changed files are reported.

## 8. How to report back to me

After implementing, explain in Chinese:
1. Which files were created or modified and which page route is available.
2. How the p5.js work is embedded (remote iframe vs self-hosted static copy).
3. What you verified: clock drag, speed switch, books, mobile and full-screen fallback.
4. Which real screenshots or personal photographs I still need to upload.
5. Any GitHub Pages deployment steps I need to complete.

**Do not stop at a design proposal. Implement this in the existing repository, build the site, and report the actual results.**
