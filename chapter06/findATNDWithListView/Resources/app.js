// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// タブグループ
var tabGroup = Titanium.UI.createTabGroup();


//
// 検索画面
//
var SearchWindow = require('ui/common/searchWindow');
var searchWin = new SearchWindow();
var searchTab = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'検索',
    window:searchWin
});

//
// 結果画面
//
var ResultListWindow = require('ui/common/resultListWindow');
var resultListWin = new ResultListWindow();
var resultListTab = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'結果',
    window:resultListWin
});

//  タブ追加
tabGroup.addTab(searchTab);
tabGroup.addTab(resultListTab);


// タブを開く
tabGroup.open();
