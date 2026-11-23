---
name: Hanseatic Editorial
colors:
  surface: '#f9f9f6'
  surface-dim: '#dadad7'
  surface-bright: '#f9f9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f1'
  surface-container: '#eeeeeb'
  surface-container-high: '#e8e8e5'
  surface-container-highest: '#e2e3e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#44474c'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f1f1ee'
  outline: '#74777d'
  outline-variant: '#c4c6cc'
  surface-tint: '#525f71'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0f1c2c'
  on-primary-container: '#778598'
  inverse-primary: '#bac8dc'
  secondary: '#705c30'
  on-secondary: '#ffffff'
  secondary-container: '#fbdfa8'
  on-secondary-container: '#766236'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1d2a'
  on-tertiary-container: '#768696'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e4f9'
  primary-fixed-dim: '#bac8dc'
  on-primary-fixed: '#0f1c2c'
  on-primary-fixed-variant: '#3a4859'
  secondary-fixed: '#fbdfa8'
  secondary-fixed-dim: '#dec38f'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#56441b'
  tertiary-fixed: '#d4e4f6'
  tertiary-fixed-dim: '#b8c8da'
  on-tertiary-fixed: '#0d1d2a'
  on-tertiary-fixed-variant: '#394857'
  background: '#f9f9f6'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e0'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  display-md:
    fontFamily: Newsreader
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  display-md-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies the stately poise, maritime discretion, and architectural clarity of Hanseatic merchant heritage translated into a premier advisory context. It addresses institutional leaders, family offices, and enterprise executives who value enduring substance over transient digital trends.

The visual direction merges **Minimalist Light Luxury** with **Crisp Editorial Discipline**:
- **Tone:** Authoritative, measured, impeccably tailored, and calm.
- **Atmosphere:** Expansive ivory and platinum surfaces that function like heavy archival cotton paper, punctuated by laser-sharp navy slate typography and restrained champagne gold accents.
- **Imagery:** Architectural, high-contrast, black-and-white or naturalistic compositions with deep tonal depth, avoiding synthetic gradients or decorative fluff.

## Colors

The palette relies on deliberate contrast between light architectural planes and deep, ink-dense typography.

- **Primary (`#0D1B2A`):** Deep Navy Slate. Serves as the primary typographic ink, high-emphasis structural lines, and anchor actions. It replaces conventional pure black with a dignified nautical depth.
- **Secondary (`#C6AD7A`):** Refined Champagne Gold. Used sparingly for quiet status indicators, active states, key data markers, and sophisticated micro-interactions. Never applied across large fill areas.
- **Tertiary (`#708090`):** Muted Slate Gray. Reserved for secondary typography, quiet metadata, and subtle dividing rules.
- **Neutral (`#F9F9F6`):** Warm Ivory. The default canvas tone providing an organic, editorial warmth. Paired with pure white (`#FFFFFF`) for elevated cards and platinum gray (`#F0F3F5`) for subtle section grouping.

## Typography

Typography establishes an intentional dialogue between the intellectual authority of Newsreader (headlines and long-form pull quotes) and the contemporary structural readability of Plus Jakarta Sans (body copy, analytical tables, and interactive labels).

- **Headlines:** Set in Newsreader with slight negative tracking on large scales. Display weights lean regular or medium, celebrating high editorial style rather than brute force weight.
- **Body & Data:** Plus Jakarta Sans ensures crisp tabular readability, legible analytical interfaces, and reliable responsive scaling.
- **Labels & Overlines:** Rendered uppercase with generous tracking (`0.06em` to `0.08em`) to act as refined architectural captions.

## Layout & Spacing

The layout follows a disciplined 12-column fluid grid on desktop (max content container: 1360px), shifting to an 8-column layout on tablet, and a 4-column layout on mobile devices.

- **Vertical Rhythm:** Rooted in 4px and 8px base multiples. Sections breathe through expansive padding (`space-xl` and above), framing content with deliberate silence.
- **Margins & Gutters:** Desktop uses wide `3rem` margins to create an editorial border around page compositions; mobile contracts gracefully to `1.25rem` to optimize screen efficiency without feeling congested.
- **Column Alignments:** Key headline elements frequently align to distinct 8- or 10-column widths to preserve editorial whitespace and asymmetric elegance.

## Elevation & Depth

Visual hierarchy is communicated primarily through **tonal planes** and **micro-refined borders**, deliberately omitting heavy drop shadows.

- **Surface Tiers:**
  - Base Canvas: Warm Ivory (`#F9F9F6`)
  - Elevated Container: Pure White (`#FFFFFF`)
  - Secondary Recessed Container: Soft Platinum Gray (`#F0F3F5`)
- **Outlines & Dividers:** 1px hairline rules using `#E4E7EB` or a 10% alpha of Deep Navy Slate (`rgba(13, 27, 42, 0.08)`).
- **Shadows:** Applied strictly for floating overlays (menus, modals) using diffuse, un-tinted atmospheric falloffs: `0 16px 36px -12px rgba(13, 27, 42, 0.06)`. Cards resting on the page rely on surface contrast and hairline strokes rather than shadows.

## Shapes

The design system employs **Soft (Level 1)** geometry, establishing a tailored, architectural contour rather than playful softness.

- Standard buttons, input fields, and small tags use `0.25rem` (4px).
- Content cards and contextual containers utilize `rounded-lg` (`0.5rem` / 8px).
- Large viewports, hero callouts, or modals cap at `rounded-xl` (`0.75rem` / 12px).
- Rounding remains disciplined throughout, reinforcing precision engineering and prestige.

## Components

### Buttons
- **Primary:** Solid `#0D1B2A` fill with pure `#FFFFFF` typography. Crisp hover state shifting subtly to `#1C2F48`. Corner radius: `0.25rem`. Padding: `0.75rem 1.5rem`.
- **Secondary:** Transparent background with a 1px border in `#0D1B2A` and matching navy text. On hover: brief transition to a `#F0F3F5` fill.
- **Accent:** Pure White surface with a hairline Champagne Gold border (`#C6AD7A`) and Navy text, designated for private tier advisory highlights.

### Chips & Tags
- Compact, quiet indicators using `label-sm` uppercase text.
- Standard state: `#F0F3F5` background, `#0D1B2A` text, 1px perimeter in `#E4E7EB`.
- Selected/Featured: Pale champagne wash (`#F9F5EC`) with `#8C733E` text and `#C6AD7A` border.

### Input Fields
- White (`#FFFFFF`) background bounded by a sharp 1px border in `#D9DEDF`.
- Typography is 14px Plus Jakarta Sans in `#0D1B2A`. Placeholder text is `#708090`.
- Focus state: Border transitions to `#0D1B2A` with a delicate 1px outer ring in `#C6AD7A`.

### Checkboxes & Radio Buttons
- Crisp 16px boxes with `0.125rem` corners for checkboxes; circular for radio.
- Unchecked: 1px border in `#C0C7CD` over white.
- Checked: Solid `#0D1B2A` fill with an ivory or white icon indicator.

### Cards
- Resting: Pure White (`#FFFFFF`) surface nested on the Warm Ivory (`#F9F9F6`) canvas, enclosed by a 1px hairline border (`#EAECEE`).
- Interactive: Subtle shift of the hairline border to `#C6AD7A` on hover with a micro-translation (-2px on the Y axis).

### Executive Briefing Panels & Tables
- Minimalist data presentation prioritizing row lines over vertical grid borders.
- Headers: Uppercase `label-sm` tracking with a bottom border in `#0D1B2A`.
- Metric callouts: Large serif numbers (Newsreader) juxtaposed with quiet sans-serif annotations.