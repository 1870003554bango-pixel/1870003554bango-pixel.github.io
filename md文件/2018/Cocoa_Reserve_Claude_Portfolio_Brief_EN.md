# COCOA RESERVE --- Portfolio Page Brief for Claude

**Project title:** Cocoa Reserve\
**Tagline:** Two Forms. One Origin.\
**Page language:** English\
**Positioning:** Speculative Product Design · Physical Prototyping ·
Packaging Design · 3D Visualisation\
**Purpose:** Build the second project detail page in Sitan Ding's
existing personal portfolio website.

------------------------------------------------------------------------

## 1. Read this first: source documents and accuracy

Use the four supplied PDFs as the factual source for this project:

1.  `DECO2018_A3_CocoaReserve_SplitPodRelics_540620812 (4)(2).pdf` ---
    concept development, Autodesk Fusion parametric modelling, 3D
    printing, vacuum forming and plaster casting.
2.  `DECO2018_A3_CocoaReserve_SplitPodRelics_Laser cutting_540620812-1(2).pdf`
    --- laser-cut packaging, structural design, material and kerf
    testing, Living Hinge failure and redesign.
3.  `DECO2018_A3_CocoaReserve_SplitPodRelics_Blender_540620812 (3)(2).pdf`
    --- Blender scene development, shaders, material tests, lighting,
    camera tests, rendering and reflection.
4.  `DECO2018_A5_Cocoa_Reserve-1.pdf` --- consolidated project story,
    final advertisement, speculative user experience, five-step unboxing
    sequence, Fusion-to-Blender integration, A4 Expo feedback and final
    reflection.

If these PDFs are not available in the Claude session, ask me to upload
them. Do not infer missing details from filenames or invent results.

These PDFs may contain private student information. Use them only as
private references. Never publish the PDFs, student ID, or private
document links on the website.

### First inspect my existing website

Before coding, inspect the repository, framework, routes, current Home
and Through the Window pages, typography, colours, components and
responsive behaviour.

-   Add Cocoa Reserve as the **second project detail page**.
-   Reuse the existing navigation, footer, typography and spacing
    system.
-   Do not redesign the entire site or break existing routes.
-   Suggested route: `/work/cocoa-reserve/` (adapt to the actual routing
    convention).
-   Keep all website copy in English.
-   Use a personal, clear and reflective tone. It should sound like me
    explaining something I made, not a formal university report or
    agency case study.

### What this project is about

Cocoa Reserve imagines a future set in 2060, when climate change has
reduced the areas suitable for cocoa cultivation and real cocoa has
become a scarce resource that needs to be protected and rationed.

The project turns that scenario into a collectible chocolate artefact.
**Split Pod Relics 01 / 02** are two asymmetrical but complementary
pieces inspired by one cocoa pod. When viewed together, they suggest the
outline of the original pod.

The work developed through concept design, parametric CAD, 3D printing,
vacuum forming, plaster casting, laser-cut packaging and Blender
visualisation. The final object is presented as something to preserve
and display, rather than an ordinary chocolate snack.

The page should communicate the idea, the real making process and what I
learned from the failures. Do not make it look like a simple packaging
exercise.

------------------------------------------------------------------------

## 2. Visual direction

Keep the website's existing light, minimal editorial style. Give this
project its own restrained palette inspired by cocoa, wood and stone:

-   Warm ivory background
-   Deep cocoa / charcoal text
-   Warm grey secondary text
-   Muted terracotta or cocoa-red accent, used sparingly
-   Dark brown and charcoal image backgrounds where appropriate

Suggested CSS tokens (adapt to the existing design system):

``` css
:root {
  --cocoa-bg: #F5F1EA;
  --cocoa-surface: #EAE3D8;
  --cocoa-text: #28231F;
  --cocoa-muted: #82786D;
  --cocoa-accent: #A94F43;
  --cocoa-dark: #211B18;
  --cocoa-line: #D8CEC1;
}
```

Use generous whitespace, strong typography, large images and short
captions. Do not copy the dense layouts of the PDFs. Avoid generic
chocolate or museum stock photography. Use real project photographs, CAD
screenshots and renders. Do not generate fake project evidence.

