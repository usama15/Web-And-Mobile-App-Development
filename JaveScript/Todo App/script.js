function Save(){
    var list = document.getElementById('list');
    var todo = document.getElementById('input');
    var li = document.createElement('li');
    
    var todotxt = document.createTextNode(todo.value);
    li.setAttribute('class','delBack');
    li.appendChild()
    list.appendChild(li)
    
    // Button Edit
    var del_btn = document.createElement('button')
    var del_btn_node = document.createTextNode("Edit");
    del_btn.setAttribute('class','edit');
    del_btn.setAttribute('onclick','edit(this)');
    del_btn.appendChild(del_btn_node)
    li.appendChild(del_btn)
    
    // Button Delete
    var del_btn = document.createElement('button')
    var del_btn_node = document.createTextNode("Delete");
    del_btn.setAttribute('class','delete');
    del_btn.setAttribute('onclick','deleteaction(this)');
    del_btn.appendChild(del_btn_node)
    li.appendChild(del_btn)
}
function deleteaction(e){
    e.parentNode.remove()
}
function deleteall(){
    var list = document.getElementById('list');
    list.innerHTML = ''
    
}
function edit(e){
    var value = prompt("Enter New Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = value;

}