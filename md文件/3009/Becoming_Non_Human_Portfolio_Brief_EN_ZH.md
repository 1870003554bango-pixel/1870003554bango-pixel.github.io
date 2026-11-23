# Becoming Non-Human — Portfolio Website Production Brief
# 非人类视角 VR 项目 · 作品集网站制作说明（中英文）

版本：2026-11-23  
用途：供 Codex / Claude 在现有 Astro 作品集内制作项目详情页。  
本轮交付范围：制作说明文档；不代表网站已经实施，也不代表 Unity 原型已通过运行验收。

## 0. 首要目标与已确认职责

这篇案例必须同时讲清两层工作：

1. **整体层面：Sitan 负责整个体验的世界规划，包括蝙蝠、蜘蛛和海龟三个世界的大纲。**
2. **具体落地：Sitan 负责海龟世界，作为个人设计与实现工作的主要展示对象。**

以上来自用户本次明确确认。不得将个人贡献缩减为“只做海龟关卡”，也不得扩写为独立开发全部三个世界、管理所有成员、独立组织测试或独立制作所有模型。

推荐叙事重点：先展示三个世界共同构成的体验，再说明整体规划，随后深入海龟世界的移动、环境反馈、目标与局限。

三个世界不要平均展开成三篇长案例。建议整体规划占约 25%，海龟深度案例占约 50%，测试、反思与署名占约 25%；这是编辑篇幅建议，不是贡献比例。

## 1. 资料与可信度

### 1.1 原始材料（仅供本地制作，不得公开这些路径）

- 原始压缩包：`/Volumes/1TB 移动固态/作品集/学校作品集/3009/DECO3009_A3a_Empty Group3.zip`
- 外层包含：`DECO3009 final report.pdf`（12 页）、`3009 group3.zip`（Unity 项目）。
- 只读检查目录：`/Volumes/1TB 移动固态/作品集/.codex-review-3009/`
- 分析记录：该目录下 `Docs/AI/UnityProjectContext.md`。
- `source/` 是选择性提取的脚本快照，不是完整可运行工程；需要运行时应另行准备完整工程。

### 1.2 证据优先级

1. 用户明确确认：个人职责、作者身份和展示偏好。
2. 当前工程配置、场景序列化值与运行结果：实现行为。
3. 最终报告：设计目标、团队过程、测试结果和已知局限。
4. 现有网站条目：仅作旧内容参考，不作为最终事实依据。

报告与代码冲突时，不能照抄更好听的说法。运行效果未验证时，不写“已验证运行正常”。

### 1.3 已确认与未确认

| 内容 | 状态 | 网站处理 |
|---|---|---|
| 团队项目 | 已确认，报告列出三位成员 | 显示 Team project / 团队项目 |
| Sitan 整体世界规划及三个世界大纲 | 用户确认 | 在首屏和个人贡献中明确展示 |
| Sitan 负责海龟世界 | 用户确认 | 作为个人案例重点 |
| 最终动物组成 | 蝙蝠、蜘蛛、海龟 | 移除旧版红树林角色描述 |
| Unity 版本 | 2022.3.20f1 | 可放技术说明，不必放首屏 |
| 平台 | Unity / PICO VR，包内有 Android APK | 不写网页原生可玩或已上架 |
| 项目年份、周期、正式课程成绩 | 本次未确认 | 隐藏，必要时 TBC，不推测 |
| 用户测试 | 报告称 5 人测试 | 明确 n=5 和测试版本边界 |
| 测试组织者、问卷作者、具体脚本作者 | 未逐项确认 | 不把团队过程全部写为个人独立完成 |
| 最终修订版复测 | 未发现充分证据 | 不宣称改版后评分提高或问题全部消除 |
| 独立演示录屏 | 包内未找到 MP4/MOV | 作为待补素材，不伪造播放器 |

## 2. 项目身份与全站数据更新

- 项目名：**Becoming Non-Human**（沿用现有站点标题）。
- 英文副标题：**Three worlds. Different bodies. One connected journey.**
- 中文副标题：**三个世界，不同的身体，一段相连的旅程。**
- 类别：`Virtual Reality · World Planning · Interaction Design` / `虚拟现实 · 世界规划 · 交互设计`。
- 英文路由：`/work/becoming-non-human/`。
- 中文路由：`/zh/work/becoming-non-human/`。
- `slug` 保持 `becoming-non-human`，不因改文案重命名 URL。
- 保留当前项目排序和首页精选设置；不要顺手重排其他项目。

