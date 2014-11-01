// getの処理を行います
// requestオブジェクトには
// {
//	url:url,
//	onload:onload,
//	onerror:onerror
// }

exports.get = function (request) {

	var client = Ti.Network.createHTTPClient({
		onload  : request.onload,
		onerror : request.onerror,
		timeout : 5000
	});

	client.open("GET",request.url);
	client.send();

};