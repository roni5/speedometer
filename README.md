## Front end Tech Test

Welcome! You’ve just got a new car and it has a fancy socket api of the car’s speedometer. We woud like you to create a UI that does the following: 

- displays live speed and speed history in a JavaScript framework of your choosing. 
- Feel free to use Typescript, Flow, or Javascript. 
- Don't worry too much about styles, but please include some. 
- Also, please include comments/psuedo code to indicate what you'd improve or implement if you had more time.

Need a project? You can generate it with one of these clis or choose your own:

* Angular CLI - https://cli.angular.io/
* Create React App - https://github.com/facebook/create-react-app
* *Vue CLI - https://github.com/vuejs/vue-cli

### Socket API  (https://speedometer-code-test.herokuapp.com)
With the following socket code snippet, create your UI. Use npm equivalent: npm i socket.io-client; import * as io from socket.io-client. For angular 6, you may have to `(window as any).global = window` for the socket.io-client.

EXAMPLE SOCKET SNIPPET
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TEST</title>
</head>
<body>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.js"></script>
  <script>
    var socket = io('https://speedometer-code-test.herokuapp.com', {
      transports: ['websocket'],
      'force new connection': true,
      forceNew: true,
      reconnectionAttempts: Infinity,
      reconnect: true,
      reconnection: true
    });
    socket.on('connect', function(){
      socket.on('SPEED_RECEIVED', function(data){ console.log(data) });
    });
  </script>
</body>
</html>
```
Good luck and any questions please contact pete@ruuby.com

