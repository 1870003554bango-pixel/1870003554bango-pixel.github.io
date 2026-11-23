/**
 * Through the Window — project page copy.
 * Source: md文件/through the window/Through_the_Window_Claude_Brief_EN.md (public copy is English only).
 * Facts are checked against public/demos/through-the-window/sketch.js — do not describe behaviour
 * that isn't in the sketch.
 */
export const liveUrl = 'https://editor.p5js.org/1870003554bango/full/1boOWnIYq';

export const copy = {
  eyebrow: 'Interactive art · Creative coding · p5.js',
  title: 'Through the Window',
  tagline: 'A quiet window into the changing sky.',
  intro:
    'I’ve always enjoyed watching the world from a window, especially when flying. Through the Window takes that feeling and turns it into an interactive scene, where you can move through a whole day and watch the light, landscape and sky change around you.',
  ctaPrimary: 'Explore the Interactive Artwork',
  ctaSecondary: 'View in Fullscreen',
  photoAlt:
    'Looking out of an airplane window at dusk: the dark cabin frames a blue-violet sky, the aircraft wing, and a thin orange line of sunset on the horizon.',
  photoCaption: 'The view that started it all — photographed from an airplane window.',
  meta: [
    { k: 'Type', v: 'Generative interactive artwork' },
    { k: 'Role', v: 'Independent project' },
    { k: 'Tools', v: 'p5.js / JavaScript' },
  ],

  experience: {
    title: 'Step into the Window',
    body: 'This isn’t a video. The scene responds to your choices — try moving time forward, slowing down for a moment, or finding the little details hidden inside the room.',
    iframeTitle: 'Through the Window — interactive generative artwork by Sitan Ding',
    steps: [
      { title: 'Drag the analogue clock', text: 'Choose any moment in the 24-hour cycle.' },
      { title: 'Click the digital clock', text: 'Switch between four time speeds and watch the scene evolve.' },
      { title: 'Click the books', text: 'Discover a small animation tucked into the room.' },
    ],
    note: 'Time pauses while you drag the clock. Click the digital clock, or press Space, to let it run again.',
    open: 'Open the full experience',
    mirror: 'or open the copy hosted on this site',
    mobile: 'On a phone, the clock controls are small. The full experience gives the scene the whole screen.',
  },

  inspiration: {
    title: 'Inspired by the View Outside My Window',
    body: [
      'I often choose a window seat when I fly because I love watching how the sky changes. I’ve seen sunrises and sunsets above the clouds, and I’ve also spent time photographing the night sky and early-morning light by the sea.',
      'I started this project with those memories and my own photographs. The colours of the digital sky are based on light and gradients I’ve observed and captured, rather than an imagined colour palette alone.',
      'I wanted to turn the feeling of waiting for the perfect light into something others could explore for themselves.',
    ],
    paletteTitle: 'The sky, hour by hour',
    paletteNote: 'The hourly sky colours in the sketch, sampled from my own photographs.',
    galleryLabel: 'From my window seat',
    galleryNote: 'More views I’ve photographed from the window seat, from daylight to night.',
    gallery: [
      { key: 'window-day-clouds', caption: 'Above the clouds', alt: 'Through a white cabin window: deep blue sky, the wingtip, and towering white clouds below.' },
      { key: 'window-ocean-atoll', caption: 'Over the open ocean', alt: 'A wing over a deep blue ocean scattered with small clouds, with a turquoise ring-shaped reef below.' },
      { key: 'window-last-light', caption: 'Last light along the wing', alt: 'A long wing with engines in silhouette over a sea of cloud, a thin orange line of sunset on the horizon.' },
      { key: 'window-sunset-storm', caption: 'Sunset breaking through storm clouds', alt: 'Dark storm clouds with a bright orange gap of sunset, the wingtip silhouetted on the right.' },
      { key: 'window-twilight-lights', caption: 'Twilight, with town lights below', alt: 'A dark wing against a deep blue twilight sky, a red band on the horizon and small town lights far below.' },
      { key: 'window-night-stars', caption: 'Stars above the clouds at night', alt: 'A night sky full of stars above a pale layer of cloud, the red-lit wingtip at the right edge.' },
    ],
  },

  day: {
    title: 'One Window. Twenty-Four Hours.',
    body: [
      'The view is never quite the same. Cool early-morning colours turn into daylight, the sky warms around sunset, and the stars return at night. Mountains, clouds and small details shift along with the time of day.',
      'I wanted the transitions to feel gentle and familiar, even though the scenery is created through code.',
    ],
    frames: [
      { key: 'dawn', label: 'Dawn', time: '06:42', alt: 'The sketch at 06:42: a muted violet sky, the sun low in the top-left corner and soft pink clouds.' },
      { key: 'daylight', label: 'Daylight', time: '12:30', alt: 'The sketch at 12:30: a bright blue sky, the sun high in the window and white clouds.' },
      { key: 'sunset', label: 'Sunset', time: '18:03', alt: 'The sketch at 18:03: a warm pink sky as the sun leaves the window and the grass darkens.' },
      { key: 'night', label: 'Night', time: '22:33', alt: 'The sketch at 22:33: a navy sky full of small stars, the moon, and faint clouds.' },
    ],
    caption: 'Captured from the running sketch.',
  },

  interactions: {
    title: 'More Than Just Watching',
    body: 'I didn’t want to make a fixed animation. I wanted visitors to have a little control over what they see, while still leaving some moments to chance.',
    rows: [
      {
        n: '01',
        title: 'Move Through Time',
        text: 'Drag the analogue clock to choose a moment and watch the colours and scenery respond.',
        img: 'detail-analogue-clock',
        alt: 'The 24-hour analogue clock on the wall, its blue hand pointing to 18.',
      },
      {
        n: '02',
        title: 'Change the Pace',
        text: 'Click the digital clock to switch between time speeds. At faster speeds, the movement of the sky and stars becomes easier to notice.',
        img: 'detail-digital-clock',
        alt: 'The digital clock on the desk showing 22:33:00 below the night-time window.',
      },
      {
        n: '03',
        title: 'Find the Small Surprises',
        text: 'Click the books by the window to see a subtle falling animation. Other details, like passing meteors, appear unexpectedly.',
        img: 'detail-books',
        alt: 'The blue book beside the window after being clicked, tipped over onto its side.',
      },
    ],
  },

  rules: {
    title: 'A Scene Built from Rules',
    body: [
      'I used p5.js and JavaScript to bring the landscape to life. Some elements follow the time of day, while others use controlled randomness so that the experience doesn’t feel exactly the same every time.',
      'The sky moves between colours taken from my photographs. The stars and meteors have their own motion, while clouds, mountains, flowers and occasional cats add variation to the scene. I also organised the code into smaller functions to make the different visual elements easier to adjust.',
    ],
    annotations: [
      { n: 1, x: 30, y: 26, label: 'Sky — hourly colours, blended' },
      { n: 2, x: 62, y: 52, label: 'Mountains — fade with the light' },
      { n: 3, x: 46, y: 70, label: 'Grass and flowers — generated' },
      { n: 4, x: 82.5, y: 25, label: 'Analogue clock — drag to set time' },
      { n: 5, x: 39.5, y: 89, label: 'Digital clock — click to change speed' },
    ],
    annotatedAlt: 'The daytime scene with five numbered markers: sky, mountains, grass and flowers, analogue clock and digital clock.',
    howTitle: 'How it works',
    how: [
      'An hourly skyColors palette and colour interpolation drive the changing sky.',
      'Stars are generated and leave trails after dark; meteors appear at random.',
      'Mountains, clouds, flowers and cats use generated or time-dependent behaviour.',
      'drawSky, drawMountains and other small drawing functions organise the sketch.',
      'A virtual 7680 × 5760 canvas is scaled to fit the window in windowResized. That keeps the layout consistent, but the controls are still small on a phone screen.',
    ],
    code: `// Each hour has a top and bottom sky colour.
let skyColors = [
  { h: 6,  top: '#3A355B', bot: '#6A517B' },
  { h: 7,  top: '#7CA3C7', bot: '#F2AF88' },
  { h: 12, top: '#1882C7', bot: '#A1D7F4' },
  { h: 18, top: '#B1909D', bot: '#F2B889' },
  // …
];

// Between two hours, blend smoothly.
let colTop = lerpColor(color(a.top), color(b.top), t);
let colBot = lerpColor(color(a.bot), color(b.bot), t);`,
    codeCaption: 'Excerpt from sketch.js (shortened).',
  },

  tech: {
    eyebrow: 'Technical deep dive',
    title: 'A Sky Built Through Time',
    sub: 'One continuous timeline. Thousands of moving points of light. Unexpected moments in the night sky.',
    body: [
      'I wanted the view outside the window to feel like a living environment rather than a static background. The sky, the sun and moon, 4,000 stars and brief meteor events all read from one floating-point clock, currentTime, so a single timeline holds the whole scene together.',
      'Everything below is taken from the original sketch.js, and every image is captured from the running sketch. Where the code does not do what it was meant to, I say so.',
    ],
    heroAlt: 'The window sky at night after a few seconds at 10,000× speed: thousands of short diagonal star trails over a navy sky, the moon and pale clouds.',
    heroCaption: 'Star trails at 10,000× speed — captured from the running sketch.',
    toc: [
      { id: 'tech-time', k: 'Time' },
      { id: 'tech-stars', k: 'Stars' },
      { id: 'tech-meteors', k: 'Meteors' },
      { id: 'tech-system', k: 'System' },
      { id: 'tech-notes', k: 'Notes' },
    ],
    codeNote: 'Excerpt from sketch.js — unrelated lines removed, names unchanged.',

    time: {
      n: '01',
      title: 'One Day, One Continuous Sky',
      body: [
        'Instead of switching between fixed day and night scenes, the sketch keeps one continuous clock. Each frame, millis() gives the real time since the last frame; that difference is converted to seconds, multiplied by the current speed and divided by 3,600 to turn real seconds into simulated hours. At 24 the clock wraps to a new day.',
        'Clicking the digital clock steps through four time multipliers. Dragging the analogue clock pauses the flow and sets the time directly.',
      ],
      formula: 'T_new = T_old + Δt × S / 3600',
      formulaKey: 'T = simulated time in hours · Δt = real seconds since the last frame · S = time multiplier',
      speedHead: ['Multiplier', 'One simulated day takes'],
      speeds: [
        ['1×', '24 hours'],
        ['100×', '14.4 minutes'],
        ['10,000×', '8.64 seconds'],
        ['100,000×', '0.864 seconds'],
      ],
    },
    palette: {
      title: '12 colour keyframes',
      note: 'Each keyframe is a top and bottom sky colour, sampled from my own photographs (with ChatGPT’s help, as noted in the code). 00:00, 04:00 and 24:00 share the same night colours, so the loop closes without a seam.',
      stages: ['Deep night', 'Before dawn', 'First light', 'Sunrise', 'Early morning', 'Morning', 'Noon', 'Afternoon', 'Sunset', 'Dusk', 'Night', 'Deep night'],
    },
    blend: {
      title: 'Two layers of interpolation',
      body: [
        'The first layer works across time. drawSky() finds the two keyframes either side of the current hour, uses map() to turn the position between them into a value from 0 to 1, and lerpColor() mixes both the top colours and the bottom colours. That is what makes 06:30 sit exactly between “first light” and “sunrise”.',
        'The second layer works down the window. The sky is drawn one horizontal line at a time, and each line mixes the current top and bottom colours by its height. Time decides which two colours; height decides the mix.',
      ],
      pipe: ['Time keyframes', 'Interpolate across time', 'Top / bottom colour pair', 'Interpolate down the window', 'Rendered sky'],
    },
    path: {
      title: 'An artistic path for the sun and moon',
      body: 'Both travel the same straight line, from the window’s top-left corner to the right end of the horizon. The sun covers it from 06:00 to 18:00. The moon covers it from 18:00 to 06:00 — times after midnight get 24 added, turning the night into one continuous 18–30 hour range so lerp() never jumps. This is a designed path, not an astronomical model.',
      sun: 'Sun', moon: 'Moon', horizon: 'Horizon',
      caption: 'Diagram — positions worked out from the code, not a screenshot.',
    },
    threshold: {
      title: 'Where the transitions are gradual — and where they are not',
      body: 'The sky colour is continuous, and the mountains, grass and flowers fade between day and night values from 17:18 to 18:12 and from 05:30 to 06:18. Stars and meteors are different: they switch on below 06:18 and from 18:12, and during the day the star buffer is cleared and the meteor list emptied every frame. That keeps no leftover trails into the morning, but it is a cut, not a fade.',
      rowStars: 'Stars, meteors',
      rowLand: 'Grass',
      aria: '24-hour bar. Stars and meteors are on from 00:00 to 06:18 and from 18:12 to 24:00, switched sharply. The grass fades between its night and day colours from 05:30 to 06:18 and from 17:18 to 18:12.',
      caption: 'Grass colours are the sketch’s own day and night values.',
    },

    stars: {
      n: '02',
      title: '4,000 Stars, One Living Sky',
      body: [
        'The starfield is not an image. initStars() gives each of 4,000 stars its own start position, size, base brightness, speed and phase, so they never move as one flat layer.',
        'Each frame, a star’s position comes from the shared clock: its phase shifts the time, the result is normalised to 0–1 over 24 hours, scaled by its own speed and the buffer size, and wrapped with % so stars that leave one edge return at the other. There is no noise in this path — it is time, phase, speed and modulo.',
      ],
      paramHead: ['Parameter', 'Range', 'Role'],
      params: [
        ['x0, y0', 'Anywhere in the buffer', 'Starting position'],
        ['r', '1.2–2.8', 'Drawn size'],
        ['baseBright', '225–255', 'Base brightness'],
        ['speed', '0.25–0.54', 'How far it travels per day'],
        ['phase', '0–2π', 'Time offset, so stars are out of step'],
      ],
    },
    trails: {
      title: 'Painting with previous frames',
      body: [
        'To get the look of a long-exposure photograph, the stars are drawn into a separate createGraphics() buffer the size of the sky. The buffer is never fully cleared at night. Instead, each frame paints a semi-transparent black rectangle over it, so earlier star positions dim a little more every frame while new positions are drawn on top. The result is a trail behind every star without storing any history.',
        'The buffer is then drawn onto the main canvas with blendMode(ADD), so stars and trails add light to the sky colour instead of covering it.',
      ],
      pipe: ['Star parameters', 'Position from currentTime', 'Fade the previous frame', 'Draw 4,000 new points', 'Composite with ADD', 'Night sky'],
      alphaTitle: 'The trail length follows the time speed',
      alphaBody: 'The same speed setting that drives the clock also picks the alpha of the black fade layer. A lower alpha covers less of the old image each frame, so trails last longer. These values are the opacity of the fade layer, not of the stars.',
      alphaHead: ['Speed', 'Fade alpha', 'Effect'],
      alpha: [
        ['1×', '65', 'Fades fastest — stars read as points'],
        ['100×', '44', 'Slightly longer persistence'],
        ['10,000×', '32', 'Clear streaks'],
        ['100,000×', '14', 'Slowest fade, longest persistence'],
      ],
      slidesLabel: 'Star trails at three speeds',
      slides: [
        { key: 'trail-100x', caption: '100× · fade alpha 44 — after 6 s, stars stay as points', alt: 'The night sky at 100× speed: a navy sky scattered with small separate star points, the moon near the top-left and a few clouds.' },
        { key: 'trail-10000x', caption: '10,000× · fade alpha 32 — after 1.5 s, short diagonal streaks', alt: 'The night sky at 10,000× speed: thousands of short parallel diagonal star trails, the moon in the middle and clouds along the top.' },
        { key: 'trail-100000x', caption: '100,000× · fade alpha 14 — after 0.25 s, five hours have passed', alt: 'The night sky at 100,000× speed: stars spread as faint dotted trails across the sky, the moon lower right and clouds at the top.' },
      ],
      slidesNote: 'Each image is the window’s sky, captured from the running sketch after the stated time at that speed.',
    },

    meteors: {
      n: '03',
      title: 'A Meteor, Gone in 500 ms',
      body: [
        'Stars are always there; meteors are events. During the night, every time drawMeteors() runs there is a 1.3% chance of a new one. Each gets a random start inside the sky, a direction, a travel distance of 960–1,080 units and a start time, and is pushed into a meteors array.',
        'Its life is measured with millis(), in real time — so a meteor lasts about half a second even when the day is racing past at 100,000×. Progress f runs from 0 to 1 along a straight line from its start point; when it passes its life, the meteor is spliced out of the array.',
      ],
      paramHead: ['Constant', 'Value', 'Purpose'],
      params: [
        ['METEOR_SPAWN_RATE', '0.013', 'Chance per drawMeteors() call'],
        ['METEOR_MIN_DIST', '960', 'Shortest travel distance'],
        ['METEOR_MAX_DIST', '1080', 'Longest travel distance'],
        ['METEOR_LIFE', '500 ms', 'Real-time lifespan'],
        ['METEOR_TAIL_PARTS', '9', 'Trail segments'],
      ],
      rateNote: 'Because the chance is per frame, the spawn rate depends on frame rate: about 0.8 meteors a second at 60 fps, half that at 30 fps. That is arithmetic from the code, not a measurement.',
      seqTitle: 'One meteor, frame by frame',
      seq: [
        { key: 'meteor-1', f: 'f ≈ 0.1', label: 'Appears' },
        { key: 'meteor-2', f: 'f ≈ 0.3', label: 'Trail forms' },
        { key: 'meteor-3', f: 'f ≈ 0.6', label: 'Full streak' },
        { key: 'meteor-4', f: 'f ≈ 0.8', label: 'Fading' },
        { key: 'meteor-5', f: 'f ≈ 1.0', label: 'Gone' },
      ],
      seqAlt: 'A close crop of the night sky with a small meteor streak',
      seqNote: 'Five frames of the same meteor, cropped from the running sketch at native size.',
      tailTitle: 'Nine-segment trail and a two-layer head',
      tailBody: 'The trail is nine lines, each drawn from a point slightly further back along the path to the current head. Lines nearer the head are brighter (alpha 200 → 50) and thicker (5 → 1), and all of them fade with (1 − f). The head is two ellipses: a small bright core and a wider, dimmer glow, both fading over the same life.',
    },

    system: {
      title: 'Three Systems, One Timeline',
      body: 'The sky, the starfield and the meteors are separate pieces of code, but they share one time state. currentTime decides the sky colours, where every star is, and whether the night is active. The speed setting also chooses the trail fade. Meteors are the exception: they are spawned by night-time chance and timed in real milliseconds.',
      control: 'Drag the analogue clock · Click the digital clock',
      clock: 'currentTime',
      clockNote: 'one floating-point hour, 0–24',
      speed: 'speedIdx → time multiplier and trail fade',
      cols: [
        { k: 'Sky', items: ['skyColors keyframes', 'lerpColor() across time', 'lerpColor() down the window'], out: 'Sky gradient' },
        { k: 'Stars', items: ['4,000 parameterised stars', 'Phase + speed + modulo', 'Fade + draw in a buffer'], out: 'Trails, added with ADD' },
        { k: 'Meteors', items: ['Night condition', '1.3% chance per call', '500 ms real-time life'], out: 'Meteor streaks' },
      ],
      result: 'The sky through the window',
    },

    notes: {
      title: 'What the code really does',
      body: 'Looking back at the original sketch, a few things behave differently from what I intended. I have not changed the assignment code; these are recorded here and are the first things I would fix in a new version.',
      head: ['Area', 'In the original code', 'Effect', 'Next version'],
      rows: [
        ['Meteor direction', 'setup() sets angleMode(DEGREES), but the angle range is written in radians: random(PI × 0.13, PI × 1.87).', 'Angles fall between about 0.4° and 5.9°, so meteors travel almost horizontally to the right, not in any direction.', 'Write the range in degrees (about 23°–337°) and re-test.'],
        ['Star twinkle', 'Brightness uses sin(TWO_PI × …), which DEGREES mode reads as about 6.3°, not a full cycle.', 'The value barely changes, and most stars are already clamped at 255, so there is little visible twinkle.', 'Use radians for this expression, then check the effect.'],
        ['Spawn timing', 'A meteor is created with probability 0.013 every frame.', 'Faster devices see more meteors.', 'Schedule meteors by elapsed time instead of per frame.'],
        ['Night switch', 'Stars and meteors turn on and off at 06:18 and 18:12.', 'The stars cut in and out rather than fading.', 'Fade the star layer with the same dusk and dawn windows as the mountains.'],
        ['Clock wrap', 'currentTime has 24 subtracted once when it passes 24.', 'After a long pause at high speed, one large step could still leave it above 24.', 'Wrap with a modulo.'],
        ['Buffer size', 'The star buffer covers the sky at full virtual size, 5,376 × 2,304 units, and is repainted every frame.', 'A large cost on every frame; not measured.', 'Profile on real devices before optimising.'],
      ],
    },

    reflection: {
      title: 'Designing the passage of time',
      body: 'The hardest part was balancing continuity with variation. The sky had to change gradually, while the stars and meteors had to add movement without breaking the quiet. Building everything on one clock taught me how a small set of rules and parameters can produce a scene that feels much richer than its parts — and re-reading the code showed me exactly where the next version needs care: units, transition thresholds and frame-rate-independent timing.',
    },
  },

  reflection: {
    title: 'A Small Reminder to Look Outside',
    body: [
      'This project brought together three things I care about: photography, the feeling of travelling, and my curiosity about what I can create with code.',
      'The most interesting part was trying to make something programmed feel natural — balancing smooth changes in light with small, unexpected details. It helped me see interactive media as another way of sharing memories and experiences, not just showing information on a screen.',
      'I hope it gives people a reason to slow down for a moment and notice the view around them.',
    ],
    quote: 'Stop and look more at the things around you.',
  },

  credits: [
    'Concept, visual design, interaction design and development: Sitan Ding.',
    'Made with p5.js and JavaScript. Original sky colours and creative direction informed by my photography.',
    'Selected AI assistance: ChatGPT was used to help sample sky colours from my photographs and to assist with parts of code development.',
    'The accelerated star-trail visual was inspired by Moon Knight (2022).',
  ],
};

