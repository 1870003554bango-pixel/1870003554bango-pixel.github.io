// Copy supplied in the bilingual Aerospace Stories brief.
export const copy = {
  "en": {
    "eyebrow": "Aerospace · Cinematography · Visual storytelling",
    "tagline": "Capturing the moments behind space exploration.",
    "intro": "A collection of aerospace video projects and personal photography documenting launch events and space exploration. Through filming, visual storytelling and selected post-production work, I have had the opportunity to turn real moments and technical subjects into videos that people can watch and understand.",
    "videos": "Selected Video Projects",
    "videosIntro": "Three stories from space exploration, captured and brought to online audiences.",
    "play": "Load video player",
    "watch": "Watch on",
    "fallback": "If playback is unavailable, watch the original video on its platform.",
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
    "missing": "TODO — More personal rocket photographs to be added.",
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
    "play": "加载视频播放器",
    "watch": "前往观看 ·",
    "fallback": "如无法播放，请通过原平台链接观看。",
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
    "missing": "待补充 — 更多个人火箭摄影作品。",
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
    "ratio": null
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
    "ratio": "9 / 16"
  }
];
