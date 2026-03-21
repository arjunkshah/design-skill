# Jasmine Style System

Use this when the page needs stronger styling judgment, not just a better layout.

This is the first-party visual direction system for this repo. It is based on one principle:

The interface should feel crafted, not merely coded.

Do not hardcode one house style. Use the brief to decide which styling choices belong.

## Core Lens

Before styling, decide:

- what the product materially feels like
- what the primary interaction is
- what one visual hook will dominate

Examples of strong hooks:

- oversized typography
- visible structural grid
- layered glass or translucency
- heavy typographic contrast
- dense technical surfaces
- large quiet negative space

Pick one dominant hook, not four.

## Three Design Dimensions

Use these to steer the page.

### Precision vs Expression

Precision fits:

- developer tools
- operational software
- finance
- admin surfaces

Characteristics:

- tighter spacing
- clearer dividers
- more rigid alignment
- mono support text where useful

Expression fits:

- portfolios
- brands
- editorial launches
- cultural or lifestyle work

Characteristics:

- larger whitespace swings
- stronger display typography
- more fluid pacing
- more emotionally weighted sections

### Density vs Air

Dense interfaces fit:

- dashboards
- information-rich software
- data or workflow products

Characteristics:

- more content per viewport
- fewer ornamental wrappers
- stronger use of grouping and rails

Airy interfaces fit:

- landing pages
- showcases
- premium product marketing

Characteristics:

- larger margins
- more silence between blocks
- fewer elements competing at once

### Structure vs Flow

Structure fits:

- technical products
- productivity software
- enterprise pages

Characteristics:

- visible borders
- explicit grid logic
- stronger geometric discipline

Flow fits:

- creative tools
- expressive brands
- softer consumer products

Characteristics:

- less visible framing
- more organic pacing
- softer transitions between sections

## Typography

Use scale aggressively and intentionally.

Prefer:

- large display moments when the page needs a clear thesis
- micro-details for labels, metadata, or support language
- deliberate font pairing with clear roles

Baseline pairings:

- sans utility: `Inter`
- serif elegance: `Playfair Display`
- mono precision: `JetBrains Mono`

Rules:

- use extreme scale when emphasis is warranted
- create hierarchy through contrast, not minor size changes
- assign fonts by role, not by novelty

Avoid:

- tiny differences between heading levels
- generic type scales with no focal jump
- using too many families at once

## Color And Materiality

Prefer:

- neutral palettes built from zinc, slate, or stone families
- one coherent accent logic
- depth created through opacity, blur, layering, and contrast
- borders as structural elements

Use:

- `border-black/5`
- `border-white/10`
- translucent layers
- restrained blur where it improves materiality

Avoid:

- generic purple/blue AI gradients
- default shadows on every card
- arbitrary accent changes from section to section

## Rhythm

Do not repeat the same spacing pattern mechanically.

Create rhythm through variation in:

- section width
- section compression vs expansion
- card scale
- headline size
- proof placement

The page should feel composed, not auto-distributed.

## Anti-Patterns

Reject outputs that look like:

- generic purple-gradient AI marketing
- identical card spacing everywhere
- one repeated card shell on a gray canvas
- "Welcome to [App Name]" style openings
- a generic modern dashboard with no visual thesis

## Imagery Direction

Do not rely on pulling random web images.

When the page needs imagery:

- generate it as part of the product output
- create illustrations, abstract compositions, mock product frames, diagrams, textured surfaces, or art-directed placeholders directly
- if image generation tooling exists, direct the system to generate assets that match the page's visual language
- if image generation tooling does not exist, build self-generated visual surfaces in code using gradients, SVG, patterns, procedural shapes, masked screenshots, or designed placeholders

Treat imagery as designed material, not as stock filler.

## Motion Styling

Motion should follow the visual tone:

- precise products -> tighter, cleaner, more measured motion
- expressive products -> softer reveals, larger contrast in pacing
- dense systems -> less ambient motion, more state feedback
- airy marketing pages -> more room for stagger and narrative pacing

More motion must never compensate for weak styling.

## Final Check

Before shipping, ask:

- Does the page feel crafted from the product's nature?
- Is there one dominant visual hook?
- Does the typography have enough contrast?
- Are color and materials coherent?
- Would this still feel intentional without decorative effects?
