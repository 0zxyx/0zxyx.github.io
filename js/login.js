$(document).ready(function(){
	$('.login-box').keypress(function(event){
		var password = $('input[name="pass"]').val();
		var sanitized = password.replace(/[^a-f0-9]/g, '');
		var encryptedpage = $('.eblob p').text();
		var keycode = (event.key);
		if(keycode == 'Enter'){
			try {
				var decryptedpage = CryptoJS.AES.decrypt(encryptedpage, sanitized).toString(CryptoJS.enc.Utf8);

				if (decryptedpage.length > 0) {
					$("body").html(decryptedpage);
				} else {
					$(".login-error p").text("Incorrect Hash!").css('color', '#f22525');
				}
			}
			catch(err) {
				$(".login-error p").text("Incorrect Hash!").css('color', '#f22525');
			}
		}
	});

});