现有 `src/data/projects.ts` 仍含 mangrove / 红树林，应在实施时更新该项目的 subtitle、summary、role、coverAlt 等相关字段。全站搜索旧描述，但仅修改确属本项目的旧内容。

### 可直接使用的项目卡片文案

**EN**
> A collaborative VR journey through bat, spider and sea turtle perspectives. I planned the overall world structure and outlines for all three worlds, and took responsibility for Turtle World.

**中文**
> 一个通过蝙蝠、蜘蛛与海龟视角展开的团队 VR 体验。我负责整体世界规划和三个世界的大纲，并负责海龟世界的设计与实现。

## 3. 布局与视觉原则

读取 `AGENTS.md`、`DESIGN.md` 和当前页面实现后再制作。沿用 Astro、现有导航、字体、颜色变量与双语路由，不引入新的 UI 框架。

本项目明确要求**完整中英文正文**；覆盖 DESIGN.md 中其他项目暂时仅英文正文的阶段性约定。

- 首屏采用文字与真实作品图左右并排。
- 主体使用 `<article class="project">` 内的 `.block / .row / .row.flip / .prose / .wide-text`。
- 相邻图文行左右交替；文字必须紧邻所描述的画面。
- 没有对应图像的文字占整行，不制造空半栏。
- 区块间距 4rem，内部保持紧凑。
- 主要验收宽度 1440、1280、1024；手机至少检查 390 和 360，无横向溢出。
- 作品画面可以包含真实的海水蓝绿色，但页面仍使用现有单一强调色。
- 不添加海浪背景、漂浮粒子、霓虹、玻璃效果或自动播放装饰。
- 三世界概览每张图仅需承担辨识场景的作用；涉及 HUD、操作说明的细节截图应足够大，可点击放大。
- 不用生成图片代替 VR 运行截图；报告图示与运行截图的来源标签必须区分。

## 4. 页面结构与双语文案

下列文案可直接作为实现底稿。若后续素材证明某句话不准确，先按事实调整，不为了凑篇幅扩写功能。

### 01 — Hero / 首屏

**Eyebrow**
- EN: `TEAM PROJECT · VR EXPERIENCE · WORLD PLANNING`
- 中文：`团队项目 · VR 体验 · 世界规划`

**Title**：Becoming Non-Human

**Tagline**：使用第 2 节副标题。

**EN introduction**
> What changes when we move through a world with a different body? Becoming Non-Human is a collaborative VR prototype that explores this question through a bat, a spider and a sea turtle. I planned the overall world structure and the outlines of all three worlds, then focused on designing and developing Turtle World.

**中文 introduction**
> 当我们换一种身体在世界中移动，体验会发生什么变化？Becoming Non-Human 是一个团队 VR 原型，通过蝙蝠、蜘蛛和海龟三种视角探索这个问题。我负责整体世界结构与三个世界的大纲，并重点完成海龟世界的设计与开发。

**首屏图**：优先选择海龟世界真实运行画面，能看清环境、移动目标或距离提示；如无合适画面，使用明确标注来源的报告截图临时占位。

**按钮**：
- 有真实演示片：`Watch the Experience` / `观看体验演示`，链接到本页视频区。
- 暂无演示片：`Explore the Three Worlds` / `探索三个世界`，链接到真实存在的世界概览区。
- 次要入口：`My Contribution` / `我的贡献`，链接到职责区。
- 不放不可用的 `Play in Browser` 或 `Enter VR`。

首屏下方整宽信息栏：

| 字段 | EN | 中文 |
|---|---|---|
| Format | Collaborative VR prototype | 团队 VR 原型 |
| My role | Overall world planning, three-world outlines, Turtle World | 整体世界规划、三个世界大纲、海龟世界 |
| Tools | Unity · C# · PICO VR | Unity · C# · PICO VR |
| Focus | Movement, environmental feedback and player guidance | 移动、环境反馈与玩家引导 |

### 02 — Three Worlds, One Journey / 三个世界，一段旅程

**EN**
> I planned the experience around three distinct ways of moving: flying through darkness, moving between trees with webs, and navigating water as a sea turtle. The outlines established a role, a core interaction and a goal for each world. Together, they gave the team a shared structure for developing the journey.