------------------------------------------------------------------------

# 3. Complete English website copy

Use the following as the first-draft copy on the website. You can adjust
line breaks and layout, but preserve the facts and the personal tone.

## SECTION 01 --- HERO

**SPECULATIVE PRODUCT DESIGN · PHYSICAL PROTOTYPING**

# COCOA RESERVE

## Two Forms. One Origin.

*A collectible chocolate artefact exploring scarcity, preservation and
value in 2060.*

What if chocolate became something we preserve rather than consume?

Set in an imagined future where real cocoa is no longer an everyday
resource, Cocoa Reserve turns two pieces of chocolate into a pair of
objects worth protecting.

**Buttons:** Explore the Project · View the Making Process

**Project details** - Project type: Individual design project - Focus:
Concept development, product design, physical prototyping and
visualisation - Tools: Autodesk Fusion, Rhino, Blender - Processes: 3D
printing, vacuum forming, plaster casting and laser cutting

**Hero visual:** Use the strongest final Blender render showing the
partly opened protective case, both chocolate forms and the
light-coloured travertine plinth. Prefer the open-lid composition
because it shows the object and its reveal experience together.

## SECTION 02 --- THE IDEA

**01 / THE CONCEPT**

# What happens when something familiar becomes rare?

I imagined a future set in 2060. As climate change affects the areas
suitable for growing cocoa, real cocoa becomes a scarce resource that
needs to be protected and rationed.

In this world, chocolate is no longer an ordinary everyday treat. It
becomes something people preserve, collect and think twice about
consuming.

I wanted to explore this change through a physical object. Instead of
designing another traditional chocolate box, I imagined a small
collection that presents chocolate more like a museum artefact.

The project began with one question:

> If only a small amount of real cocoa remained, would we still treat
> chocolate in the same way?

*This is a speculative design scenario informed by climate-related cocoa
research, not a prediction of what will happen in 2060.*

**Visuals:** One world-building image, one early cocoa-pod concept
image. Clearly label AI-generated concept images as early visual
exploration, not photographs of the final product.

## SECTION 03 --- FROM MEMORY GRID TO SPLIT POD RELICS

**02 / DESIGN DEVELOPMENT**

# The idea changed when I looked at the chocolate itself.

My first direction was a 3 × 4 Memory Grid. Only two of the twelve
spaces contained chocolate, leaving the other ten empty. The empty
spaces were intended to make scarcity visible.

However, the feedback made me realise that the chocolate itself still
looked too similar to an ordinary product. The idea was present in the
packaging, but it was not strong enough in the object.

I decided to change the approach. Instead of using a cocoa pod as
decoration on a traditional chocolate shape, I made the cocoa pod the
starting point for the form itself.

The final design, **Split Pod Relics 01 / 02**, consists of two
asymmetrical but complementary pieces. Each one looks like a fragment of
the same cocoa pod. Seen together, they suggest the outline of one
complete pod.

I liked this relationship because the two pieces are connected, but
neither one tells the whole story on its own. The idea of scarcity
becomes part of the shape, rather than something that only needs to be
explained on the packaging.

**Key idea:** Two separate forms, one shared origin.

**Visuals:** Early Memory Grid → initial chocolate form → concept
exploration → final Fusion model. Use a simple left-to-right evolution
layout.

## SECTION 04 --- DESIGNING THE CHOCOLATE FOR REAL PRODUCTION

**03 / CAD & FORM DEVELOPMENT**

# From an idea to two physical forms.

I developed the two chocolate fragments in Autodesk Fusion. I wanted
them to feel organic and recognisably connected to a cocoa pod, but they
also needed to work as physical objects.

I used separate bottom, middle and top profiles to build the two forms
with Loft. This allowed each piece to keep its own proportions while
still feeling like part of the same object.

I then refined the outer edges, added shallow raised cocoa-pod ribs, and
included the 01 / 02 markings. I kept the details relatively shallow and
the edges rounded so the forms would be easier to print and remove from
a mould.

