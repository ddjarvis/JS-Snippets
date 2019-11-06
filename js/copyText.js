function copyText(v_input) {
	/* Scriptlet by David Jarvis (https://github.com/ddjarvis) */
	var v_textArea = document.createElement("textarea");
	v_textArea.value = v_input;
	document.body.appendChild(v_textArea);
	v_textArea.select();
	document.execCommand("copy");
	document.body.removeChild(v_textArea);
}
