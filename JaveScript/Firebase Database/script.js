function dataSubmit(){
    var txtInput1 = document.getElementById('txtInput1')
    var txtInput2 = document.getElementById('txtInput2')
    var data = {
        name: txtInput1.value,
        age: txtInput2.value,
    }
    console.log(data)
    // firebase.database().ref('details').set(data)
    
    // firebase.database().ref('details').child('details1').set(data)
    // firebase.database().ref('details/details').set(data)
    // var key = Math.random() * 235486;
    
    // var key = firebase.database().ref('details').push().key
    // console.log(key)
    // firebase.database().ref('details/'+ key.toFixed()).set(data)
    
    // firebase.database().ref('details').push(data)
    var key = firebase.database().ref('details').push().key
    var data = {
        name: txtInput1.value,
        age: txtInput2.value,
        key: key
    }
    firebase.database().ref('details/'+ key).set(data)
    
}
function getFirebaseData(){
    // firebase.database().ref('details').once('value',function(data1){
    firebase.database().ref('details').on('value',function(data1){
        console.log(data1.val())
    })
}
function removeFirebaseData(){
    firebase.database().ref('details').remove()
}
function editFirebaseData(){
    firebase.database().ref('details/-MGyC9FyK4O0qNoDjuap').set({
        name: 'Muhammad Tehseen Jawed',
        age: 24,
        key: 1234
    })
}