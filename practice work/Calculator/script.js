var Display = document.getElementById('subScreen')
var Screen = document.getElementById('Screen')
function sendValue(number){
    Display.innerHTML += number
}
function reset(){
    Display.innerHTML = ""
    Screen.innerHTML = 00
}
function Calculate(){
    console.log(Display.innerHTML)
    Screen.innerHTML = eval(Display.innerHTML)
        if(Screen.innerHTML.length >= 8){
            Screen.innerHTML = Screen.innerHTML.slice(0,5)
        }
    Display.innerHTML ='';
}