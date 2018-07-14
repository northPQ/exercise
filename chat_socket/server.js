const express = require('express');
const app = express();
const http = require('http').Server(app);
const io =require('socket.io')(http);
var fs = require('fs');
const port = 10029;

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
res.sendFile(__dirname + '/public/index.html');
});

io.on('connection',function(socket){
  console.log('a user connected');
  fs.readFile('message.txt',function(err,data){
  if(err) console.log("real error");
  socket.emit('old_message',data.toString());
  });

  socket.on('chat_message',function(data){
    io.emit('chat_message',data);
    console.log(data.nickname + ":" + data.content);
    var content = "<li><b>" + data.nickname + "</b> : " + data.content + "</li>";
    fs.appendFile('message.txt',content,function(err){
    if(err) console.log("append fail");
    else console.log("append succsess");
    });
  });

  socket.on('disconnect',function(){
    console.log('a user disconnected');
  });
});

http.listen(port,function(){
console.log("listening");
});
