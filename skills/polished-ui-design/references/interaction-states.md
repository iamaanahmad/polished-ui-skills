# Interaction, Feedback & Motion

Polish is often the quality of state transitions, not decoration.

## State completeness
Interactive UI should define relevant states explicitly: default, hover, focus-visible, pressed/active, selected, disabled, loading, success, error, empty, and skeleton/placeholder when latency warrants it.

Do not make disabled controls look enabled. Do not leave users guessing whether an action succeeded.

## Feedback
- Give immediate feedback after user actions.
- Keep destructive actions distinct and confirm when consequences are difficult to reverse.
- Preserve user input after recoverable errors.
- Prefer inline validation near the source of the problem.
- Loading UI should preserve layout when practical and avoid unnecessary spinner walls.
- Empty states should explain what happened and offer a useful next action when one exists.

## Motion
- Motion must communicate relationship, hierarchy, progress, or state change.
- Avoid ambient animation that competes with content.
- Keep common transitions short and subtle.
- Animate transform/opacity where practical instead of layout-heavy properties.
- Respect reduced-motion preferences and ensure the interface remains understandable without animation.
