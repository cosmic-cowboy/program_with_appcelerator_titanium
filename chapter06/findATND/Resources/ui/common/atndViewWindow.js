function atndViewWindow(event){

	// ATND検索結果を表示するwindow
	var atndViewWin = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: "ATND検索結果"
	});

	// グローバルイベントを追加
	Ti.App.addEventListener('updateTables', function (event) {
		atadView.setData(getData(event));
		tabGroup.setActiveTab(1);
	});

	// ATND検索結果を表示するテーブル
	var atadView = Ti.UI.createTableView();
	atndViewWin.add(atadView);

	return atndViewWin;
}

module.exports = atndViewWindow;

var getData = function(event){
	var tableViewRowList = [];
	if(event){
		var jsonData = event.json;
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

	return tableViewRowList;
};