function addTask(){
	var addWin, index;

	// Alloy.Globals.currentTab に タブへの参照
	// 参照がない場合は、indexコントローラから、taskTabへの参照を取得
	if(Alloy.Globals.currentTab === undefined){

		index = Alloy.createController("index");
		Alloy.Globals.currentTab = index.getView("taskTab");

	}

	// addWinの変数にAddコントローラからのID=addWinを持つWindowを取得する
	addWin = Alloy.createController("add").getView("addWin");
	Alloy.Globals.currentTab.open(addWin);

}


function transformFunction (model) {
	var transform, limitTime, importance;

	transform = model.toJSON();

	limitDate = transform.limitDate;
	transform.limitDate = "期日：" + limitDate;
	importance = transform.importance;
	transform.importance = "重要度：" + importance;

	return transform;
}

function filterFunction (collection) {
	return collection.where({
		status : 0
	});
}