/**
 * Cocoa Reserve — project page copy (English).
 * Source: md文件/2018/Cocoa_Reserve_Claude_Portfolio_Brief_EN.md, checked against the four DECO2018 PDFs.
 * Accuracy rules (brief § 6): never claim a perfect fit, user testing, sales or production.
 * Never publish the PDFs, the student ID or private document links.
 */

export const copy = {
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
