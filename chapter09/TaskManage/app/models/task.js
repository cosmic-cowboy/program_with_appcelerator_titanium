exports.definition = {
	config: {
		columns : {
			"what" : "text",
			"detail" : "text",
			"limitDate" : "text",
			"importance" : "integer",
			"status" : "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "task"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// 妥当性検査
			validate : function (attr) {
				if((attr.what).length <= 0){
					return "Error : what is not input.";
				}
				if((attr.limitDate).length <= 0){
					return "Error : limitDate is not input.";
				}
			}
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// 並び替え
			comparator : function (task) {
				return task.get('limitDate');
			}
		});

		return Collection;
	}
};