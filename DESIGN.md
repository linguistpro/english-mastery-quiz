---
name: LingoQuiz
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#434655'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#0060ac'
  on-secondary: '#ffffff'
  secondary-container: '#64a8fe'
  on-secondary-container: '#003c70'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-max: 1200px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 24px
---

## Brand & Style

The design system is centered on an **Educational Modernism** aesthetic. It prioritizes clarity, focus, and positive reinforcement to facilitate a frictionless learning experience. The target audience includes students and professionals seeking a high-fidelity, reliable tool for language acquisition.

The style is characterized by a **Corporate Modern** approach with a "Soft-Tech" edge. It utilizes generous white space to reduce cognitive load during quizzes, subtle tonal layering for depth, and high-quality typography to ensure maximum legibility. The UI should evoke a sense of progress and encouragement through crisp execution and a balanced professional palette.

## Colors

The palette is anchored by a confident **Primary Blue**, symbolizing trust and intelligence. A lighter **Secondary Blue** is used for interactive accents and illustrative elements. 

The system transitions seamlessly between light and dark modes:
- **Light Mode:** High-contrast dark text on a pure white background, using a cool light gray for secondary surfaces and card containers.
- **Dark Mode:** Deep navy backgrounds provide a focused environment for nighttime study, with text inverted to a soft off-white to prevent eye strain.
- **Semantic Colors:** Green is reserved for "Correct" feedback and progress completion, while Red is strictly for "Incorrect" states and alerts.

## Typography

This design system utilizes **Inter** exclusively to leverage its exceptional legibility and neutral, systematic tone. 

The typographic hierarchy is designed for "Scan-and-Solve" interactions:
- **Headlines:** Use tighter letter spacing and heavy weights to anchor the user's attention to the question.
- **Body:** Open line heights (1.5 - 1.6) ensure that longer reading passages remain comfortable.
- **Labels:** Small, uppercase labels are used for metadata, such as "Difficulty Level" or "Category," to distinguish them from actionable quiz content.
- **Mobile scaling:** Headlines scale down significantly on mobile to maximize vertical space for quiz options.

## Layout & Spacing

The design system follows a **Mobile-First Fluid Grid** model. 

- **Responsive Grid:** A 12-column system is used for desktop (breakpoint 1024px+), shifting to a single-column stack on mobile.
- **Rhythm:** All spacing tokens are multiples of 4px. Use `lg` (24px) for most interior card padding and `2xl` (48px) for vertical section spacing.
- **Max Width:** Content is centered within a 1200px container on large screens to prevent excessively long line lengths for reading passages.
- **Gutters:** Standard 16px gutters are maintained across all devices to ensure consistent breathing room between UI elements.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**:

- **Level 0 (Background):** Pure White (#FFFFFF) or Dark Navy (#0F172A).
- **Level 1 (Cards/Surface):** Uses a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)) to distinguish quiz containers from the background. In Dark Mode, elevation is communicated via a lighter surface color (#1E293B) rather than shadows.
- **Level 2 (Interactive/Floating):** Higher elevation (0px 10px 30px rgba(0,0,0,0.1)) for active states or modals.
- **Outline Strategy:** Interactive elements like unselected quiz options use a low-contrast border (1px solid #E2E8F0) to remain quiet until engaged.

## Shapes

The shape language is purposefully **Rounded** to feel approachable and friendly.

- **Primary Radius:** 0.5rem (8px) for buttons, input fields, and small UI components.
- **Card Radius (2xl):** 1.5rem (24px) for the primary quiz containers and dashboard modules. This extreme rounding emphasizes the modern, app-like feel of the interface.
- **Pill Shapes:** Used exclusively for tags, progress bars, and "Correct/Incorrect" chips to create a distinct visual language for status indicators.

## Components

### Buttons
- **Primary:** Solid #2563EB with white text. High-contrast, 8px radius.
- **Secondary:** Transparent with Primary Blue border and text.
- **Quiz Option:** A specialized card component. Default: White background, Light Gray border. Active: Light Blue tint background, Primary Blue border. Correct: Green border/background tint.

### Progress Bar
- A full-width pill-shaped track. The fill uses a gradient from `secondary_color` to `primary_color` to signify momentum.

### Input Fields
- Clean, 8px rounded corners with a 1px border. On focus, the border thickens to 2px Primary Blue with a subtle glow (outer shadow).

### Chips & Tags
- Pill-shaped with `label-sm` typography. Used for categorizing quizzes (e.g., "Grammar", "Vocabulary").

### Feedback Modals
- Large, center-aligned cards with `card_radius`. Use illustrative icons to celebrate a completed quiz or provide encouragement after a mistake.