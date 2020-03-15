// 1st instruction started

// alert('Welcome dear customers');
// alert('Hello, Mr Bean. \n How are you?');
// console.log("Hello, Mr Bean. \n How are you?");

// 1st instruction completed

// 2nd instruction started

// var vari1 = 'My name is Tehseen Jawed';
// var title = "My Name";
// var message = "Hello World";
// alert(message);
// var book = "A smarter way to learn JavaScript ";
// document.write(book);

// 2nd instruction completed

// 3rd instruction started

// var age = "23";
// alert(age);
// var birthYear = "1996";
// document.write(age);

// 3rd instruction completed
// 4th instruction started

// var age = "23";
// alert(age);
// var birthYear = "1996";
// document.write(age);

// 4th instruction completed
// 5th instruction started

// var heading = "Rules for naming JS variables";
// document.write('<h3>', heading, '</h3> <br>');
// document.write('Variable names can contain $vari,_nones,__vari and SETSS <br>');
// document.write('Variables must begin with a uderscore, dollar sign, var, capital letter <br>');
// document.write('Variable names are case scensitive <br>');
// document.write('Variable names should not be JS pre defined variables');

// 5th instruction started

// var vari1;
// document.write("Value after variable declaration is: ", vari1);
// var vari1 = '53';
// document.write("Initial value: ", vari1);
// document.write("<br>Value after increament is : ", vari1);
// document.write("<br>Value after increament is : ", +vari1 + 1);
// var s = +vari1 + 7;
// document.write('<br> Value after addition is : ', s);
// document.write('<br> Value after decrement is : ', s - 1);
// var s = +vari1 % 3;
// document.write('<br> The remainder is : ', s);

// 5th instruction end
// 5th instruction end
// 6th instruction started

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write(--a);
// document.write('<br>', --a - --b);
// document.write('<br>', --a - --b + ++b);
// document.write('<br>', --a - --b + ++b + b--);

// 6th instruction end

// 7th instruction started

// var temp_c = 44;
// document.write(temp_c, '<sup>o</sup>C', ' is ', ((temp_c * 9 / 5) + 32), '<sup>o</sup>F');
// var temp_f = ((temp_c * 9 / 5) + 32);

// document.write("<br>", temp_f, '<sup>o</sup>C', ' is ', ((temp_f - 32) * 5 / 9), '<sup>o</sup>C');

// 7th instruction end

// 8th instruction start

// var user_name = prompt('Enter your name');
// document.write('Welcome '+user_name);

// 8th instruction end

// 9th instruction start

// var gender = prompt('Your Gender');
// if(gender=='male'){
// 	document.write('Good Morning Sir.');
// }
// else if(gender=='female'){
// 	document.write("Good Morning Ma'am.");
// }
// var character = prompt('Enter your character');
// if(character=='a' || character=='e' || character=='i' || character=='o' || character=='u'){
// 	document.write("True");
// }
// else{
// 	document.write('False');
// }
// 9th instruction end

// 10th instuction start

// var color= prompt('Enter Traffic Signal Color');
// if (color == 'red') {
// 	document.write('Mush stop');
// }
// else if (color == 'yellow') {
// 	document.write('Ready to move');
// }
// else if (color == 'green') {
// 	document.write('Move now');
// }

// 10th instuction end

// 11th instuction start

// var number = +prompt('Enter your number');
// if (number<0) {
// 	document.write('Number is negative')
// }
// else if (number>0) {
// 	document.write('Number is positive')
// }
// else if(number==0) {
// 	document.write('Number is zero')
// }
// var pass = '12345'
// var user_pass = prompt('Password');
// if(user_pass==''){
// 	document.write('Please enter your password');
// }
// else{
// 	if(pass == user_pass){
// 		document.write('Correct! The password you entered matches the original password')
// 	}
// 	else{
// 		document.write('Incorrect password');
// 	}
// }

// 11th instuction end
// 12th instuction start

// var time = prompt('Enter time');
// if(time >=0000 && time<1200){
// 	document.write('Good Morning');
// }
// else if(time >=1200 && time <1700){
// 	document.write('Good Afternoon');
// }
// else if(time >=1700 && time <2100){
// 	document.write('Good Evening');
// }
// else if(time >=2100 && time <2359){
// 	document.write('Good Night');
// }

// 12th instuction end

// 13th instuction start

// var student=[];
// var student_score=[];
// for(a=0; a<3; a++){
// 	var stu = prompt('Enter Student '+a);
// 	var stu_score = prompt('Enter Student '+a+' score.');
// 	student.push(stu);
// 	student_score.push(stu_score);
// }
// for(a=0; a<3; a++){
// 	document.write('Score of '+student[a]+' is '+student_score[a]+'. Percentage: '+(student_score[a]*100)/500+'%');
// }

