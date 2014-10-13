function simpleListView () {
	var listView = Ti.UI.createListView();

	var sections = [];

	// セクション01
	var Section01 = Ti.UI.createListSection({headerTitle:'セクション01'});
	var DataSet01 = [
		{properties:{title:'行1-1'}},
		{properties:{title:'行1-2'}}
	];
	Section01.setItems(DataSet01);
	sections.push(Section01);

	// セクション02
	var Section02 = Ti.UI.createListSection({headerTitle:'セクション02'});
	var DataSet02 = [
		{properties:{title:'行2-1'}},
		{properties:{title:'行2-2'}}
	];
	Section02.setItems(DataSet02);
	sections.push(Section02);

	// 要素の代入
	listView.sections = sections;
	listViewWindow.add(listView);
	listViewWindow.open();


	// セクション03
	var Section03 = Ti.UI.createListSection({headerTitle:'セクション03'});
	var DataSet03 = [
		{properties:{title:'行3-1'}},
		{properties:{title:'行3-2'}}
	];
	Section03.setItems(DataSet03);

	// 要素を追加
	listView.appendSection(Section03);

	return listView;
}

module.exports = simpleListView;