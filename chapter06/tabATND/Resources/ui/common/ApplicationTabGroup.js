function ApplicationTabGroup() {

	// import
	var MasterView = require('ui/common/MasterView');
	var DetailView = require('ui/common/DetailView');
	var WebsiteView = require('ui/common/WebView');

	// タブグループ作成
	var tabGroup = Ti.UI.createTabGroup();
	
	// Viewの作成
	var masterView = new MasterView();
	var detailView = new DetailView();
	var websiteView = new WebsiteView();

	// イベント一覧ページ
	var masterContainerWindow = Ti.UI.createWindow({
		title:'イベント一覧'
	});
	masterContainerWindow.add(masterView);
	// イベント一覧タブ
	var masterTab = Ti.UI.createTab({
		title: 'イベント一覧',
		icon: '/KS_nav_ui.png',
		window: masterContainerWindow
	});

	// イベント詳細ページ
	var detailContainerWindow = Ti.UI.createWindow({
		title:'イベント詳細'
	});
	detailContainerWindow.add(detailView);
	// イベント詳細タブ
	var detailTab = Ti.UI.createTab({
		title: 'イベント詳細',
		icon: '/KS_nav_views.png',
		window: detailContainerWindow
	});

	// イベントページ（Webサイト）
	var websiteContainerWindow = Ti.UI.createWindow({
		title:'イベントページ'
	});
	websiteContainerWindow.add(websiteView);


	// イベント一覧の項目が選択された際のイベント
	// イベント一覧からイベント詳細へ遷移する
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('editItem',e);
		detailTab.open(detailContainerWindow);
		tabGroup.activeTab = 1;
	});

	// イベント詳細が選択された際のイベント
	// イベント詳細からWebサイトへ遷移する
	detailView.addEventListener('toWebsite', function(e) {
		websiteView.fireEvent('dispWeb',e);
		detailTab.open(websiteContainerWindow);
	});

	// タブを追加
	tabGroup.addTab(masterTab);
	tabGroup.addTab(detailTab);

	return tabGroup;
}

// export
module.exports = ApplicationTabGroup;