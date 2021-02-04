var color, width, startX, startY, endX, endY;
function get_values(){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}

function clr(){
    pen.clearRect(0,0, canvas.width, canvas.height);
}

var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");

window.addEventListener('mousedown', md);
window.addEventListener('mouseup', mu);
window.addEventListener('mousemove', mm);
var tracker=0;
function md(event){
    tracker=1
}
function mu(event){
    tracker=0
}
function mm(event){
    startX= event.clientX-canvas.offsetLeft
    startY= event.clientY-canvas.offsetTop
    if(tracker==1){
        pen.beginPath();
        get_values();
        pen.lineWidth= width;
        pen.strokeStyle= color;
        pen.moveTo(startX, startY);
        pen.lineTo(endX, endY);
        pen.stroke()
    }
    endX= startX
    endY= startY
}
function setDimensions(){
    if(screen.width<=480)
    canvas.width=300
    canvas.style.overflow="hidden";
}