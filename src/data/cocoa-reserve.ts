/**
 * Cocoa Reserve — project page copy (en + zh).
 * Source: md文件/2018/Cocoa_Reserve_Claude_Portfolio_Brief_EN.md, checked against the four DECO2018 PDFs.
 * Accuracy rules (brief § 6): never claim a perfect fit, user testing, sales or production.
 * Never publish the PDFs, the student ID or private document links.
 */

import type { Lang } from '../i18n/ui';

const en = {
  hero: {
    eyebrow: 'Speculative product design · Physical prototyping',
    title: 'Cocoa Reserve',
    tagline: 'Two Forms. One Origin.',
    sub: 'A collectible chocolate artefact exploring scarcity, preservation and value in 2060.',
    question: 'What if chocolate became something we preserve rather than consume?',
    intro:
      'Set in an imagined future where real cocoa is no longer an everyday resource, Cocoa Reserve turns two pieces of chocolate into a pair of objects worth protecting.',
    ctaPrimary: 'Explore the Project',
    ctaSecondary: 'View the Making Process',
    details: [
      { k: 'Project type', v: 'Individual design project' },
      { k: 'Focus', v: 'Concept development, product design, physical prototyping and visualisation' },
      { k: 'Tools', v: 'Autodesk Fusion, Rhino, Blender' },
      { k: 'Processes', v: '3D printing, vacuum forming, plaster casting and laser cutting' },
    ],
    imageAlt: 'Final Blender render: a smoked-bronze case with its curved lid partly open, the two chocolate pieces visible inside, on a pale travertine plinth.',
  },

  idea: {
    eyebrow: '01 / The concept',
    title: 'What happens when something familiar becomes rare?',
    body: [
      'I imagined a future set in 2060. As climate change affects the areas suitable for growing cocoa, real cocoa becomes a scarce resource that needs to be protected and rationed.',
      'In this world, chocolate is no longer an ordinary everyday treat. It becomes something people preserve, collect and think twice about consuming.',
      'I wanted to explore this change through a physical object. Instead of designing another traditional chocolate box, I imagined a small collection that presents chocolate more like a museum artefact.',
    ],
    lead: 'The project began with one question:',
    question: 'If only a small amount of real cocoa remained, would we still treat chocolate in the same way?',
    note: 'This is a speculative design scenario informed by climate-related cocoa research, not a prediction of what will happen in 2060.',
    images: [
      { key: 'ai-world-2060', caption: 'AI-generated world-building image — early visual exploration, not a photograph.', alt: 'AI-generated concept image of a future city where a gallery advertises real cocoa.' },
      { key: 'ai-split-pod-concept', caption: 'AI-generated chocolate concept — early visual exploration, not the final product.', alt: 'AI-generated concept board of sculptural cocoa-pod chocolate pieces.' },
    ],
  },

  development: {
    eyebrow: '02 / Design development',
    title: 'The idea changed when I looked at the chocolate itself.',
    body: [
      'My first direction was a 3 × 4 Memory Grid. Only two of the twelve spaces contained chocolate, leaving the other ten empty. The empty spaces were intended to make scarcity visible.',
      'However, the feedback made me realise that the chocolate itself still looked too similar to an ordinary product. The idea was present in the packaging, but it was not strong enough in the object.',
      'I decided to change the approach. Instead of using a cocoa pod as decoration on a traditional chocolate shape, I made the cocoa pod the starting point for the form itself.',
      'The final design, Split Pod Relics 01 / 02, consists of two asymmetrical but complementary pieces. Each one looks like a fragment of the same cocoa pod. Seen together, they suggest the outline of one complete pod.',
      'I liked this relationship because the two pieces are connected, but neither one tells the whole story on its own. The idea of scarcity becomes part of the shape, rather than something that only needs to be explained on the packaging.',
    ],
    keyIdea: 'Two separate forms, one shared origin.',
    steps: [
      { key: 'ai-memory-grid-box', label: 'Memory Grid', caption: 'AI-generated box image (early exploration)', alt: 'AI-generated image of a 3 × 4 chocolate box with only two pieces.' },
      { key: 'fusion-initial-blocks', label: 'Initial chocolate form', caption: 'Fusion — block chocolates', alt: 'Fusion screenshot of block-shaped chocolates with cocoa-pod reliefs.' },
      { key: 'ai-split-pod-concept', label: 'Concept exploration', caption: 'AI-generated concept (early exploration)', alt: 'AI-generated concept board of split cocoa-pod chocolate forms.' },
      { key: 'fusion-pair-render', label: 'Final Fusion model', caption: 'Split Pod Relics 01 / 02', alt: 'Fusion render of the two final chocolate fragments side by side.' },
    ],
  },

  cad: {
    eyebrow: '03 / CAD & form development',
    title: 'From an idea to two physical forms.',
    body: [
      'I developed the two chocolate fragments in Autodesk Fusion. I wanted them to feel organic and recognisably connected to a cocoa pod, but they also needed to work as physical objects.',
      'I used separate bottom, middle and top profiles to build the two forms with Loft. This allowed each piece to keep its own proportions while still feeling like part of the same object.',
      'I then refined the outer edges, added shallow raised cocoa-pod ribs, and included the 01 / 02 markings. I kept the details relatively shallow and the edges rounded so the forms would be easier to print and remove from a mould.',
      'The model was controlled through named parameters, so I could adjust the overall size, proportions, draft angle, ribs and other details without rebuilding the whole model.',
    ],
    closing: 'What mattered most to me was thinking about how the object would be made, not just how it looked on screen.',
    loft: [
      { key: 'loft-1', label: 'Pod reference' },
      { key: 'loft-2', label: 'Progressive body construction' },
      { key: 'loft-3', label: 'Edge refinement' },
      { key: 'loft-4', label: 'Ribs, vent and 01 / 02' },
    ],
    specsTitle: 'Selected design details',
    specs: [
      { k: 'Scale factor', v: '1.2' },
      { k: 'Unit length', v: '67.2 mm' },
      { k: 'Pod width', v: '38.4 mm' },
      { k: 'Maximum height', v: '16.8 mm' },
      { k: 'Gap between the pair', v: '7.2 mm' },
      { k: 'Draft angle', v: '5°' },
      { k: 'Cleaned-up Fusion model', v: '38 named parameters, 46 timeline steps' },
    ],
  },

  prototyping: {
    eyebrow: '04 / Physical prototyping',
    title: 'The first test showed me what the digital model could not.',
    body: [
      'I started by 3D printing the two chocolate forms. The first version was smaller and kept both pieces on a shared base plate. I thought this would make the vacuum-forming process easier, but the first moulding test showed a problem: the plastic sheet could not fully sink into the narrow space between the two pieces, so the two cavities became connected.',
      'I changed the model by increasing its scale to 1.2 and removing the fixed base plate. During the next moulding test, I placed the two printed pieces separately with temporary cardboard supports to create more space between them. This made the two cavities much clearer.',
      'After vacuum forming, I used the mould to cast plaster versions. The main cocoa-pod outlines and larger raised ribs were retained, and the pieces could be removed from the mould. However, some of the smaller 01 / 02 details became blurred. There were also bubbles and excess connections in parts of the plaster cast.',
      'The process reminded me that a detail that looks clear in CAD does not always survive printing, moulding and casting.',
    ],
    sequence: [
      { key: 'print-first-version', caption: 'First print — both pieces on a shared base plate', alt: 'White 3D-printed chocolate forms: one pair fixed on a base plate, one pair printed separately.' },
      { key: 'vacuum-first-bridged', caption: 'First vacuum-forming test — the film bridged the two cavities', alt: 'Clear vacuum-formed plastic where the two cavities are joined by a bridge of film in the middle.', failed: true },
      { key: 'vacuum-revised', caption: 'Revised mould — two separate cavities', alt: 'Revised vacuum-formed mould with two separate cavities holding plaster.' },
      { key: 'plaster-cast', caption: 'Plaster cast removed from the mould', alt: 'Two white plaster casts of the cocoa-pod forms lying on a dark mat.' },
    ],
    changedTitle: 'What changed after testing?',
    first: { label: 'First version', items: ['Smaller chocolate forms', 'Shared base plate', 'Narrow gap between the two pieces', 'Vacuum-forming film bridged the two cavities'] },
    revised: { label: 'Revised version', items: ['Model enlarged to 1.2×', 'Fixed base plate removed', 'Two pieces positioned independently', 'Clearer separation between the mould cavities'] },
    printTime: { before: '33 min 5 s', after: '25 min 24 s', note: 'Recorded 3D-printing time after removing the base plate and changing the model.' },
    detail: { key: 'plaster-detail-loss', caption: 'Plaster cast — the larger ribs survived, the small 01 / 02 detail blurred', alt: 'Close-up of a plaster cast held in a hand, showing blurred small details and an excess connection.' },
    improveTitle: 'What I would improve next',
    improve:
      'I would make the 01 / 02 numbers larger, review the spacing around the ventilation holes, and test the details again before making the final mould. For plaster casting, I would mix more slowly, pour in one continuous stream and gently tap the mould to help release trapped air.',
  },

  case: {
    eyebrow: '05 / Packaging & structure',
    title: 'A box that reveals the collection slowly.',
    body: [
      'Once the chocolate forms were established, I designed a protective case that could hold and display both pieces.',
      'I did not want the packaging to work like an ordinary chocolate tray. It needed to feel more like a small archive or display case, while still allowing the user to open it and take out the objects.',
      'The final structure uses eleven laser-cut plywood components. Four interlocking support beams form the internal framework, while a raised display platform holds the two chocolate pieces above the lower structure.',
      'A fixed U-shaped inner shell covers the support frame. The curved outer cover protects the collection and opens through a laser-cut Living Hinge.',
      'I also added cocoa-pod-shaped observation windows and engraved details to connect the packaging back to the natural form that inspired the chocolate.',
    ],
    image: { key: 'box-closed', caption: 'The laser-cut case, closed', alt: 'The closed plywood case with engraved contour lines and two cocoa-pod-shaped windows.' },
    specsTitle: 'Selected specifications',
    specs: [
      { k: 'Overall dimensions', v: '172 × 120 × 45 mm' },
      { k: 'Material', v: '3 mm plywood' },
      { k: 'Main components', v: '11 laser-cut panels' },
      { k: 'Internal structure', v: 'Four interlocking support beams' },
      { k: 'Opening mechanism', v: 'Laser-cut Living Hinge' },
    ],
    structureTitle: 'The structure behind the box',
    structure: [
      'The four support beams use interlocking half-lap joints. The internal frame supports the shell and creates space for the raised display platform.',
      'The fixed inner shell keeps the structure neat, while the curved outer cover creates the opening movement. The observation windows reveal only part of the collection before the box is opened.',
    ],
    structureImages: [
      { key: 'box-components', caption: 'The eleven components, laid flat', alt: 'Fusion layout of the eleven flat components of the case.' },
      { key: 'box-frame-render', caption: 'Internal support frame (Fusion)', alt: 'Fusion render of the internal frame with four interlocking beams and the raised platform.' },
      { key: 'box-halflap', caption: 'Half-lap joints between the beams', alt: 'Fusion render of the four support beams slotted together with half-lap joints.' },
      { key: 'box-windows', caption: 'Observation windows and engraved surface', alt: 'Close-up of the engraved contour lines and two cocoa-pod-shaped windows in the plywood lid.' },
    ],
  },

  hinge: {
    eyebrow: '06 / Testing & redesign',
    title: 'The first Living Hinge broke. So I redesigned it.',
    body: [
      'The first laser-cut box assembled successfully at the finger-jointed connections, but the outer cover broke when I tried to bend it. Some of the narrow plywood strips split, and the cover could not form the smooth curve I had planned.',
      'Looking back at the design, I found that the flexible area was too limited and the transition between the flexible and rigid sections was too sudden. Some of the hinge cuts also did not extend far enough towards the edge of the sheet.',
      'I changed the geometry rather than simply trying to force the first version to bend.',
    ],
    failure: { key: 'hinge-failure', caption: 'First Living Hinge — the strips split while bending', alt: 'Hand holding the first plywood box with the hinged cover split and lifting away.' },
    redesignTitle: 'The redesign',
    redesign: [
      'Box width increased from 110 mm to 120 mm.',
      'Inner shell bending radius increased from R10 to R15.',
      'Outer shell inner bending radius increased from R13.5 to R18.5.',
      'The flexible area was extended.',
      '177 staggered slits were distributed across four hinge areas.',
      'The revised pattern used a 1.5 mm pitch, 4 mm connection bridge and 6 mm end clearance for the closed slits.',
    ],
    result: [
      'The revised hinge could bend and form the intended curve. However, the final assembled box still showed visible gaps between some components. The physical plywood did not behave exactly like the idealised Fusion model.',
      'Some laser-cut areas also did not cut fully through. I later found that the plywood surface was not completely flat, which may have changed the distance between the sheet and the laser focus.',
    ],
    redesignImages: [
      { key: 'hinge-radii-fusion', caption: 'Fusion — revised corner radii', alt: 'Fusion side profile of the shell with larger rounded corners.' },
      { key: 'hinge-bend', caption: 'Revised hinge — the bend is achieved', alt: 'Close-up of the revised plywood hinge bending smoothly around the corner of the box.' },
      { key: 'hinge-gap', caption: 'Final assembly — a visible gap remains', alt: 'The assembled box held in a hand, showing a gap between the hinged cover and the side panel.' },
    ],
    learnedTitle: 'What I learned',
    learned: [
      'A flexible mechanism cannot be judged only by its digital geometry. Material thickness, surface flatness, kerf, laser focus and the transition between flexible and rigid areas all affect the final result.',
      'For another iteration, I would test different slit lengths, spacing, bridge widths and bending radii on small samples first. I would also measure the actual plywood thickness and kerf, check sheet flatness and confirm laser focus before cutting the full set of parts.',
    ],
  },

  unboxing: {
    eyebrow: '07 / User experience',
    title: 'From protection to discovery.',
    intro:
      'I designed the opening sequence as part of the experience. Before the box is opened, the two cocoa-pod-shaped windows only give a partial view of the collection. The user has to lift the curved cover to see the two pieces properly.',
    outro: 'The sequence is deliberately simple. I wanted the act of opening the box to feel different from opening ordinary food packaging.',
    steps: [
      { key: 'unboxing-01', title: 'Fully closed', text: 'The case protects the collection. The small cocoa-pod-shaped windows offer only a partial glimpse of what is inside.', alt: 'The closed plywood case on a desk, two small cocoa-pod-shaped windows in the lid.' },
      { key: 'unboxing-02', title: 'Opening the lid', text: 'The user holds the box and gently lifts the curved outer cover. The Living Hinge bends as the case opens.', alt: 'A hand lifting the curved lid of the case a little way.' },
      { key: 'unboxing-03', title: 'Relics revealed', text: 'The two chocolate forms appear on the raised display platform, supported by the internal frame.', alt: 'The lid held open, revealing the two cocoa-pod pieces on the raised platform.' },
      { key: 'unboxing-04', title: 'Taking out a piece', text: 'The user lifts one of the chocolate pieces from the display.', alt: 'A hand lifting one of the two pieces out of the open case.' },
      { key: 'unboxing-05', title: 'Collection removed', text: 'Once both pieces are removed, the empty display platform becomes visible. The absence reminds the user that the collection is no longer complete.', alt: 'Both pieces resting on the desk in front of the case after being taken out.' },
    ],
    shortcuts: [
      { label: 'View the closed case', step: 0 },
      { label: 'Reveal the collection', step: 2 },
    ],
  },

  blender: {
    eyebrow: '08 / Digital visualisation',
    title: 'Presenting the collection as something worth preserving.',
    body: [
      'I used Blender to explore how Cocoa Reserve could be presented in its imagined 2060 setting.',
      'I first built a simplified scene with basic geometry to test the spacing, materials, lighting and camera composition. This helped me work out the display environment before bringing in the more detailed models.',
      'I then integrated the Fusion geometry and packaging into the final scene. The two chocolate forms sit inside the protective case, which is placed on a light-coloured travertine plinth.',
      'I chose a restrained material palette to make the collection feel preserved rather than displayed like an ordinary confectionery product.',
    ],
    scene: { key: 'blender-scene', caption: 'Final scene with the Fusion geometry integrated', alt: 'Blender render of the case with its lid raised on a travertine plinth, the two chocolate forms inside.' },
    blockout: { key: 'blender-blockout', caption: 'Early blockout — simple geometry stands in for the chocolate', alt: 'Blender viewport of the early grey blockout scene with two stretched spheres on a tray.' },
    materialsTitle: 'Four materials',
    materials: [
      { id: 'cacao', label: 'Preserved Cacao', text: 'Deep brown tones and subtle surface variation give the two pieces a natural, aged appearance.', alt: 'Render of a deep brown sphere with a fine, slightly glossy surface.' },
      { id: 'bronze', label: 'Smoked Bronze', text: 'A warm, dark metallic finish creates controlled highlights on the protective casing.', alt: 'Render of a dark metallic sphere with warm speckled highlights.' },
      { id: 'travertine', label: 'Porous Travertine', text: 'A pale mineral surface creates a quiet display base and separates the collection from the darker case.', alt: 'Render of a pale stone sphere with small irregular pores.' },
      { id: 'charcoal', label: 'Charcoal Insert', text: 'A low-reflective dark lining reduces distraction and helps the two cocoa forms stand out.', alt: 'Render of a matte near-black sphere.' },
    ],
    materialsNote: 'Material spheres rendered in the early blockout scene.',
    experimentsTitle: 'Material experiments',
    experiments: [
      'The first cocoa shader looked too much like water droplets, so I changed the texture approach to create a more continuous surface. The early travertine material had stretched directional lines, so I adjusted the texture coordinates and combined Noise, Voronoi and Bump nodes to create more irregular mineral-like pores.',
      'The first bronze material looked too flat, so I added subtle warm colour variation and more controlled reflections.',
      'The pores on the travertine are simulated with shader bump rather than actual geometric holes. The cocoa surface also still has a slightly leather-like appearance under some strong lighting. These are limitations of the render, not physical surface details.',
    ],
    compares: [
      { id: 'cacao', label: 'Cocoa surface', alt: 'cocoa surface close-up' },
      { id: 'travertine', label: 'Travertine plinth', alt: 'travertine surface close-up' },
      { id: 'bronze', label: 'Bronze casing', alt: 'bronze casing close-up' },
    ],
    comparesNote: 'Same camera and lighting in each pair; only the material changes. Rendered in the early blockout scene.',
    lightingTitle: 'Lighting and camera',
    lightingIntro: 'I tested different light positions and camera compositions before choosing the final view.',
    settings: [
      { k: 'Warm key light', v: '3200 W' },
      { k: 'Cooler fill light', v: '1800 W' },
      { k: 'World / HDRI intensity', v: '0.65' },
      { k: 'Hero camera', v: '78 mm, three-quarter view' },
      { k: 'Top camera', v: '70 mm' },
      { k: 'Render engine', v: 'Cycles CPU' },
      { k: 'Maximum samples', v: '192' },
      { k: 'Noise threshold', v: '0.01' },
      { k: 'Denoising', v: 'OpenImageDenoise' },
      { k: 'Colour management', v: 'AgX' },
      { k: 'Final render size (Blender module)', v: '1800 × 1350 px' },
    ],
    lights: [
      { key: 'light-a', label: 'A — Low fill', alt: 'Blockout render with deep, dark shadows.' },
      { key: 'light-b', label: 'B — Open shadows', alt: 'Blockout render with a brighter fill light opening the shadows.' },
      { key: 'light-c', label: 'C — Grazing key', alt: 'Blockout render lit by a low, repositioned key light.' },
      { key: 'light-d', label: 'D — Final lighting', alt: 'Blockout render with the final balanced lighting.' },
    ],
    cameras: [
      { key: 'cam-1', label: '28 mm', alt: 'Blockout scene through a 28 mm lens.' },
      { key: 'cam-2', label: '50 mm', alt: 'Blockout scene through a 50 mm lens.' },
      { key: 'cam-3', label: '78 mm — selected', alt: 'Blockout scene through the selected 78 mm lens.' },
    ],
    cameraNote: 'The 78 mm Hero view reduced obvious perspective exaggeration while keeping the two chocolate forms, protective case and display base in one composition.',
    testsNote: 'Lighting tests A–D and camera tests rendered in the early blockout scene.',
  },

  poster: {
    eyebrow: '09 / Communication & design response',
    title: 'Making the idea easier to understand.',
    intro:
      'The first A4 poster included several product images and a longer explanation of the 2060 scenario. During the A4 Expo, I received feedback that helped me see where the presentation was not clear enough.',
    feedbackTitle: 'What people told me',
    feedback: [
      'The cocoa-pod form was interesting, but the shapes could look more three-dimensional and include more detail.',
      'The meaning behind the two chocolate pieces was not clear enough.',
      'The connection between the two pieces and cocoa scarcity needed to be explained more clearly.',
      'It was difficult to tell whether the project was a museum exhibit or a product people could buy.',
    ],
    changedTitle: 'What I changed',
    changed:
      'I redesigned the poster with a darker background, a larger main product image, more prominent typography and less text. I wanted the object to become the first thing people noticed.',
    contextsLead: 'I also thought more carefully about where the idea could be presented:',
    contexts: [
      { k: 'Bus stop posters', v: 'could attract the public and invite people to visit a museum exhibition of the remaining cocoa relics.' },
      { k: 'First-class cabin magazines', v: 'could introduce rare chocolate collections to private collectors.' },
    ],
    contextsOutro: 'These two contexts helped me distinguish between public viewing and private ownership.',
    stillTitle: 'What still needs work',
    still: [
      'The revised poster has a stronger visual focus and makes Cocoa Reserve feel more like a collectible. However, reducing the text also made the 2060 scenario less clear, and the two chocolate pieces are still not easy to see in enough detail.',
      'In a future version, I would keep the stronger visual hierarchy but add a clearer explanation of the two-piece concept and larger detail images.',
    ],
    before: { key: 'poster-original', caption: 'Before — A4 Expo poster', alt: 'The original light-coloured A4 poster with three product images and a paragraph of text.' },
    after: { key: 'poster-revised', caption: 'After — revised poster', alt: 'The revised dark poster with one large render of the case and large title type.' },
    notes: { key: 'expo-feedback', caption: 'The four handwritten feedback notes from the A4 Expo', alt: 'Four yellow sticky notes with handwritten feedback about the poster and the two chocolate pieces.' },
  },

  reflection: {
    eyebrow: '10 / What I took from the project',
    title: 'A good idea has to survive the making process.',
    body: [
      'This project helped me understand how many decisions sit between an idea and a finished object.',
      'At the beginning, I was mainly thinking about how to make the chocolate look different. As the project developed, I had to think about the shape, the mould, the packaging, the opening mechanism, the materials and the way the final object would be presented.',
      'The most useful moments were often the unsuccessful ones. The first vacuum-forming test showed that the two pieces needed more space. The first Living Hinge showed that the bending area and its transition into the rigid structure needed more thought. The final laser-cut box could bend, but it still had gaps that were not obvious in the digital model.',
      'Blender taught me a different lesson. A material can look convincing in one lighting setup and completely different in another. I had to compare the results rather than assume that a more complicated shader would automatically look better.',
      'If I continue this project, I would spend more time testing material behaviour and manufacturing tolerances before producing the full set of parts. I would also improve the visibility of the small details and make the relationship between the two chocolate pieces clearer in the final presentation.',
    ],
    closing:
      'For me, Cocoa Reserve became a project about more than making a product. It was about turning an idea into something physical, testing it, finding what did not work and making better decisions from there.',
  },

  credits: {
    referencesTitle: 'Research references',
    references: [
      {
        text: 'Asante, P. A., Rahn, E., Anten, N. P., Zuidema, P. A., Morales, A., & Rozendaal, D. M. (2025). Climate change impacts on cocoa production in the major producing countries of West and Central Africa by mid-century. Agricultural and Forest Meteorology, 362, 110393.',
        url: 'https://doi.org/10.1016/j.agrformet.2025.110393',
      },
      {
        text: 'Lander, T. A., Atta-Boateng, A., Toledo-Hernández, M., Wood, A., Malhi, Y., Solé, M., Tscharntke, T., & Wanger, T. C. (2025). Global chocolate supply is limited by low pollination and high temperatures. Communications Earth & Environment, 6(1).',
        url: 'https://doi.org/10.1038/s43247-025-02072-z',
      },
      {
        text: 'Wronkowski, G. (2026, January 30). Monochrome Studio 03. Poly Haven.',
        url: 'https://polyhaven.com/a/monochrome_studio_03',
      },
    ],
    toolsTitle: 'Tools & process',
    tools: 'Autodesk Fusion · Rhino · Blender · 3D printing · Vacuum forming · Plaster casting · Laser cutting',
    aiTitle: 'AI and tool acknowledgement',
    ai: 'I used ChatGPT to help explore early concepts, generate preliminary visual concept images from my own ideas, and understand some technical modelling and material workflows. I also used AI assistance to explore Blender shader nodes and check scene parameters. I used Claude and other coding assistance during parts of the parametric modelling and technical workflow. I tested and reviewed the results in the relevant software and through physical prototypes. The final design decisions, modelling direction, fabrication choices, material selection, photography, evaluation and reflections are my own.',
  },
};

