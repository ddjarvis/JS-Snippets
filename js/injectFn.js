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
		element = document.createElement('script');
		element.id = injectId;
		target.appendChild(element);
		injectedScript = document.getElementById(injectId);
	}

	node = document.createTextNode(fnstring);
	injectedScript.appendChild(node);
}
