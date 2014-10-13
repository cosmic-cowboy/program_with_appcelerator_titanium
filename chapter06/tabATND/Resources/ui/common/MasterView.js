function MasterView () {

	// 検索の開始位置
	var startPos = 1;
	// 検索ワード
	var findword = '';

	var view = Ti.UI.createView({
		backgroundColor:'white'
	});

	// 検索ラベル
	var searchLabel = Titanium.UI.createLabel({
		color:'#999',
		top:10,
		text:'キーワードを入力してください',
		textAlign:'center',
		width:'auto'
	});
	view.add(searchLabel);

	// キーワードを入力するテキストフィールド
	var searchTextField = Titanium.UI.createTextField({
		value:'',
		hintText: 'androidなどと入力してください',
		top:45,
		left:5,
		width:240,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		// スペルチェック機能Off
		autocorrect:false,
		autocapitalization : Titanium.UI.TEXT_AUTOCAPITALZAION_NON
	});
	view.add(searchTextField);

	// 検索ボタン
	var searchBtn = Ti.UI.createButton({
		title:'検索',
		top:45,
		right:5,
		width:45
	});
	searchBtn.addEventListener('click', function (event) {
		findword = searchTextField.value;
		if(findword.length === 0){
			alert("検索ワードを入力してください");
			return false;
		}
		loadData(startPos);
	});
	view.add(searchBtn);

	// RefreshControl
	var refControl = Ti.UI.createRefreshControl({
		tintColor:'blue'
	});
	// 取得したJSONデータを一覧表示するTableView
	var tableView = Ti.UI.createTableView({
		refreshControl:refControl,
		top:80,
	});
	refControl.addEventListener('refreshstart', function () {
		startPos = startPos + 7;
		loadData(startPos);
		refControl.endRefreshing();
	});

	view.add(tableView);

	return view;

	function loadData(startPos) {

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
		
	}

	function getData(jsonData){
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
					height:60,
					hasChild:true,
					// hasDetail:true,	
					eventId:rowdata.event_id,
				});
				// RowにLabelオブジェクトの追加
				row.add(labelEventId);
				row.add(labelTitle);
				row.add(labelStartedAt);
				row.add(labelAddress);
				tableViewRowList.push(row);
			}

		}
		tableView.setData(tableViewRowList);

		// 取得したJSONデータを一覧表示するTableViewにadd behavior
		tableView.addEventListener('click', function(event) {
			view.fireEvent('itemSelected', {
				eventId:event.rowData.eventId,
			});
		});
	}

}

// export
module.exports = MasterView;