import React, { createContext } from 'react';
const SocketContext = createContext({
  speed: 0,
  positionInLine: 0,
});
export default SocketContext;
