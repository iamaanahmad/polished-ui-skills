# iOS Patterns

Use this guidance for SwiftUI/UIKit and iOS-targeted React Native/Flutter screens. Prefer current Apple platform conventions over imitating them superficially.

## Core patterns

- Use navigation stacks for hierarchical flows.
- Use tab bars for a small number of primary destinations.
- Use sheets for focused temporary tasks or contextual flows.
- Respect safe areas and system bars; support edge-to-edge deliberately.
- Use Dynamic Type and scalable typography.
- Prefer SF Symbols or a coherent icon system that matches the platform.
- Preserve expected swipe-back/navigation behavior.
- Use native controls where they provide familiar semantics and accessibility.

## Visual language

Do not copy every Apple visual treatment into every product. The goal is platform familiarity plus product identity, not “looks like an Apple app”.

Avoid decorative glass, blur, or floating elements unless they have a clear hierarchy or platform/product purpose.

## Interaction

- Make destructive actions explicit and recoverable where possible.
- Keep sheets and dialogs focused.
- Respect system gestures and keyboard behavior.
- Use haptics sparingly and meaningfully.
- Consider real-time system surfaces only when the product has a genuine use case.

## Audit

Check safe-area insets, Dynamic Type, VoiceOver semantics, navigation/back behavior, keyboard avoidance, modal dismissal, landscape where supported, and system appearance (light/dark).
