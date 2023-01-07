
$(function(){

document.getElementById("div_2").addEventListener("click",(event)=>{
    tar=event.currentTarget
    tar.style.background="red"
}),false

function loadData(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  }
  
  loadData('https://music.163.com/#/mv?id=14417823');
  
  function handleData(data) {
    console.log(data);
  }
  
})
