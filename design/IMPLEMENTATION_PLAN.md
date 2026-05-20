# Implementation Plan: El Primer Viaje Alrededor del Sol

## Project Overview
Single-page digital invitation for Gonzalo Damián's 1st birthday and baptism. A celestial-themed, responsive web experience with watercolor aesthetics, live countdown, and interactive RSVP.

**Target Date:** August 8th, 16:00 hrs
**Tech Stack:** HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+)

---

## Phase 1: Project Setup & Structure

### 1.1 Directory Structure
```
damian.invite/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties (design tokens)
│   ├── typography.css      # Font imports and typography styles
│   ├── layout.css          # Grid, flexbox, responsive layouts
│   ├── components.css      # Reusable UI components
│   └── styles.css          # Main stylesheet importing all CSS files
├── js/
│   ├── countdown.js        # Countdown timer logic
│   ├── rsvp.js             # RSVP form handling
│   └── main.js             # Main JavaScript entry point
├── assets/
│   ├── images/             # Watercolor illustrations (Earth, Moon, Rocket)
│   └── icons/              # SVG icons (location, time, church)
└── README.md
```

### 1.2 Initial Setup Tasks
- [ ] Create directory structure
- [ ] Initialize `index.html` with semantic HTML5 structure
- [ ] Set up CSS imports in `styles.css`
- [ ] Configure Google Fonts (Quicksand, Nunito Sans, Material Symbols)
- [ ] Set up JavaScript imports in `index.html`

---

## Phase 2: Design System Implementation

### 2.1 CSS Variables (design/DESIGN.md)
Implement design tokens from DESIGN.md in `css/variables.css`:

**Colors:**
- Primary: `#051125` (Deep Navy)
- Background: `#fbf9f5` (Warm Cream)
- Surface: `#e4e2de` (Soft Cloud Blue)
- Surface Container: `#efeeea`
- Primary Container: `#1b263b`
- Secondary: `#735c00` (Gold accent)
- Text: `#1b1c1a` (Darkest Night)
- On Surface Variant: `#45474d`

**Typography:**
- Headlines: Quicksand (700 weight)
- Body: Nunito Sans (400 weight)
- Sizes: headline-lg (48px), headline-md (32px), headline-sm (24px), body-lg (18px), body-md (16px), label-md (14px)

**Spacing:**
- Base unit: 8px
- Container padding mobile: 24px
- Container padding desktop: 64px
- Gutter: 24px
- Stack gap: 16px

**Border Radius:**
- sm: 0.25rem
- default: 0.5rem
- md: 0.75rem
- lg: 1rem
- xl: 1.5rem
- full: 9999px

### 2.2 Typography Setup
- [ ] Import Quicksand font family (300-700 weights)
- [ ] Import Nunito Sans font family (200-1000 weights, opsz 6-12)
- [ ] Import Material Symbols Outlined
- [ ] Define typography scale classes in `css/typography.css`

### 2.3 Base Styles
- [ ] Set global background color (`#fbf9f5`)
- [ ] Set global text color and font family
- [ ] Implement reset CSS
- [ ] Add smooth scrolling to `html`

---

## Phase 3: Component Development

### 3.1 Persistent Header
**Requirements:**
- Fixed position at top
- Brand logo: "El Primer Viaje Alrededor del Sol"
- Live countdown (Days, Hours, Minutes, Seconds)
- "Confirmar" CTA button (anchors to RSVP section)

**Implementation:**
- [ ] Create header HTML structure with `<nav>` tag
- [ ] Implement fixed positioning with z-index
- [ ] Add brand logo styling (headline-sm, primary color)
- [ ] Create countdown timer container
- [ ] Add CTA button with anchor link to `#rsvp`

**Countdown Timer (js/countdown.js):**
- [ ] Target date: August 8, 2025 16:00:00
- [ ] Update every second
- [ ] Display "¡Llegó el día!" when date reached
- [ ] Format numbers with zero-padding (00 format)

### 3.2 Hero Section
**Requirements:**
- Hand-drawn watercolor Earth with smiling face
- Small golden rocket illustration
- Main title: "¡El Primer Viaje Alrededor del Sol!"
- Subtitle: "¡Acompáñanos a celebrar el bautizo y 1er cumpleaños de Gonzalo Damián!"
- Decorative divider with icons (bedtime, sunny, rocket)

**Implementation:**
- [ ] Create hero section HTML structure
- [ ] Add Earth/Rocket image (use `design/smiling_earth_rocket_logo.png` or placeholder)
- [ ] Style main title (headline-lg, primary color)
- [ ] Style subtitle (body-lg, on-surface-variant)
- [ ] Create decorative divider with Material Symbols icons
- [ ] Add subtle entrance animation

### 3.3 Honor Section
**Requirements:**
- Parents: Adriana Campos y Herlindo Miguel
- Godparents: Nuria Bastida y Sergio Urbina
- Card-style container with watercolor wash effect

