$(document).ready(function(){

    $("#attractions").click(function(){
        $(".content").empty();
        $(".content").load("Attraction.html");
    });

    $("#eat").click(function(){
        $(".content").empty();
        $(".content").load("Eat.html");
    });

    $("#setle").click(function(){
        $(".content").empty();
        $(".content").load("Setle.html");
    });

    $("#entertainment").click(function(){
        $(".content").empty();
        $(".content").load("Entertainment.html");
    });

    $("#advice").click(function(){
        $(".content").empty();
        $(".content").load("Advice.html");
    });

    $(".home").click(function(){
        window.open("../html/Home.html", "_self");
    });

    $("#japan").click(function(){
        window.open("../html/Japan.html", "_self");
    });

    $("#table").click(function(){
        window.open("../html/Table.html", "_self");
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