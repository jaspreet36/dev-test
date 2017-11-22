const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timeStamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
    socket.id = counter++;
    //sockets[socket.id] = socket;

    console.log('Client Connected');
    socket.write('Please type your name : ');

    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;
        }
        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id == key) return;
            cs.write(`${socket.name} ${timeStamp()}: `);
            cs.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client Disconnected');
    });
});

server.listen(8000, () => {
    console.log('Server Bounds');
});