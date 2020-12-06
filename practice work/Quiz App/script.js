var container = document.getElementById("container");
var startQuizBtn = document.getElementById("start-quiz-btn");
var result = document.getElementById("result");
var answers = [];

function Question(question, options, correctOption){
    this.question = question;
    this.options = options;
    this.correctOption = correctOption;
}
var questions = [
    new Question("Capital of Pakistan", ['Karachi', 'Lahore', 'Islamabad', 'Pishawar'], 2),
    new Question("National Fruit", ['Mango', 'Apple', 'Grapes', 'Banana'], 0),
    new Question("National Language", ['French', 'English', 'Arabic', 'Urdu'], 3),
    new Question("Favourite Programming Language", ['JavaScript', 'Python', 'C++', 'Fortran'], 0),
    new Question("HTML Full Form", ['Hyper text language', 'Hypertext Markup Language', 'Hyper Language', 'Hypertext Markdown Language'], 1),
]
function submitQuiz(){
    var correctAnsCount = 0;
    for(var i = 0; i < answers.length; i++){
        if(answers[i]){
            correctAnsCount++;
        }
    }
    result.innerText = "Result: "+ correctAnsCount + "/"+ questions.length;
}

function selectAnswer(elem){
    var selectedOption = elem.target.value;
    var selectionOptionId = elem.target.id;

    var isCorrect = questions[+selectionOptionId.split('_')[1]].correctOption == selectedOption;
    answers.push(isCorrect);
}

function startQuiz(){
    for(var i = 0; i < questions.length; i++){
        var questionText = questions[i]['question'];
        var quesOptions  = questions[i]['options'];
        var listItem = document.createElement('li');

        var questionTitle = document.createElement('h3');
        questionTitle.innerText = questionText;

        listItem.appendChild(questionTitle)

        for(var j = 0; j < quesOptions.length; j++){
            var radioElement = document.createElement('input');
            var elemId = 'option_'+ i +"_"+j;

            radioElement.setAttribute('id',elemId);
            radioElement.setAttribute('type', 'radio');
            radioElement.setAttribute('name', 'question'+i);
            radioElement.setAttribute('value',j);

            var radioLabel = document.createElement("label");
            radioLabel.setAttribute("for", elemId)

            radioElement.onclick = selectAnswer;

            var optionText = document.createTextNode(quesOptions[j]);
            radioLabel.appendChild(optionText);
            listItem.appendChild(radioElement);
            listItem.appendChild(radioLabel);
        }
        container.appendChild(listItem);
    }
    startQuizBtn.innerText = "Submit";
    startQuizBtn.onclick = submitQuiz;
}