The model was controlled through named parameters, so I could adjust the
overall size, proportions, draft angle, ribs and other details without
rebuilding the whole model.

**Selected design details** - Scale factor: 1.2 - Unit length: 67.2 mm -
Pod width: 38.4 mm - Maximum height: 16.8 mm - Gap between the pair: 7.2
mm - Draft angle: 5° - 38 named parameters and 46 timeline steps in the
cleaned-up Fusion model

What mattered most to me was thinking about how the object would be
made, not just how it looked on screen.

**Visuals:** Fusion model screenshots, Loft development stages, close-up
of raised ribs and 01 / 02 details, dimensioned view or cropped
parameter diagram. A short screen recording rotating the Fusion model
would be useful if available.

## SECTION 05 --- 3D PRINTING, VACUUM FORMING & PLASTER CASTING

**04 / PHYSICAL PROTOTYPING**

# The first test showed me what the digital model could not.

I started by 3D printing the two chocolate forms. The first version was
smaller and kept both pieces on a shared base plate. I thought this
would make the vacuum-forming process easier, but the first moulding
test showed a problem: the plastic sheet could not fully sink into the
narrow space between the two pieces, so the two cavities became
connected.

I changed the model by increasing its scale to 1.2 and removing the
fixed base plate. During the next moulding test, I placed the two
printed pieces separately with temporary cardboard supports to create
more space between them.

This made the two cavities much clearer.

After vacuum forming, I used the mould to cast plaster versions. The
main cocoa-pod outlines and larger raised ribs were retained, and the
pieces could be removed from the mould. However, some of the smaller 01
/ 02 details became blurred. There were also bubbles and excess
connections in parts of the plaster cast.

The process reminded me that a detail that looks clear in CAD does not
always survive printing, moulding and casting.

### What changed after testing?

**First version** - Smaller chocolate forms - Shared base plate - Narrow
gap between the two pieces - Vacuum-forming film bridged the two
cavities

**Revised version** - Model enlarged to 1.2× - Fixed base plate
removed - Two pieces positioned independently - Clearer separation
between the mould cavities

Removing the base plate and changing the model reduced the recorded
3D-printing time from **33 minutes 5 seconds to 25 minutes 24 seconds**.

### What I would improve next

I would make the 01 / 02 numbers larger, review the spacing around the
ventilation holes, and test the details again before making the final
mould. For plaster casting, I would mix more slowly, pour in one
continuous stream and gently tap the mould to help release trapped air.

**Visuals:** Initial 3D print → first vacuum-forming test showing
connected cavities → revised mould → plaster cast → close-up of retained
ribs and blurred numbering. Make the failed first test visible; it is
important evidence of the design development.

## SECTION 06 --- THE PROTECTIVE CASE

**05 / PACKAGING & STRUCTURE**

# A box that reveals the collection slowly.

Once the chocolate forms were established, I designed a protective case
that could hold and display both pieces.

I did not want the packaging to work like an ordinary chocolate tray. It
needed to feel more like a small archive or display case, while still
allowing the user to open it and take out the objects.

The final structure uses eleven laser-cut plywood components. Four
interlocking support beams form the internal framework, while a raised
display platform holds the two chocolate pieces above the lower
structure.

A fixed U-shaped inner shell covers the support frame. The curved outer
cover protects the collection and opens through a laser-cut Living
Hinge.

I also added cocoa-pod-shaped observation windows and engraved details
to connect the packaging back to the natural form that inspired the
chocolate.

**Selected specifications** - Overall dimensions: 172 × 120 × 45 mm -
Material: 3 mm plywood - Main components: 11 laser-cut panels - Internal
structure: four interlocking support beams - Opening mechanism:
laser-cut Living Hinge

### The structure behind the box

The four support beams use interlocking half-lap joints. The internal
frame supports the shell and creates space for the raised display
platform.

The fixed inner shell keeps the structure neat, while the curved outer
cover creates the opening movement. The observation windows reveal only
part of the collection before the box is opened.

