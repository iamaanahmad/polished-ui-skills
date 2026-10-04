---
name: polished-ui-design
description: >-
  Guides an agent to design, implement, audit, and refine polished production
  web and mobile UI. Covers product-specific visual systems, responsive web
  layouts, native iOS/Android conventions, touch interaction, accessibility,
  interaction states, and final UI quality audits.
---

# Polished UI Design

Build interfaces that feel intentional, product-specific, usable, accessible, and complete — not merely fashionable. Treat visual design, interaction design, responsive/adaptive behavior, accessibility, platform conventions, and implementation consistency as one quality system.

## Operating principles

1. **Understand before styling.** Identify product, users, primary task, brand character, content density, platform, framework, and technical constraints.
2. **Preserve existing systems.** Inspect and extend existing tokens/components before inventing new ones.
3. **Constrain before generating.** Define hierarchy, type, color roles, spacing, surfaces, radius, icon, and control conventions before producing large amounts of UI.
4. **Hierarchy beats decoration.** Use typography, spacing, grouping, imagery, and contrast before gradients, shadows, glow, badges, or extra containers.
5. **Respect the platform.** Web, iOS, and Android have different interaction conventions. Cross-platform consistency does not mean identical UI.
6. **Design every state.** A polished default with broken loading, error, empty, focus, keyboard, offline, or accessibility states is not polished.
7. **Verify, then refine.** Never assume the first render is finished.

## Workflow

### 1. Read the product context

Inspect existing styles, components, tokens, fonts, icons, screenshots, navigation, and conventions. Infer the intended visual language from the product rather than imposing a fashionable default.

If key context is missing, establish a restrained direction:
- one dominant/brand color, one accent when needed, and a neutral scale
- a fixed spacing scale
- a limited type scale with deliberate font choices
- consistent radius, border, elevation, icon, and control conventions
- semantic design tokens rather than scattered raw values

See references/design-tokens.md.

### 2. Select the platform layer

Load only relevant guidance:

- **Web:** responsive-layout.md, accessibility.md, interaction-states.md
- **React Native / Expo:** mobile layout, touch, mobile accessibility, interaction states, plus iOS/Android guidance as applicable
- **Flutter:** same mobile core, then platform-specific behavior for the target OS
- **SwiftUI / UIKit:** mobile core + ios-patterns.md
- **Jetpack Compose / Android Views:** mobile core + android-patterns.md

See references/platform-selection.md.

Do not copy desktop UI into a phone. Do not make iOS and Android identical when platform conventions improve usability.

### 3. Design the information hierarchy

Before polishing surfaces, decide:
- page/screen purpose and primary action
- content priority and reading order
- navigation structure
- which elements deserve emphasis
- what belongs together
- what can be removed

For mobile, prioritize task-critical content, primary action, navigation/context, supporting information, then decoration.

### 4. Implement for the environment

**Web**
- Build around content and relationships, not screenshots at one viewport.
- Use responsive CSS and intrinsic layout.
- Define deliberate narrow-screen behavior for navigation, tables, dashboards, toolbars, and forms.
- Ensure keyboard and pointer interactions both work.

**Mobile**
- Respect safe areas, system bars, insets, edge-to-edge, system gestures, keyboard/IME, and platform navigation.
- Use fluid/adaptive layouts rather than fixed heights.
- Design for touch and large text; never rely on hover.
- Consider phone, tablet, foldable, orientation, and offline/network states where relevant.

See references/mobile-layout.md and references/touch-interactions.md.

### 5. Complete interaction states

For relevant controls and flows implement default, hover (web), focus-visible, active/pressed, selected, disabled, loading, success, error, empty, offline, and skeleton states.

Give actions immediate feedback. Preserve recoverable input after errors. Make destructive actions explicit.

Motion should explain state, hierarchy, progress, or relationship—not decorate empty space.

See references/interaction-states.md.

### 6. Build accessibility into the component

Use semantic/native controls, meaningful labels, visible focus, logical reading order, non-color cues, readable contrast, scalable text, and reduced-motion support.

For mobile, support platform text scaling/Dynamic Type, screen-reader semantics, large text, accessible states, and appropriate touch targets.

See references/accessibility.md and references/mobile-accessibility.md.

### 7. Critique the visual language

Review references/anti-patterns.md. Challenge generic purple/indigo gradients, decorative glow/glass, emoji UI chrome, card-everything layouts, excessive pills/badges, meaningless status dots, competing accents, arbitrary values, and decorative complexity without product meaning.

These are warning signs, not absolute bans. Keep a technique when it clearly serves product identity, hierarchy, or interaction.

### 8. Run the correct audit

- Web: references/ui-audit.md
- Mobile: references/mobile-audit.md
- iOS: also check ios-patterns.md
- Android: also check android-patterns.md

Fix issues you find unless review-only was requested. Test realistic content and important non-happy paths.

### 9. Add guardrails

For ongoing projects, encode repeated decisions as tokens/components and project conventions. Prefer existing components over parallel UI systems. Keep platform-specific variants explicit rather than hiding platform differences inside arbitrary conditionals.

## Decision rules

- Prefer existing project components over another UI system.
- Prefer semantic tokens over raw values in components.
- Prefer whitespace/grouping over unnecessary containers.
- Prefer one strong focal point over many equal accents.
- Prefer real content structure over placeholder-shaped design.
- Prefer familiar interaction patterns unless novelty creates measurable value.
- Prefer responsive/adaptive layout over JS-driven viewport branching.
- Prefer a consistent icon family; do not mix icon styles casually.
- Use gradients, glass, glow, oversized type, and motion only when they fit the product.
- Do not change product behavior merely to make a screen prettier.
- Do not use web hover patterns as a substitute for mobile interaction.
- Do not make iOS and Android identical when platform conventions materially improve usability.

## Pre-ship gate

- [ ] Clear purpose and primary action
- [ ] Product-specific visual identity
- [ ] Systematic color/type/spacing/radius/icon/surface choices
- [ ] Correct platform/framework guidance applied
- [ ] Responsive/adaptive with no accidental overflow or clipping
- [ ] Realistic long content and localization considered
- [ ] Complete relevant interaction states
- [ ] Keyboard/pointer flow works on web; touch/gesture flow works on mobile
- [ ] Navigation and back behavior are predictable
- [ ] Accessibility semantics, focus, labels, text scaling, and non-color cues considered
- [ ] Safe areas/insets/keyboard behavior considered on mobile
- [ ] Reduced motion respected
- [ ] Loading/error/empty/offline/success states considered
- [ ] Decorative elements earn their presence
- [ ] Final platform-specific audit/refinement completed

## Reference files

Load only what the task needs:
- references/platform-selection.md — detect platform and layer guidance
- references/design-tokens.md — token architecture and guardrails
- references/anti-patterns.md — common AI-generated visual tells
- references/prompting.md — iterative prompting/context template
- references/responsive-layout.md — responsive web/content resilience
- references/interaction-states.md — states, feedback, errors, loading, motion
- references/accessibility.md — web semantics, keyboard, focus, labeling
- references/mobile-layout.md — mobile/adaptive layout and keyboard behavior
- references/mobile-navigation.md — mobile navigation and back behavior
- references/touch-interactions.md — touch targets, gestures, feedback
- references/mobile-accessibility.md — mobile semantics and text scaling
- references/ios-patterns.md — iOS conventions
- references/android-patterns.md — Android conventions
- references/ui-audit.md — web refinement audit
- references/mobile-audit.md — mobile refinement audit
