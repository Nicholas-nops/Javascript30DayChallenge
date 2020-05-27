//cavans things and tricks
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55'
//type of "pen" in this case a circle
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=100;
//this is to define first  if the user is clicking to drwan and the position of the mouse in the screen
let isDrawing = false;
let lastX = 0;
let lastY = 0;
// this varibale is to use mother effing "hsl" to randomize the colors
let hue = 0;
//add an effect when reseting the pen
let direction = true;

function draw(e){
    if(!isDrawing) return;
        console.log(e);
        //defining hsl proprierty
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        //defining the propriertys of  canvas. 
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
        hue++;
        if (hue >= 520) {
            hue = 0;
        }
        if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
            direction = !direction;
        }
        if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
     isDrawing = true
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
