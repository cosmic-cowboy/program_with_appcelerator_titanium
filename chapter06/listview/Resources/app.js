// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


// タブグループ作成
var tabGroup = Titanium.UI.createTabGroup();

// シンプルなListView
var listViewWindow = Titanium.UI.createWindow({
    title:'ListViewの見本',
    backgroundColor:'#fff'
});

var SimpleListView = require('ui/common/simpleListView');
var simpleList = new SimpleListView();
listViewWindow.add(simpleList);
var listViewTab = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'シンプルなListView',
	window:listViewWindow
});

// タブ追加
tabGroup.addTab(listViewTab);

// タブを開く
tabGroup.open();