**Implementation:**
- [ ] Create honor section with invitation-card class
- [ ] Add watercolor wash overlay (CSS background texture)
- [ ] Create two honor groups (Parents, Godparents)
- [ ] Style titles (headline-sm)
- [ ] Style names (body-lg, on-surface)
- [ ] Add separator between groups

### 3.4 Baptism Details Section
**Requirements:**
- Section header with church icon
- Event card: Date/Time (Sábado, 08 de Agosto • 16:00 hrs)
- Event card: Location (Iglesia C. Lerma 50)
- "Ver mapa" link to Google Maps

**Implementation:**
- [ ] Create section header with Material Symbols church icon
- [ ] Style section title (headline-md)
- [ ] Create event cards grid layout
- [ ] Add event icon (event, location_on)
- [ ] Style event details (headline-sm for labels, body-md for content)
- [ ] Add "Ver mapa" link with open_in_new icon
- [ ] Link to Google Maps with address

### 3.5 Birthday Party Section
**Requirements:**
- Party image/decor
- Title: "Fiesta de Cumpleaños"
- Subtitle: "Celebremos juntos esta gran aventura"
- Location: Salon Bugambilia (Av Cuauhtémoc 245)
- "Cómo Llegar" button

**Implementation:**
- [ ] Create invitation-card container
- [ ] Add party image with gradient overlay
- [ ] Style party title (headline-md)
- [ ] Style party subtitle (body-lg)
- [ ] Create location display with location_city icon
- [ ] Add address details (body-md)
- [ ] Create "Cómo Llegar" button (secondary style)
- [ ] Link button to Google Maps

### 3.6 RSVP Section
**Requirements:**
- Form with: Name (text), Number of Companions (select), Attendance (radio)
- Submit button: "Confirmar Asistencia"
- State A (Accepted): "¡Confirmado! ¡Estamos en la luna!..." with moon/checkmark icon
- State B (Rejected): "¡Te extrañaremos! Lamentamos que no puedas..." with moon icon
- Smooth transition without page reload

**Implementation:**
- [ ] Create RSVP form container (invitation-card)
- [ ] Add section header with RSVP deadline info
- [ ] Create form group for Name input (required)
- [ ] Create form group for Number of Companions select (1-5+ options)
- [ ] Create radio group for attendance (Yes/No)
- [ ] Style form inputs with surface background and outline border
- [ ] Add focus states (border transitions to primary)
- [ ] Create submit button (primary style)

**RSVP Logic (js/rsvp.js):**
- [ ] Prevent default form submission
- [ ] Check radio button state (assist-yes / assist-no)
- [ ] Replace form content with success message based on selection
- [ ] Add bounce animation for accepted state
- [ ] Scroll section into view with smooth behavior
- [ ] Include Material Symbols icons (nights_stay, check, rocket_launch)

### 3.7 Footer
**Requirements:**
- "Gonzalo Damián" title
- Copyright: "© 2025 El Primer Viaje Alrededor del Sol"

**Implementation:**
- [ ] Create footer HTML structure
- [ ] Style title (headline-sm)
- [ ] Style copyright text (body-md)
- [ ] Add padding and alignment

### 3.8 Floating Decor Elements
**Requirements:**
- Stars, clouds, rockets, moons floating in background
- Staggered animations
- Various sizes and colors

**Implementation:**
- [ ] Create decor-container with absolute positioning
- [ ] Add Material Symbols icons (star, cloud, rocket_launch, nights_stay)
- [ ] Style with different sizes (24px-48px)
- [ ] Apply colors from design system (secondary-fixed-dim, tertiary-fixed-dim, etc.)
- [ ] Create CSS animations (float, stagger delays)
- [ ] Position elements at various coordinates

---

## Phase 4: Responsive Design

### 4.1 Mobile Breakpoints
- [ ] Base styles for mobile (default)
- [ ] Container padding: 24px
- [ ] Stack cards vertically
- [ ] Adjust font sizes (headline-lg-mobile: 32px)

### 4.2 Desktop Breakpoints
- [ ] Media query for desktop (min-width: 768px or 1024px)
- [ ] Container padding: 64px
- [ ] Max-width container (4xl: ~896px)
- [ ] Grid layouts for event cards (2-column)
- [ ] Larger font sizes (headline-lg: 48px)

### 4.3 Responsive Components
- [ ] Header: Adjust countdown display on mobile
- [ ] Hero: Stack image and text on mobile, side-by-side on desktop
- [ ] Event cards: Grid layout on desktop
- [ ] RSVP form: Full width on mobile, centered on desktop

---

## Phase 5: Animations & Interactions

### 5.1 CSS Animations
- [ ] Create `@keyframes float` for decor elements
- [ ] Create `@keyframes bounce` for RSVP success state
- [ ] Create `@keyframes fade-in` for section entrances
- [ ] Add stagger delays (stagger-1, stagger-2, stagger-3)

