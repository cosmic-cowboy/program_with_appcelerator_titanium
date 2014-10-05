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

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:L('window1'),
	font:{fontSize:20,fontFamily:'Helvetica Neue',fontStyle:'italic',fontWeight:"bold"},
	textAlign:'left',
	width:'auto'
});

var label2 = Titanium.UI.createLabel({
	top:'10',
	backgroundColor:'#f00',
	color:'#999',
	text:'fontSizeにはフォントの大きさ、fontFamilyにはフォントを指定する。fontFamilyに指定したフォントが存在しない場合、デフォルトのフォントが表示される',
	font:{fontSize:20,fontFamily:'Helvetica Neue',fontStyle:'italic',fontWeight:"bold"},
	textAlign:'left',
	width:'80%'
});

win1.add(label1);
win1.add(label2);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    layout:'vertical'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

// 3-2 コンポーネント
// createButton
var button1 = Titanium.UI.createButton({
	title:'ボタンをクリックしてください（タップじゃないの？）',
	top:'20',
	color:'#999',
	borderRadius:5,
	borderColor:"black"
});

// イベントハンドラの登録
button1.addEventListener('click', function (e) {
	alert('ボタンがクリックされました');
});
win2.add(button1);

var button2 = Titanium.UI.createButton({
	title:'ボタンをダブルクリックしてください（どうやるの？）',
	top:'20',
	color:'#999',
	borderRadius:10,
	borderColor:"red"
});

// イベントハンドラの登録
button2.addEventListener('dblclick', function (e) {
	alert('ボタンがダブルクリックされました');
});

win2.add(button2);
var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:('タップ前'),
	textAlign:'left',
	width:'100%'
});
var button3 = Titanium.UI.createButton({
	title:'ボタンをタップしてください',
	top:'20',
	color:'#999',
	// touchEnable : 'false'
	borderRadius:15,
	borderColor:"blue",
	width:'100%'
});

// イベントハンドラの登録
button3.addEventListener('touchstart', function (e) {
	label3.text = 'タップ中';
});
button3.addEventListener('touchend', function (e) {
	label3.text = 'タップ終了';
});

win2.add(button3);
win2.add(label3);


//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);


// open tab group
tabGroup.open();
