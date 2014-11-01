exports.getCourse = function (curve_id) {

	var points = [];
	var curve = getCurve(curve_id);

	var coordinateTags = curve.getElementsByTagName('coordinate');
	for(var i = 0; i < coordinateTags.length; i++){
		var coordinate = coordinateTags.item(i).textContent;
		var latlong = coordinate.split(" ");
		if(latlong.length > 1){
			var lan = latlong[0];
			var lat = latlong[1];
			points.push({latitude:lat, longitude:lan});
		}
	}
	return points;
};

exports.getAttr = function (curve_id) {

	var curve = getCurve(curve_id);

	var attrTags = curve.getElementsByTagName('attribute');
	var attr = attrTags.item(0).textContent;

	// コース名から次のカンマまでを取る
	var pos = attr.search(/コース名=/);
	var str = attr.slice(pos+"コース名=".length);
	pos = str.search(/,/);
	str = str.slice(0, pos);
	return str;
};

function getCurve(curve_id){
	var xmlFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'xml/walk.xml');
	var xmlcontent = xmlFile.read();
	var xmltext = xmlcontent.text;
	var xmlDomDoc = Ti.XML.parseString(xmltext);
	var curve = xmlDomDoc.getElementById(curve_id);
	return curve;
}