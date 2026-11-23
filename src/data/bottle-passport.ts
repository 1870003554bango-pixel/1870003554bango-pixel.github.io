/**
 * Bottle Passport — page copy (en + zh).
 * Source: md文件/3003/Bottle_Passport_Portfolio_Brief_EN_ZH.md and the team's final report (DESN3003).
 * Rules: proposed concept, never "deployed"; no invented numbers; AI report images are labelled;
 * observation photos show existing campus bins, not Bottle Passport. No refund amount is stated.
 */
import type { Lang } from '../i18n/ui';

export const observations = [
  { key: 'obs-feedback-screen', en: 'A smart bin asks "Was it correct?" after an item is dropped in.', zh: '投放后，智能垃圾桶的屏幕询问"Was it correct?"（分类是否正确）。' },
  { key: 'obs-smart-bin', en: 'The whole bin: a sorting unit with a small screen and the line "You drop it. We sort it."', zh: '整台垃圾桶：带小屏幕的分拣装置，桶身写着"You drop it. We sort it."' },
  { key: 'obs-sorting', en: 'Choosing a category on the screen: paper, organics, landfill or recycling.', zh: '在屏幕上选择类别：纸类、厨余、填埋或可回收。' },
  { key: 'obs-thank-you', en: 'Feedback after use: a thank-you screen with item and point counts.', zh: '使用后的反馈：显示物品数和积分的感谢页面。' },
  { key: 'obs-survey', en: 'A satisfaction survey appears on the screen after use.', zh: '使用后屏幕上出现满意度调查。' },
  { key: 'obs-opening', en: 'Close-up of the bin opening.', zh: '垃圾桶投放口的近景。' },
] as const;

