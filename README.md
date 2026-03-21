# Layout Director

Layout Director is a skill repo for coding agents that need better frontend layout judgment.

It is built for tools like Codex, Claude Code, Cursor, Cline, Windsurf, and similar agent workflows. Instead of defaulting to the same centered hero, repeated feature cards, and weak mobile collapse, the agent gets a stricter layout process and a wider UI vocabulary.

![Skills](https://img.shields.io/badge/skills-agent--ready-171717?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-171717?style=flat-square)
![Focus](https://img.shields.io/badge/focus-frontend%20layout-171717?style=flat-square)

## Installing

Works via CLI for major AI coding agents and skill-compatible workflows:

```bash
npx skills add https://github.com/arjunkshah/layout-skill
```

Then invoke:

```text
$layout-director
```

For stronger motion output, combine it with:

```text
$layout-director $animation-director
```

Recommended split:

- `$layout-director` for structure, hierarchy, type, spacing, and style direction
- `$animation-director` for entry sequencing, interaction polish, sticky narratives, and motion guardrails

## Skills

| Skill | Description |
| --- | --- |
| `layout-director` | The main frontend layout skill. Teaches structure selection, variation axes, component families, scroll patterns, and layout review. |
| `animation-director` | Companion motion skill for entry choreography, interaction polish, sticky narratives, and animation performance guardrails. |

## System Stack

The repo now works best as a small frontend system rather than one giant instruction file:

- `layout-director`: chooses structure, hierarchy, section rhythm, and visual direction
- `style engine`: inside `layout-director`, handles typography, palette, density, and brand translation
- `animation-director`: adds motion sequencing, scroll choreography, and performance-safe interaction polish

## What Is In This Repo

- `index.html`: the current landing page frontend
- `src/`: a componentized port of the landing page kept for future iteration
- `site/`: the earlier static landing page iteration kept as a reference
- `skills/layout-director/`: the reusable skill package
- `skills/layout-director/references/`: modular reference files for archetypes, variation, component families, scroll patterns, prompts, platform adaptation, and review
- `skills/animation-director/`: companion motion skill for choreography and performance-safe animation rules

## Why This Exists

Most coding agents can produce valid HTML, CSS, or React quickly. That is not the same thing as making a page with strong structure.

The common failure modes are predictable:

- generic startup-template symmetry
- repeated card systems with no pacing
- weak focal hierarchy
- decorative motion without meaning
- mobile layouts that only shrink instead of reorganizing

Layout Director addresses those issues by making layout selection an explicit step instead of an accidental byproduct of code generation.

The landing page also ships with multiple visual presets so the same structure can be previewed across different moods.

The skill package now also includes:

- a style engine for stronger typography, palette, density, and taste decisions
- a brand identity translation reference so brand systems can influence actual UI output
- a separate animation skill so motion can be layered in without bloating the main layout prompt
- a deeper motion reference set for scroll choreography, interaction patterns, prompt recipes, and review

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
├── index.html
├── package.json
├── skills/
│   ├── animation-director/
│   │   ├── SKILL.md
│   │   ├── agents/
│   │   └── references/
│   └── layout-director/
│       ├── SKILL.md
│       ├── agents/
│       └── references/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
└── ...
```

## Quick Start

### View the landing page

```bash
npm run dev
```

Then open `http://127.0.0.1:5177`.

## How It Works

Layout Director gives the agent a better process:

- read the brief before coding
- choose a layout archetype first
- vary the right design axes deliberately
- apply component rules that serve the page structure
- run a final review rubric before shipping

The goal is not to force one visual style. The goal is to raise the floor for composition while keeping enough freedom for different layouts to emerge from different briefs.

Animation Director adds the motion layer:

- choose a motion profile
- decide where motion actually helps comprehension
- apply interaction and scroll choreography patterns
- enforce performance and mobile simplification rules

## Using It With Different Tools

### Codex

Install the repo with `npx skills add ...` if your setup supports it, or use the bundled skill folders directly and invoke `$layout-director` and optionally `$animation-director`.

### Claude Code

Use the skill body and reference files as project instructions or custom guidance. Keep the archetypes, style engine, and review rubric intact.

### Cursor

Use the same principles in Cursor rules or project instructions. The reference files are intentionally modular so you can keep the core rule set small and load motion guidance only when needed.

## Recommended Usage

Use only one skill when the job is narrow:

- `$layout-director` for layout, hierarchy, and visual identity
- `$animation-director` for motion refinement on an already-strong page

Use both when the page needs a full frontend direction:

```text
$layout-director $animation-director
Design a landing page with a strong product frame, premium editorial typography, pinned storytelling, and tactile hover states.
```

Good default split:

- use only `layout-director` when the page still needs structural thinking
- add `animation-director` after the composition already makes sense

## Development

This repo is intentionally lightweight. The frontend is a small React + Vite app, and the skill stays plain Markdown plus compact reference files.
The published landing page currently ships from the root `index.html`, while the `src/` directory is the componentized port for future cleanup.

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

The landing page also includes a project shelf section intended for screenshots of layouts you generate with the skill.

## Manual Fallback

If your setup does not support repo-based skill installs yet, copy `skills/layout-director/` and optionally `skills/animation-director/` into your local skill or rules directory and invoke:

```text
$layout-director
```

## Open Source

This repository is MIT licensed. See `LICENSE`.

## Reference

The landing page visual direction is intentionally influenced by the live structure and product presentation style of [paper.design](https://paper.design/), while the content, code, and skill system in this repository are original.

The skill package in this repo was expanded using ideas distilled from:

- structured brand-system modeling in `preetsuthar17/loftlyy`
- premium frontend taste controls in `Leonxlnx/taste-skill`

Those references informed the workflow and heuristics here, but the packaged skill files in this repository were written specifically for this project.
