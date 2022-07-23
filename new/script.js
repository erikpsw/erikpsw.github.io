$(function(){
    $("#name2").mouseenter(function(){
        $("#name2").animate({fontSize:'4em'},"fast")
    }
    );

    $("#wechat").click(function(){
        $("#QR").toggle(300);
    })

    $("#history").click(function(){
    $("html,body").animate({scrollTop: 1}, 300);
})
    $("#work").click(function(){
        $("html,body").animate({scrollTop: $("#p3").offset().top-65.2}, 300);
    })

});





