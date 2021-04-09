import { createServer } from 'http';
import { Server } from 'socket.io';
import { ISocket } from './types';

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        credentials: true,
    }
});

io.on('connection', (socket: ISocket) => {
    
    socket.on('new_connect', (room) => {
        socket.account = room;
        socket.join(room);
    })

    socket.on('disconnect', () => {
        if (socket.account){
            socket.to(socket.account).emit('leave user');
        }
    });

    socket.on('message', (room:string, msg:string) => {
            socket.broadcast.to(room).emit('message', msg);
    });

});

httpServer.listen(5000);
