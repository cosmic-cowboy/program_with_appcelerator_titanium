function registerWindow () {
	
	// 郵便番号登録画面を表示するWindow
	var registerWin = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: "郵便番号登録"
	});

	// 登録ボタン
	var registerButton = Ti.UI.createButton({
		title:'郵便番号登録',
		top:90
	});

	// 登録イベント
	registerButton.addEventListener('click',function (event) {
		// データをインポート
		var db = Ti.Database.install('etc/zipDB','zipdb');
		var rs = db.execute('SELECT id, zipcode, pref, city, town FROM ziptb');
		while(rs.isValidRow()){
			console.log(rs.fieldByName('id'));
			console.log(rs.fieldByName('zipcode'));
			console.log(rs.fieldByName('pref'));
			console.log(rs.fieldByName('city'));
			console.log(rs.fieldByName('town'));
			rs.next();
		}
		rs.close();
		db.close();
	});

	registerWin.add(registerButton);

	return registerWin;
}

// 関数をエクスポート
module.exports = registerWindow;