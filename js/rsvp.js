// RSVP Form
// El Primer Viaje Alrededor del Sol

function initRSVP() {
    const rsvpForm = document.getElementById('rsvp-form');
    
    if (!rsvpForm) {
        console.warn('RSVP form not found');
        return;
    }

    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isAttending = document.getElementById('assist-yes').checked;
        const rsvpSection = document.getElementById('rsvp');

        if (!rsvpSection) {
            console.warn('RSVP section not found');
            return;
        }

        if (isAttending) {
            rsvpSection.innerHTML = `
                <div class="rsvp-response" style="animation: bounce 1s ease-in-out;">
                    <div class="rsvp-response-icon-container">
                        <span class="material-symbols-outlined rsvp-response-icon" style="font-variation-settings: 'FILL' 1;">nights_stay</span>
                        <div class="rsvp-response-check">
                            <span class="material-symbols-outlined" style="color: var(--color-on-secondary-container); font-weight: bold;">check</span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <h2 class="rsvp-response-title font-headline-md">Asistencia confirmada</h2>
                        <p class="rsvp-response-text font-body-lg">La confirmación ha sido registrada correctamente para la celebración de Gonzalo Damián.</p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; color: var(--color-secondary); padding-top: 16px;">
                        <span style="width: 32px; height: 1px; background-color: var(--color-secondary-fixed);"></span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1; font-size: 14px;">rocket_launch</span>
                        <span style="width: 32px; height: 1px; background-color: var(--color-secondary-fixed);"></span>
                    </div>
                </div>`;
        } else {
            rsvpSection.innerHTML = `
                <div class="rsvp-response">
                    <div class="rsvp-miss-icon-wrapper">
                        <span class="material-symbols-outlined rsvp-miss-icon" style="font-variation-settings: 'FILL' 1;">nights_stay</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <h3 class="rsvp-response-title font-headline-md">Notificación recibida</h3>
                        <p class="rsvp-response-text font-body-lg">
                          Se ha registrado la imposibilidad de asistir a la celebración del primer viaje alrededor del sol de Gonzalo Damián. Gracias por informar.
                        </p>
                    </div>
                    <div style="padding-top: 16px;">
                        <div style="width: 64px; height: 2px; background-color: var(--color-secondary-fixed); margin: 0 auto; border-radius: var(--radius-full);"></div>
                    </div>
                </div>`;
        }
        
        rsvpSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}
