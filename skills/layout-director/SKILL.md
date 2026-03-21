---
name: layout-director
description: Use when an agent needs stronger frontend page layout judgment for landing pages, marketing sites, product showcases, portfolios, and feature launches. This skill improves composition, hierarchy, spacing, section rhythm, and motion while preserving variation instead of locking outputs into one template.
---

# Layout Director

Use this skill when the user wants frontend design work that feels intentionally composed rather than merely functional.

The goal is not to force one house style. The goal is to make the model choose better layout systems and execute them with consistent taste.

## Core Rule

Do not start coding from components. Start from page structure.

Before writing UI code:

1. Extract the brief:
   - product type
   - audience sophistication
   - content density
   - trust vs excitement balance
   - visual assets available
   - required sections
   - mobile constraints
2. Choose one primary layout archetype from [references/layout_archetypes.md](references/layout_archetypes.md).
3. Choose the variation axes from [references/variation_matrix.md](references/variation_matrix.md):
   - type mode
   - spacing intensity
   - content density
   - section rhythm
   - motion profile
   - viewport behavior
4. Apply the component rules from [references/component_principles.md](references/component_principles.md).
5. If the page needs stronger visual style, load [references/style_engine.md](references/style_engine.md).
6. If the page needs brand-aware styling, load [references/brand_identity_translation.md](references/brand_identity_translation.md).
7. If the page needs richer section range, load [references/section_programming.md](references/section_programming.md).
8. If the page needs richer UI range, load [references/component_families.md](references/component_families.md).
9. If the page needs pinned or scroll-reactive sections, load [references/scroll_patterns.md](references/scroll_patterns.md).
10. Run the final pass from [references/review_rubric.md](references/review_rubric.md).
11. If the user wants help invoking the skill from a specific tool, use [references/platform_adaptation.md](references/platform_adaptation.md).
12. If the user needs phrasing examples, use [references/prompt_recipe.md](references/prompt_recipe.md).

## Design Intent

Outputs should vary based on the brief, but they should all share these qualities:

- clear focal hierarchy
- meaningful spacing and negative space
- strong section-to-section pacing
- deliberate asymmetry when useful
- a clear visual identity instead of generic defaults
- restrained, coherent motion
- clean mobile collapse
- components that support the layout instead of dictating it

## Variation Without Randomness

The skill must not hardcode one visual result.

To avoid repetition, vary across these axes:

- **Layout archetype**: editorial split, bento, narrative stack, gallery runway, product frame, and others from the reference file
- **Type contrast**: serif-led, grotesk-led, compressed display, or quiet functional
- **Density**: airy, balanced, or information-rich
- **Section rhythm**: long calm blocks, alternating compression, staggered reveals, or modular beats
- **CTA structure**: single decisive action, paired actions, or distributed conversion points
- **Viewport behavior**: static sections, sticky story panels, pinned media, horizontal rails, or layered stacks

Do not vary aimlessly. Each choice must be justified by the brief.

## Non-Negotiable Quality Bar

Reject the layout if it falls into any of these traps:

- generic centered hero with interchangeable feature cards
- symmetrical grid repeated for the whole page
- oversized gradients used to fake taste
- cramped vertical rhythm
- too many visual accents competing for attention
- motion without hierarchy or purpose
- mobile layouts that merely shrink instead of reorganizing

## Page Construction Workflow

### 1. Frame The Narrative

Define:

- what must be understood in the first viewport
- what proof is needed next
- where the page should widen, compress, or pause
- where conversion should happen

### 2. Choose The Structural System

Pick one primary archetype and optionally one supporting pattern.

Examples:

- Editorial Split + proof rail
- Asymmetric Bento + narrative interlude
- Product Frame + gallery runway
- Narrative Stack + modular feature cluster

One dominant structure is better than mixing five unrelated ideas.

### 2.25. Program The Section Types

Do not let every section behave the same way.

Choose a section mix using [references/section_programming.md](references/section_programming.md).

A strong page usually combines:

- one static anchor section
- one modular or bento section
- one proof or rail section
- one motion-led, sticky, or horizontally biased section when the brief supports it

The exact mix depends on the product, but sameness across every section is a failure.

### 2.5. Set The Visual Engine

Set these three control values before styling:

- `DESIGN_VARIANCE`: how experimental or structured the composition should feel
- `VISUAL_DENSITY`: how much information should fit per viewport
- `MOTION_INTENSITY`: how animated or quiet the interface should feel

Use the guidance in [references/style_engine.md](references/style_engine.md) to translate those controls into typography, color, materiality, rhythm, and imagery decisions.

If the work needs to follow a specific brand, build a lightweight brand brief first using [references/brand_identity_translation.md](references/brand_identity_translation.md).

### 3. Build Hierarchy With Scale

Use typography, spacing, and block sizing to create a clear reading order.

Prefer:

- fewer, larger moves
- strong anchors per section
- one clear visual thesis per viewport

Avoid:

- many equally weighted cards
- repeated card dimensions across the entire page
- decorative elements that do not strengthen hierarchy

### 4. Apply Motion Carefully

Use animation only to reinforce entry order, depth, or affordance.

Allowed motion:

- fade-up reveals
- staggered card entries
- soft parallax on isolated hero layers
- hover shifts on buttons and cards
- sticky scrollytelling where one preview stays pinned and the internal content changes as the narrative advances

Do not animate layout properties. Use transform and opacity only.

### 5. Collapse For Mobile On Purpose

Below `768px`, reorganize the composition.

Rules:

- remove decorative overlap if it harms readability
- preserve visual anchors
- reduce columns aggressively
- keep CTA access obvious
- maintain generous spacing

## Output Expectations

When delivering UI:

- briefly state the chosen layout direction if helpful
- implement the page directly
- keep styling cohesive
- do not explain basic design theory unless asked

If the user wants a stronger or different direction, change the archetype or variation axes instead of making small cosmetic tweaks to a weak structure.
