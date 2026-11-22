# 作品集网站 · 规划

> 写于 2026-11-22。**已被 `Sitan_Ding_Portfolio_Claude_网站改造规范.md` 取代**：项目清单、页面结构和视觉以那份规范为准。本文件只保留媒介处理、部署和外置硬盘的说明。

## 1. 现有素材盘点

| 项目 | 位置 | 可上站的内容 | 体积问题 |
|---|---|---|---|
| UFO / AI 视频（SkyFeed） | `../AI视频` | 导出片段（51 MB）、B 站成片、4 组网页代码（可做在线 Demo）、AI 生成图 | 素材库 46 GB，**绝不进仓库** |
| Identity Press（Blender） | `../blender/Identity_Press` | `08_Final` 成片、`07_Portfolio_Evidence` 过程截图、Process Log 文字 | 渲染 25 GB，只挑关键帧 |
| DECO1012（p5.js） | `../学校作品集/1012` | `sketch.js` 可直接在网页里运行、Design Rationale PDF | 自带 5 MB 的 p5.js，改用 CDN |
| Figma 原型、照片、文字 | 待补充 | — | — |

## 2. 核心决定

**按"项目"组织，而不是按"媒介"组织。** 不要做"视频页 / 照片页 / 代码页"。每个项目一页，页里按叙事混排：问题 → 过程 → 成果。看作品集的人（老师、面试官）想知道你怎么思考，媒介只是证据。

**技术栈：Astro + GitHub Pages。**
- 输出纯静态 HTML，免费托管在 GitHub Pages，用 GitHub Actions 自动部署（push 即上线）。
- 每个项目是一个 Markdown/MDX 文件，写字像写笔记，图片视频用组件插入——以后加项目不用碰代码。
- 自带图片压缩和响应式图片；页面默认零 JavaScript，只有 p5 / Figma 这些需要时才加载。
- Claude 和 Codex 都很熟 Astro，出错容易修。

（备选：纯 HTML/CSS 手写。项目少于 4 个也行，但内容一多就难维护，不推荐。）

## 3. 每种媒介怎么放

| 媒介 | 做法 | 注意 |
|---|---|---|
| **B 站视频** | `player.bilibili.com/player.html?bvid=…&autoplay=0` iframe 嵌入，封装成 `<Bilibili bvid="…" />` 组件 | 先显示封面图，点击才加载播放器（快很多）；海外打开 B 站可能慢，旁边放"在 B 站观看"链接。若要投海外/澳洲的职位，考虑同时传一份 YouTube 或 Vimeo |
| **短视频 / 循环片段** | ffmpeg 压成 H.264 MP4（+ WebM），720p–1080p，**单个 < 10 MB**，`<video muted loop playsinline>` | GitHub 单文件上限 100 MB、站点建议 < 1 GB |
| **长视频（非 B 站）** | 放 B 站 / YouTube / Vimeo 嵌入，或放 Cloudflare R2 等对象存储 | 不要把长视频塞进 git |
| **p5.js** | 每个 sketch 放 `public/sketches/<名字>/`，p5 从 cdnjs 引用；页面用 iframe 嵌入，**先显示截图 + "运行作品"按钮** | p5.sound 需要用户点击才能出声；旁边放"查看源码"（链接到 GitHub 文件或 p5 Web Editor） |
| **已有网页项目**（UFO 的 SkyFeed 等） | 同 p5：放进 `public/demos/`，作为可以点开的在线 Demo | 检查图片体积 |
| **Figma 原型** | 主体放**导出的关键屏截图**；再加 Figma embed（`figma.com/embed?embed_host=share&url=…`）点击后加载 | Figma 文件分享权限要设成"任何有链接的人可查看"；embed 很重，不要一进页面就加载 |
| **照片** | 原图留在硬盘，导出长边 2400 px 的 JPG 放进 `src/assets/`，Astro 自动转 WebP/AVIF 和多尺寸 | 删除 EXIF 里的 GPS 信息 |
| **文字** | 直接写在项目的 Markdown 里 | 每段配一张图，避免大段纯文字 |

## 4. 网站结构

```
/                 首页：一句话自我介绍 + 精选项目列表（大封面，按重要性排序）
/work/<项目>      项目详情：概述（角色/工具/时间/一句话结果）→ 过程 → 成果 → 反思
/about            关于我 + 简历 PDF + 联系方式
/lab（可选）      零碎实验：p5 小草图、照片
```

