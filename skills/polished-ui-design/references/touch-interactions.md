# Touch Interactions

Touch interfaces need forgiving targets, clear feedback, and alternatives to hover.

## Targets

- Make interactive targets comfortably tappable; use platform accessibility guidance rather than squeezing controls to fit.
- Separate adjacent destructive or high-consequence actions.
- Keep icon buttons easy to distinguish and identify.
- Never depend on hover to reveal an essential action.

## Gestures

Use gestures when they improve a task, not to make a UI feel “mobile”.

- Provide visible/discoverable alternatives for important gesture-only actions.
- Avoid conflicts with system gestures such as back, home, edge swipes, scrolling, and text selection.
- Make swipe-to-delete/archive recoverable where practical.
- Do not make users guess which surfaces are draggable.
- Avoid multi-touch for ordinary tasks unless it is natural to the domain.

## Feedback

A successful touch should produce clear visual/state feedback. Use haptics only when they reinforce meaningful events and are appropriate to the platform.

Do not add vibration, animation, or sound to every tap.

## Hit areas and layout

The visual icon can be compact while its interactive hit area is larger. Do not solve small-screen density by shrinking hit targets.

## Testing

Test one-handed use where relevant, different text sizes, screen readers, landscape/tablet layouts, and interactions near system gesture areas.
