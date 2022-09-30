$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
    $('.gotop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});


