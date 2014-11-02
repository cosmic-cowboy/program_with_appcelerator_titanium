
//
// 初期処理
//
var HTTP = require('lib/HttpRequest');
var genres = [];


// SplitWindow orientation（デバイスの向き）対応
// http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.iPad.SplitWindow
$.index.addEventListener('visible',function(e){

	if (e.view == 'detail'){
		// portrait
		e.button.title = "Master";
		$.index.detailView.getWindow().leftNavButton = e.button;
	} else if (e.view == 'master'){
		// landscape
		$.index.detailView.getWindow().leftNavButton = null;
	}

});

setGenres();

$.index.open();




//
// 関数宣言
//


// ジャンル取得
function setGenres() {

	var request = {
		url : "https://infra-api.city.kanazawa.ishikawa.jp/v1/genres/list.json",
		onload  : function () {
			// jsonの取得
			var jsondata = JSON.parse(this.responseText);
			_.map(jsondata.genres,function (genre) {
				
				genres.push({
					id  : genre.id,
					name: genre.name
				});
			});

			// json取り出しと表示追加
			// 外出し可能というか、依存性を低めるためには出したほうが良さそう
			var data = [];
			_.map(genres,function (genre) {
				data.push({
					properties : {
						title : genre.name
					}
				});
			});
			var section = Ti.UI.createListSection({items:data});
			$.listView.sections = [section];
		},
		onerror : function () {
			alert('error');
		}
	};
	HTTP.get(request);
}


//
// Alloy要素のイベンドアクション
//

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

// 施設取得
function setFacilities (e) {
	var genre = genres[e.itemIndex].id;
	var title = genres[e.itemIndex].name;
	var request = {
		url : "https://infra-api.city.kanazawa.ishikawa.jp/v1/facilities/search.json?count=100&genre=" + genre,
		onload  : function () {

			var jsondata = JSON.parse(this.responseText);
			var facilities = [];
			_.map(jsondata.facilities,function (facility) {
				
				facilities.push({
					name     : facility.name,
					address  : facility.address,
					latitude : facility.coordinates.latitude,
					longitude: facility.coordinates.longitude
				});
			});

			// json取り出しと表示追加
			// 外出し可能というか、依存性を低めるためには出したほうが良さそう
			var anno = [];
			_.map(facilities,function (facility) {
				anno.push(
					Alloy.Globals.Map.createAnnotation({
						title     : facility.name,
						subtitle  : facility.address,
						latitude  : facility.coordinates.latitude,
						longitude : facility.coordinates.longitude,
						pincolor  : Alloy.Globals.Map.ANNOTATION_RED
					})
				);
			});
			$.mapview.addAnnotations(anno);
			// body...
		},
		onerror : function () {
			alert('error');
		}
	};
	HTTP.get(request);
}

