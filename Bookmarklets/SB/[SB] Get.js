javascript: (function() {
	/* Start of BM Code */

	main();

	function pageWrite(content) {
		var pages = Object.keys(localStorage).filter(x => x.match(/^page-\d+/));
		var count = pages.length;
		var page = 'page-' + (count + 1);
		localStorage.setItem(page, content);
		console.log(page, ':', content);
		alert(`Saved video(s) to page ${page}!`);
	}

	function pageRead() {
		var pages = Object.keys(localStorage).filter(x => x.match(/^page-\d+/));
		var count = pages.length;
		var page, content = '';
		for (var i = 0; i < count; i++) {
			page = 'page-' + (i + 1);
			content += localStorage.getItem(page) + '\n\n';
		}
		return content;
	}

	function next() {
	  var next = document.querySelectorAll('li.next:not(.disabled) a');
		if (next.length>0) {
			next[0].click();
		}
	}

	function main() {
		var parent = document.querySelectorAll('div.results div.video-list')[0];
		var videos = parent.querySelectorAll('div.video-item');
		var content = parent.innerHTML.replaceAll(/[ \t][ \t]+|\n\n+/g, '');
		pageWrite(content);
		setTimeout(next, 500);
	}

	/*End of BM Code */
})();
