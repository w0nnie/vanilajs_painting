const canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR="#2c2c2c";
canvas.width = 700;
canvas.height = 700;
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

//max commit test
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
}

function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
function rangeChange(event){
    ctx.lineWidth = event.target.value;
}
function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,700,700);
    }
}
function buttonChange(){
    if(filling == true){
        filling = false;
        mode.innerHTML = "Fill";    
    }else{
        filling = true;
        mode.innerHTML = "PAINT";
        ctx.fillStyle = ctx.strokeStyle;
    }
}
canvas.addEventListener("mousemove", onmouseMove);
canvas.addEventListener("mousedown", onmouseDown);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave",stopPainting);    
canvas.addEventListener("click",handleCanvasClick);
range.addEventListener("click",rangeChange);
mode.addEventListener("click",buttonChange);//commit test
// colors.forEach(color => color.addEventListener("click",changeColor)); forEach 메서드의 경우 array(배열) 요소를 각각에 대해 실행한다 object에서는 사용이 불가능하다.
Array.from(colors).forEach(color => color.addEventListener("click",changeColor));
console.log(Array.from(colors)); // object로부터 array를 만듬
console.log(colors); // object로부터 array를 만듬
//Array.from 을 사용하지 않았을시 Prototype = HTMLCollection  =>  유사배열([0] 사용가능) color의 경우 div element들을 담고있다 
//Array.from 사용시 Prototype = Array