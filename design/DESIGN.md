---
name: El Primer Viaje Alrededor del Sol
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#45474d'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545e76'
  primary: '#051125'
  on-primary: '#ffffff'
  primary-container: '#1b263b'
  on-primary-container: '#828da7'
  inverse-primary: '#bbc6e2'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#001225'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f273f'
  on-tertiary-container: '#798fab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#bbc6e2'
  on-primary-fixed: '#101b30'
  on-primary-fixed-variant: '#3c475d'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#b2c8e7'
  on-tertiary-fixed: '#031d34'
  on-tertiary-fixed-variant: '#334861'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  headline-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 24px
  container-padding-desktop: 64px
  gutter: 24px
  stack-gap: 16px
---

## Brand & Style

The design system is centered around the enchanting theme of a child's first journey around the sun. It targets families celebrating a milestone, evoking emotions of wonder, warmth, and nostalgia. 

The style is **Playful & Dreamy**, leaning heavily into a modern **Watercolor Aesthetic**. It blends the high-end editorial feel of premium stationery with the approachability of a children’s storybook. Visuals should feel hand-crafted rather than clinical, utilizing soft textures and organic shapes to simulate high-quality paper and paint.

## Colors

The palette is inspired by the transition from twilight to a starry night, now featuring a more vibrant celestial accent. 

- **Primary (Deep Navy):** Used for core branding elements and primary buttons, representing the vastness of the night sky.
- **Background (Warm Cream):** Replaces pure white to provide a tactile, "cotton paper" feel that reduces eye strain and adds warmth.
- **Surface (Soft Cloud Blue):** Used for secondary containers and decorative backgrounds to create depth without harsh contrast.
- **Accent (Vivid Gold):** A bright, sun-like yellow reserved for "magical" moments—stars, sun rays, and primary calls to action.
- **Muted (Dusty Blue):** Ideal for borders, icons, and secondary text.
- **Text (Darkest Night):** Ensuring high legibility while maintaining the cool-toned harmony of the palette.

## Typography

The typography strategy balances the playfulness of rounded geometry with the clarity of humanist sans-serifs.

- **Headlines:** Use **Quicksand** for its friendly, circular terminals. It should feel rhythmic and inviting. Large headlines should use tighter letter spacing to maintain a "sticker-like" punch.
- **Body & Labels:** **Nunito Sans** provides excellent readability for event details (dates, locations, RSVP instructions). Its slightly rounded nature complements Quicksand without competing for attention. 
- **Hierarchy:** Ensure event times and dates are clearly distinguished using the `label-md` or `headline-sm` styles.

## Layout & Spacing

The design system utilizes a **Fluid Grid** approach with generous safe margins to mimic the layout of a physical invitation card.

- **Rhythm:** An 8px base unit drives all spacing. 
- **Card-Centric:** Content is grouped into stackable cards. On mobile, these cards take up full width (minus margins). On desktop, they can be arranged in a masonry or 2-column layout to resemble an opened stationery set.
- **Whitespace:** Emphasize "breathing room" around illustrations to ensure the watercolor textures don't feel cluttered.

## Elevation & Depth

Depth is achieved through a combination of **Tonal Layering** and **Ambient Shadows**:

- **Layering:** The Warm Cream `background` acts as the base paper. Cloud Blue `surface` elements sit directly on top with no shadow. 
- **Shadows:** Floating elements (like the main invitation card or primary buttons) use a very soft, diffused shadow tinted with the Primary Navy color (`rgba(27, 38, 59, 0.08)`). This prevents the "grey/dirty" look of standard shadows.
- **Texture:** Apply a subtle noise or watercolor "wash" SVG overlay to the main background to break up flat digital planes.

## Shapes

The shape language is dominated by **Extra Large Radii**. 

- **Primary Cards:** Use a fixed **24px radius** to create a soft, friendly silhouette.
- **Buttons & Small Elements:** Follow the `rounded-lg` (16px) or `rounded-xl` (24px) scale. 
- **Illustrations:** Use organic, hand-drawn lines. Avoid perfect geometric circles for stars or moons; slight imperfections contribute to the whimsical, hand-painted charm.

## Components

- **Primary Button:** Large, rounded (24px), using the Primary Navy background with Vivid Gold or Cream text. Include a subtle hover lift effect.
- **Invitation Card:** The hero component. Features a 24px corner radius, a subtle watercolor texture overlay, and a Vivid Gold accent border (1px).
- **RSVP Chips:** Rounded "pill" shapes for selecting guest counts or meal preferences. Use Cloud Blue for the unselected state and Primary Navy for selected.
- **Input Fields:** Soft Cloud Blue backgrounds with a 1px Dusty Blue border. Focus states should transition the border to Primary Navy.
- **Illustrative Dividers:** Instead of lines, use horizontal arrangements of hand-drawn stars or a soft watercolor "swipe" to separate content sections.
- **Feature Icons:** Hand-drawn SVG rockets, moons, and suns, primarily in Vivid Gold or Dusty Blue, used to highlight key event details like "Time" or "Location."