**Visuals:** Final closed-box photograph, exploded view of eleven
components, internal support frame, half-lap joint close-up, observation
windows and engraved surface details, open-box photograph showing the
two pieces on the raised platform.

## SECTION 07 --- A FAILURE THAT CHANGED THE HINGE

**06 / TESTING & REDESIGN**

# The first Living Hinge broke. So I redesigned it.

The first laser-cut box assembled successfully at the finger-jointed
connections, but the outer cover broke when I tried to bend it. Some of
the narrow plywood strips split, and the cover could not form the smooth
curve I had planned.

Looking back at the design, I found that the flexible area was too
limited and the transition between the flexible and rigid sections was
too sudden. Some of the hinge cuts also did not extend far enough
towards the edge of the sheet.

I changed the geometry rather than simply trying to force the first
version to bend.

### The redesign

-   Box width increased from 110 mm to 120 mm.
-   Inner shell bending radius increased from R10 to R15.
-   Outer shell inner bending radius increased from R13.5 to R18.5.
-   The flexible area was extended.
-   177 staggered slits were distributed across four hinge areas.
-   The revised pattern used a 1.5 mm pitch, 4 mm connection bridge and
    6 mm end clearance for the closed slits.

The revised hinge could bend and form the intended curve. However, the
final assembled box still showed visible gaps between some components.
The physical plywood did not behave exactly like the idealised Fusion
model.

Some laser-cut areas also did not cut fully through. I later found that
the plywood surface was not completely flat, which may have changed the
distance between the sheet and the laser focus.

### What I learned

A flexible mechanism cannot be judged only by its digital geometry.
Material thickness, surface flatness, kerf, laser focus and the
transition between flexible and rigid areas all affect the final result.

For another iteration, I would test different slit lengths, spacing,
bridge widths and bending radii on small samples first. I would also
measure the actual plywood thickness and kerf, check sheet flatness and
confirm laser focus before cutting the full set of parts.

**Visuals:** First broken hinge, split plywood strips, revised Fusion
hinge geometry, final bent hinge, final assembled box showing the
remaining gap. Do not describe the hinge as perfect: show both the
successful bend and remaining assembly gap.

## SECTION 08 --- THE UNBOXING EXPERIENCE

**07 / USER EXPERIENCE**

# From protection to discovery.

I designed the opening sequence as part of the experience. Before the
box is opened, the two cocoa-pod-shaped windows only give a partial view
of the collection. The user has to lift the curved cover to see the two
pieces properly.

**01 --- Fully closed**\
The case protects the collection. The small cocoa-pod-shaped windows
offer only a partial glimpse of what is inside.

**02 --- Opening the lid**\
The user holds the box and gently lifts the curved outer cover. The
Living Hinge bends as the case opens.

**03 --- Relics revealed**\
The two chocolate forms appear on the raised display platform, supported
by the internal frame.

**04 --- Taking out a piece**\
The user lifts one of the chocolate pieces from the display.

**05 --- Collection removed**\
Once both pieces are removed, the empty display platform becomes
visible. The absence reminds the user that the collection is no longer
complete.

The sequence is deliberately simple. I wanted the act of opening the box
to feel different from opening ordinary food packaging.

**Interaction labels:** Previous · Next · Step 01 / 05 · View the closed
case · Reveal the collection

Use the five real photographs from the A5 unboxing sequence, in order.
Make this a click-through stepper if the images are available. On
mobile, it should be easy to tap or swipe. Do not autoplay. Do not
simulate a fully animated physical hinge unless a real animation or
suitable 3D asset exists.

## SECTION 09 --- BLENDER: BUILDING THE ARCHIVAL DISPLAY

**08 / DIGITAL VISUALISATION**

# Presenting the collection as something worth preserving.

I used Blender to explore how Cocoa Reserve could be presented in its
imagined 2060 setting.

I first built a simplified scene with basic geometry to test the
spacing, materials, lighting and camera composition. This helped me work
out the display environment before bringing in the more detailed models.

I then integrated the Fusion geometry and packaging into the final
scene. The two chocolate forms sit inside the protective case, which is
placed on a light-coloured travertine plinth.

