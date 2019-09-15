const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080
const server = require('http').Server(app)
const socket = require('socket.io')
const bcrypt = require( 'bcrypt' )

 app.use('/static', express.static(path.join(__dirname, '/index.html')));

const users = [] // instead DB
// before we define our routes

/**
 * 2nd allows any request from Domain1.com to Domain2.com DB
 * 1st should only be for different Ports . your API restify
 * This code snippet, however, would enable CORS for all resources on your server.
 */

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get( '/users', ( req, res ) => {
    res.json( users )
} )
/** hashedPassword encapsulates salt
 * Removing salt FuBar 2nd @param , salt | auto round 10
*/
app.post( '/users', async ( req, res ) => {
    try {
        // const salt = await bcrypt.genSalt()
        hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword};
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send()
    }
} );

app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name = req.body.name);
  if (user == null) {
    return res.status(400).send('cannot find user');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success');
    } else {
      res.send('Not allowed');
    }
  } catch {
    res.status(500).send('error');
  }
});

//    const match = await bcrypt.compare(
//      req.body.password,
//      user.password,
//    );

//    if (match) {
//      res.sendFile(__dirname + '/index.html');
//      //res.send('Success');
//    } else {
//      //res.send('Not allowed');
//      res.sendFile(__dirname + '/index.html');
//    }
    // initial Pass @compare timing Alog return true | false
    // var conditionChecker = function() {
    //   return foo == pie;
    // };
    // const check = () => await bcrypt.compare( req.body.password, user.password );
/**
Limit CORS to specific routes
If you only want to serve some routes to clients of all origins,
you should set the res.headers specifically for these routes and omit the next(),
but just send your response, like in the following example:

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json({data: [1,2,3,4]})
});
With this method you can limit the Cross Origin Resource Sharing headers to
specific routes of your API in express.js.
*/

// io = socket(server)
// io.set('transports', ['websocket'])
// io.on('connection', (socket) => {
//   let speed = 60
//   console.log('CONNECTED')
//   setInterval(() => {
//     const change = Math.random() < 0.5 ? -1 : 1
//     if (speed < 40 && !change) {
//       speed += 1
//     } else if (speed > 80 && change) {
//       speed -= 1
//     } else {
//       speed = speed + change
//     }
//     io.emit('SPEED_RECEIVED', { speed })
//   }, 300)
// })
/**
 * const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
  origins: ['http://localhost:4200'] // an array of origins
});

const server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);

server.get('/api/products', (request, response) => {
  response.json({ message: 'hello REST API' });
});

server.listen(3000, () => console.info(`Magic happens on port 3000`));
Notice the cors variable which calls the middleware and accepts a list of 'origins' in
form of an array. Every URL that you put in that array is going to be able to consume this API, without every throwing a CORS error.
 */

// app.get('/', function (req, res) { // +index.html
//   res.sendFile(path.join(`${__dirname} + /public`))
// } )
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })
server.listen(PORT, function () {
  console.log(`Roni server is running on port ${PORT}`)
})
