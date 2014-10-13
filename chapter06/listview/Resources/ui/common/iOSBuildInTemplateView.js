function iOSBuildInTemplateView () {

	var data = [
		{
			properties : {
				title : 'タイトル',
				subtitle : 'サブタイトル',
				image : 'KS_nav_views.png',
				accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_NONE
			},
			template : Ti.UI.LIST_ITEM_TEMPLATE_CONTACTS
		},
		{
			properties : {
				title : 'タイトル',
				subtitle : 'サブタイトル',
				image : 'KS_nav_views.png',
				accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
			},
			template : Ti.UI.LIST_ITEM_TEMPLATE_SETTINGS
		},
		{
			properties : {
				title : 'タイトル',
				subtitle : 'サブタイトル',
				image : 'KS_nav_views.png',
				accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DETAIL
			},
			template : Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE
		},
		{
			properties : {
				title : 'タイトル',
				subtitle : 'サブタイトル',
				image : 'KS_nav_views.png',
				accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
			},
			template : Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT
		}

	];


	var listSection = Ti.UI.createListSection({items:data});
	var listView = Ti.UI.createListView({sections : [listSection]});
	return listView;
}

module.exports = iOSBuildInTemplateView;