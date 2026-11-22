# Sitan Ding Portfolio — Claude 网站改造规范（GitHub Pages）

版本：v1.0｜用途：交给 Claude Code / Claude 修改现有 GitHub 仓库

> 设计目标：建立一个个人 Digital Media / Interactive Design / Creative Production 作品集，兼顾香港数字媒体研究生申请与上海互联网/内容/UX实习申请。内容必须像创作者网站，而不是课程作业目录。语言自然、真实、第一人称。先审查仓库，再逐步修改；不允许在没有证据的情况下虚构项目截图、履历、数据和正式雇佣关系。

---

## 0. 开始前的要求（Claude 必须执行）

1. 首先读取当前仓库的 `README`、`package.json`（如果存在）、入口页面、路由、CSS、资源目录和部署配置，输出一个简短的现状审查：目前技术栈、可复用代码、缺失资源、潜在风险。
2. **保留当前项目的技术栈**。如果是 HTML/CSS/JS 就优先在原结构下完成；如果是 React/Vite/Astro 则沿用它。不要为了“现代”而无理由重写整个项目。
3. 实现前先列出计划修改/新增的文件；改动后运行已有测试与构建命令，并检查本地页面及 GitHub Pages 子路径部署。
4. 禁止使用“看起来像真实作品”的 AI 占位图作为最终项目截图。未提供素材时使用干净的 placeholder + 文字标注 TODO。**不得将网络图片冒充我的个人作品**。
5. 保留真实链接；未确认链接请显示 `Coming soon` 或跳转至已经存在的 Work 页面，不允许做虚假可点击按钮。
6. 团队项目必须标明 `Team project`，并仅写可以核实的个人贡献。
7. 不得把课程项目写成正式商业雇佣，不得编造用户测试样本量、观看次数、奖项、录取、实习单位。
8. 所有文字从 `en` / `zh` 双语内容文件读取，避免页面组件内重复硬编码；英语默认，中文可切换。
9. 网站应满足桌面与手机浏览、基本无障碍与性能要求；避免整站重型滚动动画。
10. 用户尚未提供仓库地址，因此本文件是**目标设计规范**，不是对已有代码的审查结论。

## 1. 产品与内容定位

**个人姓名**：Sitan Ding / 丁思覃  
**主标题方向**：Digital Media · Interactive Design · Creative Production  
**核心故事**：我一直喜欢互联网里的多种娱乐形式，包括视频、游戏与互动体验。慢慢地，我不想只是观看，也希望亲自设计与制作。通过摄影、航天视频、p5.js、VR与交互设计，我正在尝试把这些兴趣变成真实作品。  
**两类主要访客**：① 香港 Digital Media / Creative Media / Interactive Media 硕士招生老师；② 上海互联网、游戏、数字内容、UX、产品与创意技术实习招聘方。  
**设计原则**：让人先看到作品，再了解故事与方法；一眼能看见我的角色、使用的工具和最终成果；课程名不作为项目页大标题。

### 访客最重要的三条访问路径

- 招生官：`Home → Work → Through the Window → Becoming Non-Human → About`
- 互联网设计招聘方：`Home → Work → Through the Window → Scam Ready → Resume`
- 视频内容招聘方：`Home → Aerospace Stories → 实际视频 → Contact`

## 2. 网站导航与路由（一期）

导航栏：`SITAN DING` 左侧/中左品牌、`Home | Work | About | Contact`、`EN / 中文`、可选右侧 `Resume ↗`。

页面路由（实际实现可依现有框架调整，需保证刷新后正常访问）：

```
/
/work/
/work/through-the-window/
/work/aerospace-stories/
/work/becoming-non-human/
/work/scam-ready/
/work/cocoa-reserve/
/work/urban-pulse/
/about/
/contact/
```

如有必要，增加 `/photography/` 作为二期页面，但**一期不用单独把摄影拆成顶级导航**。毕业简历以 PDF 下载链接置于 About 或 Contact，并在导航中可选展示 Resume。

重要：GitHub Pages 不提供通用服务端 SPA rewrite。应优先用可直接访问的静态页面路径/预渲染路径；若现有架构为 SPA，选择可靠的 hash routing 或合理的静态回退方案，并在刷新、直接访问项目 URL 时测试 404。

## 3. 首页 Home（目标：第一眼有吸引力）

