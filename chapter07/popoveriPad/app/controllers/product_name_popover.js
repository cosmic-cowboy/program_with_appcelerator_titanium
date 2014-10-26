var args = arguments[0] || {};

function setProductName(e){
	Alloy.Globals.nameField.value = e.row.title;
	$.product_name_popover.hide();
}

var pickerRows = [];
var data = [
	{title:'商品1'},
	{title:'商品2'},
	{title:'商品3'},
	{title:'商品4'},
	{title:'商品5'}
];

data.map(function(element){
	var row = Ti.UI.createPickerRow({title:element.title});
	pickerRows.push(row);
});
$.picker.add(pickerRows);


