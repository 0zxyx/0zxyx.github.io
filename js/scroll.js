$(document).ready(function(){
	var scroll = $(document).scrollTop();
	var active=true;
	$('.menu').click(function(){
		if(active){
			$('.nav-menu').fadeOut('fast');
			active=false;
		}else{
			$('.nav-menu').fadeIn('fast');
			active=true;
		}
	});
    $(window).scroll(function(){
	    var cs = $(document).scrollTop();
        if (scroll >= cs && active == true) {
            $('.nav-menu').fadeIn();
	}else{
		$('.nav-menu').fadeOut();
        }
	    scroll = cs;
    });
});


