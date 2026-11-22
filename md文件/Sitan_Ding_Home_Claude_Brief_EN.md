# Sitan Ding — Home Page (English)

**Purpose:** A personal digital media portfolio for postgraduate applications and internet / digital media internships. This is a home page, not a course-report index or a conventional CV.

**Voice:** Personal, curious, approachable and professional. Use first person. Avoid claims such as “award-winning”, “industry-leading”, “expert”, or unverified impact metrics.

## 1. Content and final website copy

### Site identity and navigation

**Brand:** SITAN DING

**Navigation:** Home · Work · About · Contact

**Optional language switch (future):** EN / 中文 (the initial Home must be entirely in English).

### Section A — Hero / first impression

**Eyebrow:** DIGITAL MEDIA / INTERACTIVE DESIGN / VISUAL STORYTELLING

**Primary heading (H1):**

> Hi, I’m Sitan.  
> I make things to watch, play, and explore.

**Intro:**

> I’ve always loved the variety of entertainment on the internet — from videos and games to interactive experiences. With a background in Interaction Design at the University of Sydney, I enjoy combining photography, storytelling, and technology to turn ideas into things people can experience for themselves.

**Primary CTA:** Explore My Work → (scroll to Featured Work or open Work page)

**Secondary CTA:** More About Me ↗ (open About page)

**Hero image:** Use the user's own strong rocket-launch photograph already used on the earlier portfolio home, if it exists in the repository or is later supplied. Use a well-cropped image, not a stock substitute. A subtle caption can read `CAPTURED THROUGH MY LENS / AEROSPACE PHOTOGRAPHY` only if the image is confirmed as the user's photo. Do not overlay long text on the image.

### Section B — Featured Work

**Eyebrow:** SELECTED PROJECTS / 01—04

**Heading (H2):** Selected Work.

**Section intro:**

> A few things I’ve made and helped bring to life — from interactive worlds and VR experiences to videos shared online.

Show **exactly four** project cards in this order, each linking to its real project-detail page if available. Otherwise show a non-broken placeholder / coming soon state until its page exists.

#### Card 01 — Through the Window

- **Title:** Through the Window
- **Category:** Interactive Art · Creative Coding
- **Tools:** p5.js · JavaScript
- **Short description:**

> Inspired by the skies I’ve photographed while travelling, this interactive artwork lets visitors move through a full day and watch a digital landscape change with time.

- **Image:** Authentic screenshot of the p5.js scene (sunrise or evening recommended).
- **On hover:** View Project ↗
- **Detail page focus:** Personal photography inspiration, 24-hour clock interaction, generative sky, stars and weather-like visual changes, live demo.

#### Card 02 — Aerospace Stories

- **Title:** Aerospace Stories
- **Category:** Cinematography · Video Production
- **Short description:**

> A collection of aerospace videos I contributed to through filming and, for one project, post-production. These experiences brought my interest in photography into real online storytelling.

- **Image:** Actual photograph or video still from the user's aerospace projects.
- **On hover:** View Project ↗
- **Detail page focus:** Tianzhou-8 filming, Tianzhou-9 filming, crewed lunar exploration filming and editing; accurately describe the user's role in each.
- **Verified work links provided by user:**
  - Douyin: https://v.douyin.com/7TDQCjaL7zE/
  - Bilibili: https://www.bilibili.com/video/BV1aguJzSEdn/
  - Bilibili: https://www.bilibili.com/video/BV1VGcszLEgY/

#### Card 03 — Becoming Non-Human

- **Title:** Becoming Non-Human
- **Category:** Virtual Reality · Immersive Media
- **Tools:** Unity · Pico 4
- **Short description:**

> A collaborative VR experience that invites people to explore different environments through the perspectives of a sea turtle, mangroves, and bats.

- **Image:** Actual VR gameplay screenshot.
- **On hover:** View Project ↗
- **Detail page focus:** Immersive perspective, environments, gameplay/experience capture, team contribution and testing.

#### Card 04 — Scam Ready

- **Title:** Scam Ready
- **Category:** Interactive Storytelling · Experience Design
- **Tools:** Figma / prototype, if included in actual project files
- **Short description:**

> An interactive experience for international students. By making choices and seeing their consequences, visitors learn to pause, question suspicious claims, and verify information independently.

- **Image:** Actual prototype screenshot or team-produced project visual.
- **On hover:** View Project ↗
- **Detail page focus:** Decision-based narrative, verification, original design work and clearly credited team contribution.

