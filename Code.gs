function onOpen(){
  //Logger.log('Hello');
  DocumentApp.getUi()
  .createMenu('Advanced')
  .addItem('one', 'myFun1')
  .addItem('two', 'myFun2')
  .addSeparator()
  .addItem('three', 'myFun3')
  .addItem('four', 'myFun4')
  .addItem('five', 'myFun5')
  .addItem('six', 'myFun6')
  .addItem('seven', 'myFun7')
  .addItem('eight', 'myFun8')
  .addItem('nine', 'myFun9')
  .addItem('ten', 'myFun10')
  .addToUi();
}
function myFun1(){
  var ui = DocumentApp.getUi();
  var result = ui.alert('QUESTION','Are you logged in?',ui.ButtonSet.YES_NO_CANCEL);
  ui.alert('You responded with '+ result);
}
function myFun2(){
  var ui = DocumentApp.getUi();
  var result = Session.getActiveUser().getEmail();
  ui.alert('Your email '+ result);
}
function myFun3(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);
  ui.alert('Your name '+ response.getResponseText());
}
function myFun4(){
  var ui = DocumentApp.getUi();
  var result = Session.getActiveUserLocale();
  var resultTZ = Session.getScriptTimeZone();
  ui.alert('Your locale '+ result + ' ' + resultTZ);
}
function myFun5(){
  var htmlOutput = HtmlService
     .createHtmlOutput('<h1>Hello</h1><br>world')
     .setWidth(650)
     .setHeight(400);
 DocumentApp.getUi().showModalDialog(htmlOutput, 'Title Whatever');
}
function myFun6(){
  var htmlOutput = HtmlService
     .createHtmlOutputFromFile('modal')
     .setWidth(650)
     .setHeight(400);
 DocumentApp.getUi().showModalDialog(htmlOutput, 'Title Whatever');
}
function myFun7(){
  var cursor = DocumentApp.getActiveDocument().getCursor();
  cursor.insertText(' ' +Date()+' ' );
}
function myFun8(){
  var doc = DocumentApp.getActiveDocument().getId();
  var ui = DocumentApp.getUi();
  ui.alert('Doc ID '+ doc);
}
function myFun9(){
  var selection = DocumentApp.getActiveDocument().getSelection();
  var output;
  if(selection){
  var el = selection.getRangeElements();
    for(var x=0;x<el.length;x++){
      if(el[x].getElement().editAsText){
        var holder = el[x].getElement().editAsText();
        output += holder.getText();
        if(el[x].isPartial()){
          holder.setBold(el[x].getStartOffset(),el[x].getEndOffsetInclusive(),true);
        }else{
          holder.setBold(true);
        }
      }
    }
  DocumentApp.getUi().alert('Selected Text '+output);
  }
}
function myFun10(){
  var selection = DocumentApp.getActiveDocument().getSelection();
  var output = 'TRANSLATION:';
  if(selection){
  var el = selection.getRangeElements();
    for(var x=0;x<el.length;x++){
      if(el[x].getElement().editAsText){
        var holder = el[x].getElement().editAsText();
        output += holder.getText();
      }
    }
    
  var spanish = LanguageApp.translate(output, 'en', 'es');
    DocumentApp.getUi().alert('Spanish : '+spanish);
  }
}

function exchange(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var ui = DocumentApp.getUi();
  var html = HtmlService.createHtmlOutput();
  html.setContent('<div class="exchange-rate-module"><div class="section"><div class="section-content type">USD:</div><div class="section-content rate">24.800&nbsp;/&nbsp;25.189</div></div><div class="section"><div class="section-content type">EUR:</div><div class="section-content rate">27.45&nbsp;/&nbsp;27.93</div></div></div>')
  ui.showModalDialog(html, 'Example');
  var place = body;
  Logger.log(place);
  
}

function findcontent(){
  var body = DocumentApp.getActiveDocument().getBody();
  var ui = DocumentApp.getUi();
  var response = ui.prompt('Find:');
  if (response.getResponseText()){
  var finderContent = body.findText(response.getResponseText());
    Logger.log(finderContent);
    while (finderContent  != null){
      var outputContent = finderContent.getElement().editAsText();
      Logger.log(outputContent.getText());
      var startPos = finderContent.getStartOffset();
      var endPos = finderContent.getEndOffsetInclusive();
      outputContent.setForegroundColor(startPos,endPos,'#0000FF');
      finderContent = body.findText(response.getResponseText(), finderContent);
    }
  }
}
//function myFunction() {
//  var doc = DocumentApp.getActiveDocument();
//  Logger.log(doc.getId());
//  Logger.log(doc.getUrl());
//  Logger.log(doc.getName());
//}