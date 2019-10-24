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
  DocumentApp.getUi().createMenu('Mymenu').addItem('call function', 'copyDoc')
  .addToUi();
}