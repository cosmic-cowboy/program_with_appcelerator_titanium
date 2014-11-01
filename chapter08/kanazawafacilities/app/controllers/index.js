// 地図を変更
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

// 地図のアノテーション削除
function deleteMap(){
	$.mapview.removeAllAnnotations();
}



$.index.open();