/** The real skyColors array from sketch.js, used for the palette strip. */
export const skyColors = [
  { h: 0, top: '#142046', bot: '#222d4c' },
  { h: 4, top: '#142046', bot: '#222d4c' },
  { h: 6, top: '#3A355B', bot: '#6A517B' },
  { h: 7, top: '#7CA3C7', bot: '#F2AF88' },
  { h: 8, top: '#A8CAE3', bot: '#F6D9A6' },
  { h: 10, top: '#88BEE9', bot: '#D5EDF8' },
  { h: 12, top: '#1882C7', bot: '#A1D7F4' },
  { h: 16, top: '#2486D3', bot: '#B4E0F6' },
  { h: 18, top: '#B1909D', bot: '#F2B889' },
  { h: 19, top: '#2E3C69', bot: '#B6A2A9' },
  { h: 21, top: '#1B2647', bot: '#25315A' },
];

/** The 24:00 keyframe that closes the loop (the palette strip above shows 00–21). */
export const skyColorsEnd = { h: 24, top: '#142046', bot: '#222d4c' };

/**
 * Code excerpts from public/demos/through-the-window/sketch.js (identical to the original Deco1012.zip).
 * Unrelated lines removed; names, numbers and logic unchanged.
 */
export const techSnippets = {
  time: {
    file: 'sketch.js — draw()',
    code: `if (!dragging && isTimeFlowing) {
  let now = millis();
  let dt = (now - lastMillis) / 1000.0;
  // speedFactors = [1, 100, 10000, 100000]
  timeSpeed = speedFactors[speedIdx];
  currentTime += dt * (timeSpeed / 3600.0);
  if (currentTime >= 24) currentTime -= 24;
  lastMillis = now;
} else {
  lastMillis = millis();
}`,
  },
  sky: {
    file: 'sketch.js — drawSky(time)',
    code: `let h0 = skyColors[idx].h, h1 = skyColors[idx+1].h;
let t = map(time, h0, h1, 0, 1);

// layer 1: across time
let colTop = lerpColor(color(skyColors[idx].top),
                       color(skyColors[idx+1].top), t);
let colBot = lerpColor(color(skyColors[idx].bot),
                       color(skyColors[idx+1].bot), t);

// layer 2: down the window, one line at a time
for (let y = winTop; y < winBottom; y++) {
  let inter = map(y, winTop, winBottom, 0, 1);
  let c = lerpColor(colTop, colBot, inter);
  stroke(c);
  line(winLeft, y, winRight, y);
}`,
  },
  path: {
    file: 'sketch.js — drawSunMoon(time)',
    code: `let tSun = map(constrain(time, 6, 18), 6, 18, 0, 1);
let tMoon = time >= 18 ? map(time, 18, 30, 0, 1)
                       : map(time+24, 18, 30, 0, 1);

let sunX = lerp(pathX0, pathX1, tSun);
let sunY = lerp(pathY0, pathY1, tSun);`,
  },
  stars: {
    file: 'sketch.js — initStars() and drawStarsWithTrail()',
    code: `// STAR_NUM = 4000
for(let i=0;i<STAR_NUM;i++){
  let x0 = random(0, starTrailBuffer.width);
  let y0 = random(0, starTrailBuffer.height);
  let baseBright = random(225,255);
  let r = random(1.2,2.8);
  let speed = random(0.25,0.54);
  let phase = random(TWO_PI);
  stars.push({x0, y0, r, baseBright, speed, phase});
}

// each frame: position from the shared clock
let t = ((currentTime + s.phase * 12 + 24) % 24) / 24.0;
let x = (s.x0 + buf.width * t * s.speed * 0.93) % buf.width;
let y = (s.y0 + buf.height * t * s.speed * 0.93) % buf.height;`,
  },
  trails: {
    file: 'sketch.js — the trail buffer',
    code: `// setup(): a buffer the size of the sky
starTrailBuffer = createGraphics(winRight-winLeft,
                                 horizonY-winTop);

// drawStarsWithTrail(): fade the previous frame
// STAR_TRAIL_ALPHA = [65, 44, 32, 14]
let fade = STAR_TRAIL_ALPHA[speedIdx] / 255.0;
buf.fill(0, 0, 0, fade * 255);
buf.rect(0, 0, buf.width, buf.height);
// ... then draw all 4,000 stars at their new positions

// drawSky(): composite onto the window
push();
blendMode(ADD);
image(starTrailBuffer, winLeft, winTop);
pop();`,
  },
  meteor: {
    file: 'sketch.js — drawMeteors()',
    code: `if(random()<METEOR_SPAWN_RATE){     // 0.013 per call
  let px = random(winLeft+200, winRight-200);
  let py = random(winTop+80, horizonY-150);
  let angle = random(PI*0.13, PI*1.87);  // see notes
  angle += noise(frameCount*0.1, px*0.002, py*0.002)
           * 0.8 - 0.4;
  let dist = random(METEOR_MIN_DIST, METEOR_MAX_DIST);
  let start = millis();
  meteors.push({x0:px, y0:py, angle, dist, start,
                life:METEOR_LIFE});
}

let elapsed = millis() - m.start;    // real time
if(elapsed > m.life){
  meteors.splice(i,1);
  continue;
}
let f = elapsed / m.life;            // 0 → 1
let dx = cos(m.angle)*m.dist;
let dy = sin(m.angle)*m.dist;
let x1 = m.x0 + dx*f;
let y1 = m.y0 + dy*f;`,
  },
  tail: {
    file: 'sketch.js — drawMeteors(), trail and head',
    code: `for(let t=METEOR_TAIL_PARTS;t>=1;t--){   // 9 segments
  let ftail = constrain(f-t*0.04,0,1);
  if(ftail<=0) continue;
  let tx = m.x0 + dx*ftail;
  let ty = m.y0 + dy*ftail;
  let alpha = map(t,1,METEOR_TAIL_PARTS,200,50) * (1-f);
  stroke(255,230,170, alpha);
  strokeWeight(map(t,1,METEOR_TAIL_PARTS,5,1));
  line(tx,ty, x1,y1);
}
fill(255,255,230, 180*(1-f));   // core
ellipse(x1,y1,17,7.8);
fill(255,230,120,110*(1-f));    // glow
ellipse(x1,y1,34,12);`,
  },
};

/** drawGrass() day and night colours from sketch.js, used in the transition bar. */
export const grassColors = { day: 'rgb(100, 210, 140)', night: 'rgb(44, 87, 66)' };