### 3.1 顶部导航
- 左侧品牌：`SITAN DING.` 或 `SD.`，不要同时出现好几个重复品牌字样。
- 中右导航：Home / Work / About / Contact。
- 右上语言切换：EN / 中文，保留当前页面。
- 滚动时导航可轻量 sticky；小屏幕使用可操作且带 aria 标签的菜单。

### 3.2 首屏 Hero
- 桌面版分屏：文字约 48–52%，个人火箭摄影约 48–52%；图片真实、清晰、有留白，不要使用模糊无关背景图。
- 移动端：标题→一句介绍→CTA→图片，不使照片覆盖文字。
- **主标题**：`Hi, I'm Sitan.`（可选更有个性的 `I make things people can watch, play, and explore.`）
- **小标签**：`DIGITAL MEDIA / INTERACTIVE DESIGN / VIDEO PRODUCTION`
- **英文介绍**：`I enjoy exploring the many forms of entertainment on the internet — from videos and games to interactive experiences. I make visual stories and interactive projects, combining photography, design and technology.`
- **中文介绍**：`我喜欢互联网里各种不同的娱乐形式，从视频、游戏到互动体验。我也喜欢摄影和内容制作，正在尝试把设计与技术结合起来，做出可以观看、游玩和探索的作品。`
- 主 CTA：`Explore My Work ↗` → `/work/`
- 次 CTA：`About Me` → `/about/`
- 文字段宽控制 44–58 字符；避免居中一大段灰色低对比度正文。
- 右侧火箭图片：使用用户真实摄影，必要时可以有小字 `Photography by Sitan Ding`（在确有版权与拍摄来源可确认时）。

### 3.3 Featured Work
- 标题 `Selected Work`。
- 首屏下方展示四张项目卡片：`Through the Window`、`Aerospace Stories`、`Becoming Non-Human`、`Scam Ready`。
- 卡片内容：真实封面、项目英文名、类别（例如 `Creative Coding / p5.js`）、一条短介绍、箭头/hover。
- 桌面 2列，移动 1列；统一封面比例（建议4:3 或 16:10）；所有卡片可点击。
- 底部 `View All Projects →` → Work。

### 3.4 一段简短个人介绍
- 标题 `A little about me`。
- 2–3句话说明悉尼大学 Bachelor of Design / Interaction Design 背景，喜欢摄影、互联网娱乐、视频、创意编程。
- 不要在首页铺满技能条、课程成绩和全部履历。
- CTA `More About Me ↗`。

### 3.5 页脚 CTA
- `Have something in mind? Let's talk.`
- 邮箱 `SitanDing2026@outlook.com`，链接 `mailto:SitanDing2026@outlook.com`。
- 社交链接只能用真实已确认账号；未提供具体个人主页链接时不显示假按钮。
- Footer 包含版权、导航、语言切换/返回顶部。

## 4. Work 总页（目标：快速选项目）

### 顶部
- 标题：`Selected Work.` / `精选作品`
- 副文案：`A collection of interactive experiences, visual stories, and creative experiments.`
- **不要重复 Home 的 “Hi, I'm Sitan Ding”**。

### 分类（可过滤）
- `All`：6个项目
- `Interactive`：Through the Window、Scam Ready
- `Film & Photography`：Aerospace Stories
- `Immersive`：Becoming Non-Human
- `Visual & 3D`：Cocoa Reserve、Urban Pulse
- 如果分类后的结果极少，也可以先只呈现 All，二期再增加过滤。

### 推荐顺序

| 顺序 | 名称 | 类别 | 关键信息 | 项目页状态 |
|---|---|---|---|---|
| 01 | Through the Window | Interactive Art / p5.js | 24h 日夜、时间控制、生成画面 | **重点完整** |
| 02 | Aerospace Stories | Filmmaking / Photography | 天舟八号、天舟九号、载人登月三个视频 | **重点完整** |
| 03 | Becoming Non-Human | VR / Unity | 海龟、红树林、蝙蝠视角 | 完整 |
| 04 | Scam Ready | Interactive Storytelling / UX | 国际学生防诈骗互动选择 | 完整 |
| 05 | Cocoa Reserve | 3D / Speculative Design | 2060年可可稀缺设计 | 简洁 |
| 06 | Urban Pulse | Generative Art / p5.js | 动态粒子视觉 | 简洁 |

备注：若主要面向UX岗位，可将 Scam Ready 排到 Aerospace Stories 前；不需要独立创建“课程作业”类别。

