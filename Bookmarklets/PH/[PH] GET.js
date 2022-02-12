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

	function pageClear() {
		var pages = Object.keys(localStorage).filter(x => x.match(/^page-\d+/));
		var count = pages.length;
		var page;
		for (var i = 0; i < count; i++) {
			page = 'page-' + (i + 1);
			localStorage.removeItem(page);
		}
	}

	function next() {
		if (document.querySelectorAll('li.page_next a').length > 0) {
			document.querySelector('li.page_next a').click();
		}
	}
	
	function main() {
	var parentId = getParent(document.URL);
	var parent = document.getElementById(parentId);
	var videos = parent.innerHTML.replaceAll(/[ \t][ \t]+|\n\n+/g, '');
	pageWrite(videos);
	setTimeout(next, 500);
	}
	
	/*End of BM Code */
})();
