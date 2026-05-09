---
name: Melodict Neobrutalist System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#584140'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#8c706f'
  outline-variant: '#e0bfbd'
  surface-tint: '#ae2f34'
  primary: '#ae2f34'
  on-primary: '#ffffff'
  primary-container: '#ff6b6b'
  on-primary-container: '#6d0010'
  inverse-primary: '#ffb3b0'
  secondary: '#006a65'
  on-secondary: '#ffffff'
  secondary-container: '#79f3ea'
  on-secondary-container: '#006f69'
  tertiary: '#6d5e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c1ab38'
  on-tertiary-container: '#4a3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#8c1520'
  secondary-fixed: '#7cf6ec'
  secondary-fixed-dim: '#5dd9d0'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504c'
  tertiary-fixed: '#fbe36a'
  tertiary-fixed-dim: '#dec651'
  on-tertiary-fixed: '#211b00'
  on-tertiary-fixed-variant: '#524600'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0em
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.5'
    letterSpacing: 0em
  label:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  stat-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.02em
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  sidebar_width: 280px
---

## Brand & Style

This design system utilizes **Neobrutalism** to create a high-impact, music-driven mental health dashboard. The aesthetic rejects soft gradients and subtle shadows in favor of raw, functional, and high-contrast elements. The brand personality is unapologetic, energetic, and grounding. It aims to evoke a sense of structural stability and "honest" design, providing users with a clear, distraction-free environment to manage their mental well-being through music.

The target audience is tech-savvy individuals who find comfort in bold, geometric clarity rather than traditional "soft" healthcare aesthetics. The UI feels tactile and physical, like a printed zine or a vintage synthesiser interface.

## Colors

The color strategy relies on a warm, antique base to prevent eye strain, contrasted against high-saturation pigments for data and interaction.

- **Base Background (#F4F0E6):** Used for the main canvas. It provides a "paper" feel that softens the intensity of the pure black accents.
- **Primary/Action (#FF6B6B):** Reserved for critical interactions, play buttons, and active recording states.
- **Secondary/Wellness (#4ECDC4):** Used for positive health indicators, calm mood tracking, and successful completion states.
- **Accent/Data (#FFE66D):** Used for highlighting specific statistics, warnings, or secondary information panels.
- **Text/Accents (#000000):** Applied to all borders, shadows, and primary text.

## Typography

This design system pairs the technical, geometric nature of **Space Grotesk** for structural elements with the institutional clarity of **Public Sans** for data.

- **Headings:** Must be bold and heavy. Use H1 and H2 for dashboard headers and large category titles.
- **Body:** Set in Semi-bold weight by default to match the thickness of the 4px borders.
- **Labels:** Always uppercase with slight letter-spacing to ensure they are readable when placed inside high-contrast blocks.
- **Stats:** Use Space Grotesk for numerical data to emphasize the "scientific" aspect of music-driven therapy.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy. Elements are strictly aligned to a 4px baseline, ensuring all borders and shadows lock together seamlessly.

- **Sidebar:** A vertical sidebar fixed to the left, separated by a 4px solid black right border.
- **Main Canvas:** Content is organized into cards that span a 12-column grid.
- **Margins:** 40px outer margins on the main dashboard to give the heavy elements room to breathe.
- **Gutters:** 24px gutters between all cards to accommodate the 8px offset shadows without overlap.

## Elevation & Depth

Depth is conveyed through physical displacement rather than light source simulation. This design system uses **Hard Shadows** exclusively.

- **Default State:** Elements (cards, buttons) feature a `8px 8px 0px 0px #000000` shadow.
- **The "Lift" Effect:** On hover, interactive elements translate `-4px -4px` on the X and Y axes, while the shadow increases to `12px 12px 0px 0px #000000`. 
- **The "Pressed" State:** On click, elements translate `4px 4px` and the shadow reduces to `2px 2px 0px 0px #000000`, simulating physical compression.
- **Layers:** All containers are flat 2D planes. Visual hierarchy is managed by color and size rather than z-index blurring.

## Shapes

The shape language is strictly **Sharp**. 

- **Radius:** All corners are 0px. This applies to buttons, card containers, input fields, and selection indicators.
- **Stroke:** A universal 4px solid black border is applied to every container.
- **Icons:** Must be thick-stroked and geometric, avoiding rounded terminals or soft corners where possible.

## Components

### Buttons
Rectangular blocks with 4px black borders. Primary buttons use #FF6B6B, secondary buttons use #4ECDC4. Text is always centered, bold, and black.

### Cards
All cards use the #F4F0E6 background by default but can be themed with secondary/tertiary colors for specific categories (e.g., a "Yellow" card for morning stats). Every card must have an 8px black shadow.

### Input Fields
Strict black 4px borders with a #F4F0E6 background. On focus, the background changes to #FFE66D (Bright Yellow) to indicate active state.

### Navigation Sidebar
A vertical container with a 4px right border. Navigation items are simple text links that become underlined and change to #FF6B6B on hover.

### Mood Trackers (Unique Component)
A horizontal bar chart using sharp 0px blocks. Each block represents a frequency or mood, colored using the accent palette, with thick black dividers between segments.

### Music Player Bar
A fixed bottom-screen component with a 4px top border. Controls are oversized geometric shapes (square for stop, triangle for play).