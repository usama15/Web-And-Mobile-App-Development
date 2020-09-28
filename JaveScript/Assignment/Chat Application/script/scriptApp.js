var userToken = localStorage.getItem("TOKEN");
console.log(userToken)

var userid = document.getElementById('usersid')
var userid1 = document.getElementById('usersid1')
firebase.database().ref('users/'+userToken).on('value', function(data){
    userid.innerHTML = data.val().email
    userid1.innerHTML = data.val().email
})
var items= ''
var contacts = document.getElementById('contacts');
firebase.database().ref('users').on('value', function(data){
    console.log(data.val())
    var users = Object.keys(data.val())
    var array = []
    for(i=0;i<users.length;i++){
      console.log(data.val()[users[i]])
      array.push([data])
        // firebase.database().ref('users/'+users[i]).on('value', function(data){
        //     // console.log(data.val().email)
        //     var token = data.val().token
        //     console.log(token)
        //     var structure = `
        //     <div class="col-lg-4 contact-top">
        //     <a onclick="messageBox(${data.val().token})" class="list-group-item list-group-item-action active">
        //       <div class="contact-top">
        //         <img class="contact-photo col-lg-4" src="./image/people.jpg" alt="">
        //         <div class="contact-text col-lg-7">${data.val().email}</div>
        //       </div>
        //     </a>
        //     </div>
        //     ` 
        //     items += structure;
        //     contacts.innerHTML = items
        // })
    }
})

function messageBox(token){
  console.log(token)
    var msgBox = document.getElementById('messageBox')
    firebase.database().ref('users/'+token).on('value', function(data){
    var HTMLBox = `
    <div class="message-border">
      <div class="message-head">Messages  Customer ID: ${data.val().email}</div>
      <div class="" id="message-msg">
        <div class="message1" id="message1">Welcome to my page</div>
      </div>
      <div class="message-footer">
        <input type="text" id="message-input" placeholder="Send your message">
        <button onclick="sendMessage(${token})" id="message-btn">SEND</button>
      </div>
    </div>
   `
    msgBox.innerHTML = HTMLBox
})
}
function sendMessage(token){
    var displayMessage = document.getElementById('message1');
    var input = document.getElementById('message-input');
    var sendMsg = {
        0:input.value,
    }
    firebase.database().ref('users/'+token+'/message').set(sendMsg)
}