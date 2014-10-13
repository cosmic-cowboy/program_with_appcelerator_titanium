function atndViewWindow(event){

	// ATND検索結果を表示するwindow
	var atndViewWin = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: "ATND検索結果"
	});
	// RefreshControl
	var refControl = Ti.UI.createRefreshControl({
		tintColor:'blue'
	});
	// ATND検索結果を表示するテーブル
	var atadView = Ti.UI.createTableView({
		refreshControl:refControl
	});
	atndDataView = atadView;
	atndViewWin.add(atadView);

	// グローバルイベントを追加
	var startPos = 1;
	Ti.App.addEventListener('updateTables', function (event) {
		findword = encodeURIComponent(event.keyword);
		loadData(startPos);
	});

	// RefreshControlのイベント追加
	refControl.addEventListener('refreshstart', function () {
		startPos = startPos　+ 7;
		loadData(startPos);
		refControl.endRefreshing();
	});

	return atndViewWin;
}

module.exports = atndViewWindow;

var loadData = function (startPos) {

	var url = 'http://api.atnd.org/events/' +
		'?keyword=' + findword +
		'&start=' + startPos +
		'&count=7&format=json';

	Ti.API.info('url' + url);

	// HTTP通信を行うHTTPClientオブジェクトを生成
	var client = Ti.Network.createHTTPClient({
		// 正常な応答があたっときの処理
		onload  : function(e) {
			var json = JSON.parse(this.responseText);
			getData(json);
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

var getData = function(jsonData){
	var tableViewRowList = [];
	Ti.API.info('jsonData:' + jsonData);
	if(jsonData){
		for(var i=0; i<jsonData.results_returned; i++){
			var rowdata = jsonData.events[i].event;

			// セルの作成
			var labelEventId = Ti.UI.createLabel({
				text:rowdata.event_id,
				font:{fontSize:10}, textAlign:'left',
				color:'#000',top:0, left:3, width:50,height:20
			});
			var labelTitle = Ti.UI.createLabel({
				text:rowdata.title,
				font:{fontSize:12,fontWeight:'bold'}, textAlign:'left',
				color:'#00f',top:20,left:0, width:'auto', height:40
			});
			var labelStartedAt = Ti.UI.createLabel({
				text:rowdata.started_at,
				font:{fontSize:10}, textAlign:'left',
				color:'#000',top:12, left:60, width:'auto', height:20
			});
			var labelAddress = Ti.UI.createLabel({
				text:rowdata.address,
				font:{fontSize:12}, textAlign:'left',
				color:'#000',top:0, left:60, width:'auto', height:20
			});
			var row = Ti.UI.createTableViewRow({
				height:60
			});
			// RowにLabelオブジェクトの追加
			row.add(labelEventId);
			row.add(labelTitle);
			row.add(labelStartedAt);
			row.add(labelAddress);
			tableViewRowList.push(row);
		}

	}
	atndDataView.setData(tableViewRowList);
	tabGroup.setActiveTab(1);
};