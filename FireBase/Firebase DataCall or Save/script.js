
// const username = document.querySelector("#username");
// const email = document.querySelector("#email");
// const age = document.querySelector("#age");

// const Database = firebase.database();
// const userListRef = Database.ref();
// userListRef.on('value',snapshot=>{ console.log(snapshot.val()) })
// userListRef.once('value',snapshot=>{ console.log(snapshot.val()) })

// const handleFormSubmit=()=>{
//     const userData = {
//         username: username.value,
//         email: email.value,
//         age: age.value 
//     }
//     var id= Database.ref().push().key
//     const newData = {
//         id,
//         ...userData
//     }
//     Database.ref(`users/${newData.id}`).set(newData)
// }
const Database = firebase.database();
const callData = Database.ref()

// value, child_added, child_removed, child_changed

callData.on('value',snapshot=>{ 
    // const Array = Object.values(snapshot.val())
    // console.log(Array[0])

    // console.log(snapshot.value())
    // const isExist = snapshot.child("-MM-7QhE7NvDZKghzyEX")exis

 })
 const submitData = ()=>{
 var id = document.getElementById('id');
 var name = document.getElementById('name');
 var age = document.getElementById('age');
 const newDate = Date.now();
 if(!id.value){
    const Obj ={
        id: newDate,
        name: name.value,
        age: age.value
    }
    console.log(Obj)
     Database.ref('users/'+newDate).set(Obj)
 }
 else{
    if(name.value.trim()){
        updatedObj={
            name:name.value
        }
    if(age.value.trim()){
        updatedObj={
            age:age.value
        }
    Datebase.ref('users/'+id.value).update(updatedObj)

}
 const updatedObj={
     UpdatedTime: newDate,
 }}
 
 

// const submitData = ()=>{
//     const setData = document.getElementById('todoapp');
//     const UL = document.getElementById('myList');
    
//     const id = Database.ref().push().key
//     const Data = {
//         id,
//         todoList:setData.value
//     }
//     Database.ref(`todoList/${Data.id} `).set(Data)
// }