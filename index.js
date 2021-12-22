function MyFunction() {


	var urlReceved = document.getElementById('url-vlaue').value;

	const url = new Object();
	var urlpro = urlReceved.split('//');
	if (urlpro[0] == "http:" || urlpro[0] == "https:") {
		url.protocol = urlpro[0] + "//";
		url.host = urlpro[1].split('/')[0];
		urlpro = url.protocol + url.host;
		url.path = urlReceved.split(urlpro)[1];
		url.RP = urlReceved.split(urlpro)[1];

		url.Query = url.RP.split('?')[1];

		url.Domain = url.host.split('.')[1] + '.' + url.host.split('.')[2];

		url.SLD = url.host.split('.')[0];

		url.TLD = url.host.split('.')[2];

		document.getElementById("url-splitsid").innerHTML = "<li>" + "protocol:" + "<span>" + url.protocol + "<span/>" + "<li>" +
			"<li>" + "  Host:" + "<span>" + url.host + "<span/>" + "<li>" + "<li>" + "Second Level Domain:" + "<span>" + url.SLD + "<span/>" + "<li>" + "<li>" + "Top Level Domain:" + "<span>" + url.TLD + "<span/>" + "<li>" +
			"<li>" + " Domain:" + "<span>" + url.Domain + "<span/>" + "<li>" + "<li>" + "Resource Path:" + "<span>" + url.RP + "<span/>" + "<li>" + "<li>" + "Query Strings:" + "<span>" + url.Query + "<span/>" + "<li>";


	}


}