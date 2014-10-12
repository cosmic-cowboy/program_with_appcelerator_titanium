function representativeEditWindow (event) {
	
	var _id = event.rowData.rsId;


	// 担当者登録画面を表示するWindow
	var repEditwindow = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: L('tanto_edit')
	});

	// 編集画面のラベル
	var editLabel = Ti.UI.createLabel({
		color:'#999',
		top:10,
		text:L('tanto_name'),
		textAlign:'center',
		width:'auto'
	});
	repEditwindow.add(editLabel);

	// 編集用テキストフィールド
	var editTextField = Ti.UI.createTextField({
		value:event.rowData.title,
		top:45,
		width:'60%',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL
	});
	repEditwindow.add(editTextField);

	// 編集ボタン、編集処理
	var editButton = Ti.UI.createButton({
		title:L('button_update'),
		top:90,
		width:'80',
		left:70
	});
	editButton.addEventListener('click', function (editButtonEvent) {
		// バリデーション
		if(editTextField.value.length === 0 ){
			alert('担当者を入力してください');
			editTextField.focus();
			return false;
		}
		// DBへの登録
		var db = Ti.Database.open('sampleDB');
		try{
			db.execute('UPDATE representative SET name = ? WHERE id = ?', editTextField.value, _id);
		} catch(error){
			Ti.API.info(error);
		}
		db.close();

		Ti.App.fireEvent('updateTables');
		repEditwindow.close({animated:true});

	});
	repEditwindow.add(editButton);

	// 削除ボタン、削除処理
	var deleteButton = Ti.UI.createButton({
		title:L('button_delete'),
		backgroundColor:'#777',
		top:90,
		width:'80',
		left:160
	});
	deleteButton.addEventListener('click', function (deleteButtonEvent) {
		var deleteAlert = Ti.UI.createAlertDialog({
			title : "担当者削除",
			message : "担当者を削除してよろしいでしょうか？",
			buttonNames : ['OK','キャンセル'],
			cancel : 1
		});

		deleteAlert.addEventListener('click', function (deleteAlertEvent) {
			if(deleteAlertEvent.index === 0){
				var db = Ti.Database.open('sampleDB');
				try{
					db.execute('DELETE FROM representative WHERE id = ?', _id);
				} catch(error){
					Ti.API.info(error);
				}
				db.close();
				Ti.App.fireEvent('updateTables');
				repEditwindow.close({animated:true});
			}
		});
		deleteAlert.show();

	});
	repEditwindow.add(deleteButton);

	return repEditwindow;
}

// 関数をエクスポート
module.exports = representativeEditWindow;