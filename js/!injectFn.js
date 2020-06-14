function injectFn(fnarray)
{
	var injectId = 'myInjectedScript',
		d,db, injectedFn='',
		i, x = fnarray.length,
		newfn, fnstring='',
		fnNeedle = /(?<=^ *)(function [\w\d_]+)\(.*\)(?!;)/,
		target = [],
		nameTail = [],
		element, textNode, baseList;

	d = document.getElementById('myInjectedScriptHead');
	db = document.getElementById('myInjectedScriptBody');

	if(d)
	{
		injectedFn = d.innerText;
	}

	for(i=0;i<x;i++)
    {	
		newfn = (''+fnarray[i]).match(fnNeedle)[1];
		if(injectedFn.includes(newfn)){continue;}
		fnstring += '\n' + fnarray[i] + '\n';
    }
	
	if(!d)
    {
		target.push(document.head);
		target.push(document.body);
		nameTail.push('Head');
		nameTail.push('Body');
		element = document.createElement('script');
		textNode = document.createTextNode(fnstring);
	
		element.appendChild(textNode);
		baseList = 'myInjected ' + injectId;
		for(i=0;i<target.length;i++)
        {
			element.id = injectId+nameTail[i];
			element.classList = baseList + ' ' + injectId+nameTail[i];
			target[i].appendChild(element);
        }
    }
	if(d)
    {
		
    }
}
