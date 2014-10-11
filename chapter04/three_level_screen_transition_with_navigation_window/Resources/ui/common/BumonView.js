function BumontView() {

	var BumonEditWindow = require('ui/common/BumonEditWindow');

	var bumonView = Ti.UI.createView();

	// グルーバルイベント
	Ti.App.addEventListener('updateTables', function (event) {
		tableView.setData(getData());
	});

	// テーブルビューの作成
	var tableView = Ti.UI.createTableView();
	tableView.setData(getData());
	bumonView.add(tableView);

	// TableViewの行クリックで編集画面
	tableView.addEventListener('click', function (e) {
		Ti.API.info(e.rowData.title);
		Ti.API.info(e.rowData.rsId);
		var bumonEditWin = BumonEditWindow(e);
		MyApp.navwin.openWindow(bumonEditWin,{animated:true});
	});

	return bumonView;
}

module.exports = BumontView;

function getData () {
	var db = Ti.Database.open('sampleDB');
	var rowList = [];

	try{
		db.execute('CREATE TABLE IF NOT EXISTS bumontb (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');

		var rs = db.execute('SELECT id, name FROM bumontb');
		while(rs.isValidRow()){
			var row = Ti.UI.createTableViewRow({
				title: rs.fieldByName('name'),
				rsId : rs.fieldByName('id')
			});
			rowList.push(row);
			rs.next();
		}
		rs.close();
	} catch(e) {
		Ti.API.info(e);
	}
	db.close();
	return rowList;
}
