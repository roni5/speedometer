DEBUG=socket.io\* node index.js
Either periodically, when the user disconnects, or every time a the "chat-object" changes (eg. a new message is sent), save the "chat-object" in a database of any sort you like. You can use JSON to serialize the "chat-object", save it in any way you like (eg. a custom file, a mysql database, or whatever). To serialize an object, use the code below on the node server:

var chatString = JSON.stringify(theChatObject);
Save the string together with the two users' unique IDs. So when a new conversation is started between the same two people. You can just go to your file or database and retrieve the old chatobject, and unserialize it with the following code.

var oldChat = JSON.parse(theRetrievedChatString);
3

Assuming this is a big deal because you want to avoid a small amount of latency waiting for a database save (which I think is not actually a problem to do that)..Send the message. On the screen, display 'sending message..' On the server, initiate the asynchronous database save. When the other user's client receives the message, send print an acknowledgement on the sender's screen When the database save on the server completes, you dont have to do anything, unless it gives an error in which case you can inform the user there was an error saving the message and then retry the save.

Some systems like Google Hangouts during voice/video don't even try to save chat history.

You are only really going to have a problem if your database server runs out of space or goes down, in which case you have bigger problems and your error messages will clue the users in.

## Or you can wait to save in the database, it isn't a huge amount of time to wait. Also, websockets and socket.io always go to the server anyway. If you were using WebRTC Data Channels, that is a peer 2 peer protocol that would not involve the server.

import React from 'react';
// import React, { Component } from 'react'
// import useSocket from 'use-socket.io-client'
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Speed from "./components/Speedometer";
import SVG from './components/SVG'
import './App.css';
// const [socket] = useSocket
// socket.on('news', (cb) => {
// cb(0);
// });
function App(...args) {
const [socket, setSocket] = useState(
io(
'http://localhost:8080',
{
transports: ['websocket'],
'force new connection': true,
forceNew: true,
reconnectionAttempts: Infinity,
reconnect: true,
reconnection: true,
},
{ speed: [] },
...args,
),
);

    useEffect( () => {
             socket.on('connect', function() {
               socket.on('SPEED_RECEIVED', function(data) {
                //    let speed = JSON.stringify( data.speed );
                   let result = data;
                   setSocket(result.data)
                // console.log('check for speed', speed);
                  console.log('check for speed', result)
                 console.log(
                   ' client Recieved a new connection from origin ' +
                     socket.id,
                 );
                 // console.log('websocket', message);

               });
             });
        return () => {
          socket.removeAllListeners();
          socket.close();
        };
      }, [socket]);
    //  useEffect(() => socket.on({ setSocket }), [socket]);

return (
<div className="App">
{console.log(socket, 'Iam here I am here')}
{/_ {socket.map(speed => {
return <div>{speed}</div>;
})} _/}
{/_ <header className="App-header">
<SVG width={100} />
<p className="center">Speedometer</p>
</header>
<Speed />
<div className="container">
<div className="card"></div>
</div> _/}
</div>
);
}

export default App;
