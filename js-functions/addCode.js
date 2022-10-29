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


