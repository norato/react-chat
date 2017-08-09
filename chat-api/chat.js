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

  socket.on('send message', (data)=>{
    console.log(data)
    let message = { messages: `Receive message ${Date()}`}
    console.log(message)
    io.sockets.emit('new message', {msg: message })
  })
})