I chose a restrained material palette to make the collection feel
preserved rather than displayed like an ordinary confectionery product.

### Four materials

**01 --- Preserved Cacao**\
Deep brown tones and subtle surface variation give the two pieces a
natural, aged appearance.

**02 --- Smoked Bronze**\
A warm, dark metallic finish creates controlled highlights on the
protective casing.

**03 --- Porous Travertine**\
A pale mineral surface creates a quiet display base and separates the
collection from the darker case.

**04 --- Charcoal Insert**\
A low-reflective dark lining reduces distraction and helps the two cocoa
forms stand out.

### Material experiments

The first cocoa shader looked too much like water droplets, so I changed
the texture approach to create a more continuous surface. The early
travertine material had stretched directional lines, so I adjusted the
texture coordinates and combined Noise, Voronoi and Bump nodes to create
more irregular mineral-like pores.

The first bronze material looked too flat, so I added subtle warm colour
variation and more controlled reflections.

The pores on the travertine are simulated with shader bump rather than
actual geometric holes. The cocoa surface also still has a slightly
leather-like appearance under some strong lighting. These are
limitations of the render, not physical surface details.

### Lighting and camera

I tested different light positions and camera compositions before
choosing the final view.

-   Warm key light: 3200 W
-   Cooler fill light: 1800 W
-   World / HDRI intensity: 0.65
-   Hero camera: 78 mm, three-quarter view
-   Top camera: 70 mm
-   Render engine: Cycles CPU
-   Maximum samples: 192
-   Noise threshold: 0.01
-   Denoising: OpenImageDenoise
-   Colour management: AgX
-   Final render size in the Blender module: 1800 × 1350 px

The 78 mm Hero view reduced obvious perspective exaggeration while
keeping the two chocolate forms, protective case and display base in one
composition.

**Visuals:** Final Blender hero render, four material swatches,
before/after material comparisons, shader-node screenshots only where
they explain a visible change, lighting tests A--D, camera comparison 28
/ 50 / 78 mm, one top view. Keep technical screenshots secondary to the
final render.

## SECTION 10 --- THE FINAL ADVERTISEMENT & EXPO FEEDBACK

**09 / COMMUNICATION & DESIGN RESPONSE**

# Making the idea easier to understand.

The first A4 poster included several product images and a longer
explanation of the 2060 scenario. During the A4 Expo, I received
feedback that helped me see where the presentation was not clear enough.

### What people told me

-   The cocoa-pod form was interesting, but the shapes could look more
    three-dimensional and include more detail.
-   The meaning behind the two chocolate pieces was not clear enough.
-   The connection between the two pieces and cocoa scarcity needed to
    be explained more clearly.
-   It was difficult to tell whether the project was a museum exhibit or
    a product people could buy.

### What I changed

I redesigned the poster with a darker background, a larger main product
image, more prominent typography and less text. I wanted the object to
become the first thing people noticed.

I also thought more carefully about where the idea could be presented:

-   **Bus stop posters** could attract the public and invite people to
    visit a museum exhibition of the remaining cocoa relics.
-   **First-class cabin magazines** could introduce rare chocolate
    collections to private collectors.

These two contexts helped me distinguish between public viewing and
private ownership.

### What still needs work

The revised poster has a stronger visual focus and makes Cocoa Reserve
feel more like a collectible. However, reducing the text also made the
2060 scenario less clear, and the two chocolate pieces are still not
easy to see in enough detail.

In a future version, I would keep the stronger visual hierarchy but add
a clearer explanation of the two-piece concept and larger detail images.

**Visuals:** Original A4 poster and revised poster side by side. Add the
four original feedback notes only if they are legible. Show bus-stop or
first-class magazine mock-ups only if actual designs exist; do not
fabricate finished campaign mock-ups.

## SECTION 11 --- REFLECTION

**10 / WHAT I TOOK FROM THE PROJECT**

# A good idea has to survive the making process.

This project helped me understand how many decisions sit between an idea
and a finished object.

