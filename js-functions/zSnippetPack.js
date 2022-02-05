function addCode(inputVar = "") {
	if (!inputVar) {
		return;
	}
	var s = document.createElement("script");
	s.type = "text/javascript";
	var c = "\n" + inputVar + "\n";
	console.log(c);
	try {
		s.appendChild(document.createTextNode(c));
		document.body.appendChild(s);
	} catch (e) {
		s.text = c;
		document.body.appendChild(s);
	}
}

function addCss(inputVar = "") {
	if (!inputVar) {
		return;
	}
	var s = document.createElement("style");
	var c = "\n" + inputVar + "\n";
	console.log(c);
	try {
		s.appendChild(document.createTextNode(c));
		document.head.appendChild(s);
	} catch (e) {
		s.text = c;
		document.head.appendChild(s);
	}
}

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
		parent.Elem = 'document.body'
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

function copyText(inputString) {
	var jscbta = document.createElement("textarea");
	jscbta.value = inputString;
	document.body.appendChild(jscbta);
	jscbta.select();
	document.execCommand("copy");
	document.body.removeChild(jscbta);
}

function parseURL(url = '') {
	if (!url) {
		url = document.URL;
	}
	var parser = document.createElement('a'),
		searchObject = {},
		queries, split, i;
	parser.href = url;
	queries = parser.search.replace(/^\?/, '').split('&');
	for (i = 0; i < queries.length; i++) {
		split = queries[i].split('=');
		searchObject[split[0]] = split[1];
	}
	return {
		protocol: parser.protocol,
		origin: parser.origin,
		host: parser.host,
		hostname: parser.hostname,
		port: parser.port,
		pathname: parser.pathname,
		patharray: parser.pathname.slice(1).split('/'),
		search: parser.search,
		searchObject: searchObject,
		hash: parser.hash
	};
}
