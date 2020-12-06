var msec = 0;
var sec  = 0;
var min  = 0;
var set_msec = document.getElementById('msec')
var set_sec = document.getElementById('sec')
var set_min = document.getElementById('min')

var interval;
function timer(){
    msec++
    set_msec.innerHTML = msec
    if(msec>= 99){
        sec++;
        set_sec.innerHTML = sec
        msec = 0;
    } 
    else if(sec==60){
        min++
        set_min.innerHTML = min
        sec = 0
    }
}
function start(){
    interval = setInterval(timer, 10)
    var startbtn = document.getElementById('start');
    startbtn.disabled = true
}
function stop(){
    clearInterval(interval)
}
function reset(){
    var msec = 0;
    var sec  = 0;
    var min  = 0;
    set_msec.innerHTML= msec;
    set_min.innerHTML= sec;
    set_sec.innerHTML= min;
    console.log('sssssss')
}