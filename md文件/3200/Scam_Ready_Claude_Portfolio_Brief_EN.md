# SCAM READY --- Claude Portfolio Website Brief

## Complete Case-Study Copy, Figma Embed & Implementation Instructions

**Project:** Scam Ready\
**Descriptor:** From Scam Awareness to Safer Decisions\
**Subtitle:** Interactive learning for international students in
Australia\
**Course:** DECO3200 --- Interactive Studio\
**Project type:** Team project · UX / Interaction Design · Behavioural
Learning · User Research · Interactive Prototyping\
**Website copy:** English\
**Purpose:** Build the Scam Ready project detail page in my existing
personal portfolio website.

------------------------------------------------------------------------

# 1. Instructions for Claude --- Read Before Building

Read this entire brief and inspect the supplied source PDF before making
changes.

## Source document

`DECO3200_A4_ScamReady_FinalDesignSolution (1).pdf`

This is the 24-page final design solution. Use it as the main source for
the project rationale, research findings, design opportunity, final
product principles, learning journey, scenario flow, design development,
user testing, iteration, limitations, references and AI acknowledgement.

Use the Figma prototype URL and embed code in Section 5. It is the live
interactive artefact and should be embedded directly into the page.

If the PDF or Figma prototype is inaccessible, report the issue. Do not
invent missing screens, interactions, research results or assets.

## Inspect my existing website first

1.  Inspect the repository, framework, routes, navigation, typography,
    spacing, colour tokens and responsive behaviour.
2.  Inspect the existing Home page and Cocoa Reserve project page.
3.  Reuse the current portfolio design system. Add a new project detail
    page; do not redesign the whole website.
4.  Preserve all existing routes and pages.
5.  Use the existing route convention. Suggested route:
    `/work/scam-ready/`.
6.  Keep the page copy in English.
7.  Use real project visuals and the actual Figma prototype. Do not
    replace the prototype with a static mock-up.

## Project positioning

Scam Ready is **not simply a scam-detection website or a collection of
anti-scam tips**. It is a behavioural learning system that helps
international students practise safer decisions when they receive
unfamiliar, apparently official communication.

The central idea is:

> **Learn through decisions, not simply through answers.**

The transferable response routine is:

# PAUSE → STEP OUT → VERIFY → DECIDE

The project moves from general scam awareness towards contextual
understanding, independent verification and repeatable safer decisions.

## Team-project accuracy

This is a team project. The supplied PDF lists four team members:
**Linyi Shao, Rachel Liu, Sitan Ding and Sen Yan**. Do not publish
student IDs. Do not present every team decision, research finding or
design output as my individual work.

For the personal contribution section, do not invent my exact division
of labour. Use the editable contribution placeholder in Section 4.17 and
ask me to confirm it before publishing if the repository does not
document it.

------------------------------------------------------------------------

# 2. The Story the Website Must Tell

The case study should tell this story:

1.  International students can receive convincing calls or messages from
    people claiming to represent trusted institutions.
2.  Familiar details, personal information, official-looking documents
    and urgency can make an unverified contact seem credible.
3.  General awareness advice does not necessarily prepare someone to
    make a safe decision in a specific, high-pressure situation.
4.  Scam Ready lets learners experience an unfamiliar scenario before
    being told what to think.
5.  The prototype replays their decisions, then guides them into
    Foundation or Advanced learning.
6.  Learners examine who controls the evidence, practise independent
    verification and apply the same routine in a different scenario.
7.  Earlier prototype testing exposed gaps in understanding. Those
    findings informed the final redesign.
8.  The final design has a clear intended learning value, but the
    revised experience still needs further evaluation. Do not claim
    proven real-world scam prevention.

## Personal motivation --- keep separate from research evidence

My own experiences helped me understand why this problem matters. These
are personal experiences, **not research participants or survey
findings**. Include them in a short section such as "Why this matters to
me". Keep the tone factual and do not sensationalise them.

### Experience 01 --- An impersonation call after arriving in Australia

About two years ago, shortly after arriving in Australia, I received a
call from someone claiming to represent Australian immigration. The call
began with an automated language selection asking me to press 1 for
English or 2 for Chinese. I was then connected to someone claiming to be
Australian border police.

The caller referred to details about my travel and said my personal
information had been leaked. They also claimed that my SIM card had
appeared near Shanghai. Instead of relying on the phone number or
information supplied by the caller, I independently found a publicly
listed Shanghai police contact number and called to check. I was told
that it was a scam. I ignored the later calls.

### Experience 02 --- A more elaborate impersonation chain

At the end of a later semester, I received another call, initially
presented as a health-insurance-related matter and then as a contact
from Queensland Health. The caller referred to my travel details and
claimed that my SIM card had appeared near Shanghai Pudong Airport.

The call was transferred to someone claiming to be Shanghai police. They
accused me of helping with money laundering, showed what appeared to be
government documents, instructed me to isolate myself and threatened
deportation. Several days later, they asked me to transfer money. I
contacted the real Shanghai police through an independently found number
and confirmed that the situation was fraudulent.

### What these experiences contributed

Both experiences involved a similar pattern: an unfamiliar contact used
institutional authority, personal details and increasingly serious
claims to create credibility and pressure. The important response was
not to decide based only on how convincing the caller sounded. It was to
step out of the interaction and verify the claim independently.

**Important:** These two experiences are personal project motivation,
not team research data. Do not reproduce private phone numbers, personal
documents or identifying details.