## 5. 统一的项目详情页模板

不是所有项目完全一样，但每个项目至少有：

1. **Hero**：项目标题、1句概述、实际封面/视频。
2. **Metadata**：Year（待核对再显示）、Type、My Role、Tools、Individual/Team。
3. **Overview / Why**：为什么做这件事，来自什么个人兴趣或问题。
4. **Experience / Outcome**：实际成片/可运行 Demo/原型，比文字更重要。
5. **Process**：3–5个最重要的关键动作（不用粘贴课程报告全文）。
6. **What I learned / Reflection**：真实收获、限制及改进方向，100字内为宜。
7. **Next Project / Back to Work**：引导浏览下一个项目。

每页建议有明确的视觉节奏：
- 一张大图/视频 → 一段短文 → 2–3张横向图片 → 一段说明 → 可体验内容 → Reflection。
- 避免一屏同时出现大段文字、10张小图及太多标签。
- 每个标题下的正文一般 60–120词；最多的长文部分也控制在200词以内。
- 优先用真人实际作品图、GIF、截图、录屏，不使用图库素材伪装真实成果。

### 5.1 Through the Window（首要打磨）

**封面**：真实 p5.js 程序内具有代表性的时间/天空状态截图，宽屏 16:9。  
**一句话概述**：`A quiet, interactive window into a changing 24-hour sky.`

建议详细顺序：

1. Hero：标题、短句、完整场景截图，`Experience the Demo ↗`。
2. Overview：从喜欢摄影、坐飞机靠窗、观察天空的个人经历切入。
3. Inspiration：个人拍摄的 3–4张日出日落/海边夜空照片，与数字画面并排。
4. A Full Day in One Window：程序 `Dawn / Day / Sunset / Night` 同构图四张；建议真截图而不是模拟图。
5. Interaction：`Drag the Clock`（拖指针切换24h）/ `Change Speed`（点击数字时钟切换流速）/ `Hidden Details`（点击书本触发动画）。每项1张局部截图或录屏。
6. Generative Visuals：动态天空色彩、噪声山脉、云、星轨、随机流星、花/猫等细节；展现视觉结果而不是代码墙。
7. Live Demo：把上传的 `Deco1012.zip` 中 HTML、p5.js sketch和资源整理成独立静态子页，例如 `/demos/through-the-window/`，测试 GitHub Pages 能在真实路径运行，页面内 iframe 嵌入或新窗口打开；可见的 `Open Fullscreen` 链接。
8. Reflection：`Stop and look more at the things around you.`，简短个人反思。
9. Credits：`Concept / Interaction / Visuals: Sitan Ding`；可注明 AI 辅助从个人照片采样天空颜色及辅助编码，与原报告声明保持一致。

重要：上传资料里，`Deco1012.zip` 含 `index.html`、`sketch.js`、`style.css`、`p5.js`、`p5.sound.min.js`。Claude 必须先检查实际代码再嵌入。历史简历对时间填“2024.04–06”，但 DECO1012 成绩记录对应 2025 S1；**具体日期待用户确认，不要自动决定**。

### 5.2 Aerospace Stories（三个视频：真实实践）

**总标题**：`Aerospace Stories — Cinematography & Video Production`  
**Hero**：用户拍摄的火箭发射照片，可配简短视频剪辑蒙太奇（前提是拥有发布权或经授权）。  
**个人故事**：喜欢摄影与航天、参与真实拍摄、学习在复杂光线下捕捉重要时刻。

三个子模块：

A. **Tianzhou-8 / 您的“太空快递”正在配送！**  
- Role: Filming / 拍摄
- Link: https://v.douyin.com/7TDQCjaL7zE/
- 内容：实际镜头、场景、拍摄环境、个人机位与贡献（据实核实）

B. **Tianzhou-9 / 3小时速达！这份“太空快递”已签收**  
- Role: Filming / 拍摄
- Link: https://www.bilibili.com/video/BV1aguJzSEdn/
- 内容：视频创作、拍摄与成片联系，个人实际镜头（如可确认）

C. **Crewed Lunar Exploration / 我国载人登月，有重要突破！**  
- Role: Filming & Production / 拍摄及制作
- Link: https://www.bilibili.com/video/BV1VGcszLEgY/
- 内容：前期素材、筛选、粗剪、画面组织及制作过程（限实际参与部分）