At the beginning, I was mainly thinking about how to make the chocolate
look different. As the project developed, I had to think about the
shape, the mould, the packaging, the opening mechanism, the materials
and the way the final object would be presented.

The most useful moments were often the unsuccessful ones. The first
vacuum-forming test showed that the two pieces needed more space. The
first Living Hinge showed that the bending area and its transition into
the rigid structure needed more thought. The final laser-cut box could
bend, but it still had gaps that were not obvious in the digital model.

Blender taught me a different lesson. A material can look convincing in
one lighting setup and completely different in another. I had to compare
the results rather than assume that a more complicated shader would
automatically look better.

If I continue this project, I would spend more time testing material
behaviour and manufacturing tolerances before producing the full set of
parts. I would also improve the visibility of the small details and make
the relationship between the two chocolate pieces clearer in the final
presentation.

**For me, Cocoa Reserve became a project about more than making a
product. It was about turning an idea into something physical, testing
it, finding what did not work and making better decisions from there.**

## SECTION 12 --- CREDITS & REFERENCES

### Research references

Asante, P. A., Rahn, E., Anten, N. P., Zuidema, P. A., Morales, A., &
Rozendaal, D. M. (2025). Climate change impacts on cocoa production in
the major producing countries of West and Central Africa by mid-century.
*Agricultural and Forest Meteorology, 362*, 110393.\
https://doi.org/10.1016/j.agrformet.2025.110393

Lander, T. A., Atta-Boateng, A., Toledo-Hernández, M., Wood, A., Malhi,
Y., Solé, M., Tscharntke, T., & Wanger, T. C. (2025). Global chocolate
supply is limited by low pollination and high temperatures.
*Communications Earth & Environment, 6*(1).\
https://doi.org/10.1038/s43247-025-02072-z

Wronkowski, G. (2026, January 30). *Monochrome Studio 03*. Poly Haven.\
https://polyhaven.com/a/monochrome_studio_03

### Tools & process

Autodesk Fusion · Rhino · Blender · 3D printing · Vacuum forming ·
Plaster casting · Laser cutting

### AI and tool acknowledgement

I used ChatGPT to help explore early concepts, generate preliminary
visual concept images from my own ideas, and understand some technical
modelling and material workflows. I also used AI assistance to explore
Blender shader nodes and check scene parameters. I used Claude and other
coding assistance during parts of the parametric modelling and technical
workflow. I tested and reviewed the results in the relevant software and
through physical prototypes. The final design decisions, modelling
direction, fabrication choices, material selection, photography,
evaluation and reflections are my own.

Keep this acknowledgement concise on the public page. If the website
includes a full process appendix, the longer acknowledgement can be
placed there.

------------------------------------------------------------------------

# 4. Page layout and interaction requirements

Build this as a responsive long-form case study, not a sequence of
lecture slides.

Recommended page order:

1.  Hero --- final render, title and short introduction.
2.  The idea --- 2060 scenario and the question behind the project.
3.  Design development --- Memory Grid to Split Pod Relics.
4.  CAD and chocolate form --- Fusion modelling and dimensions.
5.  Physical prototyping --- 3D print, vacuum form and plaster cast.
6.  Protective case --- laser-cut structure and materials.
7.  Hinge failure and redesign --- honest before/after comparison.
8.  Unboxing experience --- five-step interactive sequence.
9.  Blender visualisation --- materials, lighting and camera.
10. Poster and Expo feedback --- before/after communication.
11. Reflection --- what worked, what did not and what I learned.
12. Credits and references.

### Interaction A --- Five-step unboxing sequence

This should be the main interaction on the page. Create a stepper with
five stages: Fully closed, Opening the lid, Relics revealed, Taking out
a piece, Collection removed.

When the visitor clicks Next or Previous, update the photograph, step
number, heading and explanatory text. Use the real A5 unboxing
photographs. If separate image files are missing, create clearly named
placeholders and report the missing files. No autoplay.

### Interaction B --- Before / after comparison

Use a simple comparison for: - Original A4 poster vs revised poster. -
First broken Living Hinge vs revised hinge, if suitable photographs
exist. - Early vs refined Blender material, if matching images exist.