**中文**
> 我以三种不同的移动方式规划整个体验：在黑暗中飞行、借助蛛丝在树木之间移动，以及以海龟的视角在水中导航。三个世界的大纲分别确定了角色、核心交互和目标，为团队后续开发提供共同的体验结构。

并排展示三个简洁模块；手机上下排列。按实际体验顺序：

| 世界 | EN copy | 中文文案 |
|---|---|---|
| Bat World | Fly through a dark mountain environment, use guidance and acceleration, and collect glowing targets. | 在黑暗山地中飞行，借助引导与加速收集发光目标。 |
| Spider World | Shoot webs, climb and move between trees to reach the next part of the journey. | 发射蛛丝、攀爬并在树木间移动，抵达旅程的下一阶段。 |
| Turtle World | Navigate ocean currents, avoid floating rubbish and reach the shore before health runs out. | 在洋流中调整方向、避开漂浮垃圾，并在生命值耗尽前抵达岸边。 |

可加一条轻量流程：Intro → Bat → Spider → Turtle → Ending。

说明：这是构建场景顺序和体验概览，不表示每个场景都已实机验证通关。不添加未证实的分支结局。

### 03 — My Contribution / 我的贡献

**EN**
> My contribution covered both the overall plan and one world in depth. I was responsible for the world planning and outlines across the bat, spider and turtle experiences. I also took responsibility for Turtle World, including its navigation loop, environmental feedback and gameplay presentation. The complete prototype was developed collaboratively; the bat and spider implementations are presented here as team work.

**中文**
> 我的工作同时覆盖整体规划和一个世界的具体落地。我负责蝙蝠、蜘蛛与海龟三个世界的整体规划及大纲，也负责海龟世界，包括导航循环、环境反馈和玩法呈现。完整原型由团队共同完成，页面中的蝙蝠与蜘蛛实现作为团队成果展示。

职责表：

| 层级 | Sitan 的职责 | 表达边界 |
|---|---|---|
| 整体体验 | 世界规划、三个世界大纲、角色与主要交互方向 | 不自动升级为项目经理、创意总监或所有叙事内容的唯一作者 |
| 海龟世界 | 设计与开发责任、玩法循环、环境反馈与呈现 | 不宣称所有素材和每行代码均独立原创 |
| 团队成果 | 三世界整体原型与报告中的团队测试 | 不将队友的蝙蝠／蜘蛛实现写成个人开发 |

优先素材：用户实际大纲、草图或流程图。若没有原始规划稿，可以根据最终实现重绘一张结构图，但必须标注：
- `Reconstructed from the final prototype` / `根据最终原型整理`。
- 不得冒充项目前期原始草图。

### 04 — Turtle World: Finding a Way Through the Water / 海龟世界：在水中寻找方向

这是页面主体。建议先展示完整循环，再拆解 4 个细节。

**EN**
> Turtle World turns movement into a negotiation with the environment. The player follows distance guidance toward the shore while currents affect their movement and floating rubbish creates obstacles. The goal is clear: reach the destination before health runs out. Compared with the faster bat and spider worlds, this scene offers a slower, more deliberate rhythm.

**中文**
> 海龟世界让移动成为人与环境持续协调的过程。玩家通过距离提示朝岸边前进，洋流影响移动方向，漂浮垃圾构成障碍。目标明确：在生命值耗尽前抵达终点。相比节奏更快的蝙蝠和蜘蛛世界，这一段体验更缓慢，也需要持续观察和调整。

循环图：
`Observe distance → Adjust movement → Respond to currents → Avoid rubbish → Reach shore / Retry`
`观察距离 → 调整移动 → 应对洋流 → 避开垃圾 → 抵达岸边／重试`

优先展示真实录屏，完整体现起始目标、移动、一次避障或受伤、终点反馈。不得把未运行的静态图做成假互动。

#### 04A — Moving With the Current / 随洋流调整移动

**EN**
> Movement combines the player's input with a changing current. The prototype uses layered noise to vary the current direction and strength, creating drift that the player needs to respond to. This makes navigation more than simply moving straight toward a marker.

**中文**
> 移动由玩家输入与变化的洋流共同构成。原型通过多层噪声改变洋流方向和强度，让玩家需要不断修正漂移。导航因此不只是朝着标记直线前进，而是持续与环境协调。