视频嵌入：若第三方播放器有跨域/地区/浏览器限制，直接显示清晰的 `Watch on Bilibili` / `Watch on Douyin` 按钮。绝不自动下载、镜像或重新发布别人持有版权的完整视频。

避免将“播放量”写作个人独立贡献。只有用户核实并提供当前平台截图后，才可展示真实数据和日期。

### 5.3 Becoming Non-Human（VR）

- Hero：项目代表性 VR 录屏/截图。
- Overview：从非人类视角看环境，包含海龟、红树林、蝙蝠等体验路径。
- Experience：实际 Unity / Pico 4 录屏，短片30–90秒，可加三张不同视角的场景图。
- My Role：必须按团队真实分工准确填写；目前不可把项目写成单人制作。
- Process：场景构建/交互设计/VR测试中的实际贡献。
- Outcome & Reflection：沉浸、视角、体验局限和改进。

### 5.4 Scam Ready（互动反诈）

- Hero：Figma 实际关键界面或实际交互演示。
- Background：国际学生可能遭遇冒充身份类诈骗，目标是练习判断与独立核验。
- Experience：选择A/B/C/D → 根据选择出现结果/反馈 → 重置/重试 → 验证成功的体验（以最终版本为准）。
- Prototyping：用户旅程/交互逻辑/核心界面/动效，简洁呈现。
- My Contribution：明确团队贡献，不直接称独立全流程。
- Live Prototype：Figma 公开可访问原型（用户提供后添加）。
- Outcome：测试反馈、下一步反思；无验证数据则不写虚构数字。

### 5.5 Cocoa Reserve（视觉与实体）

- Theme：2060年可可稀缺，巧克力成为被珍藏的物件。
- Cover：最佳 Blender 渲染图，而不是软件截图。
- Highlights：两个拆分可可荚概念、盒体结构、3D渲染、激光切割、实际成品、海报。
- Process：生活铰链失败→调整参数→最终可用结果；可加对比图。
- 用 1–2屏图+简短文案即可，不要照搬10页/14页作业。

### 5.6 Urban Pulse（生成视觉）

- 大图/循环 GIF 或视频放在最前。
- 一段话：动态粒子视觉对城市节奏的演绎。
- 如果可公开运行，提供 p5.js Demo。
- 2–3张不同状态截图 + 技术标签即可，避免凑长文。

## 6. About（不要做成另一张简历）

结构：
1. `About Me` 和一张用户自选个人照片或与创作有关的摄影照片（不强求人物肖像）。
2. 两段第一人称：互联网娱乐兴趣 → 产生“自己做内容”的愿望；摄影、航天视频和交互设计让自己开始实践。
3. Education：`The University of Sydney / Bachelor of Design (Interaction Design)`；日期以真实在读和正式学位状态为准。不要写错误毕业年份。
4. What I Do：`Interactive Design / Filmmaking & Photography / Creative Coding / Immersive Media`。
5. Tools：Figma、Photoshop、Illustrator、Premiere Pro、DaVinci Resolve、p5.js、Unity、Blender；按照掌握程度和项目证据展示，不写未掌握的软件。
6. CV/Resume：链接到真实 PDF（用户提供之前可以隐藏按钮）。
7. `Contact Me`。

可用英文个人介绍：

`I've always enjoyed the different forms of entertainment on the internet — from videos and games to interactive experiences. Over time, I wanted to move from simply watching them to creating my own. I studied interaction design and started exploring photography, video production, creative coding and immersive media. This portfolio is a collection of the things I've made and what I've learned along the way.`

中文版本：

`我一直喜欢互联网里各种各样的娱乐内容，从视频、游戏到互动体验。接触得越多，我就越想从观看者变成亲自参与设计和制作的人。学习交互设计的同时，我也持续尝试摄影、视频制作、创意编程和沉浸式媒体。这个网站记录了我做过的作品，以及创作过程中的一些想法和收获。`

## 7. Contact

- 标题：`Let's make something interesting.` / `一起做点有意思的东西。`
- 主要 CTA：邮箱 `SitanDing2026@outlook.com`（mailto）。
- 可选链接：LinkedIn、GitHub、Bilibili、Douyin；仅在用户提供账号地址后启用。
- 公开网站**不建议放手机号、微信号、出生日期、家庭地址、身份证件等私人信息**。
- 如果不做后端，不加不会发送邮件的假表单；简单 `mailto:` 足够。
- 加简历 PDF 的 `Download Resume`（有真实文件后才启用）。

