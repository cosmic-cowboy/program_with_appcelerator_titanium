// テキストフィールドの共通アクション
// いずれはwidgetへ
exports.focusField = function(e) {
	e.source.borderColor = "blue";
};

exports.blurField = function(e) {
	e.source.borderColor = "gray";
};