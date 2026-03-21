# Performance Guardrails

These are mandatory.

## Animate Safe Properties

Prefer:

- `transform`
- `opacity`
- filter only in small, isolated cases

Avoid:

- `top`
- `left`
- `width`
- `height`
- large blur layers attached to scrolling containers

## Limit Continuous Work

- isolate perpetual motion into small components
- avoid parent rerenders for hover tracking or endless loops
- use spring or easing systems that do not require heavy state churn

## Scroll Behavior

Prefer:

- `whileInView`
- `IntersectionObserver`
- sticky containers with simple state changes

Avoid:

- raw scroll listeners driving many DOM updates
- scroll choreography that collapses performance on mobile

## Mobile Rules

- simplify overlap and sticky patterns below `768px`
- remove decorative motion first
- preserve affordance and clarity over spectacle

## Final Check

Before shipping, ask:

- Does the page still work if motion is reduced?
- Are the most important actions still obvious?
- Is the animation budget concentrated in the right places?
- Would this still feel premium on a mid-range laptop or phone?