type Copy = typeof en;

const zh: Copy = {
  hero: {
    eyebrow: '思辨产品设计 · 实体原型',
    title: 'Cocoa Reserve',
    tagline: '两种形态，同一个起源。',
    sub: '一件可收藏的巧克力器物，探讨 2060 年的稀缺、保存与价值。',
    question: '如果巧克力变成需要保存、而不是拿来吃掉的东西，会怎样？',
    intro:
      '在一个想象中的未来，真正的可可不再是日常资源。Cocoa Reserve 把两块巧克力变成一对值得保护的器物。',
    ctaPrimary: '了解项目',
    ctaSecondary: '查看制作过程',
    details: [
      { k: '项目类型', v: '个人设计项目' },
      { k: '重点', v: '概念发展、产品设计、实体原型与可视化' },
      { k: '工具', v: 'Autodesk Fusion、Rhino、Blender' },
      { k: '工艺', v: '3D 打印、真空成型、石膏翻模与激光切割' },
    ],
    imageAlt: 'Blender 最终渲染：烟熏青铜色的盒子，弧形盖子半开，里面露出两块巧克力，放在浅色石灰华底座上。',
  },

  idea: {
    eyebrow: '01 / 概念',
    title: '当熟悉的东西变得稀有，会发生什么？',
    body: [
      '我设想了 2060 年的未来。气候变化影响了适合种植可可的地区，真正的可可变成需要保护和配给的稀缺资源。',
      '在这个世界里，巧克力不再是普通的日常零食，而是人们会保存、收藏，并且在吃之前会犹豫的东西。',
      '我想通过一件实体物品来探索这种变化。我没有再设计一个传统的巧克力盒，而是设想了一组小小的收藏，让巧克力更像博物馆里的文物。',
    ],
    lead: '项目从一个问题开始：',
    question: '如果真正的可可只剩下很少一点，我们还会用同样的方式对待巧克力吗？',
    note: '这是一个参考了气候与可可相关研究的思辨设计情境，并不是对 2060 年的预测。',
    images: [
      { key: 'ai-world-2060', caption: 'AI 生成的世界观图像——早期视觉探索，不是照片。', alt: 'AI 生成的概念图：未来城市中，一家画廊在宣传真正的可可。' },
      { key: 'ai-split-pod-concept', caption: 'AI 生成的巧克力概念——早期视觉探索，不是最终产品。', alt: 'AI 生成的概念板：雕塑感的可可荚形巧克力。' },
    ],
  },

  development: {
    eyebrow: '02 / 设计发展',
    title: '当我开始审视巧克力本身，想法改变了。',
    body: [
      '我最初的方向是 3 × 4 的“记忆格”（Memory Grid）。十二个格子里只有两个放了巧克力，其余十个是空的，希望用空格让稀缺变得可见。',
      '但反馈让我意识到，巧克力本身看起来还是太像普通产品。这个想法体现在包装上，却没有足够地体现在物品本身。',
      '于是我改变了做法。我不再把可可荚当作传统巧克力上的装饰，而是让可可荚成为造型本身的起点。',
      '最终设计 Split Pod Relics 01 / 02 由两块不对称但互补的部分组成。每一块都像同一个可可荚的碎片，放在一起时，能看出一个完整可可荚的轮廓。',
      '我喜欢这种关系：两块彼此相连，但任何一块都无法单独讲完整个故事。稀缺的概念因此成为造型的一部分，而不只是需要在包装上解释的东西。',
    ],
    keyIdea: '两种分开的形态，同一个起源。',
    steps: [
      { key: 'ai-memory-grid-box', label: '记忆格', caption: 'AI 生成的盒子图像（早期探索）', alt: 'AI 生成的图像：3 × 4 的巧克力盒，里面只有两块巧克力。' },
      { key: 'fusion-initial-blocks', label: '最初的巧克力造型', caption: 'Fusion——方块巧克力', alt: 'Fusion 截图：带可可荚浮雕的方块巧克力。' },
      { key: 'ai-split-pod-concept', label: '概念探索', caption: 'AI 生成的概念（早期探索）', alt: 'AI 生成的概念板：分开的可可荚形巧克力。' },
      { key: 'fusion-pair-render', label: '最终 Fusion 模型', caption: 'Split Pod Relics 01 / 02', alt: 'Fusion 渲染：两块最终的巧克力碎片并排放置。' },
    ],
  },

  cad: {
    eyebrow: '03 / CAD 与造型发展',
    title: '从一个想法到两个实体造型。',
    body: [
      '我在 Autodesk Fusion 中建立了这两块巧克力碎片。我希望它们有机、能让人一眼联想到可可荚，同时也要能作为实体物品制作出来。',
      '我分别建立底部、中部和顶部的截面轮廓，用 Loft（放样）生成两个形体。这样每一块都能保持自己的比例，同时又像是同一件物品的一部分。',
      '之后我细化了外缘，加上浅浅凸起的可可荚纹理，并加入 01 / 02 标记。我让细节保持较浅、边缘保持圆润，方便打印和脱模。',
      '模型由命名参数控制，因此我可以调整整体尺寸、比例、拔模角、纹理等细节，而不需要重建整个模型。',
    ],
    closing: '对我来说最重要的，是思考这件物品要怎样被做出来，而不只是它在屏幕上看起来如何。',
    loft: [
      { key: 'loft-1', label: '可可荚参考' },
      { key: 'loft-2', label: '逐步构建形体' },
      { key: 'loft-3', label: '边缘细化' },
      { key: 'loft-4', label: '纹理、通气孔与 01 / 02' },
    ],
    specsTitle: '部分设计参数',
    specs: [
      { k: '缩放系数', v: '1.2' },
      { k: '单位长度', v: '67.2 mm' },
      { k: '可可荚宽度', v: '38.4 mm' },
      { k: '最大高度', v: '16.8 mm' },
      { k: '两块之间的间距', v: '7.2 mm' },
      { k: '拔模角', v: '5°' },
      { k: '整理后的 Fusion 模型', v: '38 个命名参数，46 个时间轴步骤' },
    ],
  },

  prototyping: {
    eyebrow: '04 / 实体原型',
    title: '第一次测试，让我看到了数字模型看不到的东西。',
    body: [
      '我先 3D 打印了两块巧克力造型。第一版尺寸较小，两块放在同一块底板上。我以为这样能让真空成型更容易，但第一次成型测试暴露了问题：塑料片无法完全陷进两块之间狭窄的空隙，两个模腔连在了一起。',
      '我修改了模型：把比例放大到 1.2，并去掉固定底板。下一次成型时，我把两块打印件分开摆放，用临时的纸板支撑拉开间距。这样两个模腔清晰多了。',
      '真空成型之后，我用模具翻出了石膏版本。可可荚的主要轮廓和较大的凸起纹理都保留了下来，也能顺利脱模。但一些较小的 01 / 02 细节变得模糊，石膏局部还出现了气泡和多余的连接。',
      '这个过程提醒我：在 CAD 里看起来清晰的细节，不一定能经受住打印、成型和翻模。',
    ],
    sequence: [
      { key: 'print-first-version', caption: '第一次打印——两块放在同一块底板上', alt: '白色 3D 打印的巧克力造型：一组固定在底板上，另一组单独打印。' },
      { key: 'vacuum-first-bridged', caption: '第一次真空成型测试——塑料片把两个模腔连在了一起', alt: '透明的真空成型塑料，两个模腔中间被一道塑料桥连接。', failed: true },
      { key: 'vacuum-revised', caption: '修改后的模具——两个独立的模腔', alt: '修改后的真空成型模具，两个独立模腔里装着石膏。' },
      { key: 'plaster-cast', caption: '脱模后的石膏件', alt: '两块白色石膏可可荚造型放在深色垫子上。' },
    ],
    changedTitle: '测试之后改了什么？',
    first: { label: '第一版', items: ['巧克力造型较小', '共用一块底板', '两块之间间隙狭窄', '真空成型时塑料片把两个模腔连在一起'] },
    revised: { label: '修改版', items: ['模型放大到 1.2 倍', '去掉固定底板', '两块独立摆放', '模腔之间分得更清楚'] },
    printTime: { before: '33 分 5 秒', after: '25 分 24 秒', note: '去掉底板、修改模型后记录的 3D 打印时间。' },
    detail: { key: 'plaster-detail-loss', caption: '石膏件——较大的纹理保留了下来，小的 01 / 02 细节变模糊', alt: '手拿石膏件的特写，可以看到模糊的小细节和多余的连接。' },
    improveTitle: '下一步我会怎样改进',
    improve:
      '我会把 01 / 02 数字做大，重新检查通气孔周围的间距，并在制作最终模具前再次测试细节。石膏翻模时，我会更慢地搅拌、一次连续倒入，并轻敲模具帮助排出气泡。',
  },

  case: {
    eyebrow: '05 / 包装与结构',
    title: '一个慢慢展示收藏的盒子。',
    body: [
      '确定巧克力造型之后，我设计了一个能容纳并展示这两块巧克力的保护盒。',
      '我不希望它像普通的巧克力托盘。它需要更像一个小型档案盒或展示柜，同时又能让使用者打开、取出里面的物品。',
      '最终结构由十一块激光切割的胶合板组成。四根互相咬合的支撑梁构成内部框架，抬高的展示台把两块巧克力托在下层结构之上。',
      '固定的 U 形内壳包住支撑框架。弧形外盖保护收藏，并通过激光切割的活动铰链（Living Hinge）打开。',
      '我还加入了可可荚形状的观察窗和雕刻细节，让包装与启发巧克力造型的自然形态联系起来。',
    ],
    image: { key: 'box-closed', caption: '激光切割的盒子，合上状态', alt: '合上的胶合板盒子，表面刻有等高线，盖上有两个可可荚形状的窗口。' },
    specsTitle: '部分规格',
    specs: [
      { k: '整体尺寸', v: '172 × 120 × 45 mm' },
      { k: '材料', v: '3 mm 胶合板' },
      { k: '主要部件', v: '11 块激光切割板' },
      { k: '内部结构', v: '四根互相咬合的支撑梁' },
      { k: '开合方式', v: '激光切割活动铰链' },
    ],
    structureTitle: '盒子背后的结构',
    structure: [
      '四根支撑梁用半搭接（half-lap）方式互相咬合。内部框架支撑外壳，并为抬高的展示台留出空间。',
      '固定的内壳让结构保持整洁，弧形外盖则带来开合的动作。打开之前，观察窗只露出收藏的一部分。',
    ],
    structureImages: [
      { key: 'box-components', caption: '十一块部件平铺展示', alt: 'Fusion 中盒子十一块平面部件的排版。' },
      { key: 'box-frame-render', caption: '内部支撑框架（Fusion）', alt: 'Fusion 渲染：由四根咬合支撑梁和抬高展示台组成的内部框架。' },
      { key: 'box-halflap', caption: '支撑梁之间的半搭接', alt: 'Fusion 渲染：四根支撑梁通过半搭接卡在一起。' },
      { key: 'box-windows', caption: '观察窗与雕刻表面', alt: '胶合板盖上雕刻的等高线和两个可可荚形窗口的特写。' },
    ],
  },

  hinge: {
    eyebrow: '06 / 测试与重新设计',
    title: '第一版活动铰链断了，所以我重新设计了它。',
    body: [
      '第一次激光切割的盒子在指接处顺利拼装，但当我试着弯折外盖时，它断了。一些狭窄的胶合板条裂开，外盖无法形成我设计的平滑弧线。',
      '回头检查设计，我发现可弯折的区域太小，弯折区与刚性区之间的过渡太突然，部分铰链切口也没有延伸到足够靠近板边的位置。',
      '我选择修改几何结构，而不是硬把第一版掰弯。',
    ],
    failure: { key: 'hinge-failure', caption: '第一版活动铰链——弯折时板条裂开', alt: '手拿第一版胶合板盒子，铰链外盖裂开翘起。' },
    redesignTitle: '重新设计',
    redesign: [
      '盒子宽度从 110 mm 增加到 120 mm。',
      '内壳弯折半径从 R10 增加到 R15。',
      '外壳内侧弯折半径从 R13.5 增加到 R18.5。',
      '扩大了可弯折区域。',
      '四个铰链区域共分布 177 条交错切缝。',
      '修改后的图案使用 1.5 mm 间距、4 mm 连接桥，封闭切缝两端留 6 mm 余量。',
    ],
    result: [
      '修改后的铰链可以弯折，形成预期的弧线。但最终组装的盒子在部分部件之间仍有明显缝隙。实际的胶合板并不会完全像理想化的 Fusion 模型那样表现。',
      '还有一些区域没有完全切透。后来我发现胶合板表面并不完全平整，这可能改变了板材与激光焦点之间的距离。',
    ],
    redesignImages: [
      { key: 'hinge-radii-fusion', caption: 'Fusion——修改后的转角半径', alt: 'Fusion 中外壳的侧面轮廓，转角更圆。' },
      { key: 'hinge-bend', caption: '修改后的铰链——成功弯折', alt: '修改后的胶合板铰链绕着盒子转角平滑弯折的特写。' },
      { key: 'hinge-gap', caption: '最终组装——仍有可见缝隙', alt: '手拿组装好的盒子，铰链外盖与侧板之间有一道缝隙。' },
    ],
    learnedTitle: '我的收获',
    learned: [
      '柔性结构不能只靠数字几何来判断。材料厚度、表面平整度、切缝宽度（kerf）、激光焦点，以及柔性区与刚性区之间的过渡，都会影响最终结果。',
      '如果再做一轮，我会先用小样测试不同的切缝长度、间距、连接桥宽度和弯折半径；也会测量胶合板的实际厚度和切缝宽度，检查板材平整度，并在切割整套部件前确认激光焦点。',
    ],
  },

  unboxing: {
    eyebrow: '07 / 使用体验',
    title: '从保护到发现。',
    intro:
      '我把开盒的过程也当作体验的一部分来设计。打开之前，两个可可荚形的窗口只能让人看到收藏的一部分；使用者需要掀起弧形外盖，才能完整看到这两块巧克力。',
    outro: '这个过程刻意保持简单。我希望打开这个盒子的感觉，和打开普通食品包装不一样。',
    steps: [
      { key: 'unboxing-01', title: '完全合上', text: '盒子保护着收藏。小小的可可荚形窗口只能让人瞥见里面的一部分。', alt: '桌上合着的胶合板盒子，盖上有两个可可荚形的小窗口。' },
      { key: 'unboxing-02', title: '掀开盖子', text: '使用者拿着盒子，轻轻掀起弧形外盖，活动铰链随之弯折。', alt: '一只手把盒子的弧形盖子掀开一点。' },
      { key: 'unboxing-03', title: '展示收藏', text: '两块巧克力出现在抬高的展示台上，由内部框架托住。', alt: '盖子被掀开，露出抬高展示台上的两块可可荚巧克力。' },
      { key: 'unboxing-04', title: '取出一块', text: '使用者从展示台上拿起其中一块巧克力。', alt: '一只手从打开的盒子里拿起其中一块。' },
      { key: 'unboxing-05', title: '收藏被取走', text: '两块都被取走后，空的展示台显露出来。这份空缺提醒使用者：这组收藏已经不再完整。', alt: '两块巧克力被取出后放在盒子前的桌面上。' },
    ],
    shortcuts: [
      { label: '查看合上的盒子', step: 0 },
      { label: '展示收藏', step: 2 },
    ],
  },

  blender: {
    eyebrow: '08 / 数字可视化',
    title: '把这组收藏呈现为值得保存的东西。',
    body: [
      '我用 Blender 探索 Cocoa Reserve 在设想的 2060 年情境中可以如何呈现。',
      '我先用基础几何体搭了一个简化场景，测试间距、材质、灯光和镜头构图，在导入更精细的模型之前先确定展示环境。',
      '之后我把 Fusion 模型和包装整合进最终场景。两块巧克力放在保护盒里，盒子摆在浅色的石灰华底座上。',
      '我选择了克制的材质搭配，让这组收藏看起来像被保存的东西，而不是像普通糖果那样陈列。',
    ],
    scene: { key: 'blender-scene', caption: '整合了 Fusion 模型的最终场景', alt: 'Blender 渲染：盖子掀起的盒子放在石灰华底座上，里面是两块巧克力。' },
    blockout: { key: 'blender-blockout', caption: '早期白模——用简单几何体代替巧克力', alt: 'Blender 视口中的早期灰色白模场景，托盘上有两个拉长的球体。' },
    materialsTitle: '四种材质',
    materials: [
      { id: 'cacao', label: '保存的可可', text: '深棕色调和细微的表面变化，让两块巧克力有一种自然、陈旧的质感。', alt: '深棕色球体渲染，表面细腻、略带光泽。' },
      { id: 'bronze', label: '烟熏青铜', text: '温暖深沉的金属质感，在保护盒上形成受控的高光。', alt: '深色金属球体渲染，带有温暖的斑点高光。' },
      { id: 'travertine', label: '多孔石灰华', text: '浅色的矿物表面形成安静的展示底座，也把收藏与深色的盒子区分开。', alt: '浅色石材球体渲染，表面有不规则小孔。' },
      { id: 'charcoal', label: '炭黑内衬', text: '低反光的深色内衬减少干扰，让两块可可造型更突出。', alt: '哑光近黑色球体渲染。' },
    ],
    materialsNote: '材质球在早期白模场景中渲染。',
    experimentsTitle: '材质实验',
    experiments: [
      '第一版可可着色器看起来太像水珠，所以我改变了纹理做法，让表面更连贯。早期的石灰华材质有被拉伸的方向性纹路，我调整了纹理坐标，并组合 Noise、Voronoi 和 Bump 节点，做出更不规则、更像矿物的孔洞。',
      '第一版青铜材质显得太平，于是我加入了细微的暖色变化和更受控的反射。',
      '石灰华上的孔洞是用着色器的凹凸模拟的，并不是真实的几何孔；在一些强光下，可可表面仍然有一点像皮革。这些是渲染的局限，不是实物的表面细节。',
    ],
    compares: [
      { id: 'cacao', label: '可可表面', alt: '可可表面特写' },
      { id: 'travertine', label: '石灰华底座', alt: '石灰华表面特写' },
      { id: 'bronze', label: '青铜外壳', alt: '青铜外壳特写' },
    ],
    comparesNote: '每组对比使用相同的镜头和灯光，只改变材质。在早期白模场景中渲染。',
    lightingTitle: '灯光与镜头',
    lightingIntro: '在确定最终视角前，我测试了不同的灯光位置和镜头构图。',
    settings: [
      { k: '暖色主光', v: '3200 W' },
      { k: '偏冷补光', v: '1800 W' },
      { k: '环境 / HDRI 强度', v: '0.65' },
      { k: '主视角镜头', v: '78 mm，四分之三视角' },
      { k: '顶视镜头', v: '70 mm' },
      { k: '渲染引擎', v: 'Cycles CPU' },
      { k: '最大采样', v: '192' },
      { k: '噪点阈值', v: '0.01' },
      { k: '降噪', v: 'OpenImageDenoise' },
      { k: '色彩管理', v: 'AgX' },
      { k: '最终渲染尺寸（Blender 模块）', v: '1800 × 1350 px' },
    ],
    lights: [
      { key: 'light-a', label: 'A——低补光', alt: '阴影很深的白模渲染。' },
      { key: 'light-b', label: 'B——打开阴影', alt: '补光更亮、阴影被打开的白模渲染。' },
      { key: 'light-c', label: 'C——掠射主光', alt: '用低角度、重新摆放的主光照亮的白模渲染。' },
      { key: 'light-d', label: 'D——最终灯光', alt: '采用最终平衡灯光的白模渲染。' },
    ],
    cameras: [
      { key: 'cam-1', label: '28 mm', alt: '用 28 mm 镜头看到的白模场景。' },
      { key: 'cam-2', label: '50 mm', alt: '用 50 mm 镜头看到的白模场景。' },
      { key: 'cam-3', label: '78 mm——最终选择', alt: '用选定的 78 mm 镜头看到的白模场景。' },
    ],
    cameraNote: '78 mm 的主视角减少了明显的透视夸张，同时能把两块巧克力、保护盒和展示底座放进同一个构图。',
    testsNote: '灯光测试 A–D 和镜头测试均在早期白模场景中渲染。',
  },

  poster: {
    eyebrow: '09 / 传达与设计回应',
    title: '让想法更容易被理解。',
    intro:
      '第一版 A4 海报放了好几张产品图，以及一段较长的 2060 年情境说明。在 A4 展览（A4 Expo）中，我收到的反馈让我看到了表达不够清楚的地方。',
    feedbackTitle: '大家告诉我的',
    feedback: [
      '可可荚造型很有趣，但可以更立体、细节更多。',
      '两块巧克力背后的含义不够清楚。',
      '两块巧克力与可可稀缺之间的联系需要解释得更清楚。',
      '很难分辨这个项目是博物馆展品，还是人们可以购买的产品。',
    ],
    changedTitle: '我改了什么',
    changed:
      '我重新设计了海报：用更深的背景、更大的主产品图、更醒目的字体，并减少文字。我希望物品本身成为人们注意到的第一样东西。',
    contextsLead: '我也更仔细地思考了这个想法可以在哪里呈现：',
    contexts: [
      { k: '公交站海报', v: '可以吸引公众，邀请人们去博物馆看剩下的可可“遗物”展览。' },
      { k: '头等舱杂志', v: '可以向私人收藏家介绍稀有的巧克力收藏。' },
    ],
    contextsOutro: '这两个场景帮助我区分了公共观看与私人拥有。',
    stillTitle: '仍需改进的地方',
    still: [
      '修改后的海报视觉焦点更强，让 Cocoa Reserve 更像一件收藏品。但减少文字也让 2060 年的情境变得不够清楚，两块巧克力的细节也仍然不容易看清。',
      '如果再做一版，我会保留更强的视觉层次，同时更清楚地解释“两块”的概念，并加入更大的细节图。',
    ],
    before: { key: 'poster-original', caption: '之前——A4 展览海报', alt: '原版浅色 A4 海报，有三张产品图和一段文字。' },
    after: { key: 'poster-revised', caption: '之后——修改后的海报', alt: '修改后的深色海报，一张大的盒子渲染图和醒目的大标题。' },
    notes: { key: 'expo-feedback', caption: 'A4 展览中收到的四张手写反馈便签', alt: '四张黄色便利贴，上面手写着对海报和两块巧克力的反馈。' },
  },

  reflection: {
    eyebrow: '10 / 我从项目中带走的',
    title: '好的想法，必须经得起制作过程。',
    body: [
      '这个项目让我理解到，从一个想法到一件完成的物品，中间有多少决定要做。',
      '一开始，我主要在想怎样让巧克力看起来与众不同。随着项目推进，我需要思考造型、模具、包装、开合结构、材质，以及最终物品如何呈现。',
      '最有用的往往是失败的时刻。第一次真空成型告诉我两块巧克力需要更多空间；第一版活动铰链告诉我弯折区及其与刚性结构的过渡需要更多考虑；最终的激光切割盒子能够弯折，却仍有在数字模型里看不出的缝隙。',
      'Blender 给了我另一种体会：同一种材质在一种灯光下很逼真，换一种灯光可能完全不同。我必须比较结果，而不是假设更复杂的着色器就一定更好看。',
      '如果继续这个项目，我会在制作整套部件之前花更多时间测试材料表现和制造公差，也会让小细节更清楚，并在最终呈现中把两块巧克力之间的关系表达得更明白。',
    ],
    closing:
      '对我来说，Cocoa Reserve 不只是做一件产品。它是把想法变成实物、测试它、找出哪里行不通，再由此做出更好决定的过程。',
  },

  credits: {
    referencesTitle: '研究参考',
    references: en.credits.references,
    toolsTitle: '工具与工艺',
    tools: 'Autodesk Fusion · Rhino · Blender · 3D 打印 · 真空成型 · 石膏翻模 · 激光切割',
    aiTitle: 'AI 与工具说明',
    ai: '我使用 ChatGPT 帮助探索早期概念、根据我自己的想法生成初步的概念视觉图，并理解一些建模和材质方面的技术流程。我也借助 AI 探索 Blender 着色器节点、检查场景参数，并在参数化建模和部分技术流程中使用了 Claude 等编程辅助。所有结果都在相应软件中以及通过实体原型进行了测试和审核。最终的设计决定、建模方向、制作选择、材质选择、摄影、评估和反思均由我本人完成。',
  },
};

