/**
 * Google Apps Script — RSVP Backend
 * El Primer Viaje Alrededor del Sol
 *
 * SETUP:
 * 1. Create a Google Sheet with these headers in Row 1:
 *    A: timestamp | B: nombre | C: asistencia | D: num_asistentes
 *
 * 2. Open Extensions → Apps Script
 * 3. Paste this code into Code.gs
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the URL and paste it into js/rsvp.js (APPS_SCRIPT_URL constant)
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nombre || '',
      data.asistencia || '',
      data.numAsistentes || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test function to verify the script works
function testDoPost() {
  var e = {
    postData: {
      contents: JSON.stringify({
        nombre: 'Test User',
        asistencia: 'Sí',
        numAsistentes: '2 Personas'
      })
    }
  };
  var result = doPost(e);
  Logger.log(result.getContent());
}
