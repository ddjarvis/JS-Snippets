javascript: (function() {
copyText('• ' + document.title + '\n' + document.URL + '\n\n');
function copyText(i) {
	var t = document.createElement("textarea");
	t.value = i;
	document.body.appendChild(t);
	t.select();
	document.execCommand("copy");
	document.body.removeChild(t);
}
})();