Use a slider only when both images are available and show comparable
views. Otherwise use side-by-side images with captions.

### Interaction C --- Material selector

Create four tabs: Preserved Cacao, Smoked Bronze, Porous Travertine and
Charcoal Insert. Selecting a tab should show its real project image or
render crop and short description. Do not substitute generic material
textures.

### Interaction D --- Optional 3D viewer

If the repository contains a genuine exported `.glb` or `.gltf` model of
the final object, consider a lightweight viewer with orbit and zoom. If
no genuine model file exists, do not invent one or claim that a render
is interactive. Use the real image gallery instead.

### Interaction E --- Image lightbox

Allow visitors to open important images at a larger size. Include
captions and accessible close controls.

------------------------------------------------------------------------

# 5. Image and asset checklist

First inspect the repository for existing project images, videos,
renders, model files and PDFs.

The following are **suggested filenames only**. Do not assume they
already exist. If an asset is missing, report it and create a
placeholder only where necessary.

``` text
public/images/cocoa-reserve/
  hero-final-render.webp
  world-building-2060.jpg
  memory-grid-concept.jpg
  split-pod-concept.jpg
  fusion-pair-model.jpg
  fusion-loft-development.jpg
  chocolate-3d-print.jpg
  vacuum-form-first-test.jpg
  vacuum-form-revised.jpg
  plaster-cast.jpg
  packaging-closed.jpg
  packaging-exploded-view.jpg
  packaging-internal-frame.jpg
  packaging-open.jpg
  hinge-failure.jpg
  hinge-redesign.jpg
  unboxing-01-closed.jpg
  unboxing-02-opening.jpg
  unboxing-03-revealed.jpg
  unboxing-04-removing.jpg
  unboxing-05-empty-display.jpg
  blender-final-render.jpg
  material-cacao.jpg
  material-smoked-bronze.jpg
  material-travertine.jpg
  material-charcoal.jpg
  shader-cacao.jpg
  shader-bronze.jpg
  shader-travertine.jpg
  lighting-tests.jpg
  camera-tests.jpg
  poster-original.jpg
  poster-revised.jpg
  expo-feedback.jpg
```

### PDF page guide

  Evidence                                       Source PDF              Pages
  ---------------------------------------------- ------------------ ----------
  2060 scenario and Memory Grid                  Fusion / concept         1--2
  Split Pod Relics concept evolution             Fusion / concept            2
  Final chocolate CAD and physical artefacts     Fusion / concept         3--4
  Parametric model and Loft development          Fusion / concept         5--7
  3D printing process                            Fusion / concept            8
  Vacuum-forming tests                           Fusion / concept            9
  Plaster casting and evaluation                 Fusion / concept           10
  Packaging structure and dimensions             Laser cutting            1--3
  Physical laser-cut prototype                   Laser cutting               4
  Fusion parameters and structural joints        Laser cutting            5--6
  Fusion to Rhino layout                         Laser cutting               7
  Material and kerf testing                      Laser cutting               8
  Hinge failure and redesign                     Laser cutting           9--10
  Blender primitive blockout                     Blender                  2--5
  Four materials and shader development          Blender               4, 6, 8
  Lighting and camera tests                      Blender                  7, 9
  Blender reflection and next integration        Blender                    10
  Consolidated project story and advertisement   A5 portfolio             1--4
  Speculative museum vignette                    A5 portfolio                5
  Five-step unboxing sequence                    A5 portfolio                6
  Fusion-to-Blender final integration            A5 portfolio                7
  Final advertisement render and camera tests    A5 portfolio                8
  A4 Expo feedback and revised poster            A5 portfolio         9 and 14
  Vacuum-forming reflection                      A5 portfolio               10
  Living Hinge reflection                        A5 portfolio               11
  Future practice and AI limitations             A5 portfolio               12
  References and acknowledgement                 A5 portfolio               13

Prefer original high-resolution photographs, renders and exported model
screenshots. PDF page images are supporting references, not ideal final
website assets.

------------------------------------------------------------------------

# 6. Accuracy rules --- do not change these facts

