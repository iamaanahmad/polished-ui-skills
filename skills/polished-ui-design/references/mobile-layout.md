# Mobile Layout

Mobile is a distinct interaction environment, not a narrow desktop breakpoint.

## Layout principles

- Design around content priority and thumb reach before choosing containers.
- Respect safe areas, system bars, notches, rounded corners, and device cutouts.
- Prefer fluid/intrinsic sizing; avoid fixed heights that can clip text or keyboard-driven content.
- Keep primary actions visible without competing with system UI.
- Use edge-to-edge intentionally, with correct insets and readable contrast.
- Avoid horizontal scrolling unless the content genuinely benefits from it.
- Keep important content and actions discoverable without hover.
- Do not hide critical actions only behind long-press, swipe, or gesture-only interactions.

## Small-screen hierarchy

When space is tight, remove decoration before reducing legibility or touchability.

Prioritize:
1. task-critical content
2. primary action
3. navigation/context
4. supporting information
5. secondary actions
6. decoration

For dense screens, consider progressive disclosure, drill-down screens, bottom sheets, segmented views, or intentional horizontal scrolling rather than squeezing everything into tiny controls.

## Keyboard and form behavior

- Expect the software keyboard to resize or cover content.
- Keep the focused field and relevant validation visible.
- Avoid fixed bottom actions that become inaccessible above the keyboard.
- Preserve entered data across validation and recoverable network errors.
- Use the correct input type, autofill behavior, capitalization, and return-key/action semantics for the platform.

## Orientation and content resilience

Consider supported orientations explicitly. Test long labels, translated text, large text settings, missing images, empty and error states, slow/offline loading, and one-to-many content changes.

## Mobile-specific quality bar

A mobile layout is not finished if it technically fits but feels cramped, requires precision taps, hides the task flow, or conflicts with system UI.
