---
name: animation-director
description: Use when a frontend needs motion choreography, interaction polish, and scroll behavior that improves hierarchy without hurting performance. Works alongside layout and style skills instead of replacing them.
---

# Animation Director

Use this skill when the page needs motion that feels deliberate, premium, and technically sound.

The goal is not to add more animation. The goal is to make motion clarify order, depth, affordance, and identity.

## Core Rule

Motion follows structure.

Before writing animation code:

1. Identify the dominant layout idea already chosen by the page.
2. Decide what motion jobs are actually needed:
   - entry sequence
   - hover feedback
   - sticky narrative
   - product demonstration
   - state transition
3. Choose one motion profile from [references/motion_profiles.md](references/motion_profiles.md).
4. If the page uses sticky or scroll-led storytelling, load [references/scroll_choreography.md](references/scroll_choreography.md).
5. Choose the right interaction patterns from [references/interaction_patterns.md](references/interaction_patterns.md).
6. If the user needs help phrasing the motion request, load [references/prompt_recipe.md](references/prompt_recipe.md).
7. Enforce the constraints in [references/performance_guardrails.md](references/performance_guardrails.md).
8. Run the final pass in [references/review_rubric.md](references/review_rubric.md).

## Section-To-Motion Pairing

Motion must reinforce the section's job, not merely add movement.

Default pairings:

- hero -> staged reveal
- bento -> staggered depth
- sticky story -> progress-linked transitions
- proof rail -> continuous drift
- CTA -> tactile hover/press

Use these as structural defaults unless the brief clearly calls for something else.

Interpret them this way:

- `hero -> staged reveal`: reveal headline, support copy, and action in a controlled reading order
- `bento -> staggered depth`: give priority tiles more presence through offset timing, depth, or light motion rather than moving the entire grid
- `sticky story -> progress-linked transitions`: tie visual state changes to narrative progress so the user understands what changed and why
- `proof rail -> continuous drift`: allow subtle belt-like motion or chip movement only when it improves liveliness without stealing attention
- `CTA -> tactile hover/press`: interactions should feel responsive and physical, not flashy

## How It Combines With Design Skill

Use `$animation-director` as a companion layer, not as a substitute for layout judgment.

Typical pairing:

- `$design-skill` decides structure, hierarchy, and style direction
- `$animation-director` decides sequencing, interaction behavior, scroll choreography, and motion restraint

If no strong structure exists yet, fix layout first.

## Design Intent

Good motion should:

- make reading order clearer
- reinforce hierarchy
- make UI feel tactile
- help product surfaces feel alive
- stay performant on real devices
- respect the structural role of each section

Bad motion:

- decorates weak layouts
- loops everywhere
- competes with the content
- animates layout properties unnecessarily
- gives every section the same fade-up treatment regardless of purpose

## Compositional Motion Rules

- choose motion after the page structure is already clear
- concentrate the largest motion budget in one or two moments
- let quiet sections stay quiet
- if a section is already visually dense, reduce animation complexity
- if motion does not improve reading order, affordance, or persuasion, remove it

## Output Expectations

When using this skill:

- keep motion scoped to meaningful places
- use transform and opacity first
- avoid animation systems that force constant rerenders
- preserve accessibility and readability
- dial intensity according to the brief, not personal taste
- simplify or remove decorative motion on mobile when clarity drops
