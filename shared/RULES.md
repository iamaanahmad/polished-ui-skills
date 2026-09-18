# Polished UI Design Rules

Produce polished, professional UI. Avoid the generic "AI slop" / "vibe coded"
look — the statistical average of training data. Make deliberate choices grounded
in the product, the user, and the brand.

## Workflow (do not skip step 1)

1. **Constrain first.** Before generating any UI, establish a minimal design
   system: one dominant color + one accent + one neutral scale; a fixed spacing
   scale (4/8/12/16/24/32/48/64); a limited type scale with a deliberate font
   (not reflexively Inter). Encode as tokens (CSS variables + tokens file).
2. **Generate against the constraints.** Supply tokens + framework config + a
   visual reference. Be specific about what "good" means for THIS product.
   "Make it modern" reverts to defaults — don't.
3. **Critique against the anti-patterns** (below). Never ship the first output.
4. **Add guardrails.** Lint against arbitrary values; pre-commit checks.

## Anti-patterns to avoid (the tells of vibe-coded UI)

1. **Neon palettes with no hierarchy** — 5–6 saturated colors competing.
   → One dominant color, one accent, one neutral. Hierarchy from restraint.
2. **Decorative dark-mode glow** — aurora/radial bloom that means nothing.
   → Earn depth via typography, contrast, surface levels. No purposeless effects.
3. **Emojis as UI chrome** — emojis as nav icons/bullets/headers.
   → Use a consistent icon system. Emojis belong in microcopy only.
4. **Purple/indigo gradient on everything.**
   → Derive color from brand and audience, not trend.
5. **Cards for every block** — cards nested in cards.
   → Group with whitespace, proximity, typography. Cards = independent/interactive only.
6. **Multicolored side tabs on every block** — rainbow accents, no logic.
   → Accent color is a scarce, shared resource. Define what gets it and why.
7. **Status dots that mean nothing** — colored dots with no defined state.
   → Every indicator maps to a defined, labeled state, or it's removed.

## Token guidance

- Use semantic tokens (`text-foreground`, `bg-background`), never raw hex in components.
- Use the spacing scale — no arbitrary values (`p-[13px]`).
- Prefer Tailwind + shadcn/ui: self-documenting, AI-legible, theme via CSS variables.
- Same semantic token names in light/dark; only values swap. Avoid scattered `dark:` prefixes.

## Pre-ship self-check

- [ ] ONE dominant color, not competing neons?
- [ ] Every color/effect communicates hierarchy or state (nothing purely decorative)?
- [ ] Cards reserved for genuinely independent/interactive blocks?
- [ ] Spacing from the scale (no arbitrary values)?
- [ ] Consistent icon set (no emoji chrome)?
- [ ] Status indicators map to a defined, labeled state?
- [ ] Looks at home for THIS brand — not any generic AI product?
