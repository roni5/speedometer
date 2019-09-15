import { socket } from './index';
export const socketEvents = ({ setValue }) => {
  socket.on('speed', ({ speed }) => {
    setValue(state => {
      return { ...state, speed };
    });
  });
  socket.on('positionInLine', ({ positionInLine }) => {
    setValue(state => {
      return { ...state, positionInLine };
    });
  });
};
