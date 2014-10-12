function zipcodeListWindow () {
	
	// 郵便番号一覧画面を表示するWindow
	var zipcodeListWin = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: "郵便番号一覧"
	});

	// 郵便番号一覧取得のグローバルイベント
	Ti.App.addEventListener('updateTables', function(){
		// zipcodeView.setData(getData());
	});

	// 郵便番号一覧
	var zipcodeView = Ti.UI.createTableView();
	// zipcodeView.setData(getData());
	zipcodeListWin.add(zipcodeView);

	return zipcodeListWin;
}

// 関数をエクスポート
module.exports = zipcodeListWindow;

var getData = function () {
	var rowList = [];
	var db = Ti.Database.open('zipdb');

	var rs = db.execute('SELECT id, zipcode, pref, city, town FROM ziptb');
	while(rs.isValidRow()){
		var pref = rs.fieldByName('pref');
		var city = rs.fieldByName('city');
		var town = rs.fieldByName('town');
		var address = pref + ' ' + city + ' ' + town;
		var row = Ti.UI.createTableViewRow({
			id:rs.fieldByName('id'),
			title:address
		});
		rowList.push(row);
		rs.next();
	}
	rs.close();
	db.close();
	return rowList;
};