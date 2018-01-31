$(document).ready(function(){

    $("#attractions").click(function(){
        $(".content").empty();
        $(".content").load("Attraction_france.html");
    });

    $("#eat").click(function(){
        $(".content").empty();
        $(".content").load("Eat_france.html");
    });

    $("#setle").click(function(){
        $(".content").empty();
        $(".content").load("Setle_france.html");
    });

    $("#entertainment").click(function(){
        $(".content").empty();
        $(".content").load("Entertainment_france.html");
    });

    $("#advice").click(function(){
        $(".content").empty();
        $(".content").load("Advice_france.html");
    });

    $(".home").click(function(){
        window.open("../html/Home.html", "_self");
    });

    $("#norway").click(function(){
        window.open("../html/Norway.html", "_self");
    });

    $("#table").click(function(){
        window.open("../html/Table.html", "_self");
    });

    $("#japan").click(function(){
        window.open("../html/Japan.html", "_self");
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