------------------------------------------------------------------------

# 3. Visual Direction

Keep the existing personal portfolio's light, minimal visual language.
Scam Ready should feel like an editorial UX case study: clear,
structured, research-led and interactive.

Suggested visual character: - Warm white or very light neutral
background. - Deep charcoal typography. - Restrained desaturated teal /
blue-green accents. - Muted amber for attention and uncertainty. - Fine
dividers, clear labels and spacious editorial layouts. - Large, legible
screenshots from the final Figma prototype. - Small diagrams that
explain decision logic.

Suggested tokens (adapt to the existing website):

``` css
:root {
  --scam-bg: #F7F7F4;
  --scam-surface: #FFFFFF;
  --scam-text: #202726;
  --scam-muted: #6E7774;
  --scam-primary: #315D5A;
  --scam-accent: #C28B5A;
  --scam-border: #DDE2DE;
  --scam-soft: #EEF2EF;
  --scam-dark: #172321;
}
```

## Portfolio page versus product UI

Keep these visual layers distinct: - **Portfolio page:** light editorial
case-study design, calm typography, whitespace and clear storytelling. -
**Scam Ready prototype:** show the actual interface from Figma,
preserving its real UI, screens and interactions.

Do not redesign the Figma interface while building the portfolio page.
The website is presenting the product, not replacing it.

## Image rules

-   Use screenshots from the supplied final Figma prototype wherever
    possible.
-   Use the supplied A4 PDF pages as visual evidence and source
    references.
-   Prefer individual high-resolution screenshots or exports over
    full-page PDF screenshots.
-   Do not generate fake user research, testing photographs, prototype
    screens or institutional documents.
-   Do not use real government or university logos in a way that makes
    simulated scam content look authentic.
-   Mark scenario content as fictional / simulated where appropriate.
-   Caption whether a screenshot shows the early prototype, tested
    prototype or final revised design.

------------------------------------------------------------------------

# 4. Complete English Website Copy

Use the following as the first-draft copy on the website. Adjust line
breaks and layouts, but preserve the meaning, evidence and limitations.

## 4.1 HERO

**Eyebrow**\
DECO3200 · UX / INTERACTION DESIGN · TEAM PROJECT

# SCAM READY

## From Scam Awareness to Safer Decisions

**Interactive learning for international students in Australia.**

A convincing call or message can make an unfamiliar situation feel
official. Scam Ready helps students practise what to do when they are
not sure who is contacting them.

Rather than simply teaching people to recognise common scam signs, the
project turns safer decision-making into something they can experience,
question and practise.

**Primary button:** Explore the Prototype\
**Secondary button:** Discover the Design Process

**Project details** - Course: DECO3200 --- Interactive Studio - Project
type: Team project - Focus: UX design, behavioural learning, user
research and interactive prototyping - Platform: Web-based interactive
prototype - Tools: Figma, FigJam and supporting design tools - Team:
Linyi Shao, Rachel Liu, Sitan Ding and Sen Yan

**Hero visual:** Use a strong final prototype composition. Prefer a
combination of the unexpected-call screen, a decision/replay screen and
the Verification X-Ray interface. Do not use generic stock phone imagery
or a collage of tiny screens.

## 4.2 THE CHALLENGE

**01 / THE PROBLEM**

# When a familiar institution becomes an unfamiliar risk.

Fraud remains a significant issue in Australia. Across Australian
reporting channels, **481,523 scam reports** were recorded in 2025, with
reported economic losses of **A\$2.18 billion** --- an increase of 7.8%
compared with 2024 (Australian Competition and Consumer Commission,
2026).

International students may encounter scams involving education,
accommodation, employment and visas. A caller may claim to represent an
authority, refer to personal details, present official-looking evidence
or create urgency to make a request seem genuine.

The difficult moment is not always recognising an obviously suspicious
message. It is deciding what to do when a contact appears credible, but
its identity has not been independently verified.

### How scammers build credibility

**Authority impersonation**\
A caller claims to represent a trusted institution or official service.

**Personal details and false evidence**\
Information about a person's travel, study or identity can make an
unfamiliar contact seem convincing.

**Urgency and pressure**\
Serious allegations, deadlines or threats can push people towards acting
before checking.

**The design question**\
How can students respond safely when an institutional claim appears
credible, but its identity remains unverified?

**Visual direction:** Use a simple diagram: Authority claim →
Credibility cues → Urgency and pressure. Cite ACCC and Scamwatch
references in the research section.

## 4.3 PERSONAL MOTIVATION

**02 / WHY THIS MATTERS TO ME**

# I had experienced how convincing these calls could sound.

I had received two calls that used the names of Australian institutions
and law-enforcement agencies to create a sense of authority. In both
situations, the callers referred to personal travel details and tried to
make the claims feel urgent.

The first time, I independently contacted a publicly listed police
number and found out that the call was fraudulent. The second situation
was more elaborate: it involved several supposed institutions, fake
documents, serious accusations and eventually a request for money.
Again, independent verification helped me confirm that it was a scam.

These experiences made one thing clear to me: knowing that scams exist
is not always enough. In a stressful moment, people need a practical way
to step away from the pressure and check the claim through a source the
caller does not control.

**This is personal project motivation, not a substitute for the team's
research evidence.**

**Visual direction:** Keep this understated. Use a short two-stage
timeline or a text-led layout. Do not recreate fake call logs or
government documents.

## 4.4 RESEARCH & INSIGHTS

**03 / UNDERSTANDING THE USERS**

