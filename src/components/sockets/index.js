import io from 'socket.io-client';
import { socketEvents } from "./events";
import { getSpeed } from "./emit";
export const socket = io();
export const initSockets = ({ setValue }) => {
  socketEvents({ setValue });
  // setValue    ^ is passed on to be used by socketEvents
  getSpeed();
};