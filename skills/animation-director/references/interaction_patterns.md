# Interaction Patterns

Use these selectively. One page does not need all of them.

## Entry Motion

Prefer:

- fade-up with slight blur resolve
- staggered reveal for lists and grids
- shared section timing so the page feels orchestrated

Avoid:

- every element animating independently with no rhythm

## Hover Motion

Prefer:

- small lift or translation
- internal icon drift
- border or surface response
- scale only in tiny amounts

Avoid:

- huge scale effects
- hover states that break layout alignment

## Sticky Storytelling

Use when:

- one preview should remain pinned while the story changes
- the page needs to explain a workflow or product sequence

Rules:

- the pinned content must change meaningfully
- the right-hand narrative must stay readable
- mobile should flatten or simplify the sticky treatment

## Product Surface Animation

Use when:

- screenshots or mock interfaces are central to persuasion

Prefer:

- soft parallax
- active indicators
- tiny looping states inside the frame
- sequence-based highlight changes

Avoid:

- turning the screenshot into a chaotic animated toy

## CTA Feedback

Every primary CTA should have:

- hover feedback
- press feedback
- focus-visible clarity

Prefer:

- `translateY`
- `scale(0.98)` on press
- subtle icon movement

## Ambient Motion

Use sparingly.

Allowed:

- slow mesh drift
- tiny status pulse
- restrained marquee
- subtle floating accent

Avoid:

- many simultaneous infinite loops
- ambient motion that distracts from reading
