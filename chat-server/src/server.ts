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
    if (socket.account){
        socket.join(socket.account);
    }

    socket.on('discounnect', () => {
        if (socket.account){
            socket.to(socket.account).emit('leave user');
        }
    });

    socket.on('message', (room:string, msg:string) => {
            socket.to(room).emit('message', msg);
    });

});

httpServer.listen(5000);
