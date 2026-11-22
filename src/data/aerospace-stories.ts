// Copy supplied in the bilingual Aerospace Stories brief.
export const copy = {
  "en": {
    "eyebrow": "Aerospace · Cinematography · Visual storytelling",
    "tagline": "Capturing the moments behind space exploration.",
    "intro": "A collection of aerospace video projects and personal photography documenting launch events and space exploration. Through filming, visual storytelling and selected post-production work, I have had the opportunity to turn real moments and technical subjects into videos that people can watch and understand.",
    "videos": "Selected Video Projects",
    "videosIntro": "Three stories from space exploration, captured and brought to online audiences.",
    "play": "Play video here",
    "platformLabel": "Platform",
    "photoCount": "photos",
    "watch": "Watch on",
    "fallback": "Players load only when you press play. If a video does not play here, use the link to watch it on its original platform.",
    "douyin": "Watch the published video on Douyin.",
    "role": "My contribution",
    "team": "Team projects · Filming and selected post-production",
    "credit": "The published videos are collaborative works. My credits describe my contribution, not sole authorship or every shot in the final videos.",
    "footage": "Through My Lens",
    "footageLabel": "My footage / Playable excerpt",
    "footageBody": "Beyond the published projects, I also keep my own footage of rocket-related events. This video is part of my personal visual archive, documenting a moment through my own camera.",
    "posterAlt": "A camera and long lens overlook trees and distant structures beneath a cloudy sky.",
    "gallery": "Behind the Lens",
    "galleryBody": "A selection of rocket photography captured through my own lens. Each image preserves a different moment, from the anticipation before launch to the brief instant when a rocket rises into the sky.",
    "personal": "Personal photography",
    "heroAlt": "A rocket rising through a deep blue sky, with a bright engine flame.",
    "roles": "From Capturing to Creating",
    "closing": "Every launch is a brief moment in a much longer journey. Through photography and video, I hope to preserve these moments and share the stories behind them."
  },
  "zh": {
    "eyebrow": "航天 · 影像拍摄 · 视觉叙事",
    "tagline": "记录航天探索背后的瞬间。",
    "intro": "一个围绕航天发射与空间探索展开的影像作品集，收录了我参与拍摄的航天主题视频，以及个人拍摄的火箭摄影作品。通过现场拍摄、影像记录和部分后期制作，我希望将真实发生的航天事件与技术内容转化为更直观、更容易理解的视觉故事。",
    "videos": "正式发布的视频",
    "videosIntro": "三个航天故事，从现场记录到线上呈现。",
    "play": "在此播放视频",
    "platformLabel": "平台",
    "photoCount": "张照片",
    "watch": "前往观看 ·",
    "fallback": "按下播放后才会加载播放器。如果这里无法播放，请通过链接到原平台观看。",
    "douyin": "前往抖音观看正式发布的视频。",
    "role": "我的参与",
    "team": "团队项目 · 拍摄及部分后期制作",
    "credit": "正式发布的视频由团队共同完成。这里标注的是我的实际参与，不代表独立制作，也不代表成片中的所有镜头均由我拍摄。",
    "footage": "通过我的镜头",
    "footageLabel": "个人拍摄 / 可播放片段",
    "footageBody": "除了参与发布的视频项目，我也保留了自己拍摄的火箭影像。这段视频属于我的个人拍摄素材，记录了我通过镜头捕捉到的真实瞬间。",
    "posterAlt": "相机和长焦镜头面向树木与远处建筑，上方是布满云朵的天空。",
    "gallery": "镜头背后",
    "galleryBody": "精选个人拍摄的火箭摄影作品。从发射前的等待，到火箭升空的短暂瞬间，每张照片都记录了不同的现场细节与观察视角。",
    "personal": "个人摄影",
    "heroAlt": "火箭穿过深蓝色天空升起，发动机火焰明亮。",
    "roles": "从记录到创作",
    "closing": "每一次发射，都是漫长探索旅程中的一个短暂瞬间。我希望通过摄影与视频，把这些值得记录的时刻保存下来，也让更多人看到影像背后的航天故事。"
  }
} as const;
// Chronological project order; do not invent precise publication dates.
export const videos = [
  {
    "id": "tianzhou-8",
    "title": {
      "en": "Tianzhou-8 — Your Space Delivery Is on Its Way!",
      "zh": "天舟八号｜您的“太空快递”正在配送！"
    },
    "role": {
      "en": "Filming",
      "zh": "拍摄"
    },
    "description": {
      "en": "A video project centred on the Tianzhou-8 cargo spacecraft mission. My contribution focused on filming and capturing visual material that helped bring the mission and its launch-related moments to an online audience.",
      "zh": "围绕天舟八号货运飞船任务展开的视频作品。我主要参与现场拍摄，记录与任务及发射相关的影像素材，并将真实的航天现场呈现给线上观众。"
    },
    "platform": "Douyin",
    "url": "https://v.douyin.com/7TDQCjaL7zE/",
    "bvid": null,
    // Official iframe from open.douyin.com get_iframe_by_video (video_id resolved from the share link).
    "player": "https://open.douyin.com/player/video?vid=7437731678459579685&autoplay=0",
    "ratio": "1080 / 1920"
  },
  {
    "id": "tianzhou-9",
    "title": {
      "en": "Tianzhou-9 — Delivered in Just Three Hours! The Space Delivery Has Arrived",
      "zh": "天舟九号｜3小时速达！这份“太空快递”已签收"
    },
    "role": {
      "en": "Filming",
      "zh": "拍摄"
    },
    "description": {
      "en": "A video project about the Tianzhou-9 cargo spacecraft mission. My contribution focused on filming and capturing visual material for the final online video.",
      "zh": "围绕天舟九号货运飞船任务展开的视频作品。我主要负责相关影像拍摄，为最终发布的视频提供现场画面素材。"
    },
    "platform": "Bilibili",
    "url": "https://www.bilibili.com/video/BV1aguJzSEdn/",
    "bvid": "BV1aguJzSEdn",
    "player": "https://player.bilibili.com/player.html?bvid=BV1aguJzSEdn&page=1&autoplay=0&danmaku=0",
    "ratio": "16 / 9"
  },
  {
    "id": "lunar",
    "title": {
      "en": "An Important Breakthrough in China’s Crewed Lunar Exploration",
      "zh": "我国载人登月，有重要突破！"
    },
    "role": {
      "en": "Filming & post-production contribution",
      "zh": "拍摄及后期制作参与"
    },
    "description": {
      "en": "A video project exploring an important development in China's crewed lunar exploration programme. In addition to filming, I contributed to selected post-production tasks, including material review, rough editing and visual arrangement.",
      "zh": "围绕我国载人登月工程重要进展展开的视频作品。除了参与拍摄，我还参与了部分后期制作工作，包括素材筛选、粗剪及画面编排。"
    },
    "platform": "Bilibili",
    "url": "https://www.bilibili.com/video/BV1VGcszLEgY/",
    "bvid": "BV1VGcszLEgY",
    "player": "https://player.bilibili.com/player.html?bvid=BV1VGcszLEgY&page=1&autoplay=0&danmaku=0",
    "ratio": "16 / 9"
  }
];

