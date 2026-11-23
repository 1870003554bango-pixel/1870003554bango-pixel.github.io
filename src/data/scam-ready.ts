/**
 * Scam Ready — project page copy (en + zh).
 * Source: md文件/3200/Scam_Ready_Claude_Portfolio_Brief_EN.md, figures checked against
 * DECO3200_A4_ScamReady_FinalDesignSolution.pdf. Team project.
 * Rules (brief § 8): learning prototype, not a detection engine; keep the 20- and 24-response surveys
 * and the 10-person test separate; SUS is perceived usability, not learning; final redesign untested;
 * personal experiences ≠ research; no student IDs, transcripts, raw data or private Google links.
 */

export const figma = {
  // Fit the complete frame; fit-width can crop tall screens and add internal scrolling.
  // The prototype's exact frame/viewport dimensions still need verification in Figma.
  embed:
    'https://embed.figma.com/proto/fMPiMEP5QmqCmVa9cwCCva/DECO3200-prototype?node-id=1-1519&p=f&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3998&embed-host=share&hide-ui=1&footer=false&device-frame=false&viewport-controls=false&show-proto-sidebar=false',
  direct:
    'https://www.figma.com/proto/fMPiMEP5QmqCmVa9cwCCva/DECO3200-prototype?node-id=1-1519&p=f&t=fQNaCMD6IZ0ixjvZ-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3998',
};

export const team = ['Linyi Shao', 'Rachel Liu', 'Sitan Ding', 'Sen Yan'];

import type { Lang } from '../i18n/ui';

