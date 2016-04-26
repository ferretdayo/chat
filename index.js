var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
//Login
app.get('', function(req, res){
  res.sendfile('index.html');
});
//ChatPage
app.get('/chat', function(req, res){
  res.sendfile('chat.html');
});

//header画像
app.get('/header', function(req, res){
  fs.readFile('header.JPG', function(err, data){
    res.set("Content-Type", "image/jpeg");
    res.send(data);
  });
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('a user disconnected');
  });
});

//io.emit('some event', {for: 'everyone'});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
