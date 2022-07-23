//single
console.log(window)
console.log(document.getElementById('main'))
const main = document.getElementById('main')
console.log(main)

//Multiple 

const ul=document.querySelector('.site-nav ul')
//事件
ul.children[0].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        top: 1, 
        behavior: "smooth" 
    });
})
const img=document.getElementById('box1')

function getElementAbsPos(e) 
{
    var t = e.offsetTop;
    var l = e.offsetLeft;
    while(e = e.offsetParent)
    {
        t += e.offsetTop;
	l += e.offsetLeft;
    }
 
    return t;
}

ul.children[1].addEventListener('click',(e)=>{
    console.log('yes');
    window.scrollTo({ 
        top: getElementAbsPos(img),
        behavior: "smooth" 
    });
})
var t =screen.availHeight;
console.log(t)
ul.children[4].addEventListener('click',(e)=>{
    window.scroll({top:t,behavior:'smooth'});
})