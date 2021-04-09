"use strict";
exports.__esModule = true;
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var httpServer = http_1.createServer();
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: '*',
        credentials: true
    }
});
io.on('connection', function (socket) {
    socket.on('new_connect', function (room) {
        console.log(room + ' join');
        socket.account = room;
        socket.join(room);
    });
    socket.on('disconnect', function () {
        if (socket.account) {
            socket.to(socket.account).emit('leave user');
        }
    });
    socket.on('message', function (room, msg) {
        console.log(socket.id);
        console.log(room, msg);
        io.to(room).emit('message', msg);
    });
});
httpServer.listen(5000);
