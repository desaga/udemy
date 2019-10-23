function firstApp() {
  var welcomeMessage = "Hello World";
  for (var x=0;x<10;x++){
    Logger.log(welcomeMessage + ': ' + x);
  }
}

function createDoc(){
  var doc = DocumentApp.create('New Test Doc');
}

function udateDoc() {
  var doc = DocumentApp.openById('1020oQGoIEHK8yguoR-Nz4AQGvlgz1FZkdLoXUGjqRD8');
  Logger.log(doc.getName());
  var body = doc.getBody();
  body.appendParagraph('Some new content : added ' + Date());
  body.appendHorizontalRule();
  body.appendPageBreak();
}