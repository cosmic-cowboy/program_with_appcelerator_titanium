getCurrent();

// 継続的な位置情報取得
// Titanium.Geolocation.addEventListener('location', function(e){
// 	if (e.error) {
// 		Ti.API.error('Error: ' + e.error);
// 	} else {
// 		Ti.API.info(e.coords);
// 		showMap(e);
// 	}
// });

$.index.open();

// 現在地取得
function getCurrent(){
	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (e.error) {
			Ti.API.error('Error: ' + e.error);
		} else {
			Ti.API.info(e.coords);
			showMap(e);
		}
	});
}

// マップへの設定処理
function showMap(e){
	$.mapview.region = {
		latitude:e.coords.latitude,
		longitude:e.coords.longitude,
		latitudeDelta:0.02,
		longitudeDelta:0.02
	};
}