-   The future scenario is set in **2060**.
-   The initial concept was a **3 × 4 Memory Grid**, with **2 of 12**
    spaces occupied.
-   The final chocolate concept is **Split Pod Relics 01 / 02**.
-   The two forms are asymmetrical but complementary; together they
    suggest one cocoa pod.
-   The chocolate model was developed in Autodesk Fusion using
    parametric modelling.
-   At Scale_Factor 1.2, the stated dimensions are: unit length 67.2 mm,
    pod width 38.4 mm, maximum height 16.8 mm and pair gap 7.2 mm.
-   The vacuum-forming problem was that the film bridged the two
    cavities. The revised setup increased the scale to 1.2, removed the
    fixed base plate and positioned the two parts separately.
-   The plaster cast retained the overall form and larger ribs, but some
    small details were not reproduced clearly. Bubbles and excess
    connections were also observed.
-   The laser-cut box used **11 components** of **3 mm plywood** and
    measured **172 × 120 × 45 mm**.
-   The internal frame used four interlocking support beams.
-   The first Living Hinge broke. The revised hinge could bend, but the
    final assembly still showed gaps.
-   Some laser cuts did not fully pass through. The uneven plywood
    surface may have affected laser focus.
-   The Blender primitive scene was an early visual blockout. The
    consolidated A5 document describes the later integration of the
    final Fusion geometry.
-   The four Blender material roles were Preserved Cacao, Smoked Bronze,
    Porous Travertine and Charcoal Insert.
-   The travertine pores were simulated using Bump; they were not actual
    geometric holes.
-   The final poster was revised after four pieces of A4 Expo feedback.
    The revised poster improved the visual focus, but the 2060 scenario
    and the two-piece concept still needed clearer explanation.
-   Do not claim that the final physical box was perfectly fitted or
    that every small detail was successfully reproduced.
-   Do not claim user testing, sales, manufacturing at scale or
    commercial release. These are not documented in the source material.

------------------------------------------------------------------------

# 7. Responsive design, accessibility and performance

-   Desktop: spacious editorial layout with alternating image/text
    sections and large hero images.
-   Tablet: reduce columns while preserving image hierarchy.
-   Mobile: single-column layout, readable type and touch-friendly
    controls.
-   Avoid horizontal overflow.
-   Use responsive image sizes and WebP where appropriate.
-   Lazy-load below-the-fold images.
-   Keep the hero image optimised but sharp.
-   Add descriptive alt text to all project images.
-   Ensure buttons, tabs, steppers and lightbox controls are keyboard
    accessible.
-   Provide visible focus states.
-   Respect reduced-motion preferences.
-   Do not autoplay video or animation.
-   Keep transitions subtle; avoid excessive scroll effects.
-   Ensure the page works on GitHub Pages and respects the repository's
    configured base path.

------------------------------------------------------------------------

# 8. Final implementation checklist

Before finishing, verify:

-   [ ] The project page is reachable from the existing Work page.
-   [ ] Home and Through the Window still work.
-   [ ] The project title and hero image appear correctly.
-   [ ] All English copy is present and proofread.
-   [ ] No student ID or private PDF link is exposed.
-   [ ] The five-step unboxing interaction works.
-   [ ] Before/after comparisons use real matching images.
-   [ ] Material tabs show the correct project images.
-   [ ] The optional 3D viewer appears only if a genuine model file
    exists.
-   [ ] All image paths resolve correctly.
-   [ ] Mobile layout is checked.
-   [ ] Keyboard navigation and image alt text are present.
-   [ ] The production build succeeds.
-   [ ] GitHub Pages deployment paths are correct.

When finished, report: 1. Which files and routes were created or
changed. 2. Which source images were found and used. 3. Which images or
model files are still missing. 4. Which interactions are working. 5.
Whether the build passed. 6. Any decisions that need my approval.

**Final direction:** Make Cocoa Reserve feel like a thoughtful object
with a story --- something the visitor discovers gradually. Balance the
concept, real making, visual presentation and honest reflection. The
physical photographs and final render are more important than decorative
effects.