配图：移动方向与漂移效果的真实录屏，或基于实现绘制的示意图。明确这是设计模拟，不是科学级海洋流体仿真。

#### 04B — Crossing the Waterline / 穿过水面

**EN**
> Crossing the waterline changes both movement and atmosphere. Below the surface, the prototype introduces an underwater overlay and adjusts sound through a low-pass filter. Above the surface, the overlay is removed and the audio becomes clearer. These linked cues make the change of environment easier to notice.

**中文**
> 穿过水面时，移动方式与环境感受一起发生变化。进入水下后，原型显示水下遮罩，并通过低通滤波调整声音；回到水面上方时，遮罩隐藏，声音恢复清晰。视觉与听觉共同帮助玩家察觉环境切换。

配图：水上／水下两张真实截图；只有同机位、同构图才用 CompareSlider，否则左右并列或 Tabs。

声音演示必须由用户点击后播放，两个片段不能同时播放；无真实音频材料就不显示试听按钮。

#### 04C — Rubbish, Health and Consequences / 垃圾、生命值与后果

**EN**
> Floating rubbish gives the environment a consequence. Collisions reduce health, while a short damage interval prevents a single contact from immediately exhausting it. The player must balance progress toward the shore with avoiding hazards along the way.

**中文**
> 漂浮垃圾让环境产生可感知的后果。碰撞会扣除生命值，伤害间隔则避免一次接触立即耗尽生命。玩家需要在向岸边推进与躲避沿途障碍之间做出调整。

配图：垃圾、健康状态与反馈。不得加入未实现的塑料袋、渔网或猎食机制；这些属于未来方向。

#### 04D — A Clear Destination / 明确的目的地

**EN**
> Distance feedback keeps the goal visible throughout the journey. Success and failure states close the loop and make the outcome understandable. The final report suggests that this clearer goal and slower pace helped participants understand Turtle World more easily than the spider scene.

**中文**
> 距离反馈让目标始终可见，成功与失败状态则让体验形成完整闭环。最终报告显示，这种更明确的目标与较慢的节奏，有助于参与者比在蜘蛛场景中更容易理解海龟世界。

配图：距离 UI、成功／失败状态。不要把距离提示写成完整方向导航，也不要声称已实现磁场导航。

### 05 — Making the Experience Work in VR / 让体验在 VR 中成立

用两个图文行讲清真实技术取舍，不堆砌组件名。

**稳定的水下表现 / A More Reliable Underwater Effect**

EN:
> The team report describes an unstable underwater post-processing effect on the Pico headset. The revised approach used a translucent overlay in front of the camera, paired with water-level detection and audio changes. This prioritised a more dependable transition on the target device over a more complex visual treatment.

中文：
> 团队报告记录了水下后处理效果在 Pico 头显上的不稳定问题。调整后的方案使用相机前的半透明遮罩，配合水位检测和声音变化，优先保证目标设备上的切换表现，再考虑更复杂的视觉效果。

**身体、头部与碰撞 / Aligning the Body, Head and Collisions**

EN:
> A key limitation was the difference between the player's tracked head position and the gameplay collision body. A person could visually touch rubbish without the collision body registering contact. The prototype used a collision adjustment as a temporary measure, but better alignment between viewpoint, water detection and collision remains necessary.

中文：
> 一个重要限制来自头显追踪的位置与游戏碰撞身体之间的差异：玩家视觉上可能已经碰到垃圾，但碰撞体没有接触。原型使用了碰撞范围调整作为临时处理，但视点、水位检测与碰撞之间仍需要更准确的一致性。

不要写“彻底解决 Pico 兼容性”“支持所有身高”“完全消除穿模”。

### 06 — What We Learned From Testing / 从测试中学到什么

**EN**
> The team conducted a formative test with five participants. They experienced the bat, spider and turtle worlds and provided ratings alongside open-ended feedback. The results helped identify where the interactions were clear and where guidance, comfort and narrative connections needed improvement.

**中文**
> 团队开展了包含五位参与者的小规模形成性测试。参与者体验蝙蝠、蜘蛛和海龟三个世界，并提供量表评分与开放反馈。结果帮助团队识别交互清晰之处，以及引导、舒适度和叙事联系仍需改进的部分。

可展示的报告数据：

