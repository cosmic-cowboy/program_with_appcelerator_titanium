var button = require('lib/component/button');

function savePost () {
	
	var modeOfPost = Alloy.createModel("post",{
		user  : "A",
		title : $.inputTitle.value,
		content : $.inputDetail.value,
		insertDate : new Date()
	});
	if(modeOfPost.isValid()){
		modeOfPost.save();
		close();
		Alloy.Collections.post.fetch();
	} else {
		modeOfPost.destroy();
		alert("保存できません");
	}
}

function close () {
	$.Post.close();
}