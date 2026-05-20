// Main JavaScript Entry Point
// El Primer Viaje Alrededor del Sol

import { initCountdown } from './countdown.js';
import { initRSVP } from './rsvp.js';

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
                    
                    if (supportsNativeSmoothScroll) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        // Fallback for older browsers
                        target.scrollIntoView(true);
                    }
                }
            }
        });
    });
}

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initCountdown();
    initRSVP();
});
