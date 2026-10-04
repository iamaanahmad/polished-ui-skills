<!-- POLISHED-UI-SKILLS:BEGIN -->
# Polished UI Skills Rules

Build UI that is product-specific, usable, accessible, responsive/adaptive, platform-appropriate, and visually intentional. Avoid generic AI aesthetics, but do not ban techniques that genuinely serve the product.

## Workflow

1. **Understand first.** Inspect existing tokens, components, fonts, icons, screenshots, navigation, platform, framework, and conventions.
2. **Select the platform layer.** Web uses responsive/accessibility guidance. Mobile uses mobile layout, touch, accessibility, and the relevant iOS/Android conventions.
3. **Constrain first.** Establish hierarchy, color roles, spacing, type, radius, surfaces, icons, and controls before generating large amounts of UI.
4. **Design the task flow.** Define purpose, primary action, content priority, navigation, grouping, and what can be removed.
5. **Implement for the environment.** Web: responsive CSS, keyboard/pointer behavior. Mobile: safe areas/insets, adaptive layouts, touch, keyboard/IME, system gestures, platform navigation.
6. **Complete states.** Handle relevant default, hover on web, focus-visible, pressed, selected, disabled, loading, success, error, empty, and offline states.
7. **Audit and refine.** Test realistic content, narrow/wide or adaptive layouts, accessibility, navigation/back behavior, and non-happy paths.

## Visual rules

- Use semantic tokens and consistent spacing/type/radius/icon/surface systems.
- Prefer whitespace, typography, imagery, and grouping before extra cards, borders, shadows, gradients, glow, pills, or badges.
- Avoid generic purple/indigo gradients, decorative glow, emoji UI chrome, card-everything layouts, rainbow accents, and meaningless status dots.
- Treat warning signs as warning signs, not absolute bans: keep a technique when it serves product identity, hierarchy, or interaction.
- Prefer existing project components over introducing a parallel UI system.
- Do not use web hover patterns as a substitute for mobile interaction.
- Do not make iOS and Android identical when platform conventions materially improve usability.

## Accessibility

- Use semantic/native controls with meaningful names, roles, labels, and states.
- Web: keyboard access, visible focus, logical DOM order, readable contrast.
- Mobile: screen-reader semantics, large text/text scaling, logical focus order, comfortable touch targets.
- Do not communicate essential meaning through color, motion, haptics, or sound alone.
- Respect reduced motion and relevant platform accessibility preferences.

## Responsive/adaptive resilience

- Web: test narrow mobile, tablet/laptop, and wide desktop.
- Mobile: test relevant phone/tablet/foldable sizes, orientation, safe areas, and keyboard states.
- Test long labels, localization, zero/one/many results, missing media, slow/offline loading, and large text.
- Avoid fixed heights for content that can grow.

## Interaction

- Give important actions immediate feedback.
- Preserve recoverable input after errors.
- Loading states should avoid unnecessary layout shifts.
- Empty/error/offline states should explain the situation and offer a useful next step.
- Motion should communicate state, hierarchy, progress, or relationship—not merely decorate.

## Pre-ship gate

- [ ] Clear purpose and primary action
- [ ] Product-specific visual identity
- [ ] Systematic visual tokens
- [ ] Correct platform/framework conventions
- [ ] Responsive/adaptive with no accidental overflow or clipping
- [ ] Realistic content and localization considered
- [ ] Complete relevant interaction states
- [ ] Correct keyboard/pointer or touch/gesture behavior
- [ ] Predictable navigation and back behavior
- [ ] Accessibility semantics, labels, focus, text scaling, and non-color cues
- [ ] Mobile safe areas/insets/keyboard behavior where applicable
- [ ] Reduced motion respected
- [ ] Loading/error/empty/offline/success states considered
- [ ] Decorative elements earn their presence
- [ ] Final platform-specific audit completed
<!-- POLISHED-UI-SKILLS:END -->
