const userName=document.getElementById('username')
const Database = firebase.database();

const handleFormSubmit=()=>{
    // Database.ref('data').set({  //It will replace the old value with the new value.
    //     value:userName.value
    // })

    Database.ref('data').child('newChild').push({  //It creates new child and it will replace the old value with the new value.
        value:userName.value
    })
    // Database.ref('data').push({  //It will forcely add the new value in the next line
    //     value:userName.value
    // })
}