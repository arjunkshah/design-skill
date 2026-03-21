# Design Skill

Design Skill is a skill repo for coding agents that need better frontend layout judgment.

It is built for tools like Codex, Claude Code, Cursor, Cline, Windsurf, and similar agent workflows. Instead of defaulting to the same centered hero, repeated feature cards, and weak mobile collapse, the agent gets a stricter layout process and a wider UI vocabulary.

![Skills](https://img.shields.io/badge/skills-agent--ready-171717?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-171717?style=flat-square)
![Focus](https://img.shields.io/badge/focus-frontend%20layout-171717?style=flat-square)

## Installing

Works via CLI for major AI coding agents and skill-compatible workflows:

```bash
npx skills add https://github.com/arjunkshah/design-skill
```

Then invoke:

```text
$design-skill
```

For stronger motion output, combine it with:

```text
$design-skill $animation-director
```

Recommended split:

- `$design-skill` for structure, hierarchy, type, spacing, and style direction
- `$animation-director` for entry sequencing, interaction polish, sticky narratives, and motion guardrails

## Agent Boundary

If an AI agent scans this repository, it should use only:

- `skills/design-skill/SKILL.md`
- `skills/animation-director/SKILL.md`

The landing page, README, and asset files are marketing and packaging material for this repo. They are not part of the skill prompt unless the user is explicitly asking to edit this repository's website.

## Skills

| Skill | Description |
| --- | --- |
| `design-skill` | The main frontend design skill. It is now a single Jasmine prompt focused on crafted layout, typography, imagery, section range, and anti-generic styling. |
| `animation-director` | Companion motion skill for entry choreography, interaction polish, sticky narratives, and animation performance guardrails. |

## System Stack

The repo now works best as a small frontend system:

- `design-skill`: a single Jasmine prompt for structure, hierarchy, section rhythm, typography, imagery, and visual direction
- `animation-director`: adds motion sequencing, scroll choreography, and performance-safe interaction polish

## What Is In This Repo

- `index.html`: the current landing page frontend
- `public/`: generated assets used by the landing page
- `skills/design-skill/`: the reusable skill package
- `skills/animation-director/`: companion motion skill for choreography and performance-safe animation rules

## Why This Exists

Most coding agents can produce valid HTML, CSS, or React quickly. That is not the same thing as making a page with strong structure.

The common failure modes are predictable:

- generic startup-template symmetry
- repeated card systems with no pacing
- weak focal hierarchy
- decorative motion without meaning
- mobile layouts that only shrink instead of reorganizing

Design Skill addresses those issues by forcing a stronger design brain at the prompt level instead of relying on scattered heuristics.

The landing page also ships with multiple visual presets so the same structure can be previewed across different moods.

The skill package keeps generated imagery in scope and treats section range, hierarchy, and anti-slop styling as part of one prompt instead of a separate reference stack.

## Core Ideas

### 1. Structure before components

The page should begin with a structural choice such as editorial split, asymmetric bento, narrative stack, or product frame. Components come later.

### 2. Variation without repetition

The skill explicitly pushes the model to use different section types such as editorial splits, bentos, proof rails, pinned demos, sticky stories, horizontal rails, comparison bands, and quiet reset sections.

### 3. Reject weak output

The agent should reject the layout if the result still feels like:

- a centered startup template
- a feature-card conveyor belt
- a page with no dominant thesis
- a desktop composition stacked thoughtlessly on mobile

## Repository Structure

```text
.
├── AGENTS.md
├── LICENSE
├── README.md
├── index.html
├── package.json
├── public/
│   └── assets/
├── skills/
│   ├── animation-director/
│   │   ├── SKILL.md
│   │   ├── agents/
│   │   └── references/
│   └── design-skill/
│       ├── SKILL.md
│       └── agents/
└── ...
```

## Quick Start

### View the landing page

```bash
npm run dev
```

Then open `http://127.0.0.1:5177`.

## How It Works

Design Skill gives the agent a better process:

- read the brief before coding
- choose a section sequence first
- vary section type, typography, imagery, and motion deliberately
- keep the whole page inside one coherent visual language
- reject generic output before shipping

The goal is not to force one visual style. The goal is to raise the floor for composition while keeping enough freedom for different layouts to emerge from different briefs.

Animation Director adds the motion layer:

- choose a motion profile
- decide where motion actually helps comprehension
- apply interaction and scroll choreography patterns
- enforce performance and mobile simplification rules

## Using It With Different Tools

### Codex

Install the repo with `npx skills add ...` if your setup supports it, or use the bundled skill folders directly and invoke `$design-skill` and optionally `$animation-director`.

### Claude Code

Use the Jasmine prompt in `skills/design-skill/SKILL.md` as project instructions or custom guidance.

### Cursor

Use the same Jasmine prompt in Cursor rules or project instructions. Pair it with `animation-director` only when the page needs a dedicated motion layer.

## Recommended Usage

Use only one skill when the job is narrow:

- `$design-skill` for layout, hierarchy, and visual identity
- `$animation-director` for motion refinement on an already-strong page

Use both when the page needs a full frontend direction:

```text
$design-skill $animation-director
Design a landing page with a strong product frame, premium editorial typography, pinned storytelling, and tactile hover states.
```

Good default split:

- use only `design-skill` when the page still needs structural thinking
- add `animation-director` after the composition already makes sense

## Example Prompts

Layout only:

```text
$design-skill
Design a homepage for a developer tool with a framed product stage, proof rail, and a calmer mobile collapse.
```

Brand-aware layout:

```text
$design-skill
Build a landing page for a premium finance brand using a restrained serif-led system, stricter proof placement, and a more editorial information flow.
```

Full frontend direction:

```text
$design-skill $animation-director
Create a launch page with a pinned demo rail, staggered product storytelling, tactile CTA states, and motion that stays restrained on mobile.
```

## Development

This repo is intentionally lightweight. The frontend is a single landing page rooted at `index.html`, and the skills stay as plain Markdown plus minimal agent wrappers.

Useful commands:

```bash
npm run dev
```

## UI Range

The skill is meant to support more than a polished hero and a few feature cards.

It explicitly supports patterns such as:

- asymmetric bento sections
- central thesis sections
- proof rails
- framed product stages
- editorial split layouts
- horizontal rail sections
- sticky scrollytelling modules
- layered scroll stacks
- pinned product demos with changing supporting content

The landing page also includes a project shelf section intended for screenshots of layouts you generate with the skill.

## Manual Fallback

If your setup does not support repo-based skill installs yet, copy `skills/design-skill/` and optionally `skills/animation-director/` into your local skill or rules directory and invoke:

```text
$design-skill
```

## Open Source

This repository is MIT licensed. See `LICENSE`.

## Reference

The landing page visual direction is intentionally influenced by the live structure and product presentation style of [paper.design](https://paper.design/), while the content, code, and skill system in this repository are original.

The skill package in this repo was informed by structured brand-system modeling in `preetsuthar17/loftlyy`, but the packaged style and motion system in this repository is written as a first-party skill set for this project.
