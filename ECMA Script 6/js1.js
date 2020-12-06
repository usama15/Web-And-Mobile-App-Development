//  (1) if else condition 
// var  = +prompt('Enter your percentage');

// if(x >= 80 && x <= 100){
//     alert('A+');
// }
// else if(x >= 70 && x < 80){
//     alert('A');
// }
// else if(x >= 60 && x < 70){
//     alert('B');
// }
// else if(x >= 50 && x < 60){
//     alert('C');
// }
// else if(x >= 40 && x < 50){
//     alert('D');
// }
// else if(x >= 0 && x < 40){
//     alert('Fail');
// }

//  (2) Arrays 
// var fruits = ['Apply', 'Mango', 'Banana'];
// console.log(fruits);

// fruits.push('grapers');    
// console.log(fruits); 

// fruits.unshift('grapers');    
// console.log(fruits); 

// fruits.pop();    
// console.log(fruits); 

// fruits.shift();    
// console.log(fruits); 

// fruits.splice(1, 3, 'grapes');    
// console.log(fruits); 

// var arraySliced = fruits.slice(0, 1)
// console.log(arraySliced); 


//  (3) for loop 
// var x = prompt('enter your city');
// var matchFound = false;
// var cities =['karachi', 'peshawar', 'quetta'];
// cities.push('hyderabad');
// for(var i = 0; i < cities.length; i++){
//     if(x === cities[i]){
//         matchFound = true;
//         alert('better place to live');
//         break;
//     }
// }
// if(x === ''){
//     alert('please enter a value');
// }
// else if(matchFound === false){
//     alert('kindly check your spelling');
// }

//  (4) Nested for loop 
// var firstName = ['muhaymin', 'hassan', 'ilyas', 'tehseen'];
// var lastName = ['khan', 'shah', 'hadi', 'jaweed'];
// var fullName = [];

// for(var i = 0; i < firstName.length; i++){
//     for(var j = 0; j < lastName.length; j += 4){
//         fullName.push(firstName[i] + ' ' + lastName[j] + '<br>')
//     }
// }

// document.write(fullName);

//  (5) diamond pattern in Nested for loop 
// for(var i = 0; i <= 9; i+=2){
//     document.write('<div class="pattern">');
//     for(var j = 0; j <= i; j++){
//         document.write('*');
//     }
//     document.write('<br>')
//     document.write('</div>');
// }
// for(var i = 6; i >= 0; i-=2){
//     document.write('<div class="pattern">');
//     for(var j = i; j >= 0; j--){
//         document.write('*');
//     }
//     document.write('<br>')
//     document.write('</div>');
// }

//  (6) numeric table in javascript 
// var setTable = +prompt('please enter the table');
// for(var i = 0; i <= 10; i++){
//     document.write(setTable + 'x ' + i + '=' + setTable*i + '<br>');
// }



//  (7) Assignments 
//  (7a) alert 
// var user = prompt('please enter your name');
// alert('Hello Mr ' + user + '\nhow are you');

//  (7b) variable for string 
//  (1) 
// var message = 'hello world';
// alert(message);
//  (2) 
// var book = 'A smarter way to learn JavaScript';
// document.write(book);

//  (7c) variable for number 
//  (1) 
// var age = 21;
// alert(age);
//  (2) 
// var birthYear = 1999;
// document.write(birthYear);


//  (7d) variable for number 

// document.write('(a) A heading stating “Rules for naming JS variables.' + '<br>' + 
// '(b) Variable names can only contain $, _, number and letters.' + '<br>' + 
// '(c) Variables must begin with a $name, _name or name.'  + '<br>' + 
// '(d)  Variable names are case sensitive.' + '<br>' + 
// '(e)   Variable names should not be JS Reserved keyword.')


//  (7e) Math Expressions: fimilar operators 

// var message = 'what are you doing ?';


//  (9) Math methods 
//  (9a) round 
// var scoreAvg = 12.12321;
// console.log(Math.round(scoreAvg)); 

//  (9b) ceil 
// var scoreAvg = 12.12321;
// console.log(Math.ceil(scoreAvg)); 

//  (9c) floor 
// var scoreAvg = 12.12321;
// console.log(Math.floor(scoreAvg)); 

//  (9d) random 
// var scoreAvg = Math.random();
// var additionalValue = scoreAvg * 3; 
// var floorMethod = Math.floor(additionalValue); 
// console.log(floorMethod); 


