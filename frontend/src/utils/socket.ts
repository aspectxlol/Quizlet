import { socket } from '../store/socket.js';
import { io } from 'socket.io-client';
import { env } from '$lib/env.js';

export const getSocket = async () => {
  const client = io(env.SERVER_URL);
  client.on('connect', () => {});
  socket.set(client);
};