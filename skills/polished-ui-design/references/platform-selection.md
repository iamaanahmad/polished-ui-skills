# Platform Selection

Use the smallest relevant guidance set. Do not force web conventions onto native mobile UI, or native patterns onto the web.

## Detect the target

- **Web:** HTML/CSS/JS/TS, React, Next.js, Vue, Svelte, Astro, etc.
- **Cross-platform mobile:** React Native/Expo or Flutter.
- **iOS:** SwiftUI or UIKit.
- **Android:** Jetpack Compose or Android Views/XML.
- **Hybrid/product with multiple clients:** apply core rules to all surfaces, then audit each platform independently.

## Layer the guidance

1. **Core:** hierarchy, typography, color, spacing, components, content, accessibility, interaction states, motion, and visual restraint.
2. **Platform:** web, iOS, or Android conventions.
3. **Framework:** implementation constraints of the chosen stack.
4. **Product:** existing design system, brand, components, behavior, and business requirements.

Never let a framework determine the visual language by default.

## Preserve platform conventions

When users already know a platform pattern, use it unless there is a strong product reason not to. Cross-platform consistency should preserve the product's identity without making iOS feel like Android or Android feel like iOS.

## Task rule

For a web task, load responsive layout and accessibility guidance. For a mobile task, load the mobile references plus the relevant iOS/Android guidance. For a shared component library, design the core behavior first and document platform-specific variants.

## Framework mapping

| Stack | Load |
|---|---|
| React Native / Expo | mobile + touch + mobile accessibility + platform guidance |
| Flutter | mobile + touch + mobile accessibility + platform guidance |
| SwiftUI / UIKit | mobile + touch + mobile accessibility + ios-patterns |
| Jetpack Compose / Views | mobile + touch + mobile accessibility + android-patterns |
| Web React / Next / Vue / Svelte | responsive + accessibility + interaction |
