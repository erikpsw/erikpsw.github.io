async function predict(inputData) {
    try {
      // create a new session and load the AlexNet model.
      const session = await ort.InferenceSession.create('../../data/mnist.onnx');
      
      // prepare feeds. use model input names as keys.
      const feeds = { input1: new ort.Tensor('float32', inputData, [1,1,28,28]) };
      // feed inputs and run
      const results = await session.run(feeds);
      ans=[]
      sum=0
      results.output1.data.forEach(element => {
        temp=Math.pow(Math.E,element)
        sum+=temp
        ans.push(temp)
      });
      list=$(".bar")
      for(i=0;i<10;i++){
        p=ans[i]/sum
        $(list[i]).css("height",`${p*10}em`)
      }
      console.log(ans)
    } catch (e) {
      console.log(e);
    }
  }


$(function(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d",{willReadFrequently: true});
ctx.strokeStyle = "black";
ctx.fillStyle="black"
ctx.lineWidth = 3;
var isDrawing = false;
var pvx = 0;
var pvy = 0;
r=15

canvas_width=Number(getComputedStyle($("#myCanvas")[0]).width.match(/\d+/)[0])
//正方形
times=10//canvas_width/28

canvas.onmousedown = function(e) {
  isDrawing = true;
  pvx = e.clientX - canvas.offsetLeft;
  pvy = e.clientY - canvas.offsetTop;
};

imagedata= Float32Array.from({ length: 28*28 }, () => Math.random())
canvas.onmousemove = function(e) {
  if (isDrawing) {
    x=e.clientX - canvas.offsetLeft
    y=e.clientY - canvas.offsetTop;
    // ctx.beginPath(); // Start a new path
    // ctx.moveTo(pvx, pvy); // Move the pen to (30, 50)
    // ctx.lineTo(x, y); // Draw a line to (150, 100)
    // ctx.stroke(); // Render the path
    // pvx = x;
    // pvy = y;
    // imageData = ctx.getImageData(0, 0, canvas_width, canvas_height);

    //圆形笔触
    canvasdata=ctx.getImageData(0,0,canvas_width,canvas_width)
    get_image(canvasdata.data)
    console.log(imagedata);
    ctx.beginPath();
    ctx.arc(x, y,r , 0, 2*Math.PI, 0);
    ctx.fill()
    ctx.moveTo(x, y);
    predict(imagedata)
  }
}

function get_image(canvas){
  for(let i=0;i<28;i++){//横向遍历 index=y*width+x
    for(m=0;m<28;m++){
      tmp=0
      for(let j=0;j<10;j++){
          for(let k=0;k<10;k++){
            tmp+=canvas[40*i+4*j+1120*k+11200*m+3]
        }
      }
      imagedata[i+28*m]=tmp/25500
    }
  }}

canvas.onmouseup = function() {
  isDrawing = false;
};

$(".clear").mousedown( ()=>{
  $(".clear").css("border-style","inset")
  ctx.clearRect(0, 0, canvas_width, canvas_width)
  for(i=0;i<10;i++){
    p=ans[i]/sum
    $(list[i]).css("height",`0em`)
  }
})
$(".clear").mouseup( ()=>{
  $(".clear").css("border-style","outset")
})

})

   