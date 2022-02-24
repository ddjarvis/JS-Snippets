javascript: (function() {
	/* Start of BM Code */
	function copyText(e) {
		var o = document.createElement("textarea");
		o.value = e, document.body.appendChild(o), o.select(), document.execCommand("copy"), document.body.removeChild(o)
	}

	function addElement(e = "", t = "", n = "", d = "", o = "") {
		t = t || "my" + e.charAt(0).toUpperCase() + e.substr(1).toLowerCase(), "-" == (n = n || "&nbsp;") && (n = ""), d || (parent.Elem = "document.body");
		e = document.createElement(e);
		return e.id = t, e.appendChild(document.createTextNode(n)), o ? d.insertBefore(e, o) : d.appendChild(e), document.getElementById(t)
	}

	function main() {
		var page_title = document.title;
		var page_link = document.URL;
		var out, outA = page_title + '\n' + page_link + '\n\n', outB = page_title + '\t' + page_link + '\n';
		var temp_div = document.querySelectorAll('div#temp_div').length < 1 ? addElement('div', 'temp_div', '-', document.body) : document.getElementById('temp_div');
		temp_div.style.position = 'fixed';
		temp_div.style.top = '15px';
		temp_div.style.left = '15px';
		temp_div.style.zIndex = '999999';
		var temp_text = document.querySelectorAll('#temp_text').length < 1 ? addElement('textarea', 'temp_text', '-', temp_div) : document.getElementById('temp_text');
		temp_text.innerText = out;
		temp_text.style.display = 'none';
		var temp_btn = document.querySelectorAll('#temp_btn').length < 1 ? addElement('button', 'temp_btn', ' < Copy Title / Link > ', temp_div) : document.getElementById('temp_btn');
		temp_btn.addEventListener('click', () => {
			out = (event.ctrlKey && event.shiftKey) ? page_title
			 : event.altKey ? page_link
			 : event.shiftKey ? outB
			 : outA;
			copyText(out);
			temp_div.remove();
		});
	}
	main(); /*End of BM Code */
})();