const en = {
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
    // Fill in a value to show that line under “My contribution”; empty values are not shown.
    mine: [
      { k: 'Research and problem framing', v: null as string | null },
      { k: 'Interaction flow and learning logic', v: null as string | null },
      { k: 'Figma prototype and motion design', v: null as string | null },
      { k: 'Testing, iteration and documentation', v: null as string | null },
    ],
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

type Copy = typeof en;

const zh: Copy = {
  hero: {
    eyebrow: 'DECO3200 · UX / 交互设计 · 团队项目',
    title: 'Scam Ready',
    tagline: '从防诈意识，到更安全的决定',
    sub: '为在澳国际学生设计的互动学习体验。',
    body: [
      '一通听起来很可信的电话或一条消息，会让陌生的情况显得像是官方行为。Scam Ready 帮助学生练习：当不确定是谁在联系自己时，应该怎么做。',
      '这个项目不只是教人识别常见的诈骗特征，而是把“做出更安全的决定”变成一种可以亲身经历、反思和练习的过程。',
    ],
    ctaPrimary: '体验原型',
    ctaSecondary: '了解设计过程',
    details: [
      { k: '课程', v: 'DECO3200 — Interactive Studio' },
      { k: '项目类型', v: '团队项目' },
      { k: '重点', v: 'UX 设计、行为学习、用户研究与交互原型' },
      { k: '平台', v: '网页交互原型' },
      { k: '工具', v: 'Figma、FigJam 及其他辅助设计工具' },
      { k: '团队', v: 'Linyi Shao、Rachel Liu、Sitan Ding、Sen Yan' },
    ],
    imageAlt: '最终原型的首页：“A message you weren’t expecting.”，旁边的手机显示 2:41 收到的模拟通知。',
    imageCaption: '最终原型——首页',
  },

  challenge: {
    eyebrow: '01 / 问题',
    title: '当熟悉的机构，变成陌生的风险。',
    body: [
      '诈骗在澳大利亚仍是严重的问题。2025 年，澳大利亚各报告渠道共记录 481,523 宗诈骗举报，报告的经济损失达 21.8 亿澳元，比 2024 年增加 7.8%（Australian Competition and Consumer Commission, 2026）。',
      '国际学生可能遇到与教育、住宿、工作和签证相关的诈骗。来电者可能自称代表某个权威机构，说出个人信息，出示看起来很正式的“证据”，或者制造紧迫感，让请求显得真实。',
      '难的往往不是识别一条明显可疑的消息，而是当一个联系看起来可信、但身份尚未被独立确认时，该怎么做。',
    ],
    stats: [
      { v: 'A$2.18B', k: '2025 年报告的损失' },
      { v: '481,523', k: '2025 年诈骗举报' },
    ],
    statsSource: '来源：ACCC，Targeting Scams 报告，2026。',
    cuesTitle: '诈骗者如何建立可信度',
    cues: [
      { k: '冒充权威', v: '来电者自称代表一个值得信任的机构或官方服务。' },
      { k: '个人信息与虚假证据', v: '关于一个人出行、学业或身份的信息，会让陌生的联系显得可信。' },
      { k: '紧迫与施压', v: '严重的指控、截止时间或威胁，会推动人们在核实之前就采取行动。' },
    ],
    question: '当一个机构的说法看起来可信、但身份仍未被确认时，学生怎样才能安全地应对？',
  },

  personal: {
    eyebrow: '02 / 这件事为什么对我重要',
    title: '我亲身经历过这些电话听起来有多可信。',
    body: [
      '我曾接到两通电话，对方冒用澳大利亚机构和执法部门的名义来制造权威感。两次对方都说出了我的个人出行信息，并试图让事情显得很紧急。',
      '第一次，我自己找到公开的警察局电话去核实，发现那是诈骗。第二次更复杂：涉及好几个所谓的机构、伪造的文件、严重的指控，最后还要求转钱。同样，独立核实帮助我确认了那是诈骗。',
      '这些经历让我清楚地认识到：只知道诈骗存在是不够的。在紧张的时刻，人们需要一个实际可用的方法，先从压力中抽身，再通过对方无法控制的渠道去核实。',
    ],
    timeline: [
      { label: '经历 01', title: '刚到澳大利亚不久', text: '一通自称移民局、随后又变成“边境警察”的电话，说出了我的出行信息。我通过自己找到的公开警察电话核实，确认是诈骗。' },
      { label: '经历 02', title: '后来某个学期末', text: '一连串所谓的卫生部门和警察来电、伪造的文件、遣返威胁，最后要求转钱。同样，一个我独立找到的电话号码确认了这是诈骗。' },
    ],
    note: '这是我做这个项目的个人动机，不能替代团队的研究证据。',
  },

  research: {
    eyebrow: '03 / 理解用户',
    title: '有防诈意识，不等于能自信地采取行动。',
    intro: '团队结合问卷、访谈和二手研究，去了解国际学生如何理解机构发来的信息，以及如何决定是否相信它们。',
    findingsTitle: '我们的发现',
    findings: [
      { fig: '19 / 20', sample: '团队问卷 A · 20 份回答', text: '曾收到过防诈建议，但有 10 人表示不太熟悉澳大利亚机构的沟通方式；这 10 人中有 9 人已经收到过防诈建议。', means: '收到一般性的建议，不一定能让人准备好面对陌生的机构情境。' },
      { fig: '8 · 5', sample: '团队问卷 A · 20 份回答', text: '有 8 人把个人信息当作可信的线索，另有 5 人只有在对方要钱时才开始怀疑。', means: '看起来很有说服力的细节，可能被误当成身份证明。' },
      { fig: '2 / 24', sample: '另一份问卷 B · 24 名学生', text: '能想起学校具体的安全建议，而有 19 人不确定去哪里找官方指引。', means: '知道有建议存在，与能在当下找到并用上它，是两回事。' },
    ],
    charts: [
      { key: 'chart-a2-survey', caption: '团队问卷 A（20 份回答）：有防诈意识不等于熟悉本地情况', alt: '柱状图：19 人此前收到过诈骗相关信息，10 人不熟悉澳大利亚机构，9 人两者都有。' },
      { key: 'chart-24-survey', caption: '另一份问卷 B（24 名学生）：学校指引——接触、记得与能否找到', alt: '学校指引柱状图：11 人记得看过安全信息，2 人能想起具体建议，5 人有信心能找到支持。' },
    ],
    evidenceNote: '这些是团队研究（两份独立问卷和访谈）的探索性发现，不是总体层面的统计数据。',
    insightsTitle: '三条研究洞察',
    insights: [
      { k: '01 — 有意识 ≠ 能理解', v: '一般性的防诈建议，可能不足以让人准备好面对陌生的澳大利亚机构情境。' },
      { k: '02 — 看起来可信 ≠ 身份已确认', v: '个人信息和看似官方的资料会让人信服，却并不能独立证明是谁在联系自己。' },
      { k: '03 — 有指引 ≠ 能用上', v: '学生需要知道如何找到并使用可信的核实渠道，而不只是被告知“要小心”。' },
    ],
    opportunityTitle: '设计机会',
    opportunity: '帮助国际学生从一般性的防诈意识，走向对具体情境的理解、独立核实，以及可以重复使用的更安全的决定。',
    hmwTitle: '我们如何能……',
    hmw: '我们如何能帮助国际学生培养并运用针对具体情境的防诈准备能力，让他们更早识别可疑联系、独立核实其真实性，并更有信心采取适当的行动？',
  },

  principles: {
    eyebrow: '04 / 设计机会',
    title: '目标不是告诉用户该怎么想，而是帮助他们练习该怎么做。',
    body: [
      '研究显示，“知道诈骗存在”与“在某个具体联系显得很可信时能够应对”之间存在落差。',
      '因此我们转向情境式学习。体验不是从一张警示特征清单开始，而是从一个虚构的情境开始，让用户先做决定，再揭示学习内容。',
    ],
    list: [
      { k: '01 — 先体验，再解释', v: '一通虚构的来电让用户自然地做出选择，之后才揭示诈骗手法。' },
      { k: '02 — 关注行为，而不是分数', v: '决策回放帮助用户回顾自己的选择、理解其他可能的做法。学习路线根据用户是否 Step Out（抽身离开）来推荐，而不是给他们的能力打分。' },
      { k: '03 — 安全离开 ≠ 问题解决', v: '离开对话只是第一步，用户仍需要独立核实对方的说法。' },
      { k: '04 — 决定变成学习', v: '针对每个选择的解释和新的情境，把决定变成反思和练习的机会。' },
    ],
    image: { key: 'principles-replay', caption: '最终原型——情境 1 之后的揭示页面', alt: '标题为“What just happened?”的揭示页面，时间线上显示学习者的三个决定，以及推荐的学习路线。' },
  },

  solution: {
    eyebrow: '05 / 体验',
    title: '一个围绕真实决定构建的学习循环。',
    body: [
      'Scam Ready 是一个行为学习系统，帮助国际学生更安全地应对来源不明的机构联系。',
      '最终设计引导学习者完成一个完整循环：体验 → 反思 → 学习 → 应用。',
    ],
    routineTitle: '核心步骤',
    routine: [
      { k: '停一下', v: '意识到压力，不要立刻反应。' },
      { k: '抽身离开', v: '结束不安全的互动，给自己思考的空间。' },
      { k: '核实', v: '自己独立找到官方联系方式，而不是使用来电者提供的信息。' },
      { k: '决定', v: '想清楚接下来该做什么，包括真实的问题是否仍需要处理。' },
    ],
    routineNote: '目标不是教学生无视所有陌生来电，而是帮助他们区分“未经核实的联系”与“应该通过独立渠道确认的真实问题”。',
  },

  flow: {
    title: '学习路线如何分支',
    hint: '选择一个阶段，查看它在最终原型中的样子。',
    stages: [
      { id: 'scenario1', label: '情境 1', key: 'flow-01-scenario', text: '一通意外的、自称来自权威机构的电话。学习者在没有被告知正确答案的情况下，选择如何应对。', alt: '情境 1 的决定页面：“What do you do?”，下方有四个应对选项。' },
      { id: 'replay', label: '决策回放', key: 'flow-02-reveal', text: '学习者回顾自己走过的路线，没有走到的决定会标记为“Not reached”。', alt: '揭示页面，显示决定时间线和推荐的学习路线。' },
      { id: 'foundation', label: '基础', key: 'flow-03-learn', text: '如果学习者没有 Step Out：学习一套实用的安全步骤，并做简短练习、获得反馈。', alt: '基础课程页面：“Build a practical safety routine”，下方是课程列表。', branch: '没有 Step Out' },
      { id: 'advanced', label: '进阶', key: 'advanced-appearances', text: '如果学习者选择了 Step Out：了解可信的“证据”如何被制造、谁控制着信息来源，以及决策回溯。', alt: '进阶课程页面：“Look beyond official appearances”，下方是模块列表。', branch: '已 Step Out' },
      { id: 'scenario2', label: '情境 2', key: 'flow-04-check', text: '一封与学校相关的通知。在新的情境中应用同一套步骤。', alt: '情境 2 页面：一封来自“Student Administration”的邮件，旁边是“What do you do?”选项。' },
      { id: 'future', label: '后续学习', key: 'flow-05-future', text: '简短的新剧集，让学习者持续练习同样的决策过程。', alt: '后续学习页面：“A new everyday situation is available.”，下方是剧集列表。' },
    ],
    note: '完成基础学习的用户也可以继续进入进阶学习。这张图说明结构，可游玩的原型在下方。',
  },

  prototype: {
    eyebrow: '体验原型',
    title: '亲自体验 Scam Ready。',
    body: [
      '你可以在原型中完整走一遍学习体验：在模拟的机构来电中做决定，回顾自己走过的路线，并探索独立核实如何改变你的应对方式。',
      '试试第一个情境，跟着学习路线走，再看看 Verification X-Ray 中的证据对比。',
    ],
    iframeTitle: 'Scam Ready — Figma 交互原型',
    open: '直接在 Figma 中打开原型',
    note: '这个互动体验是一个设计原型，不会联系真实机构、核实真实身份，也不提供紧急、法律或财务建议。原型界面为英文。',
    blocked: '如果原型没有显示（部分浏览器会拦截嵌入的 Figma 内容），请使用直接链接。',
  },

  scenario1: {
    eyebrow: '06 / 先体验，再解释',
    title: '一通意外的电话。你会怎么做？',
    body: [
      '第一个情境是一通意外的、自称来自权威机构的电话。学习者不会被立即告知这通电话是真是假，而是先进入情境、选择如何应对。',
      '来电者会逐步加入可信的线索和压力。用户可以提问、继续通话，或者 Step Out。模拟会在分享敏感信息之前停止。',
      '目的是让用户在进入解释之前，先亲身体验那种不确定感。',
    ],
    steps: [
      { k: '01 — 体验不确定', v: '用户接到一通意外的电话，在不知道哪个选项正确的情况下决定如何应对。' },
      { k: '02 — 看到结果', v: '模拟揭示所选路线的后果，并在分享敏感信息之前停止。' },
      { k: '03 — 反思决定', v: '用户在进入学习阶段之前，先回顾自己的选择。' },
    ],
    images: [
      { key: 's1-incoming', caption: '来电——“Service Support Centre”', alt: '来自“Service Support Centre”的模拟来电，带有“Answer the call”按钮。' },
      { key: 's1-decision', caption: '第 1 / 3 个决定——四种自然的应对', alt: '左侧是通话记录，右侧是“What do you do?”和四个选项。' },
      { key: 's1-escalation', caption: '第 2 个决定——转接，以及一份“参考文件”', alt: '来电者提出转接给调查员，并分享一份模拟的调查记录。' },
      { key: 's1-stops', caption: '模拟在分享任何敏感信息之前停止', alt: '“The simulation stops here.”页面，解释继续留在来电者控制的流程中会有什么后果。' },
    ],
    fiction: '虚构的学习情境——不是真实的移民局、警察或政府来电。',
  },

  replay: {
    eyebrow: '07 / 反思',
    title: '看见自己走过的路线，也看见没有走到的选择。',
    body: [
      '情境 1 结束后，Scam Ready 会向学习者展示他们的决定如何影响了这次模拟互动。',
      '决策回放让路线变得可见，帮助用户回看自己走到了哪些阶段，理解互动在哪里升级，并反思自己是在哪一刻选择离开或继续。',
      '它不是分数，而是让学习者更容易理解自己的决策过程。',
    ],
    twoTitle: '两个相关的交互',
    two: [
      { k: '决策回放——回顾实际路线', v: '显示用户在模拟路线中走过的步骤，帮助学习者看到自己做了哪些选择、走到了哪些阶段。' },
      { k: '决策回溯——比较另一种选择', v: '回到之前的某个决定点，让学习者比较原本的做法与另一种可能的选择，看看结果会怎样改变。' },
    ],
    closing: '这两个交互一起，把一次选择变成反思其他做法的机会。',
    images: [
      { key: 'replay-timeline', caption: '决策回放——走过的路线，之后的阶段标记为“Not reached”', alt: '揭示页面，时间线上有三个决定，均标记为“Not reached”，并附有转折点说明。' },
      { key: 'rewind-two-paths', caption: '决策回溯——从同一个转折点出发的两条路线', alt: '决策回溯页面，从通话中的同一时刻出发，对比来电者控制的路线与独立路线。' },
    ],
  },

  routes: {
    eyebrow: '08 / 基础与进阶',
    title: '不同的起点，同一个目标。',
    body: [
      '情境 1 结束后，学习者会根据自己是否选择了 Step Out，进入两条学习路线中的一条。',
      '这是一条简单、透明、基于行为的分流规则。它只是教学的起点，并不是对知识、能力或防诈能力的有效测量。',
    ],
    foundation: {
      label: '基础学习',
      when: '如果学习者没有 Step Out',
      text: [
        '基础学习帮助用户建立一套实用的安全步骤：识别压力、质疑可信度、独立核实。',
        '它介绍核心课程，帮助用户理解为什么姓名、证件号和看似官方的细节都不能证明身份。简短的练习让用户应用这些想法并获得反馈。',
      ],
      images: [
        { key: 'foundation-routine', caption: '建立一套实用的安全步骤', alt: '基础学习页面，列出建立安全步骤的课程。' },
        { key: 'foundation-identity', caption: '知道你的名字，不能证明对方是谁', alt: '基础课程页面，解释个人信息不能证明身份。' },
        { key: 'foundation-practice', caption: 'A / B / C / D 选择练习', alt: '基础练习题：一条声称学校账户将被限制的消息，下方有四个答案。' },
      ],
    },
    advanced: {
      label: '进阶学习',
      when: '如果学习者选择了 Step Out',
      text: [
        '进阶学习探讨可信的“证据”是如何被制造的、谁控制着信息来源，以及可以在哪里独立核实信息。',
        '用户会比较来电者控制的证据，与通过自己发起的渠道获得的信息；也会回到之前的转折点，比较继续留在通话中或 Step Out 可能带来的不同结果。进阶路线最后以一段简短的“Did You Know?”回顾作结。',
      ],
      images: [
        { key: 'advanced-appearances', caption: '看穿官方的外表', alt: '进阶页面，列出关于可信联系如何被构建的模块。' },
        { key: 'advanced-source', caption: '谁控制着信息来源？', alt: '进阶模块，对比通话中收到的内容与学习者可以采取的步骤。' },
      ],
    },
    shared: '两条路线的目的，是给学习者一个合适的起点，而不是永久地把他们标记为新手或高手。',
  },

  xray: {
    eyebrow: '09 / 来源分析',
    title: '看穿外表，找出谁在控制证据。',
    body: [
      '一份看似官方的文件、一个员工编号或一个电话号码，都能让说法显得可信。但外表本身并不能证明身份。',
      'Verification X-Ray（核实透视）帮助用户检查信息从哪里来，以及谁控制着用来核实它的渠道。',
    ],
    defs: [
      { k: '来电者控制的信息', v: '由提出说法的人提供的细节、文件、电话号码或联系人。' },
      { k: '独立获取的信息', v: '学习者自己另外找到的联系渠道或来源，不依赖来电者提供的任何细节。' },
    ],
    after: '可展开的证据卡片、标签和对比鲜明的视觉处理，让两者的差别一目了然。',
    question: '我是在独立核实这个说法，还是在用我正要核实的那个人提供的信息？',
    image: { key: 'xray-compare', caption: 'Verification X-Ray——路线 A（来电者控制）与路线 B（独立）并列', alt: '两列可展开的证据卡片：路线 A 为来电者控制（原来电者、参考编号、所谓的主管、来电者提供的链接），路线 B 为独立路线（Step Out、自己找到机构、官方渠道、核实说法）。' },
  },

  feedback: {
    eyebrow: '10 / 学习设计',
    title: '每一个选择，都值得一个解释。',
    body: [
      '早期的活动只有较短的解释。用户测试显示，一些参与者需要更多帮助，才能理解离开通话之后该做什么，以及为什么一个看似可信的细节不足以证明身份。',
      '最终设计把答案反馈扩展为四层：',
    ],
    layers: [
      { k: '为什么这个选择看起来合理', v: '承认为什么有人会选它。' },
      { k: '缺少了什么', v: '指出哪些信息还没有被独立确认。' },
      { k: '可能的后果', v: '说明如果学习者沿着这条路走下去，可能会发生什么。' },
      { k: '更安全的下一步', v: '把解释和学习者可以采取的行动联系起来。' },
    ],
    closing: '这种结构避免把每个选择都简单地判为对或错，帮助用户理解更安全做法背后的理由，包括一个选项为什么一开始看起来很合理。',
    images: [
      { key: 'feedback-layers', caption: '一个真实答案上的四层反馈', alt: '四行反馈：为什么看起来合理、缺少了什么、可能的后果，以及高亮的更安全的下一步。' },
      { key: 'after-feedback', caption: '情境中的答案反馈——“Open the link and sign in”', alt: '最终原型页面：左侧是练习消息，右侧是对答案“Open the link and sign in”的详细解释。' },
    ],
  },

  scenario2: {
    eyebrow: '11 / 迁移',
    title: '离开可疑的联系，不代表无视真实的问题。',
    body: [
      '学习体验在一个不同的机构情境中继续。第二个情境是一封与学校相关的通知，要求用户再次运用同样的核实方法。',
      '这一点很重要：安全的行为不应该是自动忽略所有陌生消息。真实的学校问题可能仍需要处理。学习者需要先通过独立获取的渠道确认消息是否真实，再决定怎么做。',
      '这个情境强化了“离开未经核实的联系”与“解决背后真实问题”之间的区别。',
    ],
    practiseTitle: '学习者练习的内容',
    practise: [
      '在新的情境中应用同一套步骤。',
      '检查信息来源是否可以独立访问。',
      '区分真实的机构问题与未经核实的请求。',
      '在离开最初的联系之后，判断哪些事情仍需要处理。',
    ],
    images: [
      { key: 's2-notice', caption: '情境 2——一封虚构的“Student Administration”邮件', alt: '模拟邮件，要求学生检查注册和学费状态，下方有四个应对选项。' },
      { key: 's2-decision', caption: '一条关于学费的后续短信', alt: '关于学费付款的模拟短信，选项中包括自己独立打开学生门户。' },
      { key: 's2-lookback', caption: '回顾本次学习', alt: '学习回顾页面，显示学习者的选择和一个四道题的快速检查。' },
    ],
  },

  future: {
    eyebrow: '12 / 持续练习',
    title: '更安全的应对，是值得反复练习的习惯。',
    body: [
      '诈骗的形式会随时间变化。一次学习可以介绍一个有用的方法，但用户需要在不同情境中反复运用它。',
      '因此 Scam Ready 设计了后续学习的方向：用户回来体验简短的新剧集，练习同样的决策过程，并复习学过的技能。',
    ],
    loop: ['新剧集', '做出决定', '回顾', '巩固技能', '之后再回来'],
    caveat: '当前原型展示的是这个方向，并不是会自动发布新情境或定时发送提醒的在线服务；之后的情境（例如租房联系）只是提议，尚未制作。',
    image: { key: 'future-episode', caption: '后续学习——原型中提议的剧集列表', alt: '标题为“A new everyday situation is available.”的页面，列出若干剧集，部分已完成，部分即将推出。' },
  },

  development: {
    eyebrow: '13 / 从概念到最终原型',
    title: '体验在迭代中变得越来越清晰。',
    body: [
      'Scam Ready 从早期的概念探索发展为一个有分支的交互原型。Crazy 8s 和身体风暴（bodystorming）帮助团队探索人们在压力下会如何做决定。',
      '早期方向结合了情境式准备、质疑可信度，以及核实与求助路径。导师的反馈帮助我们把第一个情境聚焦在冒充权威上。',
      '团队加入了通话结束后的选择，以及与每个选择对应的决定时间线，之后是引导式的应对活动。用户测试则暴露出一个缺口：人们不太清楚离开对话之后该做什么。',
    ],
    sketch: { key: 'crazy-8s', caption: '早期概念发展中的 Crazy 8s 草图', alt: '一组粗略的手绘 Crazy 8s 草图，画的是手机界面和流程。' },
    changesTitle: '改了什么',
    changes: [
      { before: '最初的决定时间线之后，是一段所有人共用的引导流程。有些用户不清楚“Step Out”是什么意思、接下来该做什么。', after: '更清晰的基础与进阶路线把第一个情境和后续学习连接起来。路线根据学习者是否 Step Out 来决定，完成基础学习的用户也可以进入进阶。', topic: '学习路线' },
      { before: '简短的解释和密集的内容，并不总能帮助用户理解为什么某个选择更安全。', after: '每个答案都有更完整、针对该选择的反馈：为什么它看起来合理、缺少了什么、可能的后果，以及更安全的下一步。', topic: '答案反馈' },
      { before: '原型把来电者提供的电话号码与独立找到的官方联系方式做了对比，但个人信息和看似官方的参考资料仍会增加信任。', after: 'Verification X-Ray 通过比较来电者控制的信息与自己独立发起的渠道，让证据的来源更加清楚。', topic: '核实' },
    ],
    compare: {
      before: { key: 'before-guided', caption: '早期原型 · 第 8 周——引导式学习', alt: '早期原型页面“What was happening in this call?”，有三张简短的解释卡片。' },
      after: { key: 'after-feedback', caption: '最终修改设计——针对答案的反馈', alt: '最终原型页面，显示扩展后的针对答案的反馈。' },
    },
    untested: '最终修改后的设计尚未进行用户测试。',
  },

  testing: {
    eyebrow: '14 / 评估',
    title: '测试显示，离开通话并不总是决定的结束。',
    body: [
      '团队在第 8 周的展会上，用一个早期 Figma 原型进行了十场一对一的有主持测试，参与者主要是国际学生。',
      '参与者应对一通模拟的移民局来电，完成学习活动，并尝试了一个学校 IT 支持的情境。团队观察了他们的应对选择、对 Step Out 的理解、核实路径，以及向主持人求助的情况。',
    ],
    stats: [
      { v: '10', k: '参与者', d: '一对一有主持的 Figma 测试' },
      { v: '52.75', k: '平均 SUS / 100', d: '分数范围 20 至 90' },
      { v: '4 · 3 · 3', k: '主持人协助', d: '无 / 少量 / 大量协助' },
    ],
    susNote: 'SUS 衡量的是感知可用性，不是学习成绩，也不能证明 Scam Ready 提高了现实中的防诈能力。',
    image: { key: 'early-call', caption: '早期原型（第 8 周测试）——意外来电', alt: '早期原型页面：来自未知号码的模拟来电，旁边是“What would you do next?”，选项为 Continue、Ask how they got this information 和 Step out。' },
    revealedTitle: '测试揭示了什么',
    revealed: [
      { k: '01 — 离开之后需要下一步', v: '一位参与者（P01）把 Step Out 理解为挂电话；另一位（P04）希望得到更清楚的离开后指引。' },
      { k: '02 — 让学习内容更易读', v: '参与者认为一些解释太短（P01），或者太密集、太集中（P02、P08）。' },
      { k: '03 — 质疑信息来源', v: '看似官方的细节让好几位参与者觉得更可信（P02、P05、P06）。' },
    ],
    closing: '这些发现为最终迭代提供了依据。',
  },

  response: {
    eyebrow: '15 / 设计回应',
    title: '从观察到的困难，到更清晰的交互。',
    rows: [
      { found: '离开通话有时被理解为只是挂电话。', response: '把通话后的反思与独立核实和下一步行动联系起来。' },
      { found: '对一些用户来说，解释太短或太密集。', response: '使用更聚焦的练习和更完整的针对答案的反馈。' },
      { found: '看似官方的细节增加了信任。', response: '用 Verification X-Ray 和决策回放来比较证据来源和不同做法。' },
    ],
    stillTitle: '仍需测试的问题',
    still: [
      '学生能否在没有帮助的情况下离开联系，并找到另一个独立的核实渠道？',
      '学生能否解释为什么某个选择更安全，并在新情境中运用反馈？',
      '学生能否区分来电者控制的证据与自己独立获取的信息？',
    ],
    note: '最终设计回应了早期测试的发现，但这些修改后的交互仍需要用户评估。',
  },

  impact: {
    eyebrow: '16 / 反思与评估',
    title: '一个有用的学习系统——还有更多需要证明。',
    body: 'Scam Ready 让学生在面对真实的施压对话之前，有一个地方可以预演决定。它的价值在于一套可以重复使用的方法：识别压力、离开联系、找到独立渠道，再决定哪些事情需要处理。',
    built: [
      '一个完整的互动学习概念。',
      '先做决定、再解释的情境式设计。',
      '决策回放和对其他路线的反思。',
      '基础与进阶两条学习路线。',
      '一种比较来电者控制的证据与独立获取的证据的可视化方法。',
      '第二个情境，强化学习在第一通电话之外的迁移。',
    ],
    notYet: [
      '最终设计能减少现实中的诈骗受害。',
      '用户能长期记住所学内容。',
      '用户能把方法独立迁移到每一个新情境。',
      '最终修改后的交互比早期原型更易用。',
      '仅凭 Step Out 行为就能完整衡量知识或能力。',
    ],
    next: [
      { k: '01 — 独立使用', v: '请国际学生在没有主持人引导的情况下完成修改后的流程，观察任务完成情况、不清楚的标签、阅读困难，以及反馈是否被理解。' },
      { k: '02 — 学习迁移', v: '给学习者新的可疑和真实的机构消息，请他们解释自己的判断，并展示如何找到独立渠道。' },
      { k: '03 — 长期保持', v: '隔一段时间后邀请学习者回来尝试一个新的日常情境，例如租房联系，观察他们是否在没有提示的情况下仍然使用核实方法。' },
    ],
  },

  contribution: {
    eyebrow: '17 / 团队合作',
    title: '一个通过研究和原型共同塑造的团队项目。',
    body: 'Scam Ready 由一个四人团队完成。本页介绍的研究、决定和原型都是团队的共同成果。',
    mine: [
      { k: '研究与问题定义', v: en.contribution.mine[0].v },
      { k: '交互流程与学习逻辑', v: en.contribution.mine[1].v },
      { k: 'Figma 原型与动效设计', v: en.contribution.mine[2].v },
      { k: '测试、迭代与文档', v: en.contribution.mine[3].v },
    ],
  },

  references: en.references,
  researchData: '团队问卷与访谈研究，DECO3200，2026（项目内部资料，未公开发表）。',
  ai: '在项目开发和报告撰写过程中，团队使用 Grammarly 检查语法、提升表达的清晰度。ChatGPT 被用来根据团队原创的研究发现、设计洞察和概念方向，协助生成部分视觉素材和概念图；也被用来为 Figma 中的交互与动效设计提供技术指导和建议，包括动画过渡和原型制作技巧。这些工具支持了团队的工作，但并没有取代独立研究、批判性分析和设计判断。所有研究解读、设计决定和最终成果都经过团队审阅、修改和确认。',
};

export const copy: Record<Lang, Copy> = { en, zh };

/** Short interface labels used by the view. */
export const labels: Record<Lang, Record<string, string>> = {
  en: {
    breadcrumb: 'Breadcrumb', designQuestion: 'The design question', note: 'Note', evidence: 'Evidence', fictional: 'Fictional',
    s1Screens: 'Scenario 1 screens', s2Screens: 'Scenario 2 screens', prevScreen: 'Previous screen', nextScreen: 'Next screen',
    routine: 'Pause → Step Out → Verify → Decide', proposed: 'Proposed', earlier: 'Earlier prototype', final: 'Final revised design',
    notTested: 'Not yet tested', sus: 'SUS', revealed: 'What testing revealed', designResponse: 'Design response',
    built: 'Built', notYet: 'Not yet established', nextEval: 'Next evaluation', team: 'Team:', mine: 'My contribution',
    references: 'References', ai: 'AI acknowledgement', projectNav: 'Project navigation',
  },
  zh: {
    breadcrumb: '面包屑导航', designQuestion: '设计问题', note: '说明', evidence: '证据', fictional: '虚构',
    s1Screens: '情境 1 界面', s2Screens: '情境 2 界面', prevScreen: '上一张', nextScreen: '下一张',
    routine: '停一下 → 抽身离开 → 核实 → 决定', proposed: '提议', earlier: '早期原型', final: '最终修改设计',
    notTested: '尚未测试', sus: 'SUS', revealed: '测试揭示了什么', designResponse: '设计回应',
    built: '已完成', notYet: '尚未证明', nextEval: '下一步评估', team: '团队：', mine: '我的贡献',
    references: '参考文献', ai: 'AI 使用说明', projectNav: '项目导航',
  },
};