const en = {
  eyebrow: 'DESN3003 · Major Project · SDG 14',
  title: 'Bottle Passport',
  subtitle: 'A Campus-Based System for Reducing Marine Plastic Pollution',
  tagline: 'Making everyday recycling more visible, engaging and rewarding.',
  intro:
    'Bottle Passport explores how interaction design can encourage more responsible recycling habits on a university campus. It connects a simple action — returning a drink container — with personal progress, rewards and a wider environmental purpose.',
  ctaPrimary: 'See how it works',
  ctaSecondary: 'Try the bottle journey',
  heroAlt: 'A smart bin on campus with a touch screen asking "Was it correct?" above the opening.',
  heroCaption: 'Observation photo by the team: an existing smart bin on campus. This is not the Bottle Passport system.',
  details: [
    { k: 'Course', v: 'DESN3003 — Major Project' },
    { k: 'Project type', v: 'Team project · 5 members' },
    { k: 'My role', v: 'Concept development & planning' },
    { k: 'Context', v: 'University of Sydney campus' },
    { k: 'Focus', v: 'Interaction · Social impact · System design' },
    { k: 'Status', v: 'Proposed concept' },
  ],

  overview: {
    eyebrow: '01 / Overview',
    title: 'A recycling habit students have a reason to keep',
    body: [
      'Plastic bottles and takeaway packaging are part of everyday student life. Although many people understand that plastic pollution harms the ocean, this awareness does not always lead to responsible disposal.',
      'Our team explored how a university campus could become a place to encourage more consistent recycling behaviour. Instead of relying only on environmental posters or general awareness campaigns, we developed a system that gives students a more direct reason to participate.',
      'Bottle Passport combines a physical passport, smart recycling stations and a digital dashboard. Students can record their recycling activity, follow their progress and receive rewards through a familiar campus-based experience. The project responds to SDG 14: Life Below Water, particularly the goal of reducing marine pollution.',
    ],
  },

  challenge: {
    eyebrow: '02 / The challenge',
    title: "The problem isn't just awareness. It's what happens after disposal.",
    body: [
      'For most people, throwing something away marks the end of the interaction. Once a bottle leaves their hands, its next journey is rarely visible.',
      'Our research identified a gap between knowing about plastic pollution and taking action. Convenience, daily routines and the lack of immediate feedback can influence disposal decisions more strongly than environmental awareness alone.',
    ],
    statementLabel: 'Problem statement',
    statement:
      'Existing waste systems often lack transparency, feedback and ongoing engagement after disposal. As a result, recycling can become a routine action with little understanding of its wider environmental significance.',
    opportunityLabel: 'Design opportunity',
    opportunity:
      'Turn recycling from a passive routine into a more visible and engaging experience through personal tracking, immediate feedback and positive reinforcement.',
  },

  journey: {
    label: 'Bottle journey',
    caption: 'Two possible paths. One everyday decision.',
    returned: 'Returned',
    littered: 'Not properly disposed',
    returnedSteps: ['Tap passport', 'Return container', 'Record added', 'Reward'],
    litteredSteps: ['Street', 'Drain', 'River', 'Ocean'],
    returnedNote: 'Returned through a station, the bottle stays in the recycling stream and the student sees the action counted.',
    litteredNote: 'Left behind, a bottle can travel from the street into drains, rivers and eventually the ocean — a path that is usually invisible.',
    disclaimer: 'An explanation of the idea, not a live tracking system.',
  },

  research: {
    eyebrow: '03 / Research & insights',
    title: 'Four methods, one pattern',
    methodsTitle: 'Research methods',
    methods: [
      { k: 'Literature review', v: 'Academic articles, environmental reports and SDG 14 resources.' },
      { k: 'Secondary research', v: 'Statistics and reports about plastic consumption, recycling practices and marine pollution.' },
      { k: 'Observation', v: 'How students interact with waste and recycling facilities in university environments.' },
      { k: 'Stakeholder analysis', v: 'The needs and relationships of students, universities, recycling operators and local organisations.' },
    ],
    galleryLabel: 'Observation photos',
    galleryNote: 'Observation photos taken by the team on campus. They show existing bins, not the proposed system.',
    findingsTitle: 'Four key findings',
    findings: [
      { k: 'Disposable plastics are part of everyday life', v: 'Takeaway cups, plastic bottles and food packaging are deeply integrated into daily consumption. Their convenience makes them difficult to avoid.' },
      { k: 'Waste pathways are largely invisible', v: 'People rarely think about what happens after waste is discarded. The journey from streets to drains, rivers and eventually the ocean is hidden from everyday experience.' },
      { k: 'Awareness does not always lead to action', v: 'People may understand the environmental impact of plastic pollution but still find it difficult to maintain sustainable disposal habits.' },
      { k: 'Convenience shapes behaviour', v: 'Everyday disposal decisions are often influenced by convenience, routines and existing infrastructure rather than environmental awareness alone.' },
    ],
    insightLabel: 'Key insight',
    insight: 'Behaviour is shaped by systems, not awareness alone.',
  },

  ideas: {
    eyebrow: '04 / From ideas to one system',
    title: 'Fifteen ideas, three directions, one concept',
    body: [
      'We started with a broad brainstorming process and generated 15 early-stage ideas. These explored different ways of encouraging more responsible disposal, including behavioural prompts, reward mechanisms, traceability systems and interactive recycling facilities.',
      'The team then used a weighted decision matrix to compare the concepts against shared criteria such as behaviour change potential, engagement, cause-and-effect clarity, environmental responsibility, accessibility, long-term impact and feasibility.',
    ],
    tabsLabel: 'Three highest-scoring concepts',
    scoreLabel: 'Score',
    strengthLabel: 'Main strength',
    keptLabel: 'What we kept',
    combinedTab: 'How they came together',
    combinedTitle: 'Bottle Passport',
    combinedText: 'Rather than choosing only one idea, we combined their strongest features to form the final Bottle Passport concept.',
    concepts: [
      { id: 'garbage', name: 'Garbage Passport', score: 170, strength: 'Awareness and traceability', kept: 'Personal tracking and visibility', text: 'A passport for a single-use item that shows two possible futures: proper disposal leads to recycling; improper disposal leads to street → drain → river → ocean.', img: 'ai-garbage-passport', alt: 'Concept illustration: a hand holds a plastic bottle with a "Garbage Passport" tag.' },
      { id: 'coffee', name: 'Bin-to-Coffee Reward System', score: 155, strength: 'Reward mechanism', kept: 'Points and rewards', text: 'People return plastic bottles at collection stations and receive points or coffee vouchers through partnerships with local cafes.', img: 'ai-bin-to-reward', alt: 'Concept illustration: a person returns a bottle at a station while another receives a coffee voucher.' },
      { id: 'tide', name: 'Talking Tide Bin', score: 154, strength: 'Emotional engagement', kept: 'Immediate interactive feedback', text: 'A coastal bin that responds to disposal with voice messages, lighting effects and ocean-themed feedback.', img: 'ai-tide-bin', alt: 'Concept illustration: a person puts a bottle into a bin by the beach.' },
    ],
    aiLabel: 'AI-generated concept illustration from the team report — not a photo or a built prototype.',
    matrixTitle: 'Weighted decision matrix',
    matrixText: 'Five team members scored every idea from 1 to 5 on each criterion; criteria were weighted 5, 4 or 3. The combined totals ranked Garbage Passport (170), Bin-to-Coffee (155) and Talking Tide Bin (154) highest.',
    matrixCaption1: 'Decision matrix, ideas ranked 1–9 (report Appendix 1, p. 21). Click to enlarge.',
    matrixCaption2: 'Decision matrix, ideas ranked 10–15 (report Appendix 1, p. 22).',
    matrixAlt1: 'Decision matrix table with sticky-note scores for nine ideas; totals 170, 155, 154, 153, 150, 138, 137, 134, 133.',
    matrixAlt2: 'Decision matrix table for six more ideas; totals 133, 131, 131, 128, 125, 121.',
  },

  concept: {
    eyebrow: '05 / The final concept',
    title: 'Bottle Passport Rewards',
    sub: 'A campus-based recycling and reward system for the University of Sydney.',
    parts: [
      { k: 'Physical Bottle Passport', v: 'A physical passport with an embedded NFC chip. Students receive it through a campus distribution point, such as during orientation or registration. It acts as the main identifier for recording recycling activity.' },
      { k: 'Smart Recycling Station', v: 'A smart station for eligible beverage containers. Students tap their passport, return the container and receive confirmation. The station verifies the return and records the activity in the student’s account.' },
      { k: 'Digital Dashboard', v: 'Lets students view their recycling records, points, passport progress and collective milestones, giving a clearer sense of participation over time.' },
    ],
    coreLabel: 'Core interaction',
    core: ['Tap', 'Return', 'Feedback'],
    layer: 'The concept adds a new interaction layer to existing recycling infrastructure rather than replacing the current waste management system.',
    workflowAlt: 'Six-panel illustration: get a passport, buy a drink, tap and recycle, points collected, see the impact, redeem rewards.',
    workflowCaption: 'AI-generated workflow visualisation from the team report (p. 13) — not real product photography or interface screens.',
  },

  how: {
    eyebrow: '06 / How it works',
    title: 'Five steps, from passport to reward',
    intro: 'Select a step to follow one student through the system.',
    note: 'Explanatory demonstration only — there is no working NFC backend, live account or reward service.',
    stepLabel: 'Step',
    prev: 'Previous step',
    next: 'Next step',
    nodes: ['Passport', 'Station', 'Dashboard', 'Rewards'],
    steps: [
      { k: 'Get your passport', v: 'Students collect a free Bottle Passport from a campus distribution point, such as during orientation or registration.', node: 0 },
      { k: 'Tap at the station', v: 'After finishing an eligible drink, students tap their NFC passport on the smart recycling station.', node: 1 },
      { k: 'Return the container', v: 'Students place the eligible bottle or can into the station. The station verifies the container and records the return.', node: 1 },
      { k: 'Track your progress', v: 'The activity is added to the student’s account. Passport stamps, points, badges or collective milestones make progress easier to follow.', node: 2 },
      { k: 'Redeem or donate', v: 'Students can use their accumulated value for selected campus benefits, such as meal vouchers, printing credits or campus merchandise — or donate the equivalent value to community causes.', node: 3 },
    ],
  },

  rationale: {
    eyebrow: '07 / Design rationale',
    title: 'Why the parts work together',
    items: [
      { k: 'Why a physical passport instead of an app-first system?', v: 'The passport gives students a simple, tangible way to identify themselves at the recycling station. The report notes that app-based tracking may add friction if students forget to scan, find the process inconvenient or have to manage multiple reward systems.' },
      { k: 'Why focus on beverage containers?', v: 'The concept focuses on eligible bottles and cans rather than every type of plastic waste. This keeps the system focused and lets it build on existing container-return infrastructure, such as the NSW container deposit scheme.' },
      { k: 'Why combine rewards with feedback?', v: 'Rewards give an immediate reason to participate, while personal records and collective milestones make progress visible. The aim is repeated behaviour, not a one-off recycling action.' },
    ],
  },

  future: {
    eyebrow: '08 / Future thinking',
    title: 'From inconsistent habits to a low-waste campus',
    intro: 'The team used Three Horizons to consider how current recycling behaviour might move towards a low-waste campus culture, then Backcasting to work back from that future to the first steps.',
    horizons: [
      { year: '2026', k: 'Horizon 1 — Present system', v: 'Students may already understand marine plastic pollution, but recycling habits remain inconsistent. Convenience and time pressure still influence everyday disposal decisions.' },
      { year: '2027–2029', k: 'Horizon 2 — Emerging transition', v: 'A Bottle Passport pilot could make recycling more visible and rewarding. Students begin to connect daily disposal choices with wider environmental outcomes.' },
      { year: '2030–2036', k: 'Horizon 3 — Low-waste campus culture', v: 'Recycling, refill and reuse become familiar parts of campus life, supported by shared habits and campus infrastructure rather than individual motivation alone.' },
    ],
    backTitle: 'Backcasting',
    back: [
      'Make the environmental impact of plastic disposal more visible.',
      'Introduce a Bottle Passport pilot.',
      'Encourage regular bottle returns and sustainable habits.',
      'Expand participation across more campus locations.',
      'Support a wider low-waste campus culture.',
    ],
  },

  stakeholders: {
    eyebrow: '09 / Stakeholders',
    title: 'More than a student and a machine',
    intro: 'The system needs the university’s sustainability team, campus retailers, existing return programs, government, waste providers and student groups to take part. Select a stakeholder to see its role.',
    center: 'Bottle Passport',
    roleLabel: 'Involvement',
    list: [
      { k: 'Students', v: 'Use the passport, return containers and provide feedback.' },
      { k: 'USYD Sustainability Team', v: 'Support implementation, promotion and evaluation.' },
      { k: 'Campus Cafes & Retailers', v: 'Potentially provide rewards and promote participation.' },
      { k: 'Return and Earn Program', v: 'Connect with existing container-return infrastructure.' },
      { k: 'NSW EPA', v: 'Provide policy guidance and possible funding opportunities.' },
      { k: 'Waste Management Providers', v: 'Collect and process recyclable materials.' },
      { k: 'Student Clubs & Sustainability Groups', v: 'Help promote participation and community engagement.' },
    ],
  },

  ethics: {
    eyebrow: '10 / Ethical considerations',
    title: 'Encourage, don’t blame',
    list: [
      { k: 'No blame or guilt', v: 'Encourage better disposal habits through positive feedback rather than punishment, criticism or guilt.' },
      { k: 'Fair and inclusive rewards', v: 'Passports are free, and participation rules should be consistent for all students.' },
      { k: 'No moral condemnation', v: 'Plastic remains part of everyday life. Guide better disposal rather than shame people for using plastic.' },
      { k: 'Transparent and honest education', v: 'Environmental information should be based on real information, without exaggerating impact or making unsupported claims.' },
      { k: 'Voluntary participation', v: 'The system should not create academic pressure or affect students who choose not to take part.' },
      { k: 'Respect existing recycling systems', v: 'Work with existing waste infrastructure and recognise the people and services involved in collection and recycling.' },
    ],
  },

  contribution: {
    eyebrow: '11 / My contribution',
    title: 'Project concept development & planning',
    body: [
      'My main responsibility in the Bottle Passport project was shaping the overall concept, planning its direction and developing the idea in detail. I worked on turning the initial project ideas into a more coherent campus-based recycling and reward system.',
      'This involved defining the overall concept direction, organising the project’s design approach, and refining how the three main components — the physical NFC passport, smart recycling station and digital dashboard — could work together. I also focused on clarifying the system logic and structuring the student journey, from collecting a passport and returning a container to tracking progress and redeeming rewards.',
      'My role centred on the project’s overall concept and design development, helping connect the research direction with a clearer and more complete proposed solution.',
    ],
    highlights: ['Overall concept direction', 'Project planning', 'Concept development', 'System structure and logic', 'Interaction flow refinement', 'Design development'],
  },

  reflection: {
    eyebrow: '12 / Reflection',
    title: 'What I learned',
    body: [
      'This project helped me understand that interaction design can be used for more than making digital products easier to use. It can also help people connect everyday actions with wider social and environmental issues.',
      'One of the main things I took away was that awareness alone is not always enough to change behaviour. People are also influenced by convenience, habits and the systems around them. This made me think more carefully about where a design intervention should happen.',
      'Instead of asking students to care more about plastic pollution, Bottle Passport tries to make responsible recycling easier to take part in and more rewarding over time. It also taught me that a social-impact design needs to consider different stakeholders, existing infrastructure and ethical issues, rather than focusing only on the user-facing interaction.',
    ],
    closing: 'A bottle may seem like a small thing, but what happens after we use it matters.',
    closingSub: 'Bottle Passport explores how a simple everyday interaction can become part of a wider effort to protect our oceans.',
    creditsTitle: 'Credits',
    credits: 'Team project by five members, DESN3003 Major Project, University of Sydney. Proposed concept — not a deployed service.',
    ai: 'AI note: the three idea illustrations and the workflow image come from the team report, which states they were generated with ChatGPT; they are labelled on this page. The interactive journey, stepper and stakeholder map were built for this portfolio as explanations.',
  },
};

