#!/usr/bin/env node
/**
 * polished-ui-skills installer
 *
 * Installs the "polished-ui-design" agent skill into any supported AI coding
 * agent / IDE. Zero runtime dependencies (Node >= 16).
 *
 * Usage:
 *   npx polished-ui-skills                 # auto-detect agents in this project
 *   npx polished-ui-skills --agent cursor  # install for a specific agent
 *   npx polished-ui-skills --all           # install for every supported agent
 *   npx polished-ui-skills --list          # list supported agents
 *   npx polished-ui-skills --dir ./path    # target a different project root
 */

'use strict';

const fs = require('fs');
const path = require('path');

const BEGIN = '<!-- POLISHED-UI-SKILLS:BEGIN -->';
const END = '<!-- POLISHED-UI-SKILLS:END -->';

// ---------------------------------------------------------------------------
// Content (embedded so `npx` works without the repo checked out)
// ---------------------------------------------------------------------------

const RULES_BODY = `${BEGIN}
# Polished UI Design Rules

Produce polished, professional UI. Avoid the generic "AI slop" / "vibe coded"
look — the statistical average of training data. Make deliberate choices grounded
in the product, the user, and the brand.

## Workflow (do not skip step 1)

1. **Constrain first.** Establish a minimal design system before generating UI:
   one dominant color + one accent + one neutral scale; a fixed spacing scale
   (4/8/12/16/24/32/48/64); a limited type scale with a deliberate font (not
   reflexively Inter). Encode as tokens (CSS variables + tokens file).
2. **Generate against the constraints.** Supply tokens + framework config + a
   visual reference. Be specific about what "good" means for THIS product.
3. **Critique against the anti-patterns** below. Never ship the first output.
4. **Add guardrails.** Lint against arbitrary values; pre-commit checks.

## Anti-patterns to avoid

1. Neon palettes with no hierarchy → one dominant color, one accent, one neutral.
2. Decorative dark-mode glow → earn depth via typography/contrast/surfaces.
3. Emojis as UI chrome → use a consistent icon system; emojis in microcopy only.
4. Purple/indigo gradient on everything → derive color from brand and audience.
5. Cards for every block → group with whitespace; cards = independent/interactive only.
6. Rainbow side-tab accents → accent color is scarce; define what gets it and why.
7. Meaningless status dots → every indicator maps to a defined, labeled state.

## Token guidance

- Semantic tokens (\`text-foreground\`, \`bg-background\`), never raw hex in components.
- Spacing scale only — no arbitrary values (\`p-[13px]\`).
- Prefer Tailwind + shadcn/ui. Same semantic names in light/dark; only values swap.

## Pre-ship self-check

- [ ] ONE dominant color, not competing neons?
- [ ] Every color/effect communicates hierarchy or state?
- [ ] Cards reserved for independent/interactive blocks?
- [ ] Spacing from the scale (no arbitrary values)?
- [ ] Consistent icon set (no emoji chrome)?
- [ ] Status indicators map to a defined, labeled state?
- [ ] Looks at home for THIS brand — not any generic AI product?
${END}`;

const CURSOR_FRONTMATTER = `---
description: Polished UI design rules — avoid the generic "AI slop" / vibe-coded look. Apply when building, reviewing, or refining any frontend, component, landing page, or dashboard.
globs: ["**/*.tsx", "**/*.jsx", "**/*.vue", "**/*.svelte", "**/*.css", "**/*.scss", "**/*.html", "**/*.astro"]
alwaysApply: false
---

`;

const KIRO_FRONTMATTER = `---
inclusion: fileMatch
fileMatchPattern: "**/*.{tsx,jsx,vue,svelte,css,scss,html,astro}"
---

`;

// SKILL.md for native-skill agents (Claude Code). Kept concise; the full
// reference files live in the repo for those who want progressive disclosure.
const SKILL_MD = `---
name: polished-ui-design
description: >-
  Guides an agent to generate polished, professional web UI that avoids the
  generic "AI slop" / "vibe coded" look. Use when building, reviewing, or
  refining any frontend interface, landing page, dashboard, or component.
---

${RULES_BODY.replace(BEGIN + '\n', '').replace('\n' + END, '')}
`;

// ---------------------------------------------------------------------------
// Agent definitions
// ---------------------------------------------------------------------------
// kind:
//   'section' — inject the sentinel-wrapped block into a (possibly shared) file
//   'file'    — write a standalone file (prepend `prefix` if given)
// detect: relative paths whose existence implies the agent is in use

