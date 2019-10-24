function firstApp() {
  var welcomeMessage = "Hello World";

}

function updateDoc() {
  var doc = DocumentApp.openById('1020oQGoIEHK8yguoR-Nz4AQGvlgz1FZkdLoXUGjqRD8');
  var body = doc.getBody();
  body.appendHorizontalRule();
  body.appendParagraph('This is my script ;' + Date())
  .appendHorizontalRule()
  body.appendPageBreak();
  
}

function seeDoc() {
  var doc = DocumentApp.openById('1020oQGoIEHK8yguoR-Nz4AQGvlgz1FZkdLoXUGjqRD8');
  var body = doc.getBody();
  var content = body.getText();
  var ukraine = LanguageApp.translate(content, 'en', 'uk');
  Logger.log(ukraine);
  body.appendParagraph(ukraine);
}
//{FONT_SIZE=null, ITALIC=null, HORIZONTAL_ALIGNMENT=Left, INDENT_END=0.0, INDENT_START=0.0, LINE_SPACING=1.15, 
// LINK_URL=null, UNDERLINE=null, BACKGROUND_COLOR=null, INDENT_FIRST_LINE=0.0, LEFT_TO_RIGHT=true, SPACING_BEFORE=0.0, 
// HEADING=Normal, SPACING_AFTER=0.0, STRIKETHROUGH=null, FOREGROUND_COLOR=null, BOLD=null, FONT_FAMILY=null}
function seeParagraphOne() {
  var doc = DocumentApp.openById('1020oQGoIEHK8yguoR-Nz4AQGvlgz1FZkdLoXUGjqRD8');
  var body = doc.getBody();
  var p1 = body.getChild(0);
//  Logger.log(p1.getText());
  p1.setText('UPDATED!!!');
  p1.setFontSize(50);
  
  var paraList = body.getParagraphs();
  Logger.log(paraList[1].getAttributes());
  var style = {};
  style[DocumentApp.Attribute.BACKGROUND_COLOR] = '#f5de14';
  paraList[1].setAttributes(style);
}

function seeParagraphTwo(){
  var doc = DocumentApp.openById('1020oQGoIEHK8yguoR-Nz4AQGvlgz1FZkdLoXUGjqRD8');
  var body = doc.getBody();
  var ps = body.getNumChildren();
  for ( x=0;x<ps;x++ ) {
    style = {};
    style[DocumentApp.Attribute.FOREGROUND_COLOR] = '#000fff';
  var e1 = body.getChild(x);
    Logger.log(e1.getText())
    e1.setAttributes(style);
  }
}
  function seeParagraphThree() {
  var doc = DocumentApp.openById('1020oQGoIEHK8yguoR-Nz4AQGvlgz1FZkdLoXUGjqRD8');
  var body = doc.getBody();
    var att = {
      "FOREGROUND_COLOR": "#fff000",
      "BOLD" : true,
      "FONT_SIZE" : 24
    }
      for (num = 0;num<body.getNumChildren();num++){
      var el = body.getChild(num);
      
      //el.setAttributes(att);
      var text = el.editAsText();
      var content = text.getText();
         Logger.log('before' + content.length);
        if (content.length>0){
          Logger.log(content.length);
      text.setForegroundColor(0,(content.length/2),'#0000FF');
          text.setBackgroundColor(content.length/2,(content.length-1),'#FF00FF');
        }
      }
  }

function settingAttributes () {
  var body = DocumentApp.openById('1020oQGoIEHK8yguoR-Nz4AQGvlgz1FZkdLoXUGjqRD8').getBody()
  
  var attr = {
    
    'FOREGROUND_COLOR': '#008080',
    'ITALIC': true
    }
  
  for (var x=0; x < body.getNumChildren(); x++) {
  
    var el = body.getChild(x);
    el.setAttributes(attr);
    
    var text = el.editAsText();
    Logger.log(text.getText().length);
    if (text.getText().length>0){text.setForegroundColor(0, (text.getText().length/2), '#ff0000')}
  
  }
}