| 指标 | 平均分 / 5 | 说明 |
|---|---:|---|
| Presence / immersion · 临场感／沉浸感 | 4.4 | 报告正文数据 |
| Bat interaction clarity · 蝙蝠交互清晰度 | 4.2 | 不应改称满意度 |
| Turtle guidance · 海龟引导 | 4.0 | 图表指标为 guidance |
| Spider interaction clarity · 蜘蛛交互清晰度 | 3.2 | 反映困难与引导不足 |
| Scene connectivity · 场景连接性 | 3.8 | 不表示叙事问题已解决 |

优先只突出与案例相关的 3 项：沉浸感 4.4、海龟引导 4.0、场景连接性 3.8；其余可以简洁表格呈现。

不适量表若展示，必须单独成组并标“低分代表较低不适”：眩晕 2.2、眼疲劳 2.0、恶心 1.6。不要与高分为好的指标混成一个总分或雷达图。

必须同时展示说明：
- EN: `Five-participant formative test, reported in the project report. These results do not establish post-iteration improvements.`
- 中文：`数据来自项目报告中的五人形成性测试，不能据此认定修改后的版本已得到效果验证。`

设计发现与回应：

| 发现 | 页面应表达的回应 |
|---|---|
| 海龟目标容易理解、节奏较平稳 | 保留清晰目标与慢节奏，不夸大为“最受欢迎” |
| 基本玩法理解后，海龟体验可能变得单调 | 增加环境变化与反馈是后续方向，不描述为已完成 |
| 蜘蛛难度与引导问题突出 | 作为团队测试背景简述，具体修改不归为 Sitan 独立成果 |
| 场景之间缺少更强的内在联系 | 联系 Sitan 的整体规划责任，诚实讨论如何让三个大纲进一步形成共同叙事 |

### 07 — Reflection and Next Steps / 反思与下一步

**EN**
> Planning three worlds helped me think beyond individual interactions and consider the rhythm of a complete journey. Developing Turtle World made that plan concrete through movement, feedback and a clear destination. The prototype also showed the limits of the concept: changing movement alone does not fully communicate an animal's way of sensing. A stronger shared story, more consistent body tracking and further testing would be important next steps.

**中文**
> 三个世界的规划让我从单个交互扩展到完整旅程的节奏，而海龟世界的开发则通过移动、反馈和明确目标，让规划变成具体体验。原型也暴露了概念的局限：仅仅改变移动方式，并不能完整传达动物的感知方式。更强的共同叙事、更一致的身体追踪，以及进一步测试，都是重要的下一步。

未来方向明确标 `Future directions / 后续方向`：
- 整体：加强三个动物世界的共同叙事与过渡动机。
- 海龟：统一相机、碰撞体和水位判定；完善方向提示与环境反馈。
- 内容：更多垃圾类型与环境变化；磁场启发的导航仅为待探索方向。
- 验证：对修订版本重新测试，确认哪些调整真正有效。

### 08 — Credits and Transparency / 署名与说明

**EN**
> Team project by Lynn Shao, Rachel Liu and Sitan Ding. My role covered overall world planning, outlines for all three worlds, and Turtle World. The prototype incorporates external environment and model assets. AI tools supported parts of scripting and debugging, and Suno was used for background music, as documented in the team report. Outputs were reviewed and adapted by the team.

**中文**
> 团队成员：Lynn Shao、Rachel Liu、Sitan Ding。我的职责包括整体世界规划、三个世界的大纲及海龟世界。原型使用了外部环境与模型素材。根据团队报告，部分脚本与调试使用 AI 工具辅助，背景音乐使用 Suno 生成，相关输出经团队审阅与调整后整合。

不要公开学号、原始问卷参与者信息或私人表格链接。素材来源可放折叠区，具体许可与公开使用范围需要实施时核对，不自动声称全部具有可再分发授权。

页尾：返回 Work + 下一项目，链接使用现有项目数据，不硬编码一个可能不存在的项目。

## 5. 素材清单与缺失时的处理

