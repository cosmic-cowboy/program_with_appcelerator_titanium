require('lib/authentication/authentication');

var button = require('lib/component/button');

function login(e){
	Ti.App.fireEvent('login', {
		username : $.accountField.value,
		password : $.passField.value
	});
	$.accountField.value = '';
	$.passField.value = '';
}


function signup(e){
	Ti.App.fireEvent('toUserAdd');
}


