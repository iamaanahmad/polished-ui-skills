# Polished UI Skills

> **v2.1.0 — Cross-platform UI quality upgrade**

Polished UI Skills now covers the full UI quality loop: **design system → hierarchy → responsive layout → interaction states → accessibility → audit/refinement**.

A portable [Agent Skill](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
that guides AI coding agents to produce **polished, professional web and mobile UI** instead
of the generic "AI slop" / "vibe coded" look — with **one-command install** for
every major AI coding agent and IDE.

It supports **Web, React Native/Expo, Flutter, SwiftUI/UIKit, and Jetpack Compose/Android Views** while preserving platform conventions instead of forcing one design language across every device.\n\nThe problem it solves: left unconstrained, an AI generates the *statistical
average* of its training data — purple gradients, Inter everywhere, glowing
cards, emojis as icons, and a card around every block. This skill gives the agent
the constraints, checklist, and workflow to make deliberate, brand-appropriate
design choices instead.

## Quick install (CLI)

Run this in your project root — it auto-detects which agents you use and installs
the rules in the right place and format for each:

```bash
npx polished-ui-skills@latest
```

Other modes:

```bash
npx polished-ui-skills@latest --all            # install for every supported agent
npx polished-ui-skills@latest --agent cursor   # install for one specific agent
npx polished-ui-skills@latest --list           # list supported agents + target paths
npx polished-ui-skills@latest --dir ./app      # target a different project root
npx polished-ui-skills@latest --help           # usage
```

The installer is **idempotent** and **non-destructive**: for shared files like
`AGENTS.md` it injects a marked block between
`<!-- POLISHED-UI-SKILLS:BEGIN -->` / `<!-- ...:END -->` sentinels, preserving
your existing content and updating cleanly on re-run.

## Supported agents & IDEs

| Agent / IDE | Installed to | Format |
|---|---|---|
| **Cursor** | `.cursor/rules/polished-ui-design.mdc` | `.mdc` + frontmatter (`globs`, `alwaysApply`) |
| **Kiro** | `.kiro/steering/polished-ui-design.md` | steering + `inclusion: fileMatch` |
| **Claude Code** | `.claude/skills/polished-ui-design/SKILL.md` | native Agent Skill |
| **Antigravity** (Google) | `.agent/rules/polished-ui-design.md` | flat rules markdown |
| **Windsurf** | `.windsurf/rules/polished-ui-design.md` | rules markdown |
| **GitHub Copilot** | `.github/copilot-instructions.md` | injected section |
| **Codex** (OpenAI) | `AGENTS.md` | injected section (`AGENTS.md` standard) |
| **Gemini CLI** | `GEMINI.md` | injected section |

> The `AGENTS.md` file is a cross-tool standard also read by Copilot, Cursor
> (as a fallback), and others — so even agents not listed here often pick it up.

## What's inside

```
polished-ui-skills/
├── bin/cli.js                        # the installer (zero-dependency Node)
├── skills/polished-ui-design/
│   ├── SKILL.md                      # full skill: workflow + pre-ship self-check
│   └── references/
│       ├── anti-patterns.md          # the 7 tells of vibe-coded UI + fixes
│       ├── design-tokens.md          # 3-tier token architecture + guardrails
│       └── prompting.md              # effective prompting loop + template
├── adapters/                         # per-tool source templates
│   ├── cursor.mdc
│   ├── kiro-steering.md
│   └── generic.md
├── shared/RULES.md                   # canonical compact rules body
├── package.json
└── LICENSE
```

`SKILL.md` starts with YAML frontmatter (`name`, `description`) that native-skill
agents preload for discovery; the reference files load on demand (progressive
disclosure), keeping context lean until a topic is needed. For rules-based
agents, the CLI installs a compact version of the same guidance.

## Manual install (no CLI)

Prefer to copy files yourself? Use the table above to place the matching adapter:

- **Native skill (Claude, or any skill-aware agent):** copy
  `skills/polished-ui-design/` into your skills directory (e.g. `.claude/skills/`).
- **Cursor:** copy `adapters/cursor.mdc` to `.cursor/rules/polished-ui-design.mdc`.
- **Kiro:** copy `adapters/kiro-steering.md` to `.kiro/steering/polished-ui-design.md`.
- **Everything else (Antigravity, Windsurf, Copilot, Codex, Gemini):** copy the
  body of `adapters/generic.md` into that tool's rules/instructions file (see table).

## The rules in one line

**Constrain first (design system) → generate against the constraints → critique
against the anti-pattern checklist → add guardrails so quality holds.**

The v2.1 workflow goes beyond visual anti-patterns: agents are explicitly pushed to validate responsive behavior, interaction states, keyboard accessibility, content resilience, reduced motion, and a final refinement audit. See
[`skills/polished-ui-design/references/anti-patterns.md`](skills/polished-ui-design/references/anti-patterns.md).

## Sources

Synthesized and rephrased (for licensing compliance) from:

- [Firebase Studio: Effective prompting](https://firebase.google.com/docs/studio/prompting)
- [Google Labs: Stitch AI UI design](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
- [The Fountain Institute: 7 Signs a UI Has Been Vibe Coded](https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui)
- [BrainGrid: Design Systems for AI Coding — Stop Getting Purple Gradients](https://www.braingrid.ai/blog/design-system-optimized-for-ai-coding)
- [Anthropic: Equipping agents with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

Agent config-file conventions referenced from each tool's official docs
(OpenAI Codex `AGENTS.md`, Cursor rules, Kiro steering, Google Antigravity,
GitHub Copilot custom instructions, Windsurf rules, Gemini CLI).

## License

MIT — see [LICENSE](LICENSE).


## How to use the skill

Give the agent a normal UI task. The skill is designed to select the smallest relevant guidance set automatically.

**Web**
- Use responsive layout, web accessibility, interaction-state, and UI-audit guidance.
- Validate keyboard + pointer behavior and narrow/wide layouts.

**Mobile / React Native / Expo / Flutter**
- Use mobile layout, navigation, touch, mobile accessibility, and interaction-state guidance.
- Apply the target platform's conventions rather than shrinking desktop UI.

**iOS / SwiftUI / UIKit**
- Add iOS patterns: navigation stacks, tab bars, sheets, safe areas, Dynamic Type, VoiceOver, and expected system behavior.

**Android / Jetpack Compose / Views**
- Add Android patterns: Material conventions, adaptive windows, system back, edge-to-edge/insets, large text, and TalkBack.

**Cross-platform products**
- Share the core design system, but allow platform-specific navigation, controls, gestures, and behavior where that improves usability.

### Recommended agent instruction

When asking an agent to build or refine UI, include the product context and let the skill handle the quality pass:

```
Build/refine this UI for [product/task].
Target: [web / React Native / Expo / Flutter / iOS / Android].
Preserve the existing design system and components.
Use the Polished UI Skills workflow, apply the correct platform guidance,
implement all relevant interaction/accessibility states, and run the
platform-specific audit before considering it finished.
```

The key principle is **not “make everything beautiful.”** It is: **understand the product → choose the right platform conventions → constrain the system → implement the task flow → test real states → audit and refine.**

## Publishing releases

Releases are published to npm by [GitHub Actions](.github/workflows/publish.yml)
when a `v*.*.*` tag is pushed. The workflow uses npm Trusted Publishing and
provenance, and verifies that the tag matches the version in `package.json`.

For the one-time setup, add this repository as a trusted publisher for the
`polished-ui-skills` package in npm package settings:

- GitHub organization or user: `iamaanahmad`
- Repository: `polished-ui-skills`
- Workflow filename: `publish.yml`

To publish a release, update `package.json`, merge the change to `main`, then
create and push the matching tag:

```bash
git tag v2.2.0
git push origin v2.2.0
```
