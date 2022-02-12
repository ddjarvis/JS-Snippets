javascript: (function() {
	/* Start of BM Code */

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

	function getDuration(video) {
		if(video.querySelectorAll('span.l').length==0){return 0;}
		var durationRaw = video.querySelector('span.l').innerText;
		var durationM = parseInt(durationRaw.match(/\d+(?=m)/)[0]);
		var length = durationM*60;
		return length;
	}

	function next() {
	  var next = document.querySelectorAll('li.next:not(.disabled) a');
		if (next.length>0) {
			next[0].click();
		}
	}

	function get() {
		var parent = document.querySelectorAll('div.results div.video-list')[0];
		var videos = parent.querySelectorAll('div.video-item');
		var content = parent.innerHTML.replaceAll(/[ \t][ \t]+|\n\n+/g, '');
		pageWrite(content);
		setTimeout(next, 500);
	}

	function set() {
		var parent = document.querySelectorAll('div.results div.video-list')[0];
		var videos = parent.querySelectorAll('div.video-item');
		var content = parent.innerHTML.replaceAll(/[ \t][ \t]+|\n\n+/g, '');
		pageWrite(content);
		parent.innerHTML = pageRead();
		pageClear();
	}

	function sort() {
		var parent = document.querySelectorAll('div.results div.video-list')[0];
		var videos = parent.querySelectorAll('div.video-item');
		var sorted = new DocumentFragment();
		var discard = new DocumentFragment();
		var rank = [];
		
		videos.forEach((x, index) => {
			var length = getDuration(x);
			x.dataset.length = length;
			rank.push({
				index,
				length
			})
		});
		rank = rank.sort((a, b) => (a.length < b.length) ? 1 : -1);
		rank.forEach(x => sorted.appendChild(videos[x.index]));
		parent.appendChild(sorted);
	}

	/*End of BM Code */
})();
