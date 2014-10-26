
// popoverは抽象化できるのでは？
function popoverQuantity(){
	var popover = Alloy.createController('quantity_popover').getView();
    popover.show({view:$.quantityField});
}
function popoverName(){
	var popover = Alloy.createController('product_name_popover').getView();
    popover.show({view:$.nameField});
}
function popoverDate(){
	var popover = Alloy.createController('product_date_popover').getView();
    popover.show({view:$.dateField});
}

$.index.open();