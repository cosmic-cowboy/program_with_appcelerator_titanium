
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
