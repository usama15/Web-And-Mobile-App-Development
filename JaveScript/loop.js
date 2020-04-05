// for(a=0; a==null; a++){
//     console.log('Print Value')
// }
// var a = []
// for(z=0; z<100; z++){
//     a.push(z);
// }
// console.log(a)

// Third Task
// var cities=['Karachi', 'Hyderabad', 'Islamabad', 'Multan', 'Kashmir']
// var user = prompt('Cities','Kindly Enter Your City Here')
// var valid_input = 'no'
// for(var index = 0; index< cities.length; index++){
//     if(user == cities[index]){
//         valid_input = 'yes'
//     }
// }
// if(valid_input == 'yes'){
//     console.log('Jannati')
// }
// else{
//     console.log('Dozakhi')
// }

// var user_name = prompt('Your Name')
// var user_father = prompt('Your Father Name')
// var user_qualification = prompt('Your Qualification')
// var details = []
// details.push('Your Name '+user_name, 'Your Father Name '+user_father, 'Your Qualification '+user_qualification)
// for(var a=0; a<details.length; a++){
//     console.log(details[a])
// }

var val1 = +prompt('Number 1')
var val2 = +prompt('Number 2')
var opr  = prompt('Enter Your Operation')
if(opr == '+'){
    console.log(val1+val2)
}
else if(opr == '-'){
    console.log([val1-val2])
}
else if(opr == '*'){
    console.log(val1*val2)
}
else if(opr == '/'){
    console.log(val1/val2)
}