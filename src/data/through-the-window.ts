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
      'Stars are generated, twinkle, and leave trails after dark; meteors appear at random.',
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
