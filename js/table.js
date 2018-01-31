$(document).ready(function(){

    var tmpl = '<h2>{{name}}</h2>' +
        '<h3>Столица: {{capital}}</h3>'+
        '<p>Телефонный код: {{code}}</p>'+
        '<p>Официальный домен страны:{{domen}}</p>'+
        '<p>Самый крупный город после столицы: {{city}}</p>';

    $("#france_data").click(function () {
        $.getJSON('../html/country.json', function (jsonObject){



                var data = {};
                data = {
                    name: jsonObject.country[0].name,
                    capital: jsonObject.country[0].capital,
                    code: jsonObject.country[0].code,
                    domen: jsonObject.country[0].domen,
                    city: jsonObject.country[0].city,
                };

                var html = Mustache.to_html(tmpl, data);
            $(".data").empty();
                $(".data").append(html);
            });
    });

    $("#norway_data").click(function () {
        $.getJSON('../html/country.json', function (jsonObject){


            var data = {};
            data = {
                name: jsonObject.country[2].name,
                capital: jsonObject.country[2].capital,
                code: jsonObject.country[2].code,
                domen: jsonObject.country[2].domen,
                city: jsonObject.country[2].city,
            };

            var html = Mustache.to_html(tmpl, data);
            $(".data").empty();
            $(".data").append(html);
        });
    });

    $("#japan_data").click(function () {
        $.getJSON('../html/country.json', function (jsonObject){


            var data = {};
            data = {
                name: jsonObject.country[1].name,
                capital: jsonObject.country[1].capital,
                code: jsonObject.country[1].code,
                domen: jsonObject.country[1].domen,
                city: jsonObject.country[1].city,
            };

            var html = Mustache.to_html(tmpl, data);
            $(".data").empty();
            $(".data").append(html);
        });
    });

    $(".home").click(function(){
        window.open("../html/Home.html", "_self");
    });

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