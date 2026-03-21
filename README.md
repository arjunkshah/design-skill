# Layout Director

Layout Director is a portable frontend layout skill for coding agents like Codex, Claude Code, and Cursor.

It is designed to improve:

- layout composition
- hierarchy
- spacing
- section rhythm
- motion restraint
- mobile collapse behavior

The system is intentionally flexible. It gives agents decision frameworks and quality constraints instead of locking them into one hardcoded visual style.

## Repository Structure

```text
.
├── README.md
├── .gitignore
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
            ├── component_principles.md
            ├── layout_archetypes.md
            ├── platform_adaptation.md
            ├── prompt_recipe.md
            ├── review_rubric.md
            └── variation_matrix.md
```

## What Is Included

- A static landing page that presents the skill and its design philosophy
- A reusable skill package with modular reference files
- A variation matrix so outputs can differ without becoming random
- A review rubric so the quality bar stays consistent across layouts

## Using The Skill

The main skill lives at `skills/layout-director/SKILL.md`.

Use it when you want an agent to generate a frontend page with stronger layout judgment. The skill instructs the agent to:

1. read the brief
2. choose a layout archetype
3. choose variation axes deliberately
4. apply component rules
5. review the output against a quality rubric

## Viewing The Landing Page

Open `site/index.html` in a browser, or serve the repository locally:

```bash
cd site
python3 -m http.server 4173
```

## Notes

No open-source license has been added yet. Add the license you want before broader distribution.
