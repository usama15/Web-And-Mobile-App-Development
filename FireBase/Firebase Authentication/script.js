const auth = firebase.auth()
function emailAuth(){
    var email = document.getElementById('email');
    var pass = document.getElementById('password');
    console.log(email.value + pass.value)
    auth.createUserWithEmailAndPassword(email.value, pass.value)
    .then(user=>{
        console.log(user.user)
    })
    .catch(error=>{
        alert(error)
    })
}