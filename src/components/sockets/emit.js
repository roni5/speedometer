import { socket } from './index';
export const addClientToQueue = () => {
  socket.emit('addClientIdToQueue');
};
export const getSpeed = () => {
  socket.emit('speedToSocket');
};
export const removeUserFromQueue = () => {
  socket.emit('removeUserFromQueue');
};
/**
 * emit.js contains methods that can be imported
 * and used in any component (in an onClick method or wherever):
 * So if you have a onClick => addClientToQueue() <button>,
 * the server will listen for a socket.on(‘addClientIdToQueue’)
 * event being emitted from the client, and will respond accordingly.
 */