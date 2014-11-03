// リストに表示する投稿一覧を取得
Alloy.Collections.post.fetch();


// イベントアクション
function post(){
	var win = Alloy.createController('Post').getView();
	win.open();
}

function transformFunction (model) {
	var transform = model.toJSON();

	transform.user = "ユーザ　：" + transform.user;
	transform.title = "タイトル：" + transform.title;
	transform.insertDate = "投稿日　：" + transform.insertDate;

	return transform;
}

function filterFunction (collection) {
	return collection.where({
		status : 0
	});
}