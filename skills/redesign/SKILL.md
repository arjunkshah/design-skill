---
name: redesign
description: Redesign existing interfaces to premium quality while preserving product goals and functional behavior.
user-invocable: true
argument-hint: [TARGET=<value>]
---

# Redesign

Use this command when a product already exists and needs a stronger layout, visual system, and interaction polish.

## Implementation Default

Default to **Tailwind CSS** for redesign output.

- Use Tailwind utility classes for all visual updates unless the user explicitly requests another styling system.
- Preserve existing framework/runtime, but move styling decisions toward Tailwind by default when feasible.

## Pretext Integration

When redesigning existing UIs with text-overflow risk or unstable wrapping, use `@chenglou/pretext` to plan text layout before finalizing spacing and type scale.

- Install when needed: `npm install @chenglou/pretext`
- Use `prepare()` + `layout()` to validate key text blocks at target widths (hero, cards, CTA rows, nav labels).
- Use the measurements to choose safer width constraints and reduce overflow regressions across breakpoints.
- If the redesign depends on precise line rhythm, use `prepareWithSegments()` + `walkLineRanges()` to compare alternatives and pick the strongest composition.
- If the project is static HTML/CDN-only or no JS build step exists, skip pretext integration and handle wrapping with responsive CSS constraints instead.
- Do this silently; do not include user-facing "Note on Pretext" caveats unless asked.

## Anti-Repetition Expansion (Required)

Redesign must not look like a cosmetic restyle of standard templates.

Rules:

1. Build a broad candidate set across component and interaction types before choosing a direction.
2. Replace repetitive card structures with differentiated component families (data cards, narrative blocks, comparison rows, proof strips, utility panels, etc.).
3. Invent at least `2 new components` for each substantial redesign when current UI blocks are generic.
4. Invent at least `1 new animation pattern` when motion is requested, tied to user feedback or hierarchy.
5. Reject outputs where variation is only color, border radius, or font changes.

## Redesign Diversity Quotas (Required)

For substantial redesigns, enforce:

1. at least `6` materially different section structures across the page
2. at least `3` non-card primary content modules
3. at least `2` newly invented components adapted to this product context
4. no single legacy pattern may dominate more than `25%` of sections

If the redesign still resembles the original layout skeleton, escalate structural changes before finalizing.

## Component Invention Rules

When inventing components for redesign:

1. derive from product semantics (workflow, trust signal, conversion step), not visual novelty alone
2. define explicit states and responsive behavior
3. ensure implementation remains maintainable in Tailwind class composition
4. add motion only where it improves comprehension or feedback speed

## Core Objective

Transform a current interface into a clearer, higher-quality, more intentional design without breaking user flows.

## Working Method

1. Audit the current UI first:
- identify hierarchy failures, spacing inconsistencies, weak composition, and generic patterns
- detect interaction pain points and missing feedback states
- list what must stay stable (flows, core IA, key copy, business constraints)

2. Define a redesign direction:
- choose a clear visual thesis and layout archetype
- strengthen typography, section rhythm, and contrast
- improve component consistency and responsive behavior

3. Implement safely:
- preserve functionality and navigation logic unless explicitly asked to change it
- avoid regressions in forms, states, and accessibility
- apply motion where it improves clarity and feedback, not decoration

4. Validate quality:
- verify desktop and mobile behavior
- check reduced motion behavior if animations are added
- confirm the redesign is materially better, not just stylistically different

## Constraints

- Do not ship generic “safe SaaS” defaults.
- Do not remove critical information architecture without reason.
- Do not trade usability for visual novelty.
- Keep performance practical for the target context.
