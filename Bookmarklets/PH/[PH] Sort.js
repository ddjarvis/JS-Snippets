javascript: (function() {
	/* Start of BM Code */
	main();

	function getParent(url) {
		var path = parseURL(url).patharray;
		var id;
		switch (true) {
			case (path[0] == 'model'):
				id = 'mostRecentVideosSection';
				break;
			case (path[0] == 'pornstar'):
				id = 'claimedRecentVideoSection';
				break;
			case (path[0] == 'channels'):
				id = 'showAllChanelVideos';
				break;
			case (path[0] == 'playlist'):
				id = 'videoPlaylist';
				break;
			case (path[0] == 'categories'):
			case (path[0] == 'video' && (parseURL(url).searchObject.c ? true : false)):
				id = 'videoCategory';
				break;
			case (path[0] == 'video' && path[1] == 'incategories'):
				id = 'incategoryVideos';
				break;
			case (path[0] == 'video' && path[1] == 'search'):
				id = 'videoSearchResult';
				break;
		}
		return id;
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

	function getDuration(video) {
		var duration = video.querySelector('var.duration').innerText;
		var durationArr = duration.split(':').reverse().map(x => parseInt(x.replace(/^0+(?=[1-9])/, '')));
		var length = 0;
		durationArr.forEach((x, y) => length += x * (60 ** y));
		return length;
	}

	function main() {
		var parentId = getParent(document.URL);
		var parent = document.getElementById(parentId);
		var selector = '#' + parentId + ' li.pcVideoListItem';
		var videos = document.querySelectorAll(selector);
		var sorted = new DocumentFragment();
		var discard = new DocumentFragment();
		var rank = [];
		var premSelector = 'i.premiumIcon[data-title="Premium Video"]';
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