## 8. 视觉设计规范

**风格**：Minimal Editorial / Creative Digital Portfolio。作品图主导、正文克制、有呼吸感、不装饰过度。

| Token | 建议 | 用途 |
|---|---|---|
| background | `#F7F7F4` | 全站背景 |
| foreground | `#191919` | 主文字 |
| secondary | `#6B6B68` | 次级文案 |
| accent | `#276B9B` | 链接、少量强调 |
| border | `#E6E5DF` | 分割线 |
| max-width | `1200px` | 主要内容 |
| heading | Inter / Manrope（中文 Noto Sans SC） | 标题 |
| body | Inter / Noto Sans SC | 正文 |
| desktop gutter | `48–64px` | 页面两侧 |
| mobile gutter | `20px` | 手机两侧 |
| grid | desktop 2列项目，mobile 1列 | Work |
| cover ratio | 统一 `4:3` 或 `16:10` | 项目列表 |
| project hero | `16:9` | 详情首图 |

- 字体颜色对比足够，正文不要用低对比度浅灰。
- 首页不要居中排列一长段窄字；建议左对齐，右侧真实火箭摄影。
- Hover 可以轻微放大/上移、显示箭头，但不能依赖 Hover 才能看到标题。
- 动画优先使用 CSS transition、进入视口淡入，遵守 `prefers-reduced-motion`。
- 一屏一个视觉重点，避免大量玻璃拟态、重阴影、自动播放多个视频。

## 9. 内容及资源管理

建议将项目数据放在 `src/data/projects.(js|ts|json)`（路径按现有技术栈适配），而不是在每个项目页面中复制全部数据。

建议字段：

```json
{
  "slug": "through-the-window",
  "order": 1,
  "category": ["interactive", "creative-coding"],
  "status": "published",
  "cover": "/assets/projects/through-the-window/cover.webp",
  "featured": true,
  "year": null,
  "collaboration": "solo",
  "tools": ["p5.js", "JavaScript"],
  "links": {
    "demo": null,
    "source": null,
    "video": null
  },
  "content": {
    "en": {"title": "Through the Window", "subtitle": "A quiet, interactive window into a changing 24-hour sky."},
    "zh": {"title": "Through the Window", "subtitle": "一扇可以自由探索24小时天空变化的互动窗口。"}
  }
}
```

**资源目录建议**（在不破坏现有仓库结构的前提下调整）：

```
public/
  assets/
    home/rocket-hero.webp
    projects/
      through-the-window/{cover.webp,dawn.webp,day.webp,night.webp,clock.webp,...}
      aerospace-stories/{cover.webp,tianzhou8.webp,tianzhou9.webp,lunar.webp,...}
      becoming-non-human/{cover.webp,vr-demo.mp4,...}
      scam-ready/{cover.webp,prototype.webp,...}
      cocoa-reserve/{cover.webp,final.webp,...}
      urban-pulse/{cover.webp,loop.mp4,...}
  demos/
    through-the-window/{index.html,sketch.js,style.css,p5.js,...}
  resume/
    sitan-ding-resume.pdf   # 只有在用户提供真实文件后才加入
```

图片建议压缩为 WebP/AVIF；实际作品照片保持清晰；重要视频不要未经压缩直接塞入 GitHub 仓库。可用公开视频平台嵌入和外链。所有资源加 alt 文本、宽高、防止布局跳动。不要从非用户授权的网络图片获取最终资源。

## 10. 双语与内容写作规范

- 默认英文，切换中文；当前语言在路由切换后保持一致。
- 英文自然，避免堆砌 `innovative / interdisciplinary / transformative` 等空洞词。
- 每个项目的个人职责清楚，不用 `we` 冒充个人独立贡献，也不用 `I` 冒充整个团队成果。
- 只展示已经做出的功能，不把“将来可能实现”描述成现有能力。
- 项目成果、成绩、日期都需要可验证；不确定就 `TBC`，不要自动补。
- 未准备好的详情页如果上线，提供简短真实内容和下一项目入口，避免死链或空白页。

## 11. 技术与 GitHub Pages 要求

1. 站点可以在 GitHub Pages 静态托管，不依赖 Node 后端、数据库或需要保密的服务器密钥。
2. 如果现有项目是 Vite：
   - 用户站点 `https://username.github.io/` 或自定义域名：`base: '/'`。
   - 仓库项目站点 `https://username.github.io/repo/`：`base: '/repo/'`。
   - 使用 GitHub Actions `npm ci` / `npm run build` 后部署生成的静态目录。
