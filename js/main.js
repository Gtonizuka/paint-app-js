const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

// Clear button selector
const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');
const eraser_button = document.querySelector('.eraser-button');

console.log('fooo')

ctx.strokeStyle = color_picker.value;
ctx.lineWidth = stroke_weight.value;



function start (e) {
    console.log(start, 'startt')
    isDrawing = true;

    // Get dots as soon as you click
    draw(e);
}

function draw (e)  {

    const {clientX: x, clientY: y} = e;

    if(!isDrawing) return;
    ctx.lineCap = "round";

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath() 
    ctx.moveTo(x, y)

}

// Stop drawing
function stop() {
    isDrawing = false;
    ctx.beginPath() 
}

// Clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// Get color
function getColorPicker () {
    console.log(color_picker.value);

    ctx.strokeStyle = color_picker.value;
}

// Get line width
function getLineWidth () {
    ctx.lineWidth = stroke_weight.value;
}


// Activate eraser 
function eraserOn () {
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 9;
}



window.addEventListener('resize', resizeCanvas)
// Set canvas width + height
function resizeCanvas () {
    canvas.width =  800;
    canvas.height = 800;

}



// Mouse clicked inside canvas
canvas.addEventListener('mousedown', start);
// Mouse is moving - draw
canvas.addEventListener('mousemove', draw);
// Stop clicking - stop draw
canvas.addEventListener('mouseup', stop);
// Clear canvas 
clearButton.addEventListener('click', clearCanvas)
// Color picker 
color_picker.addEventListener('click', getColorPicker)
// Line width 
stroke_weight.addEventListener('click', getLineWidth)
// Eraser
eraser_button.addEventListener('click', eraserOn)

resizeCanvas();