const AGENTS = {
  cursor: {
    label: 'Cursor',
    kind: 'file',
    target: '.cursor/rules/polished-ui-design.mdc',
    prefix: CURSOR_FRONTMATTER,
    detect: ['.cursor', '.cursorrules'],
  },
  kiro: {
    label: 'Kiro',
    kind: 'file',
    target: '.kiro/steering/polished-ui-design.md',
    prefix: KIRO_FRONTMATTER,
    detect: ['.kiro'],
  },
  claude: {
    label: 'Claude Code',
    kind: 'file',
    target: '.claude/skills/polished-ui-design/SKILL.md',
    content: SKILL_MD,
    detect: ['.claude', 'CLAUDE.md'],
  },
  antigravity: {
    label: 'Antigravity',
    kind: 'file',
    target: '.agent/rules/polished-ui-design.md',
    detect: ['.agent', '.gemini/antigravity'],
  },
  windsurf: {
    label: 'Windsurf',
    kind: 'file',
    target: '.windsurf/rules/polished-ui-design.md',
    detect: ['.windsurf', '.windsurfrules'],
  },
  copilot: {
    label: 'GitHub Copilot',
    kind: 'section',
    target: '.github/copilot-instructions.md',
    detect: ['.github/copilot-instructions.md', '.github'],
  },
  codex: {
    label: 'Codex / AGENTS.md',
    kind: 'section',
    target: 'AGENTS.md',
    detect: ['AGENTS.md', '.codex'],
  },
  gemini: {
    label: 'Gemini CLI',
    kind: 'section',
    target: 'GEMINI.md',
    detect: ['GEMINI.md', '.gemini'],
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function log(msg) {
  process.stdout.write(msg + '\n');
}

function exists(root, rel) {
  try {
    fs.accessSync(path.join(root, rel));
    return true;
  } catch {
    return false;
  }
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

/** Write a standalone file (create or overwrite our managed content). */
function installFile(root, agent) {
  const abs = path.join(root, agent.target);
  ensureDir(abs);
  const body = agent.content || (agent.prefix || '') + RULES_BODY + '\n';
  const existed = fs.existsSync(abs);
  fs.writeFileSync(abs, body, 'utf8');
  return existed ? 'updated' : 'created';
}

/**
 * Inject the sentinel block into a shared file without clobbering user content.
 * Replaces an existing block if present; otherwise appends.
 */
function installSection(root, agent) {
  const abs = path.join(root, agent.target);
  ensureDir(abs);
  let current = '';
  let existed = false;
  if (fs.existsSync(abs)) {
    existed = true;
    current = fs.readFileSync(abs, 'utf8');
  }

  if (current.includes(BEGIN) && current.includes(END)) {
    const before = current.slice(0, current.indexOf(BEGIN));
    const after = current.slice(current.indexOf(END) + END.length);
    fs.writeFileSync(abs, before + RULES_BODY + after, 'utf8');
    return 'updated';
  }

  const sep = current && !current.endsWith('\n') ? '\n\n' : current ? '\n' : '';
  fs.writeFileSync(abs, current + sep + RULES_BODY + '\n', 'utf8');
  return existed ? 'updated' : 'created';
}

function install(root, key, agent) {
  const action = agent.kind === 'section'
    ? installSection(root, agent)
    : installFile(root, agent);
  log(`  \u2713 ${agent.label.padEnd(18)} ${action.padEnd(8)} ${agent.target}`);
}

function detect(root) {
  return Object.entries(AGENTS)
    .filter(([, a]) => a.detect.some((d) => exists(root, d)))
    .map(([k]) => k);
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const out = { agents: [], all: false, list: false, help: false, dir: process.cwd() };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--all') out.all = true;
    else if (a === '--list') out.list = true;
    else if (a === '--help' || a === '-h') out.help = true;
    else if (a === '--agent' || a === '-a') out.agents.push((argv[++i] || '').toLowerCase());
    else if (a === '--dir' || a === '-d') out.dir = path.resolve(argv[++i] || '.');
    else if (!a.startsWith('-')) out.agents.push(a.toLowerCase());
  }
  return out;
}

function printHelp() {
  log('polished-ui-skills — install the polished-ui-design skill into your AI agent');
  log('');
  log('Usage:');
  log('  npx polished-ui-skills                 auto-detect agents in this project');
  log('  npx polished-ui-skills --agent cursor  install for a specific agent');
  log('  npx polished-ui-skills --all           install for every supported agent');
  log('  npx polished-ui-skills --list          list supported agents');
  log('  npx polished-ui-skills --dir ./app     target a different project root');
  log('');
  log('Supported agents: ' + Object.keys(AGENTS).join(', '));
}

function main() {
  const opts = parseArgs(process.argv.slice(2));

  if (opts.help) return printHelp();

  if (opts.list) {
    log('Supported agents:');
    for (const [k, a] of Object.entries(AGENTS)) {
      log(`  ${k.padEnd(12)} ${a.label.padEnd(18)} -> ${a.target}`);
    }
    return;
  }

  const root = opts.dir;
  let targets;

  if (opts.all) {
    targets = Object.keys(AGENTS);
  } else if (opts.agents.length) {
    targets = opts.agents;
    const unknown = targets.filter((t) => !AGENTS[t]);
    if (unknown.length) {
      log(`Unknown agent(s): ${unknown.join(', ')}`);
      log('Run "npx polished-ui-skills --list" to see supported agents.');
      process.exitCode = 1;
      return;
    }
  } else {
    targets = detect(root);
    if (!targets.length) {
      log('No AI agent config detected in this project.');
      log('Install for a specific agent, e.g.:  npx polished-ui-skills --agent cursor');
      log('Or install for all:                  npx polished-ui-skills --all');
      log('');
      log('Supported: ' + Object.keys(AGENTS).join(', '));
      return;
    }
    log(`Detected agent(s): ${targets.join(', ')}`);
  }

  log(`Installing polished-ui-design into ${root}`);
  for (const key of targets) {
    install(root, key, AGENTS[key]);
  }
  log('');
  log('Done. Restart your agent/IDE session if it caches rules on startup.');
}

main();
