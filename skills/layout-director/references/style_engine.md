# Style Engine

Use this when the page needs stronger taste, not just stronger structure.

This file distills the useful design controls from premium frontend taste systems into a portable set of rules for this skill.

## Core Controls

Set these silently from the brief before styling:

- `DESIGN_VARIANCE`: `1-10`
- `MOTION_INTENSITY`: `1-10`
- `VISUAL_DENSITY`: `1-10`

Default baseline:

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 4`

Adjust them when the user explicitly asks for something cleaner, denser, louder, quieter, more editorial, more technical, or more animated.

## What The Controls Mean

### Design Variance

- `1-3`: clean, centered, highly restrained, low-risk composition
- `4-6`: controlled asymmetry, stronger hierarchy, more distinctive section rhythm
- `7-8`: pronounced split layouts, bento dominance, staggered pacing, stronger focal tension
- `9-10`: highly expressive structure, but still anchored by one dominant system

Rule:

- Above `4`, do not default to a centered startup hero if the brief allows a stronger structure.

### Motion Intensity

- `1-3`: static page with subtle hover and entry motion only
- `4-6`: reveal-on-entry, small parallax, staggered orchestration, one sticky narrative module
- `7-8`: stronger motion choreography, shared transitions, richer hover states, more active ambient UI
- `9-10`: cinematic behavior only if the product and performance budget justify it

Rule:

- More motion must mean better sequence clarity, not more decoration.

### Visual Density

- `1-3`: airy, luxurious, fewer elements per viewport
- `4-6`: balanced, product-ready, enough breathing room for persuasion
- `7-8`: dense but legible, suitable for software and information-rich surfaces
- `9-10`: dashboard-like density, only when information throughput is the actual goal

Rule:

- Higher density means fewer ornamental containers and more reliance on spacing, dividers, and grouping.

## Typography Rules

Use typography as the first source of visual identity.

Prefer:

- distinctive sans or serif-led pairings with clear display/body contrast
- tight display tracking and disciplined body width
- mono only for labels, meta, commands, or system data

Avoid:

- defaulting to bland neutral fonts for premium or expressive briefs
- using serif for data-heavy software unless the brief explicitly asks for it
- using more than two main type families unless the brand system requires it

## Color Rules

Use one coherent palette system.

Prefer:

- neutral bases with one decisive accent family
- consistent temperature across the full page
- accent colors that map to the brand or product story

Avoid:

- generic purple/blue AI gradients by default
- mixing warm and cool gray systems with no reason
- using multiple loud accents to fake sophistication

## Materiality Rules

Decide whether the page should feel:

- crisp and flat
- softly elevated
- editorial and paper-like
- technical and machined

Then keep that decision consistent.

Prefer:

- borders, spacing, and surface layering to create structure
- cards only when elevation communicates hierarchy
- shadows that are soft, sparse, and tinted to the environment

Avoid:

- repeating the same generic card shell across every section
- shadow-heavy interfaces with weak structure underneath

## Variation Profiles

Use these as a style-direction layer on top of the chosen layout archetype.

### Editorial Precision

Use for:

- portfolios
- cultural products
- premium service brands

Characteristics:

- restrained palette
- strong serif or editorial headline mode
- flat surfaces
- more whitespace

### Premium Product

Use for:

- modern SaaS
- AI products
- design-forward consumer tools

Characteristics:

- crisp sans-led typography
- polished framed product surfaces
- asymmetrical grids
- restrained but active motion

### Technical System

Use for:

- infrastructure
- developer tools
- dense product surfaces

Characteristics:

- monospace support language
- sharper dividers
- less ornamental styling
- denser information packing

### Soft Luxury

Use for:

- lifestyle
- hospitality
- real estate

Characteristics:

- warmer palette
- airier spacing
- softer edges and elevation
- tactile motion instead of technical motion

## Mandatory Quality Checks

Before shipping, ask:

- Does this page look like a real visual point of view, or just a cleaner default?
- Is the typography doing enough work before backgrounds and effects are added?
- Would removing color still leave a strong composition?
- Is the density level appropriate for the product?
- Does the motion level match the brief?
