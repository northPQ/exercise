var socket=io();

$(document).ready(function(){
  $('form').submit(function(){
   
    var user =$('#name');

    if(user.val()=="" || user.val()==null || $('#m').val()=="") return false;

    socket.emit('chat_message',
        {
          nickname:$('#name').val(),
          content:$('#m').val()
        }
          );
    $('#m').val("");
    return false;
  });
  socket.on('chat_message',function(data){
    $('#message').append($('<li>').html("<b>" + data.nickname+"</b> : "+data.content));
    $('html').scrollTop($('ul').height());
  });
  socket.on('old_message',function(data){
    $('#message').append(data);
    $('html').scrollTop($('ul').height());
  });
});
