
function BumonEditWindow(e) {

	var _id = e.rowData.rsId;
	var bumonEditWin = Ti.UI.createWindow({
		backgroundColor : '#fff',
		title : L('bumon_edit')
	});

	// 部門名ラベル
	var bumonLabel = Ti.UI.createLabel({
		color:'#999',
		top:10,
		text:L('bumon_name'),
		textAlign:'center',
		width:'auto'
	});
	bumonEditWin.add(bumonLabel);

	// 部門名テキストフィールド
	var bumonTextField = Ti.UI.createTextField({
		value:e.rowData.title,
		top:45,
		width:'60%',
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_BEZEL
	});
	bumonEditWin.add(bumonTextField);

	// 部門名更新ボタン
	var updateButton = Ti.UI.createButton({
		title:L('button_update'),
		top:90,
		width:'80',
		left:'70'
	});
	updateButton.addEventListener('click', function (event) {
		if(bumonTextField.value.length===0){
			alert("部門名を入力してください");
			bumonTextField.focus();
			return false;
		}
		var db = Ti.Database.open('sampleDB');
		try{
			db.execute('UPDATE bumontb SET name = ? WHERE id = ?', bumonTextField.value, _id);
		} catch(e) {
			Ti.API.info(e);
		}
		db.close();
		Ti.App.fireEvent('updateTables');
		MyApp.navwin.closeWindow(bumonEditWin, {animated:true});
	});

	bumonEditWin.add(updateButton);

	// 部門名削除ボタン
	var deleteButton = Ti.UI.createButton({
		title:L('button_delete'),
		top:90,
		width:'80',
		left:'160'
	});

	deleteButton.addEventListener('click', function (event) {
		
		var alertDialog = Ti.UI.createAlertDialog({
			title:'削除確認',
			message:'本当に削除しますか',
			buttonNames:['OK','キャンセル'],
			cancel:1
		});

		alertDialog.addEventListener('click', function (event) {
			if(event.index===0){

				var db = Ti.Database.open('sampleDB');
				try{
					db.execute('DELETE FROM bumontb WHERE id = ?', _id);
				} catch(e) {
					Ti.API.info(e);
				}
				db.close();
				Ti.App.fireEvent('updateTables');
				MyApp.navwin.closeWindow(bumonEditWin, {animated:true});
			}
		});

		alertDialog.show();
	});

	bumonEditWin.add(deleteButton);

	return bumonEditWin;
}

module.exports = BumonEditWindow;