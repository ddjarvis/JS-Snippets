javascript: (function() {
	var fPrefix = "[YT] ";
	var fPath = "Downloads\\Downloads from IDM\\Music\\";
	var fExt = ".mp3";

	var videoId = document.URL.match(/(?<=[?&]v=)\w+[^&\s]/)[0];
	var videoId_tag = " ([videoid-" + videoId + "])";
	var videoTitle_raw = document.querySelector("h1.title").innerText.trim();
	var videoTitle_clean = cleanString(videoTitle_raw);
	var videoCreator_raw = document.querySelector("div#text-container.ytd-channel-name").innerText.trim();
	var videoCreator_clean = cleanString(videoCreator_raw).trim();

	var fName = fPrefix + videoCreator_raw + " -- " + videoTitle_clean + videoId_tag + fExt;
	var savePath = fPath + fName;

	document.querySelector('input#search').value = savePath;
	copyText(document.URL);

	var grabberLink = "https://ytmp3.cc/en13/";
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
})();
