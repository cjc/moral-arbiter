var keywordlist;
var keywordelem = document.getElementById("tn15plotkeywords");
if (keywordelem != null) {
	if (keywordelem.nextElementSibling != null) {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", document.location.href + "keywords", true);
			xhr.send();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					keywordlist= jQuery.map($(".keyword a", xhr.responseText),function (a) {return a.innerText;} )
					chrome.extension.sendRequest({message: "ProcessKeywords", data: keywordlist});	
				}
			}
	} else {
		keywordlist = jQuery.map($("a", keywordelem.innerHTML),function (a) {return a.innerText;} )
		chrome.extension.sendRequest({message: "ProcessKeywords", data: keywordlist });
	}
}
