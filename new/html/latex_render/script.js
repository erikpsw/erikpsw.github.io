var h=5

$(function(){
    $("#input").keydown(function(event){
        if(event.which==13){
            str="https://www.zhihu.com/equation?tex="+$("#input").val()
            document.getElementById("output").src=str
            console.log(str);
        };
    })

    $("#btn1").click(function(){
        h=h+4
        h_text=String(h)+'em'
       $("#output").css('height',h_text)
    })

    $("#btn2").click(function(){
        h=h-4
        if(h>0){
            h_text=String(h)+'em'
            $("#output").css('height',h_text)
        }
        else
            h=h+4
    })

        
}
)
