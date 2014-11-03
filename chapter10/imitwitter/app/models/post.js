exports.definition = {
	config: {
		columns : {
			"user" : "text",
			"title" : "text",
			"content" : "text",
			"insertDate" : "text"
		},
		adapter: {
			type: "sql",
			collection_name: "post"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// 妥当性検査
			validate : function (attr) {
				if((attr.user).length <= 0){
					return "Error : user is not input.";
				}
				if((attr.title).length <= 0){
					return "Error : title is not input.";
				}
				if((attr.content).length <= 0){
					return "Error : content is not input.";
				}
				if((attr.insertDate).length <= 0){
					return "Error : insertDate is not input.";
				}
			}
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// 並び替え
			comparator : function (post) {
				return post.get('insertDate');
			}
		});

		return Collection;
	}
};