//  (10) covert string to integers 
// var stringValueConverted = +prompt('enter your age');
// var changedStringToNumber = stringValueConverted + 5;
// console.log(changedStringToNumber);


//  (10) covert string to integers 
//  var profit = "200" - '150';
//  console.log(profit);
//  (10a)


//  (11)Date method 

// var dateObj = new Date();
// var month = dateObj.getMonth();
// var year = dateObj.getFullYear();
// var day = dateObj.getDay();
// var date = dateObj.getDate();
// var hours = dateObj.getHours();
// var minutes = dateObj.getMinutes();
// var seconds = dateObj.getSeconds();
// var milliseconds = dateObj.getMilliseconds();
// var time = dateObj.getTime();
// console.log(dateObj);
// console.log('month: ' + month);
// console.log('year: ' + year);
// console.log('day: ' + day);
// console.log('date: ' + date);
// console.log('hours: ' + hours);
// console.log('minutes: ' + minutes);
// console.log('seconds: ' + seconds);
// console.log('milliseconds: ' + milliseconds);
// console.log('time: ' + time);


//  (12) Functions 

// function generateRandom(a){
//         var generate = Math.random() * a;
//     var fixed = Math.floor(generate);
//     var abc = document.getElementById('heading');
//     var h1 = document.createElement('h1');
//     h1.innerHTML = fixed;
//     abc.appendChild(h1);
// }
// generateRandom(300);
// generateRandom(300);

//  (12) get age in Functions 
// function age(){
//     var now = new Date();
//     var born = new Date('June 14, 1999');
//     var nowYear = now.getFullYear();
//     var bornYear = born.getFullYear();
//     var gap = nowYear - bornYear;
//     console.log(gap);
// }
// age();

// var userAge = prompt('Enter your birth year')
// function age(){
//     var now = new Date();
//     var born = new Date(userAge);
//     var nowYear = now.getFullYear();
//     var bornYear = born.getFullYear();
//     var gap = nowYear - bornYear;
//     console.log(gap);
// }
// age();


//  local and globla variable 
// var a = 5;
// function b(){
//     var a = 2;
//     document.write('Local Variable = ' + a + '<br>');
// }
// document.write('Global Variable = ' + a + '<br>');
// b();

//  Switch cases 

// var name = prompt('enter your name');
// switch(name){
//     case "ilyas":
//         alert('hello ' + name);
//         break;
//     case "muhaymin":
//         alert('hello ' + name);
//         break;
//     case "hassan":
//         alert('hello ' + name);
//         break;
//     default : 
//         alert('spelling mistake ' + name);     
// }
    
    
//  while loop 

// var i = 0;
// while(i <= 10){
//     console.log(i);
//     i++
// }
    
//  do while loop 

// var i = 0;
// do{
//     document.write(i);
//     i++;
// }while(i <= 10)


//      do while loop 

//  form validation 
// var signUpForm = document.getElementById('signUp');
// var firstName = document.getElementById('firstName');
// var LastName = document.getElementById('LastName');
// var emailAddress = document.getElementById('emailAddress');
// var number = document.getElementById('number');
// var submit = document.getElementById('submit');
// var print = document.getElementById('print');



// submit.addEventListener('click', function(e){
//     e.preventDefault();
//     var firstNameValue = firstName.value;
//     print.innerText += firstNameValue;
//     console.log(print)
//     if(firstName.value === ''){
//         alert('enter your First Name');
//     }else if(LastName.value === ''){
//         alert('enter your Last Name');
    
//     }else if(emailAddress.value === ''){
//         alert('enter your Email Address');
    
//     }else if(number.value === ''){
//         alert('enter your number');
    
//     }
// })


//  images task 
// function getImg(id){
//     var bigImage = document.getElementById('mainImg');
//     // var bigImage2 = bigImage.src;
//     var bigImage =document.getElementById('mainImg').src = document.getElementById(id).src;
//     console.log(bigImage );
// }


//  get element by tag name 

// var para = document.getElementsByTagName('p');
// var changePara = para[2].innerHTML;
// para[2].innerHTML = 'world hello';


//  get element by tag name only in div 

// var selectId = document.getElementById('lotOfPara');
// var para = selectId.getElementsByTagName('p');

// para[2].innerHTML = 'sadsadsadadads';
//  console.log(para);


//  stopwatch 

