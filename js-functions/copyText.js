function copyText(inputString) {
	var jscbta = document.createElement("textarea");
	jscbta.value = inputString;
	document.body.appendChild(jscbta);
	jscbta.select();
	document.execCommand("copy");
	document.body.removeChild(jscbta);
}
