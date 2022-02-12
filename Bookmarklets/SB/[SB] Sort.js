javascript: (function() {
	/* Start of BM Code */

	main();

	function getDuration(video) {
		if(video.querySelectorAll('span.l').length==0){return 0;}
		var durationRaw = video.querySelector('span.l').innerText;
		var durationM = parseInt(durationRaw.match(/\d+(?=m)/)[0]);
		var length = durationM*60;
		return length;
	}

	function main() {
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
