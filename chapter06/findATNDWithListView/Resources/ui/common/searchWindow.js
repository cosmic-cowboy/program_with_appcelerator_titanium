function searchWindow() {

	var searchWin = Titanium.UI.createWindow({
		title:'ATND検索',
		backgroundColor:'#fff'
	});

	var searchLabel = Titanium.UI.createLabel({
		color:'#999',
		top:10,
		text:'キーワードを入力してください',
		textAlign:'center',
		width:'auto'
	});

	searchWin.add(searchLabel);

	// キーワードを入力するテキストフィールド
	var searchTextField = Titanium.UI.createTextField({
		value:'',
		hintText: 'iOSなどと入力してください',
		top:35,
		width:'70%',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		autocapitalization:false
	});
	searchWin.add(searchTextField);
	// windowのフォーカス取得時にフォーカスを与える
	searchWin.addEventListener("focus", function(e) {
		searchTextField.focus();
	});

	// HTTP通信を開始するボタン
	var searchButton = Titanium.UI.createButton({
		title:'検索',
		top:75,
		width:'100',
		height: '30',
	});

	searchButton.addEventListener('click',function(e) {
		findword = searchTextField.value;
		if (findword.length === 0 ) {
			alert( "検索ワードを入力してください" );
			return false;
		}
		Ti.App.fireEvent('updateTables');
		tabGroup.setActiveTab(1);
	});

	searchWin.add(searchButton);
	return searchWin;
}

module.exports = searchWindow;