// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
// レイアウトモード：デフォルトモード（absolute）
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

// 
// 画面のトップから20, 左から30の位置に配置
// 表示領域は横幅60, 高さ20
//
var label1 = Titanium.UI.createLabel({
	text:'label1',
	top:'20dp',
	left:'30dp',
	height:'30dp',
	width:'60dp',
	backgroundColor:'gray'
});

// 
// 画面のトップから50, 左から60の位置に配置
// 表示領域は横幅60, 高さ20
//
var label2 = Titanium.UI.createLabel({
	text:'label2',
	top:'50',
	left:'60',
	height:'auto',
	width:'auto',
	backgroundColor:'brown'
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'label3',
	center : {
		x : 160,
		y : 100
	},
	height:'auto',
	width:'auto'
});

var label4 = Titanium.UI.createLabel({
	text:'label4',
	top:'50%',
	height:'auto',
	width:'60%',
	backgroundColor:'lime',
	textAlign:'center'
});

var label5 = Titanium.UI.createLabel({
	text:'label5',
	right:'30',
	bottom:'20',
	backgroundColor:'cyan',
	textAlign:'right'
});

win1.add(label1);
win1.add(label2);
win1.add(label3);
win1.add(label4);
win1.add(label5);

//
// create base UI tab and root window
// レイアウトモード：縦並び（vertical）
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

//
// レイアウトモード：横並び（horizontal）
//
var horizontalView = Titanium.UI.createView({
	backgroundColor:'#f00',
	top:20,
	height:100,
	layout:'horizontal'
});
win2.add(horizontalView);

var defaultView1 = Titanium.UI.createView({
	backgroundColor:'#f00',
	top:20,
	width:'80%',
	height:100
});
win2.add(defaultView1);

var defaultView2 = Titanium.UI.createView({
	backgroundColor:'#f00',
	top:20,
	width:'60%',
	height:100
});
win2.add(defaultView2);

var horizontalLabel1 = Titanium.UI.createLabel({
	text:'Label1',
	backgroundColor:'lime',
	top:20,
	left:20,
	height:'auto'
});

var horizontalLabel2 = Titanium.UI.createLabel({
	text:'Label2',
	backgroundColor:'gray',
	top:30,
	left:20,
	height:'FILL'
});

var horizontalLabel3 = Titanium.UI.createLabel({
	text:'Label3',
	backgroundColor:'blue',
	top:40,
	left:20,
	height:'auto'
});

horizontalView.add(horizontalLabel1);
horizontalView.add(horizontalLabel2);
horizontalView.add(horizontalLabel3);





//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
