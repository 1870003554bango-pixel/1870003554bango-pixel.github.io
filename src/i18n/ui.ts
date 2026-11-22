/**
 * Every piece of interface text, in both languages. Pages and components read from here —
 * never hard-code visible text in a component.
 * English is the default (served at /), Chinese lives under /zh/.
 */
export const languages = { en: 'EN', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const contact = {
  email: '1870003554@qq.com',
  // Only add accounts the user has confirmed. Empty = not shown.
  linkedin: '',
  github: '',
  bilibili: '',
  douyin: '',
  resume: '', // e.g. '/resume/sitan-ding-resume.pdf' once the real file exists
};

export const ui = {
  en: {
    'site.name': 'Sitan Ding',
    'site.brand': 'SITAN DING.',
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

    'home.eyebrow': 'Digital media / Interactive design / Video production',
    'home.title': "Hi, I'm Sitan.",
    'home.intro':
      'I enjoy exploring the many forms of entertainment on the internet — from videos and games to interactive experiences. I make visual stories and interactive projects, combining photography, design and technology.',
    'home.cta.primary': 'Explore my work',
    'home.cta.secondary': 'About me',
    'home.hero.todo': 'Rocket launch photo by Sitan',
    'home.selected': 'Selected Work',
    'home.viewAll': 'View all projects',
    'home.aboutTitle': 'A little about me',
    'home.aboutBody':
      "I study interaction design at the University of Sydney. Outside class I photograph rocket launches, make videos and write small programs that turn into pictures. I'm trying to move from watching the internet to making things for it.",
    'home.aboutCta': 'More about me',

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

    'about.title': 'About Me',
    'about.p1':
      "I've always enjoyed the different forms of entertainment on the internet — from videos and games to interactive experiences. Over time, I wanted to move from simply watching them to creating my own.",
    'about.p2':
      "I studied interaction design and started exploring photography, video production, creative coding and immersive media. This portfolio is a collection of the things I've made and what I've learned along the way.",
    'about.photoTodo': 'Photo chosen by Sitan',
    'about.education': 'Education',
    'about.school': 'The University of Sydney',
    'about.degree': 'Bachelor of Design (Interaction Design)',
    'about.dates': 'Dates TBC',
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
    'footer.rights': 'All work by Sitan Ding unless credited.',

    'notfound.title': "This page doesn't exist.",
    'notfound.body': 'The link may be old, or the project has moved.',
    'notfound.cta': 'Go to Work',
  },
  zh: {
    'site.name': '丁思覃',
    'site.brand': 'SITAN DING.',
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

    'home.eyebrow': '数字媒体 / 交互设计 / 视频制作',
    'home.title': '你好，我是思覃。',
    'home.intro':
      '我喜欢互联网里各种不同的娱乐形式，从视频、游戏到互动体验。我也喜欢摄影和内容制作，正在尝试把设计与技术结合起来，做出可以观看、游玩和探索的作品。',
    'home.cta.primary': '看看我的作品',
    'home.cta.secondary': '关于我',
    'home.hero.todo': '思覃拍摄的火箭发射照片',
    'home.selected': '精选作品',
    'home.viewAll': '查看全部作品',
    'home.aboutTitle': '简单介绍一下',
    'home.aboutBody':
      '我在悉尼大学学习交互设计。课外我拍火箭发射、做视频，也写一些能变成画面的小程序。我正在从“看互联网”慢慢变成“为互联网做东西”。',
    'home.aboutCta': '更多关于我',

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

    'about.title': '关于我',
    'about.p1': '我一直喜欢互联网里各种各样的娱乐内容，从视频、游戏到互动体验。接触得越多，我就越想从观看者变成亲自参与设计和制作的人。',
    'about.p2': '学习交互设计的同时，我也持续尝试摄影、视频制作、创意编程和沉浸式媒体。这个网站记录了我做过的作品，以及创作过程中的一些想法和收获。',
    'about.photoTodo': '思覃自选的照片',
    'about.education': '教育背景',
    'about.school': '悉尼大学',
    'about.degree': '设计学士（交互设计）',
    'about.dates': '日期待确认',
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
    'footer.rights': '除特别注明外，所有作品均由丁思覃创作。',

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
