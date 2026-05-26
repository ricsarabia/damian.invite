// RSVP Form
// El Primer Viaje Alrededor del Sol

function initRSVP() {
    // Google Apps Script deployment URL
    var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySgxOcKG5A4G-aG5B3nNVcBwGQxFW7psnvrr015IyMvrtZCDKYhiMZaIrxYEkdU9GX/exec';
    const rsvpForm = document.getElementById('rsvp-form');
    const guestGroup = document.getElementById('guest-group');
    const guestHint = document.getElementById('guest-hint');
    const guestsSelect = document.getElementById('rsvp-guests');
    const assistYes = document.getElementById('assist-yes');
    const assistNo = document.getElementById('assist-no');

    if (!rsvpForm) {
        console.warn('RSVP form not found');
        return;
    }

    // Toggle guest selector visibility based on attendance radio
    function toggleGuestSelector() {
        if (assistNo.checked) {
            guestGroup.style.display = 'none';
        } else {
            guestGroup.style.display = '';
        }
    }

    // Toggle hint text when "more" is selected
    function toggleGuestHint() {
        if (guestsSelect.value === 'more') {
            guestHint.style.display = '';
        } else {
            guestHint.style.display = 'none';
        }
    }

    assistYes.addEventListener('change', toggleGuestSelector);
    assistNo.addEventListener('change', toggleGuestSelector);
    guestsSelect.addEventListener('change', toggleGuestHint);
    toggleGuestSelector();
    toggleGuestHint();

    rsvpForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const nombre = document.getElementById('rsvp-name').value.trim();
        const isAttending = assistYes.checked;
        const guestsSelect = document.getElementById('rsvp-guests');
        const submitBtn = document.getElementById('rsvp-submit');
        const rsvpSection = document.getElementById('rsvp');

        if (!nombre) return;
        if (!rsvpSection) return;

        // Guest count label mapping
        const guestLabels = {
            '1': '1 - Solo yo',
            '2': '2 Personas',
            'more': 'Contactar anfitrión'
        };

        const payload = {
            nombre: nombre,
            asistencia: isAttending ? 'Sí' : 'No',
            numAsistentes: isAttending ? guestLabels[guestsSelect.value] : ''
        };

        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        try {
            const response = await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // no-cors returns opaque response, so we assume success
            showConfirmation(rsvpSection, isAttending);
        } catch (err) {
            console.error('RSVP error:', err);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Confirmar Asistencia';
            alert('Hubo un error al enviar tu respuesta. Por favor intenta de nuevo.');
        }
    });
}

function showConfirmation(rsvpSection, isAttending) {
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
}
