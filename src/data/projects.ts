/**
 * All project data, in both languages. Pages render from this file only.
 *
 * Rules (from Sitan_Ding_Portfolio_Claude_网站改造规范.md):
 * - Unknown facts stay null → shown as "TBC". Never guess years, roles, numbers.
 * - Team projects: collaboration 'team' and only verified personal contributions in `role`.
 * - cover: null → a labelled placeholder is shown. Never use stock or AI images as a cover.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

import aerospaceCover from '../assets/home/rocket-hero.jpg';
import airshowCover from '../assets/airshow/photo-01.jpg';
import throughTheWindowCover from '../assets/through-the-window/cover.jpg';
import ufoCover from '../assets/ufo-skyfeed/cover.jpg';
import identityCover from '../assets/identity-press/cover.jpg';
import cocoaCover from '../assets/cocoa-reserve/blender-draft-closed.jpg';
import scamCover from '../assets/scam-ready/hero-landing.jpg';
import bnhCover from '../assets/becoming-non-human/report-overview.jpg';
import oceanCover from '../assets/ocean-archive-2087/act1-reef.jpg'; // captured from the live web build
import bottleCover from '../assets/bottle-passport/ai-station.jpg'; // AI-generated (team report p. 16) — chosen by Sitan, labelled on the page

type L = Record<Lang, string>;
export type Category = 'interactive' | 'film' | 'immersive' | 'visual';
export const categories: Category[] = ['interactive', 'film', 'immersive', 'visual'];

export interface Video {
  title: L;
  role: L;
  platform: 'Bilibili' | 'Douyin';
  url: string;
}

export interface Project {
  slug: string;
  order: number;
  /** 'hidden' = kept in the data but not built or listed. */
  status: 'published' | 'hidden';
  featured: boolean;
  categories: Category[];
  title: string;
  type: L;
  subtitle: L;
  /** Card description on Home and Work. Falls back to subtitle. */
  summary?: L;
  year: number | null;
  collaboration: 'solo' | 'team' | null;
  role: L | null;
  tools: string[];
  cover: ImageMetadata | null;
  /** 'contain' = show the whole cover on a dark ground (e.g. a wide title page in the 4:3 card). */
  coverFit?: 'cover' | 'contain';
  coverAlt: L;
  overview: L | null;
  process: L[];
  reflection: L | null;
  credits?: L;
  /** true = has its own page in src/views/projects/ and its own route files. */
  customPage?: boolean;
  /** Runnable piece in public/demos/<slug>/ */
  demo?: { src: string; ratio: string };
  videos?: Video[];
}

const TODO = null;

