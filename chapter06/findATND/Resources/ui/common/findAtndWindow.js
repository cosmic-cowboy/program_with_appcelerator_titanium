function findAtndWindow(){

	// ATND検索画面を表示するWindow
	var findAtndWin = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: "ATND検索"
	});

	// テキストフィールド
	var findTextField = Ti.UI.createTextField({
		value:'',
		hintText: 'androidなどと入力してください',
		top:35,
		width:'70%',
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		autocapitalization:false
	});

	findAtndWin.add(findTextField);
	findAtndWin.addEventListener('focus', function (event) {
		findTextField.focus();
	});

	// 検索ボタン
	var findButton = Ti.UI.createButton({
		title:'検索',
		top:75,
		width:'100',
		height: '30'
	});

	findButton.addEventListener('click', function(){
		var keyword = findTextField.value;
		if(keyword.length === 0){
			alert('検索ワードを入力してください');
			return false;
		}
		// イベントサーチAPIを発行
		loadData(keyword);
	});

	findAtndWin.add(findButton);
	return findAtndWin;
}

module.exports = findAtndWindow;

var loadData = function(keyword) {

	var url = 'http://api.atnd.org/events/?keyword=' + encodeURIComponent(keyword) +'&count=7&format=json';

	// HTTP通信を行うHTTPClientオブジェクトを生成
	var client = Ti.Network.createHTTPClient({
		// 正常な応答があたっときの処理
		onload  : function(e) {
			var json = JSON.parse(this.responseText);
			Ti.App.fireEvent('updateTables', {json:json});
		},
		// タイムアウトを含むエラー応答があたっときの処理
		onerror : function(e) {
			Ti.API.debug(e.error);
		},
		// タイムアウトの時間指定
		timeout : 5000
	});

	// 接続を開く
	client.open("GET", url);
	// リクエストを発行する
	client.send();






};