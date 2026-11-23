/**
 * Every piece of interface text, in both languages. Pages and components read from here —
 * never hard-code visible text in a component.
 * English is the default (served at /), Chinese lives under /zh/.
 */
export const languages = { en: 'EN', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const contact = {
  email: 'SitanDing2026@outlook.com',
  // Only add accounts the user has confirmed. Empty = not shown.
  linkedin: 'https://www.linkedin.com/in/sitan-ding-b44a24359',
  facebook: 'https://www.facebook.com/profile.php?id=100017727668668',
  github: '',
  bilibili: '',
  douyin: '',
  resume: '', // e.g. '/resume/sitan-ding-resume.pdf' once the real file exists
};

export const ui = {
  en: {
    'site.name': 'Sitan Ding',
    'site.brand': 'SITAN DING',
    'site.description': 'Portfolio of Sitan Ding — digital media, interactive design and creative production.',
    'nav.label': 'Main',
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.resume': 'Resume',
    'lang.label': 'Language',
    'skip': 'Skip to content',

    'home.eyebrow': 'Digital media / Interactive design / Visual storytelling',
    'home.title1': 'Hi, I’m Sitan.',
    'home.title2': 'I make things to watch, play, and explore.',
    'home.intro':
      "I’ve always loved the variety of entertainment on the internet — from videos and games to interactive experiences. With a background in Interaction Design at the University of Sydney, I enjoy combining photography, storytelling, and technology to turn ideas into things people can experience for themselves.",
    'home.cta.primary': 'Explore My Work',
    'home.cta.secondary': 'More About Me',
    'home.hero.alt': 'A rocket climbing through a deep blue sky, its engine flame bright against thin white cloud.',
    'home.hero.caption': 'Captured through my lens / Aerospace photography',
    'home.selected.eyebrow': 'Selected projects / 01—04',
    'home.selected': 'Selected Work.',
    'home.selected.intro':
      "A few things I’ve made and helped bring to life — from interactive worlds and VR experiences to videos shared online.",
    'home.viewAll': 'View All Projects',
    'home.about.eyebrow': 'Behind the work',
    'home.aboutTitle': 'Curious by nature. Always making something.',
    'home.aboutBody1':
      "I enjoy discovering new forms of online entertainment, but what excites me most is figuring out how they’re made. Photography and video production taught me to pay attention to moments and stories. Interaction design gave me another way to create — one where people can take part rather than only watch.",
    'home.aboutBody2': "I’m still exploring where these interests can lead, and this site is a collection of what I’ve tried so far.",
    'home.aboutCta': 'Get to Know Me',
    'home.contact.title': "Let’s make something interesting.",
    'home.contact.body': "Have a project, an idea, or an opportunity in mind? I’d love to hear from you.",
    'home.contact.cta': 'Say Hello',
    'card.view': 'View Project',

    'work.title': 'Selected Work.',
    'work.sub': 'A collection of interactive experiences, visual stories, and creative experiments.',
    'work.filter': 'Filter projects',
    'work.count': 'projects',
    'cat.all': 'All',
    'cat.interactive': 'Interactive',
    'cat.film': 'Film & Photography',
    'cat.immersive': 'Immersive',
    'cat.visual': 'Visual & 3D',

    'project.year': 'Year',
    'project.type': 'Type',
    'project.role': 'My role',
    'project.tools': 'Tools',
    'project.collab': 'Individual / Team',
    'project.solo': 'Individual project',
    'project.team': 'Team project',
    'project.tbc': 'TBC',
    'project.overview': 'Overview',
    'project.experience': 'Experience',
    'project.process': 'Process',
    'project.reflection': 'What I learned',
    'project.credits': 'Credits',
    'project.next': 'Next project',
    'project.back': 'Back to Work',
    'project.runDemo': 'Experience the demo',
    'project.fullscreen': 'Open fullscreen',
    'project.demoNote': 'Loads when you click. It may play sound.',
    'project.watchOn': 'Watch on',
    'project.videoRole': 'My role',
    'project.coverTodo': 'Cover image coming soon',
    'project.enOnly': 'This project page is in English.',

    'about.title': 'About Me',
    'about.p1':
      "I've always enjoyed the different forms of entertainment on the internet — from videos and games to interactive experiences. Over time, I wanted to move from simply watching them to creating my own.",
    'about.p2':
      "I studied interaction design and started exploring photography, video production, creative coding and immersive media. This portfolio is a collection of the things I've made and what I've learned along the way.",
    'about.photo1.alt': 'A grey fighter jet banking low over a hillside suburb, one wing tipped towards the camera.',
    'about.photo2.alt': 'A stealth fighter pulling a hard turn against blue sky, vapour streaming from its wingtips.',
    'about.photo.caption': 'Aviation photography by me',
    'about.education': 'Education',
    'about.school': 'The University of Sydney',
    'about.degree': 'Bachelor of Design (Interaction Design)',
    'about.dates': '2024–2026',
    'about.whatIDo': 'What I do',
    'about.do': ['Interactive Design', 'Filmmaking & Photography', 'Creative Coding', 'Immersive Media'],
    'about.tools': 'Tools',
    'about.contact': 'Contact me',

    'contact.title': "Let's make something interesting.",
    'contact.sub': 'The quickest way to reach me is email.',
    'contact.email': 'Email',
    'contact.elsewhere': 'Elsewhere',
    'contact.soon': 'Coming soon',

    'footer.cta': "Have something in mind? Let's talk.",
    'footer.top': 'Back to top',
    'footer.rights': 'Sitan Ding · Digital Media & Interactive Design',

    'notfound.title': "This page doesn't exist.",
    'notfound.body': 'The link may be old, or the project has moved.',
    'notfound.cta': 'Go to Work',
  },
  zh: {
    'site.name': '丁思覃',
    'site.brand': 'SITAN DING',
    'site.description': '丁思覃的作品集：数字媒体、交互设计与内容制作。',
    'nav.label': '主导航',
    'nav.home': '首页',
    'nav.work': '作品',
    'nav.about': '关于',
    'nav.contact': '联系',
    'nav.menu': '菜单',
    'nav.close': '关闭菜单',
    'nav.resume': '简历',
    'lang.label': '语言',
    'skip': '跳到正文',

    'home.eyebrow': '数字媒体 / 交互设计 / 视觉叙事',
    'home.title1': '你好，我是思覃。',
    'home.title2': '我做可以观看、游玩和探索的东西。',
    'home.intro':
      '我一直很喜欢互联网上各种各样的娱乐形式——从视频、游戏到互动体验。我在悉尼大学学习交互设计，喜欢把摄影、叙事和技术结合起来，把想法变成别人可以亲自体验的作品。',
    'home.cta.primary': '看看我的作品',
    'home.cta.secondary': '更多关于我',
    'home.hero.alt': '火箭穿过深蓝色的天空向上爬升，发动机的火焰在薄薄的白云前格外明亮。',
    'home.hero.caption': '我镜头里的航天 / 航天摄影',
    'home.selected.eyebrow': '精选项目 / 01—04',
    'home.selected': '精选作品。',
    'home.selected.intro': '一些我做过、也参与实现的作品——从互动世界、VR 体验到发布在网上的视频。',
    'home.viewAll': '查看全部作品',
    'home.about.eyebrow': '作品背后',
    'home.aboutTitle': '天生好奇，总在做点什么。',
    'home.aboutBody1':
      '我喜欢发现新的网络娱乐形式，但最让我兴奋的，是弄清楚它们是怎么做出来的。摄影和视频制作让我学会留意瞬间和故事；交互设计给了我另一种创作方式——让人参与进来，而不只是观看。',
    'home.aboutBody2': '我还在探索这些兴趣会把我带到哪里，这个网站记录的是我到目前为止的尝试。',
    'home.aboutCta': '认识我',
    'home.contact.title': '一起做点有意思的东西。',
    'home.contact.body': '有项目、想法或机会？很想听你说说。',
    'home.contact.cta': '打个招呼',
    'card.view': '查看项目',

    'work.title': '精选作品',
    'work.sub': '互动体验、视觉故事和创意实验。',
    'work.filter': '筛选作品',
    'work.count': '个项目',
    'cat.all': '全部',
    'cat.interactive': '互动',
    'cat.film': '影像与摄影',
    'cat.immersive': '沉浸式',
    'cat.visual': '视觉与 3D',

    'project.year': '年份',
    'project.type': '类型',
    'project.role': '我的角色',
    'project.tools': '工具',
    'project.collab': '个人 / 团队',
    'project.solo': '个人项目',
    'project.team': '团队项目',
    'project.tbc': '待确认',
    'project.overview': '概述',
    'project.experience': '作品体验',
    'project.process': '过程',
    'project.reflection': '收获',
    'project.credits': '署名',
    'project.next': '下一个项目',
    'project.back': '返回作品列表',
    'project.runDemo': '体验作品',
    'project.fullscreen': '全屏打开',
    'project.demoNote': '点击后加载，可能会播放声音。',
    'project.watchOn': '观看于',
    'project.videoRole': '我的角色',
    'project.coverTodo': '封面图即将补充',
    'project.enOnly': '这个项目页目前只有英文版。',

    'about.title': '关于我',
    'about.p1': '我一直喜欢互联网里各种各样的娱乐内容，从视频、游戏到互动体验。接触得越多，我就越想从观看者变成亲自参与设计和制作的人。',
    'about.p2': '学习交互设计的同时，我也持续尝试摄影、视频制作、创意编程和沉浸式媒体。这个网站记录了我做过的作品，以及创作过程中的一些想法和收获。',
    'about.photo1.alt': '一架灰色战斗机在山坡上的住宅区上空低空转弯，一侧机翼朝向镜头。',
    'about.photo2.alt': '一架隐身战斗机在蓝天中急转，翼尖拉出白色的凝结尾迹。',
    'about.photo.caption': '我拍的航空摄影',
    'about.education': '教育背景',
    'about.school': '悉尼大学',
    'about.degree': '设计学士（交互设计）',
    'about.dates': '2024–2026',
    'about.whatIDo': '我做什么',
    'about.do': ['交互设计', '影像与摄影', '创意编程', '沉浸式媒体'],
    'about.tools': '工具',
    'about.contact': '联系我',

    'contact.title': '一起做点有意思的东西。',
    'contact.sub': '最快的联系方式是邮件。',
    'contact.email': '邮箱',
    'contact.elsewhere': '其他平台',
    'contact.soon': '即将添加',

    'footer.cta': '有想法？聊聊吧。',
    'footer.top': '回到顶部',
    'footer.rights': '丁思覃 · 数字媒体与交互设计',

    'notfound.title': '这个页面不存在。',
    'notfound.body': '链接可能已经过期，或者项目换了位置。',
    'notfound.cta': '去看作品',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useT(lang: Lang) {
  return <K extends UIKey>(key: K) => ui[lang][key] as (typeof ui)['en'][K];
}

/** Tools shown on About. Keep to software with project evidence. */
export const tools = ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro', 'DaVinci Resolve', 'p5.js', 'Unity', 'Blender'];