export const projects: Project[] = [
  {
    slug: 'through-the-window',
    order: 1,
    status: 'published',
    featured: true,
    customPage: true,
    categories: ['interactive'],
    title: 'Through the Window',
    type: { en: 'Interactive Art · Creative Coding', zh: '互动艺术 · 创意编程' },
    subtitle: {
      en: 'A quiet window into the changing sky.',
      zh: '一扇看天空变化的安静窗口。',
    },
    summary: {
      en: "Inspired by the skies I've photographed while travelling, this interactive artwork lets visitors move through a full day and watch a digital landscape change with time.",
      zh: '灵感来自我旅行时拍下的天空。在这件互动作品里，你可以穿越完整的一天，看着数字风景随时间变化。',
    },
    year: null, // DECO1012 — date to be confirmed by Sitan (CV says 2024.04–06, transcript says 2025 S1)
    collaboration: 'solo',
    role: { en: 'Independent concept, visual design, interaction design and development', zh: '独立完成概念、视觉设计、交互设计与开发' },
    tools: ['p5.js', 'JavaScript'],
    cover: throughTheWindowCover,
    coverAlt: {
      en: 'The sketch at sunset: a warm pink sky through a window in a wooden wall, with a 24-hour clock in the corner.',
      zh: '作品在日落时的画面：木纹墙上的窗户外是暖粉色的天空，角落里有一个 24 小时时钟。',
    },
    overview: {
      en: 'One window, one full day. The sky outside moves through dawn, day, sunset and night. Drag the clock to travel through the 24 hours, click the digital clock to speed time up, and click the books to find small hidden details.',
      zh: '一扇窗，一整天。窗外的天空会经历清晨、白天、日落和夜晚。拖动时钟可以在 24 小时之间穿梭，点击数字时钟可以让时间加速，点击书本会发现一些藏起来的小细节。',
    },
    process: [],
    reflection: {
      en: 'Stop and look more at the things around you.',
      zh: '停下来，多看看身边的东西。',
    },
    credits: {
      en: 'Concept / Interaction / Visuals: Sitan Ding',
      zh: '概念 / 交互 / 视觉：丁思覃',
    },
    demo: { src: '/demos/through-the-window/index.html', ratio: '4 / 3' },
  },
  {
    slug: 'aerospace-stories',
    order: 8,
    status: 'published',
    featured: true,
    customPage: true,
    categories: ['film'],
    title: 'Aerospace Stories',
    type: { en: 'Cinematography · Video Production', zh: '摄影 · 视频制作' },
    subtitle: {
      en: 'Filming for authoritative Chinese media on three aerospace stories.',
      zh: '协助中国权威媒体拍摄的三个航天主题视频。',
    },
    summary: {
      en: 'Aerospace videos I helped film for authoritative Chinese media, with post-production on one of them. These experiences brought my interest in photography into real online storytelling.',
      zh: '一组我协助中国权威媒体拍摄的航天视频，其中一个我还参与了后期制作。这些经历让我对摄影的兴趣，变成了真正发布在网上的故事。',
    },
    year: null,
    collaboration: 'team',
    role: { en: 'Filming; filming & production', zh: '拍摄；拍摄与制作' },
    tools: [],
    cover: aerospaceCover,
    coverAlt: { en: 'Rocket launch photographed by Sitan Ding', zh: '丁思覃拍摄的火箭发射' },
    overview: TODO,
    process: [],
    reflection: TODO,
    videos: [
      {
        title: { en: 'Tianzhou-8 — Your "space delivery" is on its way!', zh: '天舟八号｜您的“太空快递”正在配送！' },
        role: { en: 'Filming', zh: '拍摄' },
        platform: 'Douyin',
        url: 'https://v.douyin.com/7TDQCjaL7zE/',
      },
      {
        title: { en: 'Tianzhou-9 — Delivered in 3 hours: this "space parcel" has arrived', zh: '天舟九号｜3 小时速达！这份“太空快递”已签收' },
        role: { en: 'Filming', zh: '拍摄' },
        platform: 'Bilibili',
        url: 'https://www.bilibili.com/video/BV1aguJzSEdn/',
      },
      {
        title: { en: 'Crewed lunar exploration — an important breakthrough', zh: '我国载人登月，有重要突破！' },
        role: { en: 'Filming & production', zh: '拍摄及制作' },
        platform: 'Bilibili',
        url: 'https://www.bilibili.com/video/BV1VGcszLEgY/',
      },
    ],
  },
  {
    slug: 'airshow',
    order: 9,
    status: 'published',
    featured: false,
    customPage: true,
    categories: ['visual', 'film'],
    title: 'Airshow',
    type: { en: 'Photography · Video', zh: '摄影 · 视频' },
    subtitle: {
      en: 'Fast jets, caught in a fraction of a second.',
      zh: '高速飞行的战机，定格在一瞬间。',
    },
    summary: {
      en: 'Photographs and a short video I took at an airshow on my own camera.',
      zh: '我用自己的相机在航展现场拍下的照片和一段短视频。',
    },
    year: null,
    collaboration: 'solo',
    role: { en: 'Photography & filming', zh: '拍摄' },
    tools: [],
    cover: airshowCover,
    coverAlt: {
      en: 'A twin-engine fighter jet banks away with both afterburners glowing against a pale pink sky.',
      zh: '一架双发战斗机转弯离去，两个加力燃烧室在淡粉色天空下发着光。',
    },
    overview: null,
    process: [],
    reflection: null,
  },
  {
    slug: 'becoming-non-human',
    order: 2,
    status: 'published',
    featured: true,
    customPage: true,
    categories: ['immersive'],
    title: 'Becoming Non-Human',
    type: { en: 'Virtual Reality · World Planning · Interaction Design', zh: '虚拟现实 · 世界规划 · 交互设计' },
    subtitle: {
      en: 'Three worlds. Different bodies. One connected journey.',
      zh: '三个世界，不同的身体，一段相连的旅程。',
    },
    summary: {
      en: 'A collaborative VR journey through bat, spider and sea turtle perspectives. I planned the overall world structure and outlines for all three worlds, and took responsibility for Turtle World.',
      zh: '一个通过蝙蝠、蜘蛛与海龟视角展开的团队 VR 体验。我负责整体世界规划和三个世界的大纲，并负责海龟世界的设计与实现。',
    },
    year: null,
    collaboration: 'team',
    role: { en: 'Overall world planning, three-world outlines, Turtle World', zh: '整体世界规划、三个世界大纲、海龟世界' },
    tools: ['Unity', 'C#', 'PICO VR'],
    cover: bnhCover, // image from the final project report (labelled on the page)
    coverAlt: {
      en: 'Project overview image: a low-poly coastline with framed views of Turtle World, Spider World and Bat World.',
      zh: '项目总览图：低多边形风格的海岸线，分别框出海龟世界、蜘蛛世界和蝙蝠世界。',
    },
    overview: null,
    process: [],
    reflection: null,
  },
  {
    slug: 'ocean-archive-2087',
    order: 3,
    status: 'published',
    featured: true,
    customPage: true,
    categories: ['interactive', 'immersive'],
    title: 'Ocean Archive 2087',
    type: { en: 'Interactive Narrative · Unity · Creative Technology', zh: '互动叙事 · Unity · 创意技术' },
    subtitle: {
      en: 'What we discard does not disappear.',
      zh: '我们丢弃的东西，并不会就此消失。',
    },
    summary: {
      en: 'A first-person environmental narrative seen through a sea turtle’s eyes. Dynamic currents, reactive marine life and embodied interaction turn an invisible waste pathway into an experience of consequence.',
      zh: '一款以海龟视角展开的第一人称环境叙事作品。动态洋流、会作出反应的海洋生命和身体化交互，把不可见的垃圾流向变成玩家亲身经历的后果。',
    },
    year: null,
    collaboration: 'solo',
    role: { en: 'Concept, design and Unity development', zh: '概念、设计与 Unity 开发' },
    tools: ['Unity 6.3', 'C#', 'URP'],
    cover: oceanCover,
    coverAlt: {
      en: 'In-game view of a sunlit reef with light shafts and caustics on the sand.',
      zh: '游戏画面：阳光照进的珊瑚礁，沙地上有光柱和焦散。',
    },
    overview: null,
    process: [],
    reflection: null,
  },
  {
    slug: 'scam-ready',
    order: 4,
    status: 'published',
    featured: true,
    customPage: true,
    categories: ['interactive'],
    title: 'Scam Ready',
    type: { en: 'Interactive Storytelling · Experience Design', zh: '互动叙事 · 体验设计' },
    subtitle: {
      en: 'From Scam Awareness to Safer Decisions. Interactive learning for international students in Australia.',
      zh: '从防诈意识到更安全的决定。为在澳国际学生设计的互动学习。',
    },
    summary: {
      en: 'An interactive experience for international students. By making choices and seeing their consequences, visitors learn to pause, question suspicious claims, and verify information independently.',
      zh: '一个为国际学生设计的互动体验。通过做出选择、看到后果，人们学会停下来、质疑可疑的说法，并独立核实信息。',
    },
    year: null,
    collaboration: 'team',
    role: null, // to be confirmed by Sitan — do not invent
    tools: ['Figma', 'FigJam'],
    cover: scamCover,
    coverAlt: {
      en: 'Scam Ready landing screen: "A message you weren\u2019t expecting." beside a phone showing simulated incoming notifications.',
      zh: 'Scam Ready 首页：“A message you weren’t expecting.” 旁边是一部显示模拟来电通知的手机。',
    },
    overview: null,
    process: [],
    reflection: null,
  },
  {
    slug: 'bottle-passport',
    order: 5,
    status: 'published',
    featured: false,
    customPage: true,
    categories: ['interactive'],
    title: 'Bottle Passport',
    type: { en: 'Interaction Design · Social Impact · System Design', zh: '交互设计 · 社会影响 · 系统设计' },
    subtitle: {
      en: 'Making everyday recycling more visible, engaging and rewarding.',
      zh: '让校园回收变得更直观、更有参与感，也更有意义。',
    },
    summary: {
      en: 'A campus-based recycling and reward concept that uses an NFC passport, smart recycling stations and personal progress tracking to encourage more responsible disposal habits.',
      zh: '一个面向大学校园的回收与奖励系统概念，通过 NFC 实体护照、智能回收站和个人进度记录，鼓励学生养成更好的回收习惯。',
    },
    year: null,
    collaboration: 'team',
    role: { en: 'Project concept development & planning', zh: '项目整体构思规划与设计深化' },
    tools: [],
    cover: bottleCover,
    coverAlt: {
      en: 'AI-generated concept image: a student returns a bottle at a recycling station while a phone shows "+10 points" on the Bottle Passport dashboard.',
      zh: 'AI 生成的概念图：学生在回收站投入饮料瓶，手机上的 Bottle Passport 面板显示"+10 points"。',
    },
    overview: null,
    process: [],
    reflection: null,
  },
  {
    slug: 'cocoa-reserve',
    order: 6,
    status: 'published',
    featured: false,
    customPage: true,
    categories: ['visual'],
    title: 'Cocoa Reserve',
    type: { en: 'Speculative Product Design · Physical Prototyping', zh: '思辨产品设计 · 实体原型' },
    subtitle: {
      en: 'Two Forms. One Origin. A collectible chocolate artefact exploring scarcity, preservation and value in 2060.',
      zh: '两种形态，同一个起源。一件探讨 2060 年稀缺、保存与价值的可收藏巧克力器物。',
    },
    summary: {
      en: 'What if chocolate became something we preserve rather than consume? Two chocolate forms from one cocoa pod, a laser-cut protective case, and the failures that shaped them.',
      zh: '如果巧克力变成需要保存而不是吃掉的东西？来自同一颗可可荚的两块巧克力、一个激光切割的保护盒，以及塑造它们的那些失败。',
    },
    year: null,
    collaboration: 'solo',
    role: { en: 'Concept, product design, physical prototyping and visualisation', zh: '概念、产品设计、实体原型与可视化' },
    tools: ['Autodesk Fusion', 'Rhino', 'Blender'],
    cover: cocoaCover,
    coverAlt: {
      en: 'Blender render: a smoked-bronze case on a pale travertine plinth, with the two cocoa-pod chocolate pieces beside it.',
      zh: 'Blender 渲染：浅色石灰华底座上的烟熏青铜色盒子，旁边放着两块可可荚形状的巧克力。',
    },
    overview: null,
    process: [],
    reflection: null,
  },
  {
    slug: 'urban-pulse',
    order: 7,
    status: 'published',
    featured: false,
    categories: ['visual'],
    title: 'Urban Pulse',
    type: { en: 'Generative Art / p5.js', zh: '生成艺术 / p5.js' },
    subtitle: {
      en: 'Moving particles that play with the rhythm of a city.',
      zh: '用动态粒子表现城市节奏的生成视觉。',
    },
    year: null,
    collaboration: TODO,
    role: TODO,
    tools: ['p5.js'],
    cover: null,
    coverAlt: { en: 'Particle visuals from Urban Pulse', zh: 'Urban Pulse 的粒子画面' },
    overview: TODO,
    process: [],
    reflection: TODO,
  },

  // Earlier projects, not part of the current spec. Kept so nothing is lost; not built.
  {
    slug: 'ufo-skyfeed',
    order: 90,
    status: 'hidden',
    featured: false,
    categories: ['film', 'interactive'],
    title: 'UFO / SkyFeed',
    type: { en: 'AI Video / Web', zh: 'AI 影像 / 网页' },
    subtitle: {
      en: 'How a blurry UFO clip becomes "evidence" through filters, news, reposts and AI.',
      zh: '一段模糊的 UFO 画面，怎样被滤镜、新闻、转发和 AI 一步步加工成“证据”。',
    },
    year: 2026,
    collaboration: TODO,
    role: TODO,
    tools: ['Premiere Pro', 'HTML/CSS/JS'],
    cover: ufoCover,
    coverAlt: { en: 'Repost Wall page from the project', zh: '项目中的 Repost Wall 页面' },
    overview: TODO,
    process: [],
    reflection: TODO,
  },
  {
    slug: 'identity-press',
    order: 91,
    status: 'hidden',
    featured: false,
    categories: ['visual'],
    title: 'Identity Press',
    type: { en: '3D Animation', zh: '3D 动画' },
    subtitle: {
      en: 'A slot-machine "identity press" that acts out how a phone scam persuades someone.',
      zh: '把电话诈骗的话术做成一台老虎机式的“身份印刷机”。',
    },
    year: 2026,
    collaboration: TODO,
    role: TODO,
    tools: ['Blender', 'Python'],
    cover: identityCover,
    coverAlt: { en: 'Blender render of the Identity Press machine', zh: 'Identity Press 机器的 Blender 渲染图' },
    overview: TODO,
    process: [],
    reflection: TODO,
  },
];

export const published = projects
  .filter((p) => p.status === 'published')
  .sort((a, b) => a.order - b.order);

export const featured = published.filter((p) => p.featured);

export function nextOf(slug: string): Project {
  const i = published.findIndex((p) => p.slug === slug);
  return published[(i + 1) % published.length];
}
