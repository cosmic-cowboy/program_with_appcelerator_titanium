var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'json/getRecent.json');
var jsonContent = jsonFile.read();
var jsondata = JSON.parse(jsonContent);

var items = _.map(jsondata.photos.photo, function(element){

	var imgUrl = 'http://farm' + element.farm + '.staticflickr.com/' + element.server + '/'+ element.id + '_' + element.secret + '.jpg';
	var itemList = [];
	itemList.push({
		title : { text: element.title },
		smallPic : {image: imgUrl},
		owner : { text: element.owner }
	});
	return itemList;
});
// $.masterList.sections[0].setItems(items);


var label = Ti.UI.createLabel({
	text:"owner-id",
	color:"red",
	font:{fontSize:16}
});
var popover = Ti.UI.iPad.createPopover({
	contentView:label
});

function showPic(e){
	$.detailImage.image = items[e.itemIndex][0].smallPic.image;
	label.text =  'owner-id:' + items[e.itemIndex][0].owner.text;
}

function openPopover(e){
	// var popover = Alloy.createController("popover").getView();
	console.log(e.source);
	// label.text()
	popover.show({view:$.detailImage});
}

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


$.index.open();
