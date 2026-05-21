# Final PRD: Gonzalo's 1st Birthday & Baptism "El Primer Viaje Alrededor del Sol"

## 1. Product Overview
**The Pitch:** A dreamy, celestial-themed single-page digital invitation for Gonzalo Damián's 1st birthday and baptism. The experience guides guests through a whimsical "First Trip Around the Sun" using soft watercolors, a live countdown, and interactive RSVP capture.

**Target Audience:** Family and friends of the birthday child.
**Platform:** Responsive Web (Desktop & Mobile optimized).
**Visual Style:** Playful, "magical watercolor" aesthetic with hand-drawn planets, moons, and stars.

---

## 2. Layout & Information Architecture
The invitation follows a single-page scrolling structure to keep the experience seamless and focused.

### 2.1 Persistent Header
*   **Brand Logo:** "El Primer Viaje Alrededor del Sol"
*   **Live Countdown:** Days, Hours, Minutes, and Seconds remaining until the event.
*   **Primary CTA:** A "Confirmar" button that anchors users to the RSVP section.
*   **Behavior:** Remains fixed at the top of the viewport during scrolling.

### 2.2 Sections
1.  **Hero:** Features a hand-drawn watercolor Earth with a smiling face and a small golden rocket.
2.  **Honor Section:** Acknowledgment of parents (**Adriana Campos and Herlindo Miguel**) and godparents (**Nuria Bastida and Sergio Urbina**).œ
3.  **Baptism Details:** Event logistics for the religious ceremony at **Iglesia (C. Lerma 50)**. Includes "Ver mapa" link.
4.  **Birthday Party Details:** Logistics for the party at **Salón Bugambilia**. Includes "Cómo Llegar" link.
5.  **Interactive RSVP:** A dynamic form that transitions into confirmation states without page reloads.
6.  **Footer:** Copyright information and a final mention of Gonzalo Damián.

---

## 3. Key Flows & Interactivity
### 3.1 Countdown Timer
*   **Target Date:** August 8th, 16:00 hrs.
*   **Logic:** Real-time updates via JavaScript. Displays "¡Llegó el día!" or zeros out once the date is reached.

### 3.2 RSVP Submission
*   **Input Fields:** Name (Text), Number of Companions (Select), Attendance (Radio).
*   **State A (Accepted):** Displays "¡Confirmado! ¡Estamos en la luna! Nos vemos bajo las estrellas..." with a watercolor moon/checkmark icon.
*   **State B (Rejected):** Displays "¡Te extrañaremos! Lamentamos que no puedas acompañar a Gonzalo..." with a watercolor moon icon.

---

## 4. Technical Specifications (The Stack)
To ensure long-term maintainability and high performance, the project uses a standard web stack without external CSS frameworks.

*   **Structure:** Semantic HTML5.
*   **Styling:** Vanilla CSS3.
    *   **Design Tokens:** Managed via CSS Custom Properties (`:root` variables) for colors, fonts, and spacing.
    *   **Responsiveness:** Flexbox and CSS Grid for fluid layouts. Stacked cards on mobile.
*   **Logic:** Vanilla JavaScript (ES6+).
    *   Handles the countdown timer calculation.
    *   Manages DOM-based state transitions for the RSVP form (Accepted/Rejected views).

---

## 5. Design System Tokens
### 5.1 Color Palette
*   **Primary (Navy):** `#1B263B` (Buttons, Titles)
*   **Background (Cream):** `#FDFBF7` (Page Base)
*   **Surface (Cloud Blue):** `#EAF2F8` (Cards, Forms)
*   **Text (Night Sky):** `#0D1B2A` (Body Copy)
*   **Accent (Gold):** `#D4AF37` (Stars, Highlights)

### 5.2 Typography
*   **Headings:** `Quicksand`, Sans-serif (Bold, 700)
*   **Body:** `Nunito`, Sans-serif (Regular, 400)

---

## 6. Asset Guidelines
*   **Illustrations:** Hand-drawn watercolor PNGs/SVGs for the Earth, Moon, and Rocket.
*   **Icons:** Minimalist line-art SVGs for location, time, and church details.
*   **Motion:** Subtle CSS animations (fades/pulses) for stars and entrance transitions for success states.
