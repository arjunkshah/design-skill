# Design Skill

Design Skill is an open-source frontend skill for coding agents. It is now a single integrated skill that handles layout, visual direction, and motion choreography together.

![Skills](https://img.shields.io/badge/skills-agent--ready-171717?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-171717?style=flat-square)
![Focus](https://img.shields.io/badge/focus-frontend%20layout-171717?style=flat-square)

## Install

```bash
npx skills add https://github.com/arjunkshah/design-skill
```

Invoke:

```text
$design-skill
```

## Agent Boundary

If an AI agent scans this repository, it should use only:

- `skills/design-skill/SKILL.md`

Everything else is product, packaging, or marketing material:

- `index.html` is the landing page
- `examples/` contains showcase outputs and screenshots
- `public/` contains landing assets
- `README.md` is user-facing documentation

## Skill Model

`design-skill` is a unified workflow with four parts:

1. Structure: layout archetype, funnel sequence, section jobs
2. Style: type system, palette energy, surface language, imagery mode
3. Motion: section-to-motion pairing and intensity control
4. Review: anti-pattern and quality gate before final output

This keeps variation high while preserving coherence.

## Repository Structure

```text
.
├── AGENTS.md
├── LICENSE
├── README.md
├── examples/
├── index.html
├── package.json
├── public/
│   └── assets/
└── skills/
    └── design-skill/
        ├── SKILL.md
        └── agents/
```

## Quick Start

```bash
npm run dev
```

Open `http://127.0.0.1:5177`.

## Usage Examples

```text
$design-skill
Design a homepage for a developer tool with a framed product stage, proof rail, and calmer mobile collapse.
```

```text
$design-skill
Create a launch site with a pinned demo stage, staggered product storytelling, tactile CTA states, and restrained mobile motion.
```

## Manual Fallback

If your setup does not support repo-based skill installs yet, copy `skills/design-skill/` into your local skill/rules directory and invoke:

```text
$design-skill
```

## Open Source

MIT licensed. See `LICENSE`.
