/**
 * Becoming Non-Human — page copy (en + zh).
 * Source: md文件/3009/Becoming_Non_Human_Portfolio_Brief_EN_ZH.md (copy used as written) and the DECO3009 final report.
 * Confirmed by Sitan: overall world planning + outlines for all three worlds, and Turtle World.
 * Bat and Spider implementations are team work. No year, grade or retest results are stated.
 * Images are from the final report (labelled); no running-prototype captures exist yet → TODO boxes.
 */
import type { Lang } from '../i18n/ui';

const en = {
  eyebrow: 'Team project · VR experience · World planning',
  title: 'Becoming Non-Human',
  tagline: 'Three worlds. Different bodies. One connected journey.',
  intro:
    'What changes when we move through a world with a different body? Becoming Non-Human is a collaborative VR prototype that explores this question through a bat, a spider and a sea turtle. I planned the overall world structure and the outlines of all three worlds, then focused on designing and developing Turtle World.',
  ctaPrimary: 'Explore the Three Worlds',
  ctaSecondary: 'My Contribution',
  heroAlt: 'Project overview image: a low-poly coastline with framed views of Turtle World, Spider World and Bat World, titled "Becoming Non-Human — A VR Journey Across Three Connected Worlds".',
  reportCaption: 'Image from the final project report.',
  details: [
    { k: 'Format', v: 'Collaborative VR prototype' },
    { k: 'Team', v: 'Team project · 3 members' },
    { k: 'My role', v: 'Overall world planning, three-world outlines, Turtle World' },
    { k: 'Tools', v: 'Unity · C# · PICO VR' },
    { k: 'Focus', v: 'Movement, environmental feedback and player guidance' },
  ],

  worlds: {
    eyebrow: '01 / Three worlds, one journey',
    title: 'Three ways of moving',
    body: 'I planned the experience around three distinct ways of moving: flying through darkness, moving between trees with webs, and navigating water as a sea turtle. The outlines established a role, a core interaction and a goal for each world. Together, they gave the team a shared structure for developing the journey.',
    flowLabel: 'Scene order',
    flow: ['Intro', 'Bat', 'Spider', 'Turtle', 'Ending'],
    flowNote: 'Scene order in the build. This is an overview, not a claim that every scene was verified end to end on a headset.',
    list: [
      { id: 'bat', name: 'Bat World', text: 'Fly through a dark mountain environment, use guidance and acceleration, and collect glowing targets.', img: 'report-bat', alt: 'Bat World: dark mountain peaks under a starry sky, with a thin guide line of light.' },
      { id: 'spider', name: 'Spider World', text: 'Shoot webs, climb and move between trees to reach the next part of the journey.', img: 'report-spider', alt: 'Spider World: a sandy coastal slope with low-poly trees under an orange sky.' },
      { id: 'turtle', name: 'Turtle World', text: 'Navigate ocean currents, avoid floating rubbish and reach the shore before health runs out.', img: 'report-turtle-island', alt: 'Turtle World: an aerial view of a sandy island with trees, surrounded by bright blue water.' },
    ],
    teamTag: 'Team build',
    mineTag: 'My world',
  },

  contribution: {
    eyebrow: '02 / My contribution',
    title: 'The whole plan, and one world in depth',
    body: 'My contribution covered both the overall plan and one world in depth. I was responsible for the world planning and outlines across the bat, spider and turtle experiences. I also took responsibility for Turtle World, including its navigation loop, environmental feedback and gameplay presentation. The complete prototype was developed collaboratively; the bat and spider implementations are presented here as team work.',
    tableHead: ['Level', 'My responsibility', 'Shown as'],
    rows: [
      { k: 'Whole experience', v: 'World planning, outlines for all three worlds, roles and main interaction directions', s: 'My planning' },
      { k: 'Turtle World', v: 'Design and development, gameplay loop, environmental feedback and presentation', s: 'My world' },
      { k: 'Team outcome', v: 'The three-world prototype and the user test in the report', s: 'Team work' },
    ],
    diagramTitle: 'World outlines',
    diagramNote: 'Reconstructed from the final prototype — not an original planning sketch.',
    outline: [
      { k: 'Bat', role: 'A bat in a dark mountain range', move: 'Flying, with a boost', goal: 'Collect glowing targets', mine: false },
      { k: 'Spider', role: 'A spider on a forested coast', move: 'Webs, jumping and climbing', goal: 'Reach the end of the trees', mine: false },
      { k: 'Turtle', role: 'A sea turtle in open water', move: 'Swimming against currents', goal: 'Reach the shore with health left', mine: true },
    ],
    outlineHead: ['World', 'Role', 'Movement', 'Goal'],
  },

  turtle: {
    eyebrow: '03 / Turtle World',
    title: 'Finding a way through the water',
    body: 'Turtle World turns movement into a negotiation with the environment. The player follows distance guidance toward the shore while currents affect their movement and floating rubbish creates obstacles. The goal is clear: reach the destination before health runs out. Compared with the faster bat and spider worlds, this scene offers a slower, more deliberate rhythm.',
    imgAlt: 'The low-poly sea turtle model on sand under a blue sky.',
    loopLabel: 'Gameplay loop',
    loop: ['Observe distance', 'Adjust movement', 'Respond to currents', 'Avoid rubbish', 'Reach shore / Retry'],
    details: [
      { id: 'current', n: '03A', k: 'Moving with the current', v: "Movement combines the player's input with a changing current. The prototype uses layered noise to vary the current direction and strength, creating drift that the player needs to respond to. This makes navigation more than simply moving straight toward a marker." },
      { id: 'water', n: '03B', k: 'Crossing the waterline', v: 'Crossing the waterline changes both movement and atmosphere. Below the surface, the prototype introduces an underwater overlay and adjusts sound through a low-pass filter. Above the surface, the overlay is removed and the audio becomes clearer. These linked cues make the change of environment easier to notice.' },
      { id: 'rubbish', n: '03C', k: 'Rubbish, health and consequences', v: 'Floating rubbish gives the environment a consequence. Collisions reduce health, while a short damage interval prevents a single contact from immediately exhausting it. The player must balance progress toward the shore with avoiding hazards along the way.' },
      { id: 'goal', n: '03D', k: 'A clear destination', v: 'Distance feedback keeps the goal visible throughout the journey. Success and failure states close the loop and make the outcome understandable. The final report suggests that this clearer goal and slower pace helped participants understand Turtle World more easily than the spider scene.' },
    ],
    diagram: { tag: 'Explanatory diagram', input: 'Player input', current: 'Current (varies)', result: 'Actual drift', note: 'A design simulation, not a scientific model of ocean flow.' },
    todoWater: 'Above / below the waterline — screenshots from the running prototype',
    todoRubbish: 'Rubbish collision and health feedback — screenshot or clip from the running prototype',
    goalAlt: 'Turtle World seen from above: the island shore the player swims towards.',
    todoGoal: 'Distance UI and success / failure screens — screenshots from the running prototype',
  },

  vr: {
    eyebrow: '04 / Making it work in VR',
    title: 'Trade-offs on the headset',
    items: [
      { k: 'A more reliable underwater effect', v: 'The team report describes an unstable underwater post-processing effect on the Pico headset. The revised approach used a translucent overlay in front of the camera, paired with water-level detection and audio changes. This prioritised a more dependable transition on the target device over a more complex visual treatment.' },
      { k: 'Aligning the body, head and collisions', v: "A key limitation was the difference between the player's tracked head position and the gameplay collision body. A person could visually touch rubbish without the collision body registering contact. The prototype used a collision adjustment as a temporary measure, but better alignment between viewpoint, water detection and collision remains necessary." },
    ],
  },

  testing: {
    eyebrow: '05 / What we learned from testing',
    title: 'A five-person formative test',
    body: 'The team conducted a formative test with five participants. They experienced the bat, spider and turtle worlds and provided ratings alongside open-ended feedback. The results helped identify where the interactions were clear and where guidance, comfort and narrative connections needed improvement.',
    highlights: [
      { v: '4.4', k: 'Presence / immersion' },
      { v: '4.0', k: 'Turtle guidance' },
      { v: '3.8', k: 'Scene connectivity' },
    ],
    outOf: 'Mean score / 5 · higher is better',
    otherTitle: 'Other ratings (higher is better)',
    other: [
      { k: 'Bat interaction clarity', v: '4.2' },
      { k: 'Spider interaction clarity', v: '3.2' },
    ],
    discomfortTitle: 'Discomfort (lower means less discomfort)',
    discomfort: [
      { k: 'Dizziness', v: '2.2' },
      { k: 'Eye strain', v: '2.0' },
      { k: 'Nausea', v: '1.6' },
    ],
    note: 'Five-participant formative test, reported in the project report. These results do not establish post-iteration improvements.',
    findingsTitle: 'Findings and responses',
    findingsHead: ['Finding', 'Response'],
    findings: [
      { k: "Turtle World's goal was easy to understand and its pace felt steady.", v: 'Keep the clear goal and slower rhythm.' },
      { k: 'Once the basic task was clear, Turtle World could become monotonous.', v: 'More environmental change and feedback is a next step — not yet built.' },
      { k: 'Spider World difficulty and guidance were the most common pain points.', v: 'Team context; the spider changes are team work.' },
      { k: 'The scenes lacked a strong inner connection.', v: 'Links to my planning role: the three outlines need a shared story, not just shared transitions.' },
    ],
  },

  reflection: {
    eyebrow: '06 / Reflection',
    title: 'What I learned',
    body: 'Planning three worlds helped me think beyond individual interactions and consider the rhythm of a complete journey. Developing Turtle World made that plan concrete through movement, feedback and a clear destination. The prototype also showed the limits of the concept: changing movement alone does not fully communicate an animal’s way of sensing. A stronger shared story, more consistent body tracking and further testing would be important next steps.',
    futureTitle: 'Future directions',
    future: [
      { k: 'Whole journey', v: 'A stronger shared story and clearer reasons to move between the three animal worlds.' },
      { k: 'Turtle', v: 'Align the camera, collision body and water-level detection; improve direction cues and environmental feedback.' },
      { k: 'Content', v: 'More rubbish types and environmental change; navigation inspired by magnetic fields is only an idea to explore.' },
      { k: 'Validation', v: 'Test the revised version again to see which changes actually worked.' },
    ],
  },

  credits: {
    eyebrow: '07 / Credits',
    title: 'Credits and transparency',
    body: 'Team project by Lynn Shao, Rachel Liu and Sitan Ding. My role covered overall world planning, outlines for all three worlds, and Turtle World. The prototype incorporates external environment and model assets. AI tools supported parts of scripting and debugging, and Suno was used for background music, as documented in the team report. Outputs were reviewed and adapted by the team.',
    assetsSummary: 'External assets listed in the report',
    assets: [
      'Low Poly Tropical Island Lite — Unity Asset Store (all scenes)',
      'Low Poly Environment Starter Pack — Unity Asset Store (all scenes)',
      'Low poly turtle — Sketchfab (Turtle)',
      'Hyper Casual Urban Asset Pack — Unity Asset Store (Turtle)',
      'Stylized Water Spell VFX — Unity Asset Store (all scenes)',
      'Background music generated with Suno: Turtle Drift, Silk Thread Sprint, Cavewing Drift',
      'Sound effects from Pixabay / Freesound Community (Turtle)',
    ],
    assetsNote: 'Licences and public-use terms for each asset have not been re-checked for this page.',
    imagesNote: 'Images on this page come from the final project report. No screenshots or recordings from the running prototype are included yet.',
  },
};

