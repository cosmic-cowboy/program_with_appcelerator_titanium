var emptyAlert = Titanium.UI.createAlertDialog({
	title:'入力確認',
	message:'未入力の項目があります'
});

Ti.App.addEventListener('login', function (account) {
	Ti.API.info(account);
	if(account.username && account.password){
		Ti.App.fireEvent('toView');
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
		Ti.App.fireEvent('toView');
	} else {
		emptyAlert.show();
	}
});