# Platform Adaptation

The design guidance is portable. Adapt it to the host tool instead of rewriting the principles.

## Codex

Place the skill in the appropriate skills directory and invoke `$layout-director` when requesting frontend work.

## Claude Code

Use the skill body as a focused project instruction or extract the workflow and references into the project guidance file. Keep the archetype list and quality bar intact.

## Cursor

Use the core workflow and non-negotiable rules in Cursor rules or project instructions. Keep the reference files nearby so the agent can load deeper guidance when needed.

## Generic Agents

Keep the system in three layers:

- one short trigger description
- one core instruction file
- optional deep references

That preserves variation while preventing the guidance from turning into a giant hardcoded prompt.