# Awareness does not always translate into confident action.

The team combined survey responses, interviews and secondary research to
understand how international students interpret institutional
communication and decide whether to trust it.

### What we found

**19 of 20 respondents** had received scam advice, yet **10** reported
low familiarity with Australian institutional communication. Nine of
those ten had already received scam advice.

This suggested that receiving general advice does not necessarily
prepare someone for an unfamiliar institutional situation.

**8 respondents** considered personal information a credibility cue,
while **5** only became suspicious when money was requested.

Apparently convincing details can be mistaken for proof of identity.

In a separate survey of **24 students**, only **2** recalled specific
university safety advice, while **19** were unsure where to find
official guidance.

Knowing that advice exists is different from being able to locate and
apply it in the moment.

### Three research insights

**01 --- Awareness ≠ Understanding**\
General scam advice may not provide enough preparation for unfamiliar
Australian institutional contexts.

**02 --- Credibility ≠ Identity**\
Personal details and official-looking information can feel convincing
without independently proving who is contacting someone.

**03 --- Guidance ≠ Accessibility**\
Students need to know how to locate and use trusted verification
channels, not simply be told to be careful.

### Design opportunity

Support international students in moving beyond general scam awareness
towards contextual understanding, independent verification and
repeatable safer decisions.

### How Might We...

> How can we assist international students in developing and applying
> anti-fraud preparedness skills tailored to specific situations,
> enabling them to identify suspicious contacts earlier, independently
> verify their authenticity, and feel more confident taking appropriate
> actions?

**Evidence note:** The 20-response and 24-response survey datasets are
separate. Do not combine them into one sample. Describe them as
exploratory findings from the team's research, not population-level
statistics.

**Visual direction:** Use three readable insight blocks with actual
figures. Avoid tiny charts or decorative percentages without context.

## 4.5 FROM AWARENESS TO DECISION PRACTICE

**04 / DESIGN OPPORTUNITY**

# The goal was not to tell users what to think. It was to help them practise what to do.

The research suggested a gap between knowing that scams exist and being
prepared to respond when a specific contact feels convincing.

We therefore moved towards scenario-based learning. Instead of starting
with a list of warning signs, the experience begins with a fictional
situation and lets users make decisions before the learning content is
revealed.

### Four design principles

**01 --- Experience Before Explanation**\
A fictional incoming call invites natural choices before the scam
tactics are revealed.

**02 --- Behaviour, Not a Score**\
Decision Replay helps users review their own choices and understand
alternative actions. The learning route is recommended based on their
Step Out behaviour, rather than presented as a score of their ability.

**03 --- Safe Exit ≠ Safe Resolution**\
Leaving the conversation is only the first step. Users still need to
verify the claim independently.

**04 --- Decisions Become Learning**\
Choice-specific explanations and new scenarios turn decisions into
opportunities for reflection and practice.

**Visual direction:** Use a four-part editorial layout, with one concise
principle and one small supporting UI crop or icon per principle.

## 4.6 THE FINAL SOLUTION

**05 / THE EXPERIENCE**

# A learning cycle built around real decisions.

Scam Ready is a behavioural learning system designed to help
international students respond more safely to uncertain institutional
communication.

The final design guides learners through a complete cycle:

**Experience → Reflect → Learn → Apply**

### The core routine

# PAUSE → STEP OUT → VERIFY → DECIDE

-   **Pause:** Recognise pressure and avoid reacting immediately.
-   **Step Out:** End the unsafe interaction and create space to think.
-   **Verify:** Find an official contact route independently, rather
    than using details supplied by the caller.
-   **Decide:** Work out what needs to happen next, including whether a
    genuine issue still needs attention.

The goal is not to teach students to ignore every unfamiliar call. It is
to help them distinguish between an unverified contact and a real issue
that should be checked through an independent channel.

**Visual direction:** Create a clear horizontal flow with one screenshot
or cropped interface element per stage.

## 4.7 SCENARIO 1 --- THE FIRST DECISION

**06 / EXPERIENCE BEFORE EXPLANATION**

# An unexpected call. What would you do?

The first scenario introduces an unexpected authority-style call.
Learners are not immediately told whether the contact is genuine or
fraudulent. They encounter the situation and choose how to respond.

The caller gradually introduces credibility cues and pressure. Users can
ask questions, continue the interaction or Step Out. The simulation
stops before sensitive information is shared.

The purpose is to let users experience uncertainty before moving into
explanation.

**01 --- Experience uncertainty**\
The user receives an unexpected call and decides how to respond without
being told which option is correct.

**02 --- See the outcome**\
The simulation reveals the consequences of the selected path and stops
before sensitive information is shared.

**03 --- Reflect on decisions**\
The user reviews their choices before moving into the learning stage.

**Important:** This is a fictional learning scenario, not a real
immigration, police or government contact. Do not make the prototype
appear to be an authentic government service.

**Visual direction:** Use large screenshots from the final Figma
prototype showing the incoming call, decision options and outcome.
Annotate the actual UI rather than redrawing it as a generic phone
mock-up.

## 4.8 DECISION REPLAY & DECISION REWIND

**07 / REFLECTION**

# See the path you took --- and the choices you did not reach.

After Scenario 1, Scam Ready shows the learner how their decisions
shaped the simulated interaction.

Decision Replay makes the route visible. It helps users revisit the
stages they reached, understand where the interaction escalated and
reflect on the point at which they chose to leave or continue.

