
var getxml = require('lib/getxml');
var COURSE = "ls0";
var points = [];
points = getxml.getCourse(COURSE);
$.mapview.region = {
	latitude:points[0].latitude,
	longitude:points[0].longitude,
	latitudeDelta:0.02,
	longitudeDelta:0.02
};

var attr = getxml.getAttr(COURSE);
var startAnno = Alloy.Globals.Map.createAnnotation({
	latitude:points[0].latitude,
	longitude:points[0].longitude,
	title:"スタート",
	subtitle:attr,
	pincolor:Alloy.Globals.Map.ANNOTATION_GREEN
});
$.mapview.addAnnotations([startAnno]);

var startAnno = Alloy.Globals.Map.createAnnotation({
	latitude:points[points.length-1].latitude,
	longitude:points[points.length-1].longitude,
	title:"ゴール",
	subtitle:attr,
	pincolor:Alloy.Globals.Map.ANNOTATION_ORANGE
});
$.mapview.addAnnotations([startAnno]);

var route = Alloy.Globals.Map.createRoute({
	color  :'red',
	points :points,
	width  :2
});
$.mapview.addRoute(route);

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
