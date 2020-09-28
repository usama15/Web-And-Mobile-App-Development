function signup(){
    var userid = document.getElementById('userid');
    var userpass = document.getElementById('userpass');
    console.log(userid,' ',userpass)
    firebase.auth().createUserWithEmailAndPassword(userid.value, userpass.value)
    .then((result)=>{
        alert("You are Registered")
        console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
}

function login(){
    var userid = document.getElementById('userid1');
    var userpass = document.getElementById('userpass1');
    console.log(userid.value,' ',userpass.value)

    firebase.auth().signInWithEmailAndPassword(userid.value, userpass.value)
    .then((result)=>{
        alert("You have logged in")
        console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
}