It is not a score. It is a way to make the learner's own decision
process easier to understand.

### Two related interactions

**Decision Replay --- Review the actual path**\
Shows the steps taken along the simulated route. It helps the learner
see which choices they made and which stages they reached.

**Decision Rewind --- Compare an alternative**\
Returns to an earlier decision point so the learner can compare the
original action with another possible choice and inspect how the outcome
might have changed.

Together, these interactions turn a single choice into an opportunity to
reflect on alternative actions.

**Naming rule:** Use **Decision Replay** for the overall review feature.
Use **Decision Rewind** only for the specific interaction that revisits
a previous decision and compares an alternative. Do not use the two
names interchangeably.

**Visual direction:** Use the actual decision timeline and a
side-by-side comparison of original and alternative paths. Mark
unreached stages as "Not reached" where the prototype shows them.

## 4.9 PERSONALISED LEARNING

**08 / FOUNDATION & ADVANCED**

# Different starting points. One shared goal.

After Scenario 1, the learner enters one of two learning routes based on
whether they chose to Step Out.

This is a simple, transparent behaviour-based routing rule. It is a
teaching starting point, not a validated measurement of knowledge,
competence or scam resistance.

### Foundation Learning --- If the learner did not Step Out

Foundation builds a practical safety routine for recognising pressure,
questioning credibility and verifying independently.

It introduces the core lessons and helps users understand why names, IDs
and official-looking details are not proof of identity. Short practice
activities let users apply the ideas and receive feedback.

### Advanced Learning --- If the learner chose to Step Out

Advanced explores how convincing evidence is created, who controls the
source and where information can be verified independently.

Users compare caller-controlled evidence with information accessed
through a route they started themselves. They also return to an earlier
turning point to compare what might happen if they stay in the
interaction or Step Out.

The Advanced route concludes with a short "Did You Know?" recap before
learners continue.

### The shared routine

**PAUSE → STEP OUT → VERIFY → DECIDE**

The purpose of the two routes is to give learners a suitable starting
point, not to permanently label them as beginners or experts.

**Visual direction:** Use a branching diagram with Foundation and
Advanced as distinct routes. Show optional movement from Foundation into
Advanced if it exists in the final prototype. Do not use "Beginner" and
"Expert" as user labels.

## 4.10 VERIFICATION X-RAY

**09 / SOURCE ANALYSIS**

# Look beyond the appearance. Find out who controls the evidence.

An official-looking document, a staff ID or a phone number can make a
claim appear trustworthy. But appearance alone does not establish
identity.

Verification X-Ray helps users examine where the information comes from
and who controls the route used to verify it.

**Caller-controlled information**\
Details, documents, phone numbers or contacts supplied by the person
making the claim.

**Independently accessed information**\
A contact route or source the learner finds separately, without relying
on the details supplied by the caller.

Expandable evidence cards, labels and contrasting visual treatments help
make the difference visible.

> Am I checking the claim independently, or am I using information
> provided by the same person I am trying to verify?

**Visual direction:** Make Verification X-Ray one of the signature
visuals of the page. Use the actual Figma interface and crop the source
comparison large enough to read. Avoid replacing it with a generic
shield or magnifying-glass illustration.

## 4.11 ANSWER-SPECIFIC FEEDBACK

**10 / LEARNING DESIGN**

# Every choice deserves an explanation.

Earlier activities used shorter explanations. User testing showed that
some participants needed more help understanding what should happen
after leaving a call and why an apparently convincing detail was not
enough to prove identity.

The final design expands answer feedback into four layers:

1.  **Why the choice seems reasonable** --- acknowledge why someone
    might select it.
2.  **What is missing** --- identify the information that has not been
    independently established.
3.  **Possible consequence** --- explain what could happen if the
    learner continues along that path.
4.  **A safer next step** --- connect the explanation to an action the
    learner can take.

This structure avoids treating every choice as simply right or wrong. It
helps users understand the reasoning behind a safer response, including
when an option initially seems sensible.

**Visual direction:** Show one real A/B/C/D feedback example. Use a
compact annotation to identify the four layers. Do not fabricate answer
text that is not present in the final prototype.

## 4.12 APPLY IT AGAIN --- SCENARIO 2

**11 / TRANSFER**

# Leaving a suspicious contact does not mean ignoring a real issue.

The learning experience continues with a different institutional
context. The second scenario introduces a university-related notice and
asks users to apply the same verification strategy again.

This is important because safe behaviour should not mean automatically
dismissing every unfamiliar message. A real university issue may still
need attention. The learner needs to establish whether the message is
genuine through an independently accessed channel before deciding what
to do.

The scenario reinforces the difference between leaving an unverified
contact and resolving the underlying issue.

### What the learner practises

-   Applying the same routine in a new context.
-   Checking whether the source is independently accessible.
-   Distinguishing a genuine institutional issue from an unverified
    request.
-   Deciding what needs attention after leaving the original contact.

**Visual direction:** Use actual screenshots from the second scenario.
Show the initial notice, the decision point and the genuine issue /
verification outcome where available.

## 4.13 FUTURE LEARNING

**12 / CONTINUOUS PRACTICE**

# A safer response is a habit worth revisiting.

Scam situations change over time. A single learning session may
introduce a useful method, but users need opportunities to apply it in
different contexts.

Scam Ready therefore includes a future-learning direction in which users
return to short new episodes, practise the same decision process and
review the skills they have learned.

**New Episode → Make Decisions → Review → Refresh Skills → Return
Later**

