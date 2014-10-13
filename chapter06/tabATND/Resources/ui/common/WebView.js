function WebView() {
	var view = Ti.UI.createView();
	 
	var webView = Ti.UI.createWebView({
	});
	view.add(webView);
	view.addEventListener('dispWeb', function(e) {
		webView.url = e.url;
	});
	
	return view;
}

// export
module.exports = WebView;