function myFunction() {
  var doc = DocumentApp.create("New udemy doc");
  var body = doc.getBody();
  body.appendParagraph(message);
  var email = Session.getActiveUser().getEmail();
  var timeZone = Session.getScriptTimeZone();
  var subject = doc.getName();
  var bodyEmail = 'This is the new doc =' + doc.getUrl() + ' Timezone: ' + timeZone;
  //GmailApp.sendEmail(email, subject, bodyEmail)
  
}
