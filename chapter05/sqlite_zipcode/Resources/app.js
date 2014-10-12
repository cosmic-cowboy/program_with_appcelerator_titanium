// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// インポート
var RegisterWin = require('ui/common/registerWindow');
var ZipcodeListWindow = require('ui/common/zipcodeListWindow');
var searchWindow = require('ui/common/searchWindow');

// タブグループ作成
var tabGroup = Titanium.UI.createTabGroup();

//
// 郵便番号登録画面
//
var registerWin = new RegisterWin();
var registerTab = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'登録',
    window:registerWin
});

//
// 郵便番号一覧画面
//
var zipcodeListWin = new ZipcodeListWindow();
var zipcodeListTab = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'一覧',
    window:zipcodeListWin
});

//
// 郵便番号検索画面
//
var searchWin = new searchWindow();
var searchTab = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'検索',
    window:searchWin
});

//
//  タブの追加
//
tabGroup.addTab(registerTab);
tabGroup.addTab(zipcodeListTab);
tabGroup.addTab(searchTab);

// タブグループを開く
tabGroup.open();
