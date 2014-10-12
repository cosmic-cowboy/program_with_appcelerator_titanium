// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// タブグループの作成
var tabGroup = Titanium.UI.createTabGroup();


// 商品登録画面
var registerProduct = Titanium.UI.createWindow({
    title:'商品登録',
    backgroundColor:'#fff'
});
var registerProductTab = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'登録',
    window:registerProduct
});

var productButton = Ti.UI.createButton({
	title:"商品登録ボタン",
	top:90
});
});

registerProduct.add(productButton);

// 商品一覧画面
var productList = Titanium.UI.createWindow({
    title:'商品一覧',
    backgroundColor:'#fff'
});
var productListTab = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'一覧',
    window:productList
});

//
//  タブ登録
//
tabGroup.addTab(registerProductTab);
tabGroup.addTab(productListTab);


// タブグループを表示する
tabGroup.open();
