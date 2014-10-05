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
	text:'input textfield',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win1.add(label1);


// 3-2 テキストフィールド
// Titanium.UI.TextField
// http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.TextField
//
// UIカタログ(コントロール) - TextField
// https://code.google.com/p/titanium-mobile-doc-ja/wiki/TextField
var textField01 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : '10',
	left : '10',
	width : '250',
	hintText : 'KEYBOARD_DEFAULT',
	clearButtonMode:'Titanium.UI.INPUT_BUTTONMODE_ONFOCUS'
});

var textField02 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_DECIMAL_PAD,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE,
	top : '10',
	left : '30',
	width : '250',
	hintText : 'KEYBOARD_DECIMAL_PAD',
	clearButtonMode:'Titanium.UI.INPUT_BUTTONMODE_ONBLUR'
});

var textField03 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	top : '10',
	left : '30',
	width : '250',
	hintText : 'KEYBOARD_NUMBER_PAD'
});

var textField04 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_NUMBER_PUNCTUATION,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
	top : '10',
	left : '30',
	width : '250',
	hintText : 'KEYBOARD_NUMBER_PUNCTUATION'
});

var textField05 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_URL,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : '10',
	left : '30',
	width : '250',
	hintText : 'KEYBOARD_URL',
	autocapitalization : 'FALSE'
});

var textField06 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_EMAIL,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : '10',
	left : '10',
	width : '250',
	hintText : 'KEYBOARD_EMAIL',
	autocapitalization : 'FALSE',
	clearButtonMode:'Titanium.UI.INPUT_BUTTONMODE_ALWAYS'
});

var textField07 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_ASCII,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top : '10',
	left : '10',
	width : '250',
	hintText : 'KEYBOARD_ASCII',
	autocapitalization : 'FALSE',
	passwordMask : 'TRUE'

});

textField01.addEventListener('return', function (e) {
	label1.text = e.value;
});

textField02.addEventListener('blur', function (e) {
	label1.text = e.value;
});

textField07.addEventListener('focus', function (e) {
	label1.text = '';
});

textField07.addEventListener('change', function (e) {
	label1.text = e.value;
});

win1.add(textField01);
win1.add(textField02);
win1.add(textField03);
win1.add(textField04);
win1.add(textField05);
win1.add(textField06);
win1.add(textField07);


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
