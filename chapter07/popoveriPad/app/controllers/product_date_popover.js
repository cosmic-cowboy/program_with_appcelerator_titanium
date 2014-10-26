var args = arguments[0] || {};

function setProductDate (e) {
	var yyyy = e.value.getFullYear().toString();
	var mm = (e.value.getMonth()+1).toString();
	var dd  = e.value.getDate().toString();
	Alloy.Globals.dateField.value = yyyy + '/' +  (mm[1]?mm:'0'+mm[0]) + '/' + (dd[1]?dd:'0'+dd[0]);
}