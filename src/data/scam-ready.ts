/**
 * Scam Ready — project page copy (English).
 * Source: md文件/3200/Scam_Ready_Claude_Portfolio_Brief_EN.md, figures checked against
 * DECO3200_A4_ScamReady_FinalDesignSolution.pdf. Team project.
 * Rules (brief § 8): learning prototype, not a detection engine; keep the 20- and 24-response surveys
 * and the 10-person test separate; SUS is perceived usability, not learning; final redesign untested;
 * personal experiences ≠ research; no student IDs, transcripts, raw data or private Google links.
 */

export const figma = {
  // Keep Sitan’s prototype and starting frame; fit the full frame inside the embed.
  embed:
    'https://embed.figma.com/proto/fMPiMEP5QmqCmVa9cwCCva/DECO3200-prototype?node-id=1-1519&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3998&embed-host=share',
  direct:
    'https://www.figma.com/proto/fMPiMEP5QmqCmVa9cwCCva/DECO3200-prototype?node-id=1-1519&p=f&t=fQNaCMD6IZ0ixjvZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3998',
};

export const team = ['Linyi Shao', 'Rachel Liu', 'Sitan Ding', 'Sen Yan'];

export const copy = {
  hero: {
    eyebrow: 'DECO3200 · UX / Interaction design · Team project',
    title: 'Scam Ready',
    tagline: 'From Scam Awareness to Safer Decisions',
    sub: 'Interactive learning for international students in Australia.',
    body: [
      'A convincing call or message can make an unfamiliar situation feel official. Scam Ready helps students practise what to do when they are not sure who is contacting them.',
      'Rather than simply teaching people to recognise common scam signs, the project turns safer decision-making into something they can experience, question and practise.',
    ],
    ctaPrimary: 'Explore the Prototype',
    ctaSecondary: 'Discover the Design Process',
    details: [
      { k: 'Course', v: 'DECO3200 — Interactive Studio' },
      { k: 'Project type', v: 'Team project' },
      { k: 'Focus', v: 'UX design, behavioural learning, user research and interactive prototyping' },
      { k: 'Platform', v: 'Web-based interactive prototype' },
      { k: 'Tools', v: 'Figma, FigJam and supporting design tools' },
      { k: 'Team', v: 'Linyi Shao, Rachel Liu, Sitan Ding and Sen Yan' },
    ],
    imageAlt: 'Final prototype landing screen: "A message you weren’t expecting." beside a phone showing simulated notifications at 2:41.',
    imageCaption: 'Final prototype — landing screen',
  },

  challenge: {
    eyebrow: '01 / The problem',
    title: 'When a familiar institution becomes an unfamiliar risk.',
    body: [
      'Fraud remains a significant issue in Australia. Across Australian reporting channels, 481,523 scam reports were recorded in 2025, with reported economic losses of A$2.18 billion — an increase of 7.8% compared with 2024 (Australian Competition and Consumer Commission, 2026).',
      'International students may encounter scams involving education, accommodation, employment and visas. A caller may claim to represent an authority, refer to personal details, present official-looking evidence or create urgency to make a request seem genuine.',
      'The difficult moment is not always recognising an obviously suspicious message. It is deciding what to do when a contact appears credible, but its identity has not been independently verified.',
    ],
    stats: [
      { v: 'A$2.18B', k: 'Reported losses, 2025' },
      { v: '481,523', k: 'Scam reports, 2025' },
    ],
    statsSource: 'Source: ACCC, Targeting Scams report, 2026.',
    cuesTitle: 'How scammers build credibility',
    cues: [
      { k: 'Authority impersonation', v: 'A caller claims to represent a trusted institution or official service.' },
      { k: 'Personal details and false evidence', v: 'Information about a person’s travel, study or identity can make an unfamiliar contact seem convincing.' },
      { k: 'Urgency and pressure', v: 'Serious allegations, deadlines or threats can push people towards acting before checking.' },
    ],
    question: 'How can students respond safely when an institutional claim appears credible, but its identity remains unverified?',
  },

  personal: {
    eyebrow: '02 / Why this matters to me',
    title: 'I had experienced how convincing these calls could sound.',
    body: [
      'I had received two calls that used the names of Australian institutions and law-enforcement agencies to create a sense of authority. In both situations, the callers referred to personal travel details and tried to make the claims feel urgent.',
      'The first time, I independently contacted a publicly listed police number and found out that the call was fraudulent. The second situation was more elaborate: it involved several supposed institutions, fake documents, serious accusations and eventually a request for money. Again, independent verification helped me confirm that it was a scam.',
      'These experiences made one thing clear to me: knowing that scams exist is not always enough. In a stressful moment, people need a practical way to step away from the pressure and check the claim through a source the caller does not control.',
    ],
    timeline: [
      { label: 'Experience 01', title: 'Shortly after arriving in Australia', text: 'A call claiming to be immigration, then “border police”, citing my travel details. I checked through a publicly listed police number I found myself. It was a scam.' },
      { label: 'Experience 02', title: 'At the end of a later semester', text: 'A chain of supposed health and police contacts, fake documents, threats of deportation and finally a request for money. Again, an independently found number confirmed it was fraudulent.' },
    ],
    note: 'This is personal project motivation, not a substitute for the team’s research evidence.',
  },

  research: {
    eyebrow: '03 / Understanding the users',
    title: 'Awareness does not always translate into confident action.',
    intro: 'The team combined survey responses, interviews and secondary research to understand how international students interpret institutional communication and decide whether to trust it.',
    findingsTitle: 'What we found',
    findings: [
      { fig: '19 of 20', sample: 'Team survey A · 20 responses', text: 'had received scam advice, yet 10 reported low familiarity with Australian institutional communication. Nine of those ten had already received scam advice.', means: 'Receiving general advice does not necessarily prepare someone for an unfamiliar institutional situation.' },
      { fig: '8 · 5', sample: 'Team survey A · 20 responses', text: '8 respondents considered personal information a credibility cue, while 5 only became suspicious when money was requested.', means: 'Apparently convincing details can be mistaken for proof of identity.' },
      { fig: '2 of 24', sample: 'Separate survey B · 24 students', text: 'recalled specific university safety advice, while 19 were unsure where to find official guidance.', means: 'Knowing that advice exists is different from being able to locate and apply it in the moment.' },
    ],
    charts: [
      { key: 'chart-a2-survey', caption: 'Team survey A (20 responses): awareness does not equal local familiarity', alt: 'Bar chart: 19 respondents previously received scam information, 10 had low familiarity with Australian institutions, 9 had both.' },
      { key: 'chart-24-survey', caption: 'Separate survey B (24 students): university guidance — exposure, recall and access', alt: 'Bar chart of university guidance: 11 recall seeing safety information, 2 can recall specific advice, 5 confident they can find support.' },
    ],
    evidenceNote: 'Exploratory findings from the team’s research (two separate surveys and interviews), not population-level statistics.',
    insightsTitle: 'Three research insights',
    insights: [
      { k: '01 — Awareness ≠ Understanding', v: 'General scam advice may not provide enough preparation for unfamiliar Australian institutional contexts.' },
      { k: '02 — Credibility ≠ Identity', v: 'Personal details and official-looking information can feel convincing without independently proving who is contacting someone.' },
      { k: '03 — Guidance ≠ Accessibility', v: 'Students need to know how to locate and use trusted verification channels, not simply be told to be careful.' },
    ],
    opportunityTitle: 'Design opportunity',
    opportunity: 'Support international students in moving beyond general scam awareness towards contextual understanding, independent verification and repeatable safer decisions.',
    hmwTitle: 'How Might We...',
    hmw: 'How can we assist international students in developing and applying anti-fraud preparedness skills tailored to specific situations, enabling them to identify suspicious contacts earlier, independently verify their authenticity, and feel more confident taking appropriate actions?',
  },

  principles: {
    eyebrow: '04 / Design opportunity',
    title: 'The goal was not to tell users what to think. It was to help them practise what to do.',
    body: [
      'The research suggested a gap between knowing that scams exist and being prepared to respond when a specific contact feels convincing.',
      'We therefore moved towards scenario-based learning. Instead of starting with a list of warning signs, the experience begins with a fictional situation and lets users make decisions before the learning content is revealed.',
    ],
    list: [
      { k: '01 — Experience Before Explanation', v: 'A fictional incoming call invites natural choices before the scam tactics are revealed.' },
      { k: '02 — Behaviour, Not a Score', v: 'Decision Replay helps users review their own choices and understand alternative actions. The learning route is recommended based on their Step Out behaviour, rather than presented as a score of their ability.' },
      { k: '03 — Safe Exit ≠ Safe Resolution', v: 'Leaving the conversation is only the first step. Users still need to verify the claim independently.' },
      { k: '04 — Decisions Become Learning', v: 'Choice-specific explanations and new scenarios turn decisions into opportunities for reflection and practice.' },
    ],
    image: { key: 'principles-replay', caption: 'Final prototype — the Reveal screen after Scenario 1', alt: 'Reveal screen titled "What just happened?" with the learner’s three decisions on a timeline and a recommended learning path.' },
  },

  solution: {
    eyebrow: '05 / The experience',
    title: 'A learning cycle built around real decisions.',
    body: [
      'Scam Ready is a behavioural learning system designed to help international students respond more safely to uncertain institutional communication.',
      'The final design guides learners through a complete cycle: Experience → Reflect → Learn → Apply.',
    ],
    routineTitle: 'The core routine',
    routine: [
      { k: 'Pause', v: 'Recognise pressure and avoid reacting immediately.' },
      { k: 'Step Out', v: 'End the unsafe interaction and create space to think.' },
      { k: 'Verify', v: 'Find an official contact route independently, rather than using details supplied by the caller.' },
      { k: 'Decide', v: 'Work out what needs to happen next, including whether a genuine issue still needs attention.' },
    ],
    routineNote: 'The goal is not to teach students to ignore every unfamiliar call. It is to help them distinguish between an unverified contact and a real issue that should be checked through an independent channel.',
  },

  flow: {
    title: 'How the journey branches',
    hint: 'Select a stage to see it in the final prototype.',
    stages: [
      { id: 'scenario1', label: 'Scenario 1', key: 'flow-01-scenario', text: 'An unexpected authority-style call. The learner chooses how to respond without being told what is right.', alt: 'Scenario 1 decision screen: "What do you do?" with four response options.' },
      { id: 'replay', label: 'Decision Replay', key: 'flow-02-reveal', text: 'The learner reviews the path they took. Decisions they did not reach are marked “Not reached”.', alt: 'Reveal screen with the decision timeline and a recommended learning path.' },
      { id: 'foundation', label: 'Foundation', key: 'flow-03-learn', text: 'If the learner did not Step Out: a practical safety routine with short practice and feedback.', alt: 'Foundation lesson screen: "Build a practical safety routine" with a list of lessons.', branch: 'No Step Out' },
      { id: 'advanced', label: 'Advanced', key: 'advanced-appearances', text: 'If the learner chose to Step Out: how convincing evidence is built, who controls the source, and Decision Rewind.', alt: 'Advanced lesson screen: "Look beyond official appearances" with a list of modules.', branch: 'Stepped Out' },
      { id: 'scenario2', label: 'Scenario 2', key: 'flow-04-check', text: 'A university-related notice. The same routine, applied in a new context.', alt: 'Scenario 2 screen: an email from "Student Administration" next to "What do you do?" options.' },
      { id: 'future', label: 'Future Learning', key: 'flow-05-future', text: 'Short new episodes to keep practising the same decision process.', alt: 'Future learning screen: "A new everyday situation is available." with a list of episodes.' },
    ],
    note: 'Foundation learners can also continue into Advanced. This diagram explains the structure; the playable prototype is below.',
  },

  prototype: {
    eyebrow: 'Try the experience',
    title: 'Explore Scam Ready for yourself.',
    body: [
      'The prototype lets you move through the learning experience, make decisions in a simulated institutional contact, review the path you took and explore how independent verification changes the way you respond.',
      'Try the first scenario, follow the learning route and explore the evidence comparison in Verification X-Ray.',
    ],
    iframeTitle: 'Scam Ready — Interactive Figma Prototype',
    open: 'Open the prototype directly in Figma',
    note: 'The interactive experience is a design prototype. It does not contact real institutions, verify real identities or provide emergency, legal or financial advice.',
    blocked: 'If the prototype does not appear (some browsers block embedded Figma content), use the direct link.',
  },

  scenario1: {
    eyebrow: '06 / Experience before explanation',
    title: 'An unexpected call. What would you do?',
    body: [
      'The first scenario introduces an unexpected authority-style call. Learners are not immediately told whether the contact is genuine or fraudulent. They encounter the situation and choose how to respond.',
      'The caller gradually introduces credibility cues and pressure. Users can ask questions, continue the interaction or Step Out. The simulation stops before sensitive information is shared.',
      'The purpose is to let users experience uncertainty before moving into explanation.',
    ],
    steps: [
      { k: '01 — Experience uncertainty', v: 'The user receives an unexpected call and decides how to respond without being told which option is correct.' },
      { k: '02 — See the outcome', v: 'The simulation reveals the consequences of the selected path and stops before sensitive information is shared.' },
      { k: '03 — Reflect on decisions', v: 'The user reviews their choices before moving into the learning stage.' },
    ],
    images: [
      { key: 's1-incoming', caption: 'The call arrives — “Service Support Centre”', alt: 'Simulated incoming call from "Service Support Centre" with an "Answer the call" button.' },
      { key: 's1-decision', caption: 'Decision 1 of 3 — four natural responses', alt: 'Call transcript on the left; "What do you do?" with four options on the right.' },
      { key: 's1-escalation', caption: 'Decision 2 — a transfer and a “reference document”', alt: 'The caller offers a transfer to an investigator and shares a simulated investigation record.' },
      { key: 's1-stops', caption: 'The simulation stops before anything sensitive is shared', alt: '"The simulation stops here." screen explaining the outcome of staying in the caller-controlled process.' },
    ],
    fiction: 'Fictional learning scenario — not a real immigration, police or government contact.',
  },

  replay: {
    eyebrow: '07 / Reflection',
    title: 'See the path you took — and the choices you did not reach.',
    body: [
      'After Scenario 1, Scam Ready shows the learner how their decisions shaped the simulated interaction.',
      'Decision Replay makes the route visible. It helps users revisit the stages they reached, understand where the interaction escalated and reflect on the point at which they chose to leave or continue.',
      'It is not a score. It is a way to make the learner’s own decision process easier to understand.',
    ],
    twoTitle: 'Two related interactions',
    two: [
      { k: 'Decision Replay — Review the actual path', v: 'Shows the steps taken along the simulated route. It helps the learner see which choices they made and which stages they reached.' },
      { k: 'Decision Rewind — Compare an alternative', v: 'Returns to an earlier decision point so the learner can compare the original action with another possible choice and inspect how the outcome might have changed.' },
    ],
    closing: 'Together, these interactions turn a single choice into an opportunity to reflect on alternative actions.',
    images: [
      { key: 'replay-timeline', caption: 'Decision Replay — the path taken, later stages marked “Not reached”', alt: 'Reveal screen with three decisions on a timeline, each marked "Not reached", and a turning-point note.' },
      { key: 'rewind-two-paths', caption: 'Decision Rewind — two paths from the same turning point', alt: 'Decision Rewind screen comparing a caller-controlled path with an independent path from the same moment in the call.' },
    ],
  },

  routes: {
    eyebrow: '08 / Foundation & Advanced',
    title: 'Different starting points. One shared goal.',
    body: [
      'After Scenario 1, the learner enters one of two learning routes based on whether they chose to Step Out.',
      'This is a simple, transparent behaviour-based routing rule. It is a teaching starting point, not a validated measurement of knowledge, competence or scam resistance.',
    ],
    foundation: {
      label: 'Foundation Learning',
      when: 'If the learner did not Step Out',
      text: [
        'Foundation builds a practical safety routine for recognising pressure, questioning credibility and verifying independently.',
        'It introduces the core lessons and helps users understand why names, IDs and official-looking details are not proof of identity. Short practice activities let users apply the ideas and receive feedback.',
      ],
      images: [
        { key: 'foundation-routine', caption: 'Build a practical safety routine', alt: 'Foundation screen listing lessons for a practical safety routine.' },
        { key: 'foundation-identity', caption: 'Knowing your name is not proof of who is calling', alt: 'Foundation lesson explaining that personal details do not prove identity.' },
        { key: 'foundation-practice', caption: 'Practice with A / B / C / D answers', alt: 'Foundation practice question about a message claiming a university account will be restricted, with four answers.' },
      ],
    },
    advanced: {
      label: 'Advanced Learning',
      when: 'If the learner chose to Step Out',
      text: [
        'Advanced explores how convincing evidence is created, who controls the source and where information can be verified independently.',
        'Users compare caller-controlled evidence with information accessed through a route they started themselves. They also return to an earlier turning point to compare what might happen if they stay in the interaction or Step Out. The Advanced route concludes with a short “Did You Know?” recap before learners continue.',
      ],
      images: [
        { key: 'advanced-appearances', caption: 'Look beyond official appearances', alt: 'Advanced screen listing modules about how convincing contacts are built.' },
        { key: 'advanced-source', caption: 'Who controls the source?', alt: 'Advanced module comparing what arrived during the call with steps the learner could take.' },
      ],
    },
    shared: 'The purpose of the two routes is to give learners a suitable starting point, not to permanently label them as beginners or experts.',
  },

  xray: {
    eyebrow: '09 / Source analysis',
    title: 'Look beyond the appearance. Find out who controls the evidence.',
    body: [
      'An official-looking document, a staff ID or a phone number can make a claim appear trustworthy. But appearance alone does not establish identity.',
      'Verification X-Ray helps users examine where the information comes from and who controls the route used to verify it.',
    ],
    defs: [
      { k: 'Caller-controlled information', v: 'Details, documents, phone numbers or contacts supplied by the person making the claim.' },
      { k: 'Independently accessed information', v: 'A contact route or source the learner finds separately, without relying on the details supplied by the caller.' },
    ],
    after: 'Expandable evidence cards, labels and contrasting visual treatments help make the difference visible.',
    question: 'Am I checking the claim independently, or am I using information provided by the same person I am trying to verify?',
    image: { key: 'xray-compare', caption: 'Verification X-Ray — Path A (caller-controlled) beside Path B (independent)', alt: 'Two columns of expandable evidence cards: Path A caller-controlled (original caller, reference number, alleged supervisor, caller-provided link) and Path B independent (Step Out, find the institution yourself, official channel, verify the claim).' },
  },

  feedback: {
    eyebrow: '10 / Learning design',
    title: 'Every choice deserves an explanation.',
    body: [
      'Earlier activities used shorter explanations. User testing showed that some participants needed more help understanding what should happen after leaving a call and why an apparently convincing detail was not enough to prove identity.',
      'The final design expands answer feedback into four layers:',
    ],
    layers: [
      { k: 'Why the choice seems reasonable', v: 'acknowledge why someone might select it.' },
      { k: 'What is missing', v: 'identify the information that has not been independently established.' },
      { k: 'Possible consequence', v: 'explain what could happen if the learner continues along that path.' },
      { k: 'A safer next step', v: 'connect the explanation to an action the learner can take.' },
    ],
    closing: 'This structure avoids treating every choice as simply right or wrong. It helps users understand the reasoning behind a safer response, including when an option initially seems sensible.',
    images: [
      { key: 'feedback-layers', caption: 'The four feedback layers on one real answer', alt: 'Feedback block with four rows: why it might seem reasonable, what’s missing, possible consequence, and a highlighted safer next step.' },
      { key: 'after-feedback', caption: 'Answer feedback in context — “Open the link and sign in”', alt: 'Final prototype screen: a practice message on the left and the expanded explanation for the answer "Open the link and sign in" on the right.' },
    ],
  },

  scenario2: {
    eyebrow: '11 / Transfer',
    title: 'Leaving a suspicious contact does not mean ignoring a real issue.',
    body: [
      'The learning experience continues with a different institutional context. The second scenario introduces a university-related notice and asks users to apply the same verification strategy again.',
      'This is important because safe behaviour should not mean automatically dismissing every unfamiliar message. A real university issue may still need attention. The learner needs to establish whether the message is genuine through an independently accessed channel before deciding what to do.',
      'The scenario reinforces the difference between leaving an unverified contact and resolving the underlying issue.',
    ],
    practiseTitle: 'What the learner practises',
    practise: [
      'Applying the same routine in a new context.',
      'Checking whether the source is independently accessible.',
      'Distinguishing a genuine institutional issue from an unverified request.',
      'Deciding what needs attention after leaving the original contact.',
    ],
    images: [
      { key: 's2-notice', caption: 'Scenario 2 — a fictional “Student Administration” email', alt: 'Simulated email asking the student to review their enrolment and fee status, with four response options.' },
      { key: 's2-decision', caption: 'A follow-up SMS about fees', alt: 'Simulated SMS about a fee payment, with options including opening the student portal independently.' },
      { key: 's2-lookback', caption: 'A look back at this session', alt: 'Session review screen with the learner’s choices and a quick check of four questions.' },
    ],
  },

  future: {
    eyebrow: '12 / Continuous practice',
    title: 'A safer response is a habit worth revisiting.',
    body: [
      'Scam situations change over time. A single learning session may introduce a useful method, but users need opportunities to apply it in different contexts.',
      'Scam Ready therefore includes a future-learning direction in which users return to short new episodes, practise the same decision process and review the skills they have learned.',
    ],
    loop: ['New Episode', 'Make Decisions', 'Review', 'Refresh Skills', 'Return Later'],
    caveat: 'The current prototype illustrates this direction. It is not an automated live service that publishes new scenarios or sends scheduled notifications; later scenarios such as rental contact are proposed, not built.',
    image: { key: 'future-episode', caption: 'Future learning — proposed episode list in the prototype', alt: 'Screen titled "A new everyday situation is available." listing episodes, some marked completed and some coming soon.' },
  },

  development: {
    eyebrow: '13 / From concept to final prototype',
    title: 'The experience became clearer through iteration.',
    body: [
      'Scam Ready developed from early concept exploration into a branching interactive prototype. Crazy 8s and bodystorming helped the team explore how people might make decisions under pressure.',
      'The early direction combined scenario-based preparation, credibility questioning and a verification/support pathway. Tutor feedback then helped narrow the first scenario towards authority impersonation.',
      'The team added post-call choices and a decision timeline linked to individual choices, followed by guided response activities. User testing then highlighted gaps in understanding what should happen after leaving the interaction.',
    ],
    sketch: { key: 'crazy-8s', caption: 'Crazy 8s sketches from early concept development', alt: 'A grid of rough hand-drawn Crazy 8s sketches of phone screens and flows.' },
    changesTitle: 'What changed',
    changes: [
      { before: 'A shared guided sequence followed the initial decision timeline. Some users were unclear about what “Step Out” meant and what they should do next.', after: 'A clearer Foundation and Advanced route connects the first scenario with further learning. The route begins with the learner’s Step Out behaviour, and Foundation users can also move into Advanced learning.', topic: 'Learning route' },
      { before: 'Short explanations and dense content did not always help users understand why a choice was safer.', after: 'Each answer has fuller, choice-specific feedback explaining why an option seems reasonable, what is missing, its possible consequence and a safer next step.', topic: 'Answer feedback' },
      { before: 'A supplied phone number was contrasted with an official contact found independently, but personal details and official-looking references could still increase trust.', after: 'Verification X-Ray makes the source of the evidence more visible by comparing caller-controlled information with a route started independently.', topic: 'Verification' },
    ],
    compare: {
      before: { key: 'before-guided', caption: 'Earlier prototype · Week 8 — guided learning', alt: 'Earlier prototype screen "What was happening in this call?" with three short explanation cards.' },
      after: { key: 'after-feedback', caption: 'Final revised design — answer-specific feedback', alt: 'Final prototype screen with expanded answer-specific feedback.' },
    },
    untested: 'The final revised design has not yet been user-tested.',
  },

  testing: {
    eyebrow: '14 / Evaluation',
    title: 'Testing showed that leaving the call was not always the end of the decision.',
    body: [
      'The team tested an earlier Figma prototype through ten individual moderated sessions at the Week 8 fair, mainly with international students.',
      'Participants responded to a simulated immigration call, completed learning activities and tried a university IT-support scenario. The team observed response choices, understanding of Step Out, verification routes and requests for moderator assistance.',
    ],
    stats: [
      { v: '10', k: 'Participants', d: 'Individual moderated Figma sessions' },
      { v: '52.75', k: 'Mean SUS / 100', d: 'Scores ranged from 20 to 90' },
      { v: '4 · 3 · 3', k: 'Moderator support', d: 'No / minor / significant assistance' },
    ],
    susNote: 'SUS measures perceived usability. It is not a learning score and does not prove that Scam Ready improves real-world scam resistance.',
    image: { key: 'early-call', caption: 'Earlier prototype (tested at Week 8) — the unexpected call', alt: 'Earlier prototype screen: a simulated call from an unknown number beside "What would you do next?" with Continue, Ask how they got this information and Step out.' },
    revealedTitle: 'What testing revealed',
    revealed: [
      { k: '01 — Leaving needs a next step', v: 'One participant (P01) described Step Out as hanging up. Another (P04) wanted clearer guidance about what to do after leaving.' },
      { k: '02 — Make learning readable', v: 'Participants found some explanations too short (P01), dense or concentrated (P02, P08).' },
      { k: '03 — Question the source', v: 'Official-looking details increased perceived credibility for several participants (P02, P05, P06).' },
    ],
    closing: 'These findings informed the final iteration.',
  },

  response: {
    eyebrow: '15 / Design response',
    title: 'From observed difficulties to clearer interactions.',
    rows: [
      { found: 'Leaving the call was sometimes understood as simply hanging up.', response: 'Link post-call reflection to independent verification and a next action.' },
      { found: 'Explanations were too short or dense for some users.', response: 'Use focused practice and fuller answer-specific feedback.' },
      { found: 'Official-looking details increased trust.', response: 'Use Verification X-Ray and Decision Replay to compare evidence sources and alternative actions.' },
    ],
    stillTitle: 'What still needs to be tested',
    still: [
      'Can students leave the contact and locate a separate verification channel without help?',
      'Can students explain why a choice is safer and use the feedback in a new situation?',
      'Can students distinguish caller-controlled evidence from information they accessed independently?',
    ],
    note: 'The final redesign responds to earlier testing findings, but these revised interactions still require user evaluation.',
  },

  impact: {
    eyebrow: '16 / Reflection & evaluation',
    title: 'A useful learning system — with more to prove.',
    body: 'Scam Ready gives students a place to rehearse decisions before facing a real pressured conversation. Its intended value is a repeatable method: recognise pressure, leave the contact, find an independent channel and decide what needs attention.',
    built: [
      'A complete interactive learning concept.',
      'Scenario-based decisions before explanation.',
      'Decision Replay and alternative-route reflection.',
      'Foundation and Advanced learning pathways.',
      'A visual method for comparing caller-controlled and independently accessed evidence.',
      'A second scenario that reinforces transfer beyond the first call.',
    ],
    notYet: [
      'That the final design reduces real-world scam victimisation.',
      'That users retain the learning over time.',
      'That users can transfer the method independently to every new context.',
      'That the final revised interactions are more usable than the earlier prototype.',
      'That Step Out behaviour alone is a complete measure of knowledge or ability.',
    ],
    next: [
      { k: '01 — Independent use', v: 'Ask international students to complete the revised flow without moderator guidance. Observe task completion, unclear labels, reading difficulties and whether the feedback is understood.' },
      { k: '02 — Transfer of learning', v: 'Give learners new suspicious and genuine institutional messages. Ask them to explain their reasoning and show how they locate an independent channel.' },
      { k: '03 — Retention over time', v: 'Invite learners back after a delay to try a new everyday situation, such as rental contact. Observe whether they still use the verification method without prompts.' },
    ],
  },

  contribution: {
    eyebrow: '17 / Teamwork',
    title: 'A collaborative project shaped through research and prototyping.',
    body: 'Scam Ready was developed by a four-person team. The research, decisions and prototype described on this page are the team’s shared work.',
    // TODO (Sitan): replace each value with your confirmed individual contribution before publishing.
    mine: [
      { k: 'Research and problem framing', v: null as string | null },
      { k: 'Interaction flow and learning logic', v: null as string | null },
      { k: 'Figma prototype and motion design', v: null as string | null },
      { k: 'Testing, iteration and documentation', v: null as string | null },
    ],
    pending: 'Individual contribution to be confirmed',
  },

  references: [
    { text: 'Australian Competition and Consumer Commission. (2026). Targeting scams: Report of the National Anti-Scam Centre on scams data and activity 2025.', url: 'https://www.accc.gov.au/system/files/targeting-scams-report-2025.pdf' },
    { text: 'University of Technology Sydney. (n.d.). Scam awareness for international students.', url: 'https://www.uts.edu.au/for-students/current-students/managing-your-course/using-uts-systems/cybersecurity/scam-awareness-international-students' },
    { text: 'Scamwatch. (2026, March 26). Phone scams.', url: 'https://www.scamwatch.gov.au/types-of-scams/phone-scams' },
    { text: 'Sturman, D., Bell, E. A., Auton, J. C., Breakey, G. R., & Wiggins, M. W. (2024). The roles of phishing knowledge, cue utilization, and decision styles in phishing email detection. Applied Ergonomics, 119, 104309.', url: 'https://doi.org/10.1016/j.apergo.2024.104309' },
    { text: 'Stajano, F. (2010). Understanding scam victims: Seven principles for systems security. USENIX.', url: 'https://www.usenix.org/conference/usenixsecurity10/understanding-scam-victims-seven-principles-systems-security' },
    { text: 'Scamwatch. (2026, June 5). Stop. Check. Protect.', url: 'https://www.scamwatch.gov.au/stop-check-protect' },
    { text: 'Kumaraguru, P., Rhee, Y., Acquisti, A., Cranor, L. F., Hong, J., & Nunge, E. (2007). Protecting people from phishing. In Proceedings of the CHI Conference on Human Factors in Computing Systems (pp. 905–914).', url: 'https://doi.org/10.1145/1240624.1240760' },
    { text: 'Shute, V. J. (2008). Focus on formative feedback. Review of Educational Research, 78(1), 153–189.', url: 'https://doi.org/10.3102/0034654307313795' },
    { text: 'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249–255.', url: 'https://doi.org/10.1111/j.1467-9280.2006.01693.x' },
  ],
  researchData: 'Team survey and interview research, DECO3200, 2026 (internal project materials; not published).',
  ai: 'During the development of this project and the preparation of the report, the team used Grammarly to review grammar, improve clarity and refine written expression. ChatGPT was used to assist in generating selected visual materials and concept images based on the team’s original research findings, design insights and concept direction. It was also used to provide technical guidance and suggestions for interaction and motion design in Figma, including animation transitions and prototyping techniques. These tools supported the team’s work but did not replace independent research, critical analysis or design judgement. All research interpretations, design decisions and final outputs were reviewed, refined and approved by the team.',
};
