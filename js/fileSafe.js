function fileSafe(input)
{
	var proc = input, output;
	proc = proc.replace(/( +<+ +(?!.*>))|((?<!<.*) +>+ +)|(( ?:+ +)|( +:+ ?)|( +:+ +))/g," - ");
	proc = proc.replace(/([?*"]+)/g,"");
	proc = proc.replace(/(<+(?!.*>))|((?<!<.*)>+)|((?<!<.*)(?<=>.*)>)|([\/\\|]+)|(:+)/g," ");
	proc = proc.replace(/</g,"(").replace(/>/g,")");
	proc = proc.replace(/( {2,})/g," ");
	output = proc.trim();
	return output;
}
