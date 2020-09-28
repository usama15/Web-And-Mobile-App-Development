function myMessage(){
    var message = document.getElementById('txts');
    var p = document.createElement('p');
    var messages = document.createTextNode(message.value);
    p.appendChild(messages);
    var sendmessage = document.getElementById('txt');
    sendmessage.appendChild(p);
    message.value = '';
}