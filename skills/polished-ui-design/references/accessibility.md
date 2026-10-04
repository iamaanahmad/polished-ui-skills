# Accessibility & Inclusive UI

Accessibility is a design-quality constraint, not a cleanup pass.

## Baseline
- Use semantic HTML before ARIA. Prefer native button, link, input, dialog, table, nav, main, header, and form semantics.
- Every interactive element must be keyboard reachable with a visible focus state.
- Never remove focus outlines without replacing them with an equally visible focus treatment.
- Inputs need programmatic labels. Placeholder text is not a label.
- Icon-only controls need an accessible name.
- Errors must be explained in text and associated with the relevant field; never rely on color alone.
- Preserve a logical heading hierarchy and DOM reading order.
- Keep text and essential UI contrast strong enough for normal use; do not trade legibility for a muted aesthetic.
- Respect reduced-motion preferences. Essential information must not depend on animation.
- Touch targets should be comfortably tappable and separated, especially on mobile.

## Interaction states
For every interactive component consider: default, hover, focus-visible, active/pressed, disabled, loading, error, success, and empty states where relevant.

## Agent check
Before shipping, navigate the primary flow using only a keyboard. Check focus order, labels, dialogs, menus, validation, and whether status changes are understandable without color or motion.
