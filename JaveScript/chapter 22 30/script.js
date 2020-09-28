// var text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum cumque esse beatae provident, sunt rem? Praesentium nulla placeat molestias autem adipisci fugit exercitationem nisi minima, repellendus molestiae fugiat non excepturi.'

// console.log(text.indexOf('consectetur'))
// console.log(text.replace('consectetur','Pakistan'))

// var value = 25.015;
// var value = value.toString()
// if(value.charAt(value.length -1)==='5'){
//     console.log('i am working')
//     value = value.slice(0,value.length-1)+'8';
// }
// value = Number(value)
// console.log(value)
var data = new Date().getTime()
console.log(new Date(data))
var days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
var months = ['Jan','Feb', 'Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
document.write(days[new Date().getDay(days)],"//: ",new Date().getDay(),"<sup>st</sup>","/",months[new Date().getMonth(months)],"/",new Date().getFullYear())


// var data = [
//     {id:1,name:'Tehseen'},
//     {id:2,name:'Jawed'}
// ]

// function getData(){
//     var promise = new Promise((resolve, reject)=>{
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(function(result){
//             console.log("ffff")
//             resolve(result)
//         })
//         .catch((error)=>{
//             reject(error)
//         })
        
//     })
//     promise
//     .then(function(result){
//         console.log("result" ,result)
//     }).catch(function (error){
//         console.log("error" ,error)

//     })
// }