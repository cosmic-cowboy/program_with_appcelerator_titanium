
Ti.App.addEventListener('toLogin', function (e) {
	$.index.setActiveTab(0);
});


Ti.App.addEventListener('toUserAdd', function (e) {
	$.index.setActiveTab(1);
});


Ti.App.addEventListener('toView', function (e) {
	$.index.setActiveTab(2);
});

$.index.open({animated:true});
