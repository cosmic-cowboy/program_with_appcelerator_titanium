//Application Window Component Constructor
function ApplicationTabGroup() {

	var RepresentativeAddWindow = require('ui/common/representativeAddWindow');
	var RepresentativeViewWindow = require('ui/common/representativeViewWindow');

	// タブグループ
	var tabGroup = Ti.UI.createTabGroup();

	// 部門一覧
	var sectionWin = Ti.UI.createWindow({
		backgroundColor:'silver',
		title:L('bumon_view')
	});
	var sectionTab = Ti.UI.createTab({
		icon:'KS_nav_views.png',
		title: L('bumon'),
		window:sectionWin
	});

	// 商品一覧
	var productWin = Ti.UI.createWindow({
		backgroundColor:'orange',
		title:L('syohin_view')
	});
	var productTab = Ti.UI.createTab({
		icon:'KS_nav_views.png',
		title: L('syohin'),
		window:productWin
	});

	// 担当一覧
	var repViewWindow = new RepresentativeViewWindow();
	var repTab = Ti.UI.createTab({
		icon:'KS_nav_views.png',
		title: L('tanto'),
		window:repViewWindow
	});
	// 
	repViewWindow.containingTab = repTab;

	// 担当者作成ボタン
	var repAddBtn = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.ADD
	});

	repAddBtn.addEventListener('click', function(){
		var repAddWindow = new RepresentativeAddWindow();
		repTab.open(repAddWindow, {animated:true});
	});
	repViewWindow.rightNavButton = repAddBtn;

	// タブグループに登録
	tabGroup.addTab(sectionTab);
	tabGroup.addTab(productTab);
	tabGroup.addTab(repTab);

	return tabGroup;
}

//make constructor function the public component interface
module.exports = ApplicationTabGroup;
