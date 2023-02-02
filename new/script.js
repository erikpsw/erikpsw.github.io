songs_list={
    "宇多田ヒカル-One Last Kiss":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRIR1VZbmQ4Sl9RX3Q2Znc_ZT13aWpVVEI.mp3",
"Coldplay-Yellow":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRObE53cjlVWUtLQWIwNUE_ZT1lVGptejU.mp3",
"Taylor Swift-Cruel Summer":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRPNUctMG1sR2dkMW1kd3c_ZT1BOThhYXo.mp3",
"Taylor Swift-New Romantics":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRQSEU2ckZCcHE1TW5feFE_ZT1uZGpUaU4.mp3",
"周杰伦-晴天":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRNVkNiMVRsaTJBTkxpc1E_ZT03Qm1hQmY.mp3",
"周杰伦-一路向北":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRMcENKMmxkTEdOTmZMR0E_ZT1UbkRpQWg.mp3",
"陈致逸,HOYO-MiX - Liyue 璃月":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRLbDJOQUZwVFZNcjVCb0E_ZT00STdGc0k.mp3",
"Eve 初音ミク-群青讃歌":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRTRmVGOGN4cWpBcUhRZkE_ZT1Fc2pCcHA.mp3",
"茶理理,TetraCalyx,Hanser - Moon Halo":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRRb0F0dEtTSFlXbHdhenc_ZT11a3R1SmI.mp3",
"宇多田ヒカル-Beautiful World":"https://link.jscdn.cn/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb3pmeXJKV0dUMHVndTRSeTlXU2FCRjJnVDVuOXc_ZT1keDhlMk8.mp3"
}
//网易云音乐
function get_json(){
list=document.getElementsByClassName("txt")
music_list=[]
for(i=0;i<list.length;i++){
    music_name=list[i].children[0].children[0].getAttribute("title")
    id=list[i].children[0].getAttribute("href").match(/\?id=\d+/)[0]
    music_list.push({name:music_name,str:id})
    // urls.push("http://music.163.com/song/media/outer/url"+str+".mp3")
}
return JSON.stringify(music_list)//化成JSON格式
}
wyy_music=[]
async function getData() {
    let response = await fetch('data/musics.JSON');
    let data = await response.json();
    wyy_music=data
  }
getData()

$(function(){
    //二维码动画
    $("#wechat").click(function(){
        if(window.getComputedStyle($("#QR")[0]).height=="0px"){
            $("#QR").removeClass("QRFout");
            $("#QR").addClass("QRFin");
        }
        else{
            $("#QR").removeClass("QRFin");
            $("#QR").addClass("QRFout");
        }
    })

    $("#history").hover(function(){

})
    $("#work").click(function(){
        
    })
    //work变色
    $("#work1").hover(function(){
        $("#work1").css("color","blue");//移动在上面
    },
                 function(){
        $("#work1").css("color","black");//移开

    });

    //论文进入
    
    var l=550
    //初始偏移
    v=1.2
    //进入速率
    dl=50
    // 每个标题之间的间隔
    $(".paper_name").css("transform",`translateX(-${l}px)`)
    window.addEventListener('scroll', function() {
        num=$(".paper_name").length
        var rect = $(".paper_name")[0].getBoundingClientRect();
        dx=window.innerHeight -3*$(".paper_name")[0].offsetHeight- rect.top
        if (window.innerHeight -3*$(".paper_name")[0].offsetHeight> rect.top ) {
            for(i=0;i<num;i++){
               
                if(dx<(i*dl+l)/v){
                $($(".paper_name")[i]).css("transform",`translateX(${-l+v*dx-dl*i}px)`)//令它为0可以解得另外一个边界
            }   
        }    
        
  }  })

$(".sub_title").get().forEach(element => {//使用get来获取数组
    //伪元素
    var style=document.createElement('style');//创建一个<style>标签
    var change=document.createTextNode(`
    #${element.id}::after{
        width: ${element.offsetWidth-24}px;
        z-index: -1;
    }  
    `)//更改后伪元素的样式
    style.appendChild(change);//把样式添加到style标签里
    document.body.appendChild(style);//把内联样式表添加到html中
    var newDiv = document.createElement('div');
    $(newDiv).addClass("meau_item")
    newDiv.innerHTML = element.innerHTML;
    $("#meau")[0].appendChild(newDiv);
    
});
// 菜单栏
// y=$("#start_box")[0].offsetHeight
// x=$("#profile_start")[0].getBoundingClientRect().left
// $("#meau").css("transform",`translate(${x}px,${y}px)`)
$("#profile_start").hover(function(){
        $("#meau").removeClass("MeauFout");
        $("#meau").addClass("MeauFin");
    },
    function(){
        $("#meau").removeClass("MeauFin");
        $("#meau").addClass("MeauFout");//移开

})
//音频
var song = document.querySelector('audio');
song.controls = false;
const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');

//播放
playButton.addEventListener('click', function() {
  playButton.style.display = 'none';
  song.play()
  pauseButton.style.display = 'inline';
});

//暂停
pauseButton.addEventListener('click', function() {
  pauseButton.style.display = 'none';
  song.pause()
  playButton.style.display = 'inline';
});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }//随机整数
document.getElementById("song_name").innerHTML="宇多田ヒカル-One Last Kiss"
ori=0//最初的值
$("#song_name").click(function(){
    do 
        i=getRandomInt(0,Object.keys(songs_list).length-1)
    while(i==ori)//防止重复
    ori=i
    $("#song_name").velocity({
        /* translateX 初始值永远为0 动画结束值为500px */
        translateX: [ 0, 100 ],
        /* opacity 初始值永远为0 动画结束值为1 缓动效果为"easeInSine" */
        opacity: [ 1, "easeInSine", 0 ]
    }, 
    {
        duration: 250,
        delay: 0
    }
    );
    song = document.querySelector('audio')
    $("#song_name")[0].innerHTML=Object.keys(songs_list)[i]
    song.src=Object.values(songs_list)[i]
    playButton.style.display = 'none';
    song.play()
    pauseButton.style.display = 'inline';
})
//网易云音乐换歌

$("#music").click(function(){
    i=getRandomInt(0,wyy_music.length-1)
    $("#song_name").velocity({
        /* translateX 初始值永远为0 动画结束值为500px */
        translateX: [ 0, 100 ],
        /* opacity 初始值永远为0 动画结束值为1 缓动效果为"easeInSine" */
        opacity: [ 1, "easeInSine", 0 ]
    }, 
    {
        duration: 250,
        delay: 0
    }
    );
    song = document.querySelector('audio')
    $("#song_name")[0].innerHTML=wyy_music[i].name
    song.src="http://music.163.com/song/media/outer/url"+wyy_music[i].str+".mp3"
    playButton.style.display = 'none';
    song.play()
    pauseButton.style.display = 'inline';
})


});





