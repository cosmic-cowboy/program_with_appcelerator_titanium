// toolbarのアイテムリスト
var toolItems = [
	{title:"衛生", type:Alloy.Globals.Map.SATELLITE_TYPE},
	{title:"標準", type:Alloy.Globals.Map.STANDARD_TYPE},
	{title:"ハイブリッド",type:Alloy.Globals.Map.HYBRID_TYPE},
	{title:"+",zoom:1},
	{title:"-",zoom:-1}
];
// 空きスペース
var flexSpace = Titanium.UI.createButton({
	systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var items = [];

items.push(flexSpace);

_.map(toolItems, function(toolItem) {
	if(toolItem.type){
		var button = Titanium.UI.createButton({
			title:toolItem.title,
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		button.addEventListener('click', function() {
			$.mapview.setMapType(toolItem.type);
		});
		items.push(button);
	} else if(toolItem.zoom){
		var zoombutton = Titanium.UI.createButton({
			title:toolItem.title,
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		zoombutton.addEventListener('click', function() {
			$.mapview.zoom(toolItem.zoom);
		});
		items.push(zoombutton);

	}
	items.push(flexSpace);
});
$.mapToolBar.items = items;

function readXML(){
	var xmlFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'xml/walk.xml');
	var xmlcontent = xmlFile.read();
	var xmltext = xmlcontent.text;
	var xmlDomDoc = Ti.XML.parseString(xmltext);

	var curve = xmlDomDoc.getElementById('ls3');
	var coordinateTags = curve.getElementsByTagName('coordinate');
	for(var i = 0; i < coordinateTags.length; i++){
		var coordinate = coordinateTags.item(i).textContent;
		Ti.API.info(coordinate + '(' + i + ')');
	}
}

function report(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}


$.index.open();