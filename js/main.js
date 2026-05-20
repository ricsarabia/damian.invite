// Main JavaScript Entry Point
// El Primer Viaje Alrededor del Sol

import { initCountdown } from './countdown.js';
import { initRSVP } from './rsvp.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initRSVP();
});