type Copy = typeof en;

const zh: Copy = {
  eyebrow: '团队项目 · VR 体验 · 世界规划',
  title: 'Becoming Non-Human',
  tagline: '三个世界，不同的身体，一段相连的旅程。',
  intro:
    '当我们换一种身体在世界中移动，体验会发生什么变化？Becoming Non-Human 是一个团队 VR 原型，通过蝙蝠、蜘蛛和海龟三种视角探索这个问题。我负责整体世界结构与三个世界的大纲，并重点完成海龟世界的设计与开发。',
  ctaPrimary: '探索三个世界',
  ctaSecondary: '我的贡献',
  heroAlt: '项目总览图：低多边形风格的海岸线，上面分别框出海龟世界、蜘蛛世界和蝙蝠世界，标题为"Becoming Non-Human — A VR Journey Across Three Connected Worlds"。',
  reportCaption: '图片来自最终项目报告。',
  details: [
    { k: '形式', v: '团队 VR 原型' },
    { k: '团队', v: '团队项目 · 3 人' },
    { k: '我的角色', v: '整体世界规划、三个世界大纲、海龟世界' },
    { k: '工具', v: 'Unity · C# · PICO VR' },
    { k: '重点', v: '移动、环境反馈与玩家引导' },
  ],

  worlds: {
    eyebrow: '01 / 三个世界，一段旅程',
    title: '三种移动方式',
    body: '我以三种不同的移动方式规划整个体验：在黑暗中飞行、借助蛛丝在树木之间移动，以及以海龟的视角在水中导航。三个世界的大纲分别确定了角色、核心交互和目标，为团队后续开发提供共同的体验结构。',
    flowLabel: '场景顺序',
    flow: ['开场', '蝙蝠', '蜘蛛', '海龟', '结尾'],
    flowNote: '这是构建中的场景顺序和体验概览，不表示每个场景都已在头显上实机验证通关。',
    list: [
      { id: 'bat', name: '蝙蝠世界', text: '在黑暗山地中飞行，借助引导与加速收集发光目标。', img: 'report-bat', alt: '蝙蝠世界：星空下的黑色山峰，一道细细的引导光线。' },
      { id: 'spider', name: '蜘蛛世界', text: '发射蛛丝、攀爬并在树木间移动，抵达旅程的下一阶段。', img: 'report-spider', alt: '蜘蛛世界：橙色天空下的沙质海岸坡地和低多边形树木。' },
      { id: 'turtle', name: '海龟世界', text: '在洋流中调整方向、避开漂浮垃圾，并在生命值耗尽前抵达岸边。', img: 'report-turtle-island', alt: '海龟世界：俯瞰一座长满树木的沙岛，四周是明亮的蓝色海水。' },
    ],
    teamTag: '团队开发',
    mineTag: '我负责',
  },

  contribution: {
    eyebrow: '02 / 我的贡献',
    title: '整体规划，加上一个世界的具体落地',
    body: '我的工作同时覆盖整体规划和一个世界的具体落地。我负责蝙蝠、蜘蛛与海龟三个世界的整体规划及大纲，也负责海龟世界，包括导航循环、环境反馈和玩法呈现。完整原型由团队共同完成，页面中的蝙蝠与蜘蛛实现作为团队成果展示。',
    tableHead: ['层级', '我的职责', '呈现方式'],
    rows: [
      { k: '整体体验', v: '世界规划、三个世界大纲、角色与主要交互方向', s: '我的规划' },
      { k: '海龟世界', v: '设计与开发、玩法循环、环境反馈与呈现', s: '我负责的世界' },
      { k: '团队成果', v: '三个世界的整体原型，以及报告中的团队测试', s: '团队成果' },
    ],
    diagramTitle: '世界大纲',
    diagramNote: '根据最终原型整理，不是项目前期的原始草图。',
    outline: [
      { k: '蝙蝠', role: '黑暗山地里的一只蝙蝠', move: '飞行，可加速', goal: '收集发光目标', mine: false },
      { k: '蜘蛛', role: '海岸树林里的一只蜘蛛', move: '蛛丝、跳跃与攀爬', goal: '穿过树林到达终点', mine: false },
      { k: '海龟', role: '大海里的一只海龟', move: '在洋流中游动', goal: '在生命值耗尽前抵达岸边', mine: true },
    ],
    outlineHead: ['世界', '角色', '移动方式', '目标'],
  },

  turtle: {
    eyebrow: '03 / 海龟世界',
    title: '在水中寻找方向',
    body: '海龟世界让移动成为人与环境持续协调的过程。玩家通过距离提示朝岸边前进，洋流影响移动方向，漂浮垃圾构成障碍。目标明确：在生命值耗尽前抵达终点。相比节奏更快的蝙蝠和蜘蛛世界，这一段体验更缓慢，也需要持续观察和调整。',
    imgAlt: '低多边形海龟模型，在蓝天下的沙地上。',
    loopLabel: '玩法循环',
    loop: ['观察距离', '调整移动', '应对洋流', '避开垃圾', '抵达岸边／重试'],
    details: [
      { id: 'current', n: '03A', k: '随洋流调整移动', v: '移动由玩家输入与变化的洋流共同构成。原型通过多层噪声改变洋流方向和强度，让玩家需要不断修正漂移。导航因此不只是朝着标记直线前进，而是持续与环境协调。' },
      { id: 'water', n: '03B', k: '穿过水面', v: '穿过水面时，移动方式与环境感受一起发生变化。进入水下后，原型显示水下遮罩，并通过低通滤波调整声音；回到水面上方时，遮罩隐藏，声音恢复清晰。视觉与听觉共同帮助玩家察觉环境切换。' },
      { id: 'rubbish', n: '03C', k: '垃圾、生命值与后果', v: '漂浮垃圾让环境产生可感知的后果。碰撞会扣除生命值，伤害间隔则避免一次接触立即耗尽生命。玩家需要在向岸边推进与躲避沿途障碍之间做出调整。' },
      { id: 'goal', n: '03D', k: '明确的目的地', v: '距离反馈让目标始终可见，成功与失败状态则让体验形成完整闭环。最终报告显示，这种更明确的目标与较慢的节奏，有助于参与者比在蜘蛛场景中更容易理解海龟世界。' },
    ],
    diagram: { tag: '原理示意', input: '玩家输入', current: '洋流（不断变化）', result: '实际漂移', note: '这是设计上的模拟，不是科学级的海洋流体仿真。' },
    todoWater: '水面上方／下方——待补充原型运行截图',
    todoRubbish: '垃圾碰撞与生命值反馈——待补充原型运行截图或片段',
    goalAlt: '从上方看海龟世界：玩家要游向的小岛岸边。',
    todoGoal: '距离提示与成功／失败界面——待补充原型运行截图',
  },

  vr: {
    eyebrow: '04 / 让体验在 VR 中成立',
    title: '在头显上的取舍',
    items: [
      { k: '更稳定的水下表现', v: '团队报告记录了水下后处理效果在 Pico 头显上的不稳定问题。调整后的方案使用相机前的半透明遮罩，配合水位检测和声音变化，优先保证目标设备上的切换表现，再考虑更复杂的视觉效果。' },
      { k: '身体、头部与碰撞', v: '一个重要限制来自头显追踪的位置与游戏碰撞身体之间的差异：玩家视觉上可能已经碰到垃圾，但碰撞体没有接触。原型使用了碰撞范围调整作为临时处理，但视点、水位检测与碰撞之间仍需要更准确的一致性。' },
    ],
  },

  testing: {
    eyebrow: '05 / 从测试中学到什么',
    title: '五人形成性测试',
    body: '团队开展了包含五位参与者的小规模形成性测试。参与者体验蝙蝠、蜘蛛和海龟三个世界，并提供量表评分与开放反馈。结果帮助团队识别交互清晰之处，以及引导、舒适度和叙事联系仍需改进的部分。',
    highlights: [
      { v: '4.4', k: '临场感／沉浸感' },
      { v: '4.0', k: '海龟引导' },
      { v: '3.8', k: '场景连接性' },
    ],
    outOf: '平均分 / 5 · 越高越好',
    otherTitle: '其他评分（越高越好）',
    other: [
      { k: '蝙蝠交互清晰度', v: '4.2' },
      { k: '蜘蛛交互清晰度', v: '3.2' },
    ],
    discomfortTitle: '不适感（低分代表较低不适）',
    discomfort: [
      { k: '眩晕', v: '2.2' },
      { k: '眼疲劳', v: '2.0' },
      { k: '恶心', v: '1.6' },
    ],
    note: '数据来自项目报告中的五人形成性测试，不能据此认定修改后的版本已得到效果验证。',
    findingsTitle: '发现与回应',
    findingsHead: ['发现', '回应'],
    findings: [
      { k: '海龟世界目标容易理解，节奏较平稳。', v: '保留清晰的目标和较慢的节奏。' },
      { k: '理解基本玩法后，海龟体验可能变得单调。', v: '增加环境变化与反馈是后续方向，尚未完成。' },
      { k: '蜘蛛世界的难度和引导问题最为突出。', v: '作为团队测试背景，蜘蛛场景的修改属于团队成果。' },
      { k: '场景之间缺少更强的内在联系。', v: '与我的整体规划职责直接相关：三个大纲需要共同的故事，而不只是顺畅的过渡。' },
    ],
  },

  reflection: {
    eyebrow: '06 / 反思与下一步',
    title: '我的收获',
    body: '三个世界的规划让我从单个交互扩展到完整旅程的节奏，而海龟世界的开发则通过移动、反馈和明确目标，让规划变成具体体验。原型也暴露了概念的局限：仅仅改变移动方式，并不能完整传达动物的感知方式。更强的共同叙事、更一致的身体追踪，以及进一步测试，都是重要的下一步。',
    futureTitle: '后续方向',
    future: [
      { k: '整体', v: '加强三个动物世界的共同叙事与过渡动机。' },
      { k: '海龟', v: '统一相机、碰撞体和水位判定；完善方向提示与环境反馈。' },
      { k: '内容', v: '更多垃圾类型与环境变化；磁场启发的导航仅为待探索方向。' },
      { k: '验证', v: '对修订版本重新测试，确认哪些调整真正有效。' },
    ],
  },

  credits: {
    eyebrow: '07 / 署名与说明',
    title: '署名与说明',
    body: '团队成员：Lynn Shao、Rachel Liu、Sitan Ding。我的职责包括整体世界规划、三个世界的大纲及海龟世界。原型使用了外部环境与模型素材。根据团队报告，部分脚本与调试使用 AI 工具辅助，背景音乐使用 Suno 生成，相关输出经团队审阅与调整后整合。',
    assetsSummary: '报告中列出的外部素材',
    assets: [
      'Low Poly Tropical Island Lite — Unity Asset Store（所有场景）',
      'Low Poly Environment Starter Pack — Unity Asset Store（所有场景）',
      'Low poly turtle — Sketchfab（海龟）',
      'Hyper Casual Urban Asset Pack — Unity Asset Store（海龟）',
      'Stylized Water Spell VFX — Unity Asset Store（所有场景）',
      '使用 Suno 生成的背景音乐：Turtle Drift、Silk Thread Sprint、Cavewing Drift',
      '来自 Pixabay / Freesound Community 的音效（海龟）',
    ],
    assetsNote: '各素材的许可与公开使用范围尚未针对本页重新核对。',
    imagesNote: '本页图片均来自最终项目报告，暂未包含原型运行截图或录屏。',
  },
};

export const copy: Record<Lang, Copy> = { en, zh };
