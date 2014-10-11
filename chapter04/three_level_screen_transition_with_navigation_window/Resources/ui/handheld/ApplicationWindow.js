//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies

	var BumonAddWindow = require('ui/common/BumonAddWindow');
	var BumonView = require('ui/common/BumonView');

	// 部門一覧画面
	var bumonWin = Ti.UI.createWindow({
		backgroundColor:'silver',
		title : L('bumon_view')
	});

	// 部門一覧画面のview
	var bumonView = new BumonView();
	bumonWin.add(bumonView);

	// 部門登録ボタン
	var addBtn = Ti.UI.createButton({
		systemButton:Ti.UI.iPhone.SystemButton.ADD
	});
	var bumonAddWin = new BumonAddWindow();
	addBtn.addEventListener('click', function () {
		MyApp.navwin.openWindow(bumonAddWin,{animated:true});
	});
	bumonWin.rightNavButton = addBtn;


	// 部門一覧ボタン
	var bumonBtn = Ti.UI.createButton({
		title:L('bumon'),
		top:10,
		width:'50%'
	});
	bumonBtn.addEventListener('click', function () {
		MyApp.navwin.openWindow(bumonWin,{animated:true});
	});


	// 商品登録画面
	var syohinWin = Ti.UI.createWindow({
		backgroundColor:'orange',
		title : L('syohin')
	});

	// 商品登録ボタン
	var syohinBtn = Ti.UI.createButton({
		title:L('syohin'),
		top:20,
		width:'50%'
	});
	syohinBtn.addEventListener('click', function () {
		MyApp.navwin.openWindow(syohinWin,{animated:true});
	});


	// 担当登録画面
	var tantoWin = Ti.UI.createWindow({
		backgroundColor:'pink',
		title : L('tanto')
	});
	// 担当登録ボタン
	var tantoBtn = Ti.UI.createButton({
		title:L('tanto'),
		top:20,
		width:'50%'
	});
	tantoBtn.addEventListener('click', function () {
		MyApp.navwin.openWindow(tantoWin,{animated:true});
	});

	// メニュー画面
	var menuWin = Ti.UI.createWindow({
		title:L('menu'),
		backgroundColor:'#fff',
		layout:'vertical'
	});

	MyApp.navwin = Ti.UI.iOS.createNavigationWindow({
		window:menuWin
	});
	// 各画面に遷移するボタンを設置
	// 最後に設置しないと正しく表示されない
	menuWin.add(bumonBtn);
	menuWin.add(syohinBtn);
	menuWin.add(tantoBtn);
	return MyApp.navwin;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
