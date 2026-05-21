# RSVP Feature Implementation Plan

## Overview
Make the RSVP form functional: collect guest data, send it to a Google Sheet via Google Apps Script web app.

---

## 1. Google Sheet Setup

Create a Google Sheet with the following **columns** (Row 1 = headers):

| Column | Header           | Description                                      |
|--------|------------------|--------------------------------------------------|
| A      | `timestamp`      | Date/time the response was received              |
| B      | `nombre`         | Full name of the guest                           |
| C      | `asistencia`     | `Sí` or `No`                                     |
| D      | `num_asistentes` | `1 - Solo yo`, `2 Personas`, or `Contactar anfitrión` (empty if declining) |

---

## 2. Google Apps Script (server-side)

Deploy as a web app on https://script.google.com/

### Steps:
1. Open the Google Sheet → Extensions → Apps Script
2. Replace `Code.gs` contents with the script below
3. Click **Deploy → New deployment → Web app**
4. Set "Execute as" = **Me**, "Who has access" = **Anyone**
5. Copy the deployment URL

### `Code.gs`
```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nombre,
      data.asistencia,
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
```

---

## 3. HTML Form Changes (`index.html`)

- **Radio group**: Move above the guests selector so toggling visibility feels natural
- **Guest selector**: Update to 3 options in Spanish:
  - `1 - Solo yo`
  - `2 Personas`
  - `Más (contactar al anfitrión directamente)`
- **Guest selector**: Hidden when "No es posible asistir" is selected
- **Add `id` attributes** to form inputs for JS access: `rsvp-name`, `rsvp-guests`
- **Add `id` to guest group** div: `guest-group` (for show/hide toggling)

---

## 4. JavaScript Changes (`js/rsvp.js`)

- **Toggle guest selector visibility** when radio changes
- **On submit**:
  1. Collect form data (name, attendance, guests)
  2. POST JSON to the Apps Script URL
  3. Show success/decline confirmation UI (existing behavior)
  4. Handle errors gracefully with a retry message
- **Button states**: Disable button + show "Enviando..." while request is in flight
- **Config**: Apps Script URL stored as a constant at the top of the file

---

## 5. Implementation Order

- [ ] **Step 1**: Update HTML form (radio order, guest options, IDs)
- [ ] **Step 2**: Update `rsvp.js` — radio toggle logic for guest selector visibility
- [ ] **Step 3**: Update `rsvp.js` — POST to Google Apps Script on submit
- [ ] **Step 4**: Create `Code.gs` file for easy copy-paste
- [ ] **Step 5**: Test end-to-end
