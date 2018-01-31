$(document).ready(function() {

    $(".username").focus(function () {
        $(".user-icon").css("left", "-48px");
    });
    $(".username").blur(function () {
        $(".user-icon").css("left", "0px");
    });

    $(".password").focus(function () {
        $(".pass-icon").css("left", "-48px");
    });
    $(".password").blur(function () {
        $(".pass-icon").css("left", "0px");
    });

    $("#enter").click(function(){
        Validate();
        if (v==false){
            //alert('Плохо');
        }
        else {

        }
    });

    $('#register').click(function(){
       Validate();
    });
});

var v = false;

function Validate() {
    var username = $("#username").val();
    var password = $("#password").val();
    if (username=="" || password=="")
    {
        alert("Все поля должны быть заполнены!!");
        v=false;
    }
    else if(password.length<6)
    {
        alert("Слишком короткий пароль!!");
        v=false;
    }
    else v=true;
}