| 素材 | 数量建议 | 用途 | 当前状态 |
|---|---:|---|---|
| 海龟代表性运行截图 | 1 | Hero、项目卡片、分享图 | 待从真实运行中取得 |
| 三世界场景截图 | 每个 1 | 总体体验概览 | 报告已有参考小图，优先补清晰运行截图 |
| 个人整体规划稿 | 1–3 | 证明世界结构与大纲 | 待用户提供；可另做明确标注的回顾性结构图 |
| 海龟体验录屏 | 1 | 展示核心闭环 | 包内未找到独立视频 |
| 洋流移动片段 | 1 | 移动与环境反馈 | 待补 |
| 水上／水下截图或片段 | 2 | 视觉与音频切换 | 待补 |
| 垃圾与生命值反馈 | 1–2 | 避障与伤害 | 待补 |
| 距离与成功／失败界面 | 2–3 | 目标与结果 | 待补 |
| 测试结果 | 1 | 重绘简洁图表 | 可用报告 n=5 数据，保留指标名称与限制 |

处理规则：
- 缺图使用清晰 TODO / 待补充占位，不生成伪作品图。
- PDF 中的图片应提取嵌入原图，不把包含学号的整页截图上传。
- 报告图 caption：`Image from the final project report` / `图片来自最终项目报告`。
- 运行截图 caption：仅实际运行截取后使用 `Captured from the running prototype`。
- 照片／截图按实际比例显示；公开图片长边不超过 2400px，移除 GPS 等隐私元数据。
- 单个仓库文件小于 10 MB。视频使用 H.264 MP4；需要音效说明时保留 AAC 音频，禁止自动播放。
- 使用 `controls playsinline preload="metadata"` 和真实 poster。
- 完整较长演示无法在体积限制内保持清晰时，使用已确认的视频平台链接；不得偷偷截短却仍称完整演示。
- 不将 Unity 工程、APK、Library、资产包、原始压缩包复制到网站仓库。

## 6. 网页交互边界

该项目是 PICO VR 原型，不是已经发布的 WebXR 或 WebGL 项目。

允许制作的网页辅助交互：
1. 三个世界的 Tab：切换真实图像与简短说明。
2. 海龟四个系统的 Stepper：展示截图和操作解释。
3. 水上／水下对比：满足同构图条件时才使用 CompareSlider。
4. 图片放大：Zoom + 单个 Lightbox。
5. 原生视频播放：无自动播放，保留音量、播放进度与全屏。

这些都是作品说明方式，不应标为“在线体验完整 VR 游戏”。

交互图若模拟洋流，必须标为 `Explanatory diagram / 原理示意`，不得冒充 Unity 运行画面。第一版不需要额外制作此类模拟。

## 7. 代码与目录实施方案

建议新增：

```text
src/data/becoming-non-human.ts
src/views/projects/BecomingNonHuman.astro
src/pages/work/becoming-non-human.astro
src/pages/zh/work/becoming-non-human.astro
src/assets/becoming-non-human/
public/video/becoming-non-human/
```

修改：
- `src/data/projects.ts`：更新项目内容和真实封面，设置 `customPage: true`。
- `src/i18n/ui.ts`：仅添加需要复用的界面文案键，中英文同时添加。
- 必要时更新公共组件的语言支持，避免项目中文页仍出现全英文控件。

结构要求：
- 详细项目文案放 `src/data/becoming-non-human.ts`，使用完整 en / zh 数据。
- 两个路由只是薄封装，共用一个 View。
- 现有泛型 `[slug]` 路由应继续跳过 `customPage` 项目，避免重复路由。
- 站内链接使用 `page(lang, route)`，public 媒体路径使用 `url()`。
- 所有颜色、字号、间距复用现有 tokens；不用 Tailwind 或新的 UI 框架。
- HTML 使用一个 H1，后续 H2/H3 层级明确；语言切换保持在同一项目。
- 不修改 Scam Ready 的 Figma 嵌入或其他不相关项目。

## 8. 技术描述的准确性检查

实施前应再次核对当前工程版本，下面是本次静态检查发现：

| 可描述内容 | 应避免的夸大 |
|---|---|
| 洋流使用多层噪声与平滑移动叠加 | 科学精确流体仿真 |
| 海平面状态检测、视觉遮罩、低通声音 | 已彻底解决头显水下渲染问题 |
| 距离 UI、生命值、成功／失败状态 | 已实现磁场导航或所有垃圾种类 |
| 蝙蝠具有光脉冲与引导相关代码 | 已真实模拟动物回声定位 |
| 蜘蛛具有射线目标与定速牵引代码 | 已实现物理准确的惯性蛛丝系统 |
| 蜘蛛有体力逻辑 | 体力已经限制每次射网 |
| 构建配置有 5 个场景与 APK | 已验证所有设备与全部流程无错误 |

