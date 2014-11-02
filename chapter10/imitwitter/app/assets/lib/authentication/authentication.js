var emptyAlert = Titanium.UI.createAlertDialog({
	title:'入力確認',
	message:'パスワードが未入力です'
});

Ti.App.addEventListener('login', function (account) {
	Ti.API.info(account);
	if(account.username && account.password){

	} else {
		emptyAlert.show();
	}
});


Ti.App.addEventListener('userAdd', function (account) {
	Ti.API.info(account);
	if(account.username &&
		account.password &&
		account.password_confirmation &&
		account.lastName &&
		account.firstName ){


	} else {
		emptyAlert.show();
	}
});