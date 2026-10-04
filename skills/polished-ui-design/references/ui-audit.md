# UI Audit & Refinement Pass

Use this after implementation. Do not merely list problems: fix them unless the task is review-only.

## Audit sequence
1. **Hierarchy** — Can a new user identify the page purpose, primary action, and next step quickly? Reduce equal-weight elements and competing accents.
2. **Layout** — Check alignment, rhythm, density, max widths, overflow, and breakpoint behavior. Remove wrappers/cards that do not add structure.
3. **Typography** — Check hierarchy, line length, line height, weight overuse, truncation, and overly faint muted text.
4. **Components** — Check repeated patterns for consistent radius, border, elevation, icon size, control height, labels, and states.
5. **Interaction** — Exercise hover, focus, pressed, loading, empty, success, error, disabled, and destructive paths.
6. **Accessibility** — Keyboard-test the primary flow. Check semantics, labels, focus visibility, contrast, non-color cues, reduced motion, and touch targets.
7. **Content resilience** — Test long names, localization expansion, zero/one/many results, missing images, failed requests, and slow requests.
8. **Visual restraint** — Remove gradients, glow, badges, pills, icons, dividers, borders, shadows, and cards that do not improve comprehension.

## Final question
Does this interface express this product's identity and priorities, or could the logo be swapped and the design sold to any startup?
