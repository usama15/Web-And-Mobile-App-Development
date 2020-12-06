// Object Destructuring
// const user1 = {
//     id:2,
//     name:'Tehseen',
//     age:19
// }
// const {id, name} = user1;
// console.log(name)

// Feature Template
// const info={
//     name:'Tehseen',
//     profession:'Developer'
// }
// const {name, profession} = info
// let result = `My name is ${name} and i am a ${profession}`;
// console.log(result)

// Spread Operator
// const user2 ={
//     ...user1,
//     address:'abcd road karachi',
//     phone:'25145'
// }
// console.log(user2)

//Arrow Function
// const addition = (a,b) =>{
//     console.log(a+b)
// }
// addition(5,10);

// const Func = (a) => a+3;
// console.log(Func)
// const Func1 = a => a+3;
// console.log(Func1)

// Rest Perameter
// function getData(a, ...rest){
//     console.log(a,rest)
// }
// getData(1,5,8,9,10)

// Rest Reduce
// function getData( ...rest){
//     return rest.reduce((a,b) => a+b)
// }
// console.log(getData(1,2,3))

// Block Scope
// let and const works on block scope
// It cannot use outside curley braces of any thing
// var can be excessable outside curley braces of anything but not outside function
// function setVariable(){
//     var a= 5;
//     if(a==5){
//         let g = 51; //cannot use outside curley braces of if
//         const h = 10; //cannot use outside curley braces of if
//     }
//     console.log(g)  //error
// }

// Mapping
// const items = ["a", "b", "c", "d"];
// const list2 = items.map((item, i) => {
  // console.log(item);
// });
// const identity1 = [
//   { id: 1, name: "Tehseen Jawed", nationality: "Pakistani" },
//   { id: 2, name: "Junaid", nationality: "Uganda" },
// ];
// const identity4 = {
//   0: { id: 1, name: "Tehseen Jawed", nationality: "Pakistani" },
//   1: { id: 2, name: "Junaid", nationality: "Uganda" },
// };
// const identity2 = {
//   0: [1, "Tehseen", "Pakistani"],
//   1: [2, "Junaid", "Uganda"],
// };
// const identity3 = [
//   [1, "Tehseen", "Pakistani"],
//   [2, "Junaid", "Uganda"],
// ];
// const newvar =identity1.map(eachItem =>{
//     return eachItem.name
// })
// const newIdentity3 =identity3.map(eachItem =>{
//     return eachItem
// })
// console.log(newIdentity3[0])