3. 若是纯静态 HTML/CSS/JS：可以直接从仓库分支或 Actions 部署，确保资源使用与仓库路径兼容的链接。
4. 启用 GitHub Pages 后，测试直接访问 `/work/through-the-window/` 和浏览器刷新是否正常；不得仅首页可用。
5. p5.js Demo 应在独立目录加载，不要把完整大体积库和动画强制加载到首页。懒加载 iframe/进入详情页后加载，移动端友好。
6. 外部 Bilibili / Douyin 嵌入可能受地区、跨域或平台策略限制：保留直接跳转原视频的链接，不自动依赖嵌入成功。
7. 支持 360px、390px、768px、1024px、1440px 常见视口；菜单、筛选、图片、Demo 和项目导航均正常。
8. SEO：每个页面有独立 title、description、Open Graph 封面（使用用户授权素材）、规范化 URL；避免重复 placeholder 内容被搜索收录。
9. 无障碍：语义化标题结构、键盘焦点、明显焦点状态、图片alt、按钮名称、视频控制和 `prefers-reduced-motion`。
10. 添加 404 页面、favicon（SD字母即可）、README（怎么本地运行和部署）。

参考官方技术资料：
- Vite 静态部署： https://vite.dev/guide/static-deploy.html
- GitHub Pages 发布源： https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages 404 排查： https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites

## 12. 分阶段交付：不要一次性全部做完

### Phase 1 — 网站骨架与设计系统
- 审查原仓库，保留技术栈。
- 全站导航/双语切换/响应式布局/Footer。
- Home 页面（Hero + Selected Work + About 摘要）。
- Work 页面（六个真实项目卡片）。
- 项目详情模板与路由。
- 确保 GitHub Pages 构建部署成功。

### Phase 2 — 重点项目内容
- Through the Window：用户个人故事、核心视觉、交互说明、Live Demo。
- Aerospace Stories：三视频、用户个人角色、真实链接。
- 两个项目各做手机与桌面 QA。

### Phase 3 — 其余项目
- Becoming Non-Human / Scam Ready / Cocoa Reserve / Urban Pulse。
- About 与 Contact 详情、真实社交账号、下载简历（用户提供文件后）。

### Phase 4 — 完善
- 图片/视频优化、SEO、Accessibility、深链接刷新、手机细节、Google Pages部署验证。
- 校对全部英文和中文；检查链接及字幕。

## 13. 验收标准（Definition of Done）

- [ ] Home、Work、About、Contact均可访问。
- [ ] 6个项目都有真实的标题/分类/介绍，首页及 Work 都可正确进入详情。
- [ ] Through the Window Demo 在 GitHub Pages 线上页面实际运行，并有 fullscreen fallback。
- [ ] Aerospace 3个视频原站链接准确可点击。
- [ ] 作品封面没有冒充本人作品的图库图。
- [ ] 手机、桌面双语切换无溢出，切换后链接可用。
- [ ] Github Pages URL 直接打开项目详情刷新不 404。
- [ ] 团队项目显示 `Team project` 和真实个人贡献。
- [ ] 全站没有默认模板文字、死链、虚假数字、未经证实的日期。
- [ ] README 说明本地运行、构建与部署步骤。

---

## 14. 直接交给 Claude 的首轮执行指令

> 请按照此 Markdown 文件中的《Sitan Ding Portfolio — Claude 网站改造规范》修改我当前 GitHub 仓库中的个人作品集。请先检查现有仓库结构、技术栈、文件和部署方式，告诉我你准备保留哪些文件，以及第一阶段要修改哪些文件。**不要现在就重写整套技术栈**；优先实现 Phase 1：主页、Work 项目列表、统一项目详情页模板、导航/双语/响应式和 GitHub Pages 兼容配置。使用现有的真实素材；没有的图片请用清晰占位框并列出待补清单，不要冒充我自己的作品。所有文案要像个人创作者写的，不要学术化。先完成能运行、能部署的版本，再一起完成 Through the Window 和 Aerospace Stories 两个重点项目。修改完成后运行 build / test，输出：修改的文件列表、测试结果、GitHub Pages 验证方法、待我补充的具体素材。必须注意深链接刷新和 Vite base 路径问题。

