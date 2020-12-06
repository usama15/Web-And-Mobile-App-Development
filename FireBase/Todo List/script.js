const database = firebase.database()
const databaseRef = database.ref('taskList')
var ul = document.getElementById("taskList");
var task = document.querySelector("#task");
databaseRef.on('value', (snapshot) =>{
    let Task=[]
    console.log(snapshot.val())
    snapshot.forEach(todo=>{
        Task.push(todo.val())
    })
    previousList(Task)
})
function previousList(Task){
    if(Task.length){
        for(a=0; a<=Task.length-1; a++){
            List(Task[a])
        }
    }
}
function List(tasks){
    var list = document.createElement('li');
    var Text = document.createTextNode(tasks.task)
    var edit = document.createElement('button');
    var del = document.createElement('button');
    var editTextNode = document.createTextNode("Edit")
    edit.addEventListener('click', ()=>editText(tasks.id, tasks.task))
    edit.setAttribute('class',"btnEdit")
    edit.appendChild(editTextNode)
    var delTextNode = document.createTextNode("Delete")
    del.addEventListener('click', ()=>delText(tasks.id))
    del.setAttribute('class',"btnDel")
    del.appendChild(delTextNode)
    
    list.setAttribute('id','setList')
    list.appendChild(Text)
    ul.appendChild(edit)
    ul.appendChild(del)
    ul.appendChild(list)
}
function submitTask(){
    
    ul.innerHTML=""
    var id = new Date().getTime()
    const Obj={
        id,
        task: task.value,
    }
    databaseRef.child(id).set(Obj)
}

function editText(id, lisTask){
    task.value = lisTask
    var updateBtn = document.querySelector('#TodoSet');
    var updateText = document.createTextNode("Update Task")

    updateBtn.appendChild(updateText)
    updateBtn.setAttribute('onclick', ' 
    ()')    
}
function updateText(){
    console.log(Working)
}
function delText(id){
    var task = document.querySelector("#task");
    ul.innerHTML=""
    databaseRef.child(id).remove()
}