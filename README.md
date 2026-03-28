# Design Skill

Design Skill is an open-source frontend skill toolkit for coding agents. It provides three focused commands for design direction, redesign work, and motion polish.

Default styling output is Tailwind CSS unless a different stack is explicitly requested.
For typography-sensitive layouts and stable multiline behavior, the skills now integrate `@chenglou/pretext` guidance.
The skills also enforce a large variation strategy: broad component/motion pattern exploration plus bespoke element creation to avoid repetitive template remixing.
Recent updates add strict diversity quotas, giant component/motion taxonomies, mutation rules, and no-repeat gates to push outputs toward genuinely different design directions.
Reference sources now include UIverse, FlyonUI, and daisyUI, with mandatory mutation so outputs do not ship as stock library defaults.
The system now also applies explicit anti-AI-look gates: template-reskin outputs are rejected, and each substantial page must include multiple bespoke components and distinct section behaviors.

![Skills](https://img.shields.io/badge/skills-agent--ready-171717?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-171717?style=flat-square)
![Focus](https://img.shields.io/badge/focus-frontend%20layout-171717?style=flat-square)

## Install

```bash
npx skills add https://github.com/arjunkshah/design-skill
```

Invoke one of:

```text
$design
$redesign
$animate
```

## Agent Boundary

If an AI agent scans this repository, it should use only:

- `skills/design-skill/SKILL.md`
- `skills/redesign/SKILL.md`
- `skills/animate/SKILL.md`

Everything else is product, packaging, or marketing material:

- `index.html` is the landing page
- `examples/` contains showcase outputs and screenshots
- `public/` contains landing assets
- `README.md` is user-facing documentation

## Skill Model

`$design` is a unified workflow with four parts:

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
    ├── design-skill/
    │   ├── SKILL.md
    │   └── agents/
    ├── redesign/
    │   ├── SKILL.md
    │   └── agents/
    └── animate/
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
$design
Design a homepage for a developer tool with a framed product stage, proof rail, and calmer mobile collapse.
```

```text
$redesign
Upgrade an existing SaaS dashboard to improve hierarchy, spacing rhythm, and conversion-focused CTA placement without breaking flows.
```

```text
$animate
Create a launch site with a pinned demo stage, staggered product storytelling, tactile CTA states, and restrained mobile motion.
```

## Manual Fallback

If your setup does not support repo-based skill installs yet, copy `skills/design-skill/`, `skills/redesign/`, and `skills/animate/` into your local skill/rules directory and invoke:

```text
$design
```

## Open Source

MIT licensed. See `LICENSE`.
