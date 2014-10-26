var args = arguments[0] || {};

function setQuantity(e){
	Alloy.Globals.quantityField.value = e.row.title;
	$.quantity_popover.hide();
}

var tableData = [];
var data = [
		{title: '1'},
		{title: '2'},
		{title: '3'},
		{title: '4'},
		{title: '5'},
	];

data.map(function(element) {
    var title = element.title;
    var row = Ti.UI.createTableViewRow({"title":title});
    tableData.push(row);
});
$.quantity_table.setData(tableData);