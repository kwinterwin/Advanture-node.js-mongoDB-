$(document).ready(function(){

    $("#attractions").click(function(){
        $(".content").empty();
        $(".content").load("Attraction_japan.html");
    });

    $("#eat").click(function(){
        $(".content").empty();
        $(".content").load("Eat_japan.html");
    });

    $("#setle").click(function(){
        $(".content").empty();
        $(".content").load("Setle_japan.html");
    });

    $("#entertainment").click(function(){
        $(".content").empty();
        $(".content").load("Entertaiment_japan.html");
    });

    $("#advice").click(function(){
        $(".content").empty();
        $(".content").load("Advice_japan.html");
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