$(document).ready(function(){
	var scroll = $(document).scrollTop();
    $(window).scroll(function(){
	   var cs = $(document).scrollTop();
        if (scroll >= cs) {
            $('.nav-menu').fadeIn();
	}else{
		$('.nav-menu').fadeOut();
        }
	    scroll = cs;
    });
});


