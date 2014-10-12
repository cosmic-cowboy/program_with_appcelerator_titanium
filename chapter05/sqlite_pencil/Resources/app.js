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

// 商品登録ボタン
var productButton = Ti.UI.createButton({
	title:"商品登録ボタン",
	top:90
});
productButton.addEventListener('click', function () {
	loadData();
	Ti.App.fireEvent('updateTables');
	tabGroup.setActiveTab(productListTab);
});

// 商品テーブル削除ボタン
var deleteTableButton = Ti.UI.createButton({
	title:"商品テーブル削除ボタン",
	top:140
});
deleteTableButton.addEventListener('click', function () {
	deleteTable();
	// テーブルを消したのにまたテーブルを作成するという状態になってしまいますが
	Ti.App.fireEvent('updateTables');
	// データが削除されるまで待ってから表示するのがよいのですが
	tabGroup.setActiveTab(productListTab);
});

registerProduct.add(productButton);
registerProduct.add(deleteTableButton);

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

// グローバルイベントを追加
Ti.App.addEventListener('updateTables', function (event) {
	tableView.setData(getData());
});

// テーブルビューの生成
var tableView = Ti.UI.createTableView();
tableView.setData(getData());
productList.add(tableView);


//
//  タブ登録
//
tabGroup.addTab(registerProductTab);
tabGroup.addTab(productListTab);


// タブグループを表示する
tabGroup.open();


// 商品登録処理
function loadData() {
		
	var db = Ti.Database.open('product_pencil');
	// テーブル定義
	db.execute('CREATE TABLE IF NOT EXISTS pencil(id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT, name TEXT, price NUMERIC, size REAL)');

	// トランザクション開始
	db.execute('BEGIN');

	// データ登録
	db.execute('INSERT INTO pencil(code, name, price, size) VALUES(?,?,?,?)','PS-P100 DB-1P', '鉛筆シャープ 0.9㎜ ダークブルー', '180円', 'φ10・139mm');
	db.execute('INSERT INTO pencil(code, name, price, size) VALUES(?,?,?,?)','PS-P100 DR-1P', '鉛筆シャープ 0.9㎜ ワインレッド', '180円', 'φ10・139mm');
	db.execute('INSERT INTO pencil(code, name, price, size) VALUES(?,?,?,?)','PS-P101 D-1P', '鉛筆シャープ 1.3㎜ 黒', '180円', 'φ10・139mm');
	db.execute('INSERT INTO pencil(code, name, price, size) VALUES(?,?,?,?)','PS-P101 DG-1P', '鉛筆シャープ 1.3㎜ ダークグリーン', '180円', 'φ10・139mm');

	// トランザクション終了
	db.execute('COMMIT');

	db.close();
}

// テーブル削除
function deleteTable() {
	var db = Ti.Database.open('product_pencil');
	db.execute('DROP TABLE pencil');
	db.close();
	db.remove();
}

// 商品登録処理
function getData() {
		
	var rowList = [];
	var db = Ti.Database.open('product_pencil');
	// テーブル定義
	db.execute('CREATE TABLE IF NOT EXISTS pencil(id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT, name TEXT, price NUMERIC, size REAL)');

	var rs = db.execute('SELECT id, code, name, price, size FROM pencil');

	while(rs.isValidRow()){
		var row = Ti.UI.createTableViewRow({
			rsId : rs.fieldByName('id'),
			title : rs.fieldByName('name')
		});
		rowList.push(row);
		rs.next();
	}

	rs.close();
	db.close();

	return rowList;
}
