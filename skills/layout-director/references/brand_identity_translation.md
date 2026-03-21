# Brand Identity Translation

Use this when the page should feel like it belongs to a real brand system rather than an abstract style mood.

This reference is inspired by structured brand identity repositories and turns brand research into frontend direction.

## Build A Brand Brief First

Before styling, extract or ask for:

- primary and secondary colors
- typography roles: display, body, mono, utility
- logo or mark usage constraints
- image style: generated illustration, abstract composition, product-first mock, diagram, or photography direction
- brand philosophy or tone
- legal or visual do-not-break rules
- whether the interface should feel playful, technical, premium, editorial, or institutional

Do not jump straight from a logo to a page.

## Translate Brand Data Into UI Decisions

### Colors

Map brand colors into explicit roles:

- canvas/background
- primary text
- primary action
- emphasis/accent
- subtle support surfaces
- semantic states if relevant

Do not use every brand color everywhere.

### Typography

Map fonts into roles:

- display
- heading
- body
- mono/system/meta

Then decide:

- how much contrast exists between roles
- which role carries the brand most strongly
- whether the interface should feel expressive or restrained

### Asset Treatment

Decide how logos, wordmarks, and brand assets are shown:

- on light or dark surfaces
- with how much breathing room
- whether they act as proof, ornament, or primary identity anchor

Treat logos as identity anchors, not filler.

### Imagery

If the page needs images:

- prefer generated imagery that matches the brand logic
- specify whether the asset should feel illustrative, product-led, abstract, textured, or diagrammatic
- avoid dropping in unrelated stock photography with no connection to the brand system

### Philosophy

Turn the brand story into visual consequences.

Examples:

- precise and trustworthy -> tighter grid, disciplined type, quieter color
- playful and optimistic -> rounder cadence, brighter accent, friendlier motion
- premium and editorial -> stronger typography, more silence, fewer UI treatments
- technical and operational -> denser grouping, cleaner dividers, more functional labels

## Brand Modes

Use one of these four translation modes:

### Literal

Stay close to the actual brand system.

Use when:

- redesigning an existing brand surface
- building a public-facing site for a known company

### Adjacent

Borrow the brand's logic without copying every token.

Use when:

- creating concept work
- building internal prototypes that should feel aligned but not canonical

### Inspired

Use brand signals as a mood guide only.

Use when:

- the user wants "in the spirit of" a brand identity
- there is no need for visual fidelity

### Hybrid

Keep one real brand dimension stable and vary the others.

Examples:

- keep color logic, vary layout
- keep type logic, modernize component architecture
- keep product tone, reinterpret the rest

## Non-Negotiables

- Preserve the hierarchy of the brand, not just the color values.
- Respect logo clear space and usage constraints if known.
- Avoid mixing multiple unrelated brand systems in one page.
- If the user references multiple brands, decide which brand controls structure, which controls tone, and which only influences accents.
- If no actual brand data exists, synthesize a lightweight brand brief before coding.

## Output Behavior

When a brand is involved:

1. state the extracted brand signals briefly if helpful
2. translate them into layout, type, color, and motion decisions
3. implement the page without drifting into a generic template
