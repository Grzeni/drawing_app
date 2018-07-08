let express = require('express');
let app = express();
let server = app.listen(8080);
app.use(express.static('public'));

let socket = require('socket.io');
let io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    socket.on('mouse', mouseMsg);
    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
    }
}