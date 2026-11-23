/**
 * Through the Window — project page copy.
 * Source: md文件/through the window/Through_the_Window_Claude_Brief_EN.md. Copy in English and Chinese.
 * Facts are checked against public/demos/through-the-window/sketch.js — do not describe behaviour
 * that isn't in the sketch.
 */
export const liveUrl = 'https://editor.p5js.org/1870003554bango/full/1boOWnIYq';

import type { Lang } from '../i18n/ui';

const en = {
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

type Copy = typeof en;

const zh: Copy = {
  eyebrow: '互动艺术 · 创意编程 · p5.js',
  title: 'Through the Window',
  tagline: '一扇看天空变化的安静窗口。',
  intro:
    '我一直很喜欢从窗口看外面的世界，尤其是坐飞机的时候。Through the Window 把这种感觉变成一个互动场景：你可以走过完整的一天，看光线、风景和天空在身边慢慢变化。',
  ctaPrimary: '探索互动作品',
  ctaSecondary: '全屏查看',
  photoAlt:
    '黄昏时从飞机舷窗向外看：昏暗的机舱框住蓝紫色的天空、机翼，以及地平线上一道细细的橙色晚霞。',
  photoCaption: '一切开始的那个画面——从飞机舷窗拍下。',
  meta: [
    { k: '类型', v: '生成式互动作品' },
    { k: '角色', v: '个人项目' },
    { k: '工具', v: 'p5.js / JavaScript' },
  ],

  experience: {
    title: '走进这扇窗',
    body: '这不是一段视频。场景会回应你的操作——试着让时间快进、放慢下来，或者找找房间里藏着的小细节。',
    iframeTitle: 'Through the Window——丁思覃的互动生成艺术作品',
    steps: [
      { title: '拖动指针时钟', text: '选择 24 小时中的任意时刻。' },
      { title: '点击数字时钟', text: '在四种时间速度之间切换，看场景如何变化。' },
      { title: '点击书本', text: '发现藏在房间里的一个小动画。' },
    ],
    note: '拖动时钟时时间会暂停。点击数字时钟或按空格键，让时间继续流动。',
    open: '打开完整体验',
    mirror: '或打开本站上的副本',
    mobile: '在手机上，时钟控件比较小。完整体验会让场景占满整个屏幕。',
  },

  inspiration: {
    title: '灵感来自窗外的风景',
    body: [
      '坐飞机时我常选靠窗的位置，因为我很喜欢看天空的变化。我在云层之上看过日出和日落，也曾在海边拍摄夜空和清晨的光线。',
      '这个项目就是从这些记忆和我自己的照片开始的。数字天空的颜色来自我观察和拍下的光线与渐变，而不只是凭空想象的配色。',
      '我想把“等待完美光线”的那种感觉，变成别人也能自己探索的东西。',
    ],
    paletteTitle: '一小时一小时的天空',
    paletteNote: '作品中每个时段的天空颜色，取样自我自己拍的照片。',
    galleryLabel: '我的靠窗座位',
    galleryNote: '更多我在靠窗座位拍下的风景，从白天到夜晚。',
    gallery: [
      { key: 'window-day-clouds', caption: '在云层之上', alt: '透过白色舷窗：深蓝色的天空、翼尖，以及下方高耸的白云。' },
      { key: 'window-ocean-atoll', caption: '飞越开阔的海洋', alt: '机翼下方是点缀着小块云朵的深蓝海洋，还有一圈青绿色的环形礁。' },
      { key: 'window-last-light', caption: '机翼上的最后一缕光', alt: '长长的机翼和引擎在云海之上形成剪影，地平线上是一道细细的橙色晚霞。' },
      { key: 'window-sunset-storm', caption: '穿透风暴云的夕阳', alt: '深色的风暴云中透出一道明亮的橙色夕阳，右侧是翼尖的剪影。' },
      { key: 'window-twilight-lights', caption: '暮色中，下方是城镇灯光', alt: '深蓝色暮光中的机翼剪影，地平线上一道红色光带，远处地面有小小的城镇灯光。' },
      { key: 'window-night-stars', caption: '夜晚云层之上的星空', alt: '一层浅色云海之上布满星星的夜空，右侧边缘是亮着红灯的翼尖。' },
    ],
  },

  day: {
    title: '一扇窗，二十四小时',
    body: [
      '窗外的风景从不完全相同。清晨的冷色调变成白天，傍晚天空变暖，夜里星星又回来了。山、云和许多小细节也会随一天的时间一起变化。',
      '虽然这些景色是用代码生成的，我还是希望过渡显得柔和而熟悉。',
    ],
    frames: [
      { key: 'dawn', label: '黎明', time: '06:42', alt: '06:42 的画面：柔和的紫色天空，太阳低低地在左上角，还有淡粉色的云。' },
      { key: 'daylight', label: '白天', time: '12:30', alt: '12:30 的画面：明亮的蓝天，太阳高挂在窗中，还有白云。' },
      { key: 'sunset', label: '日落', time: '18:03', alt: '18:03 的画面：太阳离开窗口，天空变成温暖的粉色，草地渐渐变暗。' },
      { key: 'night', label: '夜晚', time: '22:33', alt: '22:33 的画面：深蓝色的天空布满小星星，还有月亮和淡淡的云。' },
    ],
    caption: '截取自运行中的作品。',
  },

  interactions: {
    title: '不只是观看',
    body: '我不想做一段固定的动画。我希望访客能在一定程度上控制自己看到的东西，同时也留一些时刻给偶然。',
    rows: [
      {
        n: '01',
        title: '穿越时间',
        text: '拖动指针时钟选择一个时刻，看颜色和风景如何回应。',
        img: 'detail-analogue-clock',
        alt: '墙上的 24 小时指针时钟，蓝色指针指向 18。',
      },
      {
        n: '02',
        title: '改变节奏',
        text: '点击数字时钟，在不同的时间速度之间切换。速度越快，天空和星星的移动就越明显。',
        img: 'detail-digital-clock',
        alt: '夜晚窗户下方桌上的数字时钟，显示 22:33:00。',
      },
      {
        n: '03',
        title: '发现小惊喜',
        text: '点击窗边的书，会看到一个轻轻倒下的小动画。流星等其他细节则会不经意地出现。',
        img: 'detail-books',
        alt: '窗边的蓝色书本被点击后倒向一侧。',
      },
    ],
  },

  rules: {
    title: '由规则构建的场景',
    body: [
      '我用 p5.js 和 JavaScript 让这片风景动起来。有些元素跟随一天中的时间，有些则使用受控的随机性，让每次体验都不完全一样。',
      '天空在取自我照片的颜色之间变化。星星和流星有各自的运动，云、山、花和偶尔出现的猫则为场景增加变化。我还把代码拆分成较小的函数，方便调整不同的视觉元素。',
    ],
    annotations: [
      { n: 1, x: 30, y: 26, label: '天空——每小时的颜色，平滑混合' },
      { n: 2, x: 62, y: 52, label: '山——随光线淡入淡出' },
      { n: 3, x: 46, y: 70, label: '草地和花——程序生成' },
      { n: 4, x: 82.5, y: 25, label: '指针时钟——拖动设定时间' },
      { n: 5, x: 39.5, y: 89, label: '数字时钟——点击切换速度' },
    ],
    annotatedAlt: '白天的场景，标有五个编号：天空、山、草地和花、指针时钟、数字时钟。',
    howTitle: '它是怎样运作的',
    how: [
      '按小时排列的 skyColors 调色板和颜色插值驱动天空的变化。',
      '星星由程序生成，入夜后留下星轨；流星随机出现。',
      '山、云、花和猫使用程序生成或随时间变化的行为。',
      'drawSky、drawMountains 等小型绘制函数组织起整个作品。',
      '一块 7680 × 5760 的虚拟画布在 windowResized 中缩放以适应窗口，让布局保持一致，但在手机屏幕上控件仍然比较小。',
    ],
    code: en.rules.code,
    codeCaption: '节选自 sketch.js（已缩短）。',
  },

  tech: {
    eyebrow: '技术解析',
    title: '由时间构建的天空',
    sub: '一条连续的时间线。成千上万个移动的光点。夜空中意想不到的瞬间。',
    body: [
      '我希望窗外的风景像一个有生命的环境，而不是一张静止的背景。天空、太阳和月亮、4,000 颗星星以及短暂的流星，都读取同一个浮点时钟 currentTime，所以整个场景由一条时间线串在一起。',
      '下面的内容都来自原始的 sketch.js，所有图片都截取自运行中的作品。代码没有达到预期的地方，我也会直接说明。',
    ],
    heroAlt: '以 10,000 倍速运行几秒后的夜空：深蓝天空中成千上万道短短的斜向星轨，还有月亮和淡淡的云。',
    heroCaption: '10,000 倍速下的星轨——截取自运行中的作品。',
    toc: [
      { id: 'tech-time', k: '时间' },
      { id: 'tech-stars', k: '星星' },
      { id: 'tech-meteors', k: '流星' },
      { id: 'tech-system', k: '系统' },
      { id: 'tech-notes', k: '说明' },
    ],
    codeNote: '节选自 sketch.js——删去了无关代码，变量名未改动。',

    time: {
      n: '01',
      title: '一天，一片连续的天空',
      body: [
        '作品没有在固定的白天和夜晚场景之间切换，而是保持一个连续的时钟。每一帧，millis() 给出距离上一帧的真实时间；这段时间换算成秒，乘以当前速度，再除以 3,600，就把真实的秒变成模拟的小时。到 24 时，时钟回到新的一天。',
        '点击数字时钟会依次切换四种时间倍率。拖动指针时钟会暂停时间流动，并直接设定时间。',
      ],
      formula: 'T_new = T_old + Δt × S / 3600',
      formulaKey: 'T = 模拟时间（小时）· Δt = 距离上一帧的真实秒数 · S = 时间倍率',
      speedHead: ['倍率', '走完一个模拟日需要'],
      speeds: [
        ['1×', '24 小时'],
        ['100×', '14.4 分钟'],
        ['10,000×', '8.64 秒'],
        ['100,000×', '0.864 秒'],
      ],
    },
    palette: {
      title: '12 个颜色关键帧',
      note: '每个关键帧包含天空顶部和底部两种颜色，取样自我自己拍的照片（代码中注明了借助 ChatGPT 取样）。00:00、04:00 和 24:00 使用相同的夜色，所以循环首尾无缝衔接。',
      stages: ['深夜', '黎明前', '晨曦', '日出', '清晨', '上午', '正午', '下午', '日落', '黄昏', '夜晚', '深夜'],
    },
    blend: {
      title: '两层插值',
      body: [
        '第一层发生在时间上。drawSky() 找到当前时刻前后的两个关键帧，用 map() 把当前位置换算成 0 到 1 之间的值，再用 lerpColor() 分别混合顶部颜色和底部颜色。正因如此，06:30 正好落在“晨曦”和“日出”之间。',
        '第二层发生在窗口的垂直方向上。天空是一行一行画出来的，每一行按自己的高度混合当前的顶部和底部颜色。时间决定是哪两种颜色，高度决定混合比例。',
      ],
      pipe: ['时间关键帧', '在时间上插值', '顶部 / 底部颜色对', '在窗口垂直方向插值', '渲染出的天空'],
    },
    path: {
      title: '为太阳和月亮设计的艺术化路径',
      body: '两者沿同一条直线移动：从窗口左上角到地平线的右端。太阳在 06:00 到 18:00 走完这条线，月亮在 18:00 到次日 06:00 走完——午夜之后的时间会加上 24，把整个夜晚变成连续的 18–30 小时区间，lerp() 就不会跳变。这是一条设计出来的路径，不是天文模型。',
      sun: '太阳', moon: '月亮', horizon: '地平线',
      caption: '示意图——位置根据代码计算得出，不是截图。',
    },
    threshold: {
      title: '哪些过渡是渐变的，哪些不是',
      body: '天空的颜色是连续变化的；山、草地和花在 17:18–18:12 以及 05:30–06:18 之间，在白天和夜晚的数值之间渐变。星星和流星则不同：它们在 06:18 之前和 18:12 之后才开启，白天时星空缓冲区每一帧都会被清空，流星列表也会被清空。这样早晨不会留下残余的星轨，但它是一刀切，而不是渐隐。',
      rowStars: '星星、流星',
      rowLand: '草地',
      aria: '24 小时时间条。星星和流星在 00:00–06:18 和 18:12–24:00 开启，切换是突然的；草地在 05:30–06:18 和 17:18–18:12 之间于夜色与日色之间渐变。',
      caption: '草地颜色使用作品中原本的白天和夜晚数值。',
    },

    stars: {
      n: '02',
      title: '4,000 颗星星，一片有生命的天空',
      body: [
        '这片星空不是一张图片。initStars() 为 4,000 颗星星分别设定起始位置、大小、基础亮度、速度和相位，所以它们不会像一整层平面那样一起移动。',
        '每一帧，星星的位置都来自共享的时钟：相位让时间产生偏移，结果在 24 小时内归一化到 0–1，再乘以各自的速度和缓冲区尺寸，并用 % 取模，让从一边离开的星星从另一边回来。这里没有用噪声——只有时间、相位、速度和取模。',
      ],
      paramHead: ['参数', '范围', '作用'],
      params: [
        ['x0, y0', '缓冲区内任意位置', '起始位置'],
        ['r', '1.2–2.8', '绘制大小'],
        ['baseBright', '225–255', '基础亮度'],
        ['speed', '0.25–0.54', '一天内移动的距离'],
        ['phase', '0–2π', '时间偏移，让星星彼此错开'],
      ],
    },
    trails: {
      title: '用之前的画面作画',
      body: [
        '为了得到长曝光摄影般的效果，星星被画进一个和天空一样大的独立 createGraphics() 缓冲区。夜里这个缓冲区从不完全清空，而是每一帧在上面覆盖一层半透明的黑色矩形：之前的星星位置每帧都更暗一点，新的位置画在上面。这样每颗星星身后都会留下轨迹，却不需要记录任何历史。',
        '之后缓冲区用 blendMode(ADD) 画回主画布，所以星星和星轨是在天空颜色上叠加光亮，而不是把它盖住。',
      ],
      pipe: ['星星参数', '根据 currentTime 计算位置', '淡化上一帧', '画出 4,000 个新点', '用 ADD 合成', '夜空'],
      alphaTitle: '星轨长度跟随时间速度',
      alphaBody: '驱动时钟的同一个速度设置，也决定黑色淡化层的透明度（alpha）。alpha 越低，每一帧覆盖旧画面越少，星轨就保留得越久。这些数值是淡化层的不透明度，而不是星星的。',
      alphaHead: ['速度', '淡化 alpha', '效果'],
      alpha: [
        ['1×', '65', '淡化最快——星星看起来是点'],
        ['100×', '44', '残留稍久一些'],
        ['10,000×', '32', '明显的拖尾'],
        ['100,000×', '14', '淡化最慢，残留最久'],
      ],
      slidesLabel: '三种速度下的星轨',
      slides: [
        { key: 'trail-100x', caption: '100× · 淡化 alpha 44——6 秒后，星星仍是点', alt: '100 倍速下的夜空：深蓝色天空中散落着一个个小星点，左上方是月亮，还有几朵云。' },
        { key: 'trail-10000x', caption: '10,000× · 淡化 alpha 32——1.5 秒后，出现短短的斜向拖尾', alt: '10,000 倍速下的夜空：成千上万道平行的短斜星轨，月亮在中间，上方有云。' },
        { key: 'trail-100000x', caption: '100,000× · 淡化 alpha 14——0.25 秒后，已经过去五个小时', alt: '100,000 倍速下的夜空：星星化作淡淡的点状轨迹铺满天空，月亮在右下方，上方有云。' },
      ],
      slidesNote: '每张图都是窗口里的天空，在对应速度下运行指定时间后，从运行中的作品截取。',
    },

    meteors: {
      n: '03',
      title: '一颗流星，500 毫秒后消失',
      body: [
        '星星一直都在，流星则是事件。夜里，每次 drawMeteors() 运行时，都有 1.3% 的概率生成一颗新的流星。每颗流星会得到天空中一个随机的起点、一个方向、960–1,080 单位的移动距离和一个开始时间，然后被加入 meteors 数组。',
        '它的寿命用 millis() 按真实时间计算——所以即使一天以 100,000 倍速飞逝，一颗流星仍然大约持续半秒。进度 f 从 0 走到 1，沿着从起点出发的直线移动；超过寿命后，流星就会从数组中移除。',
      ],
      paramHead: ['常量', '数值', '用途'],
      params: [
        ['METEOR_SPAWN_RATE', '0.013', '每次调用 drawMeteors() 的生成概率'],
        ['METEOR_MIN_DIST', '960', '最短移动距离'],
        ['METEOR_MAX_DIST', '1080', '最长移动距离'],
        ['METEOR_LIFE', '500 ms', '按真实时间计算的寿命'],
        ['METEOR_TAIL_PARTS', '9', '尾迹段数'],
      ],
      rateNote: '因为概率是按帧计算的，生成频率取决于帧率：60 fps 时大约每秒 0.8 颗，30 fps 时减半。这是根据代码算出来的，不是实测。',
      seqTitle: '一颗流星，逐帧来看',
      seq: [
        { key: 'meteor-1', f: 'f ≈ 0.1', label: '出现' },
        { key: 'meteor-2', f: 'f ≈ 0.3', label: '尾迹形成' },
        { key: 'meteor-3', f: 'f ≈ 0.6', label: '完整拖尾' },
        { key: 'meteor-4', f: 'f ≈ 0.8', label: '变淡' },
        { key: 'meteor-5', f: 'f ≈ 1.0', label: '消失' },
      ],
      seqAlt: '夜空的近距离裁切，有一道小小的流星',
      seqNote: '同一颗流星的五帧画面，按原始尺寸从运行中的作品裁切。',
      tailTitle: '九段尾迹与双层光晕',
      tailBody: '尾迹由九条线组成，每条线都从路径上稍微靠后的一点连到当前的流星头部。离头部越近的线越亮（alpha 200 → 50）、越粗（5 → 1），所有线都随 (1 − f) 逐渐变淡。头部由两个椭圆组成：一个小而亮的核心，一个更大、更暗的光晕，两者在同样的寿命内一起消失。',
    },

    system: {
      title: '三个系统，一条时间线',
      body: '天空、星空和流星是三段独立的代码，但它们共享同一个时间状态。currentTime 决定天空的颜色、每颗星星的位置，以及夜晚是否开始。速度设置还会决定星轨的淡化程度。流星是例外：它们靠夜间的随机概率生成，并按真实的毫秒计时。',
      control: '拖动指针时钟 · 点击数字时钟',
      clock: 'currentTime',
      clockNote: '一个浮点数小时，0–24',
      speed: 'speedIdx → 时间倍率与星轨淡化',
      cols: [
        { k: '天空', items: ['skyColors 关键帧', '在时间上 lerpColor()', '在窗口垂直方向 lerpColor()'], out: '天空渐变' },
        { k: '星星', items: ['4,000 颗参数化的星星', '相位 + 速度 + 取模', '在缓冲区中淡化并绘制'], out: '星轨，用 ADD 叠加' },
        { k: '流星', items: ['夜间条件', '每次调用 1.3% 概率', '500 毫秒真实寿命'], out: '流星轨迹' },
      ],
      result: '窗外的天空',
    },

    notes: {
      title: '代码实际做了什么',
      body: '回头看原始作品，有几处的表现和我当时的设想不同。我没有修改作业代码；这些问题记录在这里，也是下一个版本中我最先会修正的地方。',
      head: ['方面', '原始代码', '影响', '下一版'],
      rows: [
        ['流星方向', 'setup() 设置了 angleMode(DEGREES)，但角度范围按弧度书写：random(PI × 0.13, PI × 1.87)。', '实际角度只有约 0.4° 到 5.9°，所以流星几乎都是水平向右飞，而不是朝各个方向。', '把范围改为角度（约 23°–337°）后重新测试。'],
        ['星星闪烁', '亮度使用 sin(TWO_PI × …)，在 DEGREES 模式下只被当作约 6.3°，不是完整的一个周期。', '数值几乎不变，大多数星星本来就被限制在 255，所以几乎看不出闪烁。', '这个表达式改用弧度，再检查效果。'],
        ['生成时机', '每一帧以 0.013 的概率生成一颗流星。', '设备越快，看到的流星越多。', '改为按经过的时间来安排流星，而不是按帧。'],
        ['昼夜切换', '星星和流星在 06:18 和 18:12 突然开启或关闭。', '星星是一下子出现和消失，而不是渐变。', '让星空层使用和山一样的黄昏、黎明渐变区间。'],
        ['时钟循环', 'currentTime 超过 24 时只减去一次 24。', '在高速下长时间暂停后，一次大的跳变仍可能让它超过 24。', '改用取模循环。'],
        ['缓冲区尺寸', '星空缓冲区以完整的虚拟尺寸 5,376 × 2,304 覆盖天空，并且每一帧都重绘。', '每一帧都有较大的开销；未经测量。', '先在真实设备上做性能分析，再进行优化。'],
      ],
    },

    reflection: {
      title: '设计时间的流逝',
      body: '最难的是在连续与变化之间取得平衡。天空需要逐渐变化，而星星和流星要带来动感，又不能打破安静的氛围。把一切建立在同一个时钟上，让我看到一小组规则和参数就能产生比各部分加起来更丰富的场景；重读代码，也让我清楚地知道下一版需要注意哪里：单位、过渡阈值，以及不依赖帧率的计时。',
    },
  },

  reflection: {
    title: '一个提醒：看看窗外',
    body: [
      '这个项目把我在意的三件事放在了一起：摄影、旅行的感觉，以及我对用代码能创造什么的好奇。',
      '最有意思的部分，是尝试让一个由程序生成的东西显得自然——在平滑的光线变化和意外的小细节之间取得平衡。它让我把互动媒体看作分享记忆和经历的另一种方式，而不只是在屏幕上展示信息。',
      '我希望它能让人停下来一会儿，留意身边的风景。',
    ],
    quote: '停下来，多看看身边的事物。',
  },

  credits: [
    '概念、视觉设计、交互设计与开发：丁思覃。',
    '使用 p5.js 和 JavaScript 制作。天空的原始颜色和创作方向来自我的摄影。',
    'AI 使用说明：借助 ChatGPT 从我的照片中取样天空颜色，并协助部分代码开发。',
    '加速的星轨视觉受到《月光骑士》（Moon Knight，2022）的启发。',
  ],
};

export const copy: Record<Lang, Copy> = { en, zh };


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

/** Short interface labels used by the view. */
export const labels: Record<Lang, Record<string, string>> = {
  en: { breadcrumb: 'Breadcrumb', sections: 'sections', prevSpeed: 'Previous speed', nextSpeed: 'Next speed', projectNav: 'Project navigation',
    fileStars: 'sketch.js — initStars() and drawStarsWithTrail()', fileTrails: 'sketch.js — the trail buffer', fileTail: 'sketch.js — drawMeteors(), trail and head' },
  zh: { breadcrumb: '面包屑导航', sections: '章节', prevSpeed: '上一个速度', nextSpeed: '下一个速度', projectNav: '项目导航',
    fileStars: 'sketch.js — initStars() 与 drawStarsWithTrail()', fileTrails: 'sketch.js — 星轨缓冲区', fileTail: 'sketch.js — drawMeteors()：尾迹与头部' },
};
