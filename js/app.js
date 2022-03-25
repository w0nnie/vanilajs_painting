const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}
function onmouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onmouseDown(event){
    painting = true;
    console.log(painting);
}

function onmouseUp(event){
    stopPainting();
    console.log(painting);
}

canvas.addEventListener("mousemove", onmouseMove);
canvas.addEventListener("mousedown", onmouseDown);
canvas.addEventListener("mouseup", onmouseUp);
canvas.addEventListener("mouseleave",stopPainting);
