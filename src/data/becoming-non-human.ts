/**
 * Becoming Non-Human — page copy (en + zh).
 * Source: md文件/3009/Becoming_Non_Human_Portfolio_Brief_EN_ZH.md (copy used as written) and the DECO3009 final report.
 * Confirmed by Sitan: overall world planning + outlines for all three worlds, and Turtle World.
 * Bat and Spider implementations are team work. No year, grade or retest results are stated.
 * Stills are from the final report (labelled); Turtle clips are cut from a headset recording of the prototype.
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
    { k: 'Tools', v: 'Unity 2022.3 (URP) · C# · PICO 4' },
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
      { id: 'rubbish', n: '03C', k: 'Rubbish, health and consequences', v: 'Floating rubbish gives the environment a consequence. The turtle starts with five health points, and each can it swims into removes one. Damage is counted when the turtle enters a can, not for every frame of contact. The player must balance progress toward the shore with avoiding hazards along the way.' },
      { id: 'goal', n: '03D', k: 'A clear destination', v: 'Distance feedback keeps the goal visible throughout the journey. Success and failure states close the loop and make the outcome understandable. The final report suggests that this clearer goal and slower pace helped participants understand Turtle World more easily than the spider scene.' },
    ],
    diagram: { tag: 'Explanatory diagram', input: 'Player input', current: 'Current (varies)', result: 'Actual drift', note: 'A design simulation, not a scientific model of ocean flow.' },
    clipTag: 'Prototype',
    clipWater: 'Recorded from the running prototype on the headset: the view rises from under the water to the surface. The clip keeps the recorded sound.',
    clipWaterLabel: 'Clip: crossing the waterline in Turtle World',
    clipRubbish: 'Recorded from the running prototype: cans drift past the turtle and health drops from 5 / 5 to 4 / 5.',
    clipRubbishLabel: 'Clip: rubbish and health in Turtle World',
    goalAlt: 'Turtle World seen from above: the island shore the player swims towards.',
    clipGoal: 'Recorded from the running prototype: the distance counts down from about 16 m to 4.8 m. The recording ends before a success or failure screen appears.',
    clipGoalLabel: 'Clip: approaching the shore in Turtle World',
    clipIntro: 'Recorded from the running prototype: the Turtle Journey start panel, then the 20-second camera path over the island and into the water. Health and distance appear as control passes to the player.',
    clipIntroLabel: 'Clip: from the start panel to gameplay in Turtle World',
  },

  toc: {
    label: 'On this page',
    items: [
      { id: 'worlds', k: 'Worlds' },
      { id: 'contribution', k: 'Contribution' },
      { id: 'turtle', k: 'Turtle World' },
      { id: 'planning', k: 'Planning' },
      { id: 'build', k: 'How it works' },
      { id: 'headset', k: 'On the headset' },
      { id: 'testing', k: 'Testing' },
      { id: 'reflection', k: 'Reflection' },
    ],
  },

  planning: {
    eyebrow: '04 / Planning Turtle World',
    title: 'From a turtle’s journey to a build plan',
    body: 'I planned Turtle World around what should feel different about being a sea turtle, and turned each of those intents into one system the player can feel. The journey is split into phases with a single job each: get oriented, learn to move, cope with the water, reach the shore. Because each system lives in its own script, the current, the rubbish and the sound could be tuned separately.',
    intentsTitle: 'Design intent → system',
    intents: [
      { k: 'A body that moves differently', v: 'Two movement modes: 3D swimming below the surface, walking with gravity above it.' },
      { k: 'Water that pushes back', v: 'A layered-noise current added to every swimming movement.' },
      { k: 'An ocean with consequences', v: 'Drifting cans that cost health on contact.' },
      { k: 'Knowing which world you are in', v: 'An underwater overlay, an ambience swap and muffled music at the waterline.' },
      { k: 'Knowing where to go', v: 'A live distance readout, then a win or fail screen.' },
    ],
    journeyTitle: 'Player journey',
    journeyHead: ['Phase', 'The player sees', 'The player does', 'The system does'],
    journey: [
      ['Start', 'The Turtle Journey panel, with controllers visible', 'Selects Start Journey', 'Holds the rig on the first frame of the camera path; movement is off'],
      ['Intro · 20 s', 'A flight over the island and down into the water, with the turtle swimming ahead', 'Looks around', 'Moves the whole XR rig along an animated path; controllers are hidden'],
      ['Swim', 'An underwater view with health and distance', 'Left stick to move; right stick to turn, rise and dive', 'Adds the current to the player’s movement; overlay and muffled music below the surface'],
      ['Hazards', 'Cans drifting and tumbling', 'Steers around them', 'Removes one health point per can touched'],
      ['Goal', 'The distance counting down', 'Swims toward the shore', 'Ends the run within 2.5 units of the goal'],
      ['End', 'A win or fail panel, with controllers visible again', 'Chooses an option on the panel', 'Stops movement and places the panel in front of the player'],
    ],
    journeyNote: 'Phases and timings are read from the Unity scene and checked against the headset recording.',
  },

  build: {
    eyebrow: '05 / How it works',
    title: 'Small scripts, one job each',
    body: 'Turtle World runs in Unity 2022.3 with the Universal Render Pipeline on a PICO 4, through the PICO Unity Integration SDK, OpenXR and the XR Interaction Toolkit. Its behaviour is split across small C# components that each check their own conditions every frame; there is no central game-state manager. The numbers below are read from the submitted Turtle scene rather than the script defaults, because many were tuned a long way from where they started.',
    stack: [
      { k: 'Engine', v: 'Unity 2022.3.20f1 · URP 14' },
      { k: 'Device', v: 'PICO 4 · PICO SDK 3.4.0' },
      { k: 'XR', v: 'OpenXR 1.14.3 · XR Interaction Toolkit 2.5.2' },
      { k: 'Code', v: 'C# · physics step 0.02 s (50 Hz)' },
    ],
    mapTitle: 'System map',
    mapHead: ['Reads', 'Script', 'Drives'],
    map: [
      ['Controller sticks · time-based noise', 'PicoTurtleLocomotion', 'Swimming or walking, plus the current'],
      ['Head height', 'UnderwaterOverlayToggle', 'A blue-green overlay in front of the camera'],
      ['Head height', 'WaterAudioController', 'Ambience swap and a low-pass filter on the music'],
      ['Random seeds', 'SodaCanSpawner → SodaCanOceanDrift', '1,400–2,000 drifting cans'],
      ['A can touching the player', 'TrashDamage → TurtleHealth', 'One health point lost'],
      ['Health · head-to-goal distance', 'TurtleEndGameManager', 'Distance readout, then the win or fail panel'],
      ['Start button · animated path', 'TurtleIntroCinematicController', 'The intro flight, then the hand-over to the player'],
    ],
    mapNote: 'Script names as they appear in the Unity project. Each row runs on its own.',
    codeNote: 'Excerpt from the project, condensed: null checks removed, comments rewritten in English.',
    move: {
      n: '05A',
      k: 'Two ways to move',
      v: [
        'One CharacterController handles both modes. Every frame the script compares the rig’s height with the sea level (y = 37) and picks a mode.',
        'Underwater, the left stick moves along the full direction of the headset, so looking up and pushing forward swims upward; the right stick turns and adds vertical movement. The input is smoothed with a Lerp, then the current is added on top. Above water, the view direction is flattened onto the ground, gravity is applied in the script and the current is reset to zero.',
      ],
      head: ['', 'Underwater', 'Above water'],
      rows: [
        ['Direction', 'Full headset direction', 'Flattened to the ground'],
        ['Speed', '2.4 units/s · vertical 1.0', '1.3 units/s'],
        ['Turning', '42.9°/s', '56.8°/s'],
        ['Vertical', 'Right stick', 'Gravity −18, kept grounded at −2'],
        ['Smoothing', 'Lerp, rate 9.45', 'None'],
        ['Current', 'Added', 'Reset to zero'],
      ],
    },
    current: {
      n: '05B',
      k: 'A current built from noise',
      v: [
        'The current is not random jitter. For each axis, three Perlin-noise layers are sampled at different speeds and offsets, blended and scaled. A fixed base direction gives the water an overall flow, and a separate noise value raises and lowers its strength between 0.8× and 1.8×.',
        'Strength and direction are each smoothed before they reach the player, so the push builds and fades instead of snapping. New random seeds are drawn every run, so no two swims drift the same way. It is driven by time, not position: a design tool for resistance, not a fluid simulation.',
      ],
      blendLabel: 'Weight of each noise layer in the final value',
      blend: [
        { k: 'Layer 1', w: 23.5, s: '×1 speed' },
        { k: 'Layer 2', w: 41.5, s: '×0.73' },
        { k: 'Layer 3', w: 35, s: '×1.17' },
      ],
      blendNote: 'Weights follow from the blend values in the scene; speeds shown for the X axis.',
      rows: [
        ['Strength X / Y / Z', '2.34 / 2.48 / 2.39'],
        ['Noise speed', '1.09'],
        ['Base flow', '(0.4, 0.08, 0.5), normalised × 0.65'],
        ['Strength range', '0.8–1.8×, changing at speed 0.35'],
        ['Smoothing', 'Direction 3.93 · strength 2'],
      ],
    },
    debris: {
      n: '05C',
      k: 'Rubbish with its own physics',
      v: [
        'SodaCanSpawner places between 1,400 and 2,000 cans at random in a 277 × 219 unit area, 1.1 to 12.5 units below the surface. Each can gets its own randomised current, tumble, bob and range, so they never move in step.',
        'Unlike the player, the cans are Rigidbodies moved by forces in FixedUpdate: a three-layer noise current, a two-layer noise torque, a sine-wave bob, a pull back once a can strays 6–12 units from its spawn point, and a push down near the surface so cans stay underwater. Their colliders are triggers that call the damage script.',
      ],
      pipeLabel: 'Spawn pipeline',
      pipe: ['Random point below sea level', 'Instantiate with a random rotation', 'Randomise current, torque, bob and range', 'Rigidbody: no gravity, mass 0.35, drag 1', 'Trigger colliders + TrashDamage', 'Forces every physics step'],
    },
    water: {
      n: '05D',
      k: 'One waterline, three signals',
      v: [
        'Crossing the surface changes movement, sight and sound together. Movement checks the rig’s height; the overlay and the audio check the headset camera.',
        'The final underwater look is a translucent blue-green quad parented 0.35 units in front of the camera and switched on below the waterline. An earlier version blended a URP Volume and fog; that component is still in the project but disabled in the final scene. Three looping sources keep playing while their volumes move toward targets, and a low-pass filter on the music drops from 22,000 Hz to about 210 Hz below the surface.',
      ],
      head: ['', 'Above water', 'Underwater'],
      rows: [
        ['Camera height', '≥ 36.9', '< 36.9'],
        ['View', 'Clear', 'Blue-green overlay'],
        ['Surface ambience', '0.22', '0'],
        ['Underwater ambience', '0', '0.68'],
        ['Music', '0.26, full range', '0.34, low-pass 209.8 Hz'],
      ],
      note: 'Volumes move by up to 2 per second; the filter change takes about 0.02 s.',
    },
    intro: {
      n: '05E',
      k: 'Handing the headset to the player',
      v: [
        'The intro is a camera path, not a second camera. An Animator moves a follow target, and in LateUpdate the whole XR rig copies its position and rotation, so head tracking still works during the flight.',
        'The team report notes that ending the intro from an Animation Event was unreliable, so the hand-over runs on a fixed 20-second coroutine. When it fires, the rig moves to the gameplay start point (position only, to avoid a sudden turn), the cinematic turtle is hidden, the CharacterController and movement are switched back on, and the HUD appears. Controller models stay hidden but keep working.',
      ],
      head: ['Phase', 'Controller models', 'Controller input'],
      rows: [
        ['Start panel', 'Shown', 'On'],
        ['Intro', 'Hidden', 'Off'],
        ['Swim', 'Hidden', 'On'],
        ['End panel', 'Shown', 'On'],
      ],
    },
    end: {
      n: '05F',
      k: 'Health, distance and the end',
      v: [
        'The end manager checks health first, then the straight-line 3D distance from the headset to the goal, which it shows as “Distance: x.x m”. Within 2.5 units the run is won; at zero health it is lost. Either way, the HUD is hidden, movement is switched off and the end panel is placed 1.6 units in front of the player’s level gaze.',
      ],
      rows: [
        ['Health', '5 points, 1 per can'],
        ['Win', 'Within 2.5 of the goal, measured in 3D'],
        ['Check order', 'Fail before win'],
        ['End panel', '1.6 in front of the player, placed once'],
      ],
    },
  },

  headset: {
    eyebrow: '06 / On the headset',
    title: 'Problems found on the PICO 4',
    body: 'Several systems that worked in the Unity editor behaved differently on the headset. Some were solved in the submitted build. Others are still open, and I list them here rather than hide them.',
    head: ['Problem', 'What happened', 'Response', 'Status'],
    solved: 'Solved',
    open: 'Open',
    rows: [
      { k: 'Underwater effect', what: 'A post-processing Volume was unstable on the PICO headset.', fix: 'Replaced with a camera-attached translucent quad, switched by camera height.', status: 'solved' },
      { k: 'Ending the intro', what: 'An Animation Event calling FinishIntro() was unreliable.', fix: 'A coroutine ends the intro after a fixed 20 s. The timer must change if the animation does.', status: 'solved' },
      { k: 'Hiding controllers', what: 'Turning controllers off also stopped their input and ray.', fix: 'Only the visual models are hidden, through separate visual roots.', status: 'solved' },
      { k: 'UI in the headset', what: 'Screen-space UI did not display correctly in VR.', fix: 'Panels moved to world-space canvases placed in front of the player.', status: 'solved' },
      { k: 'Broken materials', what: 'Some imported assets rendered pink or lost their textures.', fix: 'Materials and shaders converted to URP.', status: 'solved' },
      { k: 'Head vs. body', what: 'The tracked head and the collision capsule (height 2.96) sit in different places, so a player could touch a can without it registering.', fix: 'A patch script that fixes the capsule height and follows the head within 0.2 units exists, but it is not attached in the submitted scene.', status: 'open' },
      { k: 'Two waterlines', what: 'Movement checks the rig at y = 37; the overlay and sound check the camera at 36.9. Near the surface they can disagree.', fix: 'Next: one water state with a buffer zone. The script already has a 0.15 buffer, currently switched off.', status: 'open' },
      { k: 'Damage protection', what: 'The script supports an invincibility window after a hit, but the scene sets it to 0 s.', fix: 'Retune it and test with several cans at once.', status: 'open' },
    ],
    note: 'Open items are read from the submitted project; they have not been re-tested on a headset for this page.',
  },

  testing: {
    eyebrow: '07 / What we learned from testing',
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
      { k: 'The turtle camera felt too high, panels were close to read, and some wanted faster movement.', v: 'Matches the open head-vs-body issue; panel distance and swim speed are the next tuning targets.' },
      { k: 'The scenes lacked a strong inner connection.', v: 'Links to my planning role: the three outlines need a shared story, not just shared transitions.' },
    ],
    perTitle: 'Turtle World, participant by participant',
    per: [
      { k: 'Guidance (Q4)', q: '“The turtle world’s guidance cues helped me understand where to go and how to reach the end point.”', scores: [4, 4, 3, 5, 4], mean: '4.0' },
      { k: 'Presence (Q1)', q: '“I felt like I was really inside the virtual experience rather than just observing it.”', scores: [4, 5, 4, 5, 4], mean: '4.4' },
    ],
    perHead: ['P1', 'P2', 'P3', 'P4', 'P5', 'Mean'],
    quotesTitle: 'In their words',
    quotes: [
      { q: 'The turtle scene felt the most immersive because it was the least confusing.' },
      { q: 'The turtle scene’s camera too high.' },
      { q: 'Maybe moving the information panels back a bit so it’s easier to read.' },
      { q: 'I’d like ... the Turtle World to be faster.' },
    ],
    quotesNote: 'Participant comments, quoted as written in the test record.',
  },

  reflection: {
    eyebrow: '08 / Reflection',
    title: 'What I learned',
    body: 'Planning three worlds helped me think beyond individual interactions and consider the rhythm of a complete journey. Developing Turtle World made that plan concrete through movement, feedback and a clear destination. The prototype also showed the limits of the concept: changing movement alone does not fully communicate an animal’s way of sensing. A stronger shared story, more consistent body tracking and further testing would be important next steps.',
    body2: 'Building Turtle World also taught me that a VR experience is more than a 3D environment. Head tracking changes how movement and collision behave, effects that look right in the editor can fail in stereo on the headset, and separate systems have to agree about the same moment, such as whether the player is underwater. Small, device-specific decisions — a camera overlay instead of post-processing, hiding controller models without disabling input — were what made the prototype work on the target device.',
    futureTitle: 'Future directions',
    futureNote: 'None of these are built yet.',
    future: [
      { k: 'Whole journey', v: 'A stronger shared story and clearer reasons to move between the three animal worlds.' },
      { k: 'Water state', v: 'One source for “body in water” and “head underwater”, with a buffer zone, instead of a separate threshold in each script.' },
      { k: 'Body alignment', v: 'Attach and tune the collision patch so the capsule follows the head; re-check camera height and panel distance.' },
      { k: 'Current', v: 'A SampleCurrent(position, time, seed) function so the flow can vary across space, be shared with the rubbish and be replayed with a fixed seed.' },
      { k: 'Performance', v: 'Profile 1,400–2,000 Rigidbodies on the headset before choosing pooling or simpler distant cans.' },
      { k: 'Flow', v: 'An explicit state machine for start, intro, swim and end, with an option to skip the intro.' },
      { k: 'Validation', v: 'Test the revised version again to see which changes actually worked.' },
    ],
  },

  credits: {
    eyebrow: '09 / Credits',
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
    imagesNote: 'Still images come from the final project report. The four Turtle World clips were cut from a headset screen recording of the running prototype. Code excerpts come from the submitted Unity project, and parameter values are read from its Turtle scene.',
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
    { k: '工具', v: 'Unity 2022.3（URP）· C# · PICO 4' },
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
      { id: 'rubbish', n: '03C', k: '垃圾、生命值与后果', v: '漂浮垃圾让环境产生可感知的后果。海龟初始有 5 点生命值，每碰到一个易拉罐扣 1 点。伤害在海龟进入易拉罐的触发区时计算，而不是接触期间每帧都扣。玩家需要在向岸边推进与躲避沿途障碍之间做出调整。' },
      { id: 'goal', n: '03D', k: '明确的目的地', v: '距离反馈让目标始终可见，成功与失败状态则让体验形成完整闭环。最终报告显示，这种更明确的目标与较慢的节奏，有助于参与者比在蜘蛛场景中更容易理解海龟世界。' },
    ],
    diagram: { tag: '原理示意', input: '玩家输入', current: '洋流（不断变化）', result: '实际漂移', note: '这是设计上的模拟，不是科学级的海洋流体仿真。' },
    clipTag: '原型录屏',
    clipWater: '录自头显上运行的原型：视角从水下浮出水面。片段保留了录屏中的声音。',
    clipWaterLabel: '片段：海龟世界中穿过水面',
    clipRubbish: '录自运行中的原型：易拉罐从海龟身边漂过，生命值从 5 / 5 降到 4 / 5。',
    clipRubbishLabel: '片段：海龟世界中的垃圾与生命值',
    goalAlt: '从上方看海龟世界：玩家要游向的小岛岸边。',
    clipGoal: '录自运行中的原型：距离从约 16 米减少到 4.8 米。录屏在出现成功或失败界面之前就结束了。',
    clipGoalLabel: '片段：海龟世界中接近岸边',
    clipIntro: '录自运行中的原型：先是 Turtle Journey 开始面板，然后是 20 秒的开场镜头，掠过小岛、潜入水中；控制权交给玩家时，生命值和距离提示出现。',
    clipIntroLabel: '片段：海龟世界从开始面板进入游玩',
  },

  toc: {
    label: '本页目录',
    items: [
      { id: 'worlds', k: '三个世界' },
      { id: 'contribution', k: '我的贡献' },
      { id: 'turtle', k: '海龟世界' },
      { id: 'planning', k: '规划' },
      { id: 'build', k: '技术实现' },
      { id: 'headset', k: '头显适配' },
      { id: 'testing', k: '测试' },
      { id: 'reflection', k: '反思' },
    ],
  },

  planning: {
    eyebrow: '04 / 海龟世界的规划',
    title: '从海龟的旅程到开发计划',
    body: '我从"成为海龟应该有什么不同"出发规划海龟世界，并把每一个设计意图落实为玩家能感受到的一个系统。整段旅程被拆成几个阶段，每个阶段只承担一件事：建立方向感、学会移动、应对水流、抵达岸边。每个系统都放在独立的脚本里，因此洋流、垃圾和声音可以分别调整。',
    intentsTitle: '设计意图 → 系统',
    intents: [
      { k: '一具移动方式不同的身体', v: '两种移动模式：水下三维游动，水上带重力行走。' },
      { k: '会推着你走的水', v: '多层噪声生成的洋流，叠加在每一次游动上。' },
      { k: '有后果的海洋', v: '漂流的易拉罐，碰到就扣生命值。' },
      { k: '知道自己在水上还是水下', v: '穿过水面时切换水下遮罩、环境声，并让音乐变闷。' },
      { k: '知道该往哪里去', v: '实时距离提示，最后是成功或失败界面。' },
    ],
    journeyTitle: '玩家旅程',
    journeyHead: ['阶段', '玩家看到', '玩家操作', '系统响应'],
    journey: [
      ['开始', 'Turtle Journey 面板，手柄模型可见', '选择 Start Journey', 'XR Rig 停在镜头路径第一帧，移动关闭'],
      ['开场 · 20 秒', '镜头掠过小岛、潜入水中，海龟在前方游动', '环顾四周', '整个 XR Rig 沿动画路径移动，手柄隐藏'],
      ['游动', '水下视角，显示生命值和距离', '左摇杆移动；右摇杆转向、上浮、下潜', '在玩家移动上叠加洋流；水下显示遮罩、音乐变闷'],
      ['障碍', '易拉罐在水中漂流翻滚', '绕开它们', '每碰到一个易拉罐扣 1 点生命值'],
      ['目标', '距离不断减少', '朝岸边游去', '距目标 2.5 单位以内时结束本局'],
      ['结束', '成功或失败面板，手柄模型重新出现', '在面板上选择下一步', '停止移动，把面板放在玩家正前方'],
    ],
    journeyNote: '阶段与时长来自 Unity 场景设置，并与头显录屏核对过。',
  },

  build: {
    eyebrow: '05 / 技术实现',
    title: '小脚本，各管一件事',
    body: '海龟世界基于 Unity 2022.3 与通用渲染管线（URP），通过 PICO Unity Integration SDK、OpenXR 和 XR Interaction Toolkit 运行在 PICO 4 上。行为被拆分到多个小型 C# 组件中，每个组件每帧自行判断条件，没有统一的游戏状态管理器。下文的数值读取自提交的海龟场景，而不是脚本默认值——很多参数已经和最初的默认值差别很大。',
    stack: [
      { k: '引擎', v: 'Unity 2022.3.20f1 · URP 14' },
      { k: '设备', v: 'PICO 4 · PICO SDK 3.4.0' },
      { k: 'XR', v: 'OpenXR 1.14.3 · XR Interaction Toolkit 2.5.2' },
      { k: '代码', v: 'C# · 物理步长 0.02 秒（50 Hz）' },
    ],
    mapTitle: '系统关系',
    mapHead: ['读取', '脚本', '驱动'],
    map: [
      ['手柄摇杆 · 随时间变化的噪声', 'PicoTurtleLocomotion', '游动或行走，并叠加洋流'],
      ['头部高度', 'UnderwaterOverlayToggle', '相机前方的蓝绿色遮罩'],
      ['头部高度', 'WaterAudioController', '切换环境声，并对音乐做低通滤波'],
      ['随机种子', 'SodaCanSpawner → SodaCanOceanDrift', '1400–2000 个漂流的易拉罐'],
      ['易拉罐碰到玩家', 'TrashDamage → TurtleHealth', '扣 1 点生命值'],
      ['生命值 · 头部到目标的距离', 'TurtleEndGameManager', '距离提示，然后是成功或失败面板'],
      ['开始按钮 · 动画路径', 'TurtleIntroCinematicController', '开场飞行，然后把控制权交给玩家'],
    ],
    mapNote: '脚本名与 Unity 工程中一致。每一行独立运行。',
    codeNote: '节选自项目代码并做了精简：省略空值检查，注释改写为英文。',
    move: {
      n: '05A',
      k: '两种移动方式',
      v: [
        '两种模式共用同一个 CharacterController。脚本每帧比较 XR Rig 的高度与海平面（y = 37），决定使用哪种模式。',
        '水下时，左摇杆沿头显的完整朝向移动，所以抬头向前推就会向上游；右摇杆负责转向和额外的上下移动。输入速度先经过 Lerp 平滑，再叠加洋流。水上时，视线方向被投影到地面，由脚本施加重力，洋流归零。',
      ],
      head: ['', '水下', '水上'],
      rows: [
        ['方向', '头显完整朝向', '投影到地面'],
        ['速度', '2.4 单位/秒 · 垂直 1.0', '1.3 单位/秒'],
        ['转向', '42.9°/秒', '56.8°/秒'],
        ['垂直', '右摇杆', '重力 −18，贴地力 −2'],
        ['平滑', 'Lerp，系数 9.45', '无'],
        ['洋流', '叠加', '归零'],
      ],
    },
    current: {
      n: '05B',
      k: '用噪声构建的洋流',
      v: [
        '洋流不是随机抖动。每个轴各采样三层 Perlin 噪声，使用不同的速度与偏移，再混合、缩放。固定的主流方向给海水一个整体流向，另一组噪声让洋流强度在 0.8 到 1.8 倍之间起伏。',
        '强度和方向在作用到玩家之前都会分别平滑，所以推力是逐渐增强、逐渐减弱的，而不是突然跳变。每一局都会重新生成随机种子，两次游动的漂移不会相同。它由时间驱动，而不是由位置驱动：这是一种制造阻力的设计手段，不是流体仿真。',
      ],
      blendLabel: '三层噪声在最终结果中的权重',
      blend: [
        { k: '第 1 层', w: 23.5, s: '×1 速度' },
        { k: '第 2 层', w: 41.5, s: '×0.73' },
        { k: '第 3 层', w: 35, s: '×1.17' },
      ],
      blendNote: '权重由场景中的混合参数推算；速度倍数以 X 轴为例。',
      rows: [
        ['强度 X / Y / Z', '2.34 / 2.48 / 2.39'],
        ['噪声速度', '1.09'],
        ['主流', '(0.4, 0.08, 0.5)，归一化后 × 0.65'],
        ['强度范围', '0.8–1.8 倍，变化速度 0.35'],
        ['平滑', '方向 3.93 · 强度 2'],
      ],
    },
    debris: {
      n: '05C',
      k: '有自己物理的垃圾',
      v: [
        'SodaCanSpawner 在 277 × 219 单位的范围内、海面以下 1.1 到 12.5 单位处，随机放置 1400 到 2000 个易拉罐。每个易拉罐都有各自随机的洋流、翻滚、浮动和活动范围，因此不会整齐地同步移动。',
        '和玩家不同，易拉罐是刚体（Rigidbody），在 FixedUpdate 中由力驱动：三层噪声的洋流、两层噪声的扭矩、正弦浮动、离开出生点 6–12 单位后的回拉，以及靠近水面时的下压，让它们留在水下。它们的碰撞体是触发器，会调用伤害脚本。',
      ],
      pipeLabel: '生成流程',
      pipe: ['海面以下的随机位置', '实例化，随机旋转', '随机设置洋流、扭矩、浮动与范围', '刚体：无重力，质量 0.35，阻力 1', '触发碰撞体 + TrashDamage', '每个物理步施加力'],
    },
    water: {
      n: '05D',
      k: '一条水面，三种信号',
      v: [
        '穿过水面时，移动、画面和声音一起变化。移动判断的是 XR Rig 的高度，遮罩和声音判断的是头显相机的高度。',
        '最终的水下效果是一块半透明的蓝绿色面片，挂在相机前方 0.35 单位处，相机低于水面时显示。早期版本用 URP Volume 和雾来过渡；这个组件仍在项目里，但在最终场景中被禁用。三个循环音源持续播放，音量逐步移向目标值；音乐上的低通滤波在水下从 22000 Hz 降到约 210 Hz。',
      ],
      head: ['', '水上', '水下'],
      rows: [
        ['相机高度', '≥ 36.9', '< 36.9'],
        ['画面', '清晰', '蓝绿色遮罩'],
        ['水面环境声', '0.22', '0'],
        ['水下环境声', '0', '0.68'],
        ['音乐', '0.26，全频', '0.34，低通 209.8 Hz'],
      ],
      note: '音量每秒最多变化 2；滤波切换约需 0.02 秒。',
    },
    intro: {
      n: '05E',
      k: '把头显交给玩家',
      v: [
        '开场是一条镜头路径，而不是另一台相机。Animator 移动一个跟随目标，整个 XR Rig 在 LateUpdate 中复制它的位置和旋转，所以飞行过程中头部追踪依然有效。',
        '团队报告记录了用 Animation Event 结束开场并不稳定，因此改为固定 20 秒的协程来交接。时间到后，XR Rig 移到游玩起点（只改位置，避免突然转向），隐藏开场用的海龟模型，重新启用 CharacterController 和移动，并显示 HUD。手柄模型保持隐藏，但功能照常。',
      ],
      head: ['阶段', '手柄模型', '手柄输入'],
      rows: [
        ['开始面板', '显示', '开启'],
        ['开场', '隐藏', '关闭'],
        ['游动', '隐藏', '开启'],
        ['结束面板', '显示', '开启'],
      ],
    },
    end: {
      n: '05F',
      k: '生命值、距离与结束',
      v: [
        '结束管理器先检查生命值，再计算头显到目标的三维直线距离，并显示为"Distance: x.x m"。距离在 2.5 单位以内即成功，生命值归零即失败。无论哪种结果，都会隐藏 HUD、关闭移动，并把结束面板放在玩家水平视线前方 1.6 单位处。',
      ],
      rows: [
        ['生命值', '5 点，每个易拉罐扣 1'],
        ['成功', '距目标 2.5 以内，按三维计算'],
        ['判断顺序', '先判断失败，再判断成功'],
        ['结束面板', '玩家前方 1.6，只放置一次'],
      ],
    },
  },

  headset: {
    eyebrow: '06 / 头显适配',
    title: '在 PICO 4 上发现的问题',
    body: '一些在 Unity 编辑器里正常的系统，到了头显上表现不同。有的在提交版本中已经解决，有的仍未解决——我把它们列出来，而不是藏起来。',
    head: ['问题', '现象', '处理', '状态'],
    solved: '已解决',
    open: '未解决',
    rows: [
      { k: '水下效果', what: '后处理 Volume 在 PICO 头显上不稳定。', fix: '改为挂在相机上的半透明面片，按相机高度显示或隐藏。', status: 'solved' },
      { k: '结束开场', what: '用 Animation Event 调用 FinishIntro() 不稳定。', fix: '改由协程在固定 20 秒后结束开场。若动画时长改变，计时也要一起改。', status: 'solved' },
      { k: '隐藏手柄', what: '直接关闭手柄会让输入和射线一起失效。', fix: '只隐藏独立的手柄模型根节点。', status: 'solved' },
      { k: '头显中的界面', what: 'Screen Space 界面在 VR 中显示异常。', fix: '面板改为放在玩家前方的 World Space Canvas。', status: 'solved' },
      { k: '材质异常', what: '部分导入素材显示为粉色或丢失贴图。', fix: '将材质与 Shader 统一转换为 URP。', status: 'solved' },
      { k: '头部与身体', what: '头显追踪的头部位置与碰撞胶囊体（高 2.96）不在同一处，玩家看起来碰到了易拉罐，却没有被判定。', fix: '项目中有一个固定胶囊体高度、让其在 0.2 单位内跟随头部的补丁脚本，但它没有挂在提交的场景里。', status: 'open' },
      { k: '两条水面线', what: '移动用 XR Rig 在 y = 37 判断，遮罩和声音用相机在 36.9 判断，水面附近可能不一致。', fix: '下一步：统一成一个带缓冲区的水下状态。脚本里已有 0.15 的缓冲，目前没有开启。', status: 'open' },
      { k: '受伤保护', what: '脚本支持受伤后的无敌时间，但场景中设为 0 秒。', fix: '重新调整，并测试同时碰到多个易拉罐的情况。', status: 'open' },
    ],
    note: '未解决项来自对提交工程的检查，本页没有在头显上重新测试。',
  },

  testing: {
    eyebrow: '07 / 从测试中学到什么',
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
      { k: '海龟视角的相机偏高、信息面板太近不易阅读，也有人希望移动更快。', v: '与尚未解决的头部与身体问题一致；面板距离和游动速度是下一步要调整的参数。' },
      { k: '场景之间缺少更强的内在联系。', v: '与我的整体规划职责直接相关：三个大纲需要共同的故事，而不只是顺畅的过渡。' },
    ],
    perTitle: '海龟世界：每位参与者的评分',
    per: [
      { k: '引导（Q4）', q: '"海龟世界的引导提示帮助我理解该往哪里走、如何到达终点。"', scores: [4, 4, 3, 5, 4], mean: '4.0' },
      { k: '临场感（Q1）', q: '"我感觉自己真的身处虚拟体验之中，而不只是在旁观。"', scores: [4, 5, 4, 5, 4], mean: '4.4' },
    ],
    perHead: ['P1', 'P2', 'P3', 'P4', 'P5', '平均'],
    quotesTitle: '参与者原话',
    quotes: [
      { q: '"The turtle scene felt the most immersive because it was the least confusing."——海龟场景最沉浸，因为它最不让人困惑。' },
      { q: '"The turtle scene’s camera too high."——海龟场景的相机太高。' },
      { q: '"Maybe moving the information panels back a bit so it’s easier to read."——也许可以把信息面板往后移一点，更容易阅读。' },
      { q: '"I’d like ... the Turtle World to be faster."——希望海龟世界的速度更快。' },
    ],
    quotesNote: '英文为测试记录中的原话，中文为翻译。',
  },

  reflection: {
    eyebrow: '08 / 反思与下一步',
    title: '我的收获',
    body: '三个世界的规划让我从单个交互扩展到完整旅程的节奏，而海龟世界的开发则通过移动、反馈和明确目标，让规划变成具体体验。原型也暴露了概念的局限：仅仅改变移动方式，并不能完整传达动物的感知方式。更强的共同叙事、更一致的身体追踪，以及进一步测试，都是重要的下一步。',
    body2: '开发海龟世界也让我认识到，VR 体验不只是一个三维环境。头部追踪会改变移动和碰撞的表现，在编辑器里看起来正确的效果可能在头显的双眼渲染中失效，而各自独立的系统必须对同一时刻达成一致，比如玩家此刻到底在不在水下。用相机遮罩代替后处理、只隐藏手柄模型而不关闭输入——正是这些针对设备的小决定，让原型能在目标设备上运行。',
    futureTitle: '后续方向',
    futureNote: '以下均尚未实现。',
    future: [
      { k: '整体', v: '加强三个动物世界的共同叙事与过渡动机。' },
      { k: '水下状态', v: '用同一个来源管理"身体在水中"和"头部在水下"，并加入缓冲区，而不是每个脚本各设一个阈值。' },
      { k: '身体对齐', v: '挂上并调好碰撞补丁，让胶囊体跟随头部；重新检查相机高度和面板距离。' },
      { k: '洋流', v: '提取 SampleCurrent(position, time, seed) 函数，让水流随空间变化、与垃圾共用，并可用固定种子复现。' },
      { k: '性能', v: '先在头显上分析 1400–2000 个刚体的开销，再决定是否使用对象池或简化远处的易拉罐。' },
      { k: '流程', v: '用明确的状态机管理开始、开场、游动和结束，并提供跳过开场的选项。' },
      { k: '验证', v: '对修订版本重新测试，确认哪些调整真正有效。' },
    ],
  },

  credits: {
    eyebrow: '09 / 署名与说明',
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
    imagesNote: '静态图片来自最终项目报告；海龟世界的四段片段剪自原型在头显上运行时的录屏。代码节选来自提交的 Unity 工程，参数值读取自其中的海龟场景。',
  },
};

export const copy: Record<Lang, Copy> = { en, zh };

/**
 * Code excerpts from the submitted Unity project (Assets/Turtle_Level/Script and Assets/script).
 * Condensed for the page: null checks removed, a few expressions inlined, comments rewritten in English.
 * Logic, names and constants are unchanged. Same text for both languages.
 */