### 5.2 Interactive States
- [ ] Button hover effects (lift, shadow increase)
- [ ] Input focus states (border color change)
- [ ] Smooth scroll behavior for anchor links
- [ ] Radio button custom styling

### 5.3 JavaScript Interactions
- [ ] Countdown timer (real-time updates)
- [ ] RSVP form submission (DOM manipulation)
- [ ] Smooth scroll to RSVP section
- [ ] Form validation (required fields)

---

## Phase 6: Asset Preparation

### 6.1 Images
- [ ] Optimize Earth/Rocket hero image (PNG/SVG)
- [ ] Optimize party decor image
- [ ] Ensure images are responsive (max-width: 100%)
- [ ] Add alt text for accessibility

### 6.2 Icons
- [ ] Use Material Symbols Outlined for all icons
- [ ] Configure font-variation-settings for filled variants
- [ ] Ensure consistent sizing and colors

### 6.3 Watercolor Textures
- [ ] Create or source watercolor wash SVG overlay
- [ ] Apply to honor section and cards
- [ ] Ensure low file size and performance

---

## Phase 7: Testing & Optimization

### 7.1 Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test on mobile browsers (iOS Safari, Chrome Mobile)

### 7.2 Responsive Testing
- [ ] Test on mobile (320px - 767px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (1024px+)

### 7.3 Performance Optimization
- [ ] Optimize image sizes and formats
- [ ] Minify CSS and JavaScript
- [ ] Enable gzip compression (if deploying)
- [ ] Lazy load images (if needed)

### 7.4 Accessibility Testing
- [ ] Check color contrast ratios
- [ ] Ensure keyboard navigation works
- [ ] Verify ARIA labels where needed
- [ ] Test screen reader compatibility

### 7.5 Functional Testing
- [ ] Verify countdown timer accuracy
- [ ] Test RSVP form submission (both states)
- [ ] Test all external links (Google Maps)
- [ ] Verify smooth scrolling
- [ ] Check form validation

---

## Phase 8: Deployment

### 8.1 Deployment Options
- [ ] Choose hosting platform (Netlify, Vercel, GitHub Pages, or custom)
- [ ] Configure domain (if applicable)
- [ ] Set up SSL certificate

### 8.2 Final Checks
- [ ] Verify all links work
- [ ] Check all images load correctly
- [ ] Test countdown timer with target date
- [ ] Verify RSVP functionality
- [ ] Final cross-browser testing

---

## Design System Reference

### Color Usage Guide
- **Primary (#051125):** Buttons, titles, key branding
- **Background (#fbf9f5):** Page base, warm cream feel
- **Surface (#e4e2de):** Cards, forms, secondary containers
- **Surface Container (#efeeea):** Elevated surfaces
- **Secondary (#735c00):** Gold accents, stars, highlights
- **Text (#1b1c1a):** Body copy, high legibility
- **On Surface Variant (#45474d):** Secondary text, labels

### Typography Scale
- **Headline LG:** 48px, Quicksand 700 (Desktop) / 32px (Mobile)
- **Headline MD:** 32px, Quicksand 700
- **Headline SM:** 24px, Quicksand 700
- **Body LG:** 18px, Nunito Sans 400
- **Body MD:** 16px, Nunito Sans 400
- **Label MD:** 14px, Nunito Sans 700, letter-spacing 0.05em

### Component Styles
- **Cards:** 24px border radius, subtle shadow, watercolor texture
- **Buttons:** 24px border radius, primary background, hover lift effect
- **Inputs:** Surface background, 1px outline border, focus transition
- **Icons:** Material Symbols, filled variants, gold/dusty blue colors

---

## Timeline Estimate

- **Phase 1 (Setup):** 1-2 hours
- **Phase 2 (Design System):** 2-3 hours
- **Phase 3 (Components):** 6-8 hours
- **Phase 4 (Responsive):** 2-3 hours
- **Phase 5 (Animations):** 2-3 hours
- **Phase 6 (Assets):** 2-4 hours
- **Phase 7 (Testing):** 3-4 hours
- **Phase 8 (Deployment):** 1-2 hours

**Total Estimated Time:** 19-29 hours

---

## Notes & Considerations

1. **Reference Implementation:** The `design/code.html` file provides a complete reference implementation that can be used as a template. It includes all sections, styling, and JavaScript logic already implemented.

2. **Asset Sources:** 
   - Hero image: Currently using Google hosted URL - should be replaced with local asset
   - Party image: Currently using Google hosted URL - should be replaced with local asset
   - Earth/Rocket logo: Available in `design/smiling_earth_rocket_logo.png`

3. **Date Correction:** The PRD mentions August 8th but doesn't specify the year. The reference code uses 2025. Verify correct year with stakeholders.

4. **Performance:** Consider lazy loading images and optimizing asset sizes for faster load times on mobile.

5. **Accessibility:** Ensure all interactive elements have proper focus states and ARIA labels where necessary.

6. **Backup Plan:** If watercolor textures are not available, use CSS gradients and subtle noise overlays to simulate the effect.
