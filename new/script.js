$(function(){

    $("#wechat").click(function(){
        $("#QR").toggle(300);
    })

    $("#history").click(function(){
    $("html,body").animate({scrollTop: 1}, 300);
})
    $("#work").click(function(){
        $("html,body").animate({scrollTop: $("#line1").offset().top-65.2}, 300);
    })
    $("#work1").hover(function(){
        $("#work1").css("color","blue");//移动在上面
    },
                 function(){
        $("#work1").css("color","black");//移开

    });

});





