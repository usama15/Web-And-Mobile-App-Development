var inputTextField = document.getElementById("inputTextField");
var ul = document.getElementById("ul");
var submit = document.getElementById('submit');
inputTextField.value.trim()

function AddToList() {
  if(inputTextField.value.trim() ){
  var li = document.createElement("li");
  var p = document.createElement("p");
  var edit = document.createElement("button");
  edit.innerHTML = '<i class="far fa-lg fa-edit"></i>';
  edit.setAttribute('class','btnEdit')
  var del = document.createElement("button");
  del.innerHTML = '<i class="fas fa-lg fa-window-close"></i>';
  del.setAttribute('class','btnDdit')
  del.onclick = function () {
    return DeleteValue(id)
  };
  var id = "li-id-" + ul.childNodes.length;
  edit.onclick = function () {
    return EditValue(id)
  };
  
  localStorage.setItem(ul.childNodes.length,id)
  localStorage.setItem("text"+ul.childNodes.length,inputTextField.value)
  p.appendChild(document.createTextNode(inputTextField.value))
  li.setAttribute("id", id);
  li.setAttribute("class", " setStyle");
  li.appendChild(p);
  li.appendChild(edit);
  li.appendChild(del);
  ul.appendChild(li);
  // li.firstChild.nodeValue.style.color = 'red'
  inputTextField.value = ""
}
}


function EditValue(id){
    var selectedList = document.getElementById(id);
    console.log(selectedList.firstChild.firstChild.nodeValue)
    inputTextField.value = selectedList.firstChild.firstChild.nodeValue
    submit.innerText = "Update Value"
    submit.onclick = function(){
      return Update(id)
    }
  }

function DeleteValue(id){
  var selectedList = document.getElementById(id);
  selectedList.remove()
}
function Update(id){
  var selectedList = document.getElementById(id);
  selectedList.firstChild.firstChild.nodeValue = inputTextField.value
  submit.innerText = "Submit Activity"
  submit.onclick = function(){
      return AddToList()
    }  
}
function DeleteAll(){
  ul.innerHTML = ""
  localStorage.clear()
}