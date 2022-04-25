function addElement(elemType = '', elemId = '', elemText = '', parentElem = '', beforeElem = '', elemClasses = []) {
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

  elemClasses.forEach(x => elem.classList.add(x));
  return document.getElementById(elemId);
}
