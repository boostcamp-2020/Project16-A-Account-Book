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
    if (socket.account) {
        socket.join(socket.account);
    }
    socket.on('discounnect', function () {
        if (socket.account) {
            socket.to(socket.account).emit('leave user');
        }
    });
    socket.on('message', function (room, msg) {
        socket.to(room).emit('message', msg);
    });
});
httpServer.listen(5000);
