function DetailView () {
	var view = Ti.UI.createView({
		backgroundColor:'white'
	});
	 
	var eventLabel = Ti.UI.createLabel({
		top:60,
		left:5,
		text:'',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	view.add(eventLabel);
	// Webページを開くボタン
	var toWebsiteButton = Ti.UI.createButton({
		title:'Webサイトへ',
		top:350,
		width:'100',
		left:210
	});

	toWebsiteButton.addEventListener('click', function(e) {
		view.fireEvent('toWebsite', {
			url:eventUrl
		});
	});
	view.add(toWebsiteButton);

	var eventUrl = '';

	view.addEventListener('editItem', function(e) {
		Ti.API.info(e.eventId);
		getATND(e.eventId);
	});

	return view;


	function getATND(eventId) {
		var url = 'http://api.atnd.org/events/?event_id=' + eventId + '&format=json';
		var client = Ti.Network.createHTTPClient({

			onload : function(e) {

				Ti.API.info('this.responseText' + this.responseText);
				try {
					var jsondata = JSON.parse(this.responseText);
					var rowdata = jsondata.events[0].event;
					eventUrl = rowdata.event_url;
					var started_date = rowdata.started_at.substring(0,10);
					var started_time = rowdata.started_at.substring(11,16);
					var ended_date = rowdata.ended_at.substring(0,10);
					var ended_time = rowdata.ended_at.substring(11,16);
					eventLabel.text = '';
					eventLabel.text = 'イベントID:' + rowdata.event_id + '\n' +
					'イベントタイトル:' + rowdata.title + '\n' +
					'開催日時:' + started_date + ' ' + started_time + '\n' +
					'終了日時:' + ended_date + ' ' + ended_time + '\n' +
					'開催場所:' + rowdata.address + '\n' +
					'開催会場:' + rowdata.place + '\n' +
					'URL:' + eventUrl + '\n' +
					'定員:' + rowdata.limit + '\n';
				} catch(err) {
					alert('JSON変換エラー:' + err.message );
				}
			},
			onerror : function(e) {
			alert('error');
			},
			timeout : 5000
		});

		client.open("GET", url);
		
		client.send();
	}
}

// export
module.exports = DetailView;