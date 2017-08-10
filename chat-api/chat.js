var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3001;

app.use(function (req, res) {
  res.send({ msg: "hello" });
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var users = [];
var connections = [];

server.listen(port, function(){
  console.log('listening on *:' + port);
});

io.sockets.on('connection', (socket) => {
  connections.push(socket)
  console.log(`Connected: ${connections.length} sockets connected.`);

  // Disconected
  socket.on('disconnect', (data) => {
    connections.splice(connections.indexOf(socket), 1);
    console.log(`Disconected: ${connections.length} sockets connected.`);
  })

  // New Message
  socket.on('send message', (data)=>{
    console.log(data)
    let message;
    if ( connections.length > 1 ) {
      message = data
      message['user'] = socket.username
    } else {
      let time = new Date()
      message = {
        text: "Sorry, but are alone in the room",
        time: time.toString(),
        user: 'Bot'
      }
    }
    console.log(message)
    io.sockets.emit('new message', {message: message })
  })

  // New User
  socket.on('new user', (data)=> {
    socket.username = data;
    users.push(socket.username)
  })
})