//  var hours = document.getElementById('hours');
//  var mins = document.getElementById('mins');
//  var secs = document.getElementById('secs');
//  var startBtn = document.getElementById('start-btn');
//  var resetBtn = document.getElementById('reset-btn');

//  var h, m, s = 0;

//  function timeCounter(){
//      var counter = setInterval(function(){
//          s++;
//          secs.innerText = s <= 9 ? "0" + s : s;
         
//      }, 1000)
//  }
//  function secondsTime(){

//  }
//  function minutesTime(){

//  }
//  function hoursTime(){

//  }
//  function startTime(){
//      timeCounter();
//  }


//  (63) The DOM: Getting a target's name 
//  var element = document.getElementById('container');
//  var selectElementChild = element.firstChild;
//  var ValueOfElement = selectElementChild.nodeName;
//  console.log(ValueOfElement);

//  (64) The DOM: Counting elements 

//  (67) The DOM: Adding nodes 

// var div1 = document.createElement('div');
// var para1 = document.createElement('p');
// para1.innerText = 'sadfjhsadjkfhsdaf';

// div1.appendChild(para1);
// document.body.appendChild(div1);


//  todo list 

// var inputValue = document.getElementById('inputValue');
// var addList = document.getElementById('addList');
// var todoContainer = document.getElementById('todoContainer');
// var liElement = document.createElement('li');
// function editButtonFunction(id){
//         inputValue.value = liElement.innerText;
//     }
    
// function addItems(){
//     console.log(inputValue.value)

//     liElement.innerText = inputValue.value;
//     var liElementID = 'list-item-' + todoContainer.childNodes.length;
//     liElement.setAttribute('id', liElementID);

// var editButton = document.createElement('button');
//     editButton.innerText = 'edit button';
//     editButton.onclick = function(){
//          editButtonFunction(liElementID);
//      }

//  var deleteButton = document.createElement('button');
//      deleteButton.innerText = 'Delete button';
//      todoContainer.appendChild(liElement);
//      liElement.appendChild(editButton);
//      liElement.appendChild(deleteButton);
//      inputValue.value = '';
//  }

//  function Human(name, Fname, age, height){
//      this.name = name;
//      this.Fname = Fname;
//      this.age = age;
//      this.height = height;
//  }

//  var human1 = new Human('muhaymin', 'mehmood', 21, 5.7);
//  var human2 = new Human('Hassan', 'Tufail shah', 19, 5.9);
//  var human3 = new Human('Ilyas', 'Manzoor Ahmed', 20, 5.6);

//  console.log(human1, human2, human3)


// ECMASCRIPT 6

// (1) var, let, const
// (1) var, let (scope of variable)
// (1) var, let (hoisting)
// (2) Arrow function
// (3) spread operators
// (4) template literal 
// (5) object destructuring
// (5) map(give another arrey)
// (6) filter(accept conditions)
// (7) reduce(accept operations)
// (8) find(accept conditions)
// (9) findIndex(accept conditions)

/* hoisting */
// var a = 2;
// var name = () => {
//     console.log(a);
//     var a = 1;
//     console.log(a);
// }
    
    
/* map */
// let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let dataMaping = data.map((data, index, unknown, unknown2) => {
//     return `${data}-${index}-${unknown}-${unknown2}`;
// });
// console.log(dataMaping);
    
    
/* filter */
// let data = ['a1', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let dataMaping = data.filter((data) => {
//     return data === data;
// });
// console.log(dataMaping);

/* reduce */
// let h1Data = document.getElementById('arrData');

// let data = [1, 2, 21, 31, 41, 21, 12, 21];

// let dataMaping = data.reduce((total, currentvalue, index, arr) => {
//     console.log("Total ",total,"Current Value ", currentvalue,"Indexing ", index,"Total Array ", arr)
//     return total+ currentvalue
// });


// Object Create
// const key = prompt("Enter Key here");
// const value = prompt("Enter Value here");
const name = "Tehseen";
const newClass= "6A";
const age = 17;
const Object = {
    name,
    newClass,
    age,
    getnewFunction(){
        return this.newClass
    }
}

// console.log(Object.getnewFunction())
// Object[key+"abj-school"] = value
// console.log(Object)

// ForEach Loop

// const fruits= ['Mango', 'Banana','Apple']
// fruits.forEach((element, i)=>{
//     console.log(element)
// })
// for(fruits in fruits)

for(x in Object){
    console.log(x)
    console.log(Object[x])
}