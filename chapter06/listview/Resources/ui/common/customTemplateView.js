function customTemplateView () {

	var plainTemplate = {
		childTemplates : [
			{
				type:'Ti.UI.Label',
				bindId:'rowtitle',
				properties : {
					left : '10dp',
					font : {fontSize:'16dp', fontStyle:'italic'}
				},
				events : {click : report}
			},
			{
				type:'Ti.UI.Label',
				bindId:'subtitle',
				properties : {
					left : '80dp',
					font : {fontSize:'10dp'}
				},
				events : {click : report}
			},
			{
				type:'Ti.UI.ImageView',
				bindId:'pic',
				properties : {
					image : 'KS_nav_ui.png'
				},
				events : {click : report}
			},
			{
				type:'Ti.UI.Button',
				bindId:'button',
				properties : {
					width  : '80dp',
					height : '30dp',
					right  : '10dp',
					title : 'PRESS ME'
				},
				events : {click : report}
			}
		]
	};

	function report (event) {
		Ti.API.info(event.bindId);
	}

	var listView = Ti.UI.createListView({
		templates : {'plain':plainTemplate},
		defaultItemTemplate : 'plain'
	});

	var data = [];
	for(var i = 1; i <= 10; i++){
		data.push({
			rowtitle:{text : 'Row ' + i},
			subtitle:{text : 'Sub ' + i},
			properties : {
				itemId : 'row' + i
			}
		});
	}
	var section = Ti.UI.createListSection({items : data});
	listView.sections = [section];

	listView.addEventListener('itemclick', function (event) {
		alert(
			"ItemId: " + event.itemId + "\n" +
			"BindId: " + event.bindId + "\n" +
			"Section Index: " + event.sectionIndex + ", Item Index: " + event.itemIndex
		);
	});

	return listView;
}

module.exports = customTemplateView;