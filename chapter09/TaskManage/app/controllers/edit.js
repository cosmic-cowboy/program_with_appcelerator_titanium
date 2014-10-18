var dialogs = require("alloy/dialogs");

var args = arguments[0] || {};


$.inputWhat.value = args.what;
$.inputDetail.value = args.detail;
$.inputLimitDate.value = args.limitDate;
$.inputImportance.value = args.importance;
$.sliderValue.value = args.importance;

// TODO 冗長化が半端無いので正しいモデルクラスを設計する必要がある
function showSliderValue (e) {
	$.sliderValue.text = String.format("%3.0f", e.value);
}

function checkDate (argument) {
	var dateStr = $.inputLimitDate.value;
	if(dateStr.length === 0){
		return true;
	}

	if(!dateStr.match(/^\d{4}-\d{2}-\d{2}$/)){
		return false;
	}
	var vYear  = dateStr.substr(0, 4);
	var vMonth = dateStr.substr(5, 2) - 1;
	var vDay   = dateStr.substr(8, 2);

	if(vMonth >= 0 && vMonth <= 11 &&
		vDay >= 1 && vDay <= 31){

		var vDt = new Date(vYear, vMonth, vDay);

		// 日付が有効で、設定した値と同じである
		// なんかこの比較方法いやだな
		if((vDt) &&
			(vDt.getFullYear() == vYear &&
			vDt.getMonth() == vMonth &&
			vDt.getDate() == vDay)
		){
			return true;
		}
	}
	return false;
}

function saveTask () {
	if(checkDate() === false){
		alert("日付を正しく入力してください");
		$.inputLimitDate.focus();
		return false;
	}

	var mTask = Alloy.Collections.task.where({
		alloy_id : args.e_id
	})[0];

	mTask.set({
		what       : $.inputWhat.value,
		detail     : $.inputDetail.value,
		limitDate  : $.inputLimitDate.value,
		importance : Number($.sliderValue.text),
		status     : 0
	});

	if(mTask.isValid()){
		mTask.save();
		$.editWin.close({
			animated : true
		});
		Alloy.Collections.task.fetch();
	} else {
		mTask.destroy();
		alert("保存できませんでした");
	}
}

function finishTask () {
	dialogs.confirm({
		title : "完了確認",
		message : "完了しますか？",
		yes : "完了",
		no : "しない",

		callback : function(){
			var mTask = Alloy.Collections.task.where({
				alloy_id : args.e_id
			})[0];
			mTask.set({
				status : 1
			});

			if(mTask.isValid()){
				mTask.save();
				$.editWin.close({
					animated : true
				});
				Alloy.Collections.task.fetch();
			} else {
				mTask.destroy();
				alert("保存できませんでした");
			}
		}
	});
}

function deleteTask () {

	dialogs.confirm({
		title : "削除確認",
		message : "削除しますか？",
		yes : "削除",
		no  : "削除しない",

		callback : function(){
			var mTask = Alloy.Collections.task.where({
				alloy_id : args.e_id
			})[0];

			Alloy.Collections.task.remove(mTask);

			mTask.destroy();

			$.editWin.close({
				animated : true
			});
		}
	});
}