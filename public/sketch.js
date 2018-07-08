let socket;

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
    console.log("pen selected");
    strokeWeight(1);
    stroke('black');
}

function eraser() {
    console.log("eraser selected");
    strokeWeight(14);
    stroke('white');
}

function draw() {
}