The current prototype illustrates this continuing-learning direction. It
should not be described as an automated live service that publishes new
scenarios or sends scheduled notifications.

**Visual direction:** Use the future episode screen from Figma and a
simple loop diagram. If a rental or other later scenario is only a
future proposal, label it as proposed rather than a completed, validated
feature.

## 4.14 DESIGN DEVELOPMENT & ITERATION

**13 / FROM CONCEPT TO FINAL PROTOTYPE**

# The experience became clearer through iteration.

Scam Ready developed from early concept exploration into a branching
interactive prototype. Crazy 8s and bodystorming helped the team explore
how people might make decisions under pressure.

The early direction combined scenario-based preparation, credibility
questioning and a verification/support pathway. Tutor feedback then
helped narrow the first scenario towards authority impersonation.

The team added post-call choices and a decision timeline linked to
individual choices, followed by guided response activities. User testing
then highlighted gaps in understanding what should happen after leaving
the interaction.

### What changed

**Earlier direction**\
A shared guided sequence followed the initial decision timeline. Some
users were unclear about what "Step Out" meant and what they should do
next.

**Final direction**\
A clearer Foundation and Advanced route connects the first scenario with
further learning. The route begins with the learner's Step Out
behaviour, and Foundation users can also move into Advanced learning.

**Earlier feedback**\
Short explanations and dense content did not always help users
understand why a choice was safer.

**Final direction**\
Each answer has fuller, choice-specific feedback explaining why an
option seems reasonable, what is missing, its possible consequence and a
safer next step.

**Earlier verification activity**\
A supplied phone number was contrasted with an official contact found
independently, but personal details and official-looking references
could still increase trust.

**Final direction**\
Verification X-Ray makes the source of the evidence more visible by
comparing caller-controlled information with a route started
independently.

**Visual direction:** Use actual early and final interface screenshots
side by side. Label them accurately as "Earlier prototype" and "Final
revised design". Connect each change to the evidence that motivated it.

## 4.15 USER TESTING

**14 / EVALUATION**

# Testing showed that leaving the call was not always the end of the decision.

The team tested an earlier Figma prototype through ten individual
moderated sessions at the Week 8 fair, mainly with international
students.

Participants responded to a simulated immigration call, completed
learning activities and tried a university IT-support scenario. The team
observed response choices, understanding of Step Out, verification
routes and requests for moderator assistance.

### Testing snapshot

-   **10 participants** in individual moderated Figma sessions.
-   Mean System Usability Scale (SUS): **52.75 / 100**.
-   Scores ranged from **20 to 90**, indicating varied experiences.
-   Four sessions needed no assistance.
-   Three needed minor assistance.
-   Three needed significant assistance.

**Important:** SUS measures perceived usability. It is not a learning
score and does not prove that Scam Ready improves real-world scam
resistance.

### What testing revealed

**01 --- Leaving needs a next step**\
One participant described Step Out as hanging up. Another wanted clearer
guidance about what to do after leaving.

**02 --- Make learning readable**\
Participants found some explanations too short, dense or concentrated.

**03 --- Question the source**\
Official-looking details increased perceived credibility for several
participants.

These findings informed the final iteration.

**Visual direction:** Use the real testing summary, a clear SUS figure
and three finding cards. If participant quotes are shown, retain the
original participant labels and wording from the report. Do not invent
quotations.

## 4.16 FROM EVIDENCE TO REFINEMENT

**15 / DESIGN RESPONSE**

# From observed difficulties to clearer interactions.

  -----------------------------------------------------------------------
  What testing revealed               Design response
  ----------------------------------- -----------------------------------
  Leaving the call was sometimes      Link post-call reflection to
  understood as simply hanging up.    independent verification and a next
                                      action.

  Explanations were too short or      Use focused practice and fuller
  dense for some users.               answer-specific feedback.

  Official-looking details increased  Use Verification X-Ray and Decision
  trust.                              Replay to compare evidence sources
                                      and alternative actions.
  -----------------------------------------------------------------------

### What still needs to be tested

-   Can students leave the contact and locate a separate verification
    channel without help?
-   Can students explain why a choice is safer and use the feedback in a
    new situation?
-   Can students distinguish caller-controlled evidence from information
    they accessed independently?

**Evidence note:** The final redesign responds to earlier testing
findings, but these revised interactions still require user evaluation.
Do not describe them as already proven successful.

## 4.17 IMPACT, LIMITATIONS & NEXT STEPS

**16 / REFLECTION & EVALUATION**

# A useful learning system --- with more to prove.

Scam Ready gives students a place to rehearse decisions before facing a
real pressured conversation. Its intended value is a repeatable method:
recognise pressure, leave the contact, find an independent channel and
decide what needs attention.

### What the project demonstrates

-   A complete interactive learning concept.
-   Scenario-based decisions before explanation.
-   Decision Replay and alternative-route reflection.
-   Foundation and Advanced learning pathways.
-   A visual method for comparing caller-controlled and independently
    accessed evidence.
-   A second scenario that reinforces transfer beyond the first call.

### What the project does not yet establish

-   That the final design reduces real-world scam victimisation.
-   That users retain the learning over time.
-   That users can transfer the method independently to every new
    context.
-   That the final revised interactions are more usable than the earlier
    prototype.
-   That Step Out behaviour alone is a complete measure of knowledge or
    ability.

### What we would test next

