function representativeViewWindow () {

	// 担当者を取得し、Viewとして表示する
	var repViewWin = Ti.UI.createWindow({
		title : L('tanto_view')
	});
	var repView = Ti.UI.createView();

	// グローバルイベントを追加
	Ti.App.addEventListener('updateTables', function (event) {
		tableView.setData(getData());
	});

	// テーブルビューの生成
	var tableView = Ti.UI.createTableView();
	tableView.setData(getData());
	repView.add(tableView);

	tableView.addEventListener('click',function (event) {
		// TODO 編集ページ
	});
	repViewWin.add(repView);
	
	return repViewWin;
}

// 関数をエクスポート
module.exports = representativeViewWindow;


// 担当者取得処理を追加
var getData = function () {

	// 担当者一覧
	var rowList = [];

	// データベースをオープン
	var db = Ti.Database.open('sampleDB');

	try{
		// 担当者テーブルがなければ作成
		db.execute('CREATE TABLE IF NOT EXISTS representative(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT)');
		// 担当者一覧取得
		var rs = db.execute('SELECT id, name FROM representative');
		while(rs.isValidRow()){
			var row = Ti.UI.createTableViewRow({
				title:rs.fieldByName('name'),
				rsId :rs.fieldByName('id')
			});

			rowList.push(row);
			rs.next();
		}
		// ResultSetをクローズ
		rs.close();

	} catch(error){
		Ti.API.info(error);
	}
	// データベースをクローズ
	db.close();

	return rowList;
};