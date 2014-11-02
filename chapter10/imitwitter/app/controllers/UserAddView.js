var button = require('lib/component/button');


function signup (e) {
	Ti.App.fireEvent('userAdd', {
		username : $.accounttext.value,
		password : $.passtext.value,
		password_confirmation : $.passtext_conf.value,
		lastName : $.lastnametext.value,
		firstName : $.firstNametext.value,
	});
}