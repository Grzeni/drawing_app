let socket;
let r = 0, g = 0, b = 0;


function setup() {
    createCanvas(1366, 620);
    cursor(CROSS);
    socket = io.connect('http://localhost:8080');
    socket.on('mouse',
        function (data) {
        
        line(data.x, data.y, data.prevX, data.prevY);
    });
}


function mouseDragged() {
    line(mouseX, mouseY, pmouseX, pmouseY);
    let data = {
        x: mouseX,
        y: mouseY,
        prevX: pmouseX,
        prevY: pmouseY
    }
    socket.emit('mouse', data);
}

let pen_btn = document.getElementById("p_btn");

pen_btn.addEventListener("click", pen);

let eraser_btn = document.getElementById("e_btn");

eraser_btn.addEventListener("click", eraser);

function pen() {
    strokeWeight(2);
    stroke(r,g,b);
}

function eraser() {
    strokeWeight(8);
    r = 255;
    g = 255;
    b = 255;
    stroke(r, g, b);
}

function draw() {
}