**01 --- Independent use**\
Ask international students to complete the revised flow without
moderator guidance. Observe task completion, unclear labels, reading
difficulties and whether the feedback is understood.

**02 --- Transfer of learning**\
Give learners new suspicious and genuine institutional messages. Ask
them to explain their reasoning and show how they locate an independent
channel.

**03 --- Retention over time**\
Invite learners back after a delay to try a new everyday situation, such
as rental contact. Observe whether they still use the verification
method without prompts.

**Visual direction:** Use three columns: "Built", "Not yet established"
and "Next evaluation". Make the distinction between intended value and
demonstrated impact explicit.

## 4.18 MY CONTRIBUTION

**17 / TEAMWORK**

# A collaborative project shaped through research and prototyping.

Scam Ready was developed by a four-person team. The portfolio page
should acknowledge the shared nature of the work and clearly distinguish
my contribution from the team's collective output.

**Team:** Linyi Shao · Rachel Liu · Sitan Ding · Sen Yan

**My contribution:** Do not invent or assume a full list of
responsibilities. Check the repository, project files or my confirmed
notes. If the exact contribution is not documented, leave an editable
placeholder and ask me to confirm before publishing.

Suggested editable structure: - Research and problem framing:
`[confirm individual contribution]` - Interaction flow and learning
logic: `[confirm individual contribution]` - Figma prototype and motion
design: `[confirm individual contribution]` - Testing, iteration and
documentation: `[confirm individual contribution]`

Do not imply that I independently completed all team research or
authored the entire product.

## 4.19 CREDITS & REFERENCES

**18 / SOURCES**

Use these references in a readable format. Keep in-text citations close
to relevant claims.

Australian Competition and Consumer Commission. (2026). *Targeting
scams: Report of the National Anti-Scam Centre on scams data and
activity 2025.*\
https://www.accc.gov.au/system/files/targeting-scams-report-2025.pdf

University of Technology Sydney. (n.d.). *Scam awareness for
international students.*\
https://www.uts.edu.au/for-students/current-students/managing-your-course/using-uts-systems/cybersecurity/scam-awareness-international-students

Scamwatch. (2026, March 26). *Phone scams.*\
https://www.scamwatch.gov.au/types-of-scams/phone-scams

Sturman, D., Bell, E. A., Auton, J. C., Breakey, G. R., & Wiggins, M. W.
(2024). The roles of phishing knowledge, cue utilization, and decision
styles in phishing email detection. *Applied Ergonomics, 119*, 104309.\
https://doi.org/10.1016/j.apergo.2024.104309

Stajano, F. (2010). *Understanding scam victims: Seven principles for
systems security.* USENIX.\
https://www.usenix.org/conference/usenixsecurity10/understanding-scam-victims-seven-principles-systems-security

Scamwatch. (2026, June 5). *Stop. Check. Protect.*\
https://www.scamwatch.gov.au/stop-check-protect

Kumaraguru, P., Rhee, Y., Acquisti, A., Cranor, L. F., Hong, J., &
Nunge, E. (2007). Protecting people from phishing. In *Proceedings of
the CHI Conference on Human Factors in Computing Systems*
(pp. 905--914).\
https://doi.org/10.1145/1240624.1240760

Shute, V. J. (2008). Focus on formative feedback. *Review of Educational
Research, 78*(1), 153--189.\
https://doi.org/10.3102/0034654307313795

Roediger, H. L., & Karpicke, H. D. (2006). Test-enhanced learning.
*Psychological Science, 17*(3), 249--255.\
https://doi.org/10.1111/j.1467-9280.2006.01693.x

**Research data references:** The team's survey response spreadsheet and
interview transcripts are internal project materials. Do not publish
private participant data or raw transcripts. If the public website needs
to cite these materials, use a privacy-safe description such as "Team
survey and interview research, DECO3200, 2026" rather than exposing
private Google Docs or Sheets links.

## 4.20 AI ACKNOWLEDGEMENT

Use a concise, accurate version based on the final report:

During the development of this project and the preparation of the
report, the team used Grammarly to review grammar, improve clarity and
refine written expression. ChatGPT was used to assist in generating
selected visual materials and concept images based on the team's
original research findings, design insights and concept direction. It
was also used to provide technical guidance and suggestions for
interaction and motion design in Figma, including animation transitions
and prototyping techniques. These tools supported the team's work but
did not replace independent research, critical analysis or design
judgement. All research interpretations, design decisions and final
outputs were reviewed, refined and approved by the team.

Do not claim that AI generated the team's original research findings or
independently made the final design decisions.

------------------------------------------------------------------------

# 5. Figma Interactive Prototype --- Embed This Exact Prototype

This is the final interactive prototype supplied by me. Embed it
directly into the project page.

## Direct prototype URL

https://www.figma.com/proto/fMPiMEP5QmqCmVa9cwCCva/DECO3200-prototype?node-id=1-1519&p=f&t=fQNaCMD6IZ0ixjvZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3998

## Exact embed code supplied by me

Preserve the supplied Figma embed URL and its query parameters:

``` html
<iframe
  style="border: 1px solid rgba(0, 0, 0, 0.1);"
  width="800"
  height="450"
  src="https://embed.figma.com/proto/fMPiMEP5QmqCmVa9cwCCva/DECO3200-prototype?node-id=1-1519&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3998&embed-host=share"
  allowfullscreen>
</iframe>
```

## Responsive implementation

Do not leave the iframe fixed at 800px wide. Make it responsive while
preserving the exact `src` URL.