**Section CTA:** View All Projects → (Work page)

### Section C — Short personal introduction

**Eyebrow:** BEHIND THE WORK

**Heading (H2):** Curious by nature. Always making something.

**Body:**

> I enjoy discovering new forms of online entertainment, but what excites me most is figuring out how they’re made. Photography and video production taught me to pay attention to moments and stories. Interaction design gave me another way to create — one where people can take part rather than only watch.

> I’m still exploring where these interests can lead, and this site is a collection of what I’ve tried so far.

**CTA:** Get to Know Me → (About page)

### Section D — Contact/footer

**Heading (H2):** Let’s make something interesting.

**Short sentence:**

> Have a project, an idea, or an opportunity in mind? I’d love to hear from you.

**Email CTA:** Say Hello ↗

**Email:** 1870003554@qq.com

**Footer:** © Sitan Ding · Digital Media & Interactive Design

Do **not** expose a street address, phone number or unverified social URLs on the public homepage. Only use LinkedIn / Bilibili / Douyin profile links if actual user profile addresses are supplied; links to individual videos belong primarily on the Aerospace Stories detail page.

## 2. Visual and interaction specification for Claude

1. **Look:** Minimal, editorial, personal and media-led; warm off-white (#F7F7F4), charcoal (#191919), secondary grey (#686868), subtle blue accent (#276B9B) inspired by the user's aerospace imagery. Avoid loud gradients, oversized decorative badges, and card-heavy SaaS aesthetics.
2. **Type:** Modern sans-serif, strong display hierarchy. H1 prominent and readable; paragraph width about 50–65 characters on desktop; left-aligned text is preferred. Use font fallbacks.
3. **Hero:** Desktop two-column arrangement, roughly 55% text and 45% actual photographic visual; mobile stacks text then image. Balanced spacing and cropping; no low-contrast grey-on-white text.
4. **Featured Work:** Desktop two-column grid of four large, visually consistent images (ideally 4:3 or 16:10). Each card has title, category and 1–2 lines of description. Mobile uses one column. Support hover and keyboard focus states. No generic stock images.
5. **Media:** Use genuine project screenshots or neutral labelled placeholders. Preserve aspect ratios; use responsive srcsets if available and `loading="lazy"` below the fold. Hero image may be eager-loaded.
6. **Motion:** Gentle reveal and hover only. Respect `prefers-reduced-motion`. Avoid autoplay audio and long loading intro animations.
7. **Navigation:** The four top-level pages remain Home / Work / About / Contact. The featured cards should route to project pages, not popups, once pages exist. Maintain existing site navigation and language capabilities.
8. **Responsiveness:** Test approximately 375px, 768px and 1440px wide; no overflow or clipped heading.
9. **Accessibility:** One H1, logical H2 headings, sufficient text contrast, meaningful image alt text and visible keyboard focus.
10. **Technical:** Inspect the existing repository, framework, routes, assets and GitHub Pages config before changing anything. Reuse the project's existing structure and avoid introducing a new framework or unnecessary dependencies. Respect GitHub Pages base paths, direct route navigation and browser refresh behavior.

## 3. Required work sequence

1. Audit current repository structure, framework, routes and available images. Summarize existing Home and Work components before modifying.
2. Implement or update the Home page to match the above **exact English copy** while respecting the current design system.
3. Implement all four project cards with stable slugs/links as supported by the current architecture. Do not create broken navigation; report missing project pages.
4. Use real images already present; for missing images use clearly labelled neutral placeholders instead of AI-generated stand-ins or random stock.
5. Build/test the site, verify responsiveness and links and report the modified files and remaining media needed.

## 4. Guardrails / factual integrity

- The user's education is **Interaction Design at the University of Sydney**, but do not label them a graduate unless current academic completion has been confirmed. “With a background in Interaction Design at the University of Sydney” is safe.
- `Through the Window` is an individual p5.js generative interactive work; avoid an exact year on Home until its timeline is reconciled.
- `Becoming Non-Human` and `Scam Ready` are collaborative projects; do not imply sole authorship.
- The three aerospace pieces are public videos the user contributed to; do not claim they created the whole published films or the organisations' official content strategy.
- Do not show platform view counts, awards, rankings, metrics, employers or graduation dates unless verified.
- No need for PS-style academic language, assignment codes, grades, course assessments or generic self-praise on the homepage.
