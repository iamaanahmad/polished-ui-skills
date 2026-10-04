# Polished UI Design Rules

Build UI that is product-specific, usable, accessible, responsive, and visually intentional. Avoid generic AI-generated aesthetics, but do not ban techniques that genuinely serve the brand.

## Workflow

1. **Understand first.** Inspect existing tokens, components, fonts, icons, screenshots, and conventions. Preserve the product's system instead of replacing it.
2. **Constrain first.** Establish hierarchy, color roles, spacing, type, radius, surfaces, and icon conventions before generating large amounts of UI.
3. **Design the task flow.** Define the page purpose, primary action, content priority, grouping, and what can be removed. Hierarchy beats decoration.
4. **Generate responsively.** Build around content and relationships; avoid fixed dimensions and accidental overflow. Give dense mobile layouts an explicit strategy.
5. **Complete states.** Handle relevant default, hover, focus-visible, active, selected, disabled, loading, success, error, and empty states.
6. **Audit and refine.** Test realistic content, narrow/wide layouts, keyboard flow, and non-happy paths. Fix issues before calling UI finished.

## Visual rules

- Use semantic tokens, not scattered raw colors.
- Use a consistent spacing/type/radius/icon system.
- Prefer whitespace, typography, and grouping before extra cards, borders, shadows, gradients, glow, pills, or badges.
- Avoid generic purple/indigo gradients, decorative dark-mode glow, emoji UI chrome, card-everything layouts, rainbow accents, and meaningless status dots.
- These are warning signs, not absolute bans: keep a technique when it clearly serves product identity, hierarchy, or interaction.
- Use one dominant color and scarce accents unless the product has a strong reason for more.
- Do not use arbitrary spacing values when the project has a token scale.
- Prefer the project's existing components over introducing a parallel UI system.

## Accessibility

- Prefer semantic HTML and native controls.
- All interactive elements need keyboard access and visible focus.
- Icon-only controls need accessible names; inputs need real labels.
- Do not communicate essential meaning with color alone.
- Preserve logical heading and DOM order.
- Support reduced motion and keep essential information understandable without animation.
- Keep text readable and touch targets usable.

## Responsive/content resilience

- Test narrow mobile, tablet/laptop, and wide desktop states.
- Test long labels, localization expansion, zero/one/many results, missing media, errors, and slow loading.
- Avoid fixed heights for content that can grow.
- Give tables, navigation, toolbars, and dense forms a deliberate narrow-screen behavior.

## Interaction

- Give important actions immediate feedback.
- Preserve recoverable user input after errors.
- Loading states should avoid unnecessary layout shifts.
- Empty states should explain the situation and offer a useful next step when possible.
- Motion should communicate state, hierarchy, progress, or relationship—not merely decorate.

## Pre-ship gate

- [ ] Clear purpose and primary action
- [ ] Product-specific visual identity
- [ ] Systematic color/type/spacing/radius/icon/surface choices
- [ ] Responsive with no accidental overflow
- [ ] Resilient to realistic content
- [ ] Complete relevant interaction states
- [ ] Keyboard-operable primary flow with visible focus
- [ ] Labels/errors/statuses do not rely on color alone
- [ ] Reduced motion respected
- [ ] Empty/loading/error/success states considered
- [ ] Decorative elements earn their presence
- [ ] Final audit/refinement pass completed
