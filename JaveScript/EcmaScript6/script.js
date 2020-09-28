//     Variables
// const prize="Electric Motor Car"
// let prize="Electric Motor Car"

//     Template Literals
// let firstName='Tehseen'
// let lastName='Jawed'
// document.write(`My complete name is ${firstName} ${lastName}`)

//     Spread Operator

// const set1 = ['Muhammad Ali Mughal', 'Junaid Jamshed']
// const set2 = ['Sikandar Mishra', 'Bill Gates']
// const joinArray=[...set1,...set2] 
// console.log(joinArray)

//     Object Destructuring

// var obj = {
    //     name:'Tehseen',
//     age:21,
//     school:'ILMA University',
//     program:'BS-CS'
// }
// let{age,program} = obj;
// console.log(age,program)

//     Ternary Operators

// const time = 'night';
// var setTime = time =='day' ? 'Welcome to my home at day time': 'Get Out! Its night'
// console.log(setTime)

// const time = 'day';
// const hour = 4;
// var setTime = time =='day' && hour <= 6 ? 'Welcome to my home at day time': 'Get Out! Its night'
// console.log(setTime)

// var flag = false
// const name = flag && 'Tehseen'
// console.log(name)

//     Sync || Async


// setTimeout(() => {
//     console.log('Priority 1')
    
// }, 500);
// console.log('Priority 2')

// console.log('Priority 3')
var requirement = +prompt('Enter your percentage')
var promise = new Promise((resolve, reject)=>{
    if(requirement>=70){
        resolve('Londa Pass ho gya')
    }
    else{
        reject('Nikal Nalaik! Fail hai tu')
    }
})

promise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})