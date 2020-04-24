javascript: (function() {
	var fPrefix = "[YT] ";
	var fPath = "Downloads\\Downloads from IDM\\Youtube\\";
	var fExt = ".mp4";

	var videoId = getYTId();
	var videoId_tag = " ([ytid-" + videoId + "])";
	var videoTitle_raw = document.querySelector("h1.title").innerText.trim();
	var videoTitle_clean = cleanString(videoTitle_raw);
	var videoCreator_raw = document.querySelector("div#text-container.ytd-channel-name").innerText.trim();
	var videoCreator_clean = cleanString(videoCreator_raw).trim();

	var fName = fPrefix + videoCreator_raw + " -- " + videoTitle_clean + videoId_tag;
	var savePath = fPath + fName;

	copyText(fName);

  var grabberBase = "https://www.savethevideo.com/download?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D"
	var grabberLink = grabberBase + videoId;
	var win = window.open(grabberLink);
	win.focus();


	function copyText(inputString) {
		var jscbta = document.createElement("textarea");
		jscbta.value = inputString;
		document.body.appendChild(jscbta);
		jscbta.select();
		document.execCommand("copy");
		document.body.removeChild(jscbta);
	}


	function cleanString(var_input) {
		console.log(var_input);
		var var_cleaning;
		var var_output;
		var_cleaning = var_input;
		var_cleaning = var_cleaning.replace(" : ", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace(": ", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace(" :", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace(":", "");
		var_cleaning = var_cleaning.replace(" < ", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace("< ", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace(" <", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace("<", "");
		var_cleaning = var_cleaning.replace(" > ", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace("> ", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace(" >", "zxzINVALIDzxz");
		var_cleaning = var_cleaning.replace("zxzINVALIDzxz", " - ");
		var_cleaning = var_cleaning.replace(">", "");
		var_cleaning = var_cleaning.replace("/", "");
		var_cleaning = var_cleaning.replace("\\", "");
		var_cleaning = var_cleaning.replace("|", "");
		var_cleaning = var_cleaning.replace("?", "");
		var_cleaning = var_cleaning.replace("*", "");
		var_cleaning = var_cleaning.replace("\"", "");
		var_cleaning = var_cleaning.replace("  ", " ");
		var_output = var_cleaning;
		return var_output;
	}
  
  function getYTId(x=0)
{
	if(x==0)
    {
		x = document.URL;
    }
	var a = x.match(/^(?:[\w\d]+\:\/\/)?(?:(?:(?:[\w\d]+\.)*(?:youtube)(?:\.[\w\d]+)+\/watch\?v=)|(?:youtu\.be\/))([^\?&]+)(?:[\?&].*)?/);
	if(a===null){return null;}
	x = a[1];
	return x;
}
})();
