# Event Landing Page  
This is a repository for SoarX's Task 2 for the Web Developer Insternship application.  
## Features
Event Poster: Displays an event poster with event details.  
Event Description: Provides event details, date, and time.  
Registration Form: Collects attendee information  
Google Sheets Integration: Stores registration data in Google Sheets.  
## Technologies Used  
HTML  
CSS  
JavaScript  
Google Apps Script  
Google Sheets API  
### Setup and Installation  
1. Clone the repository:  'https://github.com/Ruchi-Mankar/SoarX-WebDevInternApplicationTask2.git'  
2. Open the index.html file in a web browser to view the landing page.  
### Google Apps Script Setup  
1. Create a new Google Apps Script project.  
2. Copy and paste the Google Apps Script code for form submission and data storage.  
```   
var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```   
3. Deploy the Google Apps Script web app and obtain the web app URL.  
4. Update the scriptURL variable in the JavaScript code with the web app URL.  
### Website  
https://ruchi-mankar.github.io/SoarX-WebDevInternApplicationTask2/  