// Personal rocket photography (re-encoded from 素材/火箭照片, metadata removed). Captions describe only
// what is visible — no mission names, dates or places, which the brief requires to be verified first.
export const photos = [
  { key: 'photo-night-liftoff', en: 'Night liftoff — the engines light beside the service tower', zh: '夜间点火 · 发动机在发射塔旁点亮', altEn: 'A rocket lifting off at night, engine flames lighting the launch tower and smoke.', altZh: '夜间火箭点火升空，发动机火焰照亮发射塔和烟雾。' },
  { key: 'photo-night-plume', en: 'The plume against a dark sky', zh: '夜空中的尾焰', altEn: 'A rocket climbing at night, a long orange and violet plume beneath it.', altZh: '火箭在夜空中上升，下方拖着橙紫色的长尾焰。' },
  { key: 'photo-night-tower', en: 'On the pad before launch, lit at night', zh: '发射前 · 夜色中的火箭与发射塔', altEn: 'A rocket standing on the pad at night, lit beside the orange service tower.', altZh: '发射前夜，火箭立在橙色发射塔旁，被灯光照亮。' },
  { key: 'photo-liftoff-day', en: 'Daytime liftoff between the lightning towers', zh: '白天点火 · 避雷塔之间升起', altEn: 'A rocket lifting off in daylight between two lattice towers, clouds of exhaust spreading across the pad.', altZh: '白天火箭在两座避雷塔之间点火升空，尾气在发射台上铺开。' },
  { key: 'photo-pad', en: 'Waiting on the pad, seen across the trees', zh: '等待发射 · 隔着树林看发射塔', altEn: 'A white rocket beside its service tower under a blue sky, palm trees in the foreground.', altZh: '蓝天下白色火箭立在发射塔旁，前景是棕榈树。' },
] as const;

export const platformName = {
  en: { Douyin: 'Douyin', Bilibili: 'Bilibili' },
  zh: { Douyin: '抖音', Bilibili: '哔哩哔哩' },
} as const;
