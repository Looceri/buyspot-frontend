import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // porta do NestJS WebSocket

export default socket;
