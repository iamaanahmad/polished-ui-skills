---
name: polished-ui-design
description: >-
  Guides an agent to design, implement, audit, and refine polished production
  web UI that avoids generic AI-generated aesthetics. Use for landing pages,
  dashboards, apps, components, responsive layouts, interaction states,
  accessibility, design systems, and UI quality reviews.
---

# Polished UI Design

Build interfaces that feel intentional, product-specific, usable, and complete — not merely visually fashionable. Treat visual design, interaction design, responsive behavior, accessibility, and implementation consistency as one quality system.

## Operating principles

1. **Understand before styling.** Identify the product, primary user, primary task, brand character, content density, and technical constraints.
2. **Preserve existing systems.** In an established product, inspect and extend its tokens/components before inventing new ones.
3. **Constrain before generating.** Define a small visual system before producing large amounts of UI.
4. **Hierarchy beats decoration.** Use typography, spacing, grouping, and contrast before gradients, shadows, glow, badges, or extra containers.
5. **Design every state.** A polished default state with broken loading, error, empty, focus, or mobile states is not polished.
6. **Verify, then refine.** Never assume the first render is finished.

## Workflow

### 1. Read the product context
Before editing UI, inspect existing styles, components, tokens, fonts, icons, screenshots, and conventions. Infer the intended visual language from the product rather than imposing a fashionable default.

If key context is genuinely missing, establish a restrained direction:
- one dominant/brand color, one accent when needed, and a neutral scale
- a fixed spacing scale
- a limited type scale with deliberate font choices
- consistent radius, border, elevation, icon, and control conventions
- semantic design tokens rather than scattered raw values

See `references/design-tokens.md`.

### 2. Design the information hierarchy
Before polishing surfaces, decide:
- page purpose and primary action
- content priority and reading order
- which elements deserve emphasis
- which content belongs together
- what can be removed

Do not solve weak hierarchy by adding more cards, colors, pills, dividers, or headings.

### 3. Implement responsively
Build from relationships and content constraints, not screenshots at one viewport. Avoid fixed dimensions that fail with longer content. Define a deliberate narrow-screen strategy for navigation, tables, dashboards, toolbars, and dense forms.

See `references/responsive-layout.md`.

### 4. Complete interaction states
For relevant controls and flows implement default, hover, focus-visible, active/pressed, selected, disabled, loading, success, error, and empty states. Give actions immediate feedback and preserve user input after recoverable errors.

Motion should explain state or relationship, not decorate empty space.

See `references/interaction-states.md`.

### 5. Build accessibility into the component
Use semantic HTML, keyboard-operable controls, visible focus, programmatic labels, non-color cues, readable contrast, sensible heading/DOM order, and reduced-motion support. Accessibility is part of component correctness.

See `references/accessibility.md`.

### 6. Critique the visual language
Review against `references/anti-patterns.md`. In particular, challenge:
- generic purple/indigo gradients
- decorative glow and glass effects
- emojis used as interface icons
- cards around every section
- excessive pills/badges
- meaningless colored status dots
- too many competing accent colors
- arbitrary values that bypass the system
- excessive centered marketing copy
- decorative complexity without product meaning

Do not mechanically ban a technique. Keep it when it clearly serves the brand, hierarchy, or interaction.

### 7. Run a refinement pass
Use `references/ui-audit.md`. Fix issues you find unless the user requested review-only. Test realistic content, narrow and wide layouts, keyboard navigation, and important non-happy paths.

### 8. Add guardrails
For ongoing projects, encode repeated decisions as tokens/components and use linting or project conventions to prevent arbitrary values and visual drift.

## Decision rules

- Prefer existing project components over introducing another UI system.
- Prefer semantic tokens over raw hex values in components.
- Prefer whitespace/grouping over unnecessary containers.
- Prefer one strong focal point over many equal accents.
- Prefer real copy/content structure over placeholder-shaped design.
- Prefer familiar interaction patterns unless novelty creates measurable value.
- Prefer responsive CSS and intrinsic layout over JS-driven viewport branching.
- Prefer a consistent icon family; do not mix icon styles casually.
- Use gradients, glass, glow, oversized type, and motion only when they fit the product's identity.
- Do not change product behavior merely to make a screen prettier.

## Pre-ship gate

Do not call the UI finished until the relevant checks pass:

- [ ] The page has an obvious purpose and primary action.
- [ ] The result looks specific to this product, not a generic AI/SaaS template.
- [ ] Color, spacing, typography, radius, icons, and surfaces are systematic.
- [ ] Mobile/narrow layouts are intentional and free of accidental overflow.
- [ ] Long content and unusual data do not destroy the layout.
- [ ] Interactive elements have complete relevant states.
- [ ] Keyboard focus is visible and the primary flow is operable.
- [ ] Labels, errors, and statuses do not rely on color alone.
- [ ] Motion is purposeful and reduced-motion is respected.
- [ ] Decorative elements earn their presence.
- [ ] Empty/loading/error/success states are considered where applicable.
- [ ] A final audit/refinement pass has been performed.

## Reference files

Load only the references relevant to the current task:
- `references/design-tokens.md` — token architecture and implementation guardrails
- `references/anti-patterns.md` — common AI-generated visual tells and corrections
- `references/prompting.md` — iterative prompting and context template
- `references/responsive-layout.md` — responsive and content-resilient layout
- `references/interaction-states.md` — states, feedback, errors, loading, and motion
- `references/accessibility.md` — semantic, keyboard, focus, labeling, and inclusive UI
- `references/ui-audit.md` — systematic final refinement pass
