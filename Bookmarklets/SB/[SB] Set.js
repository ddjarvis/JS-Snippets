javascript: (function() {
	/* Start of BM Code */
	
	main();

	function pageWrite(content) {
		var pages = Object.keys(localStorage).filter(x => x.match(/^page-\d+/));
		var count = pages.length;
		var page = 'page-' + (count + 1);
		localStorage.setItem(page, content);
		console.log(page, ':', content);
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

	function pageClear() {
		var pages = Object.keys(localStorage).filter(x => x.match(/^page-\d+/));
		var count = pages.length;
		var page;
		for (var i = 0; i < count; i++) {
			page = 'page-' + (i + 1);
			localStorage.removeItem(page);
		}
	}

	function main() {
		var parent = document.querySelectorAll('div.results div.video-list')[0];
		var videos = parent.querySelectorAll('div.video-item');
		var content = parent.innerHTML.replaceAll(/[ \t][ \t]+|\n\n+/g, '');
		pageWrite(content);
		parent.innerHTML = pageRead();
		pageClear();
	}

	/*End of BM Code */
})();