export const copy: Record<Lang, Copy> = { en, zh };

/** Short interface labels used by the view (carousel names, flags, small captions). */
export const labels: Record<Lang, Record<string, string>> = {
  en: {
    keyIdea: 'Key idea',
    devCarousel: 'From Memory Grid to Split Pod Relics',
    loftCarousel: 'Fusion construction stages',
    loftAlt: 'Fusion screenshot, stage',
    rulerAlt: 'A 3D-printed chocolate form next to a ruler, showing its real size.',
    rulerCap: 'Printed form next to a ruler',
    ribsAlt: 'Fusion close-up of the shallow raised ribs and the 01 / 02 marking.',
    ribsCap: 'Shallow ribs and the 01 / 02 marking',
    failedTest: 'Failed test — ',
    printCarousel: '3D print to plaster cast',
    caseCarousel: 'Case structure',
    failedHinge: 'Failed — first hinge',
    hingeCarousel: 'Hinge redesign',
    unboxing: 'Five-step unboxing sequence',
    materials: 'Blender materials',
    earlyAlt: 'Before: early',
    revisedAlt: 'After: revised',
    lightCarousel: 'Lighting and camera tests',
    prevImage: 'Previous image',
    nextImage: 'Next image',
    creditsH: 'Credits and references',
    projectNav: 'Project navigation',
  },
  zh: {
    keyIdea: '核心想法',
    devCarousel: '从记忆格到 Split Pod Relics',
    loftCarousel: 'Fusion 建模步骤',
    loftAlt: 'Fusion 截图，步骤',
    rulerAlt: '3D 打印的巧克力造型放在尺子旁边，显示实际尺寸。',
    rulerCap: '打印件与尺子对比',
    ribsAlt: 'Fusion 特写：浅浅凸起的纹理和 01 / 02 标记。',
    ribsCap: '浅凸纹理与 01 / 02 标记',
    failedTest: '失败的测试——',
    printCarousel: '从 3D 打印到石膏翻模',
    caseCarousel: '盒子结构',
    failedHinge: '失败——第一版铰链',
    hingeCarousel: '铰链重新设计',
    unboxing: '五步开盒过程',
    materials: 'Blender 材质',
    earlyAlt: '之前：早期的',
    revisedAlt: '之后：修改后的',
    lightCarousel: '灯光与镜头测试',
    prevImage: '上一张',
    nextImage: '下一张',
    creditsH: '署名与参考',
    projectNav: '项目导航',
  },
};
