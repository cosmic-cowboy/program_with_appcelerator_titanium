// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


// タブグループ作成
var tabGroup = Titanium.UI.createTabGroup();

//
// シンプルなListView
//
// Window
var listViewWindow = Titanium.UI.createWindow({
    title:'ListViewの見本',
    backgroundColor:'#fff'
});
// View
var SimpleListView = require('ui/common/simpleListView');
var simpleList = new SimpleListView();
listViewWindow.add(simpleList);
// タブ
var listViewTab = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'シンプル',
	window:listViewWindow
});

//
// iOS組み込みテンプレート
// 
// Window
var iOSViewWindow = Titanium.UI.createWindow({
    title:'iOS組み込みテンプレート',
    backgroundColor:'#fff'
});
// View
var IOSBuildInTemplateView = require('ui/common/iOSBuildInTemplateView');
var iOSView = new IOSBuildInTemplateView();
iOSViewWindow.add(iOSView);
// タブ
var iOSViewTab = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'iOS',
	window:iOSViewWindow
});


// タブ追加
tabGroup.addTab(listViewTab);
tabGroup.addTab(iOSViewTab);

// タブを開く
tabGroup.open();
