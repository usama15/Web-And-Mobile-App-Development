var counts = 0
window.onload = function(){
Questions(counts)
}
function Count(){
    counts+=1;
    console.log(counts)
    Questions(counts)
}
var Question = [
    {
        id:1,
        question: "What is Covid-19",
        answer:[
            'A Virus',
            'A Bactaria',
            'A Fruit',
            'A Insect'
        ],
        correct:'A Virus'
    },
    {
        id:2,
        question: "Which one the best way to satisfy your Bachi",
        answer:[
            'To buy Expensive Gifts.',
            'To talk day and night.',
            'To help her family.',
            'All of Above'
        ],
        correct:'All of Above'
    },
    {
        id:3,
        question: "What is the biggest challenge being as a men.",
        answer:[
            'Men has to work hard to earn a lot for the family',
            'Men has to wear jeans to be attractive.',
            'Men has to satisfy everyone otherwise family war start.',
            'All of the Above'
        ],
        correct:'Men has to work hard to earn a lot for the family'
    }
]
function Questions(e){
    var radio = document.getElementById('radio')
    var question = document.getElementById('question');
    var header = document.getElementById('question-no')
    question.innerHTML = `Q: ${Question[e].question} `
    radio.innerHTML = 
    `
    <div class="radio">
    <input type="radio" id='opt1' class="radioBtns" name='opt1' value=${Question[e].answer[0]} /> 
    <label class="labels" for='opt1'>${Question[e].answer[0]} </label>
    </div>
    <div class="radio">
    <input type="radio" id='opt2' class="radioBtns" name='opt2' value=${Question[e].answer[1]} /> 
    <label class="labels" for='opt2'>${Question[e].answer[1]} </label>
    </div>
    <div class="radio">
    <input type="radio" id='opt3' class="radioBtns" name='opt3' value=${Question[e].answer[2]} /> 
    <label class="labels" for='opt3'>${Question[e].answer[2]} </label>
    </div>
    <div class="radio">
    <input type="radio" id='opt4' class="radioBtns" name='opt4' value=${Question[e].answer[3]} /> 
    <label class="labels" for='opt4'>${Question[e].answer[3]} </label>
    </div>
    `
    header.innerHTML=`Question No : ${e}`;
    for(var y=0; y==Question[e].answer.length; y++){
        if()
    }



}
// function Questions(counts){
// var questionNo = 0; 
// var varQuestion = document.getElementById('question');
// varQuestion.innerHTML = Question[counts].question ;
// console.log(varQuestion.innerHTML)
// var Question_no = document.getElementById('question-no');
// Question_no.innerHTML = "Question No : " + counts;

// var opts = document.getElementById('radio');
// opts.innerHTML = `
//               <input name="option" type="radio" id="male" value="${Question[counts].answer[s0]}">
//               <label class="label" for="male">${Question[counts].answer[s0]}</label><br>
//               <input name="option" type="radio" id="male" value="${Question[counts].answer[s1]}">
//               <label class="label" for="male">${Question[counts].answer[s1]}</label><br>
//               <input name="option" type="radio" id="male" value="${Question[counts].answer[s2]}">
//               <label class="label" for="male">${Question[counts].answer[s2]}</label><br>
//               <input name="option" type="radio" id="male" value="${Question[counts].answer[s3]}">
//               <label class="label" for="male">${Question[counts].answer[s3]}</label><br>
//               `
// console.log(Question[counts].answer.length)
// for(let s = 0; s<Question[counts].answer.length; s++){
// var div = document.createElement('INPUT');
// div.setAttribute("type","radio")
// div.setAttribute("class","radioBtns")
// div.setAttribute("name",Question[counts].answer[s])
// div.setAttribute("value",Question[counts].answer[s])
// var option = document.createTextNode(Question[counts].answer[s]);
// div.appendChild(option)
// opts.appendChild(div)

// var li = document.createElement('label');
// li.setAttribute("class","labels")
// li.setAttribute("for",Question[counts].answer[s])
// var option = document.createTextNode(Question[counts].answer[s]);
// li.appendChild(option)
// console.log(li)
// opts.appendChild(li)
// }}