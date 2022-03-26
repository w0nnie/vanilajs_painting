const canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;


function startPainting(){
    painting = true;
}
function stopPainting(){
    painting = false;
}
function onmouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onmouseDown(event){
    painting = true;
    console.log(painting);
}

canvas.addEventListener("mousemove", onmouseMove);
canvas.addEventListener("mousedown", onmouseDown);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave",stopPainting);