``` html
<div class="figma-embed">
  <iframe
    title="Scam Ready — Interactive Figma Prototype"
    src="https://embed.figma.com/proto/fMPiMEP5QmqCmVa9cwCCva/DECO3200-prototype?node-id=1-1519&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3998&embed-host=share"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>
```

``` css
.figma-embed {
  width: 100%;
  height: min(82vh, 900px);
  min-height: 620px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  background: #fff;
}
.figma-embed iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
@media (max-width: 768px) {
  .figma-embed {
    height: 74vh;
    min-height: 560px;
    border-radius: 8px;
  }
}
```

This CSS is a starting point. Adjust the height after testing the actual
prototype on desktop and mobile. Do not change the supplied Figma URL or
its node parameters.

## Prototype section copy

**19 / TRY THE EXPERIENCE**

# Explore Scam Ready for yourself.

The prototype lets you move through the learning experience, make
decisions in a simulated institutional contact, review the path you took
and explore how independent verification changes the way you respond.

Try the first scenario, follow the learning route and explore the
evidence comparison in Verification X-Ray.

**Embed the interactive prototype directly below this introduction.**

Under the embed, add a visible fallback link:

**Open the prototype directly in Figma ↗**

Link target:

https://www.figma.com/proto/fMPiMEP5QmqCmVa9cwCCva/DECO3200-prototype?node-id=1-1519&p=f&t=fQNaCMD6IZ0ixjvZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3998

Also add this note:

*The interactive experience is a design prototype. It does not contact
real institutions, verify real identities or provide emergency, legal or
financial advice.*

### Embed troubleshooting

-   If the Figma embed is blocked by browser privacy settings, keep the
    direct prototype link visible.
-   Do not replace the embed with a screenshot without telling me.
-   Do not create a fake local simulation of the Figma prototype.
-   The iframe should not prevent the rest of the portfolio page from
    loading.
-   Do not expose a private Figma editing link. Use only the prototype
    URL above.

------------------------------------------------------------------------

# 6. Asset Checklist & Source PDF Page Guide

First inspect the repository for existing screenshots, exported images,
videos and project files. Do not assume suggested filenames exist.

Suggested asset folder:

``` text
public/images/scam-ready/
  hero-scam-ready.webp
  problem-context.webp
  personal-experience-diagram.webp
  research-insights.webp
  stakeholder-map.webp
  design-opportunity.webp
  design-principles.webp
  experience-flow.webp
  scenario-01-call.webp
  scenario-01-decisions.webp
  scenario-01-outcome.webp
  decision-replay.webp
  foundation-learning.webp
  advanced-learning.webp
  verification-xray.webp
  answer-feedback.webp
  scenario-02-university.webp
  future-learning.webp
  early-concept-sketches.webp
  early-prototype.webp
  final-iteration.webp
  user-testing-summary.webp
  user-testing-findings.webp
  before-after-feedback.webp
  impact-limitations.webp
```

## Source PDF page guide

  -----------------------------------------------------------------------
  Website content / visual                                    PDF page(s)
  evidence                       
  ------------------------------ ----------------------------------------
  Cover, project name and team                                          1

  Australian scam context and                                           2
  problem rationale              

  Knowledge, credibility, access                                        3
  and decision gaps; stakeholder 
  map                            

  Research insights and HMW                                             4
  design opportunity             

  Learning principles and design                                        5
  logic                          

  Final design overview and core                                        6
  routine                        

  Scenario 1 experience and                                             7
  reflection                     

  Step Out-based Foundation /                                           8
  Advanced routing               

  Transfer and future learning                                          9
  loop                           

  Early concepts and prototype                                         10
  development                    

  Final iteration: clearer                                             11
  learning routes                

  Final iteration: answer                                              12
  feedback and Verification      
  X-Ray                          

  Early prototype testing method                                       13
  and SUS results                

  What user testing revealed                                           14

  Before / after answer-feedback                                       15
  refinement                     

  Evidence → design response →                                         16
  next evaluation question       

  Intended impact and evidence                                         17
  limitations                    

  Future evaluation plan                                               18

  References                                                           19

  Figma appendix and prototype                                         20
  reference                      

  Interview transcript appendix                                        21
  (do not publish raw            
  participant data)              

  DECO3200 A2 survey appendix                                          22

  International student survey                                         23
  appendix                       

  AI acknowledgement                                                   24
  -----------------------------------------------------------------------

Prefer actual final Figma screenshots for the interactive design. Use
PDF screenshots as evidence for research, testing and iteration where
needed. If cropping PDF images, preserve the original meaning and do not
crop away labels or caveats.

------------------------------------------------------------------------

# 7. Page Structure & Interaction Requirements

Recommended order:

1.  Hero --- project title, short description and strongest final UI
    composition.
2.  The challenge --- Australian context and why the problem matters.
3.  Personal motivation --- two real experiences, clearly separated from
    research.
4.  Research and insights --- survey and interview evidence.
5.  Design opportunity --- from awareness to decision practice.
6.  Design principles --- experience before explanation, behaviour not a
    score, safe exit is not resolution.
7.  Final solution overview --- complete learning cycle and core
    routine.
8.  Scenario 1 --- unexpected call and initial choices.
9.  Decision Replay and Decision Rewind.
10. Foundation and Advanced learning.
11. Verification X-Ray and answer-specific feedback.
12. Scenario 2 and transfer.
13. Future learning.
14. Design development and iteration.
15. User testing and findings.
16. Evidence-to-design response.
17. Impact, limitations and future testing.
18. My contribution and team credits.
19. Figma interactive prototype embed.
20. References and AI acknowledgement.

