function BumonAddWindow() {

	var bumonAddWin = Ti.UI.createWindow({
		backgroundColor:'#fff',
		title:L('bumon_add')
	});


	// 部門名ラベル
	var bumonLabel = Ti.UI.createLabel({
		color:'#999',
		top:0,
		text:L('bumon_name'),
		textAlign:'center',
		width:'auto'
	});
	bumonAddWin.add(bumonLabel);

	// 部門名テキストフィールド
	var bumonTextField = Ti.UI.createTextField({
		value:'',
		hintText:L('hint_bumon_name'),
		top:45,
		width:'60%',
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_BEZEL
	});
	bumonAddWin.add(bumonTextField);

	// 部門名登録ボタン
	var addButton = Ti.UI.createButton({
		title:L('button_add'),
		top:90,
		width:'80',
		left:'70'
	});
	addButton.addEventListener('click', function (event) {
		if(bumonTextField.value.length===0){
			alert("部門名を入力してください");
			bumonTextField.focus();
			return false;
		}
		var db = Ti.Database.open('sampleDB');
		try{
			db.execute('CREATE TABLE IF NOT EXISTS bumontb (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
			db.execute('INSERT INTO bumontb(name) VALUES (?)', bumonTextField.value);
		} catch(e) {
			Ti.API.info(e);
		}
		db.close();
		Ti.App.fireEvent('updateTables');
		MyApp.navwin.closeWindow(bumonAddWin, {animated:true});
	});

	bumonAddWin.add(addButton);



	return bumonAddWin;
}

module.exports = BumonAddWindow;