export const snippets = {
  move: {
    file: 'PicoTurtleLocomotion.cs — HandleSwim()',
    code: `void HandleSwim()
{
    // left stick moves along the full headset direction
    Vector3 swimMoveDir = GetSwimMoveFromCamera(leftAxis);
    transform.Rotate(Vector3.up,
        rightAxis.x * swimTurnSpeed * Time.deltaTime);

    Vector3 targetSwim = swimMoveDir * swimMoveSpeed
        + Vector3.up * (rightAxis.y * swimVerticalSpeed);
    swimVelocity = Vector3.Lerp(swimVelocity, targetSwim,
        swimSmooth * Time.deltaTime);

    // strength and direction of the current are each smoothed
    currentDriftMultiplier = Mathf.Lerp(currentDriftMultiplier,
        GetCurrentMagnitudeMultiplier(),
        currentMagnitudeSmooth * Time.deltaTime);
    Vector3 drift = GetWaterDrift() * currentDriftMultiplier;
    currentDrift = Vector3.Lerp(currentDrift, drift,
        driftSmooth * Time.deltaTime);

    // final movement = player input + ocean current
    controller.Move(
        (swimVelocity + currentDrift) * Time.deltaTime);
}`,
  },
  current: {
    file: 'PicoTurtleLocomotion.cs — GetWaterDrift()',
    code: `Vector3 GetWaterDrift()
{
    float t = Time.time * driftNoiseSpeed;

    // three Perlin layers per axis: own offset and speed
    float noiseX1 = Mathf.PerlinNoise(driftSeedX, t) * 2f - 1f;
    float noiseX2 = Mathf.PerlinNoise(driftSeedX + 101.3f,
        t * 0.73f + 19.4f) * 2f - 1f;
    float noiseX3 = Mathf.PerlinNoise(driftSeedX + 401.7f,
        t * 1.17f + 11.1f) * 2f - 1f;

    float blend12X = Mathf.Lerp(noiseX1, noiseX2, driftBlend);
    float finalX = Mathf.Lerp(blend12X, noiseX3, 0.35f);
    // ... Y and Z follow the same pattern with other offsets

    Vector3 layeredDrift = new Vector3(finalX * driftStrengthX,
        finalY * driftStrengthY, finalZ * driftStrengthZ);
    Vector3 baseCurrent =
        baseCurrentDirection.normalized * baseCurrentStrength;

    return layeredDrift + baseCurrent;
}`,
  },
  debris: {
    file: 'SodaCanOceanDrift.cs — FixedUpdate()',
    code: `void FixedUpdate()
{
    currentMultiplier = Mathf.Lerp(currentMultiplier,
        GetCurrentMagnitudeMultiplier(),
        currentMagnitudeSmooth * Time.fixedDeltaTime);

    // drift and tumble as accelerations (mass-independent)
    rb.AddForce(GetCurrentForce() * currentMultiplier,
        ForceMode.Acceleration);
    rb.AddTorque(GetCurrentTorque() * currentMultiplier,
        ForceMode.Acceleration);

    // a gentle bob, offset per can
    float bob = Mathf.Sin(Time.time * 1.4f + bobSeed)
        * bobForce;
    rb.AddForce(Vector3.up * bob, ForceMode.Acceleration);

    // pull back once a can strays too far from its spawn
    Vector3 toOrigin = originPoint - transform.position;
    if (toOrigin.magnitude > maxDistanceFromOrigin)
        rb.AddForce(toOrigin.normalized * returnForce,
            ForceMode.Acceleration);

    ApplySeaSurfaceLimit();  // keep cans below the surface
}`,
  },
  water: {
    file: 'WaterAudioController.cs — Update()',
    code: `void Update()
{
    float currentY = targetCamera.position.y;
    // seaLevelY is 36.9 in the scene
    bool isUnderwater = currentY < seaLevelY;

    aboveWaterAmbience.volume = Mathf.MoveTowards(
        aboveWaterAmbience.volume,
        isUnderwater ? 0f : aboveWaterTargetVolume,
        volumeLerpSpeed * Time.deltaTime);
    underwaterAmbience.volume = Mathf.MoveTowards(
        underwaterAmbience.volume,
        isUnderwater ? underwaterTargetVolume : 0f,
        volumeLerpSpeed * Time.deltaTime);
    // ... the music volume follows the same pattern

    bgmLowPassFilter.cutoffFrequency = Mathf.MoveTowards(
        bgmLowPassFilter.cutoffFrequency,
        isUnderwater ? bgmUnderwaterCutoff : bgmAboveCutoff,
        filterLerpSpeed * 10000f * Time.deltaTime);
}`,
  },
  intro: {
    file: 'TurtleIntroCinematicController.cs',
    code: `void LateUpdate()
{
    if (!introPlaying) return;
    // the whole XR rig follows the animated target;
    // head tracking still applies on top
    xrOrigin.position = introFollowTarget.position;
    xrOrigin.rotation = introFollowTarget.rotation;
}

IEnumerator FinishIntroAfterDelay()
{
    yield return new WaitForSeconds(introDuration);  // 20 s
    FinishIntro();
}`,
  },
  end: {
    file: 'TurtleEndGameManager.cs — Update()',
    code: `void Update()
{
    if (hasEnded) return;

    if (turtleHealth.IsDead) { HandleFail(); return; }

    float distance = GetDistanceToGoal();  // straight line, 3D
    UpdateDistanceUI(distance);            // "Distance: 12.4 m"

    if (distance <= reachDistance)         // 2.5 in the scene
        HandleWin();
}`,
  },
};
