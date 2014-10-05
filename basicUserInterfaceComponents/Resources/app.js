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