type Copy = typeof en;

const zh: Copy = {
  eyebrow: 'DESN3003 · 毕业设计 · SDG 14',
  title: 'Bottle Passport',
  subtitle: '一个减少海洋塑料污染的校园系统',
  tagline: '让校园回收变得更直观、更有参与感，也更有意义。',
  intro:
    'Bottle Passport 探索如何通过交互设计，让校园里的日常回收行为变得更容易参与、更有反馈。我们希望把归还饮料瓶这样一个简单的动作，与个人记录、奖励机制以及海洋环境保护联系起来。',
  ctaPrimary: '看看它如何运作',
  ctaSecondary: '体验瓶子的两种去向',
  heroAlt: '校园里的一台智能垃圾桶，投放口上方的触摸屏显示"Was it correct?"。',
  heroCaption: '团队拍摄的观察照片：校园里现有的智能垃圾桶，并不是 Bottle Passport 系统。',
  details: [
    { k: '课程', v: 'DESN3003 — 毕业设计' },
    { k: '项目类型', v: '团队项目 · 5 人' },
    { k: '我的角色', v: '项目整体构思规划与设计深化' },
    { k: '场景', v: '悉尼大学校园' },
    { k: '方向', v: '交互设计 · 社会影响设计 · 系统设计' },
    { k: '状态', v: '设计概念（未落地）' },
  ],

  overview: {
    eyebrow: '01 / 项目概述',
    title: '给学生一个坚持回收的理由',
    body: [
      '塑料瓶和外带包装是大学生日常生活中很常见的物品。虽然很多人已经知道塑料污染会对海洋环境造成影响，但知道这些问题，并不一定意味着每个人都会在日常生活中主动做好垃圾分类和回收。',
      '因此，我们团队希望从大学校园这个具体场景出发，思考怎样让回收行为更容易坚持。相比单纯通过海报或宣传活动提高环保意识，我们希望设计一个能够真正融入学生日常生活的系统，让参与回收这件事本身变得更有反馈。',
      'Bottle Passport 将实体护照、智能回收站和数字进度面板结合起来，让学生能够记录自己的回收行为、查看参与进度，并通过校园内的奖励机制获得反馈。项目围绕联合国可持续发展目标 SDG 14：水下生物（Life Below Water）展开，重点关注减少海洋污染。',
    ],
  },

  challenge: {
    eyebrow: '02 / 设计问题',
    title: '问题不只是环保意识，而是丢弃之后发生了什么。',
    body: [
      '对很多人来说，把饮料瓶扔进垃圾桶或回收箱，就意味着这件事已经结束了。瓶子之后去了哪里、有没有被正确回收，以及它和海洋污染有什么关系，通常都很难被直观地看到。',
      '我们的研究发现，人们了解塑料污染问题，并不代表他们一定会采取行动。日常习惯、便利程度以及缺少及时反馈，都会影响最终的处理方式。',
    ],
    statementLabel: '问题陈述',
    statement:
      '现有垃圾回收系统在投放之后缺少足够的过程反馈和持续互动，导致回收行为容易变成一个普通的日常动作，学生也很难理解自己的行为会带来怎样的环境影响。',
    opportunityLabel: '设计机会',
    opportunity: '通过个人记录、即时反馈和正向奖励，让回收从一个被动的日常动作，变成更直观、更有参与感的体验。',
  },

  journey: {
    label: '瓶子的去向',
    caption: '两种不同的去向，可能从一次日常选择开始。',
    returned: '正确回收',
    littered: '没有正确处理',
    returnedSteps: ['刷护照', '投入容器', '记录增加', '获得奖励'],
    litteredSteps: ['街道', '排水口', '河流', '海洋'],
    returnedNote: '通过回收站归还，瓶子留在回收体系里，学生也能看到这次行动被记录下来。',
    litteredNote: '被随手丢弃的瓶子，可能从街道进入排水系统、河流，最后流向海洋——这条路径平时几乎看不见。',
    disclaimer: '用来说明想法，不是实时追踪系统。',
  },

  research: {
    eyebrow: '03 / 调研与洞察',
    title: '四种方法，一个规律',
    methodsTitle: '调研方法',
    methods: [
      { k: '文献研究', v: '阅读学术文章、环境报告以及 SDG 14 相关资料。' },
      { k: '二手资料研究', v: '整理塑料消费、回收行为和海洋污染方面的数据与报告。' },
      { k: '实地观察', v: '观察学生在校园日常生活中如何使用垃圾桶和回收设施。' },
      { k: '利益相关者分析', v: '梳理学生、大学、回收运营方及相关组织之间的关系。' },
    ],
    galleryLabel: '观察照片',
    galleryNote: '团队在校园里拍摄的观察照片，展示的是现有垃圾桶，不是我们提出的系统。',
    findingsTitle: '四个主要发现',
    findings: [
      { k: '一次性塑料已经融入日常生活', v: '外带饮料、塑料瓶和食品包装都很常见，便利性使它们很难完全避免。' },
      { k: '垃圾后续的流向并不直观', v: '大多数人不会主动想到垃圾被丢弃之后去了哪里，也很难看到塑料从街道进入排水系统、河流，最后流向海洋的过程。' },
      { k: '知道问题，不代表一定会采取行动', v: '即使了解塑料污染的影响，人们也不一定能够长期保持正确的回收习惯。' },
      { k: '便利程度会影响最终选择', v: '日常处理垃圾时，人们往往更容易受到便利程度、生活习惯和现有设施的影响。' },
    ],
    insightLabel: '核心洞察',
    insight: '行为不仅受到环保意识影响，也受到整个使用环境和系统的影响。',
  },

  ideas: {
    eyebrow: '04 / 从想法到最终方案',
    title: '15 个想法，3 个方向，1 个概念',
    body: [
      '项目最初并没有直接确定最终方案，而是先通过头脑风暴提出了 15 个不同方向。这些想法涉及行为提醒、积分奖励、垃圾追踪以及互动式回收设施等不同方式。',
      '之后，团队通过加权决策矩阵，对各个概念进行比较。评价标准包括行为改变的可能性、用户参与度、行为与环境结果之间的联系、环境责任、可访问性、长期影响以及实际可行性。',
    ],
    tabsLabel: '得分最高的三个概念',
    scoreLabel: '得分',
    strengthLabel: '主要优势',
    keptLabel: '最终保留',
    combinedTab: '三者如何结合',
    combinedTitle: 'Bottle Passport',
    combinedText: '我们没有简单地选择其中一个方案，而是把三个想法中最有价值的部分结合起来，形成最终的 Bottle Passport 概念。',
    concepts: [
      { id: 'garbage', name: 'Garbage Passport', score: 170, strength: '让垃圾流向更容易被理解和追踪', kept: '个人记录与垃圾流向的可视化', text: '为一次性物品配一本"护照"，展示两种可能的未来：正确处理进入回收，随手丢弃则会经过街道 → 排水口 → 河流 → 海洋。', img: 'ai-garbage-passport', alt: '概念插图：一只手拿着挂有"Garbage Passport"吊牌的塑料瓶。' },
      { id: 'coffee', name: 'Bin-to-Coffee Reward System', score: 155, strength: '通过奖励鼓励回收', kept: '积分和奖励机制', text: '在回收点归还塑料瓶，通过与本地咖啡店合作获得积分或咖啡券。', img: 'ai-bin-to-reward', alt: '概念插图：一人在回收站投瓶，另一人领取咖啡券。' },
      { id: 'tide', name: 'Talking Tide Bin', score: 154, strength: '通过情绪化反馈提高参与感', kept: '即时互动反馈', text: '一个海边的互动垃圾桶，在投放时用语音、灯光和海洋主题的反馈作出回应。', img: 'ai-tide-bin', alt: '概念插图：一人在海边把瓶子投进垃圾桶。' },
    ],
    aiLabel: '团队报告中由 AI 生成的概念插图，不是实拍照片，也不是已制作的原型。',
    matrixTitle: '加权决策矩阵',
    matrixText: '五位组员分别为每个想法在每项标准上打 1–5 分，各标准权重为 5、4 或 3。合计后得分最高的是 Garbage Passport（170）、Bin-to-Coffee（155）和 Talking Tide Bin（154）。',
    matrixCaption1: '决策矩阵，第 1–9 名（报告附录 1，第 21 页）。点击放大。',
    matrixCaption2: '决策矩阵，第 10–15 名（报告附录 1，第 22 页）。',
    matrixAlt1: '决策矩阵表格，九个想法的便利贴评分；总分 170、155、154、153、150、138、137、134、133。',
    matrixAlt2: '另外六个想法的决策矩阵；总分 133、131、131、128、125、121。',
  },

  concept: {
    eyebrow: '05 / 最终设计方案',
    title: 'Bottle Passport Rewards',
    sub: '一个面向悉尼大学的校园回收与奖励系统。',
    parts: [
      { k: '实体回收护照', v: '一本内置 NFC 芯片的实体护照。学生可以在校园指定地点领取，例如迎新或注册期间。它是记录个人回收行为的主要载体。' },
      { k: '智能回收站', v: '面向符合条件的饮料瓶和罐设计的智能回收设施。学生将护照靠近设备，再投入饮料容器。系统完成验证后，会把这次回收记录到学生账户中。' },
      { k: '数字进度面板', v: '学生可以查看自己的回收记录、积分、护照进度以及集体目标完成情况，让长期参与的过程更加直观。' },
    ],
    coreLabel: '核心交互',
    core: ['刷卡', '回收', '获得反馈'],
    layer: '这个概念并不是要取代现有的垃圾回收体系，而是在现有设施的基础上增加一层互动和奖励机制。',
    workflowAlt: '六格插图：领取护照、购买饮料、刷卡回收、积累积分、看到影响、兑换奖励。',
    workflowCaption: '团队报告中由 AI 生成的流程示意图（第 13 页），不是真实产品照片或界面截图。',
  },

  how: {
    eyebrow: '06 / 用户使用流程',
    title: '五个步骤，从护照到奖励',
    intro: '选择一个步骤，跟着一位学生走一遍这个系统。',
    note: '仅为说明性演示，并没有真实运行的 NFC 后台、账户或奖励服务。',
    stepLabel: '步骤',
    prev: '上一步',
    next: '下一步',
    nodes: ['护照', '回收站', '进度面板', '奖励'],
    steps: [
      { k: '领取护照', v: '学生在校园指定地点领取免费的 Bottle Passport，例如迎新或注册期间。', node: 0 },
      { k: '刷卡识别', v: '喝完符合条件的饮料后，学生将 NFC 护照靠近智能回收站。', node: 1 },
      { k: '投入回收容器', v: '学生将符合条件的饮料瓶或罐投入回收站，设备完成识别和回收记录。', node: 1 },
      { k: '查看回收记录', v: '回收行为会被记录到学生账户中。护照印章、积分、徽章和集体目标让参与进度更加清晰。', node: 2 },
      { k: '兑换奖励或捐赠', v: '学生可以使用积累的奖励兑换餐饮优惠、校园打印额度或校园周边等，也可以选择将相应价值捐赠给公益项目。', node: 3 },
    ],
  },

  rationale: {
    eyebrow: '07 / 设计思路',
    title: '为什么这些部分要放在一起',
    items: [
      { k: '为什么选择实体护照，而不是以 App 为主？', v: '实体护照让学生可以直接在回收站完成识别，不需要每次都打开手机应用。报告也提到，如果学生忘记扫码、觉得操作麻烦，或者需要同时使用多个奖励系统，单纯依赖 App 的方式可能会增加参与难度。' },
      { k: '为什么主要针对饮料瓶和罐？', v: '项目没有试图一次性解决所有塑料垃圾问题，而是先把范围集中在符合条件的饮料容器上。这样可以让方案更加明确，也更容易与现有的容器回收体系（如新州的容器押金计划）衔接。' },
      { k: '为什么把奖励和反馈结合起来？', v: '奖励可以让学生有一个立即参与的理由，而个人记录和集体目标则能让长期进度变得可见。项目希望鼓励的是持续回收，而不是只完成一次性的环保行为。' },
    ],
  },

  future: {
    eyebrow: '08 / 未来规划',
    title: '从不稳定的习惯，到低废弃的校园',
    intro: '团队用"三层地平线"（Three Horizons）思考现在的回收行为如何逐步走向低废弃校园文化，再用"回溯规划"（Backcasting）从这个未来倒推出最初的几步。',
    horizons: [
      { year: '2026', k: '第一阶段：现有情况', v: '学生可能已经了解海洋塑料污染问题，但回收习惯仍然不够稳定。日常便利程度和时间压力依然会影响垃圾处理方式。' },
      { year: '2027–2029', k: '第二阶段：逐步转变', v: '通过 Bottle Passport 试点，让回收行为变得更加直观、有反馈。学生逐渐意识到，日常处理垃圾的选择也会与更大范围的环境问题产生联系。' },
      { year: '2030–2036', k: '第三阶段：低废弃校园文化', v: '回收、补充装和重复使用逐渐融入校园日常生活。环保不再只依赖个人意愿，而是由共同习惯和校园设施一起支持。' },
    ],
    backTitle: '回溯规划',
    back: [
      '让塑料垃圾处理的环境影响更加直观。',
      '在校园内开展 Bottle Passport 试点。',
      '鼓励学生定期回收，逐步形成习惯。',
      '将参与范围扩展到更多校园区域。',
      '推动更加广泛的低废弃校园文化。',
    ],
  },

  stakeholders: {
    eyebrow: '09 / 利益相关者',
    title: '不只是学生和一台机器',
    intro: '这个系统还需要学校可持续发展团队、校园商家、现有回收项目、政府机构、垃圾处理服务商以及学生社团等多方共同参与。选择一个利益相关者，查看它的角色。',
    center: 'Bottle Passport',
    roleLabel: '参与方式',
    list: [
      { k: '学生', v: '使用护照、归还饮料容器并提供反馈。' },
      { k: '悉尼大学可持续发展团队', v: '支持项目实施、推广和评估。' },
      { k: '校园咖啡店与商家', v: '可能提供奖励，并推广参与。' },
      { k: 'Return and Earn 回收计划', v: '与现有的容器回收设施衔接。' },
      { k: '新州环保局（NSW EPA）', v: '提供政策指导和可能的资金机会。' },
      { k: '垃圾处理服务商', v: '收集并处理可回收材料。' },
      { k: '学生社团与环保团体', v: '帮助推广参与，促进社区互动。' },
    ],
  },

  ethics: {
    eyebrow: '10 / 伦理设计',
    title: '鼓励，而不是指责',
    list: [
      { k: '不指责、不制造负罪感', v: '通过积极反馈鼓励学生，而不是批评或惩罚他们。' },
      { k: '公平且包容的奖励', v: '护照免费提供，所有学生都应享有一致的参与规则。' },
      { k: '不进行道德评判', v: '理解塑料仍然是日常生活的一部分，重点是引导正确处理，而不是指责使用塑料的人。' },
      { k: '透明、真实的信息', v: '环保教育和反馈应建立在真实信息的基础上，不夸大项目效果，也不使用没有依据的说法。' },
      { k: '自愿参与', v: '学生可以自由选择是否参与，系统不应增加学业压力，也不应影响不参与的学生。' },
      { k: '尊重现有回收体系', v: '方案应与已有垃圾处理设施协作，同时尊重垃圾收集和回收链条中的相关工作人员。' },
    ],
  },

  contribution: {
    eyebrow: '11 / 我的个人参与',
    title: '项目整体构思规划与设计深化',
    body: [
      '我在 Bottle Passport 项目中主要负责整体构思、项目规划以及方案的细化与完善。我参与将项目初期较为分散的想法逐步整合，发展成一套更加完整、具有连贯性的校园回收与奖励系统概念。',
      '具体而言，我主要负责确定项目的整体构思与设计方向，梳理项目的设计思路，并进一步细化实体 NFC 护照、智能回收站和数字进度面板这三个核心部分之间的关系。同时，我也重点完善了系统的整体逻辑与用户使用流程，包括领取护照、刷卡回收、记录进度以及兑换奖励等环节。',
      '我的工作重点是项目整体的概念构建与设计深化，帮助团队将前期研究方向转化为更加清晰、完整且具有可理解性的最终设计方案。',
    ],
    highlights: ['整体概念与方向规划', '项目整体规划', '概念发展', '系统结构与逻辑梳理', '用户交互流程细化', '设计深化与完善'],
  },

  reflection: {
    eyebrow: '12 / 项目反思',
    title: '我的收获',
    body: [
      '这个项目让我更加理解交互设计不只是让一个数字产品变得更好用，它也可以帮助人们把日常行为和更大的社会、环境问题联系起来。',
      '我最大的收获之一是，单纯提高环保意识并不一定能够改变一个人的行为。生活中的便利程度、原有习惯以及周围的设施和系统，同样会影响最终的选择。这也让我开始思考，设计应该在什么样的场景下介入，才能真正发挥作用。',
      'Bottle Passport 并不是单纯要求学生更加关注塑料污染，而是希望通过更方便的回收方式、即时反馈和奖励机制，让正确回收更容易成为日常习惯。同时，这个项目也让我意识到，社会影响类设计不能只关注用户看到的界面，还需要考虑不同利益相关者、现有设施以及设计本身可能带来的伦理问题。',
    ],
    closing: '一个饮料瓶看起来只是一件很小的东西，但使用之后如何处理，同样值得关注。',
    closingSub: 'Bottle Passport 希望从一次简单的日常回收行为开始，让更多人看到个人选择与海洋环境之间的联系。',
    creditsTitle: '署名',
    credits: '五人团队项目，悉尼大学 DESN3003 毕业设计。这是一个设计概念，并没有实际投入使用。',
    ai: 'AI 使用说明：三张概念插图和流程图来自团队报告，报告注明由 ChatGPT 生成，本页已逐一标注。页面上的瓶子去向、使用流程和利益相关者图是为作品集制作的说明性交互。',
  },
};

export const copy: Record<Lang, Copy> = { en, zh };
