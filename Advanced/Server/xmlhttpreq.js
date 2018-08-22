/* let result=null;
let xhr =new XMLHttpRequest();

//4 -> have data back!
//200 -> 200 -> Success! 
xhr.onreadystatechange=function()
{ 
    if(xhr.readyState==4 && xhr.status==200){
        result=xhr.resultText;
    }
}

//Open connection
xhr.open("GET","url");

//Send request
xhr.send(); */

var socket=new WebSocket('url');

//Recive message from Server
socket.onmessage=function(e)
{
    $('#output').append('<li>'+e.data+'</li>');
}

//Tell us if socekt is open!
socket.onopen=funtion()
{
    $('#send-message').removeAttr('disabled');
}

//Send message to Server
socket.send('Hello, World!');