The Figma prototype section can appear earlier (after the final solution
overview) if that creates a stronger experience. Keep the full written
case study available below it.

## Main interactions on the portfolio page

### A --- Figma prototype embed

Use the exact Figma embed in Section 5. It must work responsively and
include a direct-link fallback.

### B --- Decision flow diagram

Create a simple interactive or animated diagram for:
`Scenario 1 → Decision Replay → Foundation / Advanced → Scenario 2 → Future Learning`.

The diagram is explanatory, not a replacement for the Figma prototype.
Keep it keyboard accessible and respect reduced-motion preferences.

### C --- Before / after comparison

Use real screenshots to compare: - Earlier guided learning vs final
answer-specific feedback. - Earlier verification activity vs final
Verification X-Ray. - Earlier shared learning sequence vs final
Foundation / Advanced routes.

Only use screenshots that genuinely represent the named stages. Label
the versions and do not imply that the final redesign has already been
re-tested.

### D --- Research insight cards

Use small, readable data callouts for the actual research figures.
Clearly identify the sample size and which survey each figure came from.

### E --- Image lightbox

Allow visitors to open important screenshots and diagrams at a larger
size. Add captions and accessible close controls.

------------------------------------------------------------------------

# 8. Non-Negotiable Accuracy & Ethics Rules

1.  Do not claim Scam Ready is a real scam-detection engine. It is an
    interactive learning prototype.
2.  Do not claim it can automatically verify a caller, identity, phone
    number or government document.
3.  Do not describe it as legal, immigration, financial or emergency
    advice.
4.  Do not imply that every unfamiliar institutional contact is a scam.
5.  Explain that Step Out is followed by independent verification and a
    decision about the underlying issue.
6.  Do not present the Step Out branch as a validated score or complete
    measure of knowledge.
7.  Keep the 20-response and 24-response survey datasets separate.
8.  Keep the 10-person moderated prototype test separate from the survey
    research.
9.  SUS 52.75 / 100 is a perceived usability score, not a learning
    score.
10. The final redesigned interactions still require evaluation. Do not
    claim they have already improved learning outcomes.
11. The two personal scam experiences are personal motivation, not team
    research data.
12. Do not expose participant names, private transcripts, raw survey
    rows, student IDs or private Google links.
13. The Figma iframe must use the exact URL supplied in this brief.
14. Do not invent my individual role or claim sole authorship of team
    work.
15. Preserve the distinction between Decision Replay (reviewing the
    actual path) and Decision Rewind (comparing an alternative path).

------------------------------------------------------------------------

# 9. Responsive Design, Accessibility & Performance

-   Desktop: spacious editorial case-study layout, with large interface
    screenshots and alternating text/image sections.
-   Tablet: reduce columns while keeping diagrams readable.
-   Mobile: single-column layout, legible body text and touch-friendly
    controls.
-   Avoid horizontal overflow.
-   Keep the Figma embed usable on mobile; test its height and scrolling
    behaviour.
-   Lazy-load images below the fold.
-   Use responsive images and modern formats where appropriate.
-   Add meaningful alt text to screenshots and diagrams.
-   Provide keyboard-accessible controls, visible focus states and
    accessible labels.
-   Respect reduced-motion preferences.
-   Do not autoplay video or animation.
-   Avoid excessive scroll-triggered effects.
-   Ensure the site works with the repository's configured deployment
    base path and GitHub Pages setup, if applicable.

------------------------------------------------------------------------

# 10. Final Implementation Checklist

Before finishing, verify:

-   [ ] Scam Ready is linked from the existing Work / Projects page.
-   [ ] Existing Home and Cocoa Reserve pages still work.
-   [ ] The title and hero image are correct.
-   [ ] The English copy is present and proofread.
-   [ ] Personal experiences are clearly separated from research
    findings.
-   [ ] Research sample sizes and testing figures are accurate.
-   [ ] Decision Replay and Decision Rewind are clearly distinguished.
-   [ ] Foundation / Advanced routing is explained correctly.
-   [ ] Verification X-Ray uses real prototype screenshots.
-   [ ] The final Figma iframe uses the exact supplied URL.
-   [ ] The direct Figma prototype link works.
-   [ ] The embed is responsive and does not break the page.
-   [ ] No student IDs, private transcripts or raw participant data are
    exposed.
-   [ ] No unsupported learning-effectiveness claims appear.
-   [ ] My individual contribution is confirmed rather than invented.
-   [ ] All image paths resolve.
-   [ ] Mobile layout is checked.
-   [ ] Keyboard navigation and alt text are present.
-   [ ] The production build succeeds.

When implementation is complete, report: 1. Which files and routes were
created or changed. 2. Which screenshots and assets were located and
used. 3. Whether the Figma embed works. 4. Whether the direct prototype
link is present. 5. Which content or contribution details still need my
confirmation. 6. Which interactions are working. 7. Whether the mobile
layout and production build passed.

**Final direction:** Make Scam Ready feel like a thoughtful
interaction-design case study. The strongest story is not simply that
the team made an anti-scam prototype. It is that the team identified a
gap between awareness and action, designed a way to practise decisions
under uncertainty, used early testing to uncover misunderstandings, and
refined the experience around independent verification. Show the actual
prototype, make the reasoning visible, and be honest about what still
needs to be tested.
