function addElement(elemType = '', elemId = '', elemText = '', parentElem = '', beforeElem = '') {
  if (!elemId) {
    elemId = 'my' + elemType.charAt(0).toUpperCase() + elemType.substr(1).toLowerCase();
  }
  if (!elemText) {
    elemText = '&nbsp;';
  }
  if (elemText == "-") {
    elemText = '';
  }

  if (!parentElem) {
    parentElem = document.body;
  }

  var elem = document.createElement(elemType);
  elem.id = elemId;

  var txt = elemText;

  elem.appendChild(document.createTextNode(txt));
  if (!beforeElem) {
    parentElem.appendChild(elem);
  } else {
    parentElem.insertBefore(elem, beforeElem)
  }
  return document.getElementById(elemId);
}
