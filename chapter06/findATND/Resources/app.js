// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// ATND検索タブ
//
var FindAtndWindow = require('ui/common/findAtndWindow');
var findAtndWin = new FindAtndWindow();
var findAtndTab = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'検索',
    window:findAtndWin
});

// よくないけど暫定
var atndDataView;
var findword = '';

//
// ATND検索結果タブ
//
var ATNDViewWindow = require('ui/common/atndViewWindow');
var atndViewWin = new ATNDViewWindow();
var atndViewTab = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'結果',
    window:atndViewWin
});

//
//  タブを追加
//
tabGroup.addTab(findAtndTab);
tabGroup.addTab(atndViewTab);


// open tab group
tabGroup.open();
