# Mobile UI Audit

Run this after implementation. Fix issues instead of merely listing them unless review-only was requested.

## Product and hierarchy

- Is the primary task obvious within the first screen?
- Does the layout prioritize content over decoration?
- Does the mobile surface feel intentional rather than compressed desktop UI?

## Platform behavior

- Are navigation and back behavior predictable?
- Are safe areas/insets correct?
- Are system gestures respected?
- Are platform-native patterns used where users expect them?

## Touch and input

- Are targets comfortably tappable and sufficiently separated?
- Are there hover-only or precision-dependent interactions?
- Does the keyboard keep the active field and actions usable?
- Are destructive actions deliberate and recoverable?

## Accessibility

- Does large text remain usable?
- Are labels, roles, states, and errors exposed to assistive technology?
- Is reading/focus order logical?
- Are reduced-motion and relevant system preferences respected?

## Content resilience

Test long labels, localization, missing media, zero/one/many results, errors, slow/offline states, and large text. Test portrait/landscape where supported and phone/tablet/foldable sizes where relevant.

## Final visual quality

- Remove unnecessary cards, pills, borders, gradients, glow, and decorative controls.
- Verify type hierarchy, spacing rhythm, icon consistency, and visual density.
- Check light/dark modes where supported.
- Ask: “Does every visible element earn its space?”

## Ship gate

- [ ] Clear task and primary action
- [ ] Intentional mobile hierarchy
- [ ] Platform-appropriate navigation/back behavior
- [ ] Safe areas/insets handled
- [ ] Touch targets and gestures are usable
- [ ] Keyboard/IME behavior verified
- [ ] Large text/accessibility settings considered
- [ ] Screen-reader semantics and focus order considered
- [ ] Loading/error/empty/offline states considered
- [ ] No accidental desktop compression
- [ ] Final product-specific visual audit completed
