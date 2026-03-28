---
name: redesign
description: Redesign existing interfaces to premium quality while preserving product goals and functional behavior.
user-invocable: true
argument-hint: [TARGET=<value>]
---

# Redesign

Use this command when a product already exists and needs a stronger layout, visual system, and interaction polish.

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
