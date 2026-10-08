/**
 * Google Apps Script — appends website leads to the sheet it is bound to.
 *
 * Setup:
 *   1. Create a Google Sheet. Extensions → Apps Script, paste this file.
 *   2. Set SECRET below to any long random string.
 *   3. Deploy → New deployment → Web app.
 *        Execute as: Me        Who has access: Anyone
 *   4. Copy the web app URL (ends in /exec) and set on the site (Vercel →
 *      Settings → Environment Variables, and .env.local for local dev):
 *        GOOGLE_SHEETS_WEBHOOK_URL=<the /exec URL>
 *        GOOGLE_SHEETS_WEBHOOK_SECRET=<the same SECRET>
 *   5. Redeploy the site. After editing this script, publish a new version
 *      (Deploy → Manage deployments → Edit → New version).
 */

const SECRET = "change-me";
const SHEET_NAME = "Leads";
const HEADERS = ["Received", "Name", "Email", "Phone", "Service", "Message", "Source", "Page"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }

    // A leading apostrophe stops Sheets treating "=..." or "+91..." as a formula.
    const safe = (v) => "'" + String(v || "");
    sheet.appendRow([
      new Date(),
      safe(data.name),
      safe(data.email),
      safe(data.phone),
      safe(data.service),
      safe(data.message),
      safe(data.source),
      safe(data.page),
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
