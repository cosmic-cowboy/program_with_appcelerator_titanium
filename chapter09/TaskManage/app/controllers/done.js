function transformFunction(model) {
	var transform, limitTime, importance;
	transform = model.toJSON();

	limitDate = transform.limitDate;
	transform.limitDate = "期日:" + limitDate;
	importance = transform.importance;
	transform.importance = "重要度:" + importance;
	return transform;
}

function filterFunction(collection) {
	return collection.where({
		status: 1
	});
}