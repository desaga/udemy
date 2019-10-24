function copyDoc() {
    var srcDoc = DocumentApp.openById('1020oQGoIEHK8yguoR-Nz4AQGvlgz1FZkdLoXUGjqRD8');
    var tarDoc = DocumentApp.getActiveDocument();
    var srcDocTotal = srcDoc.getNumChildren();
    var tarDocBody = tarDoc.getBody();
    //tarDocBody.clear();
    tarDocBody.appendParagraph('Last Updated ' + Date()).setFontSize(8).appendHorizontalRule();
    for (var x = 0; x < srcDocTotal; x++) {
        var el = srcDoc.getChild(x).copy();
        var elType = el.getType();
        if (elType == DocumentApp.ElementType.PARAGRAPH) {
            tarDocBody.appendParagraph(el);
        }
        else if (elType == DocumentApp.ElementType.LIST_ITEM) {
            tarDocBody.appendListItem(el);
        }
        else if (elType == DocumentApp.ElementType.TABLE) {
            tarDocBody.appendTable(el);
        }
        Logger.log(elType);
    }
}

function onOpen(){
  DocumentApp.getUi().createMenu('Mymenu')
  .addItem('call function1', 'copyDoc')
  .addItem('Alert', 'alertUi')
  .addSeparator()
  .addItem('Html', 'htmlOutput')
  .addItem('Fun', 'fun')
  .addItem('Translate', 'translate')
  .addToUi();
}

function alertUi(){
  var ui = DocumentApp.getUi();
  //ui.alert('Alert!!!');
  var result = ui.alert('Warning', 'Do you want to continue', ui.ButtonSet.YES_NO_CANCEL);
  ui.alert('You chose : ' + result);
  Logger.log(result);
  
}

function htmlOutput() {
  var ui = DocumentApp.getUi();
  var htmloutput = HtmlService.createHtmlOutput('<p>Hello,</p>')
  .setWidth(250)
  .setHeight(150)
  ui.showModalDialog(htmloutput, 'Example');
}

function fun(){
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  cursor.insertText(Date());
}

function translate(){
  var doc =  DocumentApp.getActiveDocument();
  var ui = DocumentApp.getUi();
  var selection = doc.getSelection();
  var output = '';
  if (selection){
    var el = selection.getRangeElements();
    
    for (var x=0;x<el.length;x++){
      if (el[x].getElement().editAsText()){
        //Logger.log(el[x].getElement().asText().getText());
        var selStart = el[x].getStartOffset();
        var selEnd = el[x].getEndOffsetInclusive();
        var holder = el[x].getElement().asText().getText();
        output += holder;
      }
    }
    ui.alert(LanguageApp.translate(output, 'en', 'uk'));
  }
}