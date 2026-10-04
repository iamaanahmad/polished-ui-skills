# Responsive Layout

Responsive design is not desktop scaled down. Preserve task priority and hierarchy at every width.

## Principles
- Start with content priority and layout relationships, not device names.
- Prefer fluid layouts with min/max constraints, CSS Grid/Flexbox, and intrinsic sizing.
- Add breakpoints when content actually breaks, not because a framework offers a breakpoint.
- Avoid fixed heights for text-heavy regions.
- Prevent horizontal overflow at narrow widths.
- Keep readable line lengths for long-form text.
- On small screens, reduce competing chrome before reducing legibility.
- Tables and dense dashboards need an explicit narrow-screen strategy: horizontal containment, prioritized columns, stacked details, or alternate views.
- Navigation must remain discoverable and operable; do not simply hide important actions.
- Test long labels, validation messages, localization expansion, empty states, and unusually large/small datasets.

## Minimum review widths
Inspect at a narrow mobile width, a wider mobile/tablet width, a laptop width, and a wide desktop. Also drag continuously between them to catch breakpoint cliffs.
