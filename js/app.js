const canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = "#FF3B30";
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
    if(!painting){ //경로를 만듬
        // console.log("creating  Path Line " ,x,y);
        ctx.beginPath(); //경로 생성
        ctx.moveTo(x,y); //선 시작 좌표
    }else{ // 그림
        // console.log("creating Line " ,x,y);
        ctx.lineTo(x,y); //선 끝 좌표
        ctx.stroke(); //선 
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
console.log(Array.from(colors)); // object로부터 array를 만듬
console.log(colors); // object로부터 array를 만듬
//Array.from 을 사용하지 않았을시 Prototype = HTMLCollection  =>  유사배열([0] 사용가능) color의 경우 div element들을 담고있다 
//Array.from 사용시 Prototype = Array