# Layout Director

Layout Director is an open-source layout skill for coding agents such as Codex, Claude Code, Cursor, Cline, and Windsurf.

It exists to fix a recurring failure mode in agent-generated frontend work: the page is usually functional, but the layout judgment is weak. The model reaches for the same centered hero, the same repeated feature cards, the same fake-premium gradients, and the same cramped mobile collapse.

Layout Director gives the agent a better process:

- read the brief before coding
- choose a layout archetype first
- vary the right design axes deliberately
- apply component rules that serve the page structure
- run a final review rubric before shipping

The goal is not to force one visual style. The goal is to raise the floor for composition while keeping enough freedom for different layouts to emerge from different briefs.

## What Is In This Repo

- `site/`: the landing page for the project
- `skills/layout-director/`: the reusable skill package
- `skills/layout-director/references/`: modular reference files for archetypes, variation, component families, scroll patterns, prompts, platform adaptation, and review

## Why This Exists

Most coding agents can produce valid HTML, CSS, or React quickly. That is not the same thing as making a page with strong structure.

The common failure modes are predictable:

- generic startup-template symmetry
- repeated card systems with no pacing
- weak focal hierarchy
- decorative motion without meaning
- mobile layouts that only shrink instead of reorganizing

Layout Director addresses those issues by making layout selection an explicit step instead of an accidental byproduct of code generation.

## Core Ideas

### 1. Structure before components

The page should begin with a structural choice such as editorial split, asymmetric bento, narrative stack, or product frame. Components come later.

### 2. Variation without randomness

The skill uses a variation matrix so the agent can change:

- structure
- typography mode
- density
- section rhythm
- motion profile
- viewport behavior

That keeps outputs from collapsing into repetition without turning the process into aesthetic roulette.

### 3. Review before output

The agent should reject the layout if the result still feels like:

- a centered startup template
- a feature-card conveyor belt
- a page with no dominant thesis
- a desktop composition stacked thoughtlessly on mobile

## Repository Structure

```text
.
├── LICENSE
├── README.md
├── package.json
├── site/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── skills/
    └── layout-director/
        ├── SKILL.md
        ├── agents/
        │   └── openai.yaml
        └── references/
            ├── component_families.md
            ├── component_principles.md
            ├── layout_archetypes.md
            ├── platform_adaptation.md
            ├── prompt_recipe.md
            ├── review_rubric.md
            ├── scroll_patterns.md
            └── variation_matrix.md
```

## Quick Start

### View the landing page

```bash
npm run dev
```

Then open `http://127.0.0.1:5177`.

### Use the skill directly

Copy `skills/layout-director/` into the skill or rules area used by your agent tooling.

Then invoke it as:

```text
$layout-director
```

Or adapt the same workflow into your project instructions if your tool does not support native skill loading.

## Using It With Different Tools

### Codex

Use the bundled skill folder directly and invoke `$layout-director` for frontend layout work.

### Claude Code

Use the skill body and reference files as project instructions or custom guidance. Keep the archetypes, variation matrix, and review rubric intact.

### Cursor

Use the same principles in Cursor rules or project instructions. The reference files are intentionally modular so you can keep the core rule set small.

## Development

This repo is intentionally lightweight. The site is static HTML, CSS, and JavaScript. The skill is plain Markdown plus small metadata.

Useful commands:

```bash
npm run dev
```

## UI Range

The skill is meant to support more than a polished hero and a few feature cards.

It explicitly supports patterns such as:

- asymmetric bento sections
- proof rails
- framed product stages
- editorial split layouts
- sticky scrollytelling modules
- pinned product demos with changing supporting content

## Open Source

This repository is MIT licensed. See `LICENSE`.

## Reference

The landing page visual direction is intentionally influenced by the live structure and product presentation style of [paper.design](https://paper.design/), while the content, code, and skill system in this repository are original.
