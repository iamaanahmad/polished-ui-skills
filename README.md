# Polished UI Design — Agent Skill

An [Agent Skill](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
that guides AI coding agents to produce **polished, professional web UI** instead
of the generic "AI slop" / "vibe coded" look.

The core problem it solves: left unconstrained, an AI generates the *statistical
average* of its training data — purple gradients, Inter everywhere, glowing
cards, emojis as icons, and a card around every block. This skill gives the agent
the constraints, checklist, and workflow to make deliberate, brand-appropriate
design choices instead.

## What's inside

```
skills/
└── polished-ui-design/
    ├── SKILL.md                      # Entry point: workflow + self-check
    └── references/
        ├── anti-patterns.md          # The 7 tells of vibe-coded UI + fixes
        ├── design-tokens.md          # Three-tier token architecture + guardrails
        └── prompting.md              # Effective prompting loop + template
```

`SKILL.md` starts with YAML frontmatter (`name`, `description`) that the agent
preloads for discovery; the reference files load on demand (progressive
disclosure), keeping context lean until a topic is actually needed.

## How to use it

### With Claude / Anthropic Agent Skills

Copy the `skills/polished-ui-design/` directory into your agent's skills location
(for example `.claude/skills/` in a project, or your personal skills directory).
The agent activates it automatically when a task matches the `description` —
building, reviewing, or refining a frontend.

### With any coding agent

Point your agent at `skills/polished-ui-design/SKILL.md` as context, or paste its
self-check and the anti-pattern list into your `AGENTS.md` / `CLAUDE.md` /
project design doc.

## The workflow in one line

**Constrain first (design system) → generate against the constraints → critique
against the anti-pattern checklist → add guardrails so quality holds.**

## Sources

Synthesized and rephrased (for licensing compliance) from:

- [Firebase Studio: Effective prompting](https://firebase.google.com/docs/studio/prompting)
- [Google Labs: Stitch AI UI design](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
- [The Fountain Institute: 7 Signs a UI Has Been Vibe Coded](https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui)
- [BrainGrid: Design Systems for AI Coding — Stop Getting Purple Gradients](https://www.braingrid.ai/blog/design-system-optimized-for-ai-coding)
- [Anthropic: Equipping agents with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

## License

MIT — see [LICENSE](LICENSE).
