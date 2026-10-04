# Android Patterns

Use this guidance for Jetpack Compose/Views and Android-targeted React Native/Flutter screens. Prefer current Android/Material conventions over copying web UI into a phone.

## Core patterns

- Use Material components and Material 3 principles when they fit the product.
- Use top app bars for screen context and navigation.
- Use navigation bars/rails/drawers according to destination count, frequency, and window size.
- Use FABs only for a clear primary creation/action when the pattern improves discoverability.
- Respect Android system back behavior and predictive-back expectations.
- Support edge-to-edge with correct insets.
- Consider dynamic color when it fits the product and brand constraints.

## Responsive Android

Android spans phones, foldables, tablets, and resizable windows. Use adaptive layouts rather than assuming one phone width.

## Visual language

Material is a foundation, not a mandate to make every product look like the default Material demo. Preserve brand typography, color, imagery, and hierarchy while retaining familiar Android interaction behavior.

## Audit

Check system back, edge-to-edge/insets, adaptive window sizes, large text, TalkBack semantics, touch targets, keyboard/IME behavior, dark mode, and permission/error states.
