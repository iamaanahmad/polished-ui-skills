# Mobile Accessibility

Accessibility is part of mobile UI correctness.

## Semantics

- Give every control a meaningful accessible name and role.
- Expose state such as selected, expanded, disabled, checked, progress, and errors programmatically.
- Group related controls and labels.
- Do not make icons or color the only way to understand an action or status.

## Text and scaling

- Support platform text scaling/Dynamic Type instead of locking text to a visual size.
- Test large accessibility text; avoid clipping, overlap, and truncated critical actions.
- Prefer flexible layouts over fixed-height rows.
- Keep line length and hierarchy readable on small screens.

## Focus and assistive technology

- Ensure logical reading/focus order.
- Do not trap focus unexpectedly in transient surfaces.
- Announce important async changes when appropriate without creating noisy updates.
- Make custom controls behave like their native equivalents.
- Ensure sheets, dialogs, navigation changes, and validation errors are discoverable.

## Motion and sensory preferences

- Respect reduced-motion and platform accessibility preferences.
- Do not communicate essential information only through animation, haptics, sound, or color.

## Validation

Test with the platform screen reader where possible, large text, relevant accessibility settings, keyboard/external input when supported, and portrait/landscape when supported.
