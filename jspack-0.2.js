function injectFn(fnarray)
{

	var injectId = 'myInjectedScript',
		injectedScript = document.getElementById(injectId),
		savedFunctions='',
		i, x = fnarray.length,
		newfn, fnstring='',
		regex = /(?<=^ *)(function [\w\d_]+)\(.*\)(?!;)/,
		target,	element, node;

	if(injectedScript)
	{
		savedFunctions = injectedScript.innerText;
	}

	for(i=0;i<x;i++)
	{
		newfn = (''+fnarray[i]).match(regex)[1];
		if(savedFunctions.includes(newfn)){continue;}
		fnstring += '\n' + fnarray[i] + '\n';
	}

	if(!injectedScript)
	{
		target = document.head;
		targetB = document.body;
		element = document.createElement('script');
		node = document.createTextNode(fnstring);
		element.appendChild(node);
		element.id = injectId;
		
		target.appendChild(element);
		
		element.id = injectId+'Body';
		targetB.appendChild(element);
	}
	else
	{
		node = document.createTextNode(fnstring);
		injectedScript.appendChild(node);
	}
}

function copyText(v_input) {
	var v_textArea = document.createElement("textarea");
	v_textArea.value = v_input;
	document.body.appendChild(v_textArea);
	v_textArea.select();
	document.execCommand("copy");
	document.body.removeChild(v_textArea);
}

function fileSafe(input)
{
	var proc = input, output;
	proc = proc.replace(/( +<+ +(?!.*>))|((?<!<.*) +>+ +)|( +:+ +)/g," - ");
	proc = proc.replace(/([?*"]+)/g,"");
	proc = proc.replace(/(<+(?!.*>))|((?<!<.*)>+)|((?<!<.*)(?<=>.*)>)|([/\\|]+)|(:+)/g," ");
	proc = proc.replace(/</g,"(").replace(/>/g,")");
	proc = proc.replace(/( {2,})/g," ");
	output = proc.trim();
	return output;
}

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
