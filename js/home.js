$(document).ready(function(){

    $("#norway").click(function(){
       window.open("../html/Norway.html", "_self");
    });

    $("#japan").click(function(){
        window.open("../html/Japan.html", "_self");
    });

    $("#france").click(function(){
        window.open("../html/France.html", "_self");
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});