// 13th instuction end

// 14th instuction start

var colors = [];
// var begin_color = prompt("Enter color that you want to store in beginning of array");
// var end_color = prompt("Enter color that you want to store in end of the array");
// colors.unshift(begin_color)
// document.write(colors, "<br>");
// colors.push(end_color);
// document.write(colors, "<br>");
// colors.splice(0, 0, "orange", "purple");
// document.write(colors, "<br>");
// colors.shift();
// document.write(colors, "<br>");
// colors.pop();
// document.write(colors, "<br>");
// var color_index = +prompt('Enter insert Index');
// var index_color = prompt("Enter insert color");
// colors.splice(color_index, 0, index_color);
// document.write(colors);
// var color_index = +prompt('Enter delete Index');
// var color_num = +prompt('Enter delete Numbers');
// colors.splice(color_index, color_num);
// document.write(colors);

// 2

// var cities = ['New Mexico', 'Washingtop DC', 'New York'];
// var selected_cities = [];
// for (var a = 0; a <= 2; a++) {

//     selected_cities.push(cities[a]);
// }
// document.write(selected_cities);
// 3

var top_cities = [
    ['Pakistan', ['Karachi', 'Hyderabad', 'Pishawar', 'Quetta']],
    ['United States', ['New York', 'New Jersey', 'Washington DC']],
    ['India', ['Dehli', 'Mumbai', 'Hyderabad', 'Bhawal nagar']],
]

// 14th instuction end

// 15th instuction start

// var table = +prompt('Enter your table format');
// var length =+prompt('Enter your table Length');
// for(a=1; a<length+1; a++){
//     document.write(table+" x "+a+" = "+table*a+"<br>");
// }
// document.write("<br>Counting: ");
// for(a=1; a<=length; a++){
// 	document.write(a+", ");
// }
// document.write("<br>Reverse counting: ");
// for(a=10; a>=1; a-=1){
// 	document.write(a+", ");
// }
// document.write("<br>Even: ");
// for(a=0; a<=length; a++){
// 	if(a%2==0){
// 	document.write(a+", ");
// 	}
// }
// document.write("<br>Odd: ");
// for(a=0; a<=length; a++){
// 	if(a%2!=0){
// 	document.write(a+", ");
// 	}
// }
// document.write("<br>Series: ");
// for(a=0; a<=length; a++){
// 	if(a%2==0){
// 	document.write(a+"k, ");
// 	}
// }
// var fruits =['apple', 'orange', 'banana', 'graps', 'mango'];
// var stop = +prompt('Enter Stop Index');
// for(a=0; a<=stop; a++){
// 	document.write(fruits[a]+",  ")
// }

// 15th instuction end

// 16th instuction start

// var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var search = prompt('Search item');
// for(a=0; a<=items.length-1; a++){
// 	if(search==items[a]){
// 		document.write('Item is in the array');
// 	}
// }
// 16th instuction end
// 17th instuction start

// var number = [24,53,78,91,12];
// var largest =0;
// for(a=0;a<number.length;a++){
// 	for(v=0;v<number.length;v++){
// 		if(number[a]>number[v]){
// 			largest=number[a];

// 		}
// 	}
// }
// document.write("Largest Number "+largest+"<br>");
// for(a=0;a<number.length;a++){
// 	for(v=0;v<number.length;v++){
// 		if(number[a]<number[v]){
// 			largest=number[a];

// 		}
// 	}
// }
// document.write("Smallest Number "+largest+"<br>");
// 17th instuction end

// 1st challenge start

// for(a=7; a>=0; a--){
// 	for (b=a; b>=0; b--) {
// 		document.write('*');
// 	}
// 	document.write('<br>')
// }

// 1st challenge end

// 2nd challenge start

// a

// for(a=4; a>=0; a--){
// 	for (b=4; b>=0; b--) {
// 		document.write('*');
// 	}
// 	document.write('<br>')
// }

// b

// for(a=0; a<=4; a++){
// 	for (b=0; b<=a; b++) {
// 		document.write('*');
// 	}
// 	document.write('<br>')
// }

// c

// for(a=5; a>=0; a--){
// 	for (b=a; b>=0; b--) {
// 		document.write('*');
// 	}
// 	document.write('<br>')
// }

// d

// for (a = 0; a <= 11; a++) {
//     for (b = 0; b <= a; b++) {
//         document.write('*');
//     }
//     document.write('<br>')
// }
// for (a = 10; a >= 0; a--) {
//     for (b = a; b >= 0; b--) {
//         document.write('*');
//     }
//     document.write('<br>')
// }

// 2nd challenge end