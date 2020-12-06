function startQuiz(){
    var inputType = document.getElementById('inputType');
    var nameRegex = /^[a-zA-Z ]+$/
    if(nameRegex.test(inputType.value) == false){
        alert("Please enter your correct name")
    }
    else{
        localStorage.setItem("username", inputType.value);
        window.location.href = "./questions.html";
    }
}
var Questions = [
    {id:1, question:"Q: What are you doing", opt:['a','b','c','d'],ans:2},
    {id:1, question:"Q: What are yolllu doing", opt:['a','b','c','d'],ans:2},
    {id:1, question:"Q: What are yojjju doing", opt:['a','b','c','d'],ans:2}
]
var containerQuestion = document.getElementById("containerQuestion");
var candidateName = document.getElementById("candidateName");
var options = document.getElementById("options")

candidateName.innerText = localStorage.username
console.log( Questions.length)
var flag =0;
var opt = "";
containerQuestion.innerText = Questions[flag].question;
for(a=0; a<Questions[flag].opt.length; a++){
    var radioID = "id_"+a;
    var radioValue = Questions[flag].opt[a]
    var radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('class','setRadio')
    radio.setAttribute('id',radioID)
    radio.setAttribute('value',a)

    var label = document.createElement('label')
    label.setAttribute('for', radioID)

    var labelText = document.createTextNode(Questions[flag].opt[a])

    label.appendChild(labelText)
    opt=  radio
    // console.log(label)
    // console.log(radio)
    // console.log(options)
    options.appendChild(opt)
}
console.log(opt)
