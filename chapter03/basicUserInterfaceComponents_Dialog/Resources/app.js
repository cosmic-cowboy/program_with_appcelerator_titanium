// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
    layout:'vertical'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

// 3-2 ダイアログ
// http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.AlertDialog
// http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.OptionDialog
// UIカタログ(API) - ダイアログ関連
// https://code.google.com/p/titanium-mobile-doc-ja/wiki/guides_ui_dialog
var alertDialog01 = Titanium.UI.createAlertDialog({
	title:'入力確認',
	message:'パスワードが未入力です'
});

var button01 = Titanium.UI.createButton({
	title:'入力確認ボタン',
	top:'10',
	width:'50%'
});

button01.addEventListener('click', function (e) {
	alertDialog01.show();
});

win1.add(button01);

var alertDialog02 = Titanium.UI.createAlertDialog({
	title:'登録確認',
	message:'この内容で登録しますか？',
	buttonNames:['はい','いいえ'],
	cancel : 1
});

alertDialog02.addEventListener('click', function (e) {
	if(e.index === e.cancel){
		Titanium.API.info(e.cancel);
	}
	if(e.index === 0){
		Titanium.API.info('はい');
	} else if(e.index === 1){
		Titanium.API.info('いいえ');
	}
});

var button02 = Titanium.UI.createButton({
	title:'登録確認ボタン',
	top:'10',
	width:'50%'
});

button02.addEventListener('click', function (e) {
	alertDialog02.show();
});


win1.add(button02);

var optionLabelTitle = Titanium.UI.createLabel({
	color:'#999',
	text:'オプション設定',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
var optionLabel = Titanium.UI.createLabel({
	color:'#999',
	text:'',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(optionLabelTitle);
win1.add(optionLabel);

var optionMessages = ['トローリーバス乗り放題','朝食無料','スパ','キャンセル'];
var optionDialog = Titanium.UI.createOptionDialog({
	title:'選択してください',
	options:optionMessages,
	cancel : 3
});

optionDialog.addEventListener('click', function (e) {
	if(e.index === e.cancel){
		Titanium.API.info(e.cancel);
	}
	switch(e.index){
		case 0:
			Titanium.API.info('0');
			optionLabel.text=optionMessages[e.index];
			break;
		case 1 :
			Titanium.API.info('1');
			optionLabel.text=optionMessages[e.index];
			break;
		case 2 :
			Titanium.API.info('2');
			optionLabel.text=optionMessages[e.index];
			break;
		case 3 :
			Titanium.API.info('3');
			optionLabel.text=optionMessages[e.index];
			break;


	}
	if(e.index === 0){
		Titanium.API.info('はい');
	} else if(e.index === 1){
		Titanium.API.info('いいえ');
	}
});

var button03 = Titanium.UI.createButton({
	title:'登録確認ボタン',
	top:'10',
	width:'50%'
});

button03.addEventListener('click', function (e) {
	optionDialog.show();
});


win1.add(button03);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
