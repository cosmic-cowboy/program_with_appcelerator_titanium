function searchWindow () {
	
	// 郵便番号登録画面を表示するWindow
	var searchWin = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: "郵便番号検索"
	});

	// // 担当者登録ページであることを表示するLabel
	// var repAddLabel = Ti.UI.createLabel({
	// 	color:'#999',
	// 	top:10,
	// 	text:L('tanto_name'),
	// 	textAlign:'center',
	// 	width:'auto'
	// });
	// searchWin.add(repAddLabel);

	// // 担当者入力フィールド
	// var repAddTextField = Ti.UI.createTextField({
	// 	value:'',
	// 	hintText: L('hint_tanto_name'),
	// 	top:45,
	// 	width:'60%',
	// 	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL
	// });
	// searchWin.add(repAddTextField);

	// 登録ボタン
	var searchButton = Ti.UI.createButton({
		title:'郵便番号登録',
		top:90,
		width:'100',
		left:110
	});

	// // 担当者登録処理
	// repAddButton.addEventListener('click',function (event) {

	// 	// バリデーション
	// 	if(repAddTextField.value.length === 0){
	// 		alert('担当者を入力してください');
	// 		repAddTextField.focus();
	// 		return false;
	// 	}

	// 	// DBへの登録処理
	// 	// データベースをオープン
	// 	var db = Ti.Database.open('sampleDB');
	// 	try{
	// 		// テーブルがなければテーブルを作成
	// 		db.execute('CREATE TABLE IF NOT EXISTS representative(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT)');
	// 		// 登録処理
	// 		db.execute('INSERT INTO representative(name) VALUES(?)', repAddTextField.value);

	// 	} catch(error){
	// 		Ti.API.info(error);
	// 	}
	// 	// データベースをクローズ
	// 	db.close();

	// 	// あらかじめ設定されているイベントを呼び出す
	// 	Ti.App.fireEvent('updateTables');
	// 	// 登録処理が終わったら、ページを閉じる
	// 	searchWin.close({animated:true});
	// });

	searchWin.add(searchButton);

	return searchWin;
}

// 関数をエクスポート
module.exports = searchWindow;