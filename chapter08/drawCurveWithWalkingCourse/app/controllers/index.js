function changeMap(e){
	// 地図を変更
	if(e.source.type){
		$.mapview.setMapType(e.source.type);
	}
	// 地図をズームイン・ズームアウト
	if(e.source.zoom){
		$.mapview.zoom(e.source.zoom);
	}
}
$.index.open();
