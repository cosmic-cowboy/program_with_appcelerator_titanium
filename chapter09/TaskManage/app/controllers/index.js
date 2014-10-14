$.index.addEventListener("open",function(e) {
	Alloy.Globals.currentTab = e.activeTab;
});
$.index.addEventListener("focus",function(e) {
	Alloy.Globals.currentTab = e.tab;
});
$.index.addEventListener("close", function () {
  $.destroy();
});

Alloy.Collections.task.fetch();

$.index.open();
