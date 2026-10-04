# Mobile Navigation

Navigation should reflect task structure, platform conventions, and information architecture.

## Choose by information architecture

- **Tab/navigation bar:** a small set of top-level destinations users switch between frequently.
- **Navigation stack:** hierarchical drill-down and detail flows.
- **Modal/sheet:** focused tasks, temporary context, or secondary flows.
- **Drawer:** use sparingly for lower-frequency destinations; do not hide core navigation unnecessarily.
- **Search:** use when users know what they are looking for or content is too broad for direct navigation.

## Rules

- Give the current destination a clear selected state.
- Keep labels understandable without relying on icons alone.
- Preserve navigation context when moving into detail screens.
- Make back behavior predictable and reversible.
- Avoid deep nesting that makes users lose orientation.
- Do not duplicate multiple navigation systems without a clear hierarchy.
- Do not use a bottom navigation bar as a dumping ground for unrelated actions.
- Keep primary navigation usable with large text/accessibility settings.

## Platform differences

iOS commonly uses tab bars, navigation stacks, sheets, and swipe-back behavior. Android commonly uses navigation bars, top app bars, navigation drawers/rails, and system back behavior. Follow platform conventions when users benefit from them.

## State

Define behavior for selected destination, deep links, restored navigation state, authentication boundaries, unavailable destinations, back navigation, and interrupted modal/sheet flows.
