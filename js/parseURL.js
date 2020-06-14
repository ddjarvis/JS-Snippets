/*

-= Source =-
Title: Parsing URLs in JavaScript
Author: Cory LaViska (https://www.abeautifulsite.net/author/claviska)
Link: https://www.abeautifulsite.net/parsing-urls-in-javascript
Link (Archived): https://web.archive.org/web/20200614163246/https://www.abeautifulsite.net/parsing-urls-in-javascript

-= Description =-
This function takes a URL and returns its different components.

-= Syntax =-
parseURL(string)

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
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    };
}
