function resultListWindow() {
	var resultListWin = Titanium.UI.createWindow({
		title:'検索結果',
		backgroundColor:'#fff'
	});

	// カスタムテンプレート
	var myTemplate = {
		properties : {
			height:'70dp',
		},
		childTemplates: [
			{
				type: 'Ti.UI.Label',
				bindId: 'eventId',
				properties: {
					top:'5dp',
					left: '5dp',
					font: {fontSize: '10dp'}
				}
			},
			{
				type: 'Ti.UI.Label',
				bindId: 'address',
				properties: {
					top:'5dp',
					left: '50dp',
					font: {fontSize: '10dp'}
				}
			},
			{
				type: 'Ti.UI.Label',
				bindId: 'startedAt',
				properties: {
					top:'15dp',
					left: '50dp',
					font: {fontSize: '10dp'}
				}
			},
			{
				type: 'Ti.UI.Label',
				bindId: 'title',
				properties: {
					left: '5dp',
					top: '30dp',
					font: {fontSize: '12dp', fontWeight:'bold'},
					Color:'blue'
				}
			}
		]
	};

	var refControl = Ti.UI.createRefreshControl({
		tintColor:'blue'
	});

	// データ取得・更新用処理
	var startPos;
	var data = [];
	refControl.addEventListener('refreshstart', function () {
		startPos = startPos + 7;
		fetchData();
		refControl.endRefreshing();
	});

	Ti.App.addEventListener('updateTables', function(){
		startPos = 1;
		fetchData(startPos);
	});

	var listView = Ti.UI.createListView({
		templates: { 'template': myTemplate },
		defaultItemTemplate: 'template',
		refreshControl:refControl
	});
	resultListWin.add(listView);
	
	return resultListWin;

	function fetchData() {

		var url = 'http://api.atnd.org/events/' +
			'?keyword=' + findword +
			'&start=' + startPos +
			'&count=7&format=json';

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
		
	}

	function getData(jsonData){
		var tmpData = [];
		if(jsonData){
			for(var i=0; i<jsonData.results_returned; i++){
				var rowdata = jsonData.events[i].event;
				// セルの作成
				tmpData.push({
					eventId : { text: rowdata.event_id },
					title : { text: rowdata.title },
					startedAt : { text: rowdata.started_at },
					address : { text: rowdata.address }
				});
			}

		}
		data = tmpData.concat(data);
		var section = Ti.UI.createListSection({items: data});
		listView.sections = [section];
	}
}

module.exports = resultListWindow;