项目详情页固定开头一块"信息栏"：**时间 / 角色 / 工具 / 类型**，让人 10 秒内知道这是什么。

## 5. 仓库结构（建议）

```
作品集网站/
├─ AGENTS.md            给 Codex 的规则（Claude 也读，见第 7 节）
├─ CLAUDE.md            一行：参见 AGENTS.md
├─ src/
│  ├─ content/work/     每个项目一个 .mdx（文字 + 组件）
│  ├─ assets/<项目>/     压缩后的图片
│  ├─ components/       Bilibili / Video / P5Sketch / FigmaEmbed / Gallery
│  ├─ layouts/  pages/
├─ public/
│  ├─ video/            压缩后的短视频
│  ├─ sketches/         p5 作品（可直接访问运行）
│  └─ demos/            网页类作品
├─ scripts/             ffmpeg / 图片批量压缩脚本
└─ .github/workflows/deploy.yml
```

原始素材永远留在 `../AI视频`、`../blender` 等文件夹，**只把导出后的成品复制进来**。

## 6. 部署到 GitHub

1. 有 GitHub 账号；仓库名叫 `<用户名>.github.io` → 网址就是 `https://<用户名>.github.io`（否则会多一段 `/仓库名/`）。
2. 安装 GitHub CLI：`brew install gh`，然后 `gh auth login`。
3. 仓库 Settings → Pages → Source 选 **GitHub Actions**，用 Astro 官方的 `withastro/action` 部署。
4. 以后想换自定义域名（如 `yourname.com`），在 Pages 里填上即可，代码不用改。

## 7. Claude 和 Codex 怎么配合

- **同一个仓库、同一份规则**：`AGENTS.md` 写清楚目录约定、组件用法、"媒体文件必须压缩到多大"、设计规则。Codex 会自动读 `AGENTS.md`；`CLAUDE.md` 里写一行引用它，两边就一致。
- **一次只让一个 AI 改同一批文件**。比如 Claude 搭框架和设计，Codex 负责批量加项目内容，或反过来。
- **每完成一步就 git commit**，哪个 AI 改坏了都能退回去。
- 适合交给 AI 的：搭框架、写组件、批量压缩脚本、部署配置、可访问性检查。适合你自己做的：选作品、写项目文字、挑图。

## 8. 外置硬盘的注意事项

这块盘是 **exFAT** 格式：
- macOS 会生成大量 `._*` 文件 → `.gitignore` 里要忽略 `._*` 和 `.DS_Store`。
- git 可能误报文件权限变化 → 运行 `git config core.fileMode false`。
- `node_modules` 在 exFAT 上安装较慢，用 npm（不要用 pnpm，它依赖符号链接）。
- 更稳妥的做法：代码仓库放在 Mac 内置盘（如 `~/Projects/portfolio`），素材仍从这块硬盘导出。仓库已推到 GitHub 的话，放哪都不怕丢。

## 9. 分阶段计划

| 阶段 | 内容 | 产出 |
|---|---|---|
| 0 · 准备 | 装 `gh`、`ffmpeg`；确定 GitHub 用户名；列出要放的项目（建议 3–6 个精选） | 项目清单 |
| 1 · 框架 | 初始化 Astro、AGENTS.md、部署流程；先上线一个"空壳"确认流程通 | 能访问的网址 |
| 2 · 视觉方向 | 定字体、颜色、版式（一个强调色，克制） | 设计规范 + 首页 |
| 3 · 组件 | Bilibili / Video / P5Sketch / FigmaEmbed / Gallery | 一个示范项目页 |
| 4 · 内容 | 每个项目：选图、压缩、写文字 | 全部项目页 |
| 5 · 打磨 | 手机端、加载速度、可访问性、SEO（标题/分享图） | 正式版 |

## 10. 需要你提供 / 决定的

- [ ] GitHub 用户名（是否已有账号）
- [ ] 要放哪些项目？除了上面三个，Figma 原型和照片属于哪些项目？
- [ ] 各个 B 站视频的 BV 号
- [ ] 网站语言：中文 / 英文 / 双语？（悉尼读书、投澳洲方向的话建议英文为主）
- [ ] 作品集用途：申请学校、找实习/工作、还是个人展示？这决定首页先放什么
