import { Socket } from 'socket.io';

export interface ISocket extends Socket {
    account?: string
}