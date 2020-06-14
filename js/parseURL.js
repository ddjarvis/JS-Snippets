/*
		~~==-== function parseURL() ==-==~~

	-= Source =-
	Title: Parsing URLs in JavaScript
	Author: Cory LaViska (https://www.abeautifulsite.net/author/claviska)
	Link: https://www.abeautifulsite.net/parsing-urls-in-javascript
	Link (Archived): https://web.archive.org/web/20200614163246/https://www.abeautifulsite.net/parsing-urls-in-javascript


	-= Description =-
	This function takes a URL and returns its different components.

	-= Modifications =-
	> Added return value [parseURL().origin]

	-= Syntax =-
	parseURL(string)

	Parameters:
		<string> - A JavaScript string. Preferably a valid URL.

	Return value(s):
		<parseURL.hash>
		<parseURL.host>
		<parseURL.origin>
		<parseURL.hostname>
		<parseURL.pathname>
		<parseURL.port>
		<parseURL.protocol>
		<parseURL.search>
		<parseURL.searchObject>


	-= Example(s) =-

	Example 1:

	var output = parseURL('https://example.com:8080/path?query=value#hashstring');

	console.log(output.protocol);		// [protocol] :  https:
	console.log(output.origin);			// [origin] :  https://example.com:8080
	console.log(output.host);			// [host] :  example.com:8080
	console.log(output.hostname);		// [hostname] :  example.com
	console.log(output.port);			// [port] :  8080
	console.log(output.pathname);		// [pathname] :  /path
	console.log(output.search);			// [search] :  ?query=value
	console.log(output.searchObject);	// [searchObject] :  [object Object]
	console.log(output.hash);			// [hash] :  #hashstring
*/


function parseURL(url) {
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    // Let the browser do the work
    parser.href = url;
    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
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
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    };
}
