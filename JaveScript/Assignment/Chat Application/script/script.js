function signup(){
    var userid = document.getElementById('userid');
    var userpass = document.getElementById('userpass');
    firebase.auth().createUserWithEmailAndPassword(userid.value, userpass.value)
    .then((result)=>{
        alert("You have successfully Signed up");
        console.log(result);
        window.location.href = "./index.html";
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var divError= document.getElementById('error');
        divError.innerHTML = error
      });
}

function login(){
    var userid = document.getElementById('userid');
    var userpass = document.getElementById('userpass');
    console.log(userid.value)
    
    firebase.auth().signInWithEmailAndPassword(userid.value, userpass.value)
    .then(async function (result){
        var data = {
            email : result.user.providerData[0].email,
            token : result.user.uid
        }
        console.log(data)
        alert("You have Login");
        console.log(result)
       await firebase.database().ref('users/'+result.user.uid).set(data)
        localStorage.setItem("TOKEN",result.user.uid)
        window.location.href = "./index.html";
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var divError= document.getElementById('error');
        divError.innerHTML = error
    });
    

    }
var data = {
    name: 'tehseen',
    age: 23,
}
