    import React, { useContext } from 'react';
    import { useState, useEffect } from 'react';
    // import SocketContext from './components/socket_context/context';
    import io from 'socket.io-client';
    import Speed from "./components/Speedometer";
    import SVG from './components/SVG'
    // import { getSpeed } from './components/sockets/emit';
    import SpeedData from './components/SpeedData';
    import MyComponent from './components/MyComponent'
import Button from './components/Button';
    import CountHook from './components/CountHook';
    import './App.css';
    var result;
        function App(props) {
          const [data, setData] = useState([]);
          useEffect(() => {
            var socket = io(
              'https://speedometer-code-test.herokuapp.com',
              {
                transports: ['websocket'],
                'force new connection': true,
                forceNew: true,
                reconnectionAttempts: Infinity,
                reconnect: true,
                reconnection: true,
              },
            );
            socket.on('connect', function() {
              socket.on('SPEED_RECEIVED', function(data) {
                console.log(data.speed, 'datafrom socket');
                //   result = data;
                  console.log(data, 'boy oh boy');
                // const dataFromServer = JSON.stringify(data.SocData);
                // console.log(result, 'bind data');
                // let result = JSON.parse(event.data);
                // socData = data.speed;
                // let result1 = JSON.parse( data );
                //  console.log(result1);
                //   setData(state => {
                //     // socket.on('connect', getSpeed => {
                //     console.log(state.data, 'state state');
                //     return { ...state, data };
                //   }),
                //    });
                setData(data);

              }, [data]);
            //    socket.on(socData);
            });
            return () => {
              socket.removeAllListeners();
              socket.close();
            };
          });

          //   const handleData = (state, data) => {
          //       let result = JSON.parse( data );
          //   setData(result.speed)

          // }
          // const changeValue = event => setData(event.target.value);
          //     let speed = socData.data;
          console.log(data,'boy oh boy');
          // var results = Object.keys(socData).map(function(key) {
          // return [Number(key), socData[key]];
          // });
          // const { speed } = useContext(SocketContext);
          // function handleSocket(e) {
          // return setData(e.socData);
          // }
            let i;
            // let arr = Object.keys(result).map(k => result[k]);
            // const socData = data.map( i => {
            //      console.log('hello');
            //    return <h1>{i}</h1>;
            //  } );
            //  {
            //    socData.map(res => <div>{res}</div>);
            //  }
          return (
            <div>
              <p>speed {data.speed}</p>
              <SpeedData speed={data.speed} />
                  <MyComponent name="Roni" />
                  <CountHook />
              {console.log(JSON.stringify('data'))}
              {/* {socData.map(res => <div>{res}</div>))} */}
              {/* React.createElement("div", null, socData); */}
              {/* {props.socData.map(res => <div>{res.speed}</div>)} */}
              {/* {
                      socData.map( num => (
                <li key={i++}>
                  <a href="localhost:3000" >{num}</a>
                </li>
              ))} */}
            </div>
          );
        }
    export default App;
    // const socket = io('http://localhost', {
    // path: '/myownpath'
    // });
    // server-side
    // const io = require('socket.io')({
    // path: '/myownpath'
    // });