额外风险：海龟结束管理器中的 `menuSceneName` 为 `MainMenu`，但构建场景列表未包含此场景。录制终点演示前核对按钮绑定与运行行为；不要仅凭代码默认值宣布错误已复现，也不要在本次网站制作中擅自重构 Unity 工程。

## 9. 制作阶段

### 阶段 A：内容与素材核对
- 读取最新网站状态，保留其他代理或用户的修改。
- 确认用户职责已按本 brief 写入首屏和正文。
- 核对实际可用素材，并列出缺口。
- 不依赖旧网站的红树林描述。

### 阶段 B：完整双语页面
- 首屏、三世界概览、个人贡献、海龟细节、测试、反思、署名。
- 即使素材未齐，也建立真实且明确的内容结构。
- 有效按钮才呈现；有素材后再接入播放器。

### 阶段 C：真实素材与视觉打磨
- 替换 TODO，调整左右图文对应关系。
- 校验画面比例和可读性。
- 重要 UI 截图不可缩成无法阅读的小图。

### 阶段 D：验证与交付
- 构建、子路径、双语、浏览器、交互与素材体积检查。
- 根据用户已有授权与仓库规则提交本次完成的文件；不混入无关内容。
- 未验证项如实列出，不能只运行 build 就声称完整验收。

## 10. 验收清单

### 内容
- [ ] 三个世界均为蝙蝠、蜘蛛、海龟；项目相关旧红树林文案已更新。
- [ ] 首屏明确 Sitan 的整体世界规划、三个世界大纲与海龟职责。
- [ ] 蝙蝠和蜘蛛实现没有错误归为个人独立成果。
- [ ] 没有虚构年份、成绩、周期、百分比贡献或雇佣身份。
- [ ] 已实现、报告描述、未来计划区分清楚。
- [ ] 测试展示 n=5，指标名称正确，没有声称复测提升。
- [ ] 完整中英文正文及控件，非“中文导航 + 英文正文”。
- [ ] 外部素材、AI 辅助和团队署名保留。

### 视觉与交互
- [ ] 1440×900、1280、1024 下图文配对，无无意义空半栏。
- [ ] 手机 360/390 无横向溢出或文字裁切。
- [ ] 图片不拉伸、不裁掉重要 HUD，关键界面可放大。
- [ ] 没有伪播放器、伪按钮或未实现的“在线 VR”入口。
- [ ] 视频实际播放、拖动、全屏可用，音频由用户主动开启。
- [ ] 键盘焦点可见，控件至少 44px；Esc 能关闭图片放大。
- [ ] 动效遵循 reduced-motion。

### 技术与交付
- [ ] `npm run build` 通过。
- [ ] `BASE=/portfolio npm run build` 通过，项目页链接和媒体无路径错误。
- [ ] 英文与中文项目详情可直接访问，切换后保持同一项目。
- [ ] 控制台无新增错误，关键交互实际操作过。
- [ ] 每个新增文件小于 10 MB，没有原始工程或 APK 混入仓库。
- [ ] 没有本地磁盘路径、学号或私人问卷数据出现在公开页面。
- [ ] 交付包含页面链接、修改文件、测试证据、缺失素材与未验证事项。

## 11. 可直接交给执行代理的指令

请根据本 brief，在现有作品集网站中完成 Becoming Non-Human 的中英文项目详情页。先读取 AGENTS.md、DESIGN.md、项目数据、公共组件和当前 Git 状态，再列出计划修改文件。保留现有 Astro 技术栈和所有无关修改。

最重要的内容定位：Sitan 负责整个体验的世界规划和三个世界的大纲，同时负责海龟世界；蝙蝠与蜘蛛的具体实现作为团队成果展示。不要将页面写成平均介绍三个小游戏，也不要把整体团队开发全部归为 Sitan。

先讲整体结构，再重点展开海龟的移动、洋流、水上水下反馈、垃圾与生命值、距离提示和终点闭环，最后呈现五人形成性测试、真实局限与未来方向。按照本 brief 提供的中英文底稿实现。缺素材用明确占位，不生成伪作品图，不自动把 Unity 项目改造成网页游戏，不修改其他项目。

交付前实际检查桌面与手机布局、双语、所有可点击控件、视频与图片放大，运行普通和子路径构建，并明确说明尚未验证